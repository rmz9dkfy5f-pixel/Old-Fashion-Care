# Decision Log

Use this file for important decisions.

Do not use it for tiny task notes.

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
