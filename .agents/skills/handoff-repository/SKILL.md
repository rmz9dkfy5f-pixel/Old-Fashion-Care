---
name: handoff-repository
description: Close, verify, commit, push, snapshot, deploy when authorized, and transfer repository work between agents or tools through an evidence-driven, agent-neutral handoff.
---

# handoff-repository (Codex adapter)

This is a thin adapter, not the operating contract. The full, authoritative definition for this
skill lives at:

`20_TOOLS/KITS/handoff-repository/.claude/skills/handoff-repository/SKILL.md` (relative to the
AntBrainOS vault root) — or, once installed into a project, at the co-located copy placed
alongside this adapter during installation.

Read that file in full and follow it exactly before doing anything else, including its
`references/record-templates.md`. Do not duplicate its rules here, and do not let this file's
content diverge from it — if a rule needs to change, change it there, not here.

## Codex-Specific Notes

- This vault has no confirmed Codex skill-auto-discovery mechanism (unlike Claude Code's
  `.claude/skills/` directory scan). Load this file explicitly rather than assuming automatic
  discovery.
- Cross-reference `05_SOPS/Codex/CODEX_SESSION_START.md` and `05_SOPS/Codex/CODEX_SESSION_END.md`
  for how this skill's four Operating Modes map onto Codex's own session vocabulary.
- Honor this repository's own approval-gate conventions before any Operating Mode that commits,
  pushes, tags, snapshots, or deploys.
