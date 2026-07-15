---
skill_id: tk.verify
name: /tk verify
category: build
version: 0.1.0
last_run: null
risk_level: low
write_access: false
---

# /tk verify

## Purpose

Run proof checks and report whether the implementation actually worked.

## Inputs Required

- Project folder path
- Approved ticket
- Expected verification steps
- Files changed, if known

## Allowed Actions

- Run approved read/build/test commands
- Inspect output
- Identify regressions
- Report evidence

## Forbidden Actions

- Do not edit files
- Do not install packages unless explicitly approved
- Do not commit
- Do not push
- Do not hide failed checks

## Output Required

1. Commands Run
2. Results
3. Errors or Warnings
4. Manual Checks
5. Regression Risks
6. Confidence Level
7. Recommended Next Command

## Stop Conditions

Stop if verification requires credentials, paid services, or destructive actions.
