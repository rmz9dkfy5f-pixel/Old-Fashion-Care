---
skill_id: tk.slice
name: /tk slice
category: decide
version: 0.1.0
last_run: null
risk_level: low
write_access: false
---

# /tk slice

## Purpose

Turn an approved next move into a small, safe implementation ticket.

## Inputs Required

- Approved next move
- Project folder path
- Constraints
- Verification expectations

## Allowed Actions

- Read project files
- Define scope
- Define non-goals
- Identify likely files
- Define acceptance criteria
- Define verification steps
- Define rollback plan

## Forbidden Actions

- Do not edit files
- Do not implement
- Do not install packages
- Do not commit
- Do not push

## Output Required

1. Ticket Title
2. Goal
3. Non-Goals
4. Files Likely Involved
5. Acceptance Criteria
6. Verification Steps
7. Rollback Plan
8. Recommended Next Command

## Stop Conditions

Stop if the requested slice is too broad to verify in one pass.
