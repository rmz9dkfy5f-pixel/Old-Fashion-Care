---
name: v33-quality-gate-enforcer
description: Enforce the user's V3.3 workflow gates: inspect, plan, approval, implement small slice, verify, document, commit, push. Use when running Claude Code against existing repos.
effort: high
---

# V3.3 Quality Gate Enforcer

## Purpose
Keep Claude Code work aligned with the user's preferred V3.3 workflow for existing projects: inspect first, preserve existing work, implement in small approved slices, verify, then commit/push only when requested.

## Non-negotiable rules
- Do not treat an existing repo like a blank scaffold.
- Do not overwrite files with project history or user work.
- Do not implement before inspection and plan.
- Do not bundle unrelated fixes into one large change.
- Do not commit or push without explicit approval.
- Do not clear blockers by lowering standards.

## Workflow

### 1. Discover
- Identify repo root, branch, project type, package manager, deployment target.
- Read `CLAUDE.md`, `README.md`, `STATUS.md`, `ROADMAP.md`, `CONTEXT.md`, and relevant V3.3 docs if present.
- Inspect current work tree.

### 2. Plan
Produce a plan with:
- Goal.
- Files likely touched.
- Risks.
- Verification steps.
- Rollback path.
- Approval questions only if truly blocking.

### 3. Implement one slice
A slice must be:
- Small.
- Reversible.
- Focused on one outcome.
- Verifiable.

### 4. Verify
Run the relevant checks:
- Lint/typecheck/tests/build.
- Route smoke test.
- Form/booking smoke test if touched.
- Security/accessibility checks if relevant.

### 5. Document
Update project docs only when useful:
- `docs/project/STATUS.md`
- `docs/project/CHANGELOG.md`
- `docs/project/RELEASE_NOTES.md`
- `docs/project/DECISION_LOG.md`
- `docs/governance/PROJECT_RISK_REGISTER.md`

### 6. Commit/push gate
Only after explicit approval:
- Stage intentional files only.
- Commit with clear message.
- Push to correct branch.

## Blocker handling
If blocked:
- State the blocker.
- State what was confirmed.
- State what remains unknown.
- Provide the safest next action.
- Do not fake completion.

## Output format

```markdown
# V3.3 Quality Gate Status

## Current Gate
[Discover / Plan / Implement / Verify / Document / Commit / Push]

## Confirmed Facts
- 

## Current Slice
- Goal:
- Files:
- Risk:
- Verification:

## Gate Result
[Pass / Fail / Blocked]

## Evidence
- 

## Next Gate
[What should happen next]
```
