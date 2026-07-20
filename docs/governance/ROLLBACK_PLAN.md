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

### Contact Form, Contrast, Touch Target, and Content Fixes (2026-07-19)

| Item | Value |
|------|-------|
| Safe branch | `main` |
| Safe commit (prior known-good) | `dd88bf4` (tag `v2.6.0`) — also what the VPS mirror was still serving at the start of this change |
| New tagged commit | `e6d1363` (tag `v2.8.0__contact-form-contrast-touch-target-content-fixes__commit-e6d1363`) |
| Trailing docs commit | `8e61909` (untagged, per convention) |
| Snapshot | `/Volumes/AntNVMe1TB/WorkSync/Projects/RepoBackups/Old-Fashion-Care/v2.8.0__contact-form-contrast-touch-target-content-fixes__commit-e6d1363/` (351 files, verified 0 diff vs. `git ls-tree`) |
| Deployed to | VPS mirror `old-fashion-care.craftandconscious.com`, verified live via fresh `curl` (new `Content-Length`/`Last-Modified`, new testimonials copy, new contrast values, new JS logic all confirmed present) |

Changed files: `js/main.js`, `css/style.css`, `contact.html`, `index.html` (site code) plus
tracking docs. No data/schema/auth changes — pure static-asset content, inherently low rollback
risk.

Rollback: re-run the same `git archive` + rsync deploy process pointed at tag `v2.6.0` (`dd88bf4`)
instead of current `main`, or `git revert e6d1363` in the repo. Verification after rollback: same
`curl`/Playwright checks used to verify the fix originally (see
`docs/governance/audits/production-readiness-2026-07-19.md`).

### Uptime Check Workflow (2026-07-19)

| Item | Value |
|------|-------|
| Safe commit | `8588925` |
| File added | `.github/workflows/uptime-check.yml` (single file, no dependencies) |

Rollback: delete the single file, or disable the workflow in the GitHub Actions UI. No other
system depends on it.

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
