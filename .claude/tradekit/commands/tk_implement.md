---
skill_id: tk.implement
name: /tk implement
category: build
version: 0.1.0
last_run: null
risk_level: medium
write_access: true
---

# /tk implement

## Purpose

Implement one approved ticket only.

## Inputs Required

- Approved ticket
- Project folder path
- Scope boundary
- Acceptance criteria
- Verification steps

## Allowed Actions

- Modify files required by the approved ticket
- Add small supporting files if necessary
- Preserve existing behavior outside the ticket scope
- Report changed files

## Forbidden Actions

- Do not broaden scope
- Do not rewrite unrelated systems
- Do not upgrade dependencies unless approved
- Do not change frameworks
- Do not delete files unless explicitly approved
- Do not commit
- Do not push

## Output Required

1. Implementation Summary
2. Files Changed
3. Scope Confirmation
4. Deviations From Ticket
5. Required Verification
6. Recommended Next Command

## Stop Conditions

Stop if the ticket is ambiguous, too broad, or conflicts with existing repo state.
