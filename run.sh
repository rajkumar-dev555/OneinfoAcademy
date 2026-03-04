#!/bin/bash
npm run build && aws s3 sync dist/ s3://oneinfoacademy.com --delete --profile anisto && aws cloudfront create-invalidation --distribution-id E6L505U7SATEO --paths "/*" --profile anisto