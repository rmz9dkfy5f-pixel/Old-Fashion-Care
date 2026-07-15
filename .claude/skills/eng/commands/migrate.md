# /eng migrate

## Category

Leverage

## Purpose

Run a mechanical migration safely: prove the transform on 2–3 files first, then fan out batch by
verified batch.

## When To Use

- A repetitive, mechanical change across many files.

## Inputs

- Required: the migration description/scope.
- Optional: representative sample files.

## Non-Negotiable Guardrails

- **Must not fan out before the pilot passes.**
- Verify after each batch.

## Workflow

1. Identify the migration scope.
2. Select 2–3 representative files.
3. Perform the pilot transform.
4. Run tests.
5. Review diff quality.
6. Wait for approval.
7. Batch the remaining files.
8. Verify after each batch.
9. Produce a migration report.

## Approval Gates

- Stop after the pilot; wait for approval before fanning out.

## Required Output

Pilot result, then per-batch progress + verification, ending in a migration report.

## Failure Conditions

Stop and ask the user when:
- The pilot transform fails tests or produces low-quality diffs.
