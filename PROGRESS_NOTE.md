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
2026-07-14
```

Phase:

```text
Phase 2 — SEO/performance hygiene pass + SEOKit install on branch
`design/editorial-sage-elder-friendly` (does NOT touch main). Committed + pushed to the branch.
```

Current slice:

```text
Kit-value evaluation (user question: "can any of the kits add value?") → concrete SEO + performance
work. Installed SEOKit and ran /seo hygiene; ran seo-hygiene-check + performance-budget-pass skills;
applied 2 low-risk perf fixes (font preconnect/link, lazy-load); evaluated + rolled back MKTKit.
Branch-isolated; main untouched and still live on Netlify.
```

Completed (this push):

- [x] Font-loading fix on all 6 pages: removed render-blocking `@import` from `css/editorial-sage.css`;
      added `<link rel="preconnect">` (googleapis + gstatic) + direct font `<link>` in each `<head>`
- [x] `loading="lazy"` added to `index.html` founder photo (matches `about.html`)
- [x] SEOKit installed (`.claude/commands/seo/`, `.claude/skills/seo-*.md`, `.claude/agents/seo-*.md`,
      `seo/` context); `/seo hygiene` run → `seo/audits/hygiene-2026-07-14.md`
- [x] MKTKit evaluated → rolled back (poor fit); CTA proposal saved to `docs/marketing/cta-proposal-2026-07-14.md`

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

- [ ] None — SEO/perf slice complete and pushed to the branch.

Blocked:

- [ ] Nothing blocking. Formspree ID and any merge-to-main decision remain the user's call.

Next action:

> Apply the 4 low-effort hygiene fixes (og:image dims, sitemap lastmod, LocalBusiness JSON-LD on
> services/contact/how-it-works, apple-touch-icon.png). Then decide on the Formspree form ID and
> whether/when to merge `design/editorial-sage-elder-friendly` to `main` (a separate explicit
> decision — would change the live Netlify site).

Checks run:

```bash
grep -c 'fonts.googleapis.com|fonts.gstatic.com' *.html   # font links present ×3/page
grep -c '@import' css/editorial-sage.css                   # 0 (removed)
grep -n 'regina.jpg' index.html                            # loading="lazy" present
# No build/test/lint scripts in this static repo; browser smoke-test not re-run this pass.
```

Commit status:

```text
Committed + pushed to origin/design/editorial-sage-elder-friendly (see COMMIT_NOTES.md / STATUS.md
for hash + tag). main untouched and still live on Netlify.
```

Approval status:

```text
User explicitly ran the push/handoff prompt this session, authorizing commit + tag + snapshot +
push of this SEO/perf slice to the branch. Merge-to-main NOT authorized (separate explicit decision).
```
