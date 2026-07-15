# /eng pr-review

## Category

Quality

## Purpose

Review someone else's PR: pull it, run it when feasible, and provide structured findings with
file:line references ready to paste or post.

## When To Use

- Reviewing an incoming PR.

## Inputs

- Required: a PR number/URL or branch.
- Optional: review focus areas.

## Non-Negotiable Guardrails

- **Must not edit code unless the user explicitly asks.**
- Separate blockers from non-blocking suggestions.

## Workflow

1. Fetch the PR.
2. Read the diff.
3. Run tests/build when feasible.
4. Identify only actionable findings.
5. Include file:line references where possible.
6. Separate blockers from non-blocking suggestions.
7. Provide a paste-ready review.

## Approval Gates

- None (read-only) unless the user asks for edits.

## Required Output

A review (`REVIEW_REPORT_TEMPLATE.md`): blockers, non-blocking suggestions, verification run,
paste-ready summary.

## Failure Conditions

Stop and ask the user when:
- The PR cannot be fetched or built and review would be guesswork.
