# Progress Note

This file is GitHub-specific tracking and must be kept unconditionally.

Use this as the current active progress note.

For historical notes, copy completed entries into `PROGRESS_NOTES.md`.

---

## Latest — Fixed a Real Staleness Gap in the Push Workflow Itself (2026-07-18)

A follow-up session running `REPO_SESSION_START_RECOVERY_AUDIT.md` found this very file was stale
after the founder-photo push (below) — still describing 2026-07-15/07-12 state, missing that fix
entirely. Root cause: `Prompts/repo_push_handoff_snapshot_tag_prompt_snapshot_naming_refined.md`
told the agent `PROGRESS_NOTE.md` and `PROGRESS_NOTES.md` were alternatives ("prefer
`PROGRESS_NOTES.md`"), so the previous push updated the plural historical log and silently skipped
this file — despite `CLAUDE.md`/`AGENTS.md`/`REPOSITORY_HANDOFF_CONFIG.md` all marking it required
"unconditionally."

**Fixed:** this file's content (done in that same follow-up turn), then the push prompt itself:
`PROGRESS_NOTE.md` moved into the mandatory every-push section, the ambiguous guidance removed, a
`git diff --stat` cross-check added before commit (Section 6), and a new Section 2a requiring the
linked AntBrainOS vault project folder (`03_PROJECTS/Active/Old_Fashion_Care/`) to be updated on
every push, not only at session end.

**Also propagated to the vault:** the user asked for "no gaps... system to system, or session to
session." Confirmed the AntBrainOS vault's own canonical copy of this prompt carried the
byte-identical bug (no auto-sync between a repo's local copy and the vault template — flagged as
its own gap) and fixed it there too, plus added an independent Step 18a to the vault's
`CLAUDE_CODE_SESSION_END.md` so a future closeout can't record a repo as clean/current purely by
trusting a prior push-prompt step. See `docs/project/DECISION_LOG.md` (this repo) and the vault's
`08_DECISIONS/DECISION_LOG.md` #36 for full detail.

Committed/tagged/pushed as `8ed5902` (tag `v2.7.0__push-workflow-tracking-file-gap-fix__commit-8ed5902`),
RepoBackups snapshot verified (351 files, 0 diff vs `git ls-tree`). See `docs/project/COMMIT_NOTES.md`
for the full entry.

---

## Current Progress

Date:

```text
2026-07-18
```

Phase:

```text
Phase 2 — push-workflow governance fix committed and pushed to main. No active site-implementation
slice: the user confirmed "nothing yet" at the prior 2026-07-18 closeout, and this push is a
process/docs fix, not a new implementation slice.
```

Current slice:

```text
None (site-implementation). Awaiting the user's choice of next task. Ranked candidates carried
from the 2026-07-18 closeout: (1) the oldfashioncare.com/Jottful hosting mismatch, (2)
.nav__cta/.section--coral contrast fix + dedicated apple-touch-icon.png, (3) the pending client
hero-variant decision, (4) tag+snapshot the cream-immersive branch once reviewed, (5) decide on
deleting migration/project-starter-v3-3, (6) the 4 SEO hygiene quick-wins from
seo/audits/hygiene-2026-07-14.md.
```

Completed:

- [x] Root-caused why `PROGRESS_NOTE.md` went stale: an ambiguous instruction in this repo's own
      push prompt, not a one-off oversight
- [x] Fixed `PROGRESS_NOTE.md` content and the push prompt (Sections 2/2a/4/6)
- [x] Confirmed and fixed the same bug in the AntBrainOS vault's canonical copy of this prompt
- [x] Added an independent cross-check (Step 18a) to the vault's `CLAUDE_CODE_SESSION_END.md`
- [x] Recorded the decision in this repo's `docs/project/DECISION_LOG.md` and the vault's
      `08_DECISIONS/DECISION_LOG.md` (#36)

In progress:

- [ ] None — this push is self-contained (docs/process only)

Blocked:

- [ ] `oldfashioncare.com`/Jottful hosting mismatch — needs the user's own DNS/hosting knowledge,
      not agent-actionable alone
- [ ] `.nav__cta`/`.section--coral` contrast fix + dedicated apple-touch-icon.png — still queued
      since 2026-07-11/2026-07-15

Next action:

> No site-implementation task is currently authorized. The same ranked list from the prior
> 2026-07-18 closeout remains open (`oldfashioncare.com` hosting question; nav/section coral
> contrast fix + apple-touch-icon; client hero-variant decision; cream-immersive tag/snapshot;
> `migration/project-starter-v3-3` deletion; SEO hygiene quick-wins). Ask before starting anything
> new next session.

Checks run:

```bash
git status --porcelain=v1 --untracked-files=all # empty before commit (hard clean)
git diff --stat                                  # confirmed every required tracking file present
grep -rn "prefer \`PROGRESS_NOTES.md\`"           # confirmed the ambiguous line no longer exists
git rev-parse --short HEAD                       # 8ed5902
git tag --points-at HEAD                         # v2.7.0__push-workflow-tracking-file-gap-fix__commit-8ed5902
```

Commit status:

```text
Committed, tagged, and pushed: 8ed5902 (tag
v2.7.0__push-workflow-tracking-file-gap-fix__commit-8ed5902). Matches origin/main. RepoBackups
snapshot verified (351 files, 0 diff vs git ls-tree). Docs/process-only — no site code.
```

Approval status:

```text
User explicitly asked to execute the push prompt this turn ("execute
.../repo_push_handoff_snapshot_tag_prompt_snapshot_naming_refined.md") — direct authorization for
commit/tag/snapshot/push per this repo's "commit only when the user asks" rule. The underlying fix
itself was authorized incrementally across the conversation: "fix this" (PROGRESS_NOTE.md), then
"yes" (propagate Section 2a into this repo's own copy).
```
