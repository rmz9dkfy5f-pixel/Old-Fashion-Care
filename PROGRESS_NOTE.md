# Progress Note

This file is GitHub-specific tracking and must be kept unconditionally.

Use this as the current active progress note.

For historical notes, copy completed entries into `PROGRESS_NOTES.md`.

---

## Latest — AntBrainOS Kit Tooling Install (2026-07-15)

Installed dev-tooling kits across all branches (user request). This branch gained **EngKit**
(`.claude/skills/eng/`), **TradeKit** (`.claude/tradekit/`), and **handoff-repository**
(`.claude/skills/` + `.agents/skills/` + filled `docs/governance/REPOSITORY_HANDOFF_CONFIG.md`);
SEOKit was already present. **No site files changed** — rendered site and live Netlify deploy are
byte-identical. EcomKit/VideoKit skipped (no surface); MKTKit skipped (previously rolled back). See
`docs/project/COMMIT_NOTES.md` for the full entry.

---

## Current Progress

Date:

```text
2026-07-15
```

Phase:

```text
Phase 2 — Hero variant branch `design/editorial-sage-hero-cream-immersive` (cut from
`design/editorial-sage-elder-friendly`; does NOT touch main). Committed to the branch (local).
```

Current slice:

```text
Bring the Editorial Sage homepage hero "to life" like the live/main design (full-bleed photo +
gradient scrim), explored as separate branches rather than editing the baseline. THIS branch =
"cream immersive": full-bleed `images/hero-ai.jpg` + a cream→transparent gradient scrim (the live
hero's technique, recolored to the sage palette so the hero stays light), ink/sage copy over it.
Sibling branch `design/editorial-sage-hero-split-depth` (keep the split, add depth) is the other
variant. Baseline `design/editorial-sage-elder-friendly` left unchanged for comparison.
```

Completed (this branch):

- [x] `index.html`: moved `.es-hero__media` out of `.es-hero__inner` to a full-bleed layer (kept the
      semantic `<img>` + alt/width/height)
- [x] `css/editorial-sage.css`: rewrote the `.es-hero*` block — full-bleed photo, cream horizontal
      scrim (opaque left, clears ~66%) + soft vignette, single-column copy over it; deleted the
      cream-ellipse curve
- [x] Responsive: ≥1200px left-fading scrim (copy left / faces right); ≤1199px top-weighted scrim
      (copy over cream top / embrace below) so fixed-width copy never overlaps the faces
- [x] Verified 1440/1280/1024/768/390 — legible (ink-soft/cream ≈ 6.9:1), no seam, faces visible,
      0 overflow, 0 console errors (Playwright-measured)

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

- [ ] Sibling branch `design/editorial-sage-hero-split-depth` (keep-split + depth variant) — next.

Blocked:

- [ ] Nothing blocking. Choice of variant and any merge-to-main decision remain the user's call.

Next action:

> Build the second variant on `design/editorial-sage-hero-split-depth`, then let the user compare
> all three heroes (baseline / cream-immersive / split-depth) and decide which to keep. Pushing the
> branches to origin and any merge to `main` are separate explicit decisions.

Checks run:

```bash
# Playwright (Brave engine) at 1440/1280/1024/768/390:
#   scrollWidth == innerWidth at every width  → 0 horizontal overflow
#   0 console errors
#   ink-soft (#43586a) over cream (#fbf7ee) ≈ 6.9:1  → passes WCAG AA
# Static site — no build/test/lint scripts.
```

Commit status:

```text
Committed to local branch design/editorial-sage-hero-cream-immersive (NOT pushed). Baseline
design/editorial-sage-elder-friendly and main both untouched.
```

Approval status:

```text
User approved the plan (ExitPlanMode) to create two hero-variant branches. Commit-on-branch is
implied by "make two branches". Push to origin and merge-to-main NOT authorized (separate decisions).
```
