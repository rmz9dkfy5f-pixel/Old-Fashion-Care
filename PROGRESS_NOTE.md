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
Hero: copy↔people micro-alignment (approved plan). css/style.css hero only: .hero__sub 1.05->0.97rem &
480->582px (now 4 lines, was 5); .hero>.container margin-top -5.2rem (mobile reset 0) so "possible." period
bottom aligns with older woman's earlobe bottom (~8px); .hero::after gradient pulled LEFT (more photo
revealed, band edge ~0.50, no seam); wider sub makes lower lines subtly overlap the caregiver's fingertips
(hand/shoulder recognizable, faces clear). Verified desktop 1554x900 + mobile 390x820. Committing.
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
