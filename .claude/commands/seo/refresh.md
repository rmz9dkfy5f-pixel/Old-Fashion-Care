# /seo refresh

## Purpose

Find declining pages and recommend refreshes — reclaim lost rankings and traffic on content that
already earned authority instead of always building new.

## Inputs

- GSC/GA4 trend data (or export) to spot declines
- Optional: the pages themselves for content review

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md
- .claude/skills/seo-context.md, seo-data.md, seo-writing.md, seo-aeo.md

## Optional Data Sources

Connected GSC/GA4, CSV in `seo/exports/`.

## Process

1. Identify pages losing clicks/positions over the period.
2. Diagnose likely cause: outdated content, lost SERP feature, new competitors, decayed freshness,
   thinning relevance.
3. Recommend specific refresh actions per page (update data, add sections, improve extractability,
   re-optimize title).
4. Prioritize by lost-traffic value.

## Output

`seo/reports/refresh-<date>.md` — declining pages, diagnosis, refresh actions, priority.

## Safety Rules

- Base declines on real trend data; don't guess without it.

## Confidence & Data Quality

High with trend data; label otherwise.

## Example

```text
/seo refresh --days 180
```
