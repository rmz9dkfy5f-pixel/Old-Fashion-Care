# /seo ask

## Purpose

Ask search and traffic questions in plain English and get grounded answers from your connected
data (GSC/GA4) or supplied exports — not made-up numbers.

## Inputs

- The question (plain English)
- Optional: date range, specific pages/queries to focus on

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md, seo/REVENUE.md
- .claude/skills/seo-context.md, seo-data.md

## Optional Data Sources

Connected GSC / GA4 → CSV in `seo/exports/` → manually pasted data. See `seo-data` for priority.

## Process

1. Parse the question; identify what data answers it.
2. Load the best available source; state which tier you used.
3. Answer directly, with the numbers and their source.
4. If data is missing, say what's needed rather than guessing.

## Output

Inline answer. Optionally save a note to `seo/reports/`.

## Safety Rules

- Never invent impressions, clicks, positions, or revenue.
- State the data source and date range for every number.

## Confidence & Data Quality

Label High/Medium/Low per `seo-data`. Separate facts from estimates.

## Example

```text
/seo ask which pages lost the most clicks in the last 90 days?
```
