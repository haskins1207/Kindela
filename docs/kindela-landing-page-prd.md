# Product Requirements Document — Kindela Marketing Landing Page

**Document type:** B2B SaaS Landing Page PRD
**Product:** Kindela — the operating system for mission-driven nonprofits
**Tagline:** *Every donation, grant, and good — connected and visible.*
**Date:** June 13, 2026
**Owner:** Growth / Web
**Status:** Draft for development handoff

---

## Executive Overview

**Product:** Kindela is an all-in-one platform that unifies donor and grant tracking (inbound *and* outbound), donated-goods inventory, fund accounting, and volunteer management into a single source of truth — then turns that truth outward through a public transparency layer that lets donors and the public verify exactly where money and goods go.

**Purpose of this page:** Convert overwhelmed nonprofit leaders — from small thrift-store operations to mid-and-large children's-mission organizations — by naming their daily pain with precision, proving Kindela consolidates the five disconnected tools they currently duct-tape together, and demonstrating tangible time-and-money savings. The page sells *relief and trust*, not features.

**Primary audience (the avatar):** "Kari Whitfield" — Executive Director / President of a children-focused nonprofit with a resale program. Mission-driven, budget-sensitive, risk-averse, chronically over-committed, and quietly afraid of being exposed as disorganized in front of her board or funders. She decides at 11 p.m. at the kitchen table, trusts peer EDs far more than sales reps, and needs to believe the product was built for *someone exactly like her*.

