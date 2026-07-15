# /seo interview

## Purpose

Ask for real stories, numbers, proof, and first-hand experience before drafting — so content has
genuine expertise signals instead of generic AI filler.

## Inputs

- The topic / target query
- Access to the subject-matter expert (the user or someone they'll relay to)

## Context To Load

- .claude/skills/seo-writing.md, seo-aeo.md
- seo/SITE.md

## Process

1. Generate a focused interview question set for the topic: first-hand experience, specific
   numbers, edge cases, mistakes, proof, opinions competitors won't have.
2. Collect answers from the user.
3. Structure the raw material into an outline ready for `/seo write`.

## Output

`seo/reports/interview-<topic>.md` — questions, captured answers, draft outline.

## Safety Rules

- Use only what the expert actually provides; never invent experience or quotes.

## Confidence & Data Quality

Content built on real interview material = strongest proof-we-are-real signals.

## Example

```text
/seo interview --topic "migrating from Shopify to Webflow"
```
