---
skill_id: tk.scan
name: /tk scan
category: orient
version: 0.1.0
last_run: null
risk_level: low
write_access: false
---

# /tk scan

## Purpose

Inspect the current project state before deciding or changing anything.

## Inputs Required

- Project folder path
- User's current goal, if known

## Allowed Actions

- Read files
- Inspect folder structure
- Check git status
- Check latest tags
- Inspect package scripts
- Identify project context files
- Identify recent handoff files

## Forbidden Actions

- Do not edit files
- Do not install packages
- Do not commit
- Do not push
- Do not create tags

## Output Required

1. Current Branch
2. Git Status
3. Project Stack
4. Important Files Found
5. Available Scripts
6. Latest Version or Snapshot
7. Current Risks
8. Recommended Next Command

## Stop Conditions

Stop if the folder is not a repo and the user expected a repo.
