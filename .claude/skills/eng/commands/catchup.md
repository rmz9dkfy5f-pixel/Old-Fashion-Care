# /eng catchup

## Category

Daily Loop

## Purpose

Reconstruct current repo/session state fast after a `/clear`, a pull, or a day away, so the user
does not have to re-explain what changed.

## When To Use

- Starting a session on a repo you were working on earlier.
- After pulling changes or switching branches.

## Inputs

- Required: a git repository.
- Optional: which area/feature you were last working on.

## Non-Negotiable Guardrails

- Read-only. **Must not edit files.**
- Report what is actually in the repo; do not infer work that isn't in git/docs.

## Workflow

1. Read `git status`.
2. Read recent commits (`git log`).
3. Read changed files in the working tree.
4. Read relevant context docs if present: `README.md`, `CLAUDE.md`, `CURRENT_CONTEXT.md`,
   `SESSION_LOG.md`, `HANDOFF.md`, `HANDOFF_TO_CLAUDE.md`, `DECISION_LOG.md`, `CHANGELOG.md`,
   `ROADMAP.md`.
5. Summarize: what changed, what is unfinished, current risks, and the next best `/eng` command.

## Approval Gates

- None (read-only).

## Required Output

A concise state summary: What Changed / Unfinished / Risks / Recommended Next Command.

## Failure Conditions

Stop and ask the user when:
- The directory is not a git repository.
- Git history is unavailable or ambiguous about current state.
