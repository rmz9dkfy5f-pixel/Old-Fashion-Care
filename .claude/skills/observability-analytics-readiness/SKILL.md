---
name: observability-analytics-readiness
description: Audit analytics, event tracking, error logging, uptime monitoring, form failure visibility, and production observability before launch.
effort: high
---

# Observability and Analytics Readiness

## Purpose
Make sure production issues and business-critical events are visible after launch.

## Non-negotiable rules
- Do not add tracking that violates privacy expectations or client requirements.
- Do not log secrets, passwords, tokens, or full sensitive form data.
- Do not treat analytics as a substitute for error monitoring.
- Do not block launch on nice-to-have metrics if critical failures are observable.

## Inspect
- Analytics provider/config if present.
- Event tracking for lead/contact/booking actions.
- Error logging on frontend/backend.
- Server logs and access logs.
- Health endpoints.
- Uptime monitoring plan.
- Form failure visibility.
- Admin/business notification path.
- Privacy/cookie notices if applicable.

## Checklist

### Business events
Track or otherwise verify visibility for:
- Primary CTA clicks.
- Booking/contact form starts if useful.
- Successful booking/contact submission.
- Failed booking/contact submission.
- Phone/email/location clicks for local business sites.

### Technical errors
- Frontend JS errors are detectable.
- Backend errors are logged with request context but no secrets.
- API failures return safe, actionable errors.
- Form provider/email failures are visible.

### Uptime/health
- Public site uptime can be monitored.
- API health endpoint exists if backend/API exists.
- SSL expiration monitoring is considered.
- Disk/process/service health is considered for VPS deployments.

### Privacy and data handling
- Tracking does not collect unnecessary personal data.
- Form data is not exposed in URLs.
- Logs avoid sensitive user-entered content.
- Cookie/tracking notice is considered if required by project/client.

## Output format

```markdown
# Observability and Analytics Readiness Report

## Verdict
[Ready / Not Ready / Conditional]

## Current Observability
| Area | Status | Evidence |
|---|---|---|

## Critical Visibility Gaps
| Severity | Gap | Impact | Fix |
|---|---|---|---|

## Recommended Events
| Event | Trigger | Purpose |
|---|---|---|

## Logging Rules
- Do not log:
- Safe to log:

## Launch Minimum
- [ ] Uptime check defined
- [ ] Critical form/booking failures visible
- [ ] Success submissions visible
- [ ] Backend/API errors visible if backend exists
```