**The conversion principle:** Kari is **Problem Aware**, not Product Aware. The page must travel her diary arc — from disconnection (chaos, six systems, the question she can't answer at the gala) to connection and visibility (one operating system, clean books, "anyone can verify it"). Every section moves her one step along that arc.

---

## Brand Anchors (from the Kindela Brand & Design System)

- **Gradient (brand identity):** `linear-gradient(135deg, #141B4D 0%, #243A8E 24%, #1E6FB0 46%, #2A9D8F 64%, #4FB59A 80%, #F2B14C 100%)` — deep indigo through civic teal into beacon amber, representing many disconnected inputs resolving into one connected view. Used on hero, primary CTAs, the logo mark, and brand moments.
- **Primary colors:** Deep Indigo `#141B4D` (Trust), Civic Blue `#243A8E` (Authority), Signal Blue `#1E6FB0` (Connection), Kindela Teal `#2A9D8F` (Clarity), Bright Teal `#4FB59A` (Vitality), Beacon Amber `#F2B14C` (Optimism).
- **Neutrals:** Dark Blue text `#13293D`, Medium Gray `#5A6B7B`, Light Gray bg `#F2F5F8`, White `#FFFFFF`, Black `#0A0E12`.
- **Functional:** Success `#2E9E5B`, Warning `#E8A317`, Error `#D64545`, Info `#2D7DD2`.
- **Type:** Inter (UI/body), Space Grotesk (headlines & brand moments).
- **Voice:** Warm, reassuring, quietly confident — a trusted peer who's been in the trenches, never a corporate rep. Empathy-first: name the pain, then resolve it.

---

## Page Architecture & UI Components

### 1. Navigation Bar

- **Position:** Fixed/sticky; transparent over the hero, solidifying to White with a hairline border after scroll.
- **Logo:** Left-aligned Kindela mark (the gradient connection mark + wordmark in Space Grotesk), clickable to home.
- **Primary links:** Platform, How It Works, Transparency, Pricing, Nonprofits We Serve.
- **Secondary actions:** "Request a Walkthrough" (primary CTA, gradient fill), "Sign In" (text link).
- **Behavior:** Desktop horizontal nav; mobile hamburger with slide-out drawer.
- **Specs:** Height 72px desktop / 60px mobile; max-width 1440px centered; z-index 1000.
- **Copy note:** "Demo" becomes "Walkthrough" — softer, lower-pressure language for a risk-averse, peer-trusting buyer.

### 2. Hero Section

- **Layout:** Two-column 60/40 — copy left, product visual right. Stacks at 1024px.
- **Pre-headline badge:** Pill-shaped, gradient-bordered, with a small light icon — *"Built for nonprofit resale teams — not retail, not enterprise."*
- **Headline (H1, 60–80 chars):** *"Stop running your mission on six systems that don't talk."* (Alternates for A/B in §Conversion.)
- **Subheadline (150–200 chars):** "Kindela unifies donors, grants, donated-goods inventory, accounting, and volunteers in one place — and shows the public exactly where every dollar and every coat goes."
- **Trust indicator bar:** 5–7 grayscale nonprofit/partner logos (hover to color) with the line *"Trusted by mission-driven resale teams."*
- **Dual CTA:**
  - Primary: "Request a Walkthrough" (gradient button).
  - Secondary: "See How It Works" (ghost/outline button → demo video §10).
  - Micro-copy: *"Free consultation • No credit card • Built-in nonprofit pricing."*
- **Visual:** The Kindela dashboard in context — the live "Good evening, Kari" view with count-up stat cards and the **Donation-to-Destination Tracer** animating (15–20s loop). Overlay UI chips show "May reconciliation balanced ✓" and "504 goods placed with children." Min 800×600px, retina-optimized, results trending up.
- **Specs:** Section min-height 90vh; background subtle gradient wash; CTA touch targets ≥48px.

### 3. Problem / Pain Point Section

- **Purpose:** Establish problem awareness in Kari's exact language — this is the diary's kitchen-table scene rendered as a section.
- **Headline (question format):** *"Still stitching together a POS, QuickBooks, a donor spreadsheet, a grants calendar, and a sign-up sheet?"*
- **3-column pain grid (line icons, 2px stroke, brand accent):**
  - **Column 1 — "Goods you can't trace."** Donated coats and sneakers vanish between the loading dock and the resale floor or partner org. *Stat: "In-kind gifts are among the most commonly under-documented nonprofit assets at audit." (cite IRS / state audit guidance)*
  - **Column 2 — "Reports that take all night."** Board decks and funder impact reports built by hand the night before, and they still don't look credible. *Stat: "Nonprofit leaders report administrative burden as a top driver of burnout." (cite sector workforce research)*
  - **Column 3 — "The question you can't answer."** When a donor asks 'where did my money go?', the honest answer is scattered across six tools. *Stat: "Donor trust is the leading predictor of repeat giving." (cite philanthropy research)*
- **Specs:** Contrasting slightly-darker section (Cloud → soft Indigo tint); padding 120px/80px; CSS Grid 3-col desktop / 1-col mobile; H2 36–40px, body 18px, stats 48px bold in Civic Blue.
- **Voice note:** Use visceral, validating language pulled from the avatar/diary ("the midnight reconciliation," "held together with spreadsheets and prayer") — but the *interface* voice stays calm; the emotion lives in the headline and body, not in error-message tone.

### 4. Solution Positioning Section

- **Purpose:** Position Kindela as the comprehensive answer — the moment the patchwork resolves into one connected system.
- **Headline:** *"One source of truth — and a window the whole community can see through."*
- **Solution narrative (3 short paragraphs):**
  1. *Bridge:* The problem was never that you weren't capable — it was that your tools never connected, so you carried the whole picture in your head, alone.
  2. *Approach:* Kindela connects every river — donations in, goods out, dollars tracked, hours logged — so entering something once means it's right everywhere.
  3. *Outcome:* Walk into the board meeting prepared. Hand a funder a clean report in seconds. Stop carrying the stress home.
- **Visual proof — Before/After transformation:** Left = cluttered "six tabs" manual workflow (muted, gray). Right = one calm Kindela dashboard (brand color, gradient accent). Animated fade between states on scroll.
- **UVP callout box (gradient border):** *"Unlike a retail POS or a generic CRM, Kindela understands in-kind donations, restricted vs. unrestricted funds, and routing goods to partner nonprofits — and proves it to the public."*
- **Specs:** Centered, max-width 1200px; visual 60% desktop / full mobile; fade-in on scroll; clean minimal background.

### 5. Features & Benefits Section

- **Structure:** Alternating left/right feature-benefit blocks, benefit-led copy, 100px between blocks, images 600×450px, stack at 768px, fade+slide on scroll.

- **Feature 1 — Donation-to-Destination Tracer** *(image right, text left)*
  - Benefit: "Every donated good traced from the loading dock to the resale floor or a partner nonprofit — with a verifiable audit trail. The one-eared rabbit went to a child on May 19, and you can prove it."
  - Metric callout: *"100% of goods accounted for."*

- **Feature 2 — Grants pipeline, inbound & outbound** *(text right, image left)*
  - Benefit: "A calm timeline of every grant you're chasing and every grant you're disbursing to on-the-ground partners. No deadline lunges at you from a calendar you forgot to check."
  - Metric callout: *"Never miss a renewal."*

- **Feature 3 — Donor tracking, tax-ready** *(image right, text left)*
  - Benefit: "Cash and in-kind gifts logged, acknowledged, and Form 990–ready automatically. Acknowledgment letters send themselves."
  - Metric callout: *"Audit-ready in one click."*

- **Feature 4 — Fund accounting that reconciles** *(text right, image left)*
  - Benefit: "Restricted vs. unrestricted, POS-to-bank reconciliation, board-deck exports. Your hands stop shaking under the table."
  - Metric callout: *"Books that balance."*

- **Feature 5 — Public Transparency layer** *(image right, text left)*
  - Benefit: "A live, embeddable report showing revenue raised, grants written, and goods placed with children. Everything connected — anyone can verify it."
  - Metric callout: *"Trust, made visible."*

- **Feature 6 — Volunteer management** *(text right, image left)*
  - Benefit: "Schedules, roles, and hours in one place — no more sticky notes or sign-up sheets."
  - Metric callout: *"Every hour, honored."*

### 6. Savings Calculator Section *(adapted from ROI Calculator)*

- **Purpose:** Tangible, personalized value — reframed for a budget-sensitive nonprofit. The hook is *"Stop paying for five tools."*
- **Headline:** *"See what you'd save by replacing your patchwork."*
- **Input fields:**
  - Current monthly software spend across tools (slider, $0–$800).
  - Staff/volunteer hours per week on manual data entry & reporting (slider, 0–40).
  - Number of paid staff touching the books (number input, 1–25).
  - Average loaded hourly cost of that staff time ($, default $35).
- **Calculation logic (illustrative):**
  ```javascript
  const calculateSavings = (monthlySpend, adminHours, staffCount, hourlyCost) => {
    // Kindela consolidates tools; assume ~55% reduction in tool spend
    const annualToolSavings = monthlySpend * 12 * 0.55;
    // ~60% of manual admin time recovered via single source of truth
    const recoveredHours = adminHours * 0.6 * 52;
    const annualTimeSavings = recoveredHours * hourlyCost;
    return {
      annualToolSavings,
      annualTimeSavings,
      recoveredHours,
      totalAnnualValue: annualToolSavings + annualTimeSavings,
    };
  };
  ```
- **Output:** Large headline figure (48–60px, Beacon Amber accent) = total annual value; breakdown of (1) tool-spend saved, (2) staff hours recovered, (3) dollar value of time. Bar visualization comparing "today" vs "with Kindela." Results animate on calculation.
- **CTA:** "Email me my savings summary" (lead capture — name, work email, org name, role).
- **Specs:** Centered, max-width 900px; card with subtle shadow + border; React component, real-time updates, input validation, sensible defaults; mobile inputs stack vertically.
- **Tone guard:** Frame as *opportunity recovered*, never pressure. No false scarcity — Kari distrusts hard sells.

### 7. Social Proof / Case Study Section

- **Purpose:** Credibility via peers — the single most powerful trigger for this avatar ("a trusted ED said it changed everything").
- **Primary case study (full-width):** A children's-mission resale nonprofit. Logo + context ("mid-size, ~$600K budget, one resale store, two partner orgs"). Three big results: *"5 tools → 1 platform | 9 hours/week saved | First clean audit in years."* Quote (2–3 sentences) from the ED with name, title, org. Optional photo. "Read the full story" link.
- **Supporting testimonials (3-col card grid, equal height):** Short quotes from EDs/board treasurers, name+title+org, small logo, a metric highlight (e.g., "Board meetings cut from 2 hrs → 40 min"). Carousel if >6.
- **Stats bar (4–5 aggregate metrics):** *"Hundreds of mission-driven teams • Thousands of goods traced • Hours given back every week • Audit-ready books."* (Use real numbers once available; avoid inflated claims — this audience punishes overselling.)
- **Specs:** Full-width tinted background; content max-width 1200px; SVG logos max-height 40px; 2-col tablet, 1-col mobile.

### 8. Pricing Section

- **Purpose:** Transparent, nonprofit-conscious tiers. Pricing transparency is itself a trust signal for this buyer.
- **Monthly/Annual toggle** with savings indicator; all tiers carry nonprofit-friendly framing.
- **Tier 1 — Starter (small thrift-store ops):** Clear low price point; core features (donor + in-kind tracking, basic inventory, single resale location, volunteer scheduling, public transparency widget); user limit stated; CTA "Start Free Trial."
- **Tier 2 — Growth (most popular, highlighted):** Badge "Most chosen by children's-mission orgs"; everything in Starter + inbound/outbound grants pipeline, full fund accounting & reconciliation, multi-location + partner-org routing, Form 990 exports; CTA "Start Free Trial" (primary).
- **Tier 3 — Network (larger orgs / multi-program):** "Contact us" pricing; everything in Growth + advanced reporting, multi-entity, dedicated onboarding & data migration, SLAs; CTA "Request a Walkthrough."
- **Comparison table:** Collapsible categories — Core, Inventory & Routing, Grants & Donors, Accounting & Compliance, Transparency, Support — with check/cross per tier.
- **FAQ micro-section (3–4):** "Can I change plans?" · "What's in the free trial?" · "Do you help migrate my old donor and inventory data?" · *"Do you offer additional nonprofit discounts?"* (directly answers an avatar question).
- **Trust line:** "No credit card required • Cancel anytime • We help you migrate your data."
- **Specs:** Max-width 1400px; equal-height cards ≥500px; toggle animates price; 3-col desktop / 3-col tablet (tighter) / stacked mobile; popular card elevated 5–10px with thicker gradient border; hover lift.

### 9. Integration & Security Section

- **Purpose:** Reassure the board treasurer and any technical/financial reviewer.
- **Integrations (left 50%):** Headline *"Works with the tools you already trust."* Grayscale→color logo grid (12–20): QuickBooks, accounting/payment processors (Stripe, PayPal, Square), email/marketing, e-sign (DocuSign), spreadsheets/import. "View all integrations" link.
- **Security & Compliance (right 50%):** Headline *"Your donors' data, protected."* Badges (SOC 2 Type II, GDPR, ISO 27001, CCPA — show only those genuinely held; do not fabricate). Bullets: 256-bit encryption, SSO/SAML, role-based access (board vs. staff vs. volunteer), regular audits. "View security documentation" link.
- **Specs:** Slight tint; 50/50 desktop → stacked mobile; logos max-height 50px SVG, gap 40px; badges max-height 80px; padding 100px.

### 10. Demo / Video Section

- **Purpose:** Low-pressure self-serve walkthrough for the ED who isn't ready to talk to a human at 11 p.m.
- **Headline:** *"See Kindela in action — in under four minutes."*
- **Video:** 16:9, max-width 900px centered; professional thumbnail of the dashboard with play overlay; 2–4 min tour following the three pains → three reliefs; captions/subtitles; autoplay off; lazy-loaded.
- **Context:** Brief description + timestamps (Donors, Grants, Tracer, Transparency). "Skip to a personalized walkthrough" link for the convinced.
- **Secondary CTA:** *"Ready to see it with your own data? Request a walkthrough."*

### 11. Final CTA Section

- **Purpose:** Strong, warm conversion push for scrollers who've completed the arc.
- **Headline:** *"Connect everything. Show everyone."*
- **Supporting text:** "Join the mission-driven teams using Kindela to prove their impact and give their time back to the children they serve. Start free — no credit card, and we'll help you move your data."
- **Dual CTAs:** Primary "Start Free Trial" (large gradient button, ≥60px height); Secondary "Request a Walkthrough" (ghost).
- **Trust elements:** "30-day trial • No credit card • Cancel anytime • We migrate your data."
- **Visual:** Full-width Kindela gradient background resolving into beacon amber (the page ends on a confident, connected note). Centered, max-width 800px text, 150px vertical padding, fade-in on scroll.

### 12. Footer

- **Structure:** 5-column, multi-group; dark Deep Indigo background for contrast.
- **Column 1 — Company:** Kindela logo, tagline ("Every donation, grant, and good — connected and visible."), social icons (LinkedIn, X, Facebook, YouTube), copyright.
- **Column 2 — Product:** Platform, Integrations, Pricing, Security, Changelog.
- **Column 3 — Resources:** Blog, Case Studies, Help Center, Migration Guide, Webinars.
- **Column 4 — Company:** About, Careers, Contact, Press Kit, Partners.
- **Column 5 — Legal:** Privacy Policy, Terms, Cookie Policy, GDPR, Acceptable Use.
- **Newsletter (in Column 1):** Email input + "Subscribe." Copy: *"Get nonprofit operations tips and product updates."*
- **Specs:** 5-col desktop / 2–3 tablet / 1-col mobile (accordion optional); padding 80px top / 40px bottom; 14px type; hover color change; social icons 24×24px.

---

## Visual Style Guide

### Color Palette

- **Primary brand:** Deep Indigo `#141B4D`, Civic Blue `#243A8E`, Signal Blue `#1E6FB0`, Kindela Teal `#2A9D8F`, Bright Teal `#4FB59A`, Beacon Amber `#F2B14C`.
- **Accent (CTAs/highlights):** the brand gradient; Beacon Amber `#F2B14C` for emphasis on dark.
- **Neutrals (light mode):** Background `#FFFFFF`, surface tint `#F2F5F8`, text primary `#13293D`, text secondary `#5A6B7B`, borders `#E4EAF0`.
- **Neutrals (dark mode):** Background `#0F1117`, text primary `#F5F5F5`, text secondary `#A0A0A0`, borders `#2A2A2A`.
- **Semantic:** Success `#2E9E5B`, Warning `#E8A317`, Error `#D64545`, Info `#2D7DD2`.

### Typography

- **Headings & brand moments:** Space Grotesk.
- **Body & UI:** Inter.
- **Mono (technical/code):** "SF Mono", Monaco, monospace.
- **Scale:** H1 48/36px wt700 lh1.2 · H2 36/28px wt700 lh1.3 · H3 28/24px wt600 lh1.4 · H4 22px wt600 lh1.4 · Body-Large 18px lh1.6 · Body 16px lh1.6 · Small 14px lh1.5 · Caption 12px lh1.4. *(Display 72px reserved for hero brand moment.)*

### Spacing System

- Base 8px. Scale: 8 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 100 / 120px.
- Section padding: 120px desktop / 80px tablet / 60px mobile.
- Component padding: Large 40px · Medium 24px · Small 16px.

### Component Styles

- **Primary button:** gradient fill, white text, radius 8px, padding 16×32px, 16px wt600; hover deepens toward Deep Indigo; active scale 0.98.
- **Secondary button:** transparent, 2px Teal border, Teal text; hover 10% Teal fill.
- **Ghost/text button:** transparent, Signal Blue text; hover underline.
- **Cards:** White (light) / `#1A1A1A` (dark), 1px border, radius 12px, shadow `0 2px 8px rgba(11,42,74,0.08)`, padding 32px; hover subtle lift.
- **Inputs:** height 48px, 1px border `#D1D5DB`, radius 6px, padding 12×16px, 16px; focus → Teal border + ring.
- **Icons:** line/stroke style, 2px stroke; 24px standard / 32px feature / 48px display; brand-color accents.

### Animation & Interactions

- **Timing:** Fast 150ms (micro) · Medium 300ms (standard) · Slow 500ms (page/complex).
- **Easing:** default `cubic-bezier(0.4,0,0.2,1)`; bounce `cubic-bezier(0.68,-0.55,0.265,1.55)` (used sparingly).
- **Common:** fade-in, slide-up (20px→0), hover scale 1.02, button press 0.98.
- **Scroll:** Intersection Observer fade+slide, 100ms stagger between siblings.
- **Signature motion:** the Donation-to-Destination Tracer beams in the hero/features; the brand gradient subtly shifts on hero and final CTA.
- **Discipline:** restraint over spectacle — over-animation reads as untrustworthy to this buyer. All motion respects `prefers-reduced-motion`.

### Responsive Breakpoints

- Mobile 0–767px · Tablet 768–1023px · Desktop 1024–1439px · Large 1440px+.
- Container max-widths: default 1200px · wide 1400px · narrow 900px.

---

## Technical Requirements

### Performance
- Page load < 3s on 3G; FCP < 1.5s; TTI < 3.5s; Lighthouse > 90 across all categories.

### Image Optimization
- WebP with fallback; lazy-load below-fold; responsive `srcset`; photos ≤200KB, graphics ≤50KB; optimized SVGs.

### Code Architecture
- React functional components + hooks. Structure:
  ```
  /components
    /Nav
    /Hero
    /ProblemGrid
    /Solution
    /Features
    /SavingsCalculator
    /SocialProof
    /Pricing
    /IntegrationsSecurity
    /VideoDemo
    /FinalCTA
    /Footer
    /shared  (Button, Card, Input, Pill, Tracer, StatCard)
  ```
- Tailwind CSS utility-first + DaisyUI for theming/dark mode; CSS variables for tokens. React Context for theme. Code-split heavy components (SavingsCalculator, VideoDemo).

### Accessibility (WCAG 2.1 AA)
- Semantic HTML5; correct heading hierarchy (single H1); alt text; ARIA labels on the calculator, tracer, carousel, and toggle; full keyboard nav with visible 2px Teal focus rings; contrast ≥4.5:1 body / ≥3:1 large; screen-reader tested; reduced-motion honored.

### SEO
- Title 50–60 chars (e.g., "Kindela — One System for Nonprofit Resale Operations"); meta description 150–160; Open Graph + Twitter Card tags; JSON-LD for Organization, Product/SoftwareApplication, and FAQPage (pricing FAQ); clean H1–H6; XML sitemap; robots.txt; speed per above.

### Analytics & Tracking
- GA4. Events: each unique CTA click, walkthrough request, trial signup, pricing-tier selection, video play, savings-calculator interactions, form submissions, scroll depth (25/50/75/100%). Heatmaps (Hotjar or similar). A/B testing harness.

### Forms & Lead Capture
- **Walkthrough request fields:** Full name (req), work email (req, validated), organization name (req), org type/size (dropdown: small thrift-store ops → large multi-program), role (dropdown: ED/President, Development, Finance/Treasurer, Operations, Board), optional message/use case.
- Real-time validation with helpful, non-blaming error copy; loading/success/error states; privacy link + consent checkbox; CRM integration (HubSpot/Salesforce).

### Browser Support
- Last 2 versions of Chrome, Firefox, Safari, Edge; Mobile Safari iOS 13+; Chrome Mobile Android 8+.

---

## Content Guidelines — Voice & Tone

**Kindela's voice on this page:** warm, reassuring, quietly confident — a peer who's been at that kitchen table. Empathy-first: name the pain in Kari's own words, then resolve it with concrete relief.

**Copywriting principles**
- Lead with relief and outcomes, not features ("Walk into the board meeting prepared" before "fund accounting module").
- Use the avatar's vocabulary: in-kind donations, restricted vs. unrestricted, impact reporting, wearing all the hats.
- Be specific and honest — no inflated stats or false scarcity; this buyer punishes overselling and rewards transparency (which is also the product).
- Address objections preemptively: price, data migration, "is this built for someone like me?"
- Show, don't tell: peer case studies and the traceable one-eared-rabbit story over adjectives.

**Hero headline A/B options**
1. "Stop running your mission on six systems that don't talk."
2. "One source of truth for your donors, your goods, and your grants."
3. "Show the world exactly where every dollar and every coat goes."

**Feature example (benefit-led):** *"Donation-to-Destination Tracer — Stop guessing which donated goods were sold and which went to your partner orgs. Kindela traces every item from the loading dock to its destination, so when a donor or auditor asks, you can show them. Every river, accounted for."*

**CTA copy:** "Request a Walkthrough" · "See Your Savings" · "Start Your 30-Day Trial" — never bare "Demo / Submit / Sign Up."

---

## Development Handoff Notes

### Priority order
1. Nav + Hero (first impression; carries the brand gradient and Tracer).
2. Problem + Solution (the diary arc; establishes value prop).
3. Features (core product proof).
4. Pricing (conversion-critical; transparency = trust).
5. Social proof / case studies (peer trigger).
6. Savings Calculator (complex; may be phase 2).
7. Final CTA + Footer.
8. Polish: animations, dark mode, performance, a11y.

### Testing checklist
- [ ] Responsive at all breakpoints
- [ ] All links functional
- [ ] Forms validate and submit to CRM
- [ ] Video and Tracer animation load correctly
- [ ] Page speed meets targets
- [ ] Accessibility audit passed (incl. reduced motion)
- [ ] Cross-browser verified
- [ ] GA4 events firing
- [ ] SEO meta + JSON-LD correct
- [ ] Dark mode consistent

### Assets needed
- Kindela logo (SVG, light/dark)
- Dashboard screenshots (Donors, Grants, Tracer, Accounting, Transparency)
- Partner/nonprofit logos (SVG, grayscale + color) — with permission
- Compliance badges (only those genuinely held)
- Integration partner logos (SVG)
- Walkthrough video (MP4, H.264, 1080p, captioned)
- Custom line icons (SVG, 2px stroke)

---

## Conversion Optimization

### A/B testing opportunities
- Hero headline (3 variants above).
- Primary CTA copy: "Request a Walkthrough" vs "See It With Your Data."
- Pricing default: annual vs monthly.
- Hero visual: animated Tracer loop vs static dashboard.
- Calculator placement: above vs below pricing.
- Walkthrough form length (more vs fewer fields).

### Personalization
- Org-type hero variant via URL param (thrift-store ops vs children's-mission vs large multi-program).
- Pricing tier highlighted by org size.
- Returning-visitor CTA ("Pick up your trial") vs new-visitor CTA.

### Exit-intent
- Low-pressure modal offering a downloadable resource ("The Nonprofit Leader's Guide to Audit-Ready Books") rather than a hard discount — matches the avatar's trust-first, peer-driven decision style.

---

## Success Metrics

### Primary KPIs
- Walkthrough request rate: 3–5% of visitors.
- Free-trial signups: 2–4% of visitors.
- Avg. time on page: 3+ minutes.
- Bounce rate: < 40%.
- Scroll depth: 60%+ reach final CTA.

### Secondary metrics
- Page load speed; walkthrough-form completion rate; video play rate; savings-calculator usage; per-CTA CTR; traffic-source conversion.

---

*Note on claims and compliance: all statistics, certifications, customer counts, and logos in this PRD are placeholders to be replaced with verified data before launch. Given that Kindela's entire value proposition is transparency and trust, the landing page must hold itself to the same standard — no inflated numbers, no unearned badges, no fabricated testimonials.*
