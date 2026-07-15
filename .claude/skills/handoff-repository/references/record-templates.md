# Record Templates — handoff-repository

Reference material for the canonical `../SKILL.md`. Do not use these templates without first
reading that file's Durable Records / Commit and Publication Safety / Receiving Audit Verdicts
sections — they explain what each field means and when each template applies.

Each field below is annotated with its source: `[from AGENT_HANDOFF.md]`, `[from
AGENT_RUN_LOG.md]`, `[from COMMIT_NOTES.md]`, or `[new]`. Nothing is presented as pre-existing
vault convention unless it actually is one.

---

## Template 1 — Agent-Neutral Handoff Record

Use for the durable, repository-local handoff record (the repo's own equivalent of
`AGENT_HANDOFF.md`). Reuses that file's field vocabulary verbatim wherever the same concept
applies.

```md
**Last Updated By:** <tool> — <date> (<machine>)                         [from AGENT_HANDOFF.md]
**Work target:** <git-backed project repo / vault / other> — `<repo-name>` (`<path>`, `<branch>`). [from AGENT_HANDOFF.md]
**Repo truth (verified from this machine):**                             [from AGENT_HANDOFF.md]
  <branch>/<upstream> at <commit>. Hard-clean verified: `git status --porcelain=v1 --untracked-files=all` <empty/not-empty>.
  <branch> <ahead/behind/up to date> with <upstream>.
**Sending tool / receiving tool:**                                       [new]
**Model / effort / execution surface:**                                  [from AGENT_RUN_LOG.md Model Usage Record]
**Session purpose and scope:**                                           [new]
**Files and behavior changed:**                                          [new]
**Acceptance criteria and completion state:**                            [new]
**Commands run and verification results:**                               [new — use Verification section of ../SKILL.md]
**Evidence locations:**                                                  [new]
**Incomplete / unverified items:**                                       [new]
**Risks / blockers / known issues:**                                     [new]
**Decisions and assumptions made:**                                      [new]
**Safe to edit:** yes / no                                                [from AGENT_HANDOFF.md]
**Do not touch:** <protected paths, in-flight work>                      [from AGENT_HANDOFF.md]
**Next recommended task:**                                                [from AGENT_HANDOFF.md — canonical label]
  <!-- Alias seen in this vault: "Recommended next task" (same file, less frequent).
       Use one per handoff record; do not use both. -->
**Cross-tool audit requirement:** <required / not required, and which directional audit>  [new]
**Commit / push / tag / snapshot / deployment / remote status:**         [new]
**Previous-handoff provenance:** confirmed / strongly inferred / weakly inferred / unknown  [from REPO_SESSION_START_RECOVERY_AUDIT.md's evidence hierarchy]
**Closeout disposition:** <e.g. COMPLETE_AND_READY / COMPLETE_WITH_KNOWN_ISSUES>  [from AGENT_HANDOFF.md]
```

---

## Template 2 — Evidence Ledger Entry

**A vault-wide evidence ledger now exists:** `99_SYSTEM/logs/evidence/` (built 2026-07-14 — see
`99_SYSTEM/logs/evidence/INDEX.md` for the convention and vault-wide `08_DECISIONS/DECISION_LOG.md`
Decision #26). This template's shape below is the one actually used there — copy it into a new
dated file rather than re-deriving field names.

Reuses `AGENT_RUN_LOG.md`'s Run block and Model Usage Record block verbatim where concepts
overlap, since that per-project V3.4-kit template is the closest implemented analogue, even
though it is not itself vault-wide.

```md
## Run YYYY-MM-DD HH:MM
Agent/tool:                                                               [from AGENT_RUN_LOG.md]
Task:                                                                     [from AGENT_RUN_LOG.md]
Status: PASS / PARTIAL / BLOCKED / FAIL                                   [from AGENT_RUN_LOG.md]
  <!-- This is AGENT_RUN_LOG.md's task-completion enum — distinct from the receiving-audit
       PASS / PASS WITH CONDITIONS / FAIL verdict in Template 4 below. Do not conflate the two. -->
Files inspected:                                                          [from AGENT_RUN_LOG.md]
Files changed:                                                            [from AGENT_RUN_LOG.md]
Validation run:                                                           [from AGENT_RUN_LOG.md]
Result:                                                                   [from AGENT_RUN_LOG.md]
Risks:                                                                    [from AGENT_RUN_LOG.md]
Next action:                                                              [from AGENT_RUN_LOG.md]

## Model Usage Record                                                     [from AGENT_RUN_LOG.md]
Tool used:
Surface used:
Model used:
Effort/thinking level:
Why this model was chosen:
If in VS Code, why Codex or Claude Code was chosen:
Was the model sufficient? Yes / No
Should similar tasks use the same route? Yes / No
Escalation needed next time? Yes / No
Notes:

## Handoff-Specific Fields                                                [new]
Handoff run type / mode: Prepare / Close and Publish / Receive Audit / Full Transfer
Requested vs. actual model/effort/execution surface, fallback, escalation cause:
Exact commands + exit results:
Evidence artifact locations:
Commit / push / tag / snapshot / deployment identifiers:
Verifier identity and independence status: <same-agent self-check is never "independent">
Stated limitations:
```

---

## Template 3 — Commit Notes Entry

Reuses `docs/project/COMMIT_NOTES.md`'s exact shape verbatim.

```md
<type>: <short summary>                                                   [from COMMIT_NOTES.md]

- What changed:                                                           [from COMMIT_NOTES.md]
- Why:                                                                    [from COMMIT_NOTES.md]
- Validation:                                                             [from COMMIT_NOTES.md]
- Risks:                                                                  [from COMMIT_NOTES.md]
```

Commit types: `feat, fix, docs, refactor, test, chore, security, perf` `[from COMMIT_NOTES.md]`.

Never add an LLM/tool co-author line to the commit message — see Core Invariants in
`../SKILL.md`.

---

## Template 4 — Receiving-Audit Result

**The `PASS / PASS WITH CONDITIONS / FAIL` verdict below is new vocabulary introduced by the
handoff-repository skill.** Neither `claude_repo_audit_after_codex_handoff.md` nor
`codex_repo_audit_after_claude_handoff.md` currently use any PASS/FAIL enum — they use prose
sections only. This template deliberately keeps those same prose section headers so it stays
forward-compatible if those two prompts are ever updated to adopt this verdict (a deferred,
not-yet-authorized future item, not part of this build).

```md
## Verdict: PASS / PASS WITH CONDITIONS / FAIL                            [new]

## Current State                                                         [from claude/codex audit prompts]
## Recent Work                                                           [from claude/codex audit prompts]
## <Tool>-Specific Artifacts Found                                       [from claude/codex audit prompts]
## Incomplete / Risky Items                                              [from claude/codex audit prompts]
## Context Quality                                                       [from claude/codex audit prompts]
## Recommended Next Step                                                 [from claude/codex audit prompts]
## Safe to Edit?                                                         [from claude/codex audit prompts]
## Questions / Blockers                                                  [from claude/codex audit prompts]

<!-- Required only if Verdict is FAIL: -->
## Concrete Blockers + Required Recovery                                 [new — per SKILL.md Stop Conditions]
```
