---
name: build-test-verify-gate
description: Run a production-readiness verification gate covering install, lint, typecheck, tests, build, preview/start, and smoke checks. Use after fixes or before commit/deploy.
effort: high
---

# Build, Test, Verify Gate

## Purpose
Verify that changes are real, reproducible, and production-safe before commit, push, deploy, or handoff.

## Non-negotiable rules
- Do not claim success without command evidence.
- Do not skip a failing command silently.
- Do not treat a dev server starting as proof that production build works.
- Do not commit/push/deploy unless explicitly instructed.
- If a command is missing, report it as a project gap.

## Procedure

### 1. Discover commands
Inspect project files before running commands:
- `package.json`, lockfiles, `Makefile`, `README.md`, `CLAUDE.md`, deployment docs.
- Framework config: Vite, Next, Astro, Express, Laravel, Django, Rails, etc.
- Test config: Playwright, Cypress, Vitest, Jest, Pytest, etc.

### 2. Determine package manager
Prefer the lockfile that exists:
- `pnpm-lock.yaml` → `pnpm`
- `package-lock.json` → `npm`
- `yarn.lock` → `yarn`
- `bun.lockb` / `bun.lock` → `bun`

If multiple lockfiles exist, stop and flag the mismatch.

### 3. Run the verification ladder
Run only commands that exist or are clearly documented:

1. Install/dependency check.
2. Lint.
3. Format check if available.
4. Typecheck if available.
5. Unit tests if available.
6. Integration/E2E tests if available.
7. Production build.
8. Preview/start server.
9. Smoke-test key routes.
10. Check build output and obvious console/server errors.

### 4. Smoke-test minimum routes
At minimum, verify:
- Home page.
- Primary conversion/contact/booking page.
- Admin login route if present.
- API health endpoint if present.
- 404/error route behavior.

### 5. Interpret failures honestly
Classify each failure:
- **Environment failure:** local dependency/tool missing.
- **Project failure:** command/config/code is broken.
- **Test failure:** app behavior fails expected checks.
- **Unknown:** not enough evidence.

## Output format

```markdown
# Build/Test/Verify Gate

## Verdict
[Pass / Fail / Partial / Blocked]

## Commands Run
| Step | Command | Result | Evidence |
|---|---|---|---|

## Smoke Checks
| Route/Flow | Result | Evidence |
|---|---|---|

## Failures
| Severity | Failure | Likely Cause | Required Fix |
|---|---|---|---|

## Missing Project Scripts
- [script/test/build/check that should exist]

## Safe Next Action
[One concrete next step]
```
