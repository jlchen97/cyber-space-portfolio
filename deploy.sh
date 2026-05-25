#!/usr/bin/env bash
# Link this project to Vercel (creating it under your personal scope if it
# doesn't exist), deploy to production, capture the URL it lands on, then
# set NEXT_PUBLIC_SITE_URL to that URL and redeploy so the metadata,
# sitemap.xml, robots.txt, and OpenGraph card all reference the real origin.
#
# Run from inside the project folder, AFTER bootstrap.sh has pushed to GitHub:
#   bash deploy.sh
#
# Requires:
#   - vercel CLI (npm i -g vercel) and you to be logged in (vercel login)
#   - GitHub push already done (so Vercel can connect the repo)
set -e

cd "$(dirname "$0")"

PROJECT_NAME="cyber-space-portfolio"

if ! command -v vercel >/dev/null 2>&1; then
  echo "✗ vercel CLI not found. Install with: npm i -g vercel"
  exit 1
fi

echo "==> Linking project to Vercel (creating if needed)"
# --yes accepts defaults: personal scope, project name from folder.
# If you have multiple Vercel teams and want this in a team, run
# 'vercel link --scope=<team-slug>' manually instead.
vercel link --yes --project="$PROJECT_NAME"

echo "==> First production deploy (without NEXT_PUBLIC_SITE_URL — uses placeholder)"
# Capture the deploy URL on stdout. vercel --prod prints the canonical URL.
DEPLOY_URL=$(vercel --prod --yes | tail -n 1 | tr -d '[:space:]')
echo "    Deployed to: $DEPLOY_URL"

if [[ -z "$DEPLOY_URL" || "$DEPLOY_URL" != https://* ]]; then
  echo "⚠ Could not parse deploy URL. Check 'vercel ls' and set NEXT_PUBLIC_SITE_URL manually:"
  echo "    vercel env add NEXT_PUBLIC_SITE_URL production"
  echo "    vercel --prod --yes"
  exit 1
fi

echo "==> Setting NEXT_PUBLIC_SITE_URL=$DEPLOY_URL for production"
# Remove any existing value first so 'env add' doesn't error. The 'rm' will
# no-op gracefully if it isn't set yet.
vercel env rm NEXT_PUBLIC_SITE_URL production --yes 2>/dev/null || true
echo "$DEPLOY_URL" | vercel env add NEXT_PUBLIC_SITE_URL production

echo "==> Redeploying so metadata/sitemap/robots/og pick up the real URL"
FINAL_URL=$(vercel --prod --yes | tail -n 1 | tr -d '[:space:]')

echo
echo "✓ Live at: $FINAL_URL"
echo
echo "Sanity checks:"
echo "  curl -sI $FINAL_URL | head -5"
echo "  open $FINAL_URL/sitemap.xml"
echo "  open $FINAL_URL/robots.txt"
echo "  open $FINAL_URL/opengraph-image"
echo
echo "To connect a custom domain later:"
echo "  vercel domains add <your-domain.com>"
echo "  vercel alias set $FINAL_URL <your-domain.com>"
