# /eng debug

## Category

Quality

## Purpose

Find the actual root cause before touching code, using evidence, ranked hypotheses, a minimal fix,
and a regression test.

## When To Use

- A bug or unexpected behavior needs fixing.

## Inputs

- Required: a description of the failure (or a way to reproduce it).
- Optional: logs, stack traces, failing test names.

## Non-Negotiable Guardrails

- **No fix before root cause.**
- Apply a fix only after evidence supports it.

## Workflow

1. Reproduce or precisely define the failure.
2. Gather evidence.
3. List ranked hypotheses.
4. Identify the most likely root cause in one sentence.
5. Propose the minimal fix.
6. Add or identify a regression test.
7. Apply the fix only after evidence supports it.
8. Verify the fix.

## Approval Gates

- Stop before applying the fix if it touches broad or risky areas.

## Required Output

A debug report (`DEBUG_REPORT_TEMPLATE.md`): reproduction, evidence, ranked hypotheses, root cause,
fix, regression test, verification.

## Failure Conditions

Stop and ask the user when:
- The failure cannot be reproduced or defined.
- Evidence does not support any single root cause.
