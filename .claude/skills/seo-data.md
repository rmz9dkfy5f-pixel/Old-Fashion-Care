# Skill: seo-data

Defines where SEO data comes from and how commands degrade gracefully when data is missing. No
command should fabricate metrics; instead it uses the best available source and labels confidence.

## Data source priority

1. **Connected Google Search Console (GSC)** — queries, impressions, clicks, CTR, average position.
   Best source for ranking/traffic-opportunity work.
2. **GA4** — sessions, conversions, revenue, landing-page performance.
3. **DataForSEO or equivalent paid API** — volume, difficulty, SERP features (if the user has it).
4. **CSV fallback** — user drops exports into `seo/exports/` (GSC export, keyword tool export).
5. **Manual fallback** — user pastes data or provides it inline.

If none are available, produce a checklist + required-data list rather than inventing numbers.

## CTR-by-position estimation table (directional)

Used only to estimate opportunity when actual CTR isn't available. These are rough reference
values and vary by SERP features, query type, and device — label any estimate built on them.

| Position | Est. organic CTR |
|---:|---:|
| 1 | ~28% |
| 2 | ~15% |
| 3 | ~10% |
| 4 | ~7% |
| 5 | ~5% |
| 6 | ~4% |
| 7 | ~3% |
| 8 | ~2.5% |
| 9 | ~2% |
| 10 | ~1.5% |

## Confidence labels (attach to data-driven outputs)

- **High** — driven by connected GSC/GA4 or a clean CSV export.
- **Medium** — mix of real data + directional CTR/volume estimates.
- **Low** — mostly estimates/assumptions; validate before acting.

## Hard rules

- Never invent impressions, clicks, positions, volume, or difficulty.
- State the source tier used for every number.
- When estimating (e.g. click prize from the CTR table), show the formula and mark it an estimate.
- Prefer conservative estimates; separate facts from assumptions.
