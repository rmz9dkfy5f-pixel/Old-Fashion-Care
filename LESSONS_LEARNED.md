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
