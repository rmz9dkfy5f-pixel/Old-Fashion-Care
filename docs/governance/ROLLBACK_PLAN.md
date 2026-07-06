# Rollback Plan

**Project:** Old Fashion Care

## Purpose

Every meaningful change should have a path back to a known-good state.

## Standard Rollback Options

### Git Rollback

```bash
git status
git diff
```

Do not run destructive Git commands (`reset --hard`, force-push) unless explicitly approved.

### File-Level Rollback

- identify the changed file
- compare before/after (`git diff`, `git log -p <file>`)
- restore from Git history, a RepoBackups snapshot, or `.v34_migration_review/` if applicable

### Tagged Snapshot Rollback

Every tagged commit (`vX.Y.Z__description__commit-HASH`) has a matching snapshot at
`/Volumes/AntNVMe1TB/WorkSync/Projects/RepoBackups/Old-Fashion-Care/<tag>/`. Restoring means
copying that snapshot back over the working tree, or `git checkout <tag>`.

## Historical Migration Rollback Records

### Starter Kit v3.3 Migration (2026-06-15)

| Item | Value |
|------|-------|
| Safe branch | `main` |
| Safe commit | `0806edae0170ffe7e61dac93d7044d1c1e440fc3` |
| Migration branch | `migration/project-starter-v3-3` |

Added: 23 root-level markdown files, `.claude/agents/` (7 sub-agents), `ai/`, `docs/` (10
templates), `plans/`, `.starter-kit/`. Not changed: any HTML/CSS/JS file, `favicon.svg`,
`robots.txt`, `sitemap.xml`, `netlify.toml`. One conflict quarantined:
`.starter-kit/review/conflicts/CHANGELOG.md` (template version, not applied).

Rollback: `git checkout main` (main was untouched), or
`git reset --hard 0806edae0170ffe7e61dac93d7044d1c1e440fc3` on the migration branch to discard all
v3.3 additions (all additions were new files, so nothing to "undo" on existing files).

### V3.4 Baseline + 18-Skill Suite Install (2026-07-05)

| Item | Value |
|------|-------|
| Safe branch | `migration/project-starter-v3-3` |
| Safe commit | `8ca9e5f` |
| Merged into main at | `78f20fb` (tag `v2.0.0`) |

Added (additive only, migrate mode): `.agents/skills/`, `.claude/skills/` (22 skills total),
`docs/governance/`, `docs/project/`, `ai/agents/SUBAGENT_ROLES.md`, `ai/prompts/*`,
`00_MIGRATION_KICKOFF.md`, `MIGRATION_REPORT.md`, `V34_INSTALL_REPORT.json`. Three conflicts
quarantined to `.v34_migration_review/` (`AGENTS.md`, `CLAUDE.md`, `ai/agents/AGENT_REVIEW_GATES.md`
candidates) — not applied; later reconciled by hand (2026-07-06/07) rather than force-merged.

Rollback: `git checkout <commit before 5a7abc8>` on the migration branch, or revert the merge commit
`78f20fb` on `main` if the install needs to be undone after merge.

### V3.4 Doc Consolidation (2026-07-06/07)

Root-level docs (`STATUS.md`, `CHANGELOG.md`, `COMMIT_NOTES.md`, `CONTEXT.md`, `DECISION_LOG.md`,
`PROJECT_BRIEF.md`, `RELEASE_NOTES.md`, `ROADMAP.md`, `CHANGE_CONTROL.md`, `ROLLBACK_PLAN.md`,
`REPO_HEALTH_CHECK.md`, `DONE_CRITERIA.md`, `PROJECT_RISK_REGISTER.md`, `PHASE_GATES.md`) were moved
into `docs/project/` and `docs/governance/` to give the installed V3.4 skills a real, populated
source of truth at the paths they expect. Rollback: `git revert` the consolidation commit — every
file move is tracked in Git history and reversible.

## Rollback Readiness

- Safe branch: `main` — always the last known-good, deployed state
- Rollback path: `git checkout`, `git revert`, or restore from a tagged RepoBackups snapshot
- Risk level for pure documentation moves/edits: **Low**

## Required Before High-Risk Work

Before Class C or D changes (see `docs/governance/CHANGE_CONTROL.md`):

- Confirm current Git status.
- Identify the restore point (commit hash or tag).
- List files at risk.
- Explain the rollback command or manual rollback method before proceeding.
