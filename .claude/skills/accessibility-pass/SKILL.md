---
name: accessibility-pass
description: Audit and improve website accessibility readiness for keyboard use, forms, semantic HTML, ARIA, contrast, focus states, and screen-reader behavior.
effort: high
---

# Accessibility Pass

## Purpose
Find accessibility problems that can block real users, reduce quality, or create production risk.

## Non-negotiable rules
- Prefer semantic HTML over ARIA workarounds.
- Do not add ARIA unless it improves actual assistive technology behavior.
- Do not remove visible focus indicators.
- Do not rely only on automated tools.
- Treat forms, navigation, modals, and booking/admin flows as priority surfaces.

## Audit priority
Check in this order:

1. Critical user flows: booking, contact, lead capture, admin login.
2. Navigation and menus.
3. Forms and validation messages.
4. Buttons, links, and CTAs.
5. Headings and page structure.
6. Images/icons/media.
7. Dynamic states: loading, error, success, disabled.
8. Color contrast and focus visibility.

## Manual checks

### Keyboard
- Tab order follows visual/logical order.
- Every interactive control is reachable.
- Focus indicator is visible.
- Escape closes menus/modals where expected.
- Enter/Space activate controls properly.

### Forms
- Every input has an associated label.
- Required fields are programmatically and visually clear.
- Error messages are tied to fields.
- Success/failure states are announced or clearly visible.
- Inputs use helpful autocomplete attributes where appropriate.

### Semantics
- One clear page-level H1.
- Headings do not skip illogically.
- Buttons are buttons; links are links.
- Lists, nav, main, footer, sections are used appropriately.

### Images and icons
- Meaningful images have useful alt text.
- Decorative images are ignored by assistive tech.
- Icon-only buttons have accessible names.

### Dynamic UI
- Menus/modals expose expanded/open state correctly.
- Background content is not focusable behind modal dialogs.
- Loading and errors are not color-only.

## Automated checks
Use automated tools only as supporting evidence. Automated checks do not prove accessibility is complete.

## Output format

```markdown
# Accessibility Pass Report

## Verdict
[Pass / Fail / Conditional]

## Critical Issues
| Severity | Issue | Location | Impact | Fix |
|---|---|---|---|---|

## Manual Check Results
| Area | Status | Notes |
|---|---|---|
| Keyboard navigation | Pass/Fail/Unknown | |
| Focus visibility | Pass/Fail/Unknown | |
| Forms/validation | Pass/Fail/Unknown | |
| Semantic structure | Pass/Fail/Unknown | |
| Images/icons | Pass/Fail/Unknown | |
| Dynamic states | Pass/Fail/Unknown | |
| Contrast | Pass/Fail/Unknown | |

## Recommended Fix Order
1. 
2. 
3. 

## Verification Steps
- [ ] Keyboard-only pass completed
- [ ] Form errors tested
- [ ] Mobile interaction checked
- [ ] Automated scan reviewed
```
