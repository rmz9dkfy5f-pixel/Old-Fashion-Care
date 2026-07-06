---
name: deployment-nginx-https-readiness
description: Prepare or audit VPS/nginx/HTTPS deployment readiness for a production web app, static site, API, or booking platform.
effort: max
---

# Deployment, Nginx, and HTTPS Readiness

## Purpose
Make deployment predictable, reversible, and production-safe for VPS/static hosting/app server setups.

## Non-negotiable rules
- Do not deploy without explicit user approval.
- Do not overwrite production config without backup.
- Do not restart production services unless explicitly authorized.
- Do not assume nginx root/proxy paths. Verify them.
- Do not expose apps over HTTP only for production.

## Inspect
- Deployment target: VPS, static host, app platform, Docker, PM2, systemd, Netlify/Vercel/etc.
- Build output directory.
- Nginx server blocks and enabled sites.
- Reverse proxy targets.
- TLS certificate/certbot status if accessible.
- DNS/domain/subdomain expectations.
- Process manager config.
- Environment variables.
- Logs and health checks.
- Rollback path.

## Readiness checklist

### Build artifact
- Build command produces expected output.
- Output path matches deployment config.
- Static assets resolve under production base path.
- No hardcoded localhost/staging references.

### Nginx/static/reverse proxy
- Correct `server_name`.
- HTTP redirects to HTTPS.
- Static root or proxy target is correct.
- SPA fallback exists if needed.
- API proxy paths do not conflict with frontend routes.
- Upload/body limits are appropriate if forms/uploads exist.

### HTTPS
- Certificate exists or acquisition path is documented.
- Renewal path is known.
- Mixed content risk checked.
- Secure cookies are compatible with HTTPS.

### Process manager
- Start command is production-appropriate.
- Restart policy exists.
- Logs are accessible.
- Env file location is documented.
- Health check or status command exists.

### Rollback
- Previous release can be restored.
- Config backups exist.
- Deployment steps are documented.
- Verification steps are listed.

## Output format

```markdown
# Deployment/Nginx/HTTPS Readiness Report

## Verdict
[Ready / Not Ready / Conditional / Unknown]

## Deployment Facts
| Item | Finding | Evidence |
|---|---|---|

## Required Fixes
| Severity | Issue | File/Service | Fix |
|---|---|---|---|

## Proposed Deployment Plan
1. Preflight backup:
2. Build:
3. Upload/sync:
4. Configure service/proxy:
5. Enable HTTPS:
6. Verify:
7. Rollback if failed:

## Smoke Tests
| Check | Expected Result |
|---|---|
| HTTP redirect | |
| HTTPS home page | |
| Primary CTA/booking | |
| API health | |
| Admin login | |

## Do Not Deploy Until
- [blockers]
```
