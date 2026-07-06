# Change Control

This file defines what AI agents may change without approval, what requires approval, and what
must never be changed automatically.

## Default Rule

The AI may inspect freely. The AI may only edit within the approved scope. When uncertain, stop
and ask.

## Change Classes

Use these classes in summaries and change records.

### Class A — Documentation Only

Low risk. Still requires review for accuracy.

### Class B — Localized Code Change

Medium risk. Requires validation (e.g. all 6 pages still load, no layout regression).

### Class C — Architecture / Dependency Change

High risk. Requires explicit plan, rollback path, and user approval before broad edits.

### Class D — Destructive / Irreversible Change

Requires explicit user approval. Examples: deleting files, rewriting history, credential changes,
production config changes, broad refactors.

## Safe-to-Edit Areas

Usually safe when the change matches the approved task:

- `ai/`
- `docs/`
- `plans/`
- documentation templates
- project status files (`docs/project/*`)
- feature files directly named in the approved slice

## Approval Required Before Editing

Ask before changing:

- `netlify.toml` — deployment config, security headers, CSP
- `sitemap.xml`, `robots.txt` — SEO-critical crawl/indexing directives
- `css/style.css` — single monolithic stylesheet; breakage is site-wide
- routing/navigation structure shared across pages
- broad formatting across many files
- file/folder names referenced by any page's `href`/`src`

## Never Do Without Explicit Approval

- delete source code (HTML/CSS/JS)
- delete assets (`images/`)
- delete user/client content
- delete backups or snapshots
- delete existing documentation
- delete config files (`netlify.toml`, `.gitignore`)
- rewrite commit history
- run destructive shell commands
- reset the working tree
- expose secrets
- change production deployment targets

## Required Change Record

For every substantial change, record in `docs/project/COMMIT_NOTES.md` and/or
`docs/project/DECISION_LOG.md`:

- Date
- Agent/tool used
- Objective
- Files changed
- Validation performed
- Risks
- Rollback method

## Risk Levels

| Risk | Meaning | Action |
|---|---|---|
| Low | Documentation or isolated change | Continue if in scope |
| Medium | Could affect layout, SEO, or user-visible behavior | Verify before commit |
| High | Deployment config, security headers, major restructure | Ask before editing |
| Critical | Data loss, secrets, production exposure, destructive commands | Stop immediately |

## Approval Format

When approval is needed, ask using this format:

```text
Approval needed before continuing.

Reason:
Files affected:
Risk level:
Recommended action:
Rollback path:
```

## No-Overwrite / Conflict Handling Policy

Existing files are user assets. When a template (starter kit or skill package) conflicts with an
existing file:

1. Do not overwrite it.
2. Copy the candidate to `.v34_migration_review/` (or `.starter-kit/review/conflicts/` for legacy
   v3.3-era conflicts).
3. Record the conflict in the relevant install log or `docs/project/DECISION_LOG.md`.
4. Recommend a merge only after review — do not force-merge.

## Stop Conditions

Stop immediately if:

- repo state is unclear
- git working tree has unexpected changes
- the requested action conflicts with the active plan
- source-of-truth files disagree
- a destructive action appears necessary
- verification fails in a way that may be caused by the current change
- secrets or private credentials are discovered
