# Context

This file stores stable project context.

Use it for information that should remain true across tasks and conversations.

---

## Project

**Name:** Old Fashion Care
**Type:** Static website — HTML5, CSS3, vanilla JavaScript
**Deployment:** Netlify (auto-deploy from `main` branch)
**Analytics:** Plausible (inline script in HTML files)
**Domain:** Live and in use

---

## Repo Structure

```
project-root/
├── index.html          — Homepage
├── about.html          — About Regina Booker
├── contact.html        — Contact page
├── how-it-works.html   — Process explanation
├── questions.html      — FAQ
├── services.html       — Services detail
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── netlify.toml        — Netlify deploy config (do not touch)
├── css/style.css       — Single main stylesheet
├── js/main.js          — Main JavaScript
├── images/             — 12 photos (care-01 to care-11, regina.jpg)
├── care giver pics/    — Original photo source folder (kept, not deleted)
├── .claude/agents/     — 7 Claude sub-agents (v3.3)
├── .claude/skills/     — 22 Claude Code skills (v3.3.4 V3.4 baseline + 18-skill PR suite, added 2026-07-05)
├── .agents/skills/     — Codex-equivalent skills (V3.4 baseline, added 2026-07-05)
├── ai/                 — AI session memory, templates, agent docs, prompts (extended by V3.4)
├── docs/               — Technical documentation templates
├── docs/governance/    — V3.4 quality-gate docs (DONE_CRITERIA, PHASE_GATES, ROLLBACK_PLAN, etc.) — added 2026-07-05
├── docs/project/       — V3.4 template copies of tracking docs (STATUS/CHANGELOG/etc.) — duplicates
│                          the root-level docs that are actually in active use; not yet reconciled
├── plans/              — Planning templates
├── .starter-kit/       — v3.3 migration workspace (install log, conflicts, archive)
├── .v34_migration_review/ — V3.4 candidate files quarantined due to conflicts with AGENTS.md,
│                             CLAUDE.md, ai/agents/AGENT_REVIEW_GATES.md — added 2026-07-05
└── Prompts/            — Push/handoff prompt files
```

**Note (2026-07-05):** This repo now has both a v3.3 Starter Kit migration (already in progress
before this date) and a V3.4 baseline install layered on top of it, plus the 18-skill
production-readiness suite. `AGENTS.md` and `CLAUDE.md` are the v3.3 versions — the V3.4
candidates for those files are quarantined in `.v34_migration_review/`, not applied.

---

## Branches

| Branch | Purpose |
|--------|---------|
| `main` | Stable live site — Netlify deploys from here |
| `migration/project-starter-v3-3` | Active dev branch — Starter Kit v3.3 migration + photo work |

**Current branch:** `migration/project-starter-v3-3` (not yet merged to main)

---

## Key Files — Do Not Touch

- `netlify.toml` — deployment config
- `robots.txt` — SEO crawl directives
- `sitemap.xml` — SEO sitemap
- All `.html` files — site pages (edit only with approved slices)

---

## Photo Infrastructure

- `images/` — 12 photos with clean URL-safe filenames
  - `care-01.jpg` through `care-11.jpg` — stock caregiver/elderly care photos
  - `regina.jpg` — Regina Booker founder photo
- Grid uses care-01 through care-06; care-07 through care-11 available for swaps
- `care giver pics/` — original source folder retained (do not delete)

---

## AI Agent Infrastructure

- `.claude/agents/` — 7 sub-agents ready for use (see ai/agents/AGENT_ROSTER.md)
- `ai/templates/` — session templates for design, feature, debug, checkpoint, pattern, prompt work
- `ai/sessions/` — structured folders for AI working memory (features, designs, debug, optimization)

---

## No CMS, No Package Manager, No Build Step

This is a static site. There is no `package.json`, no `node_modules`, no build command. Files are deployed as-is to Netlify.

---

## Repo Name History

| Date | Name | Change |
|------|------|--------|
| 2026-06-18 | `Old-Fashion-Care` | Renamed from `Old-Fashion-Care-` — trailing dash removed |

**Current remote URL:** `git@github.com:rmz9dkfy5f-pixel/Old-Fashion-Care.git`
