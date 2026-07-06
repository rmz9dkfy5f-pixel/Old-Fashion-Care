---
name: rollback-risk-register
description: Create or update rollback plans and production risk register entries for deployment, production fixes, migrations, or high-risk changes.
effort: high
---

# Rollback and Risk Register

## Purpose
Make production changes reversible and force risks into the open before launch or deployment.

## Non-negotiable rules
- Do not deploy or implement rollback steps unless explicitly instructed.
- Do not call a plan safe if rollback depends on guessing.
- Do not ignore low-probability/high-impact risks.
- Do not bury unresolved risk in vague language.

## When to use
Use before:
- Production deployment.
- Nginx/server changes.
- Auth/admin changes.
- Database/storage changes.
- Booking/contact flow changes.
- Environment/secrets changes.
- Large refactors.

## Risk assessment dimensions
For each risk, rate:
- Probability: Low / Medium / High.
- Impact: Low / Medium / High / Severe.
- Detection: Easy / Moderate / Hard.
- Rollback confidence: Strong / Partial / Weak / Unknown.

## Rollback plan minimum
A rollback plan must specify:
- What artifact/config/state is backed up.
- Where the backup is stored.
- Exact revert command or manual action.
- Verification after rollback.
- What data could be lost or inconsistent.
- Who approves rollback if production is affected.

## Output format

```markdown
# Rollback Plan and Risk Register

## Change Summary
- Proposed change:
- Production surface affected:
- Rollback confidence:

## Risk Register
| ID | Risk | Probability | Impact | Detection | Mitigation | Rollback |
|---|---|---|---|---|---|---|

## Rollback Plan
### Backup Before Change
- 

### Rollback Steps
1. 
2. 
3. 

### Rollback Verification
- [ ] 

## Go/No-Go Recommendation
[Go / No-Go / Conditional]

## Conditions Required Before Proceeding
- 
```
