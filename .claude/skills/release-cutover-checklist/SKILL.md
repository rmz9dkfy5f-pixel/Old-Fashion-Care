---
name: release-cutover-checklist
description: Prepare final release/cutover checklist for production launch, including verification, rollback, release notes, commit/push, deploy, smoke test, and handoff.
disable-model-invocation: true
effort: max
---

# Release Cutover Checklist

## Purpose
Control the final path from “ready” to “live” without skipping verification, rollback, or documentation.

## Non-negotiable rules
- Do not commit, push, tag, deploy, restart services, or modify production without explicit approval.
- Do not launch with unresolved P0 blockers.
- Do not hide failed checks.
- Do not rely on memory; write the checklist and evidence.
- Rollback must be known before deployment begins.

## Inputs required
Before cutover, confirm or discover:
- Current branch and commit.
- Production domain/subdomain.
- Deployment target.
- Build command.
- Start/restart method.
- Environment variables required.
- Rollback method.
- Smoke-test URLs.
- Responsible owner for final approval.

## Cutover phases

### Phase 1: Preflight
- Confirm clean working tree or document intentional changes.
- Confirm branch is appropriate.
- Confirm dependencies install.
- Confirm production env values are available outside Git.
- Confirm rollback path.

### Phase 2: Verification
- Run lint/typecheck/tests if present.
- Run production build.
- Start preview/prod-equivalent server if possible.
- Smoke-test core pages and flows.
- Confirm no secrets in diff.

### Phase 3: Release documentation
- Update release notes if requested.
- Summarize changes.
- Summarize risks and unresolved non-blockers.
- Prepare commit message.

### Phase 4: Commit/push gate
Only after approval:
- Stage intentional files only.
- Commit with clear message.
- Push to correct remote/branch.

### Phase 5: Deploy gate
Only after approval:
- Backup current production config/build if applicable.
- Deploy build or update service.
- Restart/reload only required services.
- Verify HTTPS and routes.
- Run smoke tests.

### Phase 6: Post-launch
- Confirm production smoke tests.
- Check logs/errors.
- Confirm lead/booking/contact path.
- Document final status.

## Output format

```markdown
# Release Cutover Checklist

## Release Verdict
[Ready / Not Ready / Conditional]

## Preflight Status
| Item | Status | Evidence |
|---|---|---|

## Required Approvals
- [approval required]

## Verification Results
| Check | Result | Evidence |
|---|---|---|

## Launch Blockers
| Severity | Blocker | Required Action |
|---|---|---|

## Deployment Plan
1. 
2. 
3. 

## Rollback Plan
1. 
2. 
3. 

## Smoke Test Plan
| URL/Flow | Expected Result |
|---|---|

## Final Handoff Summary
- Commit:
- Branch:
- Deployment target:
- Known issues:
- Next recommended work:
```
