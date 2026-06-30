# Progress Notes

Historical project progress notes.

Current active progress belongs in `PROGRESS_NOTE.md`.

---

## 2026-06-30 — Hero: smoother gradient, headline fix, sub barely-covers-hand + handoff

**Work completed:**
- Three hero CSS iterations since last handoff: ea8b067 (B-period gradient + wider sub), b195aba (smoother gradient + headline fix + barely-covers-hand), c04e819 (tracking docs)
- `css/style.css` changes (b195aba): `.hero__headline max-width 565→620px` (fixed orange line regression); `.hero::after` 10-stop smooth gradient anchored at 'h' in "where" (22%); `.hero__sub` 0.97→0.94rem, 648→580px (sub barely reaches hand, not shoulder)
- Tracking docs updated: CHANGELOG.md v1.5.0 entry, SLICE_REVIEWS.md 2026-06-30 entry, PROGRESS_NOTE.md, STATUS.md
- Tag `v1.5.0__hero-smoother-gradient-headline-fix__commit-b195aba` created + pushed to GitHub
- Snapshot saved: `/Users/ant/WorkSync/Projects/RepoBackups/Old-Fashion-Care/v1.5.0__hero-smoother-gradient-headline-fix__commit-b195aba`

**Files changed:**
- `css/style.css` (b195aba, ea8b067) — hero rules only
- `COMMIT_NOTES.md`, `PROGRESS_NOTE.md`, `PROGRESS_NOTES.md`, `STATUS.md`, `CHANGELOG.md`, `SLICE_REVIEWS.md`

**Validation:**
- Headless Chromium at 1554×900 (desktop) and 390×820 (mobile) for both ea8b067 and b195aba
- sips zoom crops confirmed: headline 1 line, 4-line sub, smooth gradient, hand barely covered, shoulder visible, mobile clean

**Notes for next agent:**
- The two source image PNGs in `images/` (ChatGPT Image Jun 27/28) remain untracked intentionally; do not commit unless re-cropping hero-ai.jpg
- Hero alignment tuned at 1554×900; period↔earlobe alignment is viewport-sensitive (cover bg + flex centering)
- RepoBackups path (user-confirmed): `/Users/ant/WorkSync/Projects/RepoBackups/Old-Fashion-Care`
- Next steps: user visual review of live hero, then SEO audit, then migration branch → main merge review

---

## 2026-06-29 — Hero copy↔people micro-alignment

**Work completed:**
- Hero sub-paragraph reduced to 4 lines (font-size 1.05→0.97rem, max-width 480→582px)
- Hero copy column nudged up (margin-top -5.2rem, mobile reset) so orange "possible." period bottom aligns with older woman's earlobe bottom (~8px tolerance)
- Hero gradient pulled left (stops shifted ~5–8% earlier) to reveal more of the photo; band edge kept ≥0.50 opacity to prevent seam
- Wider sub paragraph makes lower text lines subtly overlap the caregiver's fingertips; hand/shoulder/faces preserved
- Gradient ambiguity resolved with user: chose "pull dark toward left edge / reveal more photo" direction

**Files changed:**
- Modified: `css/style.css` (hero rules only), `COMMIT_NOTES.md`, `PROGRESS_NOTE.md`
- Untracked (not committed): `.DS_Store`, `images/ChatGPT Image Jun 2[78]*.png`, `Prompts/repo_push_handoff_snapshot_tag_prompt_snapshot_naming_refined.md`

**Validation:**
- Headless Chromium screenshots at desktop 1554×900 and mobile 390×820
- sips zoom crops confirmed period↔earlobe alignment, hand overlap subtlety, no seam line, mobile unaffected

**Notes for next agent:**
- The two source image PNGs in `images/` (ChatGPT Image Jun 27/28) are the clean original photo and the old mockup — untracked intentionally; do not commit them unless re-cropping is needed
- Hero is tuned at desktop 1554×900; period↔earlobe alignment will drift slightly at other viewport sizes (photo is `cover`, text is `align-items:center`)
- Next steps: user visual review, then SEO audit, then migration branch → main merge review

---

## 2026-06-18 — GitHub Repo Rename

**Work completed:**
- Renamed GitHub repository from `Old-Fashion-Care-` to `Old-Fashion-Care` (trailing dash removed)
- Updated local git remote URL to `git@github.com:rmz9dkfy5f-pixel/Old-Fashion-Care.git`
- Updated CONTEXT.md, CHANGELOG.md, STATUS.md, COMMIT_NOTES.md to record rename

**Files changed:**
- Modified: CONTEXT.md, CHANGELOG.md, STATUS.md, COMMIT_NOTES.md, PROGRESS_NOTES.md

**Validation:**
- `git ls-remote origin HEAD` confirmed connectivity to new URL

**Notes for next agent:**
- Repo name is now `Old-Fashion-Care` — use this in all future references
- No site files were changed in this push
- Next priority remains: SEO audit across all 6 HTML pages

---

## 2026-06-15 — Photo Social Proof + Starter Kit v3.3 Migration

**Work completed:**
- Starter Kit v3.3 migration: added .claude/agents/ (7 sub-agents), ai/, docs/, plans/, and 23 root-level project control docs
- Filled in README.md, PROJECT_BRIEF.md, STATUS.md, BACKLOG.md with real Old Fashion Care project content
- Created images/ folder with 12 photos using clean URL-safe filenames (care-01.jpg through care-11.jpg + regina.jpg)
- Added caregiver photo grid section to homepage index.html ("Real Care, Real People" — 6 photos, responsive 3-col/2-col/1-col)
- Replaced "RB" initials placeholder on about.html with Regina Booker's real founder photo (rectangular portrait)
- Updated css/style.css with .photos-grid layout and img.founder-photo rules
- CHANGELOG.md template quarantined in .starter-kit/review/conflicts/ (no overwrite of existing real content)
- Migration branch created: migration/project-starter-v3-3 off main @ 0806eda

**Files changed:**
- Modified: about.html, css/style.css, index.html
- New: images/ (12 photos), .claude/ (7 agents + settings.example.json), ai/, docs/, plans/, all root .md control docs, .starter-kit/ workspace, Prompts/

**Validation:**
- Static site — no build/lint/test scripts
- Manual browser check: all pages load, photos display correctly, no broken images

**Notes for next agent:**
- SEO audit is the next priority — review meta titles, descriptions, Open Graph across all 6 HTML pages
- Migration branch not yet merged to main — review before merging
- care giver pics/ (original photo folder with spaces) kept in place; images/ has clean copies
- Photos care-07 through care-11 available but not yet used in the grid
