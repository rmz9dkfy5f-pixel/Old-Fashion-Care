---
name: repo-safety-preflight
description: Check repository safety before any production-readiness edits. Use before migrations, fixes, refactors, audits that may lead to implementation, or when preparing to commit/push.
effort: high
---

# Repo Safety Preflight

## Purpose
Prevent accidental overwrites, dirty working tree confusion, wrong-branch edits, and unsafe production changes.

## Non-negotiable rules
- Do not modify files unless the user explicitly requested implementation.
- Do not delete or overwrite existing project files.
- Do not commit or push unless explicitly asked.
- Do not run cleanup commands before documenting the current state.
- Preserve user work first; optimization comes second.

## Procedure

### 1. Identify repo root and project type
Confirm:
- Current working directory.
- Git repository root.
- Framework/runtime/package manager.
- Whether this is a website repo, booking platform repo, API repo, or combined repo.

### 2. Capture Git state
Inspect:
- Current branch.
- Dirty/clean status.
- Untracked files.
- Staged files.
- Recent commits.
- Remote configuration.

### 3. Detect risky conditions
Flag these immediately:
- Working on `main` or production branch.
- Dirty tree before starting risky work.
- Untracked files that look important.
- Starter-kit/template folder copied into repo root but not migrated.
- Duplicate project roots or nested repos.
- Package lock mismatch: `package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lockb` conflicts.
- Env files present without `.gitignore` protection.
- Generated/build folders tracked unexpectedly.

### 4. Recommend a safe branch
Use one of these branch naming patterns:
- `audit/production-readiness`
- `fix/production-readiness-blockers`
- `workflow/v3.3-production-readiness`
- `deploy/production-cutover`

Do not create the branch unless implementation was requested.

### 5. Define the safe work boundary
Before edits, state:
- What files may be touched.
- What files must not be touched.
- What changes require approval.
- What verification commands must pass.

## Output format

```markdown
# Repo Safety Preflight

## Current State
| Item | Finding |
|---|---|
| Repo root | |
| Current branch | |
| Working tree | |
| Project type | |
| Package manager | |
| Deployment target | |

## Risk Flags
| Severity | Risk | Evidence | Required Action |
|---|---|---|---|

## Recommended Branch
`[branch-name]`

## Safe Work Boundary
### Allowed
- 

### Not Allowed Without Approval
- 

## Recommended Next Step
[One concrete next action]
```
