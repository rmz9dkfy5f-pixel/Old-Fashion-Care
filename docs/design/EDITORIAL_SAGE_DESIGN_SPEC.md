# Editorial Sage — Design Spec

**Reference image:** `docs/design/reference/old-fashion-care-editorial-sage-homepage.png`
**Date adopted:** 2026-07-13
**Branch:** `design/editorial-sage-elder-friendly` (isolated; does **not** touch `main`)
**Active stylesheet on this branch:** `css/editorial-sage.css` (the legacy `css/style.css` is kept
untouched as the prior-design reference and is **not** loaded on this branch)
**Source plan:** AntBrainOS vault
`03_PROJECTS/Active/Old_Fashion_Care/EDITORIAL_SAGE_REDESIGN_EXECUTION_PLAN.md`

---

## Intent

A warm, light, elder-friendly **editorial** presentation replacing the current dark charcoal/coral
contemporary look. Calm, dignified, boutique-care aesthetic — not a technology/startup aesthetic.
Generous spacing, large high-contrast controls, obvious navigation, restrained botanical line-art.

## Visual principles

1. Light warm backgrounds (cream / warm-white / soft-sand); no dark full-page backdrop.
2. Serif-led hierarchy (Lora) with a highly readable sans body (Source Sans 3), body ≥ 18px.
3. Sage as the primary accent (buttons, trust band, numbered steps, check marks, dividers).
4. Deep ink-blue for primary headings and body ink.
5. Organic, curved hero split rather than a hard geometric seam.
6. Elder-friendly sizing: min 44–48px controls, 18px+ body, no meaningful text below 15px.
7. Botanical decoration is sparse, edge-anchored, low-contrast, `aria-hidden`, and never overlaps copy.
8. Minimal, supportive motion only; honors `prefers-reduced-motion`. No autoplay, parallax, or
   scroll-reveal that starts content invisible.

## Design tokens (`:root` in `css/editorial-sage.css`)

### Color
| Token | Value | Use |
| --- | --- | --- |
| `--es-ink` | `#17324d` | Primary headings, body ink |
| `--es-ink-strong` | `#102a43` | Strongest ink / footer |
| `--es-ink-soft` | `#43586a` | Secondary text |
| `--es-sage` | `#6b7d61` | Primary accent, buttons, trust band |
| `--es-sage-dark` | `#53664b` | Button hover |
| `--es-sage-deep` | `#43533e` | Deep sage panels |
| `--es-sage-pale` | `#e6eadf` | Pale sage fills / final CTA panel |
| `--es-cream` | `#fbf7ee` | Hero text region, services section |
| `--es-warm-white` | `#fffdf8` | Page background |
| `--es-parchment` | `#f7efe2` | Alt section fill |
| `--es-sand` | `#f1e3cd` | Process strip |
| `--es-gold-muted` | `#ad976b` | Secondary botanical stroke |
| `--es-line` | `#d9cebb` | Hairline borders |
| `--es-focus` | `#245f89` | Focus outline |

### Type
- Display: `'Lora', Georgia, 'Times New Roman', serif`
- Body: `'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- One Google Fonts `@import` with `display=swap`; robust system fallbacks. Two families maximum.

### Layout
- `--es-content-max 1180px`, `--es-wide-max 1360px`, `--es-text-max 700px`
- `--es-gutter clamp(20px,4vw,56px)`, `--es-section-y clamp(72px,8vw,118px)`
- radii `--es-radius-sm/md/lg/xl` = 10 / 18 / 28 / 42px; `--es-control-min 48px`

## Reference content vs. production content

The reference image is **visual guidance only**. It contains AI-generated people and illustrative
testimonial quotes. Per the execution plan §3.2 / §10.6:

- **Do not** publish the reference's generated testimonial quotes as real. This branch uses a
  dignified no-cards statement ("References are available during consultation.") instead — no
  fabricated social proof.
- **Do not** use the reference's generated portrait for Regina. Use the real `images/regina.jpg`.
- Hero photo uses the repo's approved `images/hero-ai.jpg` (warm care-interaction image).
- All copy, credentials, and business facts come from the existing repository content only.

## Known deviations from the reference (and why)

- **Testimonials:** reference shows 3 filled cards + carousel; production shows a dignified
  statement with no cards — the reference quotes are fabricated and cannot be published (user
  decision, 2026-07-13).
- **Regina portrait:** reference portrait is AI-generated; production uses the real founder photo.

## Motion decision (plan §8.4 / §13)

The legacy site used a scroll-triggered `.reveal` animation that started sections at `opacity: 0`
until scrolled into view. The Editorial Sage plan forbids this ("avoid scroll-triggered content that
begins hidden"; "text that begins invisible" is not allowed). In this design **all content is visible
by default** — `.reveal` is neutralized in `css/editorial-sage.css` (kept only as a harmless hook for
the existing `IntersectionObserver` in `js/main.js`). This was caught on the Meet Regina (`about.html`)
page, where the sections after the pull-quote band appeared blank on load until scrolled to; the fix
is site-wide.
