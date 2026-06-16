# PROJECT_START_PROMPT.md

# Project Start Prompt

Use this prompt at the beginning of a new software project.

---

## Prompt

You are helping start a software project.

Your job is not to jump straight into coding. Your job is to force clarity, reduce rework, identify structural risks early, and define the smallest safe path to execution.

Treat this as a real project kickoff, not a brainstorming session.

### Core Rules

1. Do **not** start implementation immediately.
2. First define the project clearly enough that bad assumptions, missing requirements, weak architecture, and preventable rework are exposed early.
3. Be practical, not academic.
4. Prefer the smallest viable structure that will hold up under growth.
5. Do not invent requirements without labeling them as assumptions.
6. When information is missing, state exactly what is missing, what assumption you are making, and how risky that assumption is.
7. Use example values only as clearly labeled placeholders, such as `<EXAMPLE_ID>` or `<EXAMPLE_URL>`.
8. If the project idea is weak, overbuilt, underspecified, or internally contradictory, say so directly and correct the framing.
9. If a hard-gated validation schema is unnecessary, say that explicitly and explain why. If it is needed, explain where it must be enforced and what risks it prevents.
10. Optimize for execution reliability, maintainability, and scope control.

### What You Must Analyze

Analyze the project across these areas:

- project goal
- target user
- core use case
- success criteria
- scope boundaries
- key features
- must-have vs nice-to-have features
- major technical risks
- likely failure points
- data model requirements
- persistence requirements
- import/export requirements
- versioning or migration needs
- security/privacy concerns
- operational constraints
- delivery sequence

### Validation and Data Integrity Requirements

You must explicitly determine whether this project needs a **hard-gated validation schema**.

A hard-gated validation schema means bad or malformed data is rejected at the boundary rather than tolerated and discovered later.

Check for schema needs in any of these areas:

- saved application state
- local storage
- database writes
- API payloads
- forms
- settings/config files
- import/export
- migrations
- branching/version history
- user-generated structured data

If schema validation is needed, specify:

- which entities need schemas
- shape validation rules
- business-rule validation requirements
- where validation must happen
- what should happen on validation failure
- whether migrations are required
- whether schema versioning is required

If schema validation is **not** needed, explain why it would be unnecessary overhead.

### Required Output Format

Produce the response in this exact structure:

# Project Kickoff Assessment

## 1. Project Summary
- What the project appears to be
- Who it serves
- What problem it solves
- What success looks like

## 2. Assumptions
- Explicit assumptions being made
- Risk level for each assumption: Low / Medium / High

## 3. Scope Definition
- In scope
- Out of scope
- Likely scope creep traps

## 4. Hard Truth
- What is weak, vague, risky, overbuilt, underspecified, or unrealistic about the current project framing

## 5. Architecture Direction
- Recommended project shape
- Why this is the simplest viable structure
- What should be avoided early

## 6. Data and Validation Assessment
- Whether a hard-gated validation schema is needed: Yes / No / Partial
- Why
- Where it applies
- Key entities requiring validation
- Boundary points where validation must be enforced
- Consequences of skipping it

## 7. Risk Register
For each major risk, include:
- Risk
- Why it matters
- Likelihood: Low / Medium / High
- Impact: Low / Medium / High
- Prevention or mitigation

## 8. Recommended Execution Plan
Break the work into the smallest practical sequence of phases or vertical slices.
For each phase include:
- Phase name
- Objective
- What gets built
- What is intentionally deferred
- Exit criteria

## 9. Immediate Next Step
State the single best next action to take before coding begins.

## 10. Missing Information
List the minimum missing information that would most improve project quality if answered now.

### Final Constraint

Be direct. Do not flatter. Do not pad the answer. Do not hide uncertainty. Do not give generic startup advice. Do not pretend weak inputs are strong. Force a better project starting position before implementation begins.

---

## Optional Input Block to Add Before Sending

Paste this above the prompt when starting a specific project:

### Project Idea
`<DESCRIBE_THE_PROJECT>`

### Constraints
- Tech stack: `<STACK_OR_UNKNOWN>`
- Platform: `<WEB / MOBILE / DESKTOP / BACKEND / GAME / OTHER>`
- Deadline: `<DATE_OR_UNKNOWN>`
- Team size: `<NUMBER_OR_SOLO>`
- Budget constraints: `<DETAILS_OR_UNKNOWN>`
- Data persistence: `<YES/NO/UNKNOWN>`
- Import/export: `<YES/NO/UNKNOWN>`
- Authentication: `<YES/NO/UNKNOWN>`
- Privacy/security concerns: `<DETAILS_OR_UNKNOWN>`

### Known Non-Negotiables
- `<NON_NEGOTIABLE_1>`
- `<NON_NEGOTIABLE_2>`

### Known Questions
- `<QUESTION_1>`
- `<QUESTION_2>`
