# /eng refactor

## Category

Leverage

## Purpose

Restructure code safely with characterization tests first, one concern per step, and a green suite
between every step.

## When To Use

- Improving structure without changing behavior.

## Inputs

- Required: the code to restructure and the behavior to preserve.
- Optional: target structure.

## Non-Negotiable Guardrails

- Avoid behavior changes unless explicitly approved.
- Run tests between steps.

## Workflow

1. Define the preserved behavior.
2. Add characterization tests if coverage is weak.
3. Make one concern change at a time.
4. Run tests between steps.
5. Avoid behavior changes unless explicitly approved.
6. Report before/after structure.

## Approval Gates

- Stop before any step that would change behavior.

## Required Output

Before/after structure, the characterization tests added, and green-suite confirmation per step.

## Failure Conditions

Stop and ask the user when:
- Coverage is too weak to characterize behavior safely.
