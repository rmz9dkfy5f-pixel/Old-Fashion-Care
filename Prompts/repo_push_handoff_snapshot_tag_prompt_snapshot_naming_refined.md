# Repo Push, Handoff Update, Snapshot, Tag, and GitHub Push Prompt

You are preparing this repository for a clean GitHub push.

Your job is to update the correct handoff/coordination markdown files, create GitHub commit-style notes, commit the work, apply a real tag using the actual commit hash, create a local snapshot folder named after the commit tag, and push the commit and tag to GitHub.

Do not add `Co-Authored-By: Claude Sonnet 4.6`, `Co-Authored-By: Claude`, `Co-Authored-By: ChatGPT`, or any other LLM/tool attribution to any commit message, markdown file, release note, or generated output.

---

## 1. Inspect Current Repo State First

Before editing files:

1. Confirm current branch.
2. Run `git status`.
3. Review changed files.
4. Identify what was completed in this batch of work.
5. Identify what was verified.
6. Identify what remains incomplete, risky, deferred, or blocked.
7. Identify whether this push is:
   - routine progress,
   - meaningful feature/fix,
   - release-level,
   - architecture/security/deployment-level,
   - rollback-sensitive,
   - scope-changing.

Do not guess. Base the handoff updates on the actual repo state and actual changes.

---

## 2. Update These Files Every Push

Always update these files before every commit/push:

### `STATUS.md`

Update with the current truth of the repo.

Include:

- Current branch
- Current repo status
- Completed work in this push
- Validation performed
- Known issues
- Blockers
- Next recommended step

### `PROGRESS_NOTES.md`

Append a concise progress entry.

Include:

- Date
- Work completed
- Files or areas changed
- Validation performed
- Notes for the next agent

### `COMMIT_NOTES.md`

Update with GitHub commit-style notes.

Use this exact structure:

```md
## Summary

- 

## Description

- 
```

The Summary should be short and commit-style.

The Description should explain:

- what changed,
- why it changed,
- what was verified,
- what risk or follow-up remains.

### `PROGRESS_NOTE.md`

**This repo uses both `PROGRESS_NOTE.md` and `PROGRESS_NOTES.md` — they are not alternatives, and
updating one is not a substitute for the other.** `docs/governance/REPOSITORY_HANDOFF_CONFIG.md`
names `PROGRESS_NOTE.md` a canonical handoff file that must be "kept unconditionally," and its own
header states it is "the current active progress note." Confirm by checking whether the file's own
header says something like "use this as the current active progress note" before assuming it's
unused — do not skip it just because `PROGRESS_NOTES.md` (plural) also got updated.

Replace (not append to) its "Latest" and "Current Progress" sections so they describe *this* push's
state — date, phase, current slice, completed/in-progress/blocked items, next action. This mirrors
what just went into `PROGRESS_NOTES.md`, but as the single current snapshot rather than a growing
log. If a completed entry it was showing is now historical, that's fine — `PROGRESS_NOTES.md` is
where the permanent record lives; `PROGRESS_NOTE.md` only needs to reflect the current state.

---

## 2a. Update the Linked Vault Project Folder (Every Push — Do Not Skip)

This step exists to close a real, recurring failure mode: repo-local docs (Section 2) get updated
on every push while a project's separate vault-side continuity record silently falls behind,
because it depended on a separately-invoked session-end closeout that is easy to skip or defer for
days across many pushes. **Do this on every push, not only at session end.**

1. This repo's linked vault project folder is
   `03_PROJECTS/Active/Old_Fashion_Care/` in the AntBrainOS vault
   (`/Volumes/AntNVMe1TB/WorkSync/Obsidian/AntBrainOS/03_PROJECTS/Active/Old_Fashion_Care/`) — it
   holds this project's own `CURRENT_CONTEXT.md`, `SESSION_LOG.md`, `DECISION_LOG.md`,
   `HANDOFF_TO_CLAUDE.md`. Confirm it's still under `Active/` before assuming (check `Backlog/` or
   `Complete/` instead if not — project status can change between sessions).
2. If the folder has moved or no longer exists, stop and report the gap explicitly rather than
   silently proceeding with only the repo-local docs updated (see step 5).
