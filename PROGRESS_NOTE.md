# Progress Note

This file is GitHub-specific tracking and must be kept unconditionally.

Use this as the current active progress note.

For historical notes, copy completed entries into `PROGRESS_NOTES.md`.

---

## Latest — AntBrainOS Kit Tooling Install (2026-07-15)

Installed dev-tooling kits across all branches (user request, `main` explicitly authorized). `main`
gained **SEOKit** (`.claude/commands/seo/` + skills/agents + `seo/` context), **EngKit**
(`.claude/skills/eng/`), **TradeKit** (`.claude/tradekit/`), and **handoff-repository**
(`.claude/skills/` + `.agents/skills/` + filled `docs/governance/REPOSITORY_HANDOFF_CONFIG.md`).
**Live site unchanged** — live-site guard diff (`*.html`/`css`/`js`/`images`/`netlify.toml` between
pre- and post-install commits) is empty; `netlify.toml` serves no route to `.claude/`. EcomKit/
VideoKit skipped (no surface); MKTKit skipped (previously rolled back). Not a design change or a
merge. See `docs/project/COMMIT_NOTES.md` for the full entry.

---

## Current Progress

Date:

```text
2026-07-12
```

Phase:

```text
Phase 2 — hero photo composition rework committed and pushed to main
```

Current slice:

```text
Homepage hero photo composition (index.html hero + css/style.css + images/hero-ai.jpg): enforced
a strict leftmost-25%-navy / rightmost-75%-image ratio (prior builds never moved the navy/photo
boundary far enough left despite repeated attempts); swapped in the client's clean hi-res original
photo; and, on desktop (>=1024px), scaled hero height so the full photo frame (lamp, both heads,
more left curtain) shows with no cropping and no seam.
```

Completed:

- [x] Widened `--hero-photo-w` 57%→75% (band left edge 43%→25%) and compressed the `.hero::after`
      overlay so solid navy ends by ~18-25% instead of ~43-47% — pixel-sampled confirmation navy
      now ends at ~25% at every desktop width
- [x] Swapped `images/hero-ai.jpg` for a 1400x933 q85 resample of the client's clean hi-res
      original (source PNG kept locally, untracked per existing `.gitignore` rule) — the old
      "swap in hi-res photo" blocked item is now resolved
- [x] Added `@media(min-width:1024px){ .hero{ min-height: clamp(660px, 50vw, 900px) } }` so
      full-width `cover` shows the whole photo frame on wide screens instead of cropping the top
- [x] Tried and reverted an interim `background-size: contain` zoom-out approach after it proved
      to grow the navy column with viewport width (26%@1440px → ~45%@1790px+) and reintroduce a
      hard seam on wide monitors; final approach avoids both by construction
- [x] Verified via Playwright headless rendering + canvas pixel-sampling at
      1024/1440/1790/2560px desktop, 768px tablet, 390px mobile — tablet/mobile confirmed
      byte-identical before/after
- [x] User confirmed correct on their own ~1790px screen before approving commit/push

In progress:

- [ ] None — hero composition fix reviewed, committed, and pushed this session

Blocked:

- [ ] Decide whether to create a dedicated apple-touch-icon.png (180×180) later, or keep
      favicon.svg fallback

Next action:

> Hero composition fix is pushed. **Fast-follow: apply the same coral-fill/white-text contrast
> fix to `.nav__cta` and `.section--coral`** (found during the 2026-07-11 session, still not
> fixed). Also still pending: a dedicated apple-touch-icon.

Checks run:

```bash
git rev-parse HEAD                 # b9a2a42 (parent — this session's changes not yet committed)
python3 -m http.server 8137        # local static server for rendering
npx --no-install playwright ...    # headless chromium via a scratchpad script, canvas-based
                                    # pixel sampler (Playwright + <canvas>.getImageData) — no
                                    # PIL/ImageMagick available
cmp before/after PNGs              # confirmed tablet/mobile renders byte-identical
```

Commit status:

```text
Not yet committed as of this note — commit/tag/snapshot/push runs immediately after this file is
saved, per the standard workflow. See git log / the vault AGENT_HANDOFF.md for the resulting
commit hash once pushed.
```

Approval status:

```text
Plan-mode approved across three sequential plans this session: (1) the 25%-navy/75%-image ratio
fix, (2) the hero photo zoom-out request (full lamp/heads/curtain), (3) reverting the resulting
hard-line/growing-navy defect back to full-width cover + height scaling. The user visually
confirmed the final result was correct on their own ~1790px screen before approving commit/push.
```
