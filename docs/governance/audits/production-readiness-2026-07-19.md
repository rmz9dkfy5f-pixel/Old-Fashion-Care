# Production Readiness Audit — 2026-07-19

## Context

The user asked whether running the 18/20-skill production-readiness suite (installed
2026-07-15 under `.claude/skills/`, never previously executed) would add value. Research found it
was a genuine first run (not a re-run), most of the suite fits this project's real shape, and it
would newly surface real gaps (all four Gate 5 governance docs were still blank templates). A
scoped plan was approved: 13 of the ~20 skills, `main` branch only. All 13 completed this session.
Several real issues surfaced along the way were fixed, verified, and **deployed live** during this
same session — this report documents both the audit findings and their current disposition.

## Scope
`main` branch only. The 3 design/hero-variant branches and `migration/project-starter-v3-3`
remain out of scope (unchanged since the 2026-07-15 tooling install, mid-decision).

## Skills Run (13 of 13 planned)

**Phase 0 — Preflight:** `repo-safety-preflight` (PASS), `v33-quality-gate-enforcer` (PASS)

**Phase 1 — Map:** `component-inventory`

**Phase 2 — HIGH-relevance audits:** `seo-hygiene-check`, `accessibility-pass`,
`performance-budget-pass`, `responsive-browser-matrix`, `content-conversion-readiness`

**Phase 3 — MEDIUM-relevance audits:** `deployment-nginx-https-readiness`,
`observability-analytics-readiness`, `rollback-risk-register`

**Phase 4 — Synthesis:** `production-readiness-audit` (capstone), `client-handoff-pack`

**Explicitly skipped this pass** (structurally inapplicable to a static, no-backend, no-build-tooling
site): `security-auth-admin-review` (zero auth surface), `env-secrets-hardening` (no
server/secrets), `build-test-verify-gate` (no build/lint/test tooling exists), `handoff-repository`
(a workflow skill, not an audit), `booking-flow-e2e-readiness` (deferred — Formspree ID still a
placeholder, no real E2E possible yet), `release-cutover-checklist` (confirmed
`disable-model-invocation: true` in its own frontmatter — not agent-invocable, and a final
go-live gate rather than a readiness audit).

## Findings and Fixes, By Phase

### Component Inventory
Mapped 6 real pages + 1 isolated non-production dev page (`hero-preview.html`, confirmed not
linked from any real page). New findings: a 15MB unreferenced `care giver pics/` folder tracked in
git (raw candidate stock photos, unused anywhere); Formspree ID confirmed a placeholder.

### SEO Hygiene
See `seo/audits/hygiene-2026-07-19.md` for the full report. Same 5 known issues persist unchanged
since 2026-07-14, plus one elevated finding: the canonical-domain mismatch (user-confirmed
expected/known, not actioned).

### Accessibility Pass
Found a **critical, previously-undocumented functional defect**: the contact form's JS
unconditionally faked a success message regardless of actual submission (`js/main.js`). Also
re-confirmed the known `.nav__cta`/`.section--coral` contrast bug.
**Fixed and deployed live this session:**
- Contact form rewritten to a real `fetch()` POST with honest success/error handling
  (`contact.html`/`js/main.js`).
- `.nav__cta`, `.section--coral`, and `.phone-strip` (a cascade collision found during
  verification) all migrated to `--coral-fill`.
- Escape key now closes the mobile nav and returns focus to the hamburger.

### Performance Budget
Found: 9 of 14 homepage photos ship at 3500-5760px native resolution into a 356×260px CSS grid
cell (~14.2MB avoidable — **not yet fixed**, tracked in `BACKLOG.md`); font `@import` instead of
an HTML `<link>` (**not fixed**); hero implemented as a CSS background-image rather than `<img>`,
delaying LCP discovery (**not fixed**).

### Responsive Browser Matrix
Zero layout/overflow issues across 9 viewports (360-1920px), Chromium only (no
WebKit/Firefox/iOS Safari binaries available in this environment). Found the mobile nav hamburger
touch target was 38×31px, below the 44px guideline.
**Fixed and deployed live this session:** hamburger enlarged to 44×44px, plus a bundled
open/closed X-icon animation.

### Content and Conversion Readiness
Found a **critical, previously-undocumented finding**: the homepage testimonials section showed
literal, unfilled bracket-placeholder text under a "Real words from real families." heading.
**Fixed and deployed live this session:** reframed to 3 honest, first-party trust statements (see
`docs/project/DECISION_LOG.md` 2026-07-19) — not real testimonials yet, tracked as a `BACKLOG.md`
follow-up.

