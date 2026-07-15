# /eng hooks

## Category

Context

## Purpose

Prevent repeated mistakes with hooks: interview the user about what keeps going wrong, then install
hooks that make those mistakes impossible, not merely discouraged.

## When To Use

- The same class of mistake keeps recurring in a repo.

## Inputs

- Required: a description of the recurring failure pattern.
- Optional: the repo's tooling/language.

## Non-Negotiable Guardrails

- **Never install global hooks without explicit user approval.**
- Install local/project hooks only.

## Workflow

1. Interview the user about the repeated failure pattern.
2. Inspect repo language/tooling.
3. Propose a hook strategy.
4. Explain the friction/cost.
5. Wait for approval.
6. Install local/project hooks only.
7. Add escape-hatch instructions.
8. Verify the hook fires on a safe test case.

## Approval Gates

- Stop before installing any hook.

## Required Output

Proposed hooks, their cost/friction, install result, and the safe-case verification.

## Failure Conditions

Stop and ask the user when:
- The only effective option would be a global hook.
