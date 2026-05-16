# OpenWays Mobile Site Audit for Claude

Date: 2026-05-14
Reviewer: Codex
Scope: OpenWays static website, especially mobile behavior after the 2026-05-13 changes.

## Executive Summary

The site is not globally broken on mobile. Core pages mostly avoid true horizontal overflow at 390px width. The bigger issue is that the mobile experience is fragile because layout rules are split between `style.css` and large amounts of inline CSS across individual HTML files.

The current mobile problems fall into three groups:

1. CSS responsive rules are being overridden by later rules or inline styles.
2. Desktop visual patterns are being compressed into mobile without enough simplification.
3. The static architecture now has too much duplicated page-level markup, making global fixes risky.

Claude should treat this as a mobile foundation pass, not a one-page patch.

## Tested Pages

Playwright was used locally at 390px mobile and 1440px desktop on these pages:

- `index.html`
- `packs.html`
- `zh.html`
- `zh-packs.html`
- `pack-restaurant.html`
- `zh-pack-restaurant.html`
- `book.html`
- `updates.html`
- `custom.html`
- `contact.html`

Result: most tested pages had no body-level horizontal overflow at 390px. However, several pages have visual overflow, cramped first screens, or broken mobile intent.

## Priority Findings

### P1 — `zh-packs.html` Mobile Hero Fix Does Not Actually Win

Evidence:

- `style.css` has a mobile rule intended to hide the right-side preview grid:
  - `style.css:1516`
  - `.packs-hero-grid > div:last-child { display: none; }`
- But `zh-packs.html` defines the preview grid inline:
  - `zh-packs.html:250`
  - `style="display:grid; grid-template-columns:1fr 1fr; ..."`
  - `zh-packs.html:256`
  - right-side grid also has inline `display:grid`.

Impact:

On mobile, the hero still shows many small pack preview images. It makes the first screen crowded and pushes the category navigation down. The page looks more like a shrunken desktop layout than a mobile sales page.

Recommended fix:

- Move the hero grid and preview grid styles into reusable classes.
- Remove inline `display:grid` from the right preview grid or override with a more specific mobile class.
- On mobile, either hide the preview grid entirely or show only a compact 2x3 preview below the intro.

### P1 — Mobile Hero Typography Rules Conflict

Evidence:

- `style.css:1503` sets mobile `.hero-title` to `var(--text-3xl)` at `max-width:480px`.
- Later, `style.css:1733` sets `.hero-title` back to `var(--text-4xl)` at `max-width:768px`.
- Because the later rule wins, the smaller phone rule is effectively cancelled.

Impact:

Hero titles are too large on small phones. This is visible on `index.html`, `zh.html`, `updates.html`, and `contact.html`.

Recommended fix:

- Consolidate all `.hero-title` responsive rules into one section.
- Ensure the cascade goes from broad to narrow:
  - desktop default
  - `max-width:1024px`
  - `max-width:768px`
  - `max-width:480px`
- Do not redefine `.hero-title` later in the file unless it is scoped to a specific page/component.

### P1 — Inline Hero Font Size Bypasses Responsive System

Evidence:

- `index.html:104` uses inline:
  - `font-size:clamp(3.5rem,8vw,6rem)`
- This competes with `.hero-title` mobile CSS.

Impact:

The homepage mobile hero is visually strong but oversized. The headline dominates the screen, and supporting text becomes low-contrast and secondary to the point of being easy to miss.

Recommended fix:

- Replace inline hero heading styles with a page-specific class such as `.home-hero-title`.
- Add mobile-specific sizes in CSS.
- For 390px phones, target a headline that fits without feeling compressed.

### P1 — Architecture Risk: Too Much Duplicated Static Markup

Evidence:

- `style.css` is 2248 lines and contains repeated component definitions and later overrides.
- Active root HTML files: roughly 90+.
- Nav, footer, mobile menu script, FAQ script, product cards, and purchase blocks are copied across many pages.
- Many pages include significant inline CSS.

Impact:

Global edits are easy to miss or override. Yesterday's footer changes and mobile fixes are exactly the kind of work that becomes risky under this structure.

Recommended fix:

Short term:

- Add a `mobile-fixes` section at the end of `style.css` with intentionally high-specificity but clean rules.
- Convert the most repeated inline patterns into classes before changing behavior.

Medium term:

- Generate pages from templates, or at minimum centralize:
  - nav
  - footer
  - product page purchase card
  - related pack cards
  - category nav
  - mobile scripts

## P2 Findings

### P2 — `packs.html` Search Placeholder Is Too Long on Mobile

Evidence:

- `packs.html:359`
- Placeholder: `e.g. salon, cafe, solar, cleaning, accounting…`

Impact:

At 390px, placeholder text is visibly truncated. It looks like a UI bug in the search input.

Recommended fix:

- Use a shorter mobile placeholder, for example:
  - `Search your industry...`
  - `e.g. cafe, salon, solar`
- Consider setting the placeholder in JS based on viewport or using a shorter universal placeholder.

### P2 — `book.html` Preview Strip Feels Cut Off on Mobile

Evidence:

