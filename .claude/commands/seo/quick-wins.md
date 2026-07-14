# /seo quick-wins

## Purpose

**Flagship.** Find traffic the site is already close to winning — striking-distance rankings and
low-CTR snippets — and rank the wins by estimated click prize, so you work the highest-value,
lowest-effort opportunities first.

It locates:

1. Keywords in **positions 8–20** with meaningful impressions (striking distance).
2. Snippets in **positions 1–7** with CTR under half the expected rate for that position.
3. Pages where a small title/heading/answer/table/schema/internal-link/proof change could
   plausibly increase clicks.

## Inputs

- Best available search data (see order below)
- Optional flags: `--days N` (default 90), `--min-impressions N`

## Context To Load

- seo/SITE.md, seo/KEYWORD_MAP.md, seo/REVENUE.md
- .claude/skills/seo-context.md, seo-data.md, seo-writing.md, seo-aeo.md

## Optional Data Sources (in priority order)

1. Connected Google Search Console data
2. CSV export dropped into `seo/exports/`
3. Manually pasted data
4. Demo fixture (`tests/quick-wins-fixture.csv`) only when explicitly requested

Default lookback: `90 days`. Supports `--days 28 --min-impressions 500` (and the slash form
`/seo quick-wins --days 28 --min-impressions 500`).

## Process (detection logic)

1. Load the best available data; state the source tier and date range.
2. **Striking distance:** average position 8–20 AND impressions above the configured floor.
3. **Low-CTR snippet:** average position 1–7 AND CTR below 50% of the estimated typical CTR for
   that position (use the CTR-by-position table in `seo-data`).
4. **Click prize:** estimate missed monthly clicks from impressions, current CTR, expected CTR, and
   current position. Rank by click prize, not vanity volume.
5. Diagnose each opportunity and give a one-line fix (retitle, move answer up, add table/schema,
   internal link, proof).
6. Cap the main recommendation list at **15 items**; include a data-quality note; separate facts
   from assumptions.
7. Write results to `seo/quick-wins.md`.

## Output

Write to `seo/quick-wins.md` with columns:

```markdown
| Priority | Page | Query | Position | Impressions | Current CTR | Expected CTR | Click Prize | Diagnosis | One-line Fix | Confidence |
```

Example output style:

```text
GSC connected. 28 days, 312 queries above the impressions floor.
Striking distance: 9 queries at positions 8–20.
Low-CTR snippets: 3 queries at positions 1–7 under half typical CTR.

#1 /pricing, "acme pricing", pos 11, +340 clicks/mo: title lacks the price.
#2 /blog/x-vs-y, "x vs y comparison", pos 9, +210 clicks/mo: move comparison table up.
#3 /features/export, pos 6, CTR 1.1% vs 6% typical: retitle for "csv export".

12 wins ranked. Total prize if all shipped: ~1,900 clicks/mo.
```

## Safety Rules

- Never invent analytics data. If no data source is available, produce the required-data list and
  a demo only if explicitly requested.
- Rank by click prize, not vanity volume. Cap recommendations at 15.
- Separate facts from assumptions; always include a data-quality note.

## Confidence & Data Quality

High with connected GSC / clean CSV; Medium when CTR is estimated from the table; Low when mostly
inferred. Label it in the output and in the Confidence column.

## Example

```text
/seo quick-wins --days 28 --min-impressions 500
```
