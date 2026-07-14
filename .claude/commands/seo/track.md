# /seo track

## Purpose

Track shipped pages week over week — rank, clicks, citations, and a verdict — so you know whether
each change actually worked.

## Inputs

- Which pages/changes to track (or read from seo/KEYWORD_MAP.md status)
- GSC/GA4 data across the tracking window

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md
- .claude/skills/seo-context.md, seo-data.md, seo-aeo.md

## Process

1. Identify the tracked pages and their baseline.
2. Pull current rank/clicks (and AI-citation checks per `seo-aeo` where relevant).
3. Compare to baseline; assign a verdict per page (working / flat / declining / too-early).
4. Recommend keep/iterate/revert.

## Output

`seo/reports/tracking-<date>.md` — per-page rank/clicks/citation/verdict table.

## Safety Rules

- Verdicts require real data; mark "too early" when the window is short.
- Never fabricate movement.

## Confidence & Data Quality

Label each verdict's data confidence and window length.

## Example

```text
/seo track --since 2026-06-01
```
