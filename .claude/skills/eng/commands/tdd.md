# /eng tdd

## Category

Quality

## Purpose

Build a feature test-first: failing test shown red, minimal code to green, refactor only on green.

## When To Use

- Building a new feature/behavior in a repo with a test harness.

## Inputs

- Required: the behavior to build.
- Optional: existing test conventions.

## Non-Negotiable Guardrails

- Must not write implementation before a failing test unless the project has no test harness and
  the user approves an alternate verification path.

## Workflow

1. Clarify the behavior.
2. Write a failing test.
3. Show the red failure.
4. Implement minimal code.
5. Show the green test.
6. Refactor only while green.
7. Run broader verification.

## Approval Gates

- Stop and confirm an alternate path if no test harness exists.

## Required Output

The red-then-green test output, the minimal implementation, and broader verification result.

## Failure Conditions

Stop and ask the user when:
- No test harness exists and no alternate verification path is approved.
