# Repo Health Check

**Project:** Old Fashion Care
**Last updated:** 2026-07-06/07 (V3.4 consolidation)

---

## Stack

| Item | Value |
|------|-------|
| Type | Static website |
| Languages | HTML5, CSS3, JavaScript (vanilla) |
| Framework | None |
| Package manager | None |
| Build system | None (static files deployed directly) |
| Deployment | Netlify (`netlify.toml`) |
| Analytics | Plausible (inline script in HTML) |

---

## Build / Test / Lint Commands

| Command | Status |
|---------|--------|
| Build | None — no build step |
| Test | None detected |
| Lint | None detected |
| Deploy | Netlify auto-deploy on push to `main` |

---

## Important Files

| File | Purpose |
|------|---------|
| `index.html` | Homepage |
| `about.html` | About page |
| `contact.html` | Contact page |
| `how-it-works.html` | How It Works page |
| `questions.html` | FAQ page |
| `services.html` | Services page |
| `css/style.css` | Single main stylesheet |
| `js/main.js` | Main JavaScript |
| `favicon.svg` | Site favicon |
| `netlify.toml` | Netlify build/deploy config |
| `robots.txt` | Search engine crawl directives |
| `sitemap.xml` | XML sitemap |

---

## High-Risk Files

| File | Risk |
|------|------|
| `netlify.toml` | Deployment config — change breaks live deploy |
| `sitemap.xml` | SEO-critical — change affects search indexing |
| `robots.txt` | SEO-critical — change affects crawler behaviour |
| `css/style.css` | Single monolithic stylesheet — breakage is site-wide |

---

## Existing Documentation

| File | Contents |
|------|---------|
| `docs/project/CHANGELOG.md` | Version history through v2.0.0 (V3.4 merge) |
| `RELEASE.md` | v1.2.0 release notes |
| `COMMITS.md` | Commit history log |
| `docs/project/DECISION_LOG.md` | Project decision history |

---

## Health Checklist

### Structure

- [x] Root files are understandable.
- [x] Source code (HTML/CSS/JS) is separated from tooling/docs.
- [x] Docs are discoverable (`docs/governance/`, `docs/project/`, root files listed in README.md).
- [x] Build/test scripts are documented (none exist — documented as such).

### Git

- [x] Git status reviewed regularly before commits.
- [x] `.gitignore` is appropriate (`.DS_Store`, `images/ChatGPT*` excluded since 2026-07-02).
- [x] No secrets are committed (static site has none to begin with).
- [x] Large/generated files handled intentionally (raw source PNGs untracked, kept locally).

### Build / Test

- [x] Install command known: none (no dependencies).
- [x] Build command known: none.
- [x] Test command known: none — all QA is manual (screenshots, local browser checks).
- [ ] Lint/typecheck: not configured (see Recommended Cleanup below).

### Production Readiness

- [x] Security baseline reviewed — see `docs/governance/SECURITY_BASELINE.md`.
- [ ] Compatibility matrix reviewed — see `docs/governance/COMPATIBILITY_MATRIX.md` (not yet
      filled with project-specific browser/device targets).
- [x] Rollback plan exists — see `docs/governance/ROLLBACK_PLAN.md`.
- [ ] Release gate reviewed — see `docs/governance/RELEASE_GATE.md` (not yet run for this project).

---

## Unknowns

- No automated tests — all QA is manual
- No linting configured
- No CI/CD pipeline beyond Netlify auto-deploy
- Plausible analytics script embedded directly in HTML files (no config file)

---

## Recommended Cleanup / Follow-Up

1. Consider adding basic HTML validation (e.g. `html-validate` or a W3C validator GitHub Action)
2. Review `docs/governance/COMPATIBILITY_MATRIX.md` and `RELEASE_GATE.md` and populate with real
   project-specific targets/checks
3. Create a dedicated `apple-touch-icon.png` (180×180) — currently falls back to `favicon.svg`
4. Swap in the client's hi-res original photo for `images/hero-ai.jpg`

## Last Health Check

- Date: 2026-07-07
- Agent: Claude Code
- Result: **PASS** (documentation-only consolidation; no site file behavior changed)
- Notes: This check accompanies the V3.4 doc consolidation. No HTML/CSS/JS files were touched in
  this pass — see `docs/project/DECISION_LOG.md` for the consolidation decision record.
