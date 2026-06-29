# Commit Notes

This file is GitHub-specific tracking and must be kept unconditionally.

Use it to prepare commits before they are made.

---

## Iteration: smoother gradient, headline fix, sub barely-covers-hand

- `.hero__headline { max-width: 565→620px }`: fixed "We make that possible." wrapping to 2 lines;
  now consistently 1 line at desktop.
- `.hero::after` gradient: smoother 10-stop curve (0.94@18%, 0.86@22%, 0.72@28%, 0.56@34%,
  0.40@40%, 0.26@46%, 0.14@52%, 0.05@60%) — near-uniform ~0.02/% rate, visible fade begins at
  'h' in "where" (~22%/x≈340). Seam at 46% covered at 0.26.
- `.hero__sub`: font-size 0.97→0.94rem, max-width 648→580px — lines just barely reach the
  caregiver's wrist/hand; shoulder stays visible and uncovered. 4 lines preserved.
- Verified: desktop 1554×900 + mobile 390×820. Headline 1 line, 4-line sub, smooth gradient,
  hand barely covered, mobile clean.

---

## Iteration: hero gradient further left + wider sub overlap (B-period anchor, hand coverage)

- `.hero::after` gradient stops shifted further left: at the B-period position (x≈510, 33%) opacity
  is now ≈0.50 (was ≈0.86) — photo/women show through noticeably starting there. Seam edge at 47%
  kept at 0.20, sufficient with mask feather. Text over lighter gradient confirmed readable.
- `.hero__sub` max-width 582→648px: right edges of lines 1–3 now clearly overlap the caregiver's
  arm/shoulder/hand; "choose between" (line 1), "certified," (line 2), "want" (line 3) sit over hand.
  4-line count preserved. Mobile max-width is irrelevant (resets to full-width on mobile).
- Verified: desktop 1554×900 and mobile 390×820 screenshots confirmed.

---

## Iteration: hero copy↔people micro-alignment (4-line sub, period↔earlobe, gradient left, hand overlap)

Approved plan-mode change; `css/style.css` hero rules only (no markup, no photo change).

- (1) `.hero__sub`: font-size 1.05rem→0.97rem, max-width 480px→582px → paragraph now 4 lines (was 5),
  smaller and legible.
- (2) `.hero > .container`: added `margin-top: -5.2rem` (reset to 0 on mobile) so the orange "possible."
  period bottom (~y355 @1554×900) lines up with the older woman's earlobe bottom (~y348). Photo NOT moved.
- (3) `.hero::after` first linear-gradient pulled left (stops shifted earlier; e.g. 0.60@44, 0.38@50,
  0.20@55, 0.09@61) so more of the photo/women reveal, band left edge stays ≈0.50 (no seam), text readable.
- (4) The wider sub max-width pushes the lower lines' right edges (~"choose"/"support") subtly onto the
  caregiver's fingertips — hand and shoulder remain clearly recognizable, faces clear.
- Verification: headless Chromium screenshots at 1554×900 (desktop) and 390×820 (mobile); zoom crops via
  sips confirmed period↔earlobe within ~8px, subtle hand overlap, no seam, mobile unaffected.
- Decision: gradient ambiguity resolved with user — "pull dark toward the left edge / reveal more photo."

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

## Iteration: shift copy + gradient left; clear button from elbow (CURRENT)

- Last step's right-shift put "See our services" ~30px INTO the older woman's arm/elbow. Per user, moved
  the whole hero composition left:
  - `.hero > .container` padding-left 4.5rem -> 0.75rem: shifts eyebrow/headline/"possible."/paragraph/
    buttons left together (~60px). "See our services" right edge now ~712px, her elbow ~746px -> ~34px
    comfortable gap ("a bit more breathing room"). Mobile still resets padding-left to 1.5rem.
  - `.hero::after` gradient stops shifted left ~4-5% (0.84@40->36, 0.42@47->0.50@43, etc.) so the dark
    copy-zone moves left and more of the photo/people shows; kept ~0.40 at the band edge (47%) so NO seam.
  - `.hero__sub` max-width 512 -> 480 (the hand-overlap widening is no longer needed).
- Accepted trade-off: "possible." now has a larger gap from her head; paragraph no longer overlaps the hand.
- Verified desktop(1554) + mobile(390) + zoom of the button/elbow gap. Photo untouched.

## Iteration: align hero copy to the people (committed 778099e)

- Per user, adjusted the words in relation to the people (photo unchanged; rollback tag
  v1.4.0__hero-clean-photo-hand-visible__commit-41bffc4 protects the prior state):
  - Shifted the hero copy right: `.hero > .container` padding-left 1.5rem -> 4.5rem (mobile reset to
    1.5rem). Result: "We make that possible." now sits a nice ~30px gap from the older woman's head,
    aligned toward her ear; the paragraph moves toward the caregiver's hand.
  - Widened the paragraph: `.hero__sub` max-width 480 -> 512 so its right edge slightly OVERLAYS the hand.
