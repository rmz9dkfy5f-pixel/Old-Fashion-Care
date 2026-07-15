# /eng simplify

## Category

Quality

## Purpose

Strip over-engineering out of a change: dead abstractions, premature generality, and code that does
nothing.

## When To Use

- A change (or module) feels more complex than the problem requires.

## Inputs

- Required: the code/change to simplify.
- Optional: constraints that must be preserved.

## Non-Negotiable Guardrails

- Preserve behavior.
- Propose deletions before edits.

## Workflow

1. Identify over-engineered pieces.
2. Separate necessary complexity from accidental complexity.
3. Propose deletions before edits.
4. Remove dead abstractions, unused indirection, premature generality.
5. Preserve behavior.
6. Run tests.

## Approval Gates

- **Stop before deleting large code paths.**

## Required Output

Before/after structure summary, list of removals, and test result.

## Failure Conditions

Stop and ask the user when:
- Simplification would change behavior or remove code with unclear callers.
