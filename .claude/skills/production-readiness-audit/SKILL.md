---
name: production-readiness-audit
description: Audit an existing website, web app, or booking platform for production readiness without editing files. Use before launch, deployment, client handoff, major refactors, or when asking what is still blocking production.
effort: high
---

# Production Readiness Audit

## Purpose
Run a no-edit production-readiness audit on an existing project. This is for the V3.3 workflow stage where the repo already exists and should be inspected before any implementation.

## Non-negotiable rules
- Do not edit, move, delete, rename, format, or generate files during this audit.
- Do not run destructive commands.
- Do not commit, push, deploy, or change environment configuration.
- Do not assume the framework, runtime, deployment method, or repo structure. Discover it.
- Treat unknowns as blockers or follow-up questions, not as resolved facts.
- Separate confirmed facts from assumptions.

## First pass: establish project state
Inspect only enough to understand the system:

1. Git state: branch, clean/dirty status, untracked files, recent commits.
2. Project type: framework, language, runtime, package manager, app entry points.
3. Deployment surface: build output, server config, nginx/Apache/Caddy, PM2/systemd/Docker/VPS/Netlify/Vercel.
4. Public surfaces: routes, pages, forms, admin paths, API endpoints, booking flow, auth flow.
5. Documentation: `README.md`, `CLAUDE.md`, `STATUS.md`, `ROADMAP.md`, `CONTEXT.md`, `docs/`, `plans/`, `prompts/`, `releases/`.
6. Existing V3.3 artifacts: quality gates, risk register, rollback plan, release notes, decision log, agent rules.

## Audit categories
Review the project against these categories:

### 1. Build and runtime readiness
- Install command exists and is documented.
- Build command exists and succeeds or failure is clearly explained.
- Start/preview command exists and is documented.
- Runtime version requirements are discoverable.
- Lockfile/package manager usage is consistent.
- No dead scripts, missing scripts, or ambiguous deployment commands.

### 2. Route and page readiness
- All intended pages/routes exist.
- No broken internal links.
- No route mismatch between local dev, production build, and server config.
- Error/404 behavior is acceptable.
- Admin routes are not accidentally public.

### 3. Data and booking flow readiness
- Form submissions work or the failure point is identified.
- Booking flow has validation, success, failure, and duplicate-submission handling.
- API endpoints match frontend expectations.
- Environment variables required for booking/email/database are documented.
- Client-facing copy makes the next action obvious.

### 4. Security readiness
- Secrets are not committed.
- `.env.example` exists and is safe.
- CORS, cookies, sessions, admin auth, CSRF, rate limiting, and input validation are handled where applicable.
- Security headers are considered for production.
- No hardcoded localhost URLs in production paths.

### 5. Accessibility readiness
- Keyboard navigation works.
- Focus states are visible.
- Forms have labels, errors, and accessible feedback.
- Color contrast is acceptable.
- Semantic headings are logical.
- Images have meaningful alt text or are marked decorative.

### 6. SEO and social readiness
- Page titles and meta descriptions are present and unique.
- Canonicals, Open Graph, favicons, sitemap, robots, and local-business metadata are reviewed where applicable.
- No accidental `noindex` on production pages.
- Local business name/address/phone consistency is checked if relevant.

### 7. Performance readiness
- Images are optimized and sized correctly.
- Critical pages do not load unnecessary bundles/assets.
- Fonts do not create obvious layout shifts.
- Build artifacts are not bloated without reason.
- Caching/compression strategy is identified for production.

### 8. Deployment readiness
- Production build output location is known.
- Reverse proxy/static hosting config matches the app.
- HTTPS/cert renewal path is known.
- Health check or smoke-test URL exists or is recommended.
- Rollback path is documented.

### 9. Observability readiness
- Error logging exists or a gap is noted.
- Analytics are configured or intentionally absent.
- Form/booking failures can be detected.
- Uptime monitoring plan exists or is recommended.

### 10. Documentation and handoff readiness
- Setup instructions are accurate.
- Production deployment instructions exist.
- Known issues are documented.
- Release notes and change log are current enough for handoff.

## Severity scale
Use this exact severity scale:

- **P0 Launch Blocker:** Production launch is unsafe or likely broken.
- **P1 High Risk:** Could break revenue, lead capture, admin access, security, or deployment stability.
- **P2 Should Fix:** Important quality, reliability, accessibility, SEO, or maintainability issue.
- **P3 Polish:** Low-risk improvement that should not delay launch.
- **Unknown:** Material fact could not be confirmed.

## Output format
Return this structure exactly:

```markdown
# Production Readiness Audit

## Executive Summary
- Overall readiness: [Not ready / Conditionally ready / Ready]
- Highest-risk area:
- Recommended next move:

## Confirmed Project Facts
| Area | Finding | Evidence |
|---|---|---|

## Launch Blockers
| Severity | Issue | Evidence | Impact | Recommended Fix |
|---|---|---|---|---|

## High-Risk Issues
| Severity | Issue | Evidence | Impact | Recommended Fix |
|---|---|---|---|---|

## Production Readiness Scorecard
| Category | Status | Notes |
|---|---|---|
| Build/runtime | Pass/Fail/Unknown | |
| Routes/pages | Pass/Fail/Unknown | |
| Booking/forms | Pass/Fail/Unknown | |
| Security/auth | Pass/Fail/Unknown | |
| Accessibility | Pass/Fail/Unknown | |
| SEO/social | Pass/Fail/Unknown | |
| Performance | Pass/Fail/Unknown | |
| Deployment/HTTPS | Pass/Fail/Unknown | |
| Observability | Pass/Fail/Unknown | |
| Documentation/handoff | Pass/Fail/Unknown | |

## Recommended Fix Order
1. [Highest leverage/risk-reducing fix]
2. [Next fix]
3. [Next fix]

## Safe Implementation Slices
| Slice | Scope | Files likely touched | Verification | Risk |
|---|---|---|---|---|

## Unknowns That Matter
- [Unknown + why it matters + how to verify]

## Do Not Do Yet
- [Actions that would be premature or risky]
```
