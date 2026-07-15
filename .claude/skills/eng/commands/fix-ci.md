# /eng fix-ci

## Category

Quality

## Purpose

Fix CI based on the actual failing logs — not the check title — then push and watch until green.

## When To Use

- CI checks are failing on a branch/PR.

## Inputs

- Required: a repo with failing CI (and ideally `gh` available).
- Optional: which check to prioritize.

## Non-Negotiable Guardrails

- **Must not guess from the CI title alone.**
- Push only after user approval unless already authorized.

## Workflow

1. Use `gh` if available to inspect failing checks.
2. Pull the logs.
3. Identify the actual failing command/error.
4. Reproduce locally when possible.
5. Fix the smallest cause.
6. Run the failing check locally.
7. Push only after user approval unless already authorized.
8. Watch checks until green when possible.

## Approval Gates

- Stop before pushing.

## Required Output

The real failure identified, the fix, local re-run result, and CI status after push.

## Failure Conditions

Stop and ask the user when:
- Logs are inaccessible.
- The failure cannot be reproduced or the cause is ambiguous.
