# /seo audit

## Purpose

Audit the whole site and return one readable, prioritized report — technical, on-page, content, and
extractability issues ranked by impact, not a raw crawler dump.

## Inputs

- Site URL or a set of pages/sitemap
- Optional: GSC/GA4 data, crawl export, known problem areas

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md, seo/REVENUE.md
- .claude/skills/seo-context.md, seo-data.md, seo-aeo.md, seo-writing.md

## Optional Data Sources

Connected GSC/GA4, crawl CSV in `seo/exports/`, manual notes.

## Process

1. Load site context; confirm scope (whole site vs section).
2. Dispatch the `seo-auditor` agent for page-level findings where pages are provided.
3. Group findings: technical, indexation, on-page, content quality, extractability, internal links.
4. Rank by impact × ease; tie to revenue via seo/REVENUE.md where possible.
5. Write the report to `seo/audits/`.

## Output

`seo/audits/site-audit-<date>.md` — prioritized findings (Evidence / Impact / Fix / Priority).

## Safety Rules

- Read-only analysis; never edit site files.
- Cite evidence per finding; no fabricated metrics.

## Confidence & Data Quality

Label confidence; note what data (GSC/crawl) would raise it.

## Example

```text
/seo audit https://example.com
```
