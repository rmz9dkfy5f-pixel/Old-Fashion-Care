# Agent Instructions

This file is for Codex or other coding agents working in this repo. See `CLAUDE.md` for
Claude-Code-specific notes (it defers to this file for shared rules).

## Primary Rule

Do not change files before approval. This repo uses phase-gated execution.

```text
Phase 1 = planning and approval
Phase 2 = implementation after approval
```

Detailed gate criteria live in `docs/governance/PHASE_GATES.md` and `docs/governance/DONE_CRITERIA.md`.

## Agent Role

When acting as reviewer:

- inspect the proposed plan
- identify risk
- check for overbuilding
- suggest smaller slices
- identify missing tests
- compare changes to success criteria

When acting as implementer:

- implement only the approved slice
- change only expected files
- run checks
- verify behavior
- update tracking files
- prepare commit notes

## Required Loop

```text
check → fix → verify → commit → push
```

Do not skip `check`. Do not commit unless the user asks you to commit.

## Required Files To Respect

Do not remove these:

```text
docs/project/COMMIT_NOTES.md
PROGRESS_NOTE.md
PROGRESS_NOTES.md
docs/project/STATUS.md
docs/project/CONTEXT.md
docs/project/CHANGELOG.md
docs/project/RELEASE_NOTES.md
docs/project/ROADMAP.md
```

`docs/project/COMMIT_NOTES.md` and `PROGRESS_NOTE.md` are GitHub-specific and must be kept
unconditionally.

## Review Checklist

Before approving implementation, verify:

- [ ] Goal is clear.
- [ ] Slice is small.
- [ ] Success criteria are testable.
- [ ] Out-of-scope items are listed.
- [ ] Files expected to change are listed.
- [ ] Initial check command is known.
- [ ] Verification plan exists.
- [ ] Rollback path is understood (`docs/governance/ROLLBACK_PLAN.md`).

## Output Standard

For substantial work, end with:

```md
## Status
PASS / PARTIAL / BLOCKED / FAIL

## What Changed
[List]

## Validation
[Commands and results]

## Risks
[Remaining issues]

## Next Action
[Commit / continue / rollback / user decision]
```

## AI Context Handoff Rule

Before switching tools or starting a new chat, check whether `docs/project/STATUS.md`,
`PROGRESS_NOTE.md`, and the latest `ai/checkpoints/` file accurately describe the current state.
If the context is stale or messy, recommend creating a checkpoint before continuing.

## Sub-Agent Workflow

This repo includes Claude Code sub-agents under `.claude/agents/` and V3.4 skills under
`.claude/skills/`/`.agents/skills/`.

The 7 sub-agents under `.claude/agents/` are this project's real, authoritative agent roster (use
them, not the generic role names in `ai/agents/SUBAGENT_ROLES.md`):

- `repo-cartographer` maps structure and stack.
- `project-steward` checks alignment with source-of-truth files.
- `slice-planner` narrows broad goals into safe slices.
- `debugger` investigates one issue at a time.
- `test-verifier` runs safe verification commands and reports pass/fail.
- `security-reviewer` reviews security-sensitive changes.
- `docs-promoter` recommends what should move into docs, patterns, prompts, or decision logs.

Default rule: sub-agents analyze first and do not delete, broadly refactor, deploy, migrate, or
overwrite files without explicit user approval. See `ai/agents/AGENT_REVIEW_GATES.md` for which
agents are required for which change types.

Use these V3.4 skills when they fit the task:

- `v34-execution-loop` for implementation, bugfixes, refactors, and repo cleanup.
- `v34-migration-loop` for migrating/consolidating project structure without overwriting existing
  files (this is how this file's own migration was completed).
- `v34-production-readiness` for production-readiness audits.
- `v34-context-eval-loop` for prompt, context, eval, and failure-loop work.
- The 18-skill production-readiness suite (`seo-hygiene-check`, `security-auth-admin-review`,
  `accessibility-pass`, etc.) for targeted launch-prep audits.

## Git Discipline

```text
check → fix → verify → document → commit suggestion
```

Do not commit unless the user asks you to commit. Never add LLM co-author attribution to commit
messages.

When the user does ask to commit/push, use
`Prompts/repo_push_handoff_snapshot_tag_prompt_snapshot_naming_refined.md` (commit, tag, snapshot,
push, hard-clean check). As of 2026-07-08 that prompt automatically continues into the AntBrainOS
vault's `CLAUDE_CODE_SESSION_END` close-out in the same turn — running the push prompt is the
trigger for both steps; do not treat them as two separate prompts to invoke.

## v3.3 Quality Gate Rules

Before risky edits, inspect `docs/governance/CHANGE_CONTROL.md`, `docs/governance/DONE_CRITERIA.md`,
`docs/governance/ROLLBACK_PLAN.md`, and `ai/agents/AGENT_REVIEW_GATES.md`.

Do not overwrite existing files during any starter-kit or skill-package install. Quarantine
conflicts in `.v34_migration_review/` (or `.starter-kit/review/conflicts/` for legacy v3.3-era
conflicts) and reconcile by hand — do not force-merge.

Do not mark work complete unless verification is run or the missing verification is explicitly
documented.
