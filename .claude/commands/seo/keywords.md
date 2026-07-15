# /seo keywords

## Purpose

Find keywords worth targeting by volume, difficulty, and intent — and map them to existing or new
URLs in your keyword map.

## Inputs

- Seed topics or target audience
- Optional: keyword tool export, GSC data, competitor domains

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md, seo/REVENUE.md
- .claude/skills/seo-context.md, seo-data.md

## Optional Data Sources

DataForSEO/keyword tool export, GSC queries, SERP data. Estimate only when necessary and label it.

## Process

1. Expand seeds into candidate keywords grouped by intent.
2. Attach volume/difficulty from data where available; mark estimates otherwise.
3. Prioritize by intent × value (via seo/REVENUE.md) × attainability.
4. Map each to an existing or new target URL; update `seo/KEYWORD_MAP.md`.

## Output

Updated `seo/KEYWORD_MAP.md` + a prioritized shortlist inline.

## Safety Rules

- Never fabricate search volume or difficulty; label estimates clearly.

## Confidence & Data Quality

High with tool data; Medium/Low when estimated.

## Example

```text
/seo keywords --seeds "cold plunge, ice bath recovery"
```
