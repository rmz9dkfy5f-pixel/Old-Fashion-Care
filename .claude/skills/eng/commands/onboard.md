# /eng onboard

## Category

Context

## Purpose

Map an unfamiliar codebase — stack, entry points, how to run it — and save it into reusable docs
such as `docs/MAP.md`.

## When To Use

- First time working in a repo.

## Inputs

- Required: the repo.
- Optional: which area you'll work in.

## Non-Negotiable Guardrails

- **Must not make feature changes.**

## Workflow

1. Identify the stack.
2. Identify the package manager/build system.
3. Identify app entry points.
4. Identify test commands.
5. Identify key directories.
6. Identify deployment/runtime assumptions.
7. Create or update `docs/MAP.md`.
8. Include "how to restart work next time."

## Approval Gates

- None for creating docs; stop before changing app code.

## Required Output

A `docs/MAP.md` covering stack, entry points, run/test commands, key dirs, restart notes.

## Failure Conditions

Stop and ask the user when:
- The repo's run/test path can't be determined from files and needs the user's input.
