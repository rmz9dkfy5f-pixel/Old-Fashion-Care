---
name: performance-budget-pass
description: Audit frontend performance, asset weight, image optimization, fonts, render-blocking resources, caching, and Core Web Vitals risk before launch.
effort: high
---

# Performance Budget Pass

## Purpose
Identify performance risks that can hurt user experience, SEO, lead conversion, or mobile usability.

## Non-negotiable rules
- Do not optimize blindly before measuring or inspecting evidence.
- Do not remove features without confirming business impact.
- Do not trade accessibility or clarity for speed.
- Treat mobile performance as the priority for local-service websites.

## Inspect
- Build output size.
- JavaScript bundles and route chunks.
- CSS size and unused global styles.
- Image dimensions, formats, compression, lazy loading.
- Font loading strategy.
- Third-party scripts.
- Caching/compression configuration.
- Largest above-the-fold content.
- Layout shift risks.

## Performance budget targets
Use these as default targets unless project-specific goals exist:

| Area | Target |
|---|---|
| Critical page JS | As small as practical; flag obvious bloat |
| Images | Correct dimensions, compressed, modern formats when suitable |
| Fonts | Limited families/weights, no unnecessary blocking |
| Third-party scripts | Only business-critical scripts before launch |
| Mobile UX | No heavy assets blocking first interaction |

## Audit checklist

### Images
- No oversized source images shipped to small viewports.
- Hero images have responsive sizing.
- Below-the-fold images lazy-load where appropriate.
- Decorative images do not load unnecessarily.
- File formats are appropriate.

### JavaScript/CSS
- Dead dependencies are flagged.
- Large bundles have an explanation.
- CSS does not hide critical content until JS loads.
- Animations do not cause jank.

### Fonts
- Font files are not excessive.
- Fallback fonts avoid major layout shift.
- Only needed weights/styles are loaded.

### Network and caching
- Compression is enabled or planned.
- Static assets have cache strategy.
- HTML/API cache behavior is not unsafe.

## Output format

```markdown
# Performance Budget Report

## Verdict
[Pass / Fail / Conditional]

## Evidence
| Check | Result | Evidence |
|---|---|---|

## Performance Risks
| Severity | Issue | Impact | Fix |
|---|---|---|---|

## Asset Findings
| Asset/Area | Finding | Recommendation |
|---|---|---|

## Recommended Fix Order
1. 
2. 
3. 

## Verification Steps
- [ ] Production build inspected
- [ ] Mobile route smoke-tested
- [ ] Image sizing checked
- [ ] Third-party scripts reviewed
```
