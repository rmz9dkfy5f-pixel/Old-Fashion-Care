---
skill_id: tk.handoff
name: /tk handoff
category: handoff
version: 0.1.0
last_run: null
risk_level: low
write_access: limited
---

# /tk handoff

## Purpose

Create a clean handoff packet for the next agent, next chat, or next work session.

## Inputs Required

- Project folder path
- Summary of work completed
- Files changed
- Commands run
- Verification results
- Known issues
- Next recommended action

## Allowed Actions

- Read project files
- Summarize work
- Write a handoff packet if approved
- Update command run log if approved

## Forbidden Actions

- Do not implement new work
- Do not install packages
- Do not commit
- Do not push
- Do not create tags unless explicitly approved

## Output Required

1. What Changed
2. Files Changed
3. Commands Run
4. Verification Performed
5. Known Issues
6. Do-Not-Repeat Notes
7. Next Best Restart Point
8. Recommended Next Command

## Stop Conditions

Stop if verification has not been performed and the user expected a verified handoff.
