# Progress Note

This file is GitHub-specific tracking and must be kept unconditionally.

Use this as the current active progress note.

For historical notes, copy completed entries into `PROGRESS_NOTES.md`.

---

## Current Progress

Date:

```text
2026-07-15
```

Phase:

```text
Phase 2 — Hero variant branch `design/editorial-sage-hero-split-depth` (cut from
`design/editorial-sage-elder-friendly`; does NOT touch main). Committed to the branch (local).
```

Current slice:

```text
Bring the Editorial Sage homepage hero "to life", explored as separate branches. THIS branch =
"split + depth": the lowest-disruption variant — keep the two-column split and all copy, feather
the cream-ellipse curve edge and add a soft ink vignette so the photo reads as a lit scene.
CSS-only. Sibling branch `design/editorial-sage-hero-cream-immersive` is the more immersive
(full-bleed photo + gradient) variant. Baseline `design/editorial-sage-elder-friendly` unchanged.
```

Completed (this branch):

- [x] `css/editorial-sage.css` `.es-hero*` only (no markup change): feathered the cream curve
      (`.es-hero__media::before` solid → radial fill) so the photo dissolves into the cream column
- [x] Added `.es-hero__media::after` depth vignette (low-opacity ink, top/bottom + outer edges;
      faces kept bright); `isolation: isolate` on the media for self-contained layering
- [x] Mobile keeps the stacked rounded photo card, now with the same subtle vignette
- [x] Verified 1440/1024/768/390 — 0 overflow, 0 console errors; no text-over-photo, no new contrast risk

Prior slice (Editorial Sage redesign) — still complete, unchanged this push:

- [x] Full-site Editorial Sage design on this branch (see PROGRESS_NOTES.md history)

Completed (earlier redesign detail retained for reference):

- [x] Slice 0/1 — new `css/editorial-sage.css` design system (tokens, Lora + Source Sans 3, cream
      sticky header, mobile menu, footer, base + accessibility primitives); `docs/design/` spec +
      reference image; skip link + `#main-content` added
- [x] Slice 2 — homepage hero (organic curved cream/photo split, ~50/50) + sage 4-item trust band
- [x] Slice 3 — 5 line-icon service cards (responsive 5→3→2→1) + sand "How It Works" process strip
      + edge botanical foliage
- [x] Slice 4 — Meet Regina split (real `regina.jpg`) + dignified references statement (no
      fabricated testimonials) + rounded pale-sage final contact panel + deep-sage footer
- [x] Homepage verified across 7 viewports (no overflow, no console errors, mobile menu w/ Escape);
      fixed a hero headline/accent/CTA clip found on screenshot (rebalanced split + accent size)
- [x] User reviewed the homepage and approved continuing
- [x] Slice 5 — all 5 secondary pages (`about`, `services`, `how-it-works`, `questions`, `contact`)
      rebuilt onto the shared shell + design language; `<head>` metadata preserved verbatim; FAQ
      accordion + Formspree contact form preserved
- [x] Slice 6 — verification across all 6 pages at 1440/768/390 (18 combos: 0 overflow, 0 console
      errors); FAQ click+keyboard, contact-form success + Formspree action preserved; 124-ref local
      link sweep clean; one `<h1>`/page + all SEO metadata intact
- [x] Fixed a content-visibility bug (user-caught on the Meet Regina page): the carried-over
      scroll-`.reveal` started sections at opacity:0 until scrolled to, so `about.html`'s values grid
      + CTA rendered blank on load. Neutralized `.reveal` site-wide (content visible by default) per
      the plan's §8.4/§13 rules. Re-verified: 0 hidden reveals on fresh load across all 6 pages, no
      overflow/console regressions.

In progress:

- [ ] None — both hero variants (cream-immersive + split-depth) are implemented on their branches.

Blocked:

- [ ] Nothing blocking. Choice of variant and any merge-to-main decision remain the user's call.

Next action:

> Let the user compare all three homepage heroes (baseline / cream-immersive / split-depth) on
> desktop + mobile and decide which to keep. Pushing the branches to origin and any merge to `main`
> are separate explicit decisions.

Checks run:

```bash
# Playwright (Brave engine) at 1440/1024/768/390:
#   scrollWidth == innerWidth at every width  → 0 horizontal overflow
#   0 console errors
# CSS-only change, two-column split retained → no text-over-photo, no new contrast risk.
# Static site — no build/test/lint scripts.
```

Commit status:

```text
Committed to local branch design/editorial-sage-hero-split-depth (NOT pushed). Sibling branch
design/editorial-sage-hero-cream-immersive also committed (local). Baseline branch and main untouched.
```

Approval status:

```text
User approved the plan (ExitPlanMode) to create two hero-variant branches. Commit-on-branch is
implied by "make two branches". Push to origin and merge-to-main NOT authorized (separate decisions).
```
