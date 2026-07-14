# /seo write

## Purpose

Write a rankable, citable page — brief, draft, quality gate, and publish-ready output — grounded in
real proof and the customer's target query.

## Inputs

- Target query / topic
- Optional: interview material (`/seo interview` output), SERP research, brand voice, sources

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md
- .claude/skills/seo-writing.md, seo-aeo.md, seo-context.md, seo-data.md

## Process

1. Build a brief: target query, intent, audience, angle, required proof, competitor gaps (dispatch
   `serp-researcher` if useful).
2. Draft using `seo-writing` (extractability structure, anti-slop, real proof) and `seo-aeo`.
3. Run the pre-publish quality gate (equivalent to `/seo check`); fix flagged issues.
4. Produce publish-ready copy + title/meta + suggested schema + internal links.
5. Update `seo/KEYWORD_MAP.md` status.

## Output

Publish-ready page inline; optionally save to `seo/reports/`. Update keyword map status.

## Safety Rules

- No hallucinated stats/quotes; real sources or remove.
- Use supplied experience/interview material; don't invent expertise.

## Confidence & Data Quality

Flag any claim needing sourcing before publish.

## Example

```text
/seo write --target "how to descale an espresso machine" --from seo/reports/interview-descale.md
```
