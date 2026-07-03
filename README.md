# Sueleli Marketing Site

Astro marketing site for Sueleli.

This repository is intentionally separate from the mobile app and backend. The site is fully static and has no runtime connection to any backend service or user data (fonts and the product video are self-hosted; the contact form posts to an e-mail relay).

The design and narrative direction lives in `CONCEPT.md` ("Monumentum" — a snap-scroll story in Latin-titled chapters, extending the app's Roman civic-finance design language from `Sueleli App/DESIGN.md`).

GitHub repository:

```txt
https://github.com/Testosteronny/marketing-landing-page
```

## Structure

```txt
CONCEPT.md                       Design & narrative concept (read first)
src/pages/index.astro            German landing page (default locale, root URL)
src/pages/[lang]/index.astro     /en/, /fr/, /it/ localized pages
src/i18n/                        Copy dictionaries per locale (en.ts is canonical)
src/layouts/Base.astro           HTML shell, fonts, meta, hreflang
src/components/                  One component per chapter + header/footer
src/scripts/enhance.js           Reveals, gauges, live scenario chart, contact form
src/styles/global.css            Design tokens, snap scrolling, base styles
public/assets/                   Brand assets (medallion logo, marble canvas, video)
mockup/                          Previous static mockup + retired legacy assets
```

## Local Preview

Install dependencies and run Astro:

```txt
npm install
npm run dev
```

## Deployment

The site builds to a plain static bundle — any static host works:

```txt
Install command: npm install
Build command: npm run build
Output directory: dist
```
