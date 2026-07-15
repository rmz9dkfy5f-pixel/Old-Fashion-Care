# /eng docs

## Category

Quality

## Purpose

Make docs match the code: sync README, API docs, and changelog with what the code actually does
now, driven by the real diff.

## When To Use

- After a change that affects behavior, APIs, or setup.

## Inputs

- Required: the code/diff whose docs may be stale.
- Optional: which docs to prioritize.

## Non-Negotiable Guardrails

- Update only docs affected by real changes.
- Avoid aspirational or unimplemented claims.

## Workflow

1. Inspect the actual diff and current behavior.
2. Identify stale docs.
3. Update only docs affected by real changes.
4. Update changelog/release notes if appropriate.
5. Avoid aspirational or unimplemented claims.
6. Verify links, commands, and examples when possible.

## Approval Gates

- Stop before editing shared policy docs (e.g. CONTRIBUTING) if the change is large.

## Required Output

List of docs updated with a short diff summary each; note any examples/links verified.

## Failure Conditions

Stop and ask the user when:
- It's unclear whether a behavior is intended (don't document a possible bug as a feature).
