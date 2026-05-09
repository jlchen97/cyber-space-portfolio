# Cyber-Space Portfolio — Project Notes

Personal portfolio for Jian Chen. Aerospace-minimalism / cyber-green aesthetic, ported from the live Wix site at `cjian1997.wixsite.com/home`.

---

## 1. Site map

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Single-page home: HERO → PROFESSIONAL → EXPERIENCE preview → PROJECTS preview → CONTACT |
| `/experience` | `app/experience/page.tsx` | Mission-log index with Cobe globe hero + role legend |
| `/experience/[slug]` | `app/experience/[slug]/page.tsx` | Mission-briefing detail page per role |
| `/projects` | `app/projects/page.tsx` | Projects index (filters out `hidden: true`) |
| `/projects/[slug]` | `app/projects/[slug]/page.tsx` | Project detail with grouped sections, gallery, optional video |

Data lives in `lib/experience.ts` and `lib/projects.ts`. Both are typed and source-of-truth — no CMS.

---

## 2. Tech stack

### Framework / runtime
- **Next.js 16.2.6** (App Router) — note: this repo uses a fork/preview build with breaking changes; check `node_modules/next/dist/docs/` before relying on training-data Next.js APIs.
- **React 19.2.4** + **React DOM 19.2.4**
- **TypeScript 5.x**

### Styling
- **Tailwind CSS v4** (`@theme` and `@theme inline` blocks in `app/globals.css`)
- **@tailwindcss/postcss** — PostCSS pipeline
- **tailwind-merge** + **clsx** — `cn()` helper in `lib/utils.ts`
- **class-variance-authority** — shadcn-style component variants
- Custom design tokens: `--primary-fixed-dim` (cyber green `#00e639`), `--surface`, `--surface-container-low`, `font-display`, `font-label-caps`, `text-body-md/lg`, `anchor-offset` utility.

### UI primitives (`components/ui/`)
- `button.tsx`, `card.tsx` — shadcn-derived
- `cobe-globe.tsx` — interactive globe wrapper, supports per-marker color, drag inertia, theta clamp
- `glowy-waves-hero.tsx` — animated canvas hero (used on `/projects`)
- `special-text.tsx` — scrambled-text reveal using `framer-motion` `useInView`
- `splite.tsx` — Spline scene wrapper
- `spotlight.tsx` — radial-gradient spotlight overlay

### 3D / animation libraries
- **@splinetool/react-spline ^4.1.0** + **@splinetool/runtime ^1.12.92** — robot hero on landing, brain in Professional section
- **cobe ^2.0.1** — WebGL globe on `/experience`
- **framer-motion ^12.38.0** — `useInView` for scrambled name; section reveals
- **lucide-react ^1.14.0** — icon set (note: v1 dropped brand icons; LinkedIn is inlined as SVG)
- **@radix-ui/react-slot ^1.2.4** — Button `asChild`

### Tooling
- ESLint 9 + `eslint-config-next`
- `sips` (macOS) — used out-of-band to convert PNGs disguised as `.jpg` (Wix `enc_auto`) to true JPEG q80 in place

---

## 3. External assets — what we used and where it came from

### 3D scenes (Spline)
| Where | URL | Notes |
|---|---|---|
| Landing hero (robot) | `https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode` | `SPLINE_SCENE` const in `app/page.tsx` |
| Professional section (brain) | `https://prod.spline.design/oCgPgJzTzCupWGW2/scene.splinecode` | `SPLINE_BRAIN`. Imported from Spline community file `fb5c9572-898e-4c53-a7ea-fab22311ea46`. Watermark covered with a `bg-surface` panel; canvas given `pointer-events-none` so scroll can't rotate the scene. |

### Photography & screenshots
All experience and project imagery was scraped from the live Wix site via Wix's CDN transform URL:
```
https://static.wixstatic.com/media/<id>~mv2.{jpg|png|webp}/v1/fit/w_1920,h_1920,al_c,q_85,enc_auto/<file>
```
Files preserve their original Wix media ID (`0a5de4_…~mv2.jpg`) so provenance is traceable. Inventory is committed at:
- `public/images/experience/manifest.txt`
- `public/images/projects/manifest.txt`

Folder layout:
```
public/images/
├── experience/
│   ├── amazon-robotics/   (23 files)
│   ├── tesla/             (13 files — Reno GF1 era)
│   ├── pure-watercraft/   (7 files + 1 product-spec screenshot)
│   ├── kpff/              (9 files)
│   └── port-of-seattle/   (2 files)
└── projects/
    ├── spacex-hyperloop/         (Pod I–IV, including the combined brief and 4 hidden comp pages)
    ├── apple-design-challenge/
    ├── ewb/
    ├── cad-library/
    └── go-kart/
```

