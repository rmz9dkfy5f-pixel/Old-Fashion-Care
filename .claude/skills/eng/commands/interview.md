# /eng interview

## Category

Context

## Purpose

Convert a vague idea into a complete `SPEC.md` by interviewing the user until requirements are
nailed.

## When To Use

- Starting something new where requirements are fuzzy.

## Inputs

- Required: the rough idea.
- Optional: constraints, deadline, audience.

## Non-Negotiable Guardrails

- **Stop before implementation.**
- Separate facts, assumptions, constraints, and unknowns.

## Workflow

1. Ask targeted questions in batches.
2. Separate facts, assumptions, constraints, and unknowns.
3. Identify the MVP boundary.
4. Identify non-goals.
5. Define acceptance criteria.
6. Generate `SPEC.md`.
7. Stop before implementation.

## Approval Gates

- Stop after producing SPEC.md; do not implement.

## Required Output

A `SPEC.md` (via `SPEC_TEMPLATE.md`): goals, non-goals, MVP boundary, acceptance criteria.

## Failure Conditions

Stop and ask the user when:
- Key requirements remain unknown after questioning.
