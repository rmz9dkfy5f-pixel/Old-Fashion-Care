# v1.2.0 - 2026-05-04 - Regina

## SEO Deploy — Search, Sharing, Analytics, and Netlify Readiness

This release strengthens the public Old Fashion Care website for production discovery and deployment. It adds social preview metadata, crawl discovery files, analytics, favicon wiring, and Netlify hosting configuration.

---

## What's Included

### SEO & Social Sharing
- Open Graph metadata across public pages
- Twitter/X summary card metadata across public pages
- Page-specific titles, descriptions, URLs, and shared preview image references
- Robots indexing directives on public pages

### Analytics
- Plausible analytics script added for `oldfashioncare.com`
- Content security policy updated to allow Plausible script and connection endpoints

### Search Discovery
- `robots.txt` allowing crawlers and pointing to the sitemap
- `sitemap.xml` listing the public site pages with priorities and change frequency

### Deployment
- `netlify.toml` with security headers, cache headers, CSP, and `/index.html` redirect
- Long-lived caching for CSS, JavaScript, and images
- Hourly revalidation for HTML pages

### Branding
- SVG favicon added and referenced from public pages
- Apple touch icon references added for mobile home screen contexts

---

# v1.0.0 - 2026-04-30 - Regina

## 🎉 Initial Release — Old Fashion Care Website

The first public release of the Old Fashion Care website. Built for Regina Booker and Old Fashion Care, LLC — an in-home care coordination service serving Raleigh and Wake County, NC.

---

## What's Included

### Pages
- **Home** — Hero section, value proposition, trust signals, and primary call-to-action
- **Services** — Five care categories: personal care, home support, meal preparation, grooming, and companionship
- **Meet Regina** — Founder bio with credibility signals and structured Person schema
- **How It Works** — Three-step process from initial call to first caregiver visit
- **Questions** — Comprehensive FAQ covering services, licensing, costs, and capabilities
- **Contact** — Lead generation form with phone-first option for urgent cases

### Design & UX
- Mobile-first responsive layout with hamburger navigation
- Custom design system — charcoal, coral, amber, and cream palette
- Typography — Fraunces serif (headings) + Plus Jakarta Sans (body)
- FAQ accordion with single-open behaviour per category
- Active link highlighting across all pages

### Accessibility
- Semantic HTML throughout
- ARIA labels and `aria-expanded` states on interactive elements
- Touch-friendly form inputs and navigation

### SEO & Structured Data
- `LocalBusiness` schema for search visibility
- `FAQPage` schema for rich snippet eligibility
- `Person` schema for founder credibility
- Canonical URLs and meta descriptions on all pages

### Technical
- Pure HTML, CSS, and JavaScript — zero frameworks, zero dependencies
- 28.8 KB CSS design system with custom properties
- 3 KB vanilla JS for navigation, mobile menu, and FAQ interactions
- Fast-loading static assets with no build step required
