# Commit Notes

This file is GitHub-specific tracking and must be kept unconditionally.

Use it to prepare commits before they are made.

---

## Summary

Promote featured-photo hero to production homepage + 3-variant preview

## Description (production promotion)

- css/style.css ONLY (index.html markup unchanged); affects homepage hero exclusively
  (verified class="hero" is used only on index.html)
- Added :root token --navy: #1b2230
- .hero: solid charcoal -> navy background-color + images/hero-ai.jpg (background-size cover,
  right center), flex centering, min-height 600px
- .hero::before: repurposed from coral radial circle to a left->right navy scrim for text contrast
- Mobile (max-width 640px): vertical (top-dark) gradient + min-height 520px + background-position
- Photo is a REAL image from the client's own photo collection (NOT AI-generated, despite the
  preview button label / hero-ai.jpg filename). Current file is a 714x558 crop from a 1554px mockup
  screenshot -> soft when full-bleed; recommend dropping the client's ORIGINAL hi-res photo at
  images/hero-ai.jpg before launch (no code change)
- Validation: server -> / 200, css/style.css 200, images/hero-ai.jpg 200; other pages do not reuse
  base .hero (no regression)

## Iteration: seamless photo->navy blend (whole-photo zoom kept)

- Fixed visible seam from background-size:contain (hard right-anchored edge that shifted with viewport
  + a compounding diagonal scrim)
- .hero::before now a right-anchored band (width 58%, background-size cover) whose mask feathers the
  band's own left edge -> dissolves into navy seamlessly at any width
- .hero::after desktop scrim removed (left is solid navy); kept only as the mobile vertical scrim
- Mobile: .hero::before reset to full-bleed (left/right/width 100%, mask none)
- Validation: captured full-page screenshot via cached headless Chromium
  (~/Library/Caches/ms-playwright/.../chrome-headless-shell, --screenshot, 1440x1500) -> seam gone,
  text readable, whole photo visible, page unchanged below the hero

---

## Earlier in this branch: 3-variant hero preview (no production change)

## Description

- New preview-only files; production index.html and css/style.css untouched:
  - hero-preview.html — reuses prod nav/head, 3 isolated hero sections, variant switcher
  - css/hero-variants.css — scoped treatments for .hero--ai / .hero--real-single / .hero--real-montage
  - js/hero-preview.js — segmented-control + ?hero= query-param switcher; AI-asset existence check
- Variant 1 (AI Image): images/hero-ai.jpg now in place — cropped (via sips) from the user's AI
  composite at ~/Downloads/"ChatGPT Image Jun 27, 2026 at 06_39_46 AM.png" to isolate just the
  embrace photo (714x558, ~96KB, placeholder-grade). JS still shows a labeled fallback if the file is
  ever missing. Recommend swapping in a hi-res clean export (~2400x1400 .webp) for production.
- Variant 2 (Real / Single): care-04.jpg + charcoal left gradient
- Variant 3 (Real / Soft Montage): blurred low-opacity blend of care-04 + care-10 + care-05, dark left
- Excluded watermarked care-01.jpg / care-02.jpg (visible iStock watermarks)
- Validation: `python3 -m http.server` — hero-preview.html 200; all CSS/JS/images 200;
  images/hero-ai.jpg 404 as expected (placeholder path); git status shows only 3 new files
- Follow-up: user to add images/hero-ai.jpg; decide which variant (if any) to promote to production;
  separately fix watermarked care-01 already live in production photo grid

## Known flags

- care-01.jpg is watermarked AND currently live in the production "Real Care, Real People" grid
- Large source images (2+ MB) should be compressed/resized for production use
