---
name: handoff-repository
description: Close, verify, commit, push, snapshot, deploy when authorized, and transfer repository work between agents or tools through an evidence-driven, agent-neutral handoff.
version: 1.2.0
updated: 2026-07-14
---

# Handoff Repository

This is the canonical, authoritative definition of the `handoff-repository` skill. Codex and
generic-tool support (`../../../.agents/skills/handoff-repository/SKILL.md` and
`../../../generic/HANDOFF_REPOSITORY_GENERIC.md`) are thin pointer files that read and follow this
file — they must never fork or duplicate the procedure below. If a rule needs to change, change it
here, not in an adapter.

Built 2026-07-13 as a corrective amendment to
`03_PROJECTS/Active/Claude_Code_Workflow/ANTBRAINOS_REPOSITORY_HANDOFF_SKILL_INTEGRATION_PLAN_2026-07-13.md`,
whose own Slice 0 audit found this skill did not previously exist anywhere in AntBrainOS. v1.0.0
covered the standalone package only. v1.1.0 (same day) adds the Slice 1 runtime-contract content
below: mode-selection/authorization semantics, an explicit vault-mode vs. repository-mode
preflight, and a compatibility-fallback statement. v1.1.1 (same day) points at
`references/run-type.md`, a skill-scoped formalization of this skill's own run type. v1.2.0
(2026-07-14) registers this skill's run type under the new vault-wide
`99_SYSTEM/operating_contracts/agent_run_contract.md` and wires its evidence output into the new
vault-wide `99_SYSTEM/logs/evidence/` ledger — see `references/run-type.md` (updated) and
`99_SYSTEM/run_types/repository_handoff.md` (new). It is still not wired into `05_SOPS/` session
routing or the V3.4 starter kit — see the plan's "Slice 0.5", "Slice 1", and "Slice 1.5" sections
for the full record.

## Purpose

Close, verify, commit, push, snapshot, deploy when authorized, and transfer repository work
between agents or tools through an evidence-driven, agent-neutral handoff.

## Core Invariants

- Follow `inspect -> fix only authorized blockers -> verify -> document -> commit -> push ->
  independent receiving audit`.
- Treat repository files, Git history, and fresh command output as authoritative.
- Never claim tests, builds, snapshots, deployments, device checks, or audits succeeded without
  fresh evidence.
- Preserve unrelated user changes.
- Do not hand off a dirty tree unless the user explicitly accepts a documented dirty handoff.
- Keep the canonical handoff agent-neutral.
- Never add LLM or tool co-author attribution.
- Do not commit, push, tag, merge, snapshot, deploy, rewrite history, or perform destructive
  recovery without explicit authorization or approved repository policy.
- Run only the audit appropriate to the receiving tool.
- Require the receiving tool to remain read-only until its audit permits editing.
- Never treat a same-agent self-check as independent verification.

## Operating Modes

### 1. Prepare

Inspect, verify, and update records. Stop before Git publication or other external mutations.

### 2. Close and Publish

Verify, document, commit, push, and confirm remote state when authorized.

### 3. Receive Audit

Remain read-only. Validate Git state, handoff consistency, verification evidence, risks,
blockers, and edit safety.

### 4. Full Transfer

Complete the authorized sender closeout and prepare the exact receiving-audit state.

Do not interpret the word "handoff" alone as permission to commit, push, snapshot, deploy, merge,
or tag.

## Mode Selection From Natural-Language Requests

Match the user's actual words to a mode and its authorized mutations. Do not infer broader
authorization than what was explicitly granted.

| Request | Mode | Authorized mutations |
|---|---|---|
| "Prepare a handoff" / "prepare handoff" (no Git permission given) | Prepare | Inspect, verify, update records only. No commit/push. |
| "Finish this repository handoff, commit and push" | Close and Publish | Commit + push. Not tag/snapshot/deploy unless separately stated. |
| "Commit and push, but do not deploy" | Close and Publish | Commit + push only; deploy explicitly withheld. |
| "Create the approved snapshot at this exact path, then commit and push" | Close and Publish | Commit + push + the one named, exact-path snapshot. Do not infer other snapshot destinations. |
| "Deploy the pushed commit to the VPS and verify nginx and application health" | Close and Publish (deploy authorized) | Deploy + read-only health checks. Requires the commit already be pushed. |
| "Audit the Claude handoff before Codex edits anything" (or the reverse direction) | Receive Audit | Read-only. Run only the receiving tool's directional audit — never both directions for the same handoff. |
| Explicit cross-tool completion (sender finishes, receiver picks up in one authorized flow) | Full Transfer | Sender's authorized closeout steps, then prepare the exact receiving-audit state. |
| "Resume the same-agent session after an interruption" | Not this skill | Route to the existing same-agent session-recovery path, not a receiving audit. |
| Just "handoff," with no explicit Git permission | Prepare | Never treat bare "handoff" as commit/push/snapshot/deploy/merge/tag authorization. |

