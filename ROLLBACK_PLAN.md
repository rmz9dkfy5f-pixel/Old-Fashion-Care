# Rollback Plan

**Project:** Old Fashion Care
**Last updated:** 2026-06-15 (populated during Starter Kit v3.3 migration)

---

## Migration Rollback — Starter Kit v3.3

### Pre-Migration State

| Item | Value |
|------|-------|
| Safe branch | `main` |
| Safe commit | `0806edae0170ffe7e61dac93d7044d1c1e440fc3` |
| Commit message | v1.2.2 backfill v1.0.0 snapshot tag notes |
| Migration branch | `migration/project-starter-v3-3` |

### What Was Added by This Migration

- 23 root-level markdown files (AGENTS.md, BACKLOG.md, CLAUDE.md, etc.)
- `.claude/` directory with `settings.example.json` and 7 agent definitions
- `ai/` directory with config, templates, agents, and session folders
- `docs/` directory with 10 architectural doc templates
- `plans/` directory with 3 planning templates
- `.starter-kit/` directory (inventory, install log, conflicts, archive)

### What Was NOT Changed

- All HTML files (`index.html`, `about.html`, `contact.html`, `how-it-works.html`, `questions.html`, `services.html`)
- `css/style.css`
- `js/main.js`
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `netlify.toml`
- `CHANGELOG.md`, `RELEASE.md`, `COMMITS.md`

### Conflicts Quarantined (Not Applied)

| Conflict | Location |
|----------|----------|
| Template `CHANGELOG.md` | `.starter-kit/review/conflicts/CHANGELOG.md` |

---

## Rollback Instructions

### Option A — Abandon migration branch, return to main

```bash
git checkout main
```

No changes to `main` were made. This immediately returns to the stable pre-migration state.

### Option B — Hard reset the migration branch to pre-migration state

```bash
git checkout migration/project-starter-v3-3
git reset --hard 0806edae0170ffe7e61dac93d7044d1c1e440fc3
```

This discards all migration changes on the branch.

### Option C — Selective revert (remove specific added files)

Since all migration changes are new file additions (no overwrites), any file can be removed individually:

```bash
git rm <file>
```

No existing project file was modified, so there is nothing to "undo" on existing files.

---

## Rollback Readiness

- Existing project: **fully preserved** — no file was overwritten
- Safe branch: `main` at `0806eda` — untouched
- Rollback path: simple `git checkout main` or branch reset
- Risk level: **Low** — migration added files only
