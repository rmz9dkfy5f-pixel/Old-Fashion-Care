# Repo Health Check

**Project:** Old Fashion Care
**Last updated:** 2026-06-15 (populated during Starter Kit v3.3 migration)

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
| Deploy | Netlify auto-deploy on push to main |

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
| `css/style.css` | Single main stylesheet (28KB) |
| `js/main.js` | Main JavaScript (3KB) |
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
| `CHANGELOG.md` | Version history: v1.1.0 + v1.2.0 (SEO deployment) |
| `RELEASE.md` | v1.2.0 release notes |
| `COMMITS.md` | Commit history log |

---

## Unknowns

- No automated tests — all QA is manual
- No linting configured
- No CI/CD pipeline beyond Netlify auto-deploy
- Plausible analytics script embedded directly in HTML files (no config file)

---

## Recommended First Cleanup Slice

1. Add a `.gitignore` to exclude `.DS_Store` files (currently untracked noise)
2. Consider extracting Plausible analytics domain config to a single location
3. Add basic HTML validation to CI (e.g., `html-validate` or W3C validator action)
4. Review `CHANGELOG.md` vs template version in `.starter-kit/review/conflicts/CHANGELOG.md` and decide whether to adopt the template format
