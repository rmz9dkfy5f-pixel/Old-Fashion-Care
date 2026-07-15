# Plan

This is the active project plan.

Do not use this for every possible future idea. Use `BACKLOG.md` and `ROADMAP.md` for that.

---

## Planning Rule

Plan only as far as needed to reach the next phase gate.

---

## Active Objective

> Explore a more immersive Editorial Sage homepage hero (full-bleed photo + gradient scrim, like the
> live/`main` design) as **separate branches** off `design/editorial-sage-elder-friendly`, without
> touching that baseline branch, `main`, or the live site — so the user can compare treatments.

---

## Current Validation Question

> Across the three hero branches (baseline boxed split / cream-immersive / split-depth), which
> treatment best brings the homepage hero "to life" while keeping the sage light aesthetic, legible
> copy, and responsive/accessible behavior?

---

## Current Vertical Slice

### Slice Name

> Hero variant branches. `design/editorial-sage-hero-cream-immersive` — implemented + committed
> (local). `design/editorial-sage-hero-split-depth` — next.

### Purpose

> Give the homepage hero the live design's photo + gradient "aliveness" without leaving the sage
> light theme, delivered as isolated branches so the baseline stays intact for side-by-side review.

### User/Operator Outcome

> The user can preview all three homepage heroes (baseline / cream-immersive / split-depth) on
> desktop + mobile and decide which to keep and whether to merge it toward `main`.

### Systems Touched

- [ ] UI
- [ ] API
- [ ] Database
- [ ] Filesystem
- [ ] Server config
- [ ] Container/runtime
- [ ] Tests
- [ ] Documentation
- [ ] Other: [write here]

### Temporary Work Allowed

- [ ] [Temporary shortcut]
- [ ] [Manual step]
- [ ] [Hardcoded value]

### Final Work Deferred

- [ ] [Production version]
- [ ] [Automation]
- [ ] [Config setting]

---

## Success Criteria

This slice is done when:

- [ ] Initial check has been run.
- [ ] Approved implementation is complete.
- [ ] Verification passes.
- [ ] No unrelated files changed.
- [ ] Tracking files are updated.
- [ ] Commit notes are prepared.
- [ ] Slice review is written.
- [ ] Changes are committed and pushed if required.

---

## Expected Files To Change

- [ ] [File path]
- [ ] [File path]

---

## Out of Scope

Do not build these during this slice:

- [ ] [Deferred item]
- [ ] [Deferred item]
- [ ] [Deferred item]

---

## Check / Fix / Verify / Commit / Push Plan

### Check

```bash
# Add first check command here
```

### Fix

> Fix only failures related to the approved slice.

### Verify

```bash
# Add verification command or manual check here
```

### Commit

Proposed commit message:

```text
<type>: <summary>
```

### Push

Push only after verification and approval.

```bash
git push
```
