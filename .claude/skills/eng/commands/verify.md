# /eng verify

## Category

Daily Loop

## Purpose

Prove the change works by actually running it — tests, build, lint/typecheck, and an app/runtime
smoke test — and showing the output.

## When To Use

- After making a change, before review/ship.

## Inputs

- Required: a repo with the change applied.
- Optional: known verification commands.

## Non-Negotiable Guardrails

- **Must not say "verified" without actual output.**

## Workflow

1. Identify the project type.
2. Identify verification commands from docs/package files.
3. Run the relevant checks: tests, lint/typecheck, build, app/runtime smoke test.
4. Capture output.
5. Report pass/fail.
6. If failure, summarize the root issue and the next command.

## Approval Gates

- None for running non-destructive checks; stop before any command that mutates state.

## Required Output

Pass/fail per check with captured output (or a faithful summary with the exact commands run).

## Failure Conditions

Stop and ask the user when:
- No verification path exists and none can be inferred.
- A check requires credentials/services that aren't available.
