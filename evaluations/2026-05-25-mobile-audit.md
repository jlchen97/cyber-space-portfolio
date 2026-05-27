# Cyber-Space Portfolio — Mobile-First Audit

**Date:** 2026-05-25
**Scope:** Mobile breakpoints only (375px – 430px viewports). Desktop layout not assessed.
**Reviewer:** Manual code audit with mobile lens, after live deploy.

Severity tagging:
- `[P0]` — Mobile site is broken or unusable without this
- `[P1]` — Significantly degrades the mobile experience
- `[P2]` — Polish; site works but feels rough
- `[Idea]` — Speculative improvement

---

## P0 — Mobile site is currently broken without these

### `[P0]` Top navigation has no mobile menu

**Files:** `app/page.tsx:61`, `app/projects/page.tsx:40`, `app/experience/page.tsx:122`, `app/projects/[slug]/page.tsx:124`, `app/experience/[slug]/page.tsx:57`

Every page has:
```tsx
<div className="hidden md:flex gap-10 items-center justify-center">
  {NAV_LINKS.map(...)}
</div>
```

On viewports below `md` (768px), the link group is completely hidden — and there's no hamburger, no sheet, no overflow menu, no replacement of any kind. The only thing in the mobile header is the "Jian Chen" logo. **A visitor on an iPhone cannot navigate to Experience, Projects, or Contact from the header.** Only in-page anchors or the footer get them around.

**Fix:** Add a hamburger button (visible only below `md`) that opens a slide-down or sheet with the same `NAV_LINKS`. Headless UI is probably overkill — a `<details>`/`<summary>` or a controlled `useState` + portal is enough for 5 links. Since 4 pages share this nav code, factor it into a `components/ui/site-nav.tsx` component first; then add the mobile menu in one place.

---

## P1 — Significantly degrades mobile experience

### `[P1]` `GlowyWavesHero` never pauses — runs `requestAnimationFrame` forever

**File:** `components/ui/glowy-waves-hero.tsx`

The canvas-based hero on `/projects` sizes itself to `window.innerWidth/innerHeight` and animates 5 sine waves continuously via `requestAnimationFrame`. There's no IntersectionObserver gate, so as soon as the page loads, it runs forever — even when the user has scrolled all the way down through the project archive. On a phone this drains battery, keeps the CPU hot, and (because the canvas is `min-h-screen`) frequently sits behind other content fully obscured but still drawing.

This is the same problem we already fixed for `cobe-globe.tsx` and `lazy-spline.tsx`. Apply the same pattern here.

**Fix:** Wrap the `animate()` rAF loop with an IntersectionObserver. When the canvas leaves the viewport, cancel the next frame and exit the loop; when it re-enters, restart. Also short-circuit when `prefers-reduced-motion: reduce` is set (currently honored only for amplitude tuning — should fully disable the rAF).

### `[P1]` Detail-page hero `min-h-[640px]` eats the entire viewport on small phones

**Files:** `app/projects/[slug]/page.tsx:156`, `app/experience/[slug]/page.tsx:89`

```tsx
<section className="relative min-h-[640px] md:min-h-[720px] flex flex-col justify-end ...">
```

iPhone SE viewport is 667px tall. After the fixed 96px nav, only 571px of usable height remains — and the hero claims 640px. The user sees nothing but the hero photo + title on first paint; everything else (objectives, sections, metrics) is below the fold and requires scroll.

**Fix:** Use a smaller mobile min-height with `dvh` units to handle browser chrome correctly: `min-h-[60dvh] md:min-h-[720px]`. (`dvh` accounts for the iOS URL bar's expand/collapse so the hero doesn't jump when scrolling.) Alternatively `min-h-[480px] md:min-h-[720px]` — a tested value.

### `[P1]` Landing hero `h-[calc(100vh-7rem)] min-h-[600px]` has the same fold problem

**File:** `app/page.tsx:81`

```tsx
<Card className="w-full h-[calc(100vh-7rem)] min-h-[600px] ...">
```

On iPhone SE (667px), `100vh - 7rem` = 555px, but the `min-h-[600px]` overrides — so the hero card is taller than the viewport. The "VIEW EXPERIENCE / OPEN CHANNEL" CTAs may be cut off, depending on how the inner `flex flex-col md:flex-row` distributes vertical space (text on top, robot on bottom on mobile means robot may be entirely below the fold).

**Fix:** `min-h-[520px] md:min-h-[600px]` and switch `100vh` → `100dvh`. Also consider making the robot section shorter on mobile (its `min-h-[300px]` plus the text section means the card needs ~700-800px to look right when stacked).

### `[P1]` Brain section overlay positioning is calibrated for desktop only

**File:** `app/page.tsx:187-225`

