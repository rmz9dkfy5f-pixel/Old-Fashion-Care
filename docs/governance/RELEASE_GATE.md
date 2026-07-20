# Release Gate

A project is not release-ready until these checks are complete or explicitly waived.

## Release Checklist

### Functionality

- [x] Core user flows work — contact form now honestly succeeds/fails (Formspree ID still needs
      configuring before it can actually deliver a message — see `PROJECT_RISK_REGISTER.md` R-008).
- [x] Known critical bugs are resolved or accepted — the fake-success form bug and placeholder
      testimonials (both P0/critical this session) are fixed and deployed live.
- [x] Regression checks completed — Playwright verification across all 5 fixes, zero console
      errors, zero horizontal overflow at every tested viewport.

### Quality

- [x] Tests pass or manual validation is documented — no automated test suite exists for this
      static site (by design); manual/Playwright validation documented in
      `docs/project/COMMIT_NOTES.md` and `docs/governance/audits/production-readiness-2026-07-19.md`.
- [x] Build passes — N/A, no build step for this static site.
- [ ] Lint/typecheck pass if applicable — N/A, no lint/typecheck tooling configured (tracked as
      `PROJECT_RISK_REGISTER.md` R-001, pre-existing, not this release's scope).
- [x] No obvious dead files or broken references — internal links confirmed clean (SEO pass); one
      known dead-weight item flagged (`care giver pics/` folder, R-011), not blocking.

### Security

- [x] No secrets committed — confirmed.
- [x] Dependencies reviewed — N/A, no package dependencies (static site, no package manager).
- [x] Auth/data exposure risks reviewed — N/A, no auth/admin surface exists. See
      `docs/governance/SECURITY_BASELINE.md` for the full review.

### Compatibility

- [x] Required OS/device/browser targets checked — 9 viewports (360-1920px) via Chromium; see
      `docs/governance/COMPATIBILITY_MATRIX.md`.
- [x] Responsive behavior checked where applicable — zero overflow/layout issues found.
- [x] Accessibility basics checked where applicable — contrast, touch target, keyboard/Escape all
      fixed and verified this session.

### Operations

- [x] Rollback plan exists — see `docs/governance/ROLLBACK_PLAN.md` 2026-07-19 entry.
- [x] Deployment steps documented — manual `git archive` + rsync to the VPS mirror, as used this
      session; documented in `docs/governance/ROLLBACK_PLAN.md` and this project's continuity docs.
- [x] Monitoring/logging expectations documented — Plausible pageviews + new
      `.github/workflows/uptime-check.yml` (30-min interval); form-specific event tracking still
      open (`PROJECT_RISK_REGISTER.md` R-009).
- [x] Release notes written — see `docs/project/CHANGELOG.md` 2026-07-19 entry.

## Release Decision

- Status: **PASS WITH CONDITIONS**
- Date: 2026-07-19
- Approver: User (via inline approvals for each fix, plus explicit deploy authorization)
- Notes: All site-code fixes verified and deployed live to the confirmed-real deployment target
  (VPS mirror). Conditions: the Formspree ID remains a placeholder (form cannot yet deliver a
  message — user-owned), and several lower-priority items (image optimization, HSTS header,
  Safari/Firefox testing, custom analytics events) remain open and tracked, none blocking this
  release. `oldfashioncare.com`'s hosting mismatch is explicitly out of scope per the user's own
  direction.
