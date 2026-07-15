# EngKit Command Index

Invoke as `/eng <subcommand> [task]`. The first argument is the subcommand; the rest is task input.

| Subcommand | Category | Intent |
|---|---|---|
| `catchup` | Daily Loop | Get back up to speed after a clear/pull/day away; read what changed |
| `commit` | Daily Loop | Commit staged work with a clean conventional message; refuse on failing tests/secrets |
| `handoff` | Daily Loop | Write a continuation file before stopping |
| `plan` | Daily Loop | Explore, propose an approach + file list + risks, wait for approval (no edits) |
| `ship` | Daily Loop | Commit, push, open a PR with a description from the real diff |
| `verify` | Daily Loop | Actually run it — tests, build, app — and show output |
| `debug` | Quality | Root-cause before touching code: evidence, ranked hypotheses, minimal fix, regression test |
| `docs` | Quality | Sync README/API docs/changelog with what the code actually does |
| `fix-ci` | Quality | Pull failing CI logs, fix the real failure, push, watch until green |
| `pr-review` | Quality | Review someone else's PR with file:line findings, blockers vs suggestions |
| `review` | Quality | Fresh-context review of the current diff; only merge-blocking issues, confidence per finding |
| `security` | Quality | Security scan of the diff; each finding with severity + fix |
| `simplify` | Quality | Strip over-engineering: dead abstractions, premature generality |
| `tdd` | Quality | Test-first: failing test red → minimal code green → refactor on green |
| `test-gaps` | Quality | Find tests that can't fail and untested edges |
| `docs` | Context | (see Quality) |
| `hooks` | Context | Interview, then install hooks that make repeated mistakes impossible |
| `interview` | Context | Interview until requirements are nailed, produce SPEC.md |
| `learn` | Context | Turn a mistake/correction into a CLAUDE.md guardrail |
| `onboard` | Context | Map an unfamiliar codebase into docs/MAP.md |
| `spec` | Context | Turn SPEC.md into phased, verifiable tasks |
| `fix-issue` | Leverage | Take a GitHub issue from number to merged-ready PR |
| `migrate` | Leverage | Prove a transform on 2–3 files, then fan out batch by verified batch |
| `refactor` | Leverage | Restructure with characterization tests, one concern per step, green between steps |
| `release` | Leverage | Cut a release: version bump, changelog, tag, release notes, all verified |
| `worktree` | Leverage | Spin up a Git worktree + branch for parallel work |
| `site` | Build | Design/build a bespoke cinematic single-page site from a topic string |

If invoked with no subcommand, print this list and ask which to run. If the subcommand is unknown,
show the nearest matches and refuse to improvise.