Manifest files list every image with byte size; if you re-pull from Wix, diff against the manifest to spot missing files.

### Embedded video
- Hyperloop Comp 4 — `https://www.youtube.com/watch?v=i6palnjG4rk&t=1s` (rendered via `youTubeEmbedUrl()` in `app/projects/[slug]/page.tsx`, which preserves the timestamp).

### Narrative content
Body copy for each experience/project page is mirrored from the live Wix site. Where Wix had no body text (e.g. Apple Design Challenge §1), placeholder copy is flagged in the data file and should be either replaced from Wix or trimmed.

---

## 4. Data schemas

### `lib/projects.ts` — `ProjectEntry`
```ts
interface ProjectSection {
  title: string;
  body: string;
  image?: string;
  images?: string[];        // Gallery — first image renders as featured 16:9
  objectPosition?: string;  // CSS object-position, default "50% 25%"
  video?: string;           // Full YouTube URL or 11-char video ID
  detailSlug?: string;      // Adds a "READ FULL BRIEF" chip → /projects/<slug>
  group?: "my-work" | "pod-overview" | "result";  // Drives section dividers
}
interface ProjectEntry {
  slug, title, category, year, icon, link?,
  heroImage?, heroImageFlipped?: boolean,  // scaleX(-1) on hero
  description, tags,
  role, domain, tagline, briefingSummary,
  objectives, tools, sections, metrics,
  hidden?: boolean,  // Hides from /projects index but route still resolves
}
```

Hyperloop Comp 1–4 detail pages are stored as `hidden: true` entries linked via `detailSlug` chips from the combined SpaceX brief.

### `lib/experience.ts` — `ExperienceEntry`
6 roles (Tesla / Amazon Robotics / Pure Watercraft / KPFF / Port of Seattle / Level Up Live). Tesla tagged Reno NV (GF1); Level Up Live tagged Redmond WA, role = COO.

---

## 5. Notable design decisions

- **Top nav** — fixed, centered tabs (HOME / EXPERIENCE / PROJECTS / CONTACT). Anchor links on `/` route to in-page sections; absolute routes for `/experience` and `/projects`. There was a bug where clicking EXPERIENCE from `/projects` sent users home — fixed by routing absolute, not anchor.
- **Section dividers** in project detail pages — green hairline + pulsing dot + group label, triggered when `group` changes between consecutive sections. Earlier negative-margin version collapsed visually; rewritten with `border-t border-primary-fixed-dim/30 pt-4 pb-6`.
- **Scrambled name** — `<SpecialText>` on "JIAN CHEN" runs once on view via `useInView`, `speed={42}` to settle in ~1.5s.
- **Hero tagline** — "HERE TO BUILD THE FUTURE" under the name (per user direction).
- **Brain placement** (Professional section) — title overlay above, body overlay below, brain canvas + watermark cover wrapped together in `translate-y-12 md:translate-y-16` so they shift as a unit; title pushed up with `-translate-y-12 md:-translate-y-16`. `pointer-events-none` on the canvas prevents scroll-induced rotation.
- **Cobe globe** — 10 markers (Seattle, Redmond, Reno, Shanghai, Las Vegas, NYC, Miami, Austin, Chicago, San Diego) color-coded per company, 8 arcs originating from Seattle, 4-row legend below.

---

## 6. Conventions / gotchas

- `AGENTS.md` warns that this is a **non-stable Next.js**. Read `node_modules/next/dist/docs/` before assuming an API.
- Tailwind v4 uses bare CSS vars at `:root` (for shadcn compat) mapped via `@theme inline { --color-* : var(--*) }`.
- `lucide-react@1.x` removed brand icons. LinkedIn icon is hand-rolled SVG.
- Wix CDN sometimes returns PNG bytes with a `.jpg` extension. If you re-scrape, normalize via `sips -s format jpeg --out <file> <file>`.
- `objectPosition` defaults to `"50% 25%"` to favor faces; override per-section when an image needs a different crop.

---

## 7. Local dev

```bash
npm run dev    # starts on next free port; check terminal output
npm run build
npm run lint
```

Dev server is currently bound to port `57268` (see `lsof -iTCP -sTCP:LISTEN -P | grep node`).
