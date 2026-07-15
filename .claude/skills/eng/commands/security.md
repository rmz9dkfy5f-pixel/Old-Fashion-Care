# /eng security

## Category

Quality

## Purpose

Security review of the diff: injection, auth gaps, secrets, SSRF, and more — each finding with
severity and a fix.

## When To Use

- Before shipping changes that touch auth, input handling, network calls, or dependencies.

## Inputs

- Required: a diff and any touched dependencies/config.
- Optional: threat-model notes.

## Non-Negotiable Guardrails

- Severity-rank every finding.
- **Do not edit unless the user asks.**

## Workflow

1. Inspect the diff and touched dependencies/config.
2. Check for: secrets, injection, auth/authorization gaps, SSRF, path traversal, insecure
   deserialization, unsafe redirects, sensitive logging, CORS/session/cookie mistakes,
   dependency/config risk.
3. Severity-rank the findings.
4. Provide fix guidance.
5. Do not edit unless the user asks.

## Approval Gates

- None (read-only) unless the user asks for fixes.

## Required Output

A security report (`SECURITY_REPORT_TEMPLATE.md`): findings with severity, evidence, and fix.

## Failure Conditions

Stop and ask the user when:
- The diff references external systems/secrets you can't inspect and review would be incomplete.
