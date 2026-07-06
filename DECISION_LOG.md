# Decision Log

Use this file for important decisions.

Do not use it for tiny task notes.

---

## 2026-07-05 — Broken og-image Repointed to hero-ai.jpg, Not a New Dedicated Asset

### Decision
Fix the site-wide broken `og:image`/`twitter:image` reference (`images/og-default.png`, which
did not exist) by repointing it to the existing `images/hero-ai.jpg`, correcting the declared
dimensions to the file's actual 1100×934, rather than waiting for a purpose-built 1200×630 social
card image.

### Reason
Every page currently shows a broken social-share preview image; a working (if imperfectly
proportioned) image now is better than a correct one later. `hero-ai.jpg` is the only existing
brand-appropriate image close to a usable social-card shape.

### Alternatives Considered
- Wait for the user to supply a proper 1200×630 asset (rejected for now — leaves the bug live)
- Just remove the og:image tags entirely (rejected — worse than a passable image)

### Consequences
Social share previews will show `hero-ai.jpg` cropped/scaled by each platform rather than a
purpose-built card. A dedicated `og-default.png` remains a good future improvement (tracked in
`BACKLOG.md`).

---

## 2026-07-05 — Removed Broken apple-touch-icon Tag Instead of Creating a Placeholder Asset

### Decision
Remove the `<link rel="apple-touch-icon">` tag (referenced a nonexistent `images/apple-touch-icon.png`)
from all 6 pages rather than generate a placeholder icon file.

### Reason
No apple-touch-icon asset exists yet; `favicon.svg` is a reasonable interim fallback and modern
iOS handles SVG favicons reasonably well. Better to remove a broken reference than commit a
low-effort placeholder icon.

### Alternatives Considered
- Generate a quick 180×180 PNG from an existing image (rejected — would need real design input,
  not a quick crop)

### Consequences
iOS "Add to Home Screen" icon quality depends on the `favicon.svg` fallback until a dedicated
touch icon is created (tracked in `BACKLOG.md`).

---

## 2026-07-05 — Install Both V3.4 Baseline and 18-Skill Suite Despite Existing v3.3 Setup

### Decision
Install the full Project Starter Kit V3.4 baseline plus the 18-skill production-readiness suite
into this repo, even though a v3.3 Starter Kit migration is already partially in place on this
branch, rather than installing only the 18-skill suite.

### Reason
User chose full coverage over minimal footprint. The V3.4 installer's migrate-mode safety rules
(no overwrite, quarantine conflicts) made this low-risk to attempt.

### Alternatives Considered
- 18-skill suite only, skip V3.4 baseline (would have avoided the `docs/project/*` duplication
  with existing root tracking docs, but user preferred full coverage)

### Consequences
- 3 real conflicts (`AGENTS.md`, `CLAUDE.md`, `ai/agents/AGENT_REVIEW_GATES.md`) quarantined into
  `.v34_migration_review/` for manual review rather than applied
- `docs/project/*.md` now duplicates root-level tracking docs already in active use — needs
  reconciliation (tracked in `BACKLOG.md`)

---

## 2026-06-15 — Founder Photo: Rectangular Portrait, Not Circular Crop

### Decision
Display Regina's founder photo as a full rectangular portrait using `width: 100%; height: auto` instead of a circular crop.

### Reason
The circular crop (50% border-radius with fixed 260×260px) cut off too much of the photo and looked unnatural and unprofessional. The rectangular format shows the full image at its natural proportions.

### Alternatives Considered
- Circular crop (rejected — too much cropping, unnatural appearance)
- Fixed aspect-ratio portrait crop with object-fit: cover (not needed — natural proportions preferred)

### Consequences
Photo height is determined by the image's natural proportions. If Regina's photo is replaced with a very tall or very wide image in the future, layout may need adjustment.

---

## 2026-06-15 — Photo Placement: Inline on Homepage, Not Dedicated Gallery Page

### Decision
Add caregiver photos as an inline section on the homepage (between Testimonials and How It Works), not as a separate gallery page.

### Reason
Social proof is most effective on the highest-traffic page without requiring users to navigate away. A dedicated gallery page would reduce exposure.

### Alternatives Considered
- Dedicated gallery/photos page (rejected — requires extra navigation click, reduces social proof impact)
- Both homepage + about page (deferred — possible future enhancement)

### Consequences
The homepage grows by one section. Future gallery expansion would either extend the homepage grid or create a new page linked from the nav.

---

## 2026-06-15 — Migration Branch Strategy: Separate Branch, Not Direct to Main

### Decision
Run Starter Kit v3.3 migration on a dedicated branch (`migration/project-starter-v3-3`) rather than directly on `main`.

### Reason
Migration adds ~40+ new files. Working on a separate branch protects the stable live site on `main` from accidental breakage and allows review before merge.

### Alternatives Considered
- Commit directly to main (rejected — too risky for a 40+ file addition)

### Consequences
Branch must be reviewed and merged to main after SEO audit is complete. Netlify deploys from main, so migration work is not live until merged.
