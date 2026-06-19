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
├── .claude/agents/     — 7 Claude sub-agents
├── ai/                 — AI session memory, templates, agent docs
├── docs/               — Technical documentation templates
├── plans/              — Planning templates
├── .starter-kit/       — Migration workspace (install log, conflicts, archive)
└── Prompts/            — Push/handoff prompt files
```

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
