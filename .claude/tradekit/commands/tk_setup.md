---
skill_id: tk.setup
name: /tk setup
category: orient
version: 0.1.0
last_run: null
risk_level: low
write_access: limited
---

# /tk setup

## Purpose

Prepare a project to use TradeKit without changing application behavior.

## Inputs Required

- Project folder path
- Project name
- Whether this is a new or existing repo
- Whether `.tradekit/` may be created locally

## Allowed Actions

- Create a local `.tradekit/` folder if approved
- Create project metadata files
- Record constraints
- Record verification commands
- Record handoff expectations

## Forbidden Actions

- Do not modify application source code
- Do not install packages
- Do not commit
- Do not push
- Do not create tags

## Output Required

1. Setup Summary
2. Files Created
3. Files Not Touched
4. Detected Project Type
5. Required Next Command

## Stop Conditions

Stop if the repo path is unclear or if file creation has not been approved.