### Required stops regardless of requested mode

- Dirty working tree containing files unrelated to this task's scope — stop and ask before
  including or excluding them; do not silently commit unrelated changes.
- Required manual/device/browser verification is unavailable — report "not run" with a reason,
  do not claim it passed.
- The AntBrainOS vault root is supplied (mistakenly or otherwise) as "the project root" — see
  Vault-Mode vs. Repository-Mode Preflight below; stop before running any Git command.
- The project has an existing tool-specific handoff file (e.g. `HANDOFF_TO_CLAUDE.md`) but no
  agent-neutral one — do not silently create a second, competing handoff file; reconcile first.
- The project's configuration names conflicting snapshot destinations — stop and ask which is
  authoritative rather than picking one.
- A deployment health check passes but the deployed commit does not match the intended commit —
  report this mismatch explicitly; a passing health check does not imply the right code shipped.

## Vault-Mode vs. Repository-Mode Preflight

Before running any Operating Mode:

1. Confirm the exact working-target path.
2. Determine whether it is the AntBrainOS vault itself or a git-backed project repository (e.g.
   via `git rev-parse --show-toplevel` / `git status` against the target).
3. If the target is the AntBrainOS vault root (or resolves to it), **do not run any Git command
   against it** — the vault is Syncthing/manual-snapshot governed, not git-backed. Snapshot
   operations there follow `05_SOPS/Obsidian/ANTBRAIN_VAULT_SNAPSHOT.md` instead, which this skill
   does not replace.
4. If ambiguous — including the AntBrainOS vault root being mistakenly supplied as "the project
   root" — stop and ask which target was intended before proceeding.
5. Record the confirmed mode (vault vs. repository) in the Final Report.

## Compatibility Fallback

If this skill is not installed or available in the current tool or repository:

- Read this canonical `SKILL.md` directly and follow it manually — it is a plain Markdown
  procedure with no special invocation required beyond reading and following it.
- For a receiving audit specifically, the pre-existing directional audit prompts
  (`09_PROMPTS/Claude_Code_Prompts/04_Prompts/claude_repo_audit_after_codex_handoff.md`,
  `codex_repo_audit_after_claude_handoff.md`) remain a valid fallback. They use an older,
  prose-only format with no `PASS / PASS WITH CONDITIONS / FAIL` verdict — treat their "Safe to
  Edit?" answer as the equivalent signal.
- Do not silently invent a different procedure because this skill isn't installed. Fall back
  explicitly and say so in the Final Report.

## Repository Inspection

Inspect applicable repository instructions and records, including existing equivalents of:

- `AGENTS.md`
- `CLAUDE.md`
- `AGENT_HANDOFF.md`
- `STATUS.md`
- `CONTEXT.md`
- `CURRENT_CONTEXT.md`
- `PLAN.md`
- `ROADMAP.md`
- `BACKLOG.md`
- `NEXT_ACTIONS.md`
- `KNOWN_ISSUES.md`
- `DECISION_LOG.md`
- `SESSION_LOG.md`
- `PROGRESS_NOTE.md` / `PROGRESS_NOTES.md`
- `COMMIT_NOTES.md`
- `CHANGELOG.md`
- `RELEASE_NOTES.md`
- `PHASE_GATES.md`
- `SLICE_REVIEWS.md`
- `README.md`

Capture: repository root, execution surface, branch, upstream, HEAD, recent history, tags,
remotes, dirty state, conflicts, current version, deployment target, validation commands,
acceptance criteria, incomplete work, blockers, and handoff provenance.

## Snapshot Destination Resolution

**This section is an addition beyond the skill's core contract above** — added because
repository snapshots must resolve to the correct machine-specific destination without hard-coding
any path into this universal skill file.

Before creating any repository snapshot (Close and Publish / Full Transfer modes):

1. Detect the current machine:
   ```bash
   scutil --get ComputerName 2>/dev/null || hostname
   ```
2. Read the project's `TEMPLATE_REPOSITORY_HANDOFF_CONFIG.md` (or repository-local equivalent)
   `### Snapshot Destination by Machine` table.
3. Match the detected machine against that table.
4. If no row matches, or more than one row could plausibly match, **stop and ask the user** for
   the correct snapshot destination — do not guess or infer a path pattern.
5. Record the resolved path actually used in the handoff record (see
   `references/record-templates.md`, Template 1), not merely the configured default.

This skill file must never contain a hard-coded machine name, mount point, or snapshot path. All
literal paths live only in the project's own `TEMPLATE_REPOSITORY_HANDOFF_CONFIG.md`.

## Verification

Select validation from the actual repository rather than assuming a toolchain. Run applicable
focused tests, type checks, linting, formatting checks, integration tests, production builds,
runtime smoke tests, visual checks, accessibility checks, device checks, deployment health
checks, final diff review, and secret checks.

