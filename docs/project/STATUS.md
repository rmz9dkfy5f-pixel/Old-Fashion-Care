# Status

**Last updated:** 2026-07-18

---

## Latest Push — Repo Push-Workflow Governance Fix (2026-07-18, branch `main`)

```text
Branch: main
Tag:    v2.7.0__push-workflow-tracking-file-gap-fix__commit-<short-hash>
        (the real short hash is embedded in the annotated git tag applied to this commit)
```

**What changed:** `Prompts/repo_push_handoff_snapshot_tag_prompt_snapshot_naming_refined.md` and
`PROGRESS_NOTE.md` only — no site code. A follow-up session running
`REPO_SESSION_START_RECOVERY_AUDIT.md` found `PROGRESS_NOTE.md` was stale (still describing
2026-07-15/07-12 state, missing the founder-photo fix above entirely). Root cause: this repo's own
push prompt told the agent `PROGRESS_NOTE.md` and `PROGRESS_NOTES.md` were alternatives ("prefer
`PROGRESS_NOTES.md`"), so the previous push updated the plural historical log and silently skipped
the singular current-state file — despite `CLAUDE.md`/`AGENTS.md`/`REPOSITORY_HANDOFF_CONFIG.md`
all marking it required "unconditionally."

**Fixed:** (1) `PROGRESS_NOTE.md` content corrected to the actual current state. (2) The push
prompt: `PROGRESS_NOTE.md` moved into the mandatory "every push" list, the ambiguous
"prefer `PROGRESS_NOTES.md`" guidance removed, a name-by-name `git diff --stat` cross-check added
before commit (Section 6), and a new Section 2a added requiring the linked AntBrainOS vault project
folder (`03_PROJECTS/Active/Old_Fashion_Care/`) to be updated on **every** push, not only at session
end — closing a gap where the vault-side record could otherwise drift for days across many pushes.

**Why:** the user asked whether the repo-local fix was mirrored in AntBrainOS (it wasn't — the
vault's canonical copy of this same prompt carried the byte-identical bug, confirming no mechanical
sync exists between a repo's local prompt copy and the vault template), then asked for "no gaps...
system to system, or session to session." The vault's canonical prompt template and
`CLAUDE_CODE_SESSION_END.md` (new independent Step 18a cross-check) were hardened in parallel — see
`docs/project/DECISION_LOG.md` 2026-07-18 for this repo's side of that decision, and the vault's own
`08_DECISIONS/DECISION_LOG.md` #36 for the full cross-project write-up.

**Verified:** no build/lint/test scripts exist (static site) — verification here is a manual
line-by-line review confirming (a) `PROGRESS_NOTE.md`'s "Latest"/"Current Progress" sections match
this push's actual state, (b) the push prompt's Section 2/2a/4/6 read consistently with no
remaining "prefer the other file" language, (c) `git diff --stat` includes every file this repo's
own required-tracking list names for this push (see Validation section below).

---

## Previous Push — Fix Distorted Founder Photo on `about.html` (2026-07-18, branch `main`)

```text
Branch: main
Tag:    v2.6.0__founder-photo-aspect-ratio-fix__commit-<short-hash>
        (the real short hash is embedded in the annotated git tag applied to this commit)
```

**What changed:** `css/style.css` only — added `aspect-ratio: auto;` to `img.founder-photo`.
The class was still carrying `aspect-ratio: 3/4` (desktop) / `16/9` (mobile) from an older
`.founder-photo` placeholder-box rule that predates the real photo. Since nothing reset
`aspect-ratio` on the actual `<img>`, the browser's default `object-fit: fill` stretched the
real 354×514 portrait of Regina Booker to fit those mismatched boxes — worst on mobile, where
a portrait photo was forced into a 16:9 landscape box.

**Why:** user reported the photo looked compressed on their phone at
`old-fashion-care.craftandconscious.com/about.html`.

**Verified:** locally via Playwright at 390/768/1440 — image renders at its natural ~0.69
ratio at every width, 0 console errors. Bounding-box measurements matched the image's real
intrinsic ratio exactly (before: 1.78 mobile / 0.75 desktop; after: 0.689 at both). Re-verified
against the live deployed URL post-push (see Deployment note below).

**Deployment note (important, unrelated to the photo bug):** this repo's own canonical
URLs/sitemap/`REPOSITORY_HANDOFF_CONFIG.md` name `oldfashioncare.com` as the Netlify
production domain, but it currently resolves to an unrelated third-party site built on
"Jottful" — not this repository, on Netlify or otherwise. The URL the user actually checks,
`old-fashion-care.craftandconscious.com`, is a separate VPS/nginx deployment of this repo kept
in sync via manual `git archive` + rsync (same mechanism as the hero-variant preview
subdomains) — it was frozen at commit `fd7543c` (2026-07-12, `main`'s last site-affecting
commit before this one) until this push's re-sync. The `oldfashioncare.com` domain mismatch is
flagged here for visibility; it is a pre-existing condition, not introduced or fixed by this
push.

---

## Completed Previously — AntBrainOS Kit Tooling Install Across All 5 Branches (2026-07-15)

```text
Trunk tag: v2.5.0__install-antbrainos-kit-tooling-all-branches__commit-7818660 (on main's tooling commit)
```

Installed dev-tooling kits (from the AntBrainOS `20_TOOLS/KITS` collection) onto **all 5 branches**,
one commit each, at the user's request:

```text
main                                        7818660  + SEOKit, EngKit, TradeKit, handoff-repository
migration/project-starter-v3-3              190caf4  + SEOKit, EngKit, TradeKit, handoff-repository
design/editorial-sage-elder-friendly        4da3df3  + EngKit, TradeKit, handoff-repository (SEOKit already there)
design/editorial-sage-hero-cream-immersive  25647aa  + EngKit, TradeKit, handoff-repository (SEOKit already there)
design/editorial-sage-hero-split-depth      6645f6e  + EngKit, TradeKit, handoff-repository (SEOKit already there)
```

- **Value-driven kit selection:** installed the kits with genuine fit (SEOKit, EngKit, TradeKit,
  handoff-repository). **Skipped** EcomKit and VideoKit (no ecommerce/video surface on a static
  elder-care site) and MKTKit (previously evaluated and rolled back here as a poor fit).
- **Live site provably unchanged:** every commit is dev-tooling only — no `.html`/`css`/`js`/
  `images`/`netlify.toml` edits. The `main` live-site guard diff (`fd7543c..7818660` over site
  paths) is **empty**; `netlify.toml` publishes repo root with no served route to `.claude/`, so the
  Netlify deploy is byte-for-byte unchanged. Same site-file diff was empty on every branch.
- **Not a design change or a merge** — the redesign/hero-variant branches remain separate, un-made
  decisions; this only adds tooling.

**Validation:** cross-branch matrix confirmed each branch carries eng=35 files, tradekit=7 cards,
handoff skill+agent+config, seo=19 commands; EngKit validator PASSED (26 commands); staging guards
confirmed no site/local-only files were ever committed. Static site — no build/test/lint scripts.

---

## Current Phase

```text
Phase 2 — hero composition rework (25%-navy/75%-image ratio, hi-res photo swap, full-frame
desktop framing) committed and pushed to main
```

---

## Current Branch

```text
main
```

---

## Current Slice

```text
Hero photo composition (index.html hero + css/style.css + images/hero-ai.jpg): enforced a strict
leftmost-25%-navy / rightmost-75%-image ratio (previous builds never moved the navy/photo boundary
far enough left despite repeated attempts); swapped in the client's clean hi-res original photo
(replacing the old soft 1100x934 crop); and, on desktop (>=1024px), scaled hero height so
full-width `cover` shows the WHOLE photo frame (full lamp, full heads with headroom, more of the
left curtain) with no cropping and no seam. An interim `background-size: contain` zoom-out attempt
was tried and reverted — it made the navy column grow with screen width (26% at 1440px to ~45% at
1790px+) and left a mid-screen photo edge that hardened into a visible line on wide monitors;
reverting to full-width `cover` (photo band pinned right, 75%) keeps navy structurally at ~25% at
every width with no seam to begin with.
```

---

## Current Goal

> Hero composition fix reviewed, committed, and pushed. Remaining known items: a dedicated
> apple-touch-icon, and the same coral-fill/white-text contrast fix on `.nav__cta`/
> `.section--coral` (still queued from the prior session).

---

## Completed This Push — Hero Photo Composition Rework (2026-07-12)

Three related changes to `css/style.css` + `images/hero-ai.jpg`, all verified via Playwright
headless rendering + canvas pixel-sampling across 1024/1440/1790/2560px desktop widths plus
768px tablet and 390px mobile (no PIL/ImageMagick available in this environment):

- **25%-navy / 75%-image ratio enforced:** widened the photo band (`--hero-photo-w` 57%→75%,
  band's left edge 43%→25%) and compressed the `.hero::after` overlay gradient stops so solid
  navy ends by ~18-25% instead of the prior ~43-47%. Pixel-sampled confirmation: navy now ends at
  ~25% at every desktop width (was ~43-50% before), image visible across the full right 75%.
- **Hi-res photo swap:** replaced the old soft, low-res `images/hero-ai.jpg` (1100x934, a crop of
  a mockup) with a resample of the client's clean hi-res original (1400x933, q85, comparable file
  weight). Source PNG kept locally at `images/ChatGPT Image Jul 12, 2026 at 05_07_20 AM.png`
  (untracked, matches the existing `.gitignore` `images/ChatGPT*` rule).
- **Full-frame desktop display, no seam:** added `@media(min-width:1024px){ .hero{ min-height:
  clamp(660px, 50vw, 900px) } }` so the photo band's aspect ratio matches the photo's own (~1.5),
  letting `cover` show the entire frame (full lamp, full heads, more left curtain) instead of
  cropping the top on wide screens. Reverted an earlier `background-size: contain` attempt at the
  same goal after it proved to grow the navy column with viewport width and reintroduce a hard
  seam on wide monitors — full-width `cover` has neither problem by construction.

**Known tradeoff, flagged for awareness, not blocking:** the desktop hero is now taller on wide
screens (up to ~900px, e.g. ~895px at 1790px width) — the cost of showing the full photo without
cropping. Tablet (641-1023px) and mobile (<=640px) layouts are completely unchanged (pixel-verified
identical before/after).

---

## Completed Previously — Hero Contrast + Gradient Fix (2026-07-11)

Two changes to `css/style.css`, both verified via Playwright-driven pixel sampling (no
ImageMagick/PIL available in this environment — used `npx --no-install playwright` with chromium
already cached locally, driving a canvas-based pixel sampler instead):

- **Button contrast:** added `--coral-fill: #C2512B` (new token, ~4.66:1 vs white — `--coral`
  alone measures 3.87:1, below the 4.5:1 AA threshold for normal-size text; confirmed `.btn--lg`
  at 15px/weight 600 does not qualify as WCAG "large text"). `.btn--coral` background/border now
  use `--coral-fill`; `--coral` itself is untouched (still used for the headline `<em>`). Verified
  by sampling the rendered button pixel: `(217,97,57)` → `(196,89,52)`, matching the intended
  token shift. Hover (`--coral-dark`) unchanged, still darkens further on hover.
- **Gradient/photo band repositioned left:** `.hero::after`'s 10-stop overlay gradient stops
  compressed/shifted left (e.g. 46%→39%, 52%→46%, 60%→52%, 100%→60% — full table in commit notes),
  and `--hero-photo-w` widened 53%→57% (band's hard left edge 47%→43%) to reach the zone the user
  marked in their reference screenshot. Verified by pixel-sampling before/after screenshots at
  1200/1440/700/390px: real, correctly-directioned change exactly where the math predicts (zero
  diff left of the old band edge, consistent lightening from x≈564px rightward at 1200px
  viewport), zero diff on mobile (390px, untouched media query).
- **Known tradeoff, flagged for awareness, not blocking:** widening the band moved the photo (and
  the older woman's face) left along with it. Measured headline-text-end-to-hairline gap shrank
  from ~125px (10.4% of a 1200px viewport) to ~80px (6.7%) — still above the ~60px/5% minimum this
  project's own history established as safe (see `docs/project/COMMIT_NOTES.md`), but a real
  reduction worth knowing about if future sessions touch this again.
- Fixed two stale explanatory comments above `.hero::before`/`.hero::after` that described the
  pre-change opacity/edge numbers.
- Found but explicitly out of scope: `.nav__cta` and `.section--coral` have the same coral-fill/
  white-text contrast pattern as the button fix — not touched this pass.

---

## Completed Previously — V3.4 Doc Consolidation (2026-07-07)

Reconciled the V3.4 scaffolding (installed 2026-07-05, merged to `main` 2026-07-06) with this
project's real v3.3 root docs, since the installed V3.4 skills (`v34-execution-loop`,
`v34-production-readiness`) hardcode `docs/governance/` and `docs/project/` paths and would
otherwise only ever see empty generic templates:

- Moved 8 root docs with real content into `docs/project/` (overwriting empty stubs): `STATUS.md`,
  `CHANGELOG.md`, `COMMIT_NOTES.md`, `CONTEXT.md`, `DECISION_LOG.md`, `PROJECT_BRIEF.md`,
  `RELEASE_NOTES.md`, `ROADMAP.md`. Authored real content for `docs/project/ARCHITECTURE.md` (new,
  no root equivalent).
- Merged 6 governance file pairs into `docs/governance/` (root had real/customized content, the
  V3.4 versions were generic unpopulated templates): `CHANGE_CONTROL.md`, `ROLLBACK_PLAN.md`,
  `REPO_HEALTH_CHECK.md`, `DONE_CRITERIA.md`, `PROJECT_RISK_REGISTER.md` (authored real,
  project-specific risks — neither side had any before), and `PHASE_GATES.md` (the two sides had
  genuinely different gate taxonomies — kept V3.4's Gate 0–5 structure, populated with this
  project's real completion signals). Deleted all 6 root duplicates once merged.
- Rewrote `AGENTS.md` and `CLAUDE.md`: kept the v3.3-specific content (phase-gate language, the
  7-sub-agent workflow, the required-tracking-files list — now pointing at `docs/project/*` where
  files moved) and added the V3.4 candidates' genuinely new, non-conflicting pieces (structured
  "Output Standard" report format, explicit no-auto-commit line, references to the now-installed
  V3.4/production-readiness skills).
- Resolved `ai/agents/AGENT_REVIEW_GATES.md`: kept the real 7-agent-specific table, added the
  candidate's new "Review Gate D — Migration Safety" section.
- Added a pointer note to `ai/agents/SUBAGENT_ROLES.md` clarifying the 7 real sub-agents are
  authoritative, not the generic V3.4 role names.
- Deleted all 3 remaining `.v34_migration_review/*.v34-candidate` files (content merged) and
  removed the now-empty `.v34_migration_review/` directory.
- Updated `README.md`'s Project Control Files table and added a migration note to the top of
  `START_HERE.md` (legacy v3.1 doc) pointing at the new file locations.
- Fixed 4 live, actively-referenced files that still pointed at the old root paths:
  `ai/README.md`, `.claude/agents/project-steward.md`,
  `.claude/skills/v33-quality-gate-enforcer/SKILL.md`, `docs/WORKFLOW.md`.

---

## Completed Previously — Merge (2026-07-06)

Merged `migration/project-starter-v3-3` into `main` (`--no-ff`, real merge commit, not a
fast-forward). The two branches had diverged since 2026-06-30: `main` had picked up its own commit
(`76ea00e`, tagged `v1.6.0`/`v1.6.1`, adding the refined handoff-prompt file) while the migration
branch continued independently with 4 more commits ending in `5a7abc8` (SEO audit + Production
Readiness Skills deployment, tag `v1.5.5`).

- `git merge-tree` dry run (read-only, performed before merging) showed exactly 3 real conflicts:
  `COMMIT_NOTES.md`, `PROGRESS_NOTES.md`, `STATUS.md` — all append-style logs both branches had
  added different entries to. No conflicts in any HTML/CSS file or in `.claude/skills/`, `.agents/`,
  `docs/governance/`, `docs/project/` (main didn't have those paths at all — clean additions).
  `LESSONS_LEARNED.md` and the handoff-prompt file auto-merged cleanly (only one side had changed
  each).
- Resolved the 3 conflicts by combining both sides' entries (no content dropped) rather than
  picking one side.
- Pre-merge safety snapshot of `main` taken at
  `/Volumes/AntNVMe1TB/WorkSync/Projects/RepoBackups/Old-Fashion-Care/v1.6.1__pre-v2-merge-snapshot__commit-76ea00e`
  (223 files, verified against `git ls-tree`).

**Production Readiness Skills deployment (now on main):**
- Project Starter Kit V3.4 baseline (migrate mode) — additive only; `v34_validate.py` → PASS.
  3 real conflicts (`AGENTS.md`, `CLAUDE.md`, `ai/agents/AGENT_REVIEW_GATES.md`) quarantined into
  `.v34_migration_review/*.v34-candidate` for manual review — existing files untouched.
- 18-skill production-readiness suite installed into `.claude/skills/` (22 total skills: 4 V3.4 +
  18 PR suite). No name conflicts.
- New top-level additions: `.agents/`, `.claude/skills/`, `docs/governance/`, `docs/project/`,
  `ai/agents/SUBAGENT_ROLES.md`, `ai/prompts/*`, `00_MIGRATION_KICKOFF.md`, `MIGRATION_REPORT.md`,
  `V34_INSTALL_REPORT.json`.
- Known overlap: `docs/project/*.md` (new, from V3.4) duplicates the root-level tracking docs
  already in active use in this repo — not yet reconciled.

**SEO audit (now on main):**

SEO audit across `index.html`, `about.html`, `services.html`, `how-it-works.html`,
`questions.html`, `contact.html`:

- Titles, meta descriptions, canonical URLs, Open Graph tags, Twitter Card tags, `sitemap.xml`,
  and `robots.txt` were already correct and consistent across all 6 pages.
- **Fixed:** `og:image` / `twitter:image` on all 6 pages pointed to `images/og-default.png`, which
  does not exist in the repo (broken link-preview image on Facebook/LinkedIn/iMessage/X for every
  page). Repointed to the existing `images/hero-ai.jpg` and corrected `og:image:width`/`:height`
  from the placeholder 1200×630 to the file's actual 1100×934.
- **Fixed:** `<link rel="apple-touch-icon" href="/images/apple-touch-icon.png">` on all 6 pages
  referenced a file that does not exist (broken iOS "Add to Home Screen" icon). Removed the tag;
  browsers fall back to the existing `favicon.svg`.
- Verified: no other local `href`/`src` references across the 6 pages point to missing files.

---

## Completed Previously (c04e819 — 2026-06-30)

Three hero CSS iterations completed and pushed since last handoff (a2e7c9a):

**ea8b067** — Hero gradient further left (B-period anchor) + wider sub overlap:
- `.hero::after` gradient stops shifted so opacity ≈0.50 at the B-period position (x≈510, 33%)
- `.hero__sub` max-width 582→648px — lower text lines clearly overlap caregiver's arm/shoulder/hand
- Verified desktop 1554×900 + mobile 390×820

**b195aba** — Hero smoother gradient + headline 1-line fix + sub barely-covers-hand:
- `.hero__headline` max-width 565→620px — fixed "We make that possible." regression to 2 lines
- `.hero::after` 10-stop smooth gradient; visible fade anchored at 'h' in "where" (~22%); seam at 46% covered at 0.26 opacity
- `.hero__sub` font-size 0.97→0.94rem, max-width 648→580px — lines barely reach hand, shoulder uncovered
- Verified desktop 1554×900 + mobile 390×820

**c04e819** — Handoff tracking docs (this commit):
- CHANGELOG.md: v1.5.0 entry added
- SLICE_REVIEWS.md: 2026-06-30 entry added
- PROGRESS_NOTE.md: updated to current state

Tag `v1.5.0__hero-smoother-gradient-headline-fix__commit-b195aba` applied to b195aba and pushed.
Snapshot saved to RepoBackups for b195aba.

---

## Current Blocker

> None.

---

## Next Action

> 1. **User to review the hero fix (screenshots + pixel-sampling results reported in chat) and
>    decide whether to commit/push.** The `000_INBOX/ofc-hero-spec-and-fix.md` item this used to
>    point at is now superseded — its numbers didn't match this repo's real tokens; this pass
>    worked from a fresh, direct user screenshot instead.
> 2. Consider fixing the same coral-fill/white-text contrast issue on `.nav__cta` and
>    `.section--coral` (found this session, not fixed — out of scope for the approved slice).
> 3. Swap in hi-res hero photo before final launch (separate, pre-existing known issue).
> 4. Create a dedicated apple-touch-icon.png (separate, pre-existing known issue).

---

## Last Verified Working State

```text
Hero contrast + gradient fix on main — 2026-07-12 (committed tag v2.1.0, pushed).
Immediate prior commit: v2.0.3 (d2ffe77) push→session-end auto-chain policy docs — main — 2026-07-12.
Prior good state before this session: V3.4 doc consolidation, commit af6255d, tag v2.0.1 — 2026-07-07.
Hero: --coral-fill button token (~4.66:1); .hero::after gradient compressed/shifted left;
--hero-photo-w 53%->57% (band edge 47%->43%); text-to-hairline gap ~80px/6.7% at 1200px viewport
(was ~125px/10.4%, still above the ~60px/5% historical safe minimum); no hard seam detected;
mobile (390px) pixel-identical to before, untouched.
SEO metadata fixed (og-image, apple-touch-icon); V3.4 baseline + 18-skill suite installed and fully
reconciled with this project's real docs (docs/governance/, docs/project/).
GitHub repo: Old-Fashion-Care — git@github.com:rmz9dkfy5f-pixel/Old-Fashion-Care.git
All 6 pages load correctly; Netlify auto-deploy active on main branch.
```

---

## Validation Performed This Push

```text
Hero fix (2026-07-11): static site, no build/lint scripts. Verified via Playwright
(npx --no-install playwright, chromium cached locally — no PIL/ImageMagick available in this
environment) screenshotting index.html before/after at 1200/1440/700/390px viewports, then a
canvas-based pixel sampler (same Playwright chromium instance, images served over a throwaway
local HTTP server to avoid file:// canvas tainting) to numerically confirm: button fill color
shift, gradient lightening exactly in the predicted x-range with zero diff outside it, mobile
pixel-identical before/after, and the text-to-hairline gap measurement (125px -> 80px). No hard
seam found via direct zoomed-crop visual inspection of the new band edge. Hit and resolved an
environment ENOSPC (disk-full) error mid-session that blocked Bash entirely for a few minutes;
confirmed via `df -h` once resolved (7.6Gi free at the low point) and re-ran the blocked steps.

Static site — no build/lint scripts.
V3.4 consolidation (2026-07-07): git status reviewed — 17 deletions (root files consolidated),
25 modifications (docs/governance/, docs/project/, AGENTS.md, CLAUDE.md, README.md, START_HERE.md,
ai/README.md, .claude/agents/project-steward.md, .claude/skills/v33-quality-gate-enforcer/SKILL.md,
docs/WORKFLOW.md, ai/agents/AGENT_REVIEW_GATES.md, ai/agents/SUBAGENT_ROLES.md) — matches the
planned scope exactly, no unexpected changes. v34_validate.py re-run → PASS. Local href/src
resolution sweep re-run across all 6 pages → clean (docs-only change, expected no regression).
grep swept for dangling references to the 6 deleted root governance files across all .md files;
fixed 4 live files that still pointed at old paths (ai/README.md, .claude/agents/project-steward.md,
.claude/skills/v33-quality-gate-enforcer/SKILL.md, docs/WORKFLOW.md) — remaining hits are in
.starter-kit/archive/ (frozen historical install templates) and generic Prompts/*.md templates,
left untouched as out of scope. .v34_migration_review/ confirmed empty and removed.

Merge (2026-07-06): git merge-tree dry run identified exactly 3 conflicts before merging; all
resolved by combining both sides' content (verified no <<<<<<</=======/>>>>>>> markers remain
post-resolution). Pre- and post-merge snapshots taken and verified by file count against
git ls-tree. v34_validate.py re-run on main post-merge. Local href/src resolution sweep re-run
across all 6 pages post-merge.

SEO audit (2026-07-05): grep-based inventory of <title>/meta description/canonical/OG/Twitter tags
across all 6 pages — all correct prior to this session. Confirmed images/og-default.png and
images/apple-touch-icon.png referenced but missing via `ls`. Post-fix: grep confirms zero remaining
references to og-default.png or apple-touch-icon.png; a scripted check of every local href/src
across all 6 pages confirms every referenced local file now exists.

Production Readiness Skills install (2026-07-05): `python3 v34_validate.py --target .` → PASS
(no missing required files, no skill errors). `find .claude/skills -name SKILL.md | wc -l` → 22
(expected). `grep -rl "Smart Learning" .claude/skills/` → clean after fix. `git status --short`
confirms no existing tracked file was modified/deleted by either installer — all changes are new
files plus the 3 quarantined candidates.
```

---

## Open Questions

- [ ] Which photos from care-07 through care-11 should replace any in the current grid?
- [ ] Should a dedicated apple-touch-icon.png (180×180) be created later, or is the favicon.svg
      fallback acceptable long-term?
- [x] ~~How should `docs/project/*.md` be reconciled with the root-level tracking docs?~~ Resolved
      2026-07-07 — real content moved into `docs/project/`/`docs/governance/`, root duplicates
      deleted.
- [x] ~~Review the 3 quarantined `.v34_migration_review/` candidates.~~ Resolved 2026-07-07 — all 3
      reconciled by hand (kept project-specific content, added genuinely new V3.4 pieces).

---

## Approval Status

Phase 1 approved?

```text
Yes
```

Phase 2 approved?

```text
Yes — SEO-audit fixes, Production Readiness Skills install, and the migration-branch → main merge
were all explicitly approved by the user (2026-07-05 / 2026-07-06).
```
