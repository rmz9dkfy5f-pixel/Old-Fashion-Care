# /eng ship

## Category

Daily Loop

## Purpose

Take current work from branch to PR: verify, check secrets, commit if needed, push, and open a PR
whose description is generated from the actual diff.

## When To Use

- A change is complete and verified and ready to become a PR.

## Inputs

- Required: a git repo with the change on a branch.
- Optional: target base branch, PR labels/reviewers.

## Non-Negotiable Guardrails

- Run verification before shipping.
- Check for secrets before commit/push.
- Push only after approval.

## Workflow

1. Confirm current branch and working tree.
2. Run `/eng verify`-equivalent checks.
3. Inspect the diff.
4. Check for secrets.
5. Commit if needed and approved.
6. Push the branch if approved.
7. Open a PR with a description generated from the actual diff.
8. Include verification output in the PR.

## Approval Gates

- Stop before push and before PR creation.

## Required Output

PR URL (or the exact command to open it) + the diff-derived description and verification output.

## Failure Conditions

Refuse and ask the user when:
- Verification fails.
- Secrets are detected.
- The working tree is dirty in a way that would ship unrelated changes.