- Verified desktop(1554) + mobile(390) + zoom of both relationships (possible↔head/ear, paragraph↔hand).

## Iteration: swap in the CLEAN original photo — hand now clearly visible (committed 41bffc4)

- User supplied the clean original photograph (no baked website text):
  images/ChatGPT Image Jun 28, 2026 at 08_03_49 PM.png (1536x1024). This was the real blocker — the
  previous hero-ai.jpg was cropped from a full-page MOCKUP screenshot, with the hand ~85% cropped off and
  the paragraph text baked over the rest, so no CSS could recover it.
- Re-cropped images/hero-ai.jpg from the clean source: sips crop x=330..1536 (full height), resampled to
  1100px wide, JPEG q86 (~248KB). The crop keeps a dark margin LEFT of the hand, so the band's left edge
  sits in dark background (no seam) and the caregiver's hand sits INSIDE the frame at ~hero 49-59%.
- No CSS change needed — the committed gradient/feather already frame it correctly. Result: hand on the
  shoulder reads clearly as a soft detail fading into the gradient; paragraph's right edge lands on it;
  faces clear on the right; smooth gradient, no seam. Verified desktop(1554) + mobile(390).
- The clean source PNG is left in images/ (untracked) as the re-crop source.

## Iteration: reveal the hand-on-shoulder (soft fade) — committed cf7404a

- Goal: caregiver's hand on the older woman's shoulder + that shoulder read as a SOFT detail that fades
  into the gradient (user: "clearly visible, just not as visible as the people's faces"), matching the
  "There." reference mockup (images/ChatGPT Image Jun 27, 2026 at 06_39_46 AM.png).
- Root cause confirmed: the hand sits at the photo's FAR-LEFT edge (source x~0-45, y~360-450), which is
  exactly the right-anchored band's left edge — the same strip that must stay dark/feathered to hide the
  seam. No clean photo data exists left of the hand (the file was cropped from the text-baked mockup), so
  the hand is welded to the band edge and can only ever be a soft fade from this source.
