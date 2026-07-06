# Old Fashion Care

## Summary

Old Fashion Care is a professional care services website connecting elderly clients and their families with quality caregivers and support services. The site provides clear information about available services, builds trust through social proof, and makes it easy for visitors to get in touch.

The site is live, deployed on Netlify, and built with static HTML, CSS, and JavaScript — no framework, no build step.

---

## Current Status

See:

```text
STATUS.md
```

---

## Project Control Files

| File | Purpose |
|---|---|
| `docs/project/PROJECT_BRIEF.md` | Project goal, scope, validation question |
| `docs/project/CONTEXT.md` | Stable context and background |
| `docs/project/STATUS.md` | Current progress and next action |
| `PLAN.md` | Active build plan |
| `docs/governance/PHASE_GATES.md` | Approval checkpoints |
| `BACKLOG.md` | Work queue |
| `docs/project/ROADMAP.md` | Long-term direction |
| `docs/project/DECISION_LOG.md` | Decisions and reasons |
| `SLICE_REVIEWS.md` | Completed slice reviews |
| `LESSONS_LEARNED.md` | Process lessons |
| `docs/project/CHANGELOG.md` | Changes by date/version |
| `docs/project/RELEASE_NOTES.md` | Release summaries |
| `docs/project/COMMIT_NOTES.md` | GitHub commit tracking |
| `PROGRESS_NOTE.md` | Current GitHub progress note |
| `PROGRESS_NOTES.md` | Historical GitHub progress notes |
| `CLAUDE.md` | Claude Code instructions |
| `AGENTS.md` | Codex/agent instructions |
| `docs/governance/` | V3.4 quality-gate docs (change control, done criteria, rollback, risk register, etc.) |
| `docs/project/ARCHITECTURE.md` | Site architecture overview |
| `.claude/skills/` | 22 Claude Code skills (V3.4 baseline + 18-skill production-readiness suite) |

---

## Required Workflow

```text
Phase 1: Plan and get approval.
Phase 2: Implement only approved work.
```

Every implementation slice follows:

```text
check → fix → verify → commit → push
```

---

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Netlify (auto-deploy from `main`)
- Plausible Analytics (inline script)
- No build system, no package manager

## Setup

Static site — no dependencies to install. Open any `.html` file in a browser, or push to `main` to trigger a Netlify deploy.
