# Sueleli Marketing Landing Page — Design Concept

**Working title: „Monumentum"** — after Horace: *Exegi monumentum aere perennius* — "I have built
a monument more lasting than bronze." The landing page is a walk through a Roman treasury that
tells the story of a lifetime of money: what you spend today, what you keep for tomorrow, and the
promise that every number stays carved into *your* stone — your device — and nobody else's.

This document is the visual and narrative contract for the site. It extends the app's
`DESIGN.md` (Roman civic-finance: marble, burgundy wax, antique gold, serif numerals) into a
scroll-driven web experience.

---

## 1. Creative Direction

### The one thing people will remember

The page does not *show screenshots of* the app — it *performs* the app. The retirement gauge
sweeps to life in the hero, the scenario sliders on the page are real and recalculate a live
capital chart, ledger rows write themselves in, and the couple-ceremony laurel draws itself in
gold. Everything the app promises ("calm, engraved, private") is demonstrated, not claimed.

### Tone

Luxury/refined with an archaeological voice. Not a SaaS page: no floating gradient blobs, no
bento grids, no purple. The reference points are engraved certificates, Swiss banknote
engraving, museum wall labels, and Roman inscription capitals. Ornament is fine-line and
architectural; motion is slow, weighty, and dignified — *engraving, not fireworks* (same motion
law as the app).

### Storytelling spine

Ten scenes, one scroll. Each scene is a Latin-titled "chapter" with an engraved uppercase label
and a gold hairline that draws itself when the chapter enters the viewport — the page reads
like chapters chiselled into a frieze.

| # | Chapter | Latin label | Story beat |
|---|---------|-------------|-----------|
| 1 | Hero | **SALVE** | Arrival at the temple. The app greets you the way it greets its users: "Salve." One free Swiss app for spending today and retirement tomorrow — and every number stays on your device. Live phone rendering of the Home screen: counting CHF value, sweeping three-color gauge. |
| 2 | Two horizons | **DUO IN UNO** | One ledger, two horizons: Spending (short-term) and Pension (long-term) built on one shared core. Two engraved columns of copy that meet at a shared foundation line. |
| 3 | Three pillars | **TRES COLUMNAE** | The temple in the logo *is* the Swiss pension system. The numeral made architecture: pillar I stands as **one** column, pillar II as **two**, pillar III as **three**, each group rising from its own stylobate on scroll. Explains the Swiss 3-pillar system in plain words — the page teaches, which builds trust. |
| 4 | Scenario stage | **SCAENA** | "Rehearse tomorrow." A real, working scenario panel: drag retirement age (63–70), life expectancy, yield — a gold capital-timeline chart and a serif CHF/month figure recalculate live. Caption: *In the app this runs on your numbers. Here it's a taste — illustrative values only.* |
| 5 | Daily ledger | **CODEX** | "Every day, accounted." The spending section: month budget with fine gold progress bars filling on scroll, dense ledger rows that write themselves in one by one, recurring-payment glyphs. |
| 6 | Paper to proof | **ACTA** | The OCR story. An IK statement sheet with a slow gold scan-line; recognized values lift off the paper into engraved ledger slots. Stamped underneath in wax-seal red: **"Never leaves your device."** On-device OCR is a headline privacy feature, not a technicality. |
| 7 | The vault | **ARX** | The trust centerpiece. Two stone tablets side by side: *"Kept only on your device"* (long list: every balance, transaction, statement, scan, report…) vs *"What our servers ever see"* (deliberately short: your e-mail, language, device name, config). The asymmetry of the two lists is the argument. Plus: QR device-to-device migration, no cloud backup — honest about the trade-off. |
| 8 | Plan as two | **FOEDUS** | Couple mode. The laurel wreath draws itself in gold stroke animation around "Together since —", the wax seal presses in. Partner snapshots move device-to-device, never through a server. Warm, human scene in an otherwise stately page. |
| 9 | Free | **GRATIS** | Free. Actually free. No feature gates, no premium tier, nothing to unlock. Pay-what-you-want via TWINT on this website only, and donations change nothing in the app. This candor is the conversion argument. |
| 10 | Download | **DESCENDE** | Final CTA on a burgundy full-bleed band (the only inverted section — maximal contrast for the close). Store badges, medallion, engraved sign-off: *Built in Switzerland. Kept on your device.* |

---

## 2. Design System (web extension of the app's tokens)

### Palette (CSS custom properties, from DESIGN.md)

| Token | Hex | Web use |
|---|---|---|
| `--burgundy` | `#5A1024` | Headlines' accent words, primary CTA fill, gauge segment |
| `--burgundy-dark` | `#3B0716` | CTA pressed, download band background |
| `--gold` | `#C69A3D` | Hairline rules, chart line, active slider track, link underlines |
| `--gold-bright` | `#E6B83F` | Highlights on burgundy surfaces only |
| `--marble` | `#F5EDE2` | Page background tone (under the marble texture) |
| `--parchment` | `#FFF8EF` | Opaque surfaces: nav bar, phone screen, tablets |
| `--parchment-veil` | `rgba(255,248,239,.70)` | Translucent cards floating on marble |
| `--stone` | `#D8C8AE` | Borders, inactive tracks, dividers |
| `--taupe` | `#9E917F` | Secondary text, captions |
| `--ink` | `#292420` | Body text |
| `--sage` | `#7B856A` | Positive states, third gauge segment |
| `--ruby` | `#8A1F24` | Wax seal, "never" statements |

Rules carried over: gold is an accent, never body text; the marble canvas stays visible
everywhere; surfaces are veils, never opaque blocks; no bright modern colors anywhere.

