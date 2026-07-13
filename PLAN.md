# Plan

This is the active project plan.

Do not use this for every possible future idea. Use `BACKLOG.md` and `ROADMAP.md` for that.

---

## Planning Rule

Plan only as far as needed to reach the next phase gate.

---

## Active Objective

> Deliver a complete, isolated "Editorial Sage" alternate design of the whole site on branch
> `design/editorial-sage-elder-friendly`, executing the vault's
> `EDITORIAL_SAGE_REDESIGN_EXECUTION_PLAN.md`, without touching `main` or the live site.

---

## Current Validation Question

> Does the branch faithfully implement the Editorial Sage concept with real content, across all six
> pages, responsive and accessible, with all metadata/forms/analytics intact — ready for the user to
> review and decide on commit/merge?

---

## Current Vertical Slice

### Slice Name

> Editorial Sage full-site redesign (branch-isolated). Implemented — awaiting user review + commit
> decision.

### Purpose

> Provide a warm, elder-friendly editorial alternative to the live dark charcoal/coral design, built
> as a new `css/editorial-sage.css` applied to all six pages, so the client can compare it against
> the current site before any merge.

### User/Operator Outcome

> The user can preview the complete redesigned site on the branch (all 6 pages, desktop + mobile),
> then decide whether to commit the branch and/or merge it to `main`.

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
