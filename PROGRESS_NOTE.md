# Progress Note

This file is GitHub-specific tracking and must be kept unconditionally.

Use this as the current active progress note.

For historical notes, copy completed entries into `PROGRESS_NOTES.md`.

---

## Latest — Contact Form Vendor Decision: Web3Forms (2026-07-22)

User decided the contact form's eventual delivery vendor: **Web3Forms, not Formspree**. `contact.html`'s
form action is still the unconfigured placeholder `https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID`
— that will not be filled in. Instead, once the client finalizes the purchase of this site, the form
will be switched to Web3Forms (`https://api.web3forms.com/submit` + a real `access_key` hidden field).

**This batch (documentation only, no code change):**
- Recorded the decision in `docs/project/DECISION_LOG.md`, including implementation notes for
  whoever does the swap later (the existing `js/main.js` submit handler is vendor-agnostic; only
  `contact.html`'s form `action` and hidden fields need to change).
- Reworded `docs/governance/PROJECT_RISK_REGISTER.md` R-008 and its `R-009` cross-reference, and
  `BACKLOG.md`'s matching item, from Formspree to Web3Forms.
- Updated `docs/governance/RELEASE_GATE.md`'s Functionality checklist and Release Decision notes to
  match.

**Not done, and not agent-actionable right now:** no Web3Forms account or access key exists yet.
Implementation is blocked on the client finalizing the purchase — nothing to configure until then.

**With this decision recorded, the project has no other open agent-actionable items** — every
remaining `BACKLOG.md`/`PROJECT_RISK_REGISTER.md` entry is either user-owned (this vendor swap,
the `oldfashioncare.com` domain question) or optional polish (image optimization, HSTS header,
apple-touch-icon, analytics events, the `care giver pics/` folder decision, iOS Safari check) that
the user has not asked to prioritize. See `docs/governance/RELEASE_GATE.md` for the current
PASS WITH CONDITIONS status.

---

## Completed Previously — Hash Placeholder Backfill and Vault Baton Refresh (2026-07-22)

A `REPO_SESSION_START_RECOVERY_AUDIT.md` run resolved `PASS WITH CONDITIONS`, naming two
staleness gaps as conditions to close: 3 unfilled "hash once committed" placeholders in this
repo's own tracking docs, and a 3-day-stale AntBrainOS vault baton entry for this project.

**This batch:**
- Backfilled all 3 hash placeholders (`docs/project/STATUS.md` ×2, `PROGRESS_NOTE.md` ×1) with
  the real short hashes (`10ee3d0`, `dd88bf4`) via a trailing docs-only, untagged commit
  (`f75de99`), matching this repo's established `8e61909`/`358e0b9` precedent.
- Prepended a new dated entry to the vault's `00_START_HERE/AGENT_HANDOFF.md`, superseding
  (without rewriting) a stale entry that still named an already-completed audit re-run as the
  open next task. Refreshed a matching stale pointer in this project's own vault
  `HANDOFF_TO_CLAUDE.md`.
- Took a fresh AntBrainOS vault snapshot before any vault edit, per that vault's own snapshot SOP.

**No active task remains** — this batch only closed the two conditions the recovery audit named.
Previous session's cumulative total is unchanged: 6 real fixes shipped and verified live (contact
form honesty, WCAG AA contrast, mobile-nav touch target + icon state, Escape-key handling,
testimonials reframe, uptime monitoring).

**Still open, mostly user-owned or optional (see `BACKLOG.md`):** a real Formspree ID, custom
form-analytics events, image optimization (9 oversized files, ~14.2MB avoidable), HSTS header, a
dedicated apple-touch-icon, a decision on the `care giver pics/` folder, and a real-device iOS
Safari check. `oldfashioncare.com`'s hosting mismatch remains user-confirmed expected/known, not a
blocker.

See `docs/project/STATUS.md` and `docs/project/CHANGELOG.md` for full detail. For the full
production-readiness audit (unchanged this batch), see the prior entry in `PROGRESS_NOTES.md`
(2026-07-19) and `docs/governance/audits/production-readiness-2026-07-19.md`.

---

## Current Progress

Date:

```text
2026-07-22
```

Phase:

```text
Phase 2 — production-readiness audit remains COMPLETE (unchanged this batch). This batch recorded
a client-decided contact-form vendor change (Web3Forms, not Formspree) in tracking docs only — no
code changed. No active implementation slice.
```

Current slice:

```text
None active. The Web3Forms swap itself is blocked on the client finalizing the purchase (not
agent-actionable). Remaining items are user-owned or optional follow-ups (see BACKLOG.md and
docs/governance/PROJECT_RISK_REGISTER.md R-007 through R-013) — not carried as an in-progress
slice.
```

Completed:

- [x] Recorded the Web3Forms vendor decision in `docs/project/DECISION_LOG.md`, with
      implementation notes for the future swap
- [x] Reworded `docs/governance/PROJECT_RISK_REGISTER.md` R-008/R-009, `BACKLOG.md`, and
      `docs/governance/RELEASE_GATE.md` from Formspree to Web3Forms

In progress:

- [ ] None

Blocked:

- [ ] Web3Forms configuration (`contact.html`) — blocked on the client finalizing the purchase, not
      agent-actionable until then
- [ ] `oldfashioncare.com` hosting mismatch — user-confirmed expected/known, not currently blocking
      anything; no action needed unless raised again

Next action:

> No agent-actionable next action remains open right now. The standing user-confirmed pick from the
> prior closeout (image optimization — compress the 9 oversized `care-*.jpg` files, ~14.2MB
> avoidable; see `BACKLOG.md` "Build Next") is still available to pick up whenever the user wants to
> continue. Everything else open is either user-owned (Web3Forms swap, `oldfashioncare.com`) or
> optional polish not yet prioritized.

Checks run:

```bash
grep -rln "Formspree"              # confirmed every tracking-doc reference to Formspree was
                                    # either updated to Web3Forms or left as historical record
                                    # (contact.html/js/main.js/CHANGELOG/audit files untouched —
                                    # out of scope for a docs-only decision record)
```

Commit status:

```text
Not yet committed — this batch is a docs-only decision record, staged for the next push at the
user's direction (per this repo's own convention of preparing tracking docs before the commit).
```

Approval status:

```text
User directly instructed the vendor decision (Web3Forms) and asked for it to be documented
("document that, and we can pretty much close out") — treated as explicit approval for this
docs-only tracking update. No code was changed; the actual Web3Forms swap remains unapproved and
un-actionable pending the client finalizing the purchase.
```
