# /eng plan

## Category

Daily Loop

## Purpose

Plan an implementation approach before touching code: inspect the relevant files, propose an
approach with a file list and risks, and wait for approval.

## When To Use

- Before starting any non-trivial change.

## Inputs

- Required: a task description.
- Optional: pointers to the relevant area of the codebase.

## Non-Negotiable Guardrails

- **No code edits during `/eng plan`.**

## Workflow

1. Inspect relevant files.
2. State the problem framing.
3. State facts, assumptions, and unknowns.
4. Propose an implementation approach.
5. List the files likely to be edited.
6. List risks and a rollback plan.
7. Define a verification plan.
8. Stop and wait for user approval.

## Approval Gates

- Stop after presenting the plan; do not implement until the user approves.

## Required Output

A plan following `PLAN_TEMPLATE.md`: framing, approach, files, risks, rollback, verification plan.

## Failure Conditions

Stop and ask the user when:
- The task is ambiguous or under-specified.
- The change would require touching areas outside the stated scope.
