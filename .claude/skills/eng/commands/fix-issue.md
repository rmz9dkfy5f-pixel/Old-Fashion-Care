# /eng fix-issue

## Category

Leverage

## Purpose

Take a GitHub issue from number to merged-ready PR: reproduce, fix at the root, test, and ship.

## When To Use

- Working a tracked issue end to end.

## Inputs

- Required: a GitHub issue number/URL.
- Optional: acceptance-criteria clarifications.

## Non-Negotiable Guardrails

- Fix at the root, not the symptom.
- Respect the approval gates below.

## Workflow

1. Read the GitHub issue.
2. Restate the acceptance criteria.
3. Reproduce the bug or map the requested feature.
4. Create a branch.
5. Implement the minimal root fix.
6. Add tests.
7. Run verification.
8. Commit.
9. Open a PR with summary, tests, risk, and the linked issue.

## Approval Gates

- Before branch creation if the repo state is dirty.
- Before push.
- Before PR creation.

## Required Output

PR (or exact commands) with summary, tests, risk, and linked issue; verification output included.

## Failure Conditions

Stop and ask the user when:
- The issue can't be reproduced or acceptance criteria are unclear.
