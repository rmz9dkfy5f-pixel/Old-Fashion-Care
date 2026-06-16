# Pre-Migration Inventory

**Date:** 2026-06-15
**Branch:** migration/project-starter-v3-3
**Commit:** 0806edae0170ffe7e61dac93d7044d1c1e440fc3
**Migration:** Project Starter Kit v3.3

---

## Project Type

Static HTML/CSS/JS website — Old Fashion Care
Deployment: Netlify (netlify.toml present)
Framework: None (vanilla HTML5, CSS3, JavaScript)
Package manager: None (no package.json)
Build system: None (static files deployed directly)

---

## Files and Folders Found

### Source files (do not touch)
- `index.html` — Homepage
- `about.html` — About page
- `contact.html` — Contact page
- `how-it-works.html` — How It Works page
- `questions.html` — FAQ/Questions page
- `services.html` — Services page
- `favicon.svg` — Site favicon
- `robots.txt` — Search engine directives
- `sitemap.xml` — XML sitemap
- `netlify.toml` — Netlify deployment config
- `css/style.css` — Main stylesheet
- `js/main.js` — Main JavaScript

### Existing documentation (do not overwrite)
- `CHANGELOG.md` — Version history (real content: v1.1.0 + v1.2.0)
- `RELEASE.md` — v1.2.0 release notes
- `COMMITS.md` — Commit history log

### Nested starter kit (to be archived)
- `project-starter-kit-v3.3/` — Migration source materials (untracked)

---

## Existing AI/Agent Infrastructure

- `.claude/` — **Does not exist**
- `ai/` — **Does not exist**
- `README.md` — **Does not exist**

---

## Quality Gate Docs Status

- `DONE_CRITERIA.md` — Does not exist → will be installed
- `CHANGE_CONTROL.md` — Does not exist → will be installed
- `REPO_HEALTH_CHECK.md` — Does not exist → will be installed + filled in
- `ROLLBACK_PLAN.md` — Does not exist → will be installed + filled in
- `PROJECT_RISK_REGISTER.md` — Does not exist → will be installed

---

## Do-Not-Touch Areas

- All `.html` files
- `css/style.css`
- `js/main.js`
- `netlify.toml`
- `robots.txt`
- `sitemap.xml`
- `favicon.svg`
- `CHANGELOG.md` (has real project content)
- `RELEASE.md`
- `COMMITS.md`

---

## High-Risk Areas

- `CHANGELOG.md` — Has real content; template version will be quarantined to `.starter-kit/review/conflicts/CHANGELOG.md`
- `netlify.toml` — Deployment config; any accidental modification would break live site
- `sitemap.xml` / `robots.txt` — SEO-critical; must not be modified

---

## Existing Source-of-Truth Docs

- `CHANGELOG.md` — Authoritative version history
- `RELEASE.md` — v1.2.0 release documentation
- `COMMITS.md` — Commit metadata log

---

## Likely Conflicts

| File | Status |
|------|--------|
| `CHANGELOG.md` | EXISTS — template will be quarantined |

All other template files are new additions with no existing counterparts.
