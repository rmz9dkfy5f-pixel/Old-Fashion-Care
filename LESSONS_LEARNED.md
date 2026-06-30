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
