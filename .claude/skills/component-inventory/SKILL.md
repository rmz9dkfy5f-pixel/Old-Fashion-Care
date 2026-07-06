---
name: component-inventory
description: Inventory pages, components, routes, forms, APIs, dependencies, and production-critical surfaces in an existing repo before refactor, audit, or handoff.
effort: high
---

# Component Inventory

## Purpose
Build a clear map of what exists before changing, auditing, or deploying the project.

## Non-negotiable rules
- Do not edit files during inventory.
- Do not assume unused code is safe to remove.
- Do not collapse separate systems into one mental model without evidence.
- Keep facts, guesses, and unknowns separate.

## Inventory scope

### Project structure
- Repo root.
- App/package folders.
- Source folders.
- Public/static assets.
- Config folders.
- Docs/prompts/plans/releases.

### Pages and routes
- Public routes.
- Admin routes.
- API routes.
- Error routes.
- Redirects/fallbacks.

### Components
- Layout components.
- Navigation/header/footer.
- Hero/CTA sections.
- Cards/service sections.
- Forms.
- Booking widgets.
- Admin UI.
- Shared utilities/hooks.

### Data and integrations
- Form providers.
- Booking API/backend.
- Email/SMS providers.
- Database/storage.
- Analytics.
- Maps/embeds/social links.

### Dependencies
- Framework packages.
- UI libraries.
- Form/validation packages.
- Auth/security packages.
- Build/deploy packages.
- Suspicious/dead dependencies.

## Output format

```markdown
# Component Inventory

## Project Facts
| Area | Finding |
|---|---|
| Repo type | |
| Framework | |
| Package manager | |
| Build command | |
| Start/preview command | |
| Deployment target | |

## Route Inventory
| Route | Type | Source file(s) | Production risk |
|---|---|---|---|

## Component Inventory
| Component | Purpose | Used by | Risk/Notes |
|---|---|---|---|

## Form/API Inventory
| Surface | Frontend location | Backend/provider | Status/Risk |
|---|---|---|---|

## Dependency Notes
| Dependency | Purpose | Risk/Action |
|---|---|---|

## Unknowns
- [unknown + how to verify]
```
