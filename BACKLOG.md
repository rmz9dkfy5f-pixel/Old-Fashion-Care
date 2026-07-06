# Backlog

Use this for work queue control.

Do not let `BACKLOG.md` become the active plan. The active plan belongs in `PLAN.md`.

---

## Build Now

Required for the current phase.

- [ ] Merge migration/project-starter-v3-3 branch into main (SEO audit now complete)

---

## Build Next

Likely needed after the current slice.

- [ ] Design review — visual polish and layout improvements across pages
- [ ] Mobile layout review — verify all pages look great on small screens
- [ ] Image optimization — compress large photos (care-03 through care-11 are 1–2.5MB each)
- [ ] Reconcile `docs/project/*.md` (from V3.4 install) with existing root-level tracking docs
- [ ] Review the 3 quarantined `.v34_migration_review/` candidate files and decide whether to
      merge any content into `AGENTS.md` / `CLAUDE.md` / `ai/agents/AGENT_REVIEW_GATES.md`
- [ ] Create a dedicated 180×180 `apple-touch-icon.png` (currently falls back to `favicon.svg`)

---

## Build Later

Useful but not needed yet.

- [ ] Testimonials section — written or photo quotes from clients or families
- [ ] Structured data (Schema.org LocalBusiness) — improves Google local search appearance
- [ ] Internal linking audit — ensure pages link to each other effectively for SEO
- [ ] Review whether care-07 through care-11 should replace any current grid photos

---

## Maybe

Interesting but not proven to be needed yet.

- [ ] Contact form — currently the contact page uses direct contact info; a form could increase enquiries
- [ ] Tips or resources page — content for caregivers or families (could help SEO and trust)
- [ ] FAQ expansion — build on the existing questions.html page

---

## Do Not Build

Rejected or out of scope.

- [ ] Online booking / scheduling system
- [ ] User accounts or client portal
- [ ] Payment processing
- [ ] CMS or backend
- [ ] Blog

---

## Completed

- [x] Add photo / social proof section to site — homepage photo grid added (care-01 through care-06)
- [x] Regina Booker founder photo on about.html — rectangular portrait, replacing initials placeholder
- [x] Project Starter Kit v3.3 migration — control docs, agents, ai/, docs/, plans/ installed
- [x] Fill in README.md, PROJECT_BRIEF.md, STATUS.md, BACKLOG.md with real project content
- [x] Audit and improve on-page SEO metadata across all 6 HTML pages — metadata already correct;
      fixed broken og-image/twitter-image and apple-touch-icon references (2026-07-05)
- [x] Deploy Production Readiness Skills (V3.4 baseline + 18-skill suite) into `.claude/skills/` (2026-07-05)

---

## Scope Decision Rules

Every new idea must be placed into one category:

```text
Build now
Build next
Build later
Maybe
Do not build
```

If it does not support the current validation question, it should usually not be in `Build Now`.
