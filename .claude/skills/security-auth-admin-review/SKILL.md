---
name: security-auth-admin-review
description: Review auth, admin routes, sessions, cookies, CORS, CSRF, rate limiting, input validation, and backend security before production.
effort: max
---

# Security, Auth, and Admin Review

## Purpose
Find production security risks in web apps, booking platforms, admin panels, and APIs.

## Non-negotiable rules
- Do not print secrets, tokens, password hashes, or private keys.
- Do not weaken auth or bypass protections for convenience.
- Do not expose admin routes publicly as a temporary fix.
- Do not change security-sensitive code without explicit implementation approval.
- Treat uncertainty in auth/security as a production blocker until verified.

## Inspect
- Admin routes and route guards.
- Login/logout/session lifecycle.
- Password handling and reset flows if present.
- Cookies and token storage.
- CSRF protections for state-changing requests.
- CORS config.
- API input validation.
- Rate limiting / brute-force protection.
- Error handling and logging.
- File uploads if present.
- Secrets/env usage.
- Security headers and HTTPS assumptions.

## Review checklist

### Authentication
- Admin-only routes require auth server-side or before sensitive data loads.
- Login failure does not reveal sensitive details.
- Logout invalidates session/token appropriately.
- Session duration and persistence are intentional.
- Passwords are never stored or logged in plaintext.

### Authorization
- Authenticated users cannot access data/actions outside their role.
- Admin checks are not frontend-only.
- API endpoints enforce authorization independently.

### Sessions/cookies/tokens
- Cookies use `HttpOnly`, `Secure`, and `SameSite` where appropriate.
- JWT/session secrets come from env, not source code.
- Tokens are not stored in unsafe places without reason.

### CORS/CSRF
- CORS origins are explicit in production.
- Credentials are not allowed with wildcard origin.
- State-changing requests have CSRF mitigation when cookie auth is used.

### Input validation
- API inputs are validated server-side.
- Form inputs handle malformed, missing, and duplicate submissions.
- Error responses are safe and useful.

### Abuse controls
- Login and booking/contact endpoints have rate limiting or an equivalent mitigation.
- Spam/bot protections are considered for public forms.
- Admin login is not trivially discoverable without protection.

## Output format

```markdown
# Security/Auth/Admin Review

## Verdict
[Safe / Unsafe / Conditional / Unknown]

## Critical Risks
| Severity | Risk | Evidence | Impact | Required Fix |
|---|---|---|---|---|

## Auth Flow Findings
| Area | Status | Notes |
|---|---|---|

## API/Form Security Findings
| Endpoint/Flow | Risk | Recommendation |
|---|---|---|

## Production Security Checklist
- [ ] Secrets not committed
- [ ] Admin routes protected
- [ ] Auth enforced server-side/API-side
- [ ] CORS production-safe
- [ ] CSRF considered where applicable
- [ ] Input validation present
- [ ] Rate limiting or abuse mitigation considered
- [ ] HTTPS/security headers planned

## Do Not Launch Until
- [specific unresolved security blockers]
```
