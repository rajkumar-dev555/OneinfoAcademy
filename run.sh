#!/bin/bash
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
npm run build
aws s3 sync out/ s3://oneinfoacademy.com --delete --profile anisto
aws cloudfront create-invalidation --distribution-id E6L505U7SATEO --paths "/*" --profile anisto
echo "Deployed to https://oneinfoacademy.com"
echo "If inner pages still show the homepage, run once: bash scripts/fix-cloudfront-routing.sh"