### Typography

- **Cinzel** (self-hosted, OFL) — Roman inscriptional capitals. Used *only* for engraved
  uppercase chapter labels, nav items, small-caps captions, and pillar numerals. Wide
  letter-spacing (0.14–0.22em). This is the "chiselled" voice.
- **EB Garamond** (self-hosted, OFL) — display headlines (500/600 weight, large sizes), body
  text, and all numerals. Financial figures use tabular-style alignment and Swiss formatting:
  `CHF 6'240` (apostrophe grouping, dot decimal) — the site formats numbers exactly like the app.
- No Google Fonts CDN — fonts ship from our origin (`@fontsource`). A privacy-first product
  cannot leak visitor IPs to Google before the first headline loads.
- Scale: hero display `clamp(3.4rem, 8vw, 6.8rem)`; chapter headlines `clamp(2rem, 4.4vw, 3.4rem)`;
  body `1.125rem/1.7`; captions `0.8125rem` Cinzel caps.

### Surfaces & layout

- Full-page fixed marble texture (`marble-canvas.webp`, the app's own canvas) with a very
  subtle film-grain overlay; content scrolls over it — identical to the app shell.
- Content column max 1120px; hero and download band are full-bleed.
- Sections are **unframed**: engraved label + self-drawing gold hairline + content directly on
  marble (the app's `SueleliSection` language). Cards only for repeated items (ledger rows,
  tablets) with `--parchment-veil` + fine stone border + ≤8px radius.
- Roman details used sparingly: corner notches on the two stone tablets, a pediment silhouette
  behind the pillars scene, laurel line-icons, column-capital section markers.
- The sticky header is the app's floating nav translated to web: detached parchment rectangle,
  16px radius, fine stone border, thin gold strip that slides under the active section link
  (scroll-spy) — exactly how the app's nav marks the active tab.

### Motion principles

*Engraving, not fireworks.* All motion is slow (500–900ms), eased `cubic-bezier(.25,.1,.25,1)`,
and happens once — no looping attention-grabbers.

1. **Self-drawing gold rules** — every chapter hairline draws left→right on first view
   (scaleX transform, 800ms).
2. **Chiselled reveals** — headlines rise 14px and settle with slight letter-spacing tightening;
   children stagger 70ms via `--i` custom property.
3. **Counting numerals** — CHF figures count up in Swiss format over ~1.2s when visible.
4. **Gauge sweep** — SVG `stroke-dashoffset` animation, three segments sweeping in sequence
   (burgundy → gold → sage), exactly the app's retirement gauge.
5. **Rising columns** — the three pillars scale up from their bases with staggered delays.
6. **Live chart morph** — the scenario chart re-renders its gold path on every slider input;
   the retirement-age breakpoint hairline slides.
7. **Ledger writing** — transaction rows fade/slide in sequentially like entries being written.
8. **Scan line & seal** — OCR sheet gets a single slow gold scan sweep; the wax seal scales in
   with a soft "press" (no bounce).
9. **Laurel self-drawing** — SVG stroke animation of the wreath, ~1.6s, once.
10. **Reduced motion** — `prefers-reduced-motion` disables all of the above; content is fully
    present without JavaScript (progressive enhancement — reveals default to visible when JS
    is absent).

### Voice & copy rules

- Second person, plain words, short sentences. German-Swiss directness in English clothing.
- Latin is *labeling*, never body copy — one word per chapter, always translated by the headline.
- Never overclaim: projections on the page are marked illustrative; the vault trade-off
  (lost device = lost data, by design) is stated openly. Honesty is the brand.
- Numbers always in Swiss format; dates day-first (11.06.2026).

---

## 3. Technical Architecture

- **Astro 6, fully static** (`dist/` deploys to any static host). Zero framework JS.
- One small vanilla script (`src/scripts/enhance.js`, <6KB): IntersectionObserver reveals,
  counter/gauge/chart logic, scroll-spy. Everything else is CSS.
- Self-hosted fonts via `@fontsource/cinzel`, `@fontsource/eb-garamond`.
- Component structure: one Astro component per chapter (`src/components/*.astro`), shared
  `Base.astro` layout, design tokens in `src/styles/global.css`.
- No analytics, no external requests of any kind — the page itself honors the privacy promise
  and the ARX chapter can say so.
- Localized in all four app languages via Astro i18n: German at the root `/` (priority market
  language, Swiss High German, du-form), `/en/`, `/fr/` (vous), `/it/` (tu). All copy lives in
  `src/i18n/{de,en,fr,it}.ts` (English is the canonical shape); the header carries a
  DE·EN·FR·IT switcher, every page emits hreflang alternates, and even the JS-driven scenario
  labels are localized via data attributes. Latin chapter labels stay untranslated — they are
  brand, not copy.
- Performance targets: LCP < 1.5s (hero is text + inline SVG, marble webp preloaded),
  CLS ≈ 0, total JS < 10KB, Lighthouse 95+ across the board.

## 4. Assets

**Have already** (from `Sueleli App/design_assets/`): medallion `logo.svg`, marble
`background canvas.webp`, app icon masters.

**Recreated live in HTML/CSS/SVG** (no image needed, animates natively): Home-screen phone
rendering, retirement gauge, scenario sliders + capital chart, ledger rows, budget bars,
OCR sheet, laurel wreath, wax seal, columns, store badges placeholders.

**Needed from the product owner** (see project README / handoff message): final app
screenshots for accuracy pass, store badge files + links, TWINT donation link/QR, legal page
URLs, OG-image sign-off.
