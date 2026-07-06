# Done Criteria

A task is not done because files changed. A task is done when the result is verified, documented,
and safe to hand off.

## Universal Done Criteria

A task reaches **PASS** only when:

- The approved scope is complete.
- No unrelated refactor or cleanup was performed.
- Relevant files changed are listed in the final summary.
- Existing user work was preserved (not silently overwritten).
- Validation was run (manual browser check, `v34_validate.py`, asset resolution sweep, etc.) or a
  clear reason is documented for why it could not run.
- `docs/project/STATUS.md` reflects the current state.
- `docs/project/DECISION_LOG.md` is updated if architecture, security, deployment, or workflow
  changed.
- Remaining risks are listed.
- Follow-up work is identified.
- Commit message is prepared (no LLM co-author lines).

## Status Levels

### PASS

The task satisfies the objective and validation passed.

### PARTIAL

The task is useful but has known gaps, missing validation, or follow-up work.

### BLOCKED

The task cannot continue safely because of missing access, missing context, tool failure, or
conflicting requirements.

### FAIL

The task produced an unsafe or invalid result and should be revised or rolled back.

## Feature Slice Done Criteria

- The feature matches the approved slice.
- User-facing behavior is described.
- Edge cases are listed.
- Verification steps are recorded.
- No unrelated UI, routing, or architecture changes were made.

## Debug Slice Done Criteria

- The symptom is documented.
- Evidence is documented.
- Root cause is identified or explicitly marked unresolved.
- The fix is minimal.
- Verification proves the bug is fixed or narrows the issue.

## Migration/Consolidation Done Criteria

A starter-kit migration or doc consolidation is done when:

- Existing content was preserved (moved/merged, not silently deleted).
- Conflicts were quarantined (`.v34_migration_review/`, `.starter-kit/review/conflicts/`) before
  being reconciled by hand.
- Added, moved, and deleted files are all listed.
- `docs/governance/REPO_HEALTH_CHECK.md` and `docs/governance/ROLLBACK_PLAN.md` are updated.
- Risky recommendations are listed but not executed without approval.

## Never Mark PASS If

- Validation was available but not run.
- Validation failed.
- The agent overwrote existing files without approval.
- The solution depends on unverified assumptions.
- There are unresolved merge conflicts.
- Security-sensitive changes were made without review.
