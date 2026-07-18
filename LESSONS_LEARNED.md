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

### 2026-07-18 — Similarly-Named Tracking Files Are Not Interchangeable; Chained Workflows Must Not Blindly Trust Each Other

Context:

> `PROGRESS_NOTE.md` went stale for a real push — it kept describing 2026-07-15/07-12 state, missing
> a whole subsequent fix. The push prompt itself was the cause: it told the agent `PROGRESS_NOTE.md`
> and `PROGRESS_NOTES.md` were alternatives ("prefer `PROGRESS_NOTES.md`"), so a real push updated the
> plural file and silently skipped the singular one — even though this repo's own governance docs
> mark it required unconditionally. Separately, the AntBrainOS vault's session-end SOP recorded that
> same push as clean/current with no independent check that the push prompt's own file list had
> actually been honored — it simply trusted the earlier step.

Lesson:

> Two failure modes compounded here, and both are worth naming separately. (1) Don't assume two
> similarly-named files are the same thing or interchangeable just because their names overlap —
> confirm what each one is actually for before deciding one covers the other. (2) When two
> procedures chain together (a push step, then a session-end step), don't let the second one simply
> assume the first one succeeded — an independent, mechanical check (e.g. diffing required files by
> name) catches drift that a purely prose-based instruction can silently let through.

Cause:

> The push prompt's own wording ("if `PROGRESS_NOTES.md` is the main running log, prefer
> `PROGRESS_NOTES.md`") was a plausible-sounding simplification that happened to be wrong for this
> repo, and nothing downstream re-verified it.

Correction:

> Fixed the push prompt (this repo's copy and the AntBrainOS vault's canonical copy) to check the
> specific repo's own governance docs rather than assume any one convention, and added a name-by-name
> `git diff --stat` cross-check before every commit (Section 6) plus an independent cross-check step
> in the vault's `CLAUDE_CODE_SESSION_END.md` (Step 18a).

Reusable rule:

> Before treating two similarly-named files (or two chained procedures) as redundant with each
> other, verify that's actually true for *this* project — and wherever a procedure's correctness
> matters, prefer a mechanical check over a one-line prose reminder.

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