- Changes (css/style.css, hero):
  - .hero::before: thin left-edge feather mask (linear-gradient 90deg, transparent 0, #000 6%) — softens
    the band edge (no hard line) without reaching the hand body. Band width 53%, position left center.
  - .hero::after: lightened the hand/shoulder zone while keeping the copy zone dark and the slope smooth:
    0.97@0, 0.94@30, 0.84@40, 0.42@47, 0.26@53, 0.15@62, 0.07@75, 0.02@88, 0@100 (+ vertical vignette).
  - Copy unchanged from the approved reference-match (headline 565 one-line orange, sub 480).
- Verified desktop(1554) + mobile(390) + upscaled zoom of the hand zone: hand reads as a soft fade,
  shoulder visible, gradient smooth, NO seam/line; framing matches the target.
- Limit: the hand stays soft because the source is a low-res, dim crop with the hand at the very edge; a
  clean full-frame original photo would let it read more clearly (no code change for the swap).

## Iteration: match the user's reference mockup exactly (committing together)

- User supplied the exact target screenshot. Rebuilt the hero to match it precisely:
  - .hero::before: right-anchored band restored, width var(--hero-photo-w, 53%), background-position
    left center; added a left-edge feather (mask-image linear-gradient(90deg, transparent 0, #000 11%))
    so the band dissolves into navy with NO vertical seam/line (the "line" the user flagged)
  - .hero::after: smooth multi-stop gradient — 0.97@0, 0.94@30, 0.84@41, 0.60@50, 0.36@60, 0.18@72,
    0.05@87, 0.00@100 (+ softened vertical vignette). Band edge (~47%) hides under the feather+gradient
  - Copy widened to match the reference: .hero__headline max-width 430 -> 565 (orange "We make that
    possible." now ONE line); .hero__sub max-width 350 -> 480 (4-line paragraph), color 0.58 -> 0.68,
    line-height 1.75 -> 1.7
  - Result vs reference: women on the right, older woman's FACE fully clear of the copy, smooth gradient
    with no line, lamp+caregiver bright on the right, hand-on-shoulder in the blend zone
  - Mobile (max-width 640): .hero::before mask reset to none (keeps full-bleed mobile photo unfaded)
  - Verified desktop(1554) + mobile(390) headless screenshots against the reference
- Image still the soft 746x558 placeholder crop; client's hi-res original would sharpen it (no code change)

## Iteration: restored smooth gradient (superseded by the reference-match above)

- Prior step wrongly steepened .hero::after to expose the hand, flattening the premium gradient
  (against the user's explicit instruction). Restored a smooth, gradual multi-stop gradient:
  0.96@0, 0.93@28, 0.84@40, 0.66@50, 0.46@60, 0.30@74, 0.18@100 (+ vertical vignette)
- Hand/shoulder kept visible via FRAMING not gradient hacks: --hero-photo-w 53% -> 50% (pushes the
  hand into the gradient's lighter zone); background-position left center
- Re-cropped image (offset 808) retained; copy unchanged (headline 430 / sub 350)
- Verified desktop(1440)+mobile(390): smooth premium gradient + shoulder visible, hand softly present

## Iteration: ROOT-CAUSE fix — re-crop image to include hand+shoulder (image fix retained)

- Root cause of repeated failures: images/hero-ai.jpg had been cropped from the composite at x=840,
  which sliced OFF the caregiver's hand (x~830) and older woman's outer shoulder (x~815). No CSS could
  reveal detail absent from the file.
- Re-cropped images/hero-ai.jpg from the composite at offset x=808 (746x558) — hand + full shoulder now
  present; cropped just right of the baked-in text so none intrudes.
- CSS retune so hand/shoulder sit right of the copy and read clearly:
  - --hero-photo-w 60% -> 53%; background-position left center (keeps the far-left hand; trims the
    far-right lamp — acceptable per priority)
  - .hero::after gradient lightened across the hand zone: 0.95@0, 0.94@37, 0.54@45, 0.26@53, 0.20@74,
    0.16@100 (+ vignette) so the hand/shoulder (~46-52%) are visible, not muddy
  - copy stays narrow: .hero__headline max-width 430, .hero__sub 350 (ends ~37%, ~10% gap to people)
- Verified desktop(1440)+mobile(390) screenshots: hand/shoulder in frame & right of copy; left zone clean
- Caveat: the hand is in a naturally dim/shadowed part of this AI crop; a full-res original at
  images/hero-ai.jpg would render it more clearly
- Knobs: crop offset, --hero-photo-w, background-position, .hero::after stops, copy max-widths

## Iteration: copy clears the hand-on-shoulder boundary (superseded — image lacked the hand)

- Problem: hand/shoulder contact sits in the LEFT of the photo crop, so the copy still overlapped it
- Fix = pull copy in + keep photo wide enough to render hand/shoulder uncropped (don't shrink band):
  - .hero__headline max-width 680 -> 470 (orange line now wraps to two lines, stays in left zone)
  - .hero__sub max-width 560 -> 430
  - .hero::before width var 54% -> 60% (width-bound => no left-crop) ; background-position right -> left
    (keep the far-left hand/shoulder visible; trims ~3-4% of the far-right lamp)
  - .hero::after re-aligned: 0.97@0, 0.95@40, 0.74@48, 0.42@58, 0.28@76, 0.20@100 (+ vignette)
- Result: copy fully in left dark zone; older woman shoulder + caregiver on the right, warm; lamp still
  visible; verified desktop(1440)+mobile(390) headless screenshots
- Knobs: .hero__headline/.hero__sub max-width, --hero-photo-w, .hero::before position, .hero::after stops

## Iteration: protected copy zone, people on the right (superseded by the above)

- Reversed the over-wide band: people back on the right, left ~48% is a protected text-safe zone
- .hero::before width var(--hero-photo-w) 84% -> 54%; background-position center -> right center
- .hero::after: strong left->right protect gradient — 0.97@0, 0.95@44%, 0.72@52%, 0.42@60%,
  0.30@76%, 0.22@100% (+ vertical vignette). Opaque left (0-44%) also hides the band edge
- Older adult sits center-right (face clears the orange line), caregiver far right, lamp far right
- Mobile: .hero::before reset to full-bleed (left/right/width 100%, background-position 60% 28%) so
  the people stay present under the stronger top-down overlay; readability prioritized
- Verified desktop (1440) + mobile (390) via headless-chromium screenshots
- Tuning knobs: --hero-photo-w (framing), .hero::after stops (readability), .hero min-height (660px)

## Iteration: integrated photo + multi-stop gradient (superseded by the above)

- Goal: hero reads as one composition (not a dark text panel beside a photo); older adult nearer
  centre & partially in the blend, caregiver clear on the right, warm lamp far right
- .hero::before: widened photo band 58% -> var(--hero-photo-w, 84%) (bleeds into centre); removed the
  mask (its hard left edge is now hidden under the opaque-left gradient zone -> still seamless)
- .hero::after: replaced empty desktop scrim with a 6-stop navy gradient
  (~0.95 left -> 0.62 @38% -> 0.30 @56% -> 0 @100%) + a subtle vertical vignette
- .hero min-height 600 -> 660 (more vertical presence)
- Mobile: photo full-band + stronger top-down navy overlay (readability first), faces clear of headline
- Verified via headless-chromium screenshots at 1440 and 390 widths (desktop + mobile)
- Tuning knobs: --hero-photo-w (framing), .hero::after opacity stops (readability), .hero min-height
- NOTE: not yet committed

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
