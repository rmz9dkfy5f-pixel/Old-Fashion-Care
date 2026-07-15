# /eng commit

## Category

Daily Loop

## Purpose

Commit staged work safely with a clean conventional-commit message derived from the actual staged
diff — refusing when tests fail or secrets are present.

## When To Use

- You have staged changes ready to commit.

## Inputs

- Required: staged changes in a git repo.
- Optional: an instruction to skip tests (must be explicit).

## Non-Negotiable Guardrails

- Refuse to commit if nothing is staged.
- Check for secrets, credentials, tokens, private keys, `.env` leaks in the staged diff.
- Commit only staged files.

## Workflow

1. Confirm staged vs unstaged changes.
2. Refuse if nothing is staged.
3. Inspect the staged diff.
4. Scan for secrets/credentials.
5. Determine relevant tests and run them (unless the user explicitly said not to).
6. Write a conventional commit message from the actual staged diff.
7. Commit only staged files.
8. Report the commit hash and a summary.

## Approval Gates

- Stop before committing if the staged diff mixes unrelated changes or includes generated files
  without a stated reason.

## Required Output

Commit hash + one-line summary, plus the test/secret-scan result.

## Failure Conditions

Refuse and ask the user when:
- Tests fail.
- Secrets are detected.
- The staged diff contains unrelated changes.
- Generated files are included without reason.
