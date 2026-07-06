---
name: responsive-browser-matrix
description: Audit responsive design and browser/device readiness for a production website. Use before launch or after layout, navigation, form, or CSS changes.
effort: high
---

# Responsive Browser Matrix

## Purpose
Confirm the site works across realistic devices, screen sizes, input methods, and browser engines.

## Non-negotiable rules
- Do not assume desktop success means mobile success.
- Do not rely only on one browser engine.
- Do not make visual changes during the audit unless explicitly instructed.
- Treat broken navigation, unreadable content, blocked CTAs, or unusable forms on mobile as launch blockers.

## Required viewport matrix
Check these viewport classes at minimum:

| Class | Width target | What to verify |
|---|---:|---|
| Small mobile | 360–390 px | Navigation, hero, CTA, forms, tap targets |
| Large mobile | 414–430 px | Layout, sticky elements, booking/contact flow |
| Tablet | 768–834 px | Nav behavior, cards, grids, forms |
| Small laptop | 1280–1440 px | Above-the-fold layout, spacing, CTAs |
| Desktop | 1920 px | Max-width, whitespace, image scaling |

## Browser coverage
Where possible, check:
- Chromium-based browser.
- Safari/WebKit behavior.
- Firefox behavior.
- iOS Safari if the project targets mobile customers.

## Audit checklist

### Navigation
- Menu opens/closes reliably.
- Current page state is clear.
- Header does not hide content.
- Sticky/fixed elements do not block inputs or CTAs.

### Layout
- No horizontal scrolling unless intentional.
- Cards/grids collapse correctly.
- Images do not stretch, crop badly, or overflow.
- Text remains readable at mobile widths.
- Spacing is consistent.

### Forms and booking
- Inputs are reachable and tappable.
- Keyboard does not cover critical controls without recovery.
- Error messages are visible and understandable.
- Success state is visible.
- Date/time selectors work on mobile.

### Touch targets
- Important buttons/links are not too small.
- Adjacent tap targets have enough spacing.
- Phone/email/location links work where expected.

### Cross-browser risks
- CSS features have fallbacks if needed.
- Animations do not break layout.
- Font rendering does not cause major shift.
- Date/time/input controls behave acceptably.

## Output format

```markdown
# Responsive Browser Matrix Report

## Verdict
[Pass / Fail / Conditional]

## Device/Viewport Results
| Viewport | Result | Issues | Evidence |
|---|---|---|---|

## Browser Results
| Browser/Engine | Result | Issues |
|---|---|---|

## Launch Blockers
| Severity | Issue | Affected viewport/browser | Recommended Fix |
|---|---|---|---|

## Recommended Fix Order
1. 
2. 
3. 
```
