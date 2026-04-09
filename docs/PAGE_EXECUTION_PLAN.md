# GU TECH Website Execution Plan

This plan treats the website as the production university site, not a challenge demo.

## Global standards
- Keep hero headlines short (6-12 words) and outcome-focused.
- Keep first paragraph under 28 words where possible.
- Every page must have one primary CTA and one secondary CTA.
- Use real media where available; otherwise keep a clean placeholder with a clear label.
- Keep copy institutional and factual; avoid competition/proposal wording.

## Page-by-page structure

### Home (`/`)
- Hero: institutional identity, admissions CTA, program CTA, key metrics.
- Why GU TECH: 3 institutional differentiators.
- Programs preview: all academic tracks.
- Faculty preview: featured faculty cards.
- News preview: latest updates.
- Final CTA block: apply, contact, WhatsApp.

### About (`/about`)
- Hero: mission and institutional direction.
- Institutional framing: positioning and governance tone.
- Design principles: clarity, responsiveness, accessibility.
- Closing statement: trust and long-term growth.

### Programs hub (`/programs`)
- Hero: programs overview and navigation intent.
- Program cards: all undergraduate + graduate tracks.
- Card content: category, one-line summary, page CTA.

### Program detail pages
- Pages:
  - `/programs/bs-cs`
  - `/programs/bba`
  - `/programs/ms-ibf`
  - `/programs/ms-ds`
  - `/programs/ms-ai`
- Structure:
  - Hero with facts and admissions actions.
  - Overview section.
  - 3 structured detail blocks.
  - Side panel with image and next links.

### Departments hub (`/departments`)
- Hero: academic and strategic units.
- Department/resource cards for all five units.

### Department detail pages
- Pages:
  - `/departments/cs`
  - `/departments/management-sciences`
  - `/departments/design-thinking`
  - `/departments/continuing-education`
  - `/departments/iic`
- Structure mirrors program detail pages for consistency.

### Admissions (`/admissions`)
- Hero: application journey.
- Process section: step-by-step flow.
- Fees and support section: fee details and scholarship messaging.
- Final action section: apply + WhatsApp + inquiry form path.

### Faculty (`/faculty`)
- Hero: faculty credibility.
- Directory grid with available photos and fallback placeholders.

### Executive Learning (`/executive-learning`)
- Hero: professional learning value.
- Track cards for short-format offerings.
- CTA section linking to continuing education and contact.

### News (`/news`)
- Hero: institutional updates.
- News grid with category/date/channel.
- Social section with official links.

### Contact (`/contact`)
- Hero: support access.
- Contact cards: admissions, info, WhatsApp, address.
- Working inquiry form posting to `/api/inquiry`.

## Integration plan
- Chatbot:
  - `/api/chat` uses Gemini API when configured.
  - Chat UI is free-form, not fixed FAQ buttons.
  - Lead extraction stores name/email/program when provided.
- Inquiry form:
  - POST to `/api/inquiry` with server validation.
  - Success/error states shown in-page.
- SEO:
  - Metadata for all pages.
  - `robots.ts` and `sitemap.ts`.

## QA checklist per page
- Copy reads as production university content.
- Hero title wraps cleanly on mobile.
- Primary CTA visible above the fold.
- No broken images or missing alt text.
- All links route correctly.
- No lint/build regressions.
