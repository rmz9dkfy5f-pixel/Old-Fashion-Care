# /seo extractable

## Purpose

Rewrite a page so AI assistants can quote it directly — direct answers, question headings, named
proof, schema-ready structure.

## Inputs

- The page (URL, file, or pasted copy)
- Optional: target questions, brand voice

## Context To Load

- .claude/skills/seo-aeo.md, seo-writing.md
- seo/SITE.md

## Process

1. Identify the questions the page should answer.
2. Restructure so each section opens with a direct, quotable answer under a question heading.
3. Add named proof, statistics (real sources only), and schema recommendations.
4. Return the rewritten page + a list of schema/structured-data to add.

## Output

Rewritten page copy inline; optionally save to `seo/reports/`.

## Safety Rules

- No fabricated stats/quotes; real sources or remove.
- Preserve factual accuracy of the original.

## Confidence & Data Quality

Note which claims are sourced vs need sourcing.

## Example

```text
/seo extractable https://example.com/guide
```
