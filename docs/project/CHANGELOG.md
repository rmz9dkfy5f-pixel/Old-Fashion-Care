# Changelog

## [tooling: AntBrainOS kit install — branch `migration/project-starter-v3-3`] — 2026-07-15

Dev-tooling only. **No site files changed** — zero `.html`/`css`/`js`/`images`/`netlify.toml` edits.

### Added
- **SEOKit** — `.claude/commands/seo/` (19), `.claude/skills/seo-*.md` (4),
  `.claude/agents/{seo-auditor,serp-researcher}.md`, and the `seo/` site context (reused from the
  Editorial Sage branch — same business).
- **EngKit** — `/eng` dispatcher skill at `.claude/skills/eng/` (26 subcommands).
- **TradeKit** — `/tk` command cards + adapters at `.claude/tradekit/`.
- **handoff-repository** — cross-tool skill at `.claude/skills/handoff-repository/` +
  `.agents/skills/handoff-repository/`, with a filled `docs/governance/REPOSITORY_HANDOFF_CONFIG.md`.

### Notes
- EcomKit / VideoKit skipped (no ecommerce or video surface); MKTKit skipped (previously rolled back
  on the design branches as a poor fit for a static business site).
- This branch is pending a deletion decision; the install is included per the "all branches" request.

---

## Unreleased

- Initialized Project Starter Kit V3.4 structure.
