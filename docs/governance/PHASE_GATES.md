# Phase Gates

Use phase gates to prevent uncontrolled project drift. This project also uses a simpler two-phase
model day-to-day (Phase 1 = plan/approve, Phase 2 = implement) — see `CLAUDE.md`/`AGENTS.md`. The
gates below are the detailed breakdown of what "Phase 1 approved" / "Phase 2 complete" actually
require.

## Gate 0 — Intake

Required before work starts:

- Objective identified
- Task type identified (feature / bugfix / migration / consolidation / audit)
- Relevant files located
- Risks and assumptions listed
- Stop conditions known (see `docs/governance/CHANGE_CONTROL.md`)

## Gate 1 — Plan

Required before edits:

- Minimal implementation path selected
- Files likely to change listed
- Validation method selected
- Rollback path identified (see `docs/governance/ROLLBACK_PLAN.md`)
- Explicit user approval given (Phase 1 → Phase 2 gate)

## Gate 2 — Implementation

Required before claiming completion:

- Changes are scoped to the approved slice
- No unrelated rewrites
- No unauthorized deletions
- Conflicts quarantined (`.v34_migration_review/`), not force-merged

## Gate 3 — Verification

Required before PASS:

- Manual/automated validation run as applicable (browser check, `v34_validate.py`, asset
  resolution sweep, etc.)
- Failures fixed or documented
- Unverified areas listed

## Gate 4 — Documentation

Required before handoff:

- `docs/project/STATUS.md` updated
- `docs/project/DECISION_LOG.md` updated if a real decision was made
- `docs/governance/PROJECT_RISK_REGISTER.md` updated if risk changed
- `SLICE_REVIEWS.md`, `COMMIT_NOTES.md` (now `docs/project/COMMIT_NOTES.md`), `PROGRESS_NOTE.md`
  updated per this repo's standard workflow
- Commit message prepared (no LLM co-author lines)

## Gate 5 — Release / Production Readiness

Required before production (i.e. before merging to `main`, since Netlify auto-deploys from it):

- `docs/governance/SECURITY_BASELINE.md` reviewed
- `docs/governance/COMPATIBILITY_MATRIX.md` reviewed
- `docs/governance/ROLLBACK_PLAN.md` reviewed
- `docs/governance/RELEASE_GATE.md` reviewed
- User-facing impact understood and, if needed, explicitly approved (this is a live client site)

**Status (2026-07-19):** all four docs above were blank templates before this date — a
production-readiness audit found and filled in all four in the same pass (see
`docs/governance/audits/production-readiness-2026-07-19.md`). This gate is now substantively
satisfied for the current state of `main`; re-review whichever doc is relevant after any future
change of the type it covers (security/auth change → `SECURITY_BASELINE.md`, new
platform/browser target → `COMPATIBILITY_MATRIX.md`, etc.) rather than treating this as a
one-time checkbox.
