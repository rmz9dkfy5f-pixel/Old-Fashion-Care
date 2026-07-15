# /eng learn

## Category

Context

## Purpose

Turn a correction or mistake into a durable repo guardrail so it does not happen twice.

## When To Use

- Right after the user corrects a mistake you'd want to avoid repeating.

## Inputs

- Required: the mistake/correction.
- Optional: where guardrails live in this repo.

## Non-Negotiable Guardrails

- Draft the minimal rule; don't over-generalize.
- Ask for approval before editing shared policy files.

## Workflow

1. Identify the mistake pattern.
2. Determine where the guardrail belongs: `CLAUDE.md`, project README, prompt/skill docs, tests, or
   hooks.
3. Draft the minimal rule.
4. Ask for approval if editing shared policy files.
5. Apply the update.
6. Show the exact diff.

## Approval Gates

- Stop before editing shared policy files (e.g. CLAUDE.md).

## Required Output

The guardrail added, where it lives, and the exact diff.

## Failure Conditions

Stop and ask the user when:
- It's unclear which artifact should hold the guardrail.
