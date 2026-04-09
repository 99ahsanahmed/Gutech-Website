# GU TECH Master Execution Plan (Competition Delivery)

## 1) Objective
Build a production-grade university website that is clearly stronger than the currently deployed site in:
- Visual quality and trust
- Information clarity
- UX across mobile and desktop
- Feature depth (chatbot, inquiry flow, social/news readiness, SEO)

## 2) Benchmark Baseline (Current Live Site)
Observed live routes include:
- `/about-us`
- `/bachelor-of-business-administration`
- `/bs-computer-science`
- `/ms-islamic-banking-and-finance`
- `/department-of-computer-science`
- `/department-of-management-sciences`
- `/innovation-and-incubation-centre`
- `/admission-process`
- `/gutech-fee-structure`
- `/scholarships-and-financial-aid`
- `/gutech-standard-admission-test`
- `/our-faculty`
- `/executive-learning`
- `/bootcamps`
- `/news-and-updates`
- `/campus-tour`
- `/contact-us`

Our build must exceed this with better IA, stronger copy hierarchy, improved interactions, and cleaner conversion flows.

## 3) Execution Rules (Non-Negotiable)
- Complete one phase at a time.
- No phase is marked complete until QA checks pass.
- Every page has:
  - One primary CTA
  - One secondary CTA
  - Mobile-safe hero
  - Real or labeled media block
- Zero broken links, zero console errors, zero lint/build errors.

## 4) Phase Plan

## Phase A: Foundation and Design System
Scope:
- Finalize typography scale, spacing scale, card system, hero system, CTA hierarchy, animation timing.
- Lock global tokens and interaction behavior.

Deliverables:
- Stable `globals.css` type scale and spacing rhythm.
- Unified hero behavior across all routes.
- Consistent card and section spacing.

Acceptance criteria:
- Hero title never overflows on common mobile widths.
- Visual rhythm consistent across pages.
- Animation is subtle and does not block readability.

## Phase B: Information Architecture and Navigation
Scope:
- Finalize top nav, dropdown grouping, mobile menu sequence, footer IA.
- Ensure all legacy-live-site expectations are mapped in new structure.

Deliverables:
- Final nav labels and route grouping.
- Footer with complete social and critical actions.
- Clear route parity map (live vs new).

Acceptance criteria:
- User can reach any major section in <=2 clicks.
- Mobile menu readable and predictable.

## Phase C: Core Page Quality Pass (Page by Page)
Execution order:
1. Home
2. About
3. Programs Hub
4. BS CS
5. BBA
6. MS IBF
7. MS DS
8. MS AI
9. Departments Hub
10. Dept CS
11. Dept Management Sciences
12. Design Thinking
13. Continuing Education
14. I.I.C
15. Admissions
16. Faculty
17. Executive Learning
18. News
19. Contact

Per-page acceptance checklist:
- Hero:
  - Title 6-12 words
  - Description concise and factual
  - CTA pair present
- Content:
  - Sections are meaningful and non-repetitive
  - Copy is institutional (not proposal/challenge language)
- Media:
  - Real image where available
  - Placeholder only when unavoidable
- Conversion:
  - Relevant action near top and bottom of page

## Phase D: Feature and Integration Pass
Scope:
- Chatbot real API flow
- Inquiry form reliability and validation
- Lead capture behavior
- Social/news linkage quality

Deliverables:
- `/api/chat` behavior with graceful failure
- `/api/inquiry` validated server flow
- Contact + admissions + WhatsApp handoff consistency

Acceptance criteria:
- Chatbot returns real model-generated responses when key exists.
- Fallback messaging is helpful and actionable.
- Inquiry form prevents invalid submits and confirms success.

## Phase E: Content Depth and Trust Signals
Scope:
- Strengthen credibility blocks: faculty details, admissions clarity, fee/scholarship visibility, institutional facts.
- Remove filler language and improve specificity.

Deliverables:
- Higher-quality program and department narratives.
- Improved trust microcopy across admissions/contact/news.

Acceptance criteria:
- No generic filler lines.
- Each page has unique value and purpose.

## Phase F: Performance, SEO, and Production Readiness
Scope:
- Metadata consistency
- Robots/sitemap validation
- Image weight and loading behavior
- Build reliability

Deliverables:
- Route metadata pass
- Working robots and sitemap
- Optimized media usage

Acceptance criteria:
- `npm run lint` passes
- `npm run build` passes
- No missing metadata on core routes

## Phase G: Final QA and Submission Pack
Scope:
- Full-device visual pass
- Route-by-route functional pass
- Final bug sweep

Deliverables:
- Final QA checklist marked done
- Final changelog summary
- Submission-ready confidence check

Acceptance criteria:
- No high-severity visual/UX defects
- No broken critical flows

## 5) QA Matrix (Run After Every Major Batch)
- Layout:
  - Mobile (360x800), tablet, desktop
- Typography:
  - Hero/section hierarchy consistent
- Navigation:
  - Desktop + mobile menu states
- Forms:
  - Inquiry success/failure path
- Chatbot:
  - With and without API key
- Links:
  - Internal and external integrity
- Technical:
  - Lint/build clean

## 6) Working Backlog (Tracked During Execution)
- Improve hero art direction per route (not one-image repetition everywhere).
- Add at least 1 media asset per major top-level page.
- Tighten faculty card readability on narrow mobile.
- Improve news cards with richer metadata.
- Add campus-tour style section if needed for parity/advantage.

## 7) Execution Mode
We will now execute strictly by phase and page order above, and only move forward after each unit meets acceptance criteria.
