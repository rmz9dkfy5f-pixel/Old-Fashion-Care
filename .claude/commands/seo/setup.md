# /seo setup

## Purpose

Detect the stack, connect data, and create the site profile and keyword map — the first command to
run so every other `/seo` command has context.

## Inputs

- Site URL
- What data access exists (GSC, GA4, keyword tool)

## Context To Load

- .claude/skills/seo-context.md, seo-data.md

## Process

1. Detect/confirm CMS, framework, hosting from the site.
2. Confirm analytics + Search Console connection status and how data will be provided.
3. Create/populate `seo/SITE.md` (site profile), `seo/KEYWORD_MAP.md`, `seo/REVENUE.md` from
   answers — scaffold any missing file.
4. List what the user still needs to provide.

## Output

Populated `seo/SITE.md`, `seo/KEYWORD_MAP.md`, `seo/REVENUE.md` + a setup summary.

## Safety Rules

- Create files if missing; never overwrite existing content without backup.
- Don't invent site facts — ask.

## Confidence & Data Quality

Note which data sources are connected vs still needed.

## Example

```text
/seo setup https://example.com
```
