# Slice Reviews

Use this file after each completed vertical slice.

---

## 2026-06-29 — Hero copy↔people micro-alignment

**Status:** Complete — commit a2e7c9a

**Slice summary:**
Fine-grained visual tuning of the homepage hero. Approved via plan-mode gate. Four adjustments:
1. Sub-paragraph → 4 lines (was 5): font-size reduced, max-width widened.
2. Copy column nudged up: orange "possible." period bottom now aligns with older woman's earlobe bottom (~8px).
3. Gradient pulled left: more photo revealed, no seam, text readable.
4. Wider sub: lower lines subtly overlap caregiver's fingertips; hand/shoulder/faces preserved.

**Decision captured:** Gradient direction ambiguity resolved — user chose "pull dark toward left edge / reveal more photo."

**Files changed:**
- `css/style.css` — hero rules only (`.hero > .container`, `.hero__sub`, `.hero::after`)
- `COMMIT_NOTES.md` — iteration record appended
- `PROGRESS_NOTE.md` — current state updated

**Validation:**
- Headless Chromium at 1554×900 (desktop) and 390×820 (mobile)
- sips zoom crops: period↔earlobe ~8px, hand overlap subtle, no seam, mobile clean

**Open items:**
- User visual review of live hero pending
- Next major slice: SEO audit across all 6 HTML pages

---

## 2026-06-15 — Photo Social Proof + Starter Kit v3.3 Migration

**Status:** Complete

**Slice summary:**
Two slices delivered together:
1. Starter Kit v3.3 migration — added project control structure without touching existing site files
2. Photo social proof — caregiver photo grid on homepage + Regina founder photo on about page

**Files changed:**
- `about.html` — founder photo block replaced (initials → real img)
- `index.html` — photo grid section inserted between Testimonials and How It Works
- `css/style.css` — .photos-grid responsive layout, img.founder-photo rules added
- `images/` — new folder with 12 photos (clean URL-safe names)
- `.claude/agents/` — 7 sub-agents installed
- `ai/`, `docs/`, `plans/` — new directories with templates
- All root project control .md files — new additions (23 files)
- `.starter-kit/` — migration workspace

**Validation:**
- Static site — no build/lint/test scripts
- Manual browser check: all pages load, photos display, responsive layout confirmed
- No existing site files were modified (CHANGELOG conflict quarantined)

**Success criteria met:**
- [x] Photo grid appears on homepage with 6 caregiver photos
- [x] Regina's photo visible on about page (rectangular, not circular)
- [x] No existing HTML/CSS/JS files broken
- [x] Rollback path documented (git checkout main)

**Notes:**
- Photos care-07 through care-11 available in images/ but not yet used — reserve for future grid swap
- care giver pics/ (original folder) retained; images/ has clean copies
- Migration branch not yet merged to main — pending SEO audit
