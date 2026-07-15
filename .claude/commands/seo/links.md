# /seo links

## Purpose

Improve internal linking: fix orphan pages, strengthen under-linked money pages, and add relevant
contextual links — one of the highest-leverage, fully-in-your-control SEO wins.

## Inputs

- Site structure / sitemap / page list
- Optional: GSC/GA4 to identify money pages, crawl export for link graph

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md, seo/REVENUE.md
- .claude/skills/seo-context.md, seo-data.md

## Process

1. Build/approximate the internal link graph.
2. Find orphan pages (no internal inlinks) and under-linked high-value pages.
3. Recommend specific source→target links with anchor suggestions.
4. Prioritize by target-page value.

## Output

`seo/audits/internal-links-<date>.md` — orphans, under-linked money pages, recommended links.

## Safety Rules

- Recommend, don't auto-edit the site.
- Anchors must be relevant and natural, not stuffed.

## Confidence & Data Quality

Higher with a crawl export; note assumptions if approximated.

## Example

```text
/seo links using seo/exports/crawl.csv
```
