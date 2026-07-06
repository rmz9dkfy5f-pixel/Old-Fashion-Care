# Architecture

## Overview

Old Fashion Care is a static marketing site: 6 hand-authored HTML pages, one shared stylesheet, one
small JavaScript file, and a folder of images. There is no framework, no build step, no package
manager, and no server-side code. Netlify serves the files as-is and auto-deploys on every push to
`main`.

## System Components

- **Pages** — `index.html`, `about.html`, `services.html`, `how-it-works.html`, `questions.html`,
  `contact.html`. Each page repeats its own `<head>` metadata (title, description, canonical, OG,
  Twitter Card tags) and shares the same nav/footer markup by hand-duplication, not templating.
- **Styles** — `css/style.css`, a single monolithic stylesheet covering all pages (including the
  homepage hero). No CSS preprocessor, no per-page stylesheets.
- **Scripts** — `js/main.js` (~3KB), handles navigation, mobile menu, and FAQ accordion
  interactions. No framework, no bundler.
- **Images** — `images/` holds production photos (`care-01.jpg`–`care-11.jpg`, `regina.jpg`,
  `hero-ai.jpg`) plus two untracked raw source PNGs kept locally for re-cropping the hero image.
- **Analytics** — Plausible, loaded via an inline `<script>` tag directly in each HTML file (no
  separate config file).
- **SEO surface** — `sitemap.xml`, `robots.txt`, and per-page meta/OG/Twitter tags, all hand
  maintained (see `docs/governance/REPO_HEALTH_CHECK.md` for current state).
- **Deployment** — `netlify.toml` defines security headers, cache headers, CSP, and the
  `/index.html` redirect. Do not edit without a security review (see
  `docs/governance/CHANGE_CONTROL.md`).

## Data Flow

There is no data flow in the application sense — every page is static markup served directly.
The only "dynamic" behavior is client-side JS for nav/menu/FAQ state, which never persists or
calls a backend. The contact page is a mailto/phone-first page (no form submission pipeline as of
this writing).

## Important Files / Directories

| Path | Purpose |
|---|---|
| `index.html` | Homepage — hero, value proposition, trust signals, photo grid, CTA |
| `about.html` | Founder (Regina Booker) bio and photo |
| `services.html` | Service descriptions |
| `how-it-works.html` | Three-step process explanation |
| `questions.html` | FAQ accordion |
| `contact.html` | Contact info / lead generation |
| `css/style.css` | Single stylesheet for the entire site |
| `js/main.js` | Nav, mobile menu, FAQ accordion behavior |
| `images/` | Production photos + untracked hero source PNGs |
| `netlify.toml` | Deploy config, security headers, CSP — do not edit without review |
| `sitemap.xml`, `robots.txt` | SEO crawl/indexing directives |
| `.claude/agents/`, `.claude/skills/` | Claude Code sub-agents (v3.3) and skills (V3.4 + PR suite) |
| `docs/governance/`, `docs/project/` | V3.4 governance and project-state docs (this migration) |

## Dependencies

| Dependency | Purpose | Risk |
|---|---|---|
| Netlify | Hosting + auto-deploy from `main` | Low — stable, no config changes expected |
| Plausible | Analytics | Low — inline script only, no account-level config in repo |
| None (no npm/build deps) | — | N/A — static site has no supply-chain dependency surface |

## Architecture Decisions

See `docs/project/DECISION_LOG.md` for the running decision history (hero photo treatment, gradient
direction, migration branch strategy, V3.4 consolidation, etc.).
