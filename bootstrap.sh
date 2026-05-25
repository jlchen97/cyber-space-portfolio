#!/usr/bin/env bash
# One-shot bootstrap: clear stale git lock, commit pending work, create the
# GitHub repo under jlchen97, and push. Safe to re-run — every step is
# idempotent or skipped if already done.
#
# Run from inside the project folder:
#   bash bootstrap.sh
set -e

cd "$(dirname "$0")"

REPO="jlchen97/cyber-space-portfolio"
DEFAULT_BRANCH="main"

echo "==> Clearing any stale git lock"
rm -f .git/index.lock

echo "==> Configuring git user (local to this repo only)"
git config user.email "cjian1997@gmail.com"
git config user.name "Jian Chen"

echo "==> Staging changes"
git add -A

if git diff --cached --quiet; then
  echo "    (nothing to commit — working tree already clean)"
else
  echo "==> Committing"
  git commit -m "Perf, SEO, and viewport gating

- Migrate <img> -> next/image across the 4 pages (8 image sites)
  - Detail-page hero images get priority; cards + gallery lazy-load
  - 'sizes' hints provided so Next picks the right AVIF/WebP candidate
- next.config.ts: add images.formats = ['image/avif', 'image/webp']
- app/layout.tsx: extend metadata with metadataBase, openGraph, twitter,
  robots, title template, alternates.canonical
- app/opengraph-image.tsx: on-brand share card via ImageResponse
  (no static asset; reads NEXT_PUBLIC_SITE_URL at request time)
- app/sitemap.ts: enumerate static routes + experience/project slugs,
  hidden hyperloop comp entries filtered out
- app/robots.ts: allow-all + sitemap pointer
- components/ui/lazy-spline.tsx: new wrapper that mounts SplineScene only
  when its container intersects the viewport (rootMargin 200px)
- app/page.tsx: brain Spline now goes through LazySpline; landing-hero
  robot stays eager since it's above the fold
- components/ui/cobe-globe.tsx: pause the rAF loop entirely when the
  canvas leaves the viewport; resume on re-entry. Also drop two now-
  unused @ts-expect-error directives (React 19 types know CSS Anchor
  Positioning)
- evaluations/: new folder + baseline review for the scheduled bi-daily
  audit job"
fi

if git remote get-url origin >/dev/null 2>&1; then
  echo "==> 'origin' remote already set: $(git remote get-url origin)"
else
  if command -v gh >/dev/null 2>&1; then
    echo "==> Creating GitHub repo $REPO and pushing (via gh)"
    # gh repo create handles: create on GitHub, add origin, push branch
    gh repo create "$REPO" --public --source=. --remote=origin --push
    echo "✓ Done."
    exit 0
  else
    echo
    echo "✗ gh CLI not found, and no 'origin' remote is configured."
    echo
    echo "Two options:"
    echo
    echo "  A) Install gh, then re-run this script:"
    echo "       brew install gh"
    echo "       gh auth login"
    echo "       bash bootstrap.sh"
    echo
    echo "  B) Create the repo manually at https://github.com/new"
    echo "     (Owner: jlchen97, Name: cyber-space-portfolio, Public, no README/.gitignore/license)"
    echo "     then run:"
    echo "       git remote add origin https://github.com/$REPO.git"
    echo "       git branch -M $DEFAULT_BRANCH"
    echo "       git push -u origin $DEFAULT_BRANCH"
    exit 1
  fi
fi

echo "==> Pushing to origin"
git branch -M "$DEFAULT_BRANCH"
git push -u origin "$DEFAULT_BRANCH"
echo "✓ Done."
