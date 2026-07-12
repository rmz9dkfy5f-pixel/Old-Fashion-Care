# Progress Note

This file is GitHub-specific tracking and must be kept unconditionally.

Use this as the current active progress note.

For historical notes, copy completed entries into `PROGRESS_NOTES.md`.

---

## Current Progress

Date:

```text
2026-07-11
```

Phase:

```text
Phase 2 — hero contrast + gradient fix committed (tag v2.1.0) and pushed to main
```

Current slice:

```text
Hero CTA contrast fix + gradient/photo-band repositioned left, per a fresh user-provided annotated
screenshot (plan-mode approved). Supersedes the older 000_INBOX/ofc-hero-spec-and-fix.md pointer —
that spec's hex values didn't match this repo's actual tokens.
```

Completed:

- [x] Committed and pushed the full V3.4 migration doc consolidation (commit `af6255d`, tag
      `v2.0.1__complete-v34-migration-doc-consolidation__commit-af6255d`)
- [x] Added `--coral-fill: #C2512B` token; repointed `.btn--coral` to it (~4.66:1 vs white,
      up from 3.87:1)
- [x] Shifted `.hero::after` gradient stops left; widened `--hero-photo-w` 53%→57% (band edge
      47%→43%) to reach the zone marked in the user's reference screenshot
- [x] Verified via Playwright screenshots + canvas pixel-sampling at 1200/1440/700/390px (no
      PIL/ImageMagick in this environment) — real, correctly-directioned, no hard seam, mobile
      pixel-identical
- [x] Measured the face-clearance tradeoff precisely: text-to-hairline gap 125px→80px at 1200px
      viewport (10.4%→6.7%), still above the ~60px/5% historical safe minimum

In progress:

- [ ] None — hero fix reviewed, committed (v2.1.0), and pushed this session

Blocked:

- [ ] Quality: swap the client's ORIGINAL hi-res photo into images/hero-ai.jpg before launch
- [ ] Decide whether to create a dedicated apple-touch-icon.png (180×180) later, or keep favicon.svg fallback

Next action:

> Hero fix is pushed. **Fast-follow: apply the same coral-fill/white-text contrast fix to
> `.nav__cta` and `.section--coral`** (found this session, not yet fixed). Also still pending:
> hi-res hero photo swap and a dedicated apple-touch-icon before final launch.

Checks run:

```bash
git rev-parse HEAD                 # af6255d (parent — this session's changes not yet committed)
npx --no-install playwright screenshot --viewport-size=... http://localhost:8000/index.html ...
# canvas-based pixel sampling script (Playwright chromium + <canvas>.getImageData) — see
# docs/project/COMMIT_NOTES.md for the full before/after pixel tables
```

Commit status:

```text
Pushed to main in two commits this session: v2.0.3 (d2ffe77) cleared the four pre-existing
unrelated policy-doc files (AGENTS.md, CLAUDE.md, a Prompts/ file, docs/project/DECISION_LOG.md);
v2.1.0 is this hero fix (css/style.css + the four tracking docs). Both tagged, snapshotted to
RepoBackups/Old-Fashion-Care, and pushed. See git log / the vault AGENT_HANDOFF.md for the exact
v2.1.0 commit hash.
```

Approval status:

```text
Plan-mode approved by user for the button-contrast + gradient-shift-left changes. The band-width
widening (--hero-photo-w) was a separate, explicit escalation the user opted into after being shown
the gradient-only result and told it couldn't reach the full marked zone without it.
```
