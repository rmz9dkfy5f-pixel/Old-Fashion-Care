# /eng test-gaps

## Category

Quality

## Purpose

Find tests that cannot fail and cases nobody tests: silent failures, mock-heavy lies, and missing
edges.

## When To Use

- Auditing test quality, not just coverage percentage.

## Inputs

- Required: the test suite / test files.
- Optional: the code under test.

## Non-Negotiable Guardrails

- **Do not edit unless asked.**
- Rank gaps by risk.

## Workflow

1. Inspect tests for assertions that cannot fail.
2. Identify mock-heavy tests that prove little.
3. Identify untested edge cases.
4. Rank test gaps by risk.
5. Propose test additions.
6. Do not edit unless asked.

## Approval Gates

- None (read-only) unless the user asks for edits.

## Required Output

Ranked list of weak/missing tests with the risk each hides and a proposed test to add.

## Failure Conditions

Stop and ask the user when:
- There is no test suite to audit.
