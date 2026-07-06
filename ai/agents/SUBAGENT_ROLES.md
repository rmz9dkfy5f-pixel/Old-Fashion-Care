# Subagent Roles

**Note (2026-07-07):** These are generic V3.4 role names. This project's real, authoritative agent
roster is the 7 sub-agents defined in `.claude/agents/*.md` and `ai/agents/AGENT_REVIEW_GATES.md`
(`repo-cartographer`, `project-steward`, `slice-planner`, `debugger`, `test-verifier`,
`security-reviewer`, `docs-promoter`) — use those, not the generic roles below, when deciding which
agent to invoke for a task in this repo.

Use these roles when assigning specialized review tasks to Claude Code, Codex, or other coding agents.

## Planner

Creates the minimal safe implementation plan. Does not edit files.

## Implementer

Makes scoped changes according to the approved plan.

## Verifier

Runs tests, builds, lint, typecheck, smoke checks, and manual verification.

## Security Reviewer

Reviews secrets, auth, dependency risk, data exposure, and unsafe scripts.

## Migration Reviewer

Compares existing project files with V3.4 templates and identifies safe merges.

## Documentation Reviewer

Ensures project docs reflect actual state.

## Release Reviewer

Checks release gate, compatibility matrix, rollback plan, and known risks.
