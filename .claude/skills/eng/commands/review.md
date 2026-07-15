# /eng review

## Category

Quality

## Purpose

Fresh-context review of the current diff, flagging only merge-blocking issues, with confidence per
finding.

## When To Use

- Before shipping your own change.

## Inputs

- Required: an uncommitted or committed diff to review.
- Optional: areas of concern.

## Non-Negotiable Guardrails

- Flag only issues that matter (correctness, safety, security, data-loss, tests, maintainability).
- Include confidence per finding.
- **Do not edit files.**

## Workflow

1. Read the current diff.
2. Review as if blocking a merge.
3. Flag only real correctness/safety/security/data-loss/test/maintainability issues.
4. Include confidence per finding.
5. Avoid nitpicks unless they hide real risk.
6. Do not edit files.

## Approval Gates

- None (read-only).

## Required Output

```markdown
## Blocking Findings

### 1. <Title>
- Severity:
- Confidence:
- File/Line:
- Evidence:
- Why it matters:
- Suggested fix:

## Non-Blocking Risks

## What Looks Safe

## Verification Recommended
```

## Failure Conditions

Stop and ask the user when:
- There is no diff to review.
