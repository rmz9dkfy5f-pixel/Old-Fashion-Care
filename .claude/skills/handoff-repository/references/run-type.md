# Run-Type Specification — repository_handoff

Reference material for the canonical `../SKILL.md`. Do not use this file without first reading
that file's Operating Modes, Mode Selection, Vault-Mode vs. Repository-Mode Preflight, Snapshot
Destination Resolution, Commit and Publication Safety, Receiving Audit Verdicts, and Stop
Conditions sections — this file names and cross-references those rules; it does not restate them.

## Registered Vault-Wide — See `99_SYSTEM/run_types/repository_handoff.md`

**This run type is now registered vault-wide.** As of 2026-07-14,
`99_SYSTEM/operating_contracts/agent_run_contract.md` defines the vault-wide Agent Run Contract,
and `99_SYSTEM/run_types/repository_handoff.md` is this run type's registry entry — lifted from
the YAML below with minimal rework, exactly as anticipated when this file was first built. That
registry entry is deliberately lean (existence, lifecycle status, executor, a link back here); the
detailed field-by-field Cross-Reference table below stays here, not there, because it is
skill-internal implementation detail, not registry-appropriate content. Read the registry entry
for this run type's current lifecycle status; read this file for exactly how `../SKILL.md`
enforces each field below.

## The Specification

```yaml
run_type_id: repository_handoff
display_name: Repository Handoff
version: 1.0.0
status: active
owner: AntBrainOS
executor: handoff-repository
category: repository_lifecycle

purpose: >
  Govern repository session closeout, publication, snapshotting,
  cross-tool transfer, deployment verification, and receiving-agent
  audit through explicit permissions and evidence-backed completion.

applies_to:
  - git_backed_project_repository
  - repository_with_remote
  - repository_with_snapshot_policy
  - repository_with_deployment_target
  - claude_to_codex_handoff
  - codex_to_claude_handoff
  - same_agent_repository_closeout

does_not_apply_to:
  - antbrainos_vault_root_as_git_repository
  - unrestricted_vps_maintenance
  - unrelated_project_implementation
  - destructive_recovery_without_authorization

supported_modes:
  - prepare
  - close_and_publish
  - receive_audit
  - full_transfer
```

### Field Notes

- `version: 1.0.0` versions this specification independently of `../SKILL.md`'s own frontmatter
  `version:` — the two numbers track different artifacts and are not required to move together.
- `owner: AntBrainOS` / `executor: handoff-repository` are descriptive metadata within this
  specification; the vault-wide ownership/registration relationship itself is now real — see
  `99_SYSTEM/run_types/repository_handoff.md` and the section above.
- `status: active` describes this specification's own force/currency (not deprecated), which is a
  different axis from `../SKILL.md`'s own Lifecycle Status section (currently "Early-stage /
  manually built, not yet piloted"). Both are simultaneously true and are not in conflict —
  flagged here explicitly rather than silently reconciled.
- `applies_to` / `does_not_apply_to` use snake_case tokens that are **new vocabulary introduced by
  this file** — `../SKILL.md` expresses the same operational criteria in natural language (its
  Mode Selection table and Vault-Mode vs. Repository-Mode Preflight section). This file is the
  first place these exact criteria are given stable names; it does not add new enforcement logic
  on top of what those sections already do.

## Cross-Reference — Where Each Governance Claim Is Already Enforced

Every row below points at an existing `../SKILL.md` section. Nothing here is a new rule.

| Spec concern | Enforced by (`../SKILL.md` section) | Note |
|---|---|---|
| `$handoff-repository` itself | Whole-file header | This is the canonical, authoritative definition. |
| `supported_modes` (prepare / close_and_publish / receive_audit / full_transfer) | `## Operating Modes` | Exact 1:1 match. |
| Session-end closeout | `## Operating Modes` (#2 Close and Publish), `## Durable Records` | |
| Receiving-agent audits | `## Operating Modes` (#3 Receive Audit), `## Receiving Audit Verdicts` | PASS / PASS WITH CONDITIONS / FAIL flagged there as new vocabulary too — same pattern this file follows. |
| Commit and push authorization | `## Commit and Publication Safety`, `## Core Invariants` | |
| Machine-specific snapshots | `## Snapshot Destination Resolution` | |
| Deployment verification | `## Mode Selection From Natural-Language Requests` (deploy row), `### Required stops regardless of requested mode`, `## Verification` | |
| Evidence collection | `## Verification`, `## Durable Records` | Evidence-ledger fields remain deferred — see `### Agent Run Contract and Evidence Ledger — Still Deferred` in `../SKILL.md`. This file does not reopen that deferral. |
| Independent verification | `## Core Invariants` ("never treat a same-agent self-check as independent verification"), `## Receiving Audit Verdicts`, `## Operating Modes` (#3, "remain read-only") | |
| Failure and stop behavior | `## Stop Conditions`, `### Required stops regardless of requested mode`, `## Final Report` | |
| `applies_to: git_backed_project_repository`, `repository_with_remote` | `## Vault-Mode vs. Repository-Mode Preflight`, `## Repository Inspection` | |
| `applies_to: repository_with_snapshot_policy` | `## Snapshot Destination Resolution` | |
| `applies_to: repository_with_deployment_target` | Mode Selection deploy row, `## Core Invariants` | |
| `applies_to: claude_to_codex_handoff` / `codex_to_claude_handoff` | `## Operating Modes` (#3, #4), `## Compatibility Fallback` | |
| `applies_to: same_agent_repository_closeout` | `## Operating Modes` (#1, #2) | |
| `does_not_apply_to: antbrainos_vault_root_as_git_repository` | `## Vault-Mode vs. Repository-Mode Preflight` (step 3) | The mechanism this criterion names. |
| `does_not_apply_to: unrestricted_vps_maintenance` | `## Core Invariants`, Mode Selection deploy row (deploy scoped to read-only health checks) | Broader VPS boundary rationale lives in the originating integration plan, not `SKILL.md` itself. |
| `does_not_apply_to: unrelated_project_implementation` | `## Core Invariants` ("Preserve unrelated user changes"), `### Required stops...` (dirty tree), `### Before Commit` (exclude unrelated changes) | |
| `does_not_apply_to: destructive_recovery_without_authorization` | `## Core Invariants`, `## Stop Conditions` | |

## Not New Enforcement Logic

This file's job is naming and cross-referencing existing behavior. It does not add a fifth
operating mode, does not change any authorization rule, and does not introduce a new verdict
vocabulary beyond what `../SKILL.md` already defines. If a future change is needed to actual
behavior, make it in `../SKILL.md`, not here.
