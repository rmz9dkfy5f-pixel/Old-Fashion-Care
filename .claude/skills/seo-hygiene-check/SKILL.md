---
name: seo-hygiene-check
description: Audit local-business SEO, metadata, social previews, crawlability, sitemap, robots, structured data, headings, and production search readiness.
effort: high
---

# SEO Hygiene Check

## Purpose
Prepare a client website for basic production SEO and social sharing without over-engineering.

## Non-negotiable rules
- Do not keyword-stuff.
- Do not invent business details.
- Do not add fake reviews, fake locations, or unsupported claims.
- Do not mark pages indexable until the production domain and content are correct.
- Treat local business name/address/phone inconsistency as a real issue.

## Inspect
- Page titles and meta descriptions.
- Canonical tags.
- Open Graph and Twitter/social metadata.
- Favicons and app icons.
- Sitemap and robots configuration.
- Heading hierarchy.
- Internal links.
- Image alt text where SEO-relevant.
- Local business structured data if applicable.
- Production domain references.
- Accidental `noindex`, staging URLs, localhost URLs, or placeholder content.

## Local business checklist
When the site represents a local business, verify:
- Business name is consistent.
- Phone number is consistent and clickable on mobile.
- Address/service area is consistent or intentionally absent.
- Hours are correct or not shown if unknown.
- Primary services are clear.
- CTA path is obvious.
- Google Business Profile link or embed is intentional if present.
- LocalBusiness schema uses confirmed facts only.

## Page-level checklist
For each important page:
- Unique title.
- Useful meta description.
- One clear H1.
- Logical H2/H3 structure.
- Internal links to next action.
- No placeholder text.
- No broken images.
- Canonical URL matches production plan.

## Crawlability checklist
- `robots.txt` does not block production accidentally.
- `sitemap.xml` exists or is planned.
- Staging pages are not indexed.
- Production pages are not accidentally hidden.
- Redirects are intentional.

## Output format

```markdown
# SEO Hygiene Report

## Verdict
[Pass / Fail / Conditional]

## Site-Wide Findings
| Area | Status | Notes |
|---|---|---|

## Page-Level Findings
| Page | Title | Meta | H1 | Canonical | Status |
|---|---|---|---|---|---|

## Local SEO Findings
| Item | Status | Evidence | Fix |
|---|---|---|---|

## Required Fixes Before Launch
| Severity | Issue | Location | Fix |
|---|---|---|---|

## Recommended Metadata Updates
| Page | Proposed Title | Proposed Meta Description |
|---|---|---|
```