3. Before or alongside the repo-local commit (Section 7):
   - **Prepend a new dated entry to `SESSION_LOG.md`** (newest-first, directly under the H1)
     summarizing this push: goal, work completed, files changed, commands run, verification, any
     decisions/problems, next actions. Reuse the content already drafted for `COMMIT_NOTES.md`/
     `PROGRESS_NOTES.md` in Section 2 — this is not original re-authoring.
   - **Update `CURRENT_CONTEXT.md`**: prepend a new dated state section (matching that file's own
     established heading pattern) reflecting the post-push repo truth (branch, commit hash, what
     changed, what's still open).
   - **Update `DECISION_LOG.md`** only if a real decision was made this push (architecture,
     workflow, scope, or process decision) — do not force an entry when there is none.
   - **Update `HANDOFF_TO_CLAUDE.md`**: prepend a new "Current Handoff" (or "Latest") dated section
     matching that file's own established heading pattern.
4. This step does **not** replace a full session-end closeout (`CLAUDE_CODE_SESSION_END.md` /
   `REPO_SESSION_END_CLOSEOUT.md`) — that still runs at genuine session boundaries and additionally
   handles `last_run:`/implementation-state bookkeeping, the Step 4a next-task confirmation gate,
   and the closeout disposition. This step's job is narrower and non-negotiable: the vault-side
   record must never be more than **one push** behind the repo, instead of silently drifting for
   days across many pushes with no closeout in between.
5. If the vault project folder's files cannot be located, read, or written for any reason, stop and
   report the gap explicitly in the Final Output (Section 12) rather than silently proceeding with
   only the repo-local docs updated.

---

## 3. Update These Files When Relevant

Do not mechanically update every markdown file. Update only the files that are relevant to this push.

### Update `CHANGELOG.md` when:

The push changes behavior, structure, UX, API, deployment, security, documentation, workflow, or user-visible functionality.

Use categories such as:

```md
### Added
### Changed
### Fixed
### Removed
### Security
```

### Update `BACKLOG.md` when:

Tasks were completed, discovered, deferred, blocked, or left unfinished.

### Update `CONTEXT.md` when:

The next agent needs new background context, such as:

- new repo structure,
- new deployment detail,
- new service relationship,
- new admin route,
- new dependency,
- new environment requirement,
- new constraint,
- new “do not touch” rule.

### Update `DECISION_LOG.md` when:

A real decision was made.

Examples:

- architecture decision,
- deployment decision,
- security decision,
- workflow decision,
- scope decision,
- defer/split decision.

Include:

```md
## YYYY-MM-DD — Decision Title

### Decision

### Reason

### Alternatives Considered

### Consequences
```

### Update `PHASE_GATES.md` when:

A gate passed, failed, was skipped, or is blocked.

Examples:

- build passed,
- tests passed,
- deployment verified,
- admin panel blocked,
- security gate failed,
- production-readiness incomplete.

### Update `SLICE_REVIEWS.md` when:

A meaningful work slice was completed.

Examples:

- homepage migration slice,
- booking widget integration slice,
- admin audit slice,
- deployment fix slice,
- security hardening slice.

### Update `LESSONS_LEARNED.md` when:

A meaningful reusable lesson was discovered.

Do not use it for routine status updates.

---

## 4. Update These Files Only for Major Changes

Only update these when their specific purpose changed:

### `README.md`

Update only if setup, usage, install, commands, overview, or public project instructions changed.

### `PROJECT_BRIEF.md`

Update only if project purpose, scope, owner intent, or success definition changed.

### `PLAN.md`

Update only if the execution plan changed.

### `ROADMAP.md`

Update only if future direction, milestones, priorities, or planned phases changed.

### `RELEASE_NOTES.md`

Update only for release-level or milestone-level changes.

### `RELEASE.md`

Update only when preparing an actual release or release candidate.

### `DONE_CRITERIA.md`

Update only if the definition of done changed.

### `PROJECT_RISK_REGISTER.md`

Update when a new risk is discovered, a risk is reduced, or a risk changes severity.

### `CHANGE_CONTROL.md`

Update when scope, architecture, release process, deployment process, or approval flow changes.

### `REPO_HEALTH_CHECK.md`

Update when repo health is checked or when structural repo issues are found/fixed.

### `ROLLBACK_PLAN.md`

Update when deployment, release, migration, database, or production risk requires rollback instructions.

### `COMMITS.md`

Update if this repo uses it as a running commit history or commit index.

`PROGRESS_NOTE.md` is **not** in this section — for this repo it is a mandatory every-push update.
See Section 2.

---

## 5. Preserve GitHub Commit-Style Notes

Generate commit notes in this format:

```md
## Summary

<one concise commit-style summary>

## Description

- <what changed>
- <why it changed>
- <what was verified>
- <remaining risk or follow-up>
```

The actual Git commit message should also follow this structure:

```txt
<short summary>

Description:
- <what changed>
- <why it changed>
- <what was verified>
- <remaining risk or follow-up>
```

Do not include any LLM co-author lines.

Do not include:

```txt
Co-Authored-By: Claude Sonnet 4.6
Co-Authored-By: Claude
Co-Authored-By: ChatGPT
Co-Authored-By: OpenAI
```

Do not include any similar LLM/tool attribution.

---

## 6. Validate Before Commit

Before committing:

1. Run the appropriate validation checks for this repo.
2. If this is a website/app repo, run the available build/test/lint checks.
3. If no validation scripts exist, document that clearly in `STATUS.md` and `COMMIT_NOTES.md`.
4. Run `git diff --stat`.
5. Review the changed markdown files to make sure they reflect the actual repo state.
6. Make sure no fake placeholder hashes, fake tags, or example values remain.
7. Check the Section 2 "Update Every Push" file list (`STATUS.md`, `PROGRESS_NOTES.md`,
   `COMMIT_NOTES.md`, `PROGRESS_NOTE.md`) against `git diff --stat` name-by-name. If any of those
   four is missing from the diff, either add it now or state explicitly in this push's output why
   it genuinely didn't need an update — never let one silently fall out of a push.

---

## 7. Commit

Create the Git commit after the handoff files are updated and validation is complete.

The commit message must use real information from the work performed.

Do not use fake example hashes.

Do not use placeholder tags like:

```txt
v1.2.0__stable-homepage__commit-a1b2c3d
```

That is only an example format. The actual tag must use the real commit hash.

---

## 8. Create a Real Tag Using the Actual Commit Hash

After committing:

1. Get the real commit hash:

```bash
git rev-parse --short HEAD
```

2. Create a descriptive tag using this pattern:

```txt
vX.Y.Z__short-work-description__commit-REALHASH
```

Example format only:

```txt
v1.2.0__stable-homepage__commit-a1b2c3d
```

But do not use `a1b2c3d` unless that is the real commit hash.

The tag must contain the actual short commit hash from `git rev-parse --short HEAD`.

Apply the tag before pushing.

---

## 9. Create a Snapshot Folder Named After the Full Descriptive Commit Tag

Every Git commit must have a matching snapshot, matching tag, and real commit hash.

The snapshot folder must be named exactly after the full descriptive commit tag.

Do not create bare version-only snapshot folders.

Invalid snapshot folder names:

```txt
v2.15.0
v2.15.1
v2.15.2
```

Required snapshot folder naming pattern:

```txt
vX.Y.Z__short-work-description__commit-REALHASH
```

Example format only:

```txt
v2.14.1__prompts-workflow-templates__commit-9457ab9
v2.14.8__prompts-update-file-list__commit-cc88cfd
v2.14.9__docs-sync-v2-14-8__commit-720d866
```

The `short-work-description` must be a concise kebab-case description of the actual work completed in this commit.

The `REALHASH` value must be the actual short commit hash returned by:

```bash
git rev-parse --short HEAD
```

Before creating the snapshot folder, verify that the commit tag includes all three required parts:

```txt
version + work description + real commit hash
```

If the tag is only a bare version such as `v2.15.0`, stop before creating the snapshot and replace it with a full descriptive tag using the required pattern.

Before creating the snapshot, ask the user:

> "What is the full path to your RepoBackups folder on this machine?"

Wait for the answer. Remember that path for the rest of this session — do not ask again.

Paths differ by machine and OS. The user will provide the correct root. Examples of what a valid answer looks like:

```txt
/Users/ant/WorkSync/Projects/RepoBackups
```

```txt
E:\WorkSync\Projects\RepoBackups
```

Detect the current repo name from the working directory name or `git remote get-url origin`.

Append the repo name and the full descriptive commit tag to the answered path:

```txt
<answered-path>/<RepoName>/vX.Y.Z__short-work-description__commit-REALHASH
```

or on Windows:

```txt
<answered-path>\<RepoName>\vX.Y.Z__short-work-description__commit-REALHASH
```

The final snapshot path should look like:

```txt
<answered-path>/<RepoName>/vX.Y.Z__short-work-description__commit-REALHASH
```

The snapshot must represent the committed state of the repo.

Prefer using a clean tracked-file snapshot from `HEAD`, not an uncommitted working directory copy.

Use a method such as `git archive HEAD` where appropriate.

Do not include `.git`, dependency folders, build cache folders, or unrelated local machine files unless this repo explicitly requires them.

If the correct snapshot destination cannot be determined, or if a full descriptive tag cannot be created, stop before pushing and report the issue clearly.

---

## 10. Push Commit and Tag

After the commit, tag, and snapshot are created:

1. Push the current branch to GitHub.
2. Push the tag to GitHub.
3. Confirm the pushed branch and tag.

Use the current remote branch unless the repo state clearly requires otherwise.

---

## 11. Hard Clean Check Before Claiming Success

After pushing and confirming the remote branch and tag, run:

```bash
git status --short --branch
git status --porcelain=v1 --untracked-files=all
git status
git log -1 --oneline
git tag --points-at HEAD
```

The repo is **not clean** if `git status --porcelain=v1 --untracked-files=all` prints anything.
That includes untracked `??` files or folders. Do not say "clean" while visible untracked files
remain.

PASS requires all of these:

- `git status --porcelain=v1 --untracked-files=all` outputs nothing.
- `git status` says `nothing to commit, working tree clean`.
- The current branch is up to date with its remote branch.
- `git tag --points-at HEAD` shows the expected full descriptive tag.
- GitHub Desktop is expected to show `0 changed files`.

If local-only folders remain visible, resolve them before final success by doing exactly one of:

- Commit them intentionally, if they are part of the project state.
- Add a repo-appropriate tracked ignore rule, if every clone should ignore them.
- Add a machine-local exclusion in `.git/info/exclude`, if they are local installer/export/source-kit
  folders that should stay on this machine and should not be shared across clones.

Examples of local-only folders that may belong in `.git/info/exclude`: extracted starter-kit
source folders, one-off installer folders, local AI export staging folders, and temporary tool
payloads. Do not use `.git/info/exclude` for files another clone or collaborator needs.

If the porcelain output is not empty and you cannot safely decide whether to commit or ignore the
files, stop and report the dirty state. Do not push more work on top of a visibly dirty handoff.

---

## 12. Final Output Required

After completing the process, report:

```md
## Summary

- 

## Description

- 

## Commit

- Branch:
- Commit hash:
- Commit message:

## Tag

- Tag applied:

## Snapshot

- Snapshot path:

## Validation

- Checks run:
- Result:

## Push Status

- Branch pushed:
- Tag pushed:

## Remaining Follow-Up

- 
```

Do not claim success unless the command actually completed successfully.

Do not invent commit hashes, tags, snapshot paths, validation results, or push results.

---

## 13. Then Run Session Close-Out

Immediately after producing the Final Output report above — in this same turn, without waiting for
a separate user prompt — locate and execute CLAUDE_CODE_SESSION_END.md
(05_SOPS/Claude_Code/CLAUDE_CODE_SESSION_END.md in the AntBrainOS vault). Feed it the commit hash,
tag, and snapshot path just established in Section 12 as the "Last Known Good State" so the vault's
current-state records can never fall behind the actual pushed state.

Do not run session-end before this point in the same turn. If any further repo change happens
after session-end has already run in this turn, re-run session-end again afterward rather than
leaving the vault's recorded state stale.
