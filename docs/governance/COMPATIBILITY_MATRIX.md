# Compatibility Matrix

Use this for web, desktop, mobile, CLI, game, server, and automation projects.

## Platforms

| Platform | Required? | Status | Notes |
|---|---:|---|---|
| Windows | TBD | Unknown | |
| macOS | TBD | Unknown | |
| Linux | TBD | Unknown | |
| iOS | TBD | Unknown | |
| Android | TBD | Unknown | |
| Web browsers | TBD | Unknown | |

## Screen / Device Coverage

| Class | Required? | Status | Notes |
|---|---:|---|---|
| Mobile (360-430px) | Yes | Pass | Tested at 360/390/414/430px via Playwright, 2026-07-19 — zero horizontal overflow, nav correctly in hamburger mode |
| Tablet (768-834px) | Yes | Pass | Tested at 768/834px — zero overflow, nav correctly still in hamburger mode (matches the 900px CSS breakpoint) |
| Laptop (1280-1440px) | Yes | Pass | Tested at 1280/1440px — zero overflow, nav correctly switches to full inline links |
| Desktop (1920px) | Yes | Pass | Tested at 1920px — zero overflow, no excess whitespace/stretching |
| Ultrawide / high DPI | No | Unknown | Not tested; low priority for this project's traffic profile |

## Browser Coverage

| Browser | Required? | Status | Notes |
|---|---:|---|---|
| Chrome / Chromium | Yes | Pass | Full 9-viewport matrix tested via Playwright, 2026-07-19 |
| Safari | Yes | **Unknown** | Not tested — only a Chromium binary is available in this environment. Recommend a real-device iOS Safari check before treating mobile support as fully verified, given this site's audience |
| Firefox | No | Unknown | Not tested — same environment limitation |
| Edge | No | Unknown | Chromium-based; likely behaves like Chrome but not independently verified |

## Accessibility / Usability

- Keyboard navigation: Pass — hamburger and FAQ accordion buttons are real `<button>` elements,
  reachable/activatable by keyboard; Escape now closes the mobile nav and returns focus to the
  hamburger (added 2026-07-19)
- Contrast: Pass as of 2026-07-19 — `.nav__cta`, `.section--coral`, and `.phone-strip` migrated
  from `--coral` (~3.87:1, failed WCAG AA) to `--coral-fill` (~4.66:1)
- Screen reader basics: Pass — form fields correctly labeled, required fields marked both visually
  and via `aria-label`, form success/error states use `role="alert" aria-live`, decorative icons
  correctly `aria-hidden`
- Reduced motion: Not tested — the site's `.reveal` scroll-animation and hamburger icon transform
  do not currently check `prefers-reduced-motion`; low-impact (subtle fade/transform, not a
  vestibular-trigger animation), but a real gap if strict compliance is required
- Responsive layout: Pass — see Screen/Device Coverage above; mobile nav hamburger touch target
  enlarged to 44×44px (2026-07-19, was 38×31px)

## Notes

Mark unsupported platforms explicitly. Do not imply universal compatibility unless tested.
