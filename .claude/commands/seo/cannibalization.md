# /seo cannibalization

## Purpose

Find pages competing with each other for the same query, so you can consolidate, differentiate, or
redirect instead of splitting ranking signals.

## Inputs

- GSC query/page data (or export) — needed to see which URLs rank for the same queries
- Optional: sitemap, keyword map

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md
- .claude/skills/seo-context.md, seo-data.md

## Optional Data Sources

Connected GSC, GSC CSV export in `seo/exports/`, manual query→URL list.

## Process

1. Load query→page data.
2. Group queries where 2+ URLs from the site appear/rank.
3. Classify each cluster: consolidate, differentiate intent, or redirect.
4. Recommend the canonical winner per cluster and the action for the others.

## Output

`seo/audits/cannibalization-<date>.md` — clusters, recommended action, expected effect.

## Safety Rules

- Base clusters on real query data; don't infer cannibalization without evidence.
- Flag redirect/consolidation risks (existing rankings/links).

## Confidence & Data Quality

Requires GSC-level data for High confidence; label Low if inferred from titles alone.

## Example

```text
/seo cannibalization using seo/exports/gsc-queries.csv
```