### Deployment / Nginx / HTTPS Readiness
VPS mirror (`old-fashion-care.craftandconscious.com`) confirmed correctly configured: HTTPS
redirect (301→HTTPS), valid Let's Encrypt cert (expires 2026-10-12), correct DNS. No HSTS header
(**not fixed**). Certbot renewal automation unverified (no SSH deep-dive attempted). Netlify's
actual status for this repo remains unverified from outside. `oldfashioncare.com` re-confirmed as
a separate, live, unrelated application — **user has confirmed this is expected/known, not a
blocker.**

### Observability and Analytics Readiness
Plausible pageview analytics correctly wired (privacy-respecting, no PII). Found zero custom
event tracking anywhere, and zero uptime monitoring.
**Fixed and deployed live this session:** added `.github/workflows/uptime-check.yml` — a GitHub
Actions workflow that checks the VPS mirror every 30 minutes (HTTP 200 + content sanity check),
verified via a real triggered run on GitHub's infrastructure (not just local simulation). GitHub
emails repo watchers on failure by default.
**Not yet fixed:** no custom Plausible events for contact-form success/failure — recommended,
not implemented this session.

### Rollback Plan and Risk Register
Assessed this session's cumulative changes as low structural risk (static site, no data/schema).
Found and then closed a real, concrete gap: the VPS mirror was still serving pre-fix code at the
time of this audit step (confirmed via `curl` — old `Last-Modified`, old placeholder text still
live). **User then explicitly authorized deployment; the fixes were deployed and independently
re-verified live** (fresh `curl` evidence: new `Content-Length`/`Last-Modified`, new testimonials
copy, new contrast values, new JS logic all confirmed present on the actual production VPS).

### Production Readiness Audit (Capstone)
Overall readiness: Conditionally ready. See the full scorecard below.

### Client Handoff Pack
A client-facing summary was produced separately in-session — see conversation record for the
full non-technical version. Key point: current status is "Live and improved," with the Formspree
ID as the one clearly user-owned follow-up.

## Production Readiness Scorecard
| Category | Status | Notes |
|---|---|---|
| Build/runtime | Pass | No build step needed for this project type |
| Routes/pages | Pass | No broken links; dev-only page correctly isolated; no custom 404 confirmed (Unknown, low priority) |
| Booking/forms | Conditional | Submission logic now honest and verified; still can't succeed until Formspree ID is configured (user-owned) |
| Security/auth | Pass | No secrets committed; no auth surface to secure; security headers present except HSTS |
| Accessibility | Pass | Contrast, touch target, Escape-key all fixed and verified live this session; WebKit/Firefox untested (environment limitation) |
| SEO/social | Conditional | Same 5 known issues persist + canonical-domain question (user-confirmed non-blocking) |
| Performance | Conditional | CSS/JS lean, caching well-configured; image oversizing is the one real, quantified, unfixed gap |
| Deployment/HTTPS | Pass | VPS mirror confirmed correct and now serving this session's fixes, verified live; automated uptime check added |
| Observability | Conditional | Pageviews + uptime check live; form-specific event tracking and error monitoring still open |
| Documentation/handoff | Pass | `STATUS.md`/`CHANGELOG.md`/`DECISION_LOG.md`/`COMMIT_NOTES.md`/`PROGRESS_NOTE(S).md`/`BACKLOG.md` all current as of this session |

## Recommended Fix Order (Remaining)
1. Configure a real Formspree ID (user-owned).
2. Add Plausible custom events for contact-form success/failure.
3. Resize/recompress the 9 oversized `care-*.jpg` images.
4. Add HSTS header + dedicated apple-touch-icon.png.
5. Move font loading from CSS `@import` to an HTML `<link>` with `preconnect`; add a preload hint
   for the hero image.
6. Decide on the 15MB unreferenced `care giver pics/` folder.

## Unknowns That Matter
- Netlify's actual configuration/status for this repo — unverifiable without dashboard access.
- Certbot renewal automation on the VPS — cert valid until 2026-10-12, auto-renewal unconfirmed.
- WebKit/Firefox/iOS Safari rendering — only Chromium available in this environment all session.

## Do Not Do Yet
- Do not guess at DNS/Netlify changes for `oldfashioncare.com` — user-confirmed non-blocking, not
  to be acted on unprompted.
- Do not fabricate real client testimonials — wait for the business to collect them.
- Do not merge any design/hero-variant branch into `main` without separate, explicit authorization.
