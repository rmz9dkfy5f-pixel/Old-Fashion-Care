# /eng worktree

## Category

Leverage

## Purpose

Spin up a Git worktree with its own branch so a second task can run in parallel without touching
the current one.

## When To Use

- You need to work on a parallel task without disturbing the current branch/working tree.

## Inputs

- Required: a git repo.
- Optional: desired branch/path name.

## Non-Negotiable Guardrails

- Refuse if uncommitted changes would be endangered.
- Create the worktree only after approval.

## Workflow

1. Inspect the current git state.
2. Refuse if uncommitted changes would be endangered.
3. Propose a worktree path and branch name.
4. Create the worktree only after approval.
5. Provide the exact next command to enter it.
6. Do not start unrelated implementation unless asked.

## Approval Gates

- Stop before creating the worktree.

## Required Output

The proposed path/branch, the create command, and the exact command to enter the worktree.

## Failure Conditions

Stop and ask the user when:
- Uncommitted changes make a worktree unsafe.