The Professional section uses an `aspect-square max-w-5xl` container with absolute-positioned title (`-translate-y-12 md:-translate-y-16`) above the brain canvas and body text (`pb-8 md:pb-16`) overlapping the bottom. On desktop the square is ~960px wide; on mobile it's ~342px wide (390px viewport minus gutter). The translate offsets that look clean at 960px cause:
- The title to lift fully out of the square's top edge
- The body text to crash into the brain canvas
- The brain canvas itself to look squished (it's loaded as a square scene assuming desktop proportions)

**Fix:** Restructure for mobile: drop the absolute overlay approach below `md`, stack title → brain → body normally with proper vertical spacing. Or simpler: skip the brain Spline entirely on mobile (it's decorative) — render just the title + body in a clean stacked layout. The lazy-spline gate makes this trivial — guard with `hidden md:block` on the Spline container.

### `[P1]` Fixed nav `glass-panel` recomposites every scroll frame on iOS

**File:** `app/globals.css:157-161`, used by all nav bars

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

`backdrop-filter: blur(20px)` is GPU-expensive, especially when applied to a `position: fixed` element that has to repaint as content scrolls behind it. On older iPhones (SE, 11, 12), this causes visible scroll jank — frames drop noticeably.

**Fix:** Either reduce blur on mobile (`backdrop-filter: blur(8px)` below `md` via a media query in `globals.css`), or fall back to a solid translucent color when `backdrop-filter` would cost too much. Sample:

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
@media (max-width: 767px) {
  .glass-panel {
    background: rgba(19, 19, 19, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
}
```

### `[P1]` Landing-hero robot Spline (`SPLINE_SCENE`) loads eagerly on mobile

**File:** `app/page.tsx:166`, uses `<SplineScene>` directly (not `<LazySpline>`)

Above-the-fold + eager-loading made sense on desktop. On mobile the robot is in the bottom half of the stacked hero (after the headline + CTAs), and on a slow connection it blocks LCP unnecessarily. Even on fast connections, the WebGL init is ~400ms of main-thread work.

**Fix:** On mobile, swap the robot for a static image fallback (or hide it). Two options:
- (a) Wrap the robot in a `hidden md:block` and replace with a lightweight static SVG/PNG below `md`
- (b) Keep `<SplineScene>` but show a poster image until the scene loads (Spline supports a `placeholder` slot via Suspense fallback — we already wire one in `splite.tsx`, just make the fallback an `<Image>` instead of the spinner on mobile)

---

## P2 — Polish

### `[P2]` Global gutter `1.5rem` (24px) is tight on small phones

**File:** `app/globals.css:112`, `--spacing-gutter: 1.5rem`

24px of side padding on a 375px viewport leaves 327px of content width — fine for text, tight for the cobe globe legend (4 rows of company names + locations) and the project card hero images. Most mobile-first sites use 16px or 20px below `sm`.

**Fix:** Add a responsive override:
```css
@theme { --spacing-gutter: 1rem; }
@media (min-width: 640px) { :root { --spacing-gutter: 1.5rem; } }
```

### `[P2]` Experience cards have `p-8` (32px padding)

**File:** `app/experience/page.tsx:269`

On a 343px-wide card (after gutter), 32px × 2 = 64px of padding leaves 279px for content. The role + tags chips wrap awkwardly. `p-6` (24px) on mobile gives ~295px content width with better proportions.

**Fix:** `p-6 md:p-8` on the card body.

### `[P2]` Section vertical gaps (`space-y-24` / `py-24`) are oversized for mobile

**Files:** `app/projects/page.tsx:110`, `app/projects/[slug]/page.tsx:319`, `app/experience/[slug]/page.tsx:243`, multiple others

96-128px of vertical space between project entries means the user has to scroll past blank canvas. On desktop the proportions feel right; on mobile they feel slow.

**Fix:** Replace `space-y-24 md:space-y-32` → `space-y-16 md:space-y-24 lg:space-y-32`. Same pattern for `py-24` → `py-16 md:py-24`.

### `[P2]` Coordinates + serial overlays on landing hero overlap content on narrow screens

**File:** `app/page.tsx:167-174`

The `LAT 47.6062° N / LON 122.3321° W / ● LINK ESTABLISHED` block is absolutely positioned `top-6 right-6` over the robot. The `UNIT_PRIMARY / REV.2026.05` is `bottom-6 left-6`. On the stacked mobile hero, the robot section is below the text content with `min-h-[300px]`, so these overlays sit on top of the Spline canvas (good) — but if the robot rendering gets cut off or the canvas isn't tall enough, they end up overlapping the headline above.

**Fix:** `hidden md:block` on both overlay blocks. They're flavor; the mobile hero is busy enough without them.

### `[P2]` Globe legend on `/experience` uses fixed `w-[120px]` for the company name column

**File:** `app/experience/page.tsx:215`

```tsx
<span className="font-label-caps text-[11px] tracking-[0.2em] text-on-surface w-[120px] shrink-0">
```

The `0.2em` letter-spacing on "Level Up Live" pushes the rendered width past 120px on small viewports, which `truncate` then chops. Result: "LEVE..." instead of "LEVEL UP LIVE".

**Fix:** Either remove the fixed width and let it size naturally (`whitespace-nowrap`), or reduce letter-spacing to `0.1em` on mobile.

### `[P2]` Touch target sizes — nav links and meta chips are tiny

**Files:** `app/page.tsx:65` (nav links `text-[12px]`), footer links throughout

The hamburger we add for P0 needs a min 44×44px hit area. The footer's `tracking-[0.2em] text-[12px]` links are ~14-16px tall by default. Apple HIG and WCAG 2.5.5 both call for 44×44pt minimum.

**Fix:** Add `py-2` to footer links to bump their hit area. Same for the eventual mobile menu items.

### `[P2]` Project tag chips wrap awkwardly on mobile

**File:** `app/projects/page.tsx:183-194`, `app/experience/page.tsx:303-313`

`flex flex-wrap gap-2` with chips that have `px-3 py-1 text-[10px] tracking-[0.3em]` — on a narrow phone, longer tags like "Mechanical Design" wrap to a second line, but the "OPEN DOSSIER →" chip then floats alone on a third line.

**Fix:** Truncate tag count on mobile (`project.tags.slice(0, 3)` below `sm`) or push the CTA into its own row below the tags.

---

## Ideas

### `[Idea]` Switch `100vh` to `100dvh` site-wide

The dynamic viewport height unit (`dvh`) handles the iOS Safari URL bar shrinking/growing without content jumping. Hero sections that use `h-[100vh]` jump when the user scrolls and the URL bar collapses; `100dvh` doesn't. Browser support is universal as of 2023.

Replace `h-[calc(100vh-7rem)]` → `h-[calc(100dvh-7rem)]` and similar.

### `[Idea]` Add a "Skip to main content" link

For keyboard and screen-reader users, especially helpful once the mobile nav is added. One line in `layout.tsx`:

```tsx
<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-primary-fixed-dim text-on-primary px-4 py-2 z-[100]">
  Skip to main content
</a>
```

Then add `id="main"` to the first `<main>` or section in each page.

### `[Idea]` Use `loading="eager"` only for true above-the-fold images

After the next/image migration, all images are lazy by default. On mobile, the project card hero images that are *first in the list* could benefit from `priority` so they load before the user scrolls. Currently no card images have priority since the detail-page hero takes that slot.

### `[Idea]` Mobile-specific CTA in the nav

Below the hamburger (once added), include a primary action chip like "Contact" or "Resume" — this is a portfolio, and recruiters on mobile shouldn't need to dig through menus.

### `[Idea]` Drop the spotlight/halo overlays on mobile

Multiple absolute-positioned radial gradients in the landing hero (`app/page.tsx:84-115`) compound to a lot of layered painting. They're decorative. `hidden md:block` saves some GPU on mobile and the hero still looks fine.

---

## Suggested order of attack

If shipping one PR:

1. **Mobile nav** (P0) — extract `components/ui/site-nav.tsx`, add hamburger + sheet, replace inline navs on all 4 pages
2. **`GlowyWavesHero` viewport gating** (P1) — same IO pattern as cobe-globe
3. **Hero heights** (P1) — `min-h-[640px]` → `min-h-[60dvh]` on detail pages, `min-h-[600px]` → `min-h-[520px]` on landing
4. **Brain section mobile bypass** (P1) — `hidden md:block` on the Spline, simple stacked layout below
5. **Glass panel blur reduction** (P1) — media-query override in `globals.css`
6. **Robot Spline poster fallback on mobile** (P1) — `<Image>` placeholder

If shipping two PRs, split the P0 + first two P1s into "ship now" and the rest into "next pass."

P2 items can roll into either PR opportunistically — most are 1-line changes (`p-8` → `p-6 md:p-8`, etc.).

---

## Updated baseline metrics

| Metric | 2026-05-24 | 2026-05-25 |
|---|---|---|
| Total images in `public/` | 168 | 168 |
| Total image bytes | 22 MB | 22 MB |
| `<img>` tags in app code | 16+ | 0 ✓ |
| `next/image` uses | 0 | 8 ✓ |
| Spline scenes on landing | 2 (both eager) | 2 (brain gated, robot eager) ✓ partial |
| Client components | 4 | 5 (+lazy-spline) |
| Routes | 5 | 7 (+ sitemap, robots) ✓ |
| `next.config.ts` keys set | 0 | 1 (images.formats) ✓ |
| Security headers configured | 0 | 0 |
| Mobile nav menu | absent | absent ✗ |
| Viewport-gated WebGL components | 0 | 2 (cobe-globe, brain via lazy-spline) — glowy-waves still ungated |
| OpenGraph + Twitter metadata | absent | ✓ |
| Sitemap + robots | absent | ✓ |
| Dynamic OG card | absent | ✓ |
