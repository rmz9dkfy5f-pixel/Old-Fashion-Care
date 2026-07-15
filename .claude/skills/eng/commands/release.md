# /eng release

## Category

Leverage

## Purpose

Cut a verified release: version bump, changelog from merged PRs, tag, and publishable release
notes.

## When To Use

- Shipping a versioned release.

## Inputs

- Required: a clean repo at a release point.
- Optional: desired version number.

## Non-Negotiable Guardrails

- Confirm a clean working tree first.
- Create the tag and push only after approval.

## Workflow

1. Confirm a clean working tree.
2. Identify the version bump.
3. Review merged PRs/commits since the last tag.
4. Update changelog/release notes.
5. Run full verification.
6. Create the tag only after approval.
7. Produce publishable release notes.
8. Push only after approval.

## Approval Gates

- Stop before creating the tag and before pushing.

## Required Output

Version, changelog entries, verification result, and release notes (`RELEASE_NOTES_TEMPLATE.md`).

## Failure Conditions

Stop and ask the user when:
- The working tree is dirty.
- Verification fails.
