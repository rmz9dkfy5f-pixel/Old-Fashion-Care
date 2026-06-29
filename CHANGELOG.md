# Changelog

All notable changes to the Old Fashion Care website will be documented here.

---

## [v1.4.1] — 2026-06-29

### Changed
- Hero sub-paragraph reduced to 4 lines (font-size 1.05rem→0.97rem, max-width 480→582px)
- Hero copy column nudged upward (margin-top -5.2rem, reset on mobile) so the orange "possible." period aligns with the older woman's earlobe
- Hero gradient pulled left (transition starts ~5–8% earlier) to reveal more of the photo; seam-preventing opacity floor maintained
- No markup, image, or content changes — `css/style.css` hero rules only

---

## [v1.3.1] — 2026-06-18

### Changed
- GitHub repository renamed from `Old-Fashion-Care-` to `Old-Fashion-Care` (trailing dash removed)
- Local git remote URL updated to match new repo name

---

## [v1.3.0] — 2026-06-15

### Added
- Caregiver photo social proof section on homepage ("Real Care, Real People" — responsive grid of 6 photos)
- Regina Booker founder photo on about.html, replacing the "RB" initials placeholder (rectangular portrait)
- images/ folder with 12 photos: 11 stock caregiver photos (care-01.jpg — care-11.jpg) + regina.jpg
- Project Starter Kit v3.3 control structure: .claude/agents/, ai/, docs/, plans/
- 7 Claude sub-agents: debugger, docs-promoter, project-steward, repo-cartographer, security-reviewer, slice-planner, test-verifier
- 23 root-level project control docs (STATUS.md, BACKLOG.md, PLAN.md, ROADMAP.md, DECISION_LOG.md, etc.)
- Quality gate docs: DONE_CRITERIA.md, CHANGE_CONTROL.md, REPO_HEALTH_CHECK.md, ROLLBACK_PLAN.md, PROJECT_RISK_REGISTER.md
- .starter-kit/ migration workspace with install log, pre-migration inventory, and conflicts archive

### Changed
- README.md rewritten with real project description, tech stack, and setup notes
- PROJECT_BRIEF.md filled in with business goal, user profile, success criteria, and out-of-scope items
- STATUS.md and BACKLOG.md updated with real current state and work queue
- css/style.css: added .photos-grid responsive layout (3-col/2-col/1-col) and img.founder-photo rules

---

## [v1.2.0] - 2026-05-04 - Regina

### Added
- Open Graph metadata across public pages for richer social link previews
- Twitter/X summary card metadata across public pages
- Site favicon references and SVG favicon asset
- Plausible analytics script for oldfashioncare.com
- `robots.txt` with sitemap discovery
- `sitemap.xml` covering the public site pages
- `netlify.toml` with security headers, cache headers, content security policy, and `/index.html` redirect

### Changed
- Added robots indexing directives to secondary pages
- Improved production deploy readiness for static hosting on Netlify

---

## [v1.1.0] - 2026-05-01 - Regina

### Added
- `RELEASE.md` with v1.0.0 release notes
- `CHANGELOG.md` to track notable website changes by version
- `COMMITS.md` with GitHub commit-style release notes and commit metadata

---

## [v1.0.0] - 2026-04-30 - Regina

### Added
- Homepage with hero section, value proposition, trust signals, and call-to-action
- Services page covering personal care, home support, meal preparation, grooming, and companionship
- About page featuring founder Regina Booker with structured Person schema
- How It Works page with three-step process from initial call to first caregiver visit
- Questions page with comprehensive FAQ and FAQPage schema for rich search snippets
- Contact page with lead generation form and phone-first option for urgent cases
- Mobile-first responsive layout with hamburger navigation menu
- Custom design system — charcoal, coral, amber, and cream palette
- Typography system using Fraunces serif (headings) and Plus Jakarta Sans (body)
- FAQ accordion with single-open behaviour per category
- Active link highlighting across all pages
- LocalBusiness schema for local search visibility
- Canonical URLs and meta descriptions on all pages
- ARIA labels and semantic HTML for accessibility
- Vanilla JavaScript for navigation, mobile menu, and FAQ interactions (3 KB)
