---
name: booking-flow-e2e-readiness
description: Audit and verify the complete booking/contact flow from public website to backend/API/database/email/admin handling before launch.
effort: max
---

# Booking Flow End-to-End Readiness

## Purpose
Confirm that the client-facing booking or contact workflow actually works from the user click to the business receiving the lead/request.

## Non-negotiable rules
- Do not assume a form works because the page renders.
- Do not submit real customer data during tests.
- Do not use production email/SMS/payment side effects unless explicitly authorized.
- Do not change API contracts without identifying every consumer.
- Treat silent form failure as a launch blocker.

## Map the flow
Document the full chain:

1. Entry point: CTA/button/link.
2. Frontend route/page/component.
3. Form fields and validation.
4. Submit handler.
5. API endpoint or third-party form service.
6. Backend validation.
7. Persistence layer if any.
8. Notification/email/SMS if any.
9. User success/failure state.
10. Admin/business review path.

## Test cases
Use safe fake data. Cover:

### Happy path
- Required fields filled correctly.
- Submit succeeds.
- User sees confirmation.
- Business receives notification or record is created.

### Validation
- Missing required fields.
- Invalid phone/email.
- Invalid date/time if scheduling exists.
- Too-long input.
- Duplicate submission or double-click.

### Failure paths
- API unavailable.
- Network error.
- Provider/email failure.
- Server validation failure.
- Unauthorized admin access.

### Production config
- Frontend uses production API URL.
- Backend accepts production origin only.
- Email/from/reply-to settings are correct.
- Time zone handling is explicit.
- Lead data is not logged insecurely.

## Output format

```markdown
# Booking Flow E2E Readiness Report

## Verdict
[Pass / Fail / Conditional / Unknown]

## Flow Map
| Step | Location | Evidence | Risk |
|---|---|---|---|

## Test Results
| Test Case | Result | Evidence |
|---|---|---|

## Launch Blockers
| Severity | Issue | Impact | Fix |
|---|---|---|---|

## API Contract Notes
| Frontend expects | Backend provides | Status |
|---|---|---|

## Production Configuration Required
- [env/config/provider item]

## Recommended Fix Order
1. 
2. 
3. 
```
