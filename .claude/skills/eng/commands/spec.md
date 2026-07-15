# /eng spec

## Category

Context

## Purpose

Turn `SPEC.md` into phased, verifiable tasks; each phase ends with a check that proves it landed.

## When To Use

- You have a SPEC.md and need an execution plan.

## Inputs

- Required: a `SPEC.md`.
- Optional: known constraints/priorities.

## Non-Negotiable Guardrails

- **Stop before implementation.**
- Every phase must end with a proof/check.

## Workflow

1. Read `SPEC.md`.
2. Identify missing acceptance criteria.
3. Split into phases.
4. Each phase must have: goal, files likely touched, implementation steps, proof/check, rollback
   note.
5. Create the task plan.
6. Stop before implementation.

## Approval Gates

- Stop after producing the phased plan.

## Required Output

A phased task plan; per phase: goal, files, steps, proof/check, rollback.

## Failure Conditions

Stop and ask the user when:
- SPEC.md is missing or lacks enough detail to phase.
