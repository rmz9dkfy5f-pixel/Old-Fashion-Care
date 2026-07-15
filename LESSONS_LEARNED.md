# Lessons Learned

Use this file to improve future planning and execution.

This is not a changelog.

`CHANGELOG.md` records what changed.

`LESSONS_LEARNED.md` records what should be done better next time.

---

## Lesson Template

### YYYY-MM-DD — Lesson Title

Context:

> [What happened?]

Lesson:

> [What should be learned?]

Cause:

> [Why did it happen?]

Correction:

> [What should change next time?]

Reusable rule:

> [Turn the lesson into a future rule.]

---

## Lessons

### 2026-07-15 — A translucent color shape painted over a photo always reads as haze, however gradual

Context:

> Building the split-depth hero's cream/photo dissolve took 3 attempts. Attempt 1: a solid cream
> ellipse with a short opacity fade at its edge — user reported it as a hard line. Attempt 2: the
> same cream ellipse, but with the fade widened and given many more, more evenly-spaced opacity
> stops — user reported it as "not smooth or professional-looking," a milky haze. Attempt 3: removed
> the cream shape entirely and instead put a `mask-image` on the photo itself (the photo's own pixels
> fade to transparent, revealing the cream page behind), which the user approved immediately.

Lesson:

> When a photo needs to dissolve into a solid-color page, mask the photo — don't paint a
> semi-transparent shape of the page color over the photo. The overlay approach cannot be tuned into
> looking clean: however many opacity stops it has, a translucent color layer sitting on top of photo
> detail desaturates and flattens whatever's under it, which reads as fog/haze at any width. This is
> a technique problem, not a tuning problem — no amount of adjusting stop percentages fixes it.

Cause:

> The instinct to "fix" a hard-edged blend by adding more/wider gradient stops treats the symptom
> (a visible edge) without questioning the underlying method (compositing a colored layer over image
> content). The masking approach was reached only after the second rejection made clear that gradual
> vs. abrupt wasn't the actual axis of the problem.

Correction:

> Switched `.es-hero__media::before` (a cream-filled pseudo-element) to a `mask-image` /
> `-webkit-mask-image` on `.es-hero__media` itself, shaped as an off-center radial gradient so the
> image's own edge fades to transparent along an organic curve. Zero color compositing over the
> photo; the cream simply shows through where the mask is transparent.

Reusable rule:

> For any "photo/image dissolves into a solid-background page" effect, default to `mask-image` on
> the image element. Reach for a colored overlay pseudo-element only when the desired effect is an
> actual tint/scrim over the image (e.g. darkening a photo for text contrast) — never as a stand-in
> for making the image's *edge* soft.

---

### 2026-07-13 — Screenshot QA that force-shows scroll-reveals masks "content begins hidden" bugs

Context:

> During the Editorial Sage redesign, the verification script force-added `.visible` to every
> `.reveal` element before screenshotting. Every page "passed." But the redesign had carried the old
> site's scroll-triggered `.reveal` (opacity:0 until scrolled into view), and the user found the Meet
> Regina page (`about.html`) rendering with two blank sections on load — the values grid and CTA sit
> below a full-width band and never revealed until scrolled to.

Lesson:

> Forcing animation end-states during visual QA hides the exact class of bug those animations can
> cause (content invisible on initial load). Verify the real first-paint, not the animated resting
> state.

Cause:

> The QA harness added `.visible` to all `.reveal` nodes "so the full-page screenshot looks complete"
> — which is precisely what concealed the on-load blank sections. The reveal pattern also violated the
> design plan's own rule (§8.4/§13: no content that begins hidden), which should have been caught at
> design time.

Correction:

> Neutralized `.reveal` so content is always visible (kept as a harmless JS hook). Added a fresh-load
> check that measures computed `opacity` of every `.reveal` with **no scrolling and no force-show**.

Reusable rule:

> When a page uses scroll/entrance animations, always include one QA pass that loads the page cold
> (no scroll, no force-show) and asserts all primary content is visible. Never force animation
> end-states as the only screenshot path. Prefer content that is visible by default for
> accessibility-first / elder-audience sites.

---

### 2026-06-30 — Post-check workflow does not detect remote divergence

Context:

> After a previous session pushed commits to the remote `migration/project-starter-v3-3` branch, the local branch was left at an earlier commit. The handoff post-check (`git log -1 --oneline`, `git tag --points-at HEAD`) only verified the local HEAD state — it did not check whether the remote had moved ahead. GitHub Desktop blocked the next push with "Newer Commits on Remote."

Lesson:

> Local HEAD verification is not the same as confirming local and remote are in sync.

Cause:

> The post-check workflow only ran `git log -1` and `git tag --points-at HEAD`. Neither command reveals remote divergence.

Correction:

> Add `git log HEAD..origin/<branch>` (or `git status -sb`) to every handoff post-check. If output is non-empty, the remote has commits the local branch does not — stop and pull before declaring the push complete.

Reusable rule:

> Every push verification must include `git log HEAD..origin/$(git branch --show-current)`. Empty output = in sync. Non-empty output = stop and investigate.
