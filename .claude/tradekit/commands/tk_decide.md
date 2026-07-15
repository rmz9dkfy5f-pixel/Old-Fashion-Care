---
skill_id: tk.decide
name: /tk decide
category: decide
version: 0.1.0
last_run: null
risk_level: low
write_access: false
---

# /tk decide

## Purpose

Choose the next safest, highest-leverage project action based on repo state, project memory, and
user goal. **This is the flagship command.**

## Inputs Required

- Project folder path
- User goal
- Current project state
- Latest handoff/context files, if present
- Latest version or snapshot, if present

## Allowed Actions

- Read project files
- Inspect git status
- Inspect project scripts
- Compare candidate next actions
- Recommend one next action

## Forbidden Actions

- Do not edit files
- Do not install packages
- Do not commit
- Do not push
- Do not create tags
- Do not implement the recommendation

## Decision Criteria

Evaluate options by:

1. Expected impact
2. Risk reduction
3. Verification cost
4. Dependency risk
5. Context completeness
6. Rollback safety
7. Alignment with current project phase

## Output Required

1. Current State
2. Real Problem
3. Recommended Next Move
4. Why This Move Wins
5. Alternatives Rejected
6. Scope Boundary
7. Risks
8. Verification Plan
9. Recommended Next Command

## Stop Conditions

Stop if the repo state is dirty and the requested next action could overwrite uncommitted work.
