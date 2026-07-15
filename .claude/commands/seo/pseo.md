# /seo pseo

## Purpose

Build programmatic SEO pages — but only when the page pattern genuinely deserves to exist. Guards
against thin, doorway-style mass pages that get penalized.

## Inputs

- The proposed page pattern (template + variable dimension, e.g. "[service] in [city]")
- Data source for the variables
- Optional: sample real data, competitor pSEO examples

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md
- .claude/skills/seo-context.md, seo-aeo.md, seo-writing.md

## Process

1. **Deserve-to-exist test:** does each generated page have unique, useful data and real search
   demand? If not, stop and say so.
2. Design the template with genuinely varying, valuable content per page (not spun boilerplate).
3. Specify the data schema, quality thresholds, and no-index rules for thin variants.
4. Provide a build + QA plan.

## Output

`seo/reports/pseo-plan-<date>.md` — deserve-to-exist verdict, template, data schema, QA/no-index rules.

## Safety Rules

- Refuse to design doorway/thin pages; require real per-page value and demand.
- Recommend no-indexing variants that fail the quality threshold.

## Confidence & Data Quality

State whether real search demand was verified or assumed.

## Example

```text
/seo pseo --pattern "[material] cutting board care guide"
```
