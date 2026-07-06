---
name: env-secrets-hardening
description: Review and harden environment variable handling, secrets hygiene, .env files, .gitignore, and production configuration before launch.
effort: max
---

# Environment and Secrets Hardening

## Purpose
Make sure production configuration is explicit, safe, portable, and not leaking secrets.

## Non-negotiable rules
- Never print full secret values.
- Never commit `.env` files containing real secrets.
- Never replace unknown production secrets with guesses.
- Never weaken `.gitignore` protections.
- Do not rotate or delete credentials unless explicitly instructed.

## Inspect
- `.env`, `.env.local`, `.env.production`, `.env.example`, `.env.sample`.
- `.gitignore`, `.dockerignore`, deployment ignore files.
- `README.md`, deployment docs, `CLAUDE.md`, `STATUS.md`.
- Server config, PM2/systemd/Docker/hosting config.
- Frontend code for `VITE_`, `NEXT_PUBLIC_`, or other public env prefixes.
- Backend code for DB, email, booking, admin auth, CORS, cookies, sessions, API keys.
- CI/CD or deployment settings when present.

## Checklist

### Secrets exposure
- Real credentials are not committed.
- Secret-like values are not hardcoded in source.
- Public frontend environment variables do not contain private values.
- Logs do not print secrets.
- Example files use placeholders only.

### Environment contract
- `.env.example` lists every required variable.
- Each variable has a short purpose comment.
- Required vs optional variables are clear.
- Dev/staging/production differences are documented.
- Safe default values are used only where appropriate.

### Production behavior
- Production URLs are not hardcoded to localhost.
- CORS origins are explicit, not `*`, when credentials are used.
- Cookie security flags are suitable for HTTPS production.
- Email/form/booking providers are configurable.
- Port, host, base URL, and API URL are configurable.

### Repository hygiene
- `.env*` protections are present.
- `.env.example` is allowed to be tracked.
- Build outputs and dependency directories are ignored.
- Local-only config is not accidentally shared.

## Recommended `.env.example` standard
When creating or updating `.env.example`, use this style:

```env
# Public site URL used for canonical links, redirects, and email links.
PUBLIC_SITE_URL=https://example.com

# Backend API base URL used by the frontend.
PUBLIC_API_BASE_URL=https://api.example.com

# Server port for local or VPS runtime.
PORT=3000

# Comma-separated allowed browser origins for production CORS.
CORS_ALLOWED_ORIGINS=https://example.com,https://www.example.com

# Secret value used for signing sessions or tokens. Replace in production.
SESSION_SECRET=replace-with-secure-random-value
```

## Output format

````markdown
# Environment and Secrets Hardening Report

## Verdict
[Safe / Needs fixes / Unsafe]

## Confirmed Findings
| Area | Finding | Evidence |
|---|---|---|

## Required Fixes
| Severity | Issue | File(s) | Fix |
|---|---|---|---|

## Suggested `.env.example` Updates
```env
[proposed safe placeholders only]
```

## Values That Must Be Supplied Outside Git
- [variable] — [purpose]

## Verification
- [ ] No real secrets printed or committed
- [ ] `.env.example` safe and complete
- [ ] `.gitignore` protects local env files
- [ ] Production URL/CORS/session behavior is explicit
````
