# Commit Notes

## Summary — Install AntBrainOS kit tooling (branch `migration/project-starter-v3-3`) — 2026-07-15

- **What changed:** dev-tooling only. Added **SEOKit** (`.claude/commands/seo/` ×19,
  `.claude/skills/seo-*.md` ×4, `.claude/agents/{seo-auditor,serp-researcher}.md`, `seo/` context
  reused from the Editorial Sage branch), **EngKit** (`.claude/skills/eng/`, `/eng` + 26
  subcommands), **TradeKit** (`.claude/tradekit/`, 7 `/tk` cards + adapters), and the cross-tool
  **handoff-repository** skill (`.claude/skills/` + `.agents/skills/` + a filled
  `docs/governance/REPOSITORY_HANDOFF_CONFIG.md`).
- **Why:** user asked to install as many fit-appropriate kits as possible across all branches.
  EcomKit/VideoKit skipped (no surface); MKTKit skipped (previously rolled back). This branch is
  pending a deletion decision; included per the "all branches" request.
- **Validation:** `git status` shows only `.claude/`, `.agents/`, `docs/governance/`, `seo/`, and
  tracking docs; site-file guard grep clean. **No `.html`/`css`/`js`/`images`/`netlify.toml`
  touched.**
- **Risks:** none to the live site (this branch is not deployed).

---

## Suggested Commit Template

```text
<type>: <short summary>

- What changed:
- Why:
- Validation:
- Risks:
```

## Commit Types

- feat
- fix
- docs
- refactor
- test
- chore
- security
- perf
