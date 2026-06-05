#!/bin/bash
# Fix S3+CloudFront serving homepage for all routes (403 → / rewrite).
set -euo pipefail

PROFILE="${AWS_PROFILE:-anisto}"
DIST_ID="${CLOUDFRONT_DIST_ID:-E6L505U7SATEO}"
FUNC_NAME="oneinfo-uri-rewrite"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "→ Publishing CloudFront Function: $FUNC_NAME"
ETAG=$(aws cloudfront describe-function --name "$FUNC_NAME" --profile "$PROFILE" 2>/dev/null | jq -r '.ETag // empty' || true)

if [ -z "$ETAG" ] || [ "$ETAG" = "null" ]; then
  ETAG=$(aws cloudfront create-function \
    --name "$FUNC_NAME" \
    --function-config "Comment=Rewrite paths to index.html for Next.js static export,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://${ROOT}/infra/cloudfront-uri-rewrite.js" \
    --profile "$PROFILE" \
    --query ETag --output text)
else
  ETAG=$(aws cloudfront update-function \
    --name "$FUNC_NAME" \
    --if-match "$ETAG" \
    --function-config "Comment=Rewrite paths to index.html for Next.js static export,Runtime=cloudfront-js-2.0" \
    --function-code "fileb://${ROOT}/infra/cloudfront-uri-rewrite.js" \
    --profile "$PROFILE" \
    --query ETag --output text)
fi

PUB_ETAG=$(aws cloudfront publish-function --name "$FUNC_NAME" --if-match "$ETAG" --profile "$PROFILE" --query 'FunctionSummary.Status' --output text)
echo "   Function status: $PUB_ETAG"

FUNC_ARN=$(aws cloudfront describe-function --name "$FUNC_NAME" --profile "$PROFILE" --stage LIVE --query 'FunctionSummary.FunctionMetadata.FunctionARN' --output text)
echo "→ Updating distribution $DIST_ID"

TMP=$(mktemp)
aws cloudfront get-distribution-config --id "$DIST_ID" --profile "$PROFILE" > "$TMP"
ETAG_DIST=$(jq -r '.ETag' "$TMP")

jq --arg arn "$FUNC_ARN" '
  .DistributionConfig.CustomErrorResponses = {"Quantity": 0, "Items": []} |
  .DistributionConfig.DefaultCacheBehavior.FunctionAssociations = {
    "Quantity": 1,
    "Items": [{
      "FunctionARN": $arn,
      "EventType": "viewer-request"
    }]
  }
' "$TMP" | jq '.DistributionConfig' > "${TMP}.config"

aws cloudfront update-distribution \
  --id "$DIST_ID" \
  --if-match "$ETAG_DIST" \
  --distribution-config "file://${TMP}.config" \
  --profile "$PROFILE" \
  --query 'Distribution.Status' --output text

rm -f "$TMP" "${TMP}.config"
echo "✓ CloudFront update submitted (deploy may take 5–15 min). Then invalidate: aws cloudfront create-invalidation --distribution-id $DIST_ID --paths '/*' --profile $PROFILE"
