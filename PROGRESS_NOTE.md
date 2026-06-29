# Progress Note

This file is GitHub-specific tracking and must be kept unconditionally.

Use this as the current active progress note.

For historical notes, copy completed entries into `PROGRESS_NOTES.md`.

---

## Current Progress

Date:

```text
2026-06-27
```

Phase:

```text
Phase 2 — Implementation (approved): hero background 3-variant preview
```

Current slice:

```text
Hero: smoother gradient + headline wrap fix + sub barely-covers-hand. css/style.css only:
.hero__headline max-width 565->620px (orange line back to 1 line). .hero::after 10-stop smooth
gradient starting at 22% (h in "where"); 0.94@18% to 0.00@100%, ~0.02/% uniform rate. .hero__sub
0.97->0.94rem, 648->580px; lines barely reach caregiver wrist, shoulder uncovered, 4 lines held.
Verified desktop 1554x900 + mobile 390x820.
```

Completed:

- [x] css/hero-variants.css — 3 scoped treatments + switcher styles
- [x] js/hero-preview.js — segmented control + ?hero= deep links + AI-asset detection
- [x] hero-preview.html — prod nav/head reused, 3 isolated hero sections
- [x] Local verification: page + all assets 200; production files untouched (git status = 3 new files)

- [x] Variant chosen by user (featured photo) promoted to production .hero in css/style.css
- [x] Verified: homepage + assets 200; no other page reuses base .hero (no regression)

In progress:

- [ ] User visual review of the live homepage hero

Blocked:

- [ ] Quality: swap the client's ORIGINAL hi-res photo into images/hero-ai.jpg (current is a soft
      714x558 crop from a screenshot) before launch

Next action:

> User: run `python3 -m http.server 8000`, open http://localhost:8000/ (homepage), confirm the hero,
> and supply the original full-res photo for images/hero-ai.jpg.

Checks run:

```bash
python3 -m http.server 8765   # hero-preview.html 200; css/js/images 200; hero-ai.jpg 404 (expected)
git status --short            # only 3 new files; index.html / style.css unchanged
```

Commit status:

```text
Not committed — awaiting user review (no commit/push requested yet).
```

Approval status:

```text
Plan approved (Phase 2). Promotion of a variant to production NOT yet approved.
```
