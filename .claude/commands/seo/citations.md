# /seo citations

## Purpose

Check whether AI assistants and AI search surfaces cite your site, and what to change to improve
extractability — measured honestly, not with invented "AI visibility scores."

## Inputs

- Target questions/prompts your audience would ask
- Site/pages that should be cited

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md
- .claude/skills/seo-aeo.md, seo-writing.md

## Optional Data Sources

Manual queries in AI surfaces; any AI-referral analytics the user has.

## Process

1. Define the target prompts (branded + unbranded).
2. Guide/record manual checks in the AI surfaces: is the site cited, and how?
3. Compare cited competitors' pages for extractability advantages.
4. Recommend specific extractability fixes (direct answers, schema, proof) per `seo-aeo`.
5. Set up a repeatable measurement log.

## Output

`seo/reports/ai-citations-<date>.md` — prompt list, citation observations, fixes, measurement plan.

## Safety Rules

- Measurement is manual/periodic unless a real data source exists — say so.
- Never fabricate citation counts or visibility scores.

## Confidence & Data Quality

Low by nature (opaque attribution); label it and focus on durable fundamentals.

## Example

```text
/seo citations --prompts "how to clean suede shoes"
```
