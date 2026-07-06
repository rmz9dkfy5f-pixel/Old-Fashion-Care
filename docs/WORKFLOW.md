# Workflow

This file explains how work should move through the project.

---

## Standard Workflow

```text
1. Update STATUS.md.
2. Complete Phase 1 planning.
3. Get approval.
4. Enter Phase 2.
5. Run initial check.
6. Implement smallest approved change.
7. Verify.
8. Update tracking files.
9. Prepare commit notes.
10. Commit.
11. Push if required.
12. Write slice review.
```

---

## Phase 1 Files

Usually updated in Phase 1:

```text
docs/project/PROJECT_BRIEF.md
docs/project/CONTEXT.md
docs/project/STATUS.md
PLAN.md
docs/governance/PHASE_GATES.md
BACKLOG.md
docs/project/DECISION_LOG.md
PROGRESS_NOTE.md
```

---

## Phase 2 Files

Usually updated in Phase 2:

```text
docs/project/STATUS.md
SLICE_REVIEWS.md
PROGRESS_NOTE.md
PROGRESS_NOTES.md
docs/project/COMMIT_NOTES.md
docs/project/CHANGELOG.md
docs/project/RELEASE_NOTES.md
LESSONS_LEARNED.md
```

---

## Approval Rule

No file changes before approval, except approved scaffolding or read-only inspection.

---

## Completion Rule

No slice is done until verification and tracking are complete.


---

## AI Context Workflow

For AI-assisted work, use this pattern:

```text
Plan → build → debug if needed → verify → checkpoint → promote reusable lesson
```

Required durable outputs:

| Situation | Output |
|---|---|
| Designing architecture | `ai/sessions/designs/YYYY-MM-DD_name.md` |
| Building a feature | `ai/sessions/features/YYYY-MM-DD_name.md` |
| Debugging a problem | `ai/sessions/debug/YYYY-MM-DD_name.md` |
| Resetting chat context | `ai/checkpoints/YYYY-MM-DD_name.md` |
| Capturing reusable solution | `ai/patterns/name.md` |
| Capturing reusable instruction | `ai/prompts/name.md` |

Do not continue a confused AI session. Checkpoint and restart cleanly.
