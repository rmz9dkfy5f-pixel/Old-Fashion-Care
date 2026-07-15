---
description: Engineering workflow dispatcher for planning, debugging, reviewing, verifying, shipping, handoff, release, and codebase context workflows. Invoke as /eng <subcommand> [task].
disable-model-invocation: true
arguments: [subcommand, task]
---

# EngKit Dispatcher

You are running EngKit.

Raw arguments:

```text
$ARGUMENTS
```

Subcommand:

```text
$1
```

## Dispatch Rules

1. The first argument is the EngKit subcommand.
2. Everything after the first argument is task input.
3. If no subcommand is provided, show the available command list from `COMMAND_INDEX.md` and ask
   the user which one to run.
4. If the subcommand is unknown, refuse to improvise. Show the nearest valid commands.
5. Load and follow the matching command spec from:

```text
${CLAUDE_SKILL_DIR}/commands/<subcommand>.md
```

6. Preserve the command's approval gates.
7. Do not touch code unless the command explicitly allows it and any required user approval has
   been received.
8. Do not claim success without proof.

## Global Guardrails

- Start by identifying the actual task, assumptions, unknowns, and risk level.
- Prefer reading existing files before editing.
- Use the smallest safe change.
- Run relevant tests, builds, linters, or runtime checks when applicable.
- Show exact verification output or summarize it with filenames and commands.
- If verification cannot be run, explain exactly why and what the user must run.
- Check for secrets before commit or PR workflows.
- Preserve existing user work and uncommitted changes.
- Do not run destructive commands without explicit user approval.

## Run

Find and follow the command spec for `$0`.
