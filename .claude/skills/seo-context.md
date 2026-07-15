# Skill: seo-context

Defines the kit's shared memory files and how commands use them. Every `/seo` command should read
or create these before doing work.

## Shared memory files

```text
seo/SITE.md          # site profile: business, stack, analytics status, competitors
seo/KEYWORD_MAP.md   # target keywords → intent → URL → priority → status
seo/REVENUE.md       # conversion goals, lead/revenue value, high/low-value pages
```

## Rules

1. **Create missing files on first run.** If `seo/SITE.md`, `seo/KEYWORD_MAP.md`, or
   `seo/REVENUE.md` don't exist, scaffold them from the templates in `seo/templates/` (or inline)
   and tell the user what to fill in.
2. **Never block because context files are incomplete.** Proceed with what's available; clearly
   mark assumptions and missing data.
3. **Clearly mark assumptions and missing data** in every output.
4. **Write command outputs into the `seo/` folder** (audits → `seo/audits/`, reports →
   `seo/reports/`, exports read from `seo/exports/`).

## Required site context (ask if missing — never invent)

- Site name, domain
- Business model and primary offers
- Audience
- CMS / framework
- Analytics status (GA4 connected?)
- Search Console status (connected?)
- Known competitors
- Known constraints

## Behavior

- Load `seo/SITE.md`, `seo/KEYWORD_MAP.md`, `seo/REVENUE.md` silently, summarize what's present and
  what's blank, then proceed.
- Batch questions for missing required inputs before producing final deliverables.
- Prefer ranked, useful recommendations over raw crawler dumps.
- State what data was available and what was missing in every output.
