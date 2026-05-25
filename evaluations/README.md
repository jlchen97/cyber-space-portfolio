# Evaluations

Automated bi-daily reviews of the cyber-space-portfolio codebase.

A scheduled task runs every 2 days at 7:00 AM local time, scans the entire software stack, and drops a dated report in this folder.

## What each review covers

Comprehensive scan across these dimensions:

1. **Performance** — bundle size, image strategy, lazy-loading, font loading, third-party scripts, render-blocking work, route-level cost
2. **UI / UX** — visual hierarchy, motion, interaction affordances, mobile experience, dark-mode contrast, micro-copy
3. **Accessibility (a11y)** — keyboard nav, focus states, ARIA, color contrast, `prefers-reduced-motion`, alt text, semantic structure
4. **SEO & metadata** — title/description, OpenGraph, Twitter cards, structured data, sitemap, robots, canonical URLs, social previews
5. **Code quality** — TypeScript strictness, dead code, duplicated patterns, component boundaries, data layer hygiene
6. **Dependencies & security** — outdated packages, known CVEs, unused deps, bundle bloat from heavy libs
7. **Resilience** — error boundaries, loading states, 404/empty states, offline behavior, broken-link risk

## Output format

Each report is suggestions only — no code is auto-modified. Files are named:

```
evaluations/YYYY-MM-DD-review.md
```

Inside each report, recommendations are tagged by priority:

- `[P0]` Ship-blocker — broken or actively harmful
- `[P1]` High-impact — meaningful UX or perf win, low effort
- `[P2]` Nice-to-have — polish, small wins, longer-term
- `[Idea]` Speculative — worth considering, not urgent

The reviewer is encouraged to skip rather than repeat findings already captured in earlier reports unless something has changed.
