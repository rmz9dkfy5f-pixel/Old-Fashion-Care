# /seo report

## Purpose

Generate a stakeholder report: what shipped, what moved, the value delivered, and next actions —
readable by non-SEO decision-makers.

## Inputs

- Period to report on
- What was shipped this period (or read from seo/audits, seo/reports history)
- Optional: GSC/GA4 data for movement

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md, seo/REVENUE.md
- .claude/skills/seo-context.md, seo-data.md

## Process

1. Summarize work shipped this period.
2. Show movement (rankings, clicks, conversions) from real data; label estimates.
3. Tie movement to value via seo/REVENUE.md where possible.
4. List prioritized next actions.

## Output

`seo/reports/stakeholder-<date>.md` — shipped / moved / value / next actions.

## Safety Rules

- Only claim movement backed by data; never inflate results.

## Confidence & Data Quality

Label each metric's source and confidence.

## Example

```text
/seo report --period "last 30 days"
```