- `book.html:44` defines `.preview-pages` as horizontal scrolling.
- `book.html:261` renders five preview cards in a row.
- `book.html:284` tells users to scroll to see all pages.

Impact:

On mobile, only the first page and part of the second page are visible. This is technically intentional horizontal scroll, but visually it feels like content is clipped.

Recommended fix:

- For mobile, change to one of:
  - 1-card carousel with dots or clear peeking.
  - vertical stack of first two pages plus "View more".
  - grid of two smaller thumbnails.

### P2 — Product Schema Currency Inconsistency

Evidence:

- English product pages often display `A$49`, but JSON-LD says USD.
- Example:
  - `pack-restaurant.html:47`
  - `"priceCurrency": "USD"`
- Chinese page uses AUD:
  - `zh-pack-restaurant.html:47`
  - `"priceCurrency": "AUD"`

Impact:

This creates SEO and trust inconsistency. Users see AUD, structured data says USD.

Recommended fix:

- Decide whether English pages sell in AUD or USD.
- If the visible price is `A$49`, set JSON-LD to `AUD`.
- Also clean visible labels that still say `$49` without `A`.

### P2 — Extensionless Guide Links Depend on Vercel Clean URLs

Evidence:

- `vercel.json` has `"cleanUrls": true`, so this works on Vercel.
- Local href checker flags these as missing because links omit `.html`:
  - `/guide/restaurant-google-review-australia`
  - `/guide/restaurant-google-review-australia-zh`

Impact:

Probably fine in production, but local static testing with `python3 -m http.server` will show these as missing.

Recommended fix:

- No urgent production fix if Vercel clean URLs are intentional.
- For local test friendliness, either keep as-is and document it, or use `.html` links and canonical clean URLs.

### P2 — `.OLD.html` Files Are Still in Deploy Root

Evidence:

- Many `*.OLD.html` files are present in the root.

Impact:

They may be publicly accessible on Vercel, carrying old copy, old links, and old SEO signals.

Recommended fix:

- Move old pages out of deploy root into `reference/archive/legacy-pages/`.
- Or add Vercel routing/headers to prevent indexing and direct access.

### P2 — Footer Year Is Still 2025

Evidence:

- Example: `index.html:765`
- `© 2025 OpenWays. All rights reserved.`

Impact:

Minor trust issue. It makes the site look stale.

Recommended fix:

- Update all active pages to 2026.
- Prefer a template or small shared script/data source so it does not need repeated manual changes.

## P3 Visual / UX Notes

### Homepage Mobile

Observed:

- The first screen is visually strong.
- But the headline is too dominant.
- The feature lines under the headline are low contrast, almost like disabled text.
- CTA buttons are clear and full-width, which is good.

Recommendation:

- Reduce mobile hero title slightly.
- Increase contrast of the three value lines.
- Consider shortening the vertical hero height so the next section appears sooner.

### Chinese Homepage Mobile

Observed:

- `zh.html` headline is powerful but very large.
- CTA priority is different from English page: Chinese emphasizes free AI consultation and market-entry consulting more than pack browsing.

Recommendation:

- This may be intentional, but decide whether Chinese homepage should sell packs first or consulting first.
- If consulting is the priority, make that a deliberate funnel decision and reflect it consistently across nav and page order.

### `updates.html` Mobile

Observed:

- Looks clean, but the opening paragraph is long for mobile.
- CTA appears below a large block of copy.

Recommendation:

- Mobile hero should reduce paragraph length or split into two shorter blocks.
- Keep price/free-trial line closer to CTA.

### `contact.html` Mobile

Observed:

- Visually clean.
- H1 is large but acceptable.
- Decorative absolute element overflows visually but does not create body-level horizontal scroll.

Recommendation:

- Hide or reduce decorative absolute elements on mobile.
- Keep the first contact card tighter so users reach the form faster.

## Suggested Fix Order

1. Consolidate responsive CSS conflicts in `style.css`.
2. Remove or override critical inline styles on:
   - `index.html` hero title
   - `zh-packs.html` hero grid
   - `packs.html` search hero
   - `book.html` preview strip
3. Add a clear final mobile overrides section for high-risk pages.
4. Fix JSON-LD currency and visible `$49` / `A$49` inconsistencies.
5. Move `.OLD.html` files out of deploy root or block them.
6. Update footer year.
7. Re-run mobile screenshots on at least:
   - `index.html`
   - `zh.html`
   - `packs.html`
   - `zh-packs.html`
   - `pack-restaurant.html`
   - `zh-pack-restaurant.html`
   - `book.html`
   - `updates.html`

## Implementation Guardrails for Claude

- Do not do a broad visual redesign.
- Do not change product copy unless needed for layout.
- Do not remove pages.
- Do not touch Gumroad links except if fixing obvious currency/label mismatch.
- Prefer CSS class extraction over adding more inline styles.
- Avoid fixing one page by making a new special case if the same issue exists across many pages.
- After changes, verify mobile at 390px and 430px, not only desktop.

## Bottom Line

The site is close, but the mobile layer needs discipline. The biggest improvement will come from reducing inline layout rules and making mobile typography/layout rules predictable. Once that foundation is cleaned up, the current design can work well without a full rebuild.
