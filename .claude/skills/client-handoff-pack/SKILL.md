---
name: client-handoff-pack
description: Build a production/client handoff summary after audit, fixes, or deployment: status, URLs, credentials-not-included, known issues, support notes, and next steps.
effort: high
---

# Client Handoff Pack

## Purpose
Create a clear handoff summary for the project after production-readiness work, fixes, or deployment.

## Non-negotiable rules
- Do not include passwords, API keys, secret values, private tokens, or private server credentials.
- Do not claim a feature is complete unless verified.
- Do not hide known issues.
- Do not give the client internal implementation noise unless it matters for ownership or support.

## Include
- Project name.
- Production/staging URLs.
- What was completed.
- What was verified.
- Known limitations.
- Client responsibilities.
- Maintenance recommendations.
- Emergency rollback/contact notes if applicable.

## Omit
- Secret values.
- Internal prompt history.
- Unnecessary development chatter.
- Raw logs unless needed.
- Speculative claims.

## Output format

```markdown
# Client Handoff Pack

## Project
[Project/client/site name]

## Current Status
[Ready / Live / Staging-ready / Needs fixes]

## Important URLs
| Purpose | URL |
|---|---|
| Production site | |
| Admin/login | |
| Booking/contact | |
| Staging/preview | |

## Completed Work
- 

## Verified Checks
| Check | Result | Notes |
|---|---|---|

## Known Issues / Follow-Up
| Priority | Item | Owner | Recommendation |
|---|---|---|---|

## Client Responsibilities
- 

## Maintenance Notes
- 

## Credentials and Secrets
Credentials are not included in this handoff. Store and share secrets only through the approved password manager or secure channel.

## Next Recommended Phase
[one concise recommendation]
```