Record exact commands, results, and evidence. Report unavailable checks as `not run` with a
reason.

## Durable Records

Update the repository's existing canonical records selectively — do not mechanically update
every Markdown file. Use `references/record-templates.md` for the exact field-by-field templates
rather than re-deriving field names ad hoc.

The agent-neutral handoff must record: session purpose and scope; sending and receiving tools;
model, effort, and execution surface when known; start and end branch/commit; files and behavior
changed; acceptance criteria and completion state; commands and verification results; evidence
locations; incomplete and unverified items; risks, blockers, and known issues; decisions and
assumptions; safe and protected edit areas; next recommended task; cross-tool audit requirement;
commit, push, tag, snapshot, deployment, and remote status; previous-handoff provenance. When a
run produces real evidence, additionally record it in the vault-wide evidence ledger
(`99_SYSTEM/logs/evidence/`) per the section below.

### Agent Run Contract and Evidence Ledger — Registered

Both artifacts that were previously deferred now exist:
`99_SYSTEM/operating_contracts/agent_run_contract.md` is the vault-wide Agent Run Contract, and
`99_SYSTEM/run_types/repository_handoff.md` registers this skill's run type under it (lifecycle
status `Candidate`). `99_SYSTEM/logs/evidence/` is the vault-wide evidence ledger — use
`references/record-templates.md` Template 2 verbatim when a run produces real evidence, and add
one row to `99_SYSTEM/logs/evidence/INDEX.md`. See `references/run-type.md` for the detailed
field-by-field cross-reference between the registered run type and this file's own sections.

## Commit and Publication Safety

### Before Commit

- Review the complete diff and diff summary.
- Exclude unrelated changes, generated noise, secrets, credentials, and local settings.
- Confirm the staged diff is one coherent authorized unit.
- Rerun checks invalidated by final changes.
- Verify the handoff matches actual repository state.

### After Commit

- Record the commit ID.
- Confirm and classify the working-tree state.
- Push only the intended branch.
- Verify the remote-tracking state contains the pushed commit.

Tags, snapshots, releases, merges, pull requests, and deployments remain separately authorized.

## Receiving Audit Verdicts

Return exactly one:

- `PASS — safe to edit`
- `PASS WITH CONDITIONS`
- `FAIL — do not edit`

A failure must identify concrete blockers and the recovery required.

**This three-value verdict is new vocabulary introduced by this skill.** The two existing
directional audit prompts (`09_PROMPTS/Claude_Code_Prompts/04_Prompts/claude_repo_audit_after_codex_handoff.md`,
`codex_repo_audit_after_claude_handoff.md`) currently use prose-only sections with no PASS/FAIL
enum. Updating those two prompts to also emit this verdict is a deferred future item, out of
scope for this skill's own build.

## Stop Conditions

Stop when:

- Changed-file ownership is ambiguous.
- Secrets may be committed.
- Required scope, branch, remote, release target, or deployment target is ambiguous.
- A destructive or irreversible action lacks authorization.
- Required human, browser, device, or manual verification is unavailable.
- Fixing a failed check would expand scope.
- A clean handoff would require discarding work.

## Final Report

Report:

- Handoff verdict
- Branch, commit, upstream, push, and working-tree state
- Completed scope
- Verification evidence
- Records updated
- Identifiers actually created
- Residual risks and unverified items
- Exact next action
- Whether receiving audit is required before editing

Never use "done," "verified," "deployed," "clean," or "safe to edit" without supporting evidence.

## Lifecycle Status

Early-stage / manually built, not yet piloted. Slice 1 of the originating integration plan
(register the skill, define the runtime contract) is now **fully complete** as of 2026-07-14: all
six original action items are done — mode-selection/authorization semantics, the
vault-mode/repository-mode preflight, the compatibility fallback, the registry entry, and (closed
2026-07-14, in a dedicated vault-wide pass rather than as a side effect) the Agent Run Contract
and evidence-ledger fields. Slice 1.5 (2026-07-13) added the skill-scoped `repository_handoff`
run-type formalization (`references/run-type.md`), now registered vault-wide at
`99_SYSTEM/run_types/repository_handoff.md`. Slices 2–8 (router integration, starter-kit rollout,
pilots, default activation) remain unauthorized.

The previously-unreconciled automation/rollout vocabulary collision is **resolved, not
reflagged**: `99_SYSTEM/operating_contracts/agent_run_contract.md` owns `Candidate → Manual Trial
→ Verified Procedure → Skillized → Evaluated → Supervised Default` for explicitly-invoked,
human-supervised run types (this skill is recorded there as `Candidate`); `automation_promotion_contract.md`
keeps its own `Manual → Checklist → Scripted → Verified → Scheduled → Monitored` scale, now
explicitly scoped to scheduled/unattended automation only — the two contracts cross-reference each
other.
