# Backlog

Use this for work queue control.

Do not let `BACKLOG.md` become the active plan. The active plan belongs in `PLAN.md`.

---

## Build Now

Required for the current phase.

- [ ] Nothing blocking — V3.4 migration is complete; pick from Build Next.

---

## Build Next

Likely needed after the current slice.

- [ ] Design review — visual polish and layout improvements across pages
- [ ] Mobile layout review — verify all pages look great on small screens
- [ ] Image optimization — compress large photos (care-03 through care-11 are 1–2.5MB each)
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
- [x] Fill in README.md, docs/project/PROJECT_BRIEF.md, docs/project/STATUS.md, BACKLOG.md with
      real project content
- [x] Audit and improve on-page SEO metadata across all 6 HTML pages — metadata already correct;
      fixed broken og-image/twitter-image and apple-touch-icon references (2026-07-05)
- [x] Deploy Production Readiness Skills (V3.4 baseline + 18-skill suite) into `.claude/skills/` (2026-07-05)
- [x] Merge migration/project-starter-v3-3 branch into main (2026-07-06, tag v2.0.0)
- [x] Complete V3.4 migration — reconciled root docs with docs/governance/docs/project, resolved
      all quarantined candidates (2026-07-07)
- [x] Swap in the client's hi-res original photo for `images/hero-ai.jpg` (2026-07-12)

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
