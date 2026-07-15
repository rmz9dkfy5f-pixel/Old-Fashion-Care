# /seo competitor

## Purpose

Compare competitor rankings, pages, and content gaps so you know where to differentiate and what
to build next.

## Inputs

- Competitor domains/URLs
- Target queries or topic area
- Optional: your own ranking data

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md
- .claude/skills/seo-context.md, seo-data.md

## Optional Data Sources

SERP data, keyword tool exports, live page fetches.

## Process

1. Confirm competitors and the topic/query set.
2. Dispatch the `serp-researcher` agent to compare SERP presence and competitor pages.
3. Identify content gaps and angle opportunities.
4. Recommend which pages to build/improve, prioritized.

## Output

`seo/reports/competitor-<date>.md` — SERP snapshot, gap analysis, prioritized opportunities.

## Safety Rules

- Cite what's actually observed; don't fabricate competitor rankings.
- Distinguish observed facts from inference.

## Confidence & Data Quality

Higher with SERP/keyword data; label estimates.

## Example

```text
/seo competitor competitorA.com competitorB.com --topic "standing desks"
```
