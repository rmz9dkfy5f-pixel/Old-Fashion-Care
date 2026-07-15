# /seo check

## Purpose

Pre-publish gate for a draft: catch hallucinated stats, AI-slop phrasing, and thin sections before
the page goes live.

## Inputs

- The draft (paste, file, or URL)
- Optional: target query, sources for any stats

## Context To Load

- .claude/skills/seo-writing.md, seo-aeo.md

## Optional Data Sources

Any cited sources the user supplies for fact-checking claims.

## Process

1. Run the pre-publish quality gate from `seo-writing`.
2. Flag every statistic/quote lacking a real source → require source or removal.
3. Flag AI-slop phrasing, filler, and thin sections.
4. Check extractability: direct answers, question headings, scannability.
5. Return a pass/fail checklist with specific line-level fixes.

## Output

Inline checklist + edited suggestions. Optionally save to `seo/reports/`.

## Safety Rules

- Do not "verify" a stat you can't actually source — flag it as unverified.
- Never add fabricated citations to make a claim pass.

## Confidence & Data Quality

State which claims were verifiable vs unverifiable with the sources provided.

## Example

```text
/seo check draft.md --target "best running shoes for flat feet"
```
