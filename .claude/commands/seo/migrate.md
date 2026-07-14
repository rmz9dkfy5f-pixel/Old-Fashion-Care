# /seo migrate

## Purpose

Plan a site migration safely — redirect map, parity checks, and post-launch monitoring — so you
don't lose rankings and traffic in the move.

## Inputs

- Old site structure (URL list/sitemap)
- New site structure / URL scheme
- Migration type (platform, domain, URL structure, redesign)

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md
- .claude/skills/seo-context.md, seo-data.md

## Process

1. Map old URLs → new URLs; flag any without a destination.
2. Build a 301 redirect map; identify chains/loops to avoid.
3. Define parity checks (titles, metas, content, internal links, schema) old vs new.
4. Create a pre-launch checklist and a post-launch monitoring plan (indexation, rankings, 404s).

## Output

`seo/reports/migration-plan-<date>.md` — redirect map, parity checklist, launch + monitoring plan.

## Safety Rules

- Every old URL with traffic/links must have a mapped destination or explicit decision.
- Read-only planning; do not execute redirects.

## Confidence & Data Quality

Flag URLs with unknown traffic/link value as needing data before launch.

## Example

```text
/seo migrate --from old-sitemap.xml --to new-url-scheme.md
```
