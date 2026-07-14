# /seo hygiene

## Purpose

Fix the boring but important technical SEO: broken links, missing/duplicate metas, alt text,
redirects, and sitemaps — the hygiene that quietly caps performance.

## Inputs

- Site URL / crawl export / list of pages
- Optional: current sitemap, redirect map

## Context To Load

- seo/SITE.md
- .claude/skills/seo-context.md, seo-data.md

## Optional Data Sources

Crawl CSV in `seo/exports/`, GSC coverage report.

## Process

1. Inventory hygiene issues: titles, metas, H1s, alt text, canonicals, broken links, redirect
   chains, sitemap gaps, indexability signals.
2. Group by type and severity.
3. Produce a fix list with exact current→proposed values where possible.

## Output

`seo/audits/hygiene-<date>.md` — issue table with current value, proposed fix, priority.

## Safety Rules

- Read-only; propose changes, don't apply them to the live site.
- Flag redirect changes that could break existing links.

## Confidence & Data Quality

Higher with a real crawl export; label gaps.

## Example

```text
/seo hygiene using seo/exports/crawl.csv
```
