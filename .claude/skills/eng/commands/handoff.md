# /eng handoff

## Category

Daily Loop

## Purpose

Preserve continuation state before stopping so the next session can pick up without re-explaining.

## When To Use

- Ending a work session mid-task.
- Before a context reset.

## Inputs

- Required: the current repo/task state.
- Optional: the repo's existing handoff-file convention.

## Non-Negotiable Guardrails

- Prefer the repo's existing handoff convention; otherwise create `HANDOFF_TO_CLAUDE.md`.
- Do not commit unless asked.

## Workflow

1. Summarize the current task.
2. Summarize changed files.
3. Record commands run.
4. Record verification performed.
5. Record open decisions.
6. Record the next best restart point.
7. Update or create the repo's handoff file (see the `HANDOFF_TEMPLATE.md`).

## Approval Gates

- Stop before committing the handoff file (do not commit unless asked).

## Required Output

The written/updated handoff file path + its contents summary.

## Failure Conditions

Stop and ask the user when:
- The repo already has a conflicting handoff convention and it's unclear which to update.
