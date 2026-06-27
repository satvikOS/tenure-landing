# Tenure — marketing site

The marketing site for **Tenure**, the institutional memory layer for organizations whose
leadership turns over on a schedule. Built at the University of Rochester's Simon Business School.

Live: **[tenurework.com](https://www.tenurework.com)**

## Stack

- **Next.js 16** (App Router, React 19, TypeScript) — statically prerendered
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `src/app/globals.css`)
- **motion** (Framer Motion) for restrained, reduced-motion-aware animation
- Self-hosted fonts via `next/font` — **Fraunces** (display), **General Sans** (body), **IBM Plex Mono** (labels)
- Deployed on **Vercel**

## Design — "The Record"

A premium dark, editorial system themed as a living institutional record.

- **Palette:** ink `#0f1115`, umber (warm panels), parchment `#f2efe9`, **brass `#c98a3a`** + glint, **patina `#7ba6a0`** (brass aged by time)
- **Signature — the Tenure Rings:** concentric "growth rings" where each ring is one term/board.
  Used as the logo seal (`RingSeal`), the animated hero figure (`TenureRings`), and the broken-ring
  "annual reset" state. Geometry lives in `src/lib/rings.ts`.
- **Type:** grotesk headlines with a single italic-serif (`foil`) emphasis word, mono "registrar" labels.

## Project structure

```
src/
  app/                    routes: / · /product · /story · /pilot · /privacy · /terms
  components/
    home/                 home-page sections
    site/                 SiteHeader, SiteFooter, PageHeader, CtaBand
    ui/                   Button, Reveal, layout primitives (Container/Eyebrow/Rule)
    visuals/              RingSeal, TenureRings, ProductFrame, Grain
    brand/                Wordmark
  lib/                    site.ts (all copy/links), rings.ts, fonts.ts, cn.ts
  fonts/                  self-hosted General Sans (Fontshare FFL)
scripts/                  shot.mjs / shot-el.mjs (Playwright screenshots), og.mjs (social card)
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Screenshots (dev server must be running):

```bash
node scripts/shot.mjs "/,/product,/story,/pilot"   # full-page, desktop + mobile → /tmp/shots
node scripts/og.mjs                                # regenerate public/og.png
```

## Editing content

Nearly all copy and links live in **`src/lib/site.ts`**. Before launch, replace the flagged
placeholders:

- `bookingUrl` — the real scheduling link (Cal.com / Calendly) behind every "Book an intro call".
- `email` — the founders' contact inbox.

The **Privacy** and **Terms** pages are plain-language starting drafts and should be reviewed
before launch.
