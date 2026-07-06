# Project Risk Register

Use this to track risks that could affect correctness, security, delivery, maintainability, data
safety, client trust, or deployment stability.

## Risk Rating

| Level | Meaning |
|---|---|
| Low | Minor inconvenience or cleanup issue |
| Medium | Could slow delivery or create visible defects |
| High | Could break core functionality, data, deployment, or trust |
| Critical | Could cause data loss, security exposure, production outage, or irreversible damage |

## Open Risks

| ID | Risk | Area | Impact | Likelihood | Level | Mitigation | Status |
|---|---|---|---|---|---|---|---|
| R-001 | No automated tests, lint, or build check — all QA is manual browser verification | testing/verification | Medium | Medium | Medium | Keep the local `href`/`src` resolution sweep and manual page-load checks as standard practice before every push | Open |
| R-002 | SEO metadata is fully hand-maintained across 6 duplicated `<head>` blocks — easy for one page to drift | documentation drift | Medium | Medium | Medium | Re-run the SEO audit sweep whenever any page's `<head>` is touched | Open |
| R-003 | Snapshot/RepoBackups root has moved drives twice (`/Users/ant/WorkSync` → `DataHub_2TB` → `AntNVMe1TB`) — a future drive change could silently break the snapshot step | deployment / AI workflow | Medium | Low | Medium | Verify the RepoBackups path is still mounted and populated at the start of any session that will snapshot, per the machine-detection lesson in the AntBrainOS vault | Open |
| R-004 | Two parallel doc systems existed side-by-side (root v3.3 files vs `docs/governance`/`docs/project` V3.4 templates) before this consolidation — a future package install could reintroduce the same drift | AI workflow / documentation drift | Medium | Medium | Medium | This consolidation (2026-07-06/07) is the mitigation; re-check for reintroduced duplicates after any future skill/package install | Open |
| R-005 | `images/hero-ai.jpg` is still a soft, low-res placeholder crop, not the client's original hi-res photo | client content | Low | High (known, pending) | Low | Swap in the hi-res original before final launch polish (tracked in `BACKLOG.md`) | Open |
| R-006 | No dedicated `apple-touch-icon.png` — falls back to `favicon.svg` on iOS home-screen bookmarks | client content | Low | Medium | Low | Create a real 180×180 PNG (tracked in `BACKLOG.md`) | Open |

## Closed Risks

| ID | Risk | Resolution | Date closed |
|---|---|---|---|
| R-C01 | `og:image`/`twitter:image` referenced a nonexistent `images/og-default.png` on all 6 pages | Repointed to existing `images/hero-ai.jpg`, corrected declared dimensions | 2026-07-05 |
| R-C02 | `apple-touch-icon` link tag referenced a nonexistent file on all 6 pages | Tag removed; `favicon.svg` fallback confirmed working | 2026-07-05 |
| R-C03 | `main` and `migration/project-starter-v3-3` had silently diverged (each added the same file independently) | Reconciled via real merge commit combining both branches' tracking-doc entries | 2026-07-06 |

## Risk Categories

- scope drift
- architecture
- data/schema
- imports/exports
- auth/security
- secrets/privacy
- deployment
- dependency/versioning
- testing/verification
- performance
- accessibility
- client content
- documentation drift
- AI workflow/process

## Review Cadence

Review this file:

- before implementation of risky work
- after bugs
- before deployment (merge to `main`)
- before client handoff
- at the end of each major slice
