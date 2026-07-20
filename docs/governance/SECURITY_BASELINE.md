# Security Baseline

## Baseline Rules

- Do not commit secrets, tokens, API keys, private keys, or credentials.
- Do not weaken authentication, authorization, or input validation without explicit approval.
- Do not add remote code execution paths casually.
- Do not install new production dependencies without documenting why.
- Treat third-party skills, scripts, and generated code as untrusted until reviewed.
- Prefer least privilege.
- Document all security-sensitive assumptions.

## Review Areas

- Secrets handling
- Authentication
- Authorization
- Input validation
- Dependency risk
- File upload/download risk
- Logging of sensitive data
- Network exposure
- Admin routes
- Build/deployment secrets
- Agent-generated scripts

## Security Status

- Last review: 2026-07-19 (production-readiness audit, `security-auth-admin-review` skill
  explicitly skipped as structurally inapplicable — see reason below; this review instead covers
  the security-adjacent findings from `deployment-nginx-https-readiness`,
  `component-inventory`, and `repo-safety-preflight`)
- Result: **Conditional pass.** No secrets committed (confirmed — no `.env` files, no API keys in
  source). No authentication/authorization/admin surface exists anywhere in this repo, so most of
  this file's Review Areas are not applicable (this is a static marketing site with no backend).
  `netlify.toml` sets `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`, and a CSP — but no `Strict-Transport-Security` (HSTS) header. Third-party
  scripts (Google Fonts, Plausible, Formspree form-action) are correctly whitelisted in the CSP,
  not loaded from arbitrary origins.
- Risks: (1) No HSTS header on either deploy path — see `PROJECT_RISK_REGISTER.md` R-010. (2) A
  sub-agent investigating an unrelated task this session reported encountering text in tool output
  mimicking a fake system-reminder; investigated thoroughly (grepped the entire repo — tracked
  files, untracked files, full git history) and found zero evidence of actual injected/malicious
  content anywhere in this repository. Recorded here for completeness, not as an open risk — see
  `docs/project/SESSION_LOG.md`-equivalent (this project's vault `SESSION_LOG.md`) 2026-07-19 entry
  for full detail.
- Next action: add HSTS header (low priority, low risk). Re-run `security-auth-admin-review`
  if/when this project ever adds a backend, auth, or admin surface — until then it remains
  structurally not applicable.
