# Civora Brand Identity & Design System

> *Civora — the operating system for mission-driven nonprofits. Every donation, grant, and good — connected and visible.*

---

## Brand Identity
*(Contribution led by the Brand Strategist)*

### Brand Essence

**Civora** comes from the civic root — *civis, civil, community* — fused into a single modern, coined name that signals a platform built for the social good. Where the old metaphors leaned on "light after darkness," Civora's identity is about **connection and visibility**: the moment the scattered systems of a nonprofit resolve into one clear, connected view. Distilled from the product's purpose (unify donors, grants, donated-goods inventory, accounting, and volunteers into one source of truth, then make that truth visible to the public) and from the avatar's core need (to be the confident, trusted leader of a well-run organization), the brand stands on seven attributes:

1. **Connected** — One operating system; every record, dollar, and good linked.
2. **Transparent** — Visibility is the product. Anyone can see where things go.
3. **Trustworthy** — Verifiable, audit-ready, accountable by design.
4. **Modern** — A genuinely contemporary platform, not legacy nonprofit software.
5. **Capable** — Enterprise-grade depth, accessible to a one-person shop.
6. **Civic** — Rooted in community, mission, and the public good.
7. **Clarity** — Replaces chaos with a single, legible source of truth.

### Brand Voice

- **Tone:** Confident, modern, and reassuring — a capable partner that has clearly been built for nonprofit operators. Civora speaks like a sharp peer who respects the operator's intelligence and time, never like legacy enterprise software or a hard-sell rep.
- **Language:** Clear, precise, and jargon-aware. It uses the operator's real vocabulary — *in-kind donations, restricted vs. unrestricted funds, impact reporting, outbound granting, wearing all the hats* — while keeping explanations clean and free of technical clutter.
- **Communication Style:** Solution-oriented and outcome-first. Civora names the operational pain (five disconnected systems, the report that takes all night, the question a leader can't answer) and resolves it with concrete capability and proof. It leads with what the operator gains — connection, visibility, confidence — over feature lists.

### Brand Narrative

Mission-driven nonprofits run on a patchwork: a point-of-sale system over here, accounting software over there, a donor spreadsheet, a grants calendar, a volunteer sign-up sheet — none of them talking to each other. The people running these organizations, from small thrift-store operations to children's-mission teams that sell and route donated goods to partner nonprofits, spend their nights re-keying data and building reports by hand, unable to answer a simple question: *where did every dollar and every donated good actually go?* **Civora is the operating system that ends the patchwork.** It connects donors, grants (inbound and outbound), donated-goods inventory, fund accounting, and volunteers into one source of truth — and turns that truth outward through a public transparency layer that lets donors, funders, and the community verify impact in real time. Because when everything is connected, leaders get their time back; and when everything is visible, trust becomes the engine of funding. Civora makes the work connected, and the impact visible.

---

## Design System
*(Contribution led by the Lead UI/UX Designer and Lead Front-End Developer)*

### Color Palette

#### Primary Colors

- **Gradient Base:** The Civora gradient runs from a deep, trustworthy indigo through civic teal into a confident, optimistic amber — representing the journey from many disconnected inputs into one clear, connected view. It is used on hero sections, primary CTAs, the logo mark, and brand moments.

```css
background: linear-gradient(135deg, #141B4D 0%, #243A8E 24%, #1E6FB0 46%, #2A9D8F 64%, #4FB59A 80%, #F2B14C 100%);
```

- **Primary Colors (Extracted from gradient):**

| Hex | Name | Attribute |
|-----|------|-----------|
| `#141B4D` | Deep Indigo | Trust |
| `#243A8E` | Civic Blue | Authority |
| `#1E6FB0` | Signal Blue | Connection |
| `#2A9D8F` | Civora Teal | Clarity |
| `#4FB59A` | Bright Teal | Vitality |
| `#F2B14C` | Beacon Amber | Optimism |

#### Secondary Colors

A neutral set for UI structure, text, and surfaces.

| Role | Name | Hex |
|------|------|-----|
| Primary text | Ink | `#10162E` |
| Secondary text | Slate Gray | `#586079` |
| Backgrounds | Cloud | `#F3F5FA` |
| Surface | White | `#FFFFFF` |
| Maximum contrast | Black | `#080B16` |

#### Functional Colors

| Role | Hex | Usage |
|------|-----|-------|
| Success | `#2E9E5B` | Reconciliation complete, donation logged, grant submitted |
| Warning | `#E8A317` | Approaching grant deadline, low inventory, unverified record |
| Error | `#D64545` | Failed reconciliation, missing required field, sync error |
| Info | `#2D7DD2` | Tooltips, guidance, system notices |

### Typography

#### Font Family

- **Primary Font — Inter (sans-serif):** Chosen for exceptional on-screen legibility at small sizes, a neutral-yet-modern character, and a broad weight range. As a data-dense operating system (ledgers, donor records, inventory tables, grant pipelines), Civora needs a workhorse UI face that stays crisp in dense views — Inter's core strength. Its contemporary feel reinforces the "modern platform, not legacy software" positioning.
- **Secondary Font — Space Grotesk (geometric sans display):** Reserved for headlines, the wordmark, and brand moments. Its slightly technical, geometric forms give Civora a confident, modern, platform-grade personality — more contemporary and "software company" than a serif, matching the enterprise/all-in-one register the brand is built on. *(Where a more editorial tone is wanted for long-form content like the public impact report, DM Serif Display may be used as a tertiary accent face.)*

#### Font Sizes

A modular typographic scale (base 16px, ratio ~1.25 major third).

| Token | rem | px | Line-height |
|-------|-----|-----|-------------|
| Display | 4.5rem | 72px | 1.05 |
| H1 | 3rem | 48px | 1.1 |
| H2 | 2.25rem | 36px | 1.15 |
| H3 | 1.75rem | 28px | 1.2 |
| H4 | 1.5rem | 24px | 1.25 |
| H5 | 1.25rem | 20px | 1.3 |
| H6 | 1.125rem | 18px | 1.35 |
| Body (Regular) | 1rem | 16px | 1.6 |
| Body (Small) | 0.875rem | 14px | 1.55 |
| Body (XSmall) | 0.75rem | 12px | 1.5 |
| Caption | 0.6875rem | 11px | 1.45 |

#### Font Weights

| Weight | Value |
|--------|-------|
| Light | 300 |
| Regular | 400 |
| Medium | 500 |
| Semibold | 600 |
| Bold | 700 |

### UI Components

#### 21st.dev Components

Categories forming the application's structural backbone:

- **Navigation** — top bar, collapsible sidebar, breadcrumbs, tabbed module switching (Donors / Grants / Inventory / Accounting / Volunteers / Transparency).
- **Layout** — responsive grids, dashboard containers, split panes, page shells.
- **Forms** — donation entry, grant pipeline forms, volunteer sign-up, donor records, validated multi-step flows.
- **Feedback** — toasts, alerts, confirmation modals, inline validation.
- **Data Display** — tables, ledgers, stat cards, badges, donor/grant timelines.
- **Disclosure** — accordions, expandable rows, popovers, drawers for record detail.

#### MagicUI Components

Animated components that reinforce the "connected and visible" theme:

1. **Number Ticker** — animated count-up for live revenue, dollars granted, and goods distributed on the public transparency page.
2. **Animated Gradient Hero** — the Civora gradient subtly shifting on the marketing and public-trust landing pages.
3. **Bento Grid** — animated modular dashboard summary cards that reveal on scroll.
4. **Animated Beam / Connection Lines** — the signature motion: nodes (donors, grants, goods, accounts) connecting into one hub, visualizing both the operating-system concept and the donation-to-destination flow.
5. **Scroll-Triggered Reveal** — impact metrics and donor stories animating into view on the transparency report.
6. **Confetti / Success Burst** — a restrained celebratory moment when a reconciliation balances or a grant is submitted.

#### reactbits.dev Components

Supplementary categories for polish and interaction texture:

- **Navigation** — animated tabs and menu transitions.
- **Layout** — animated containers and reveal wrappers.
- **Forms** — enhanced inputs with focus animations.
- **Feedback** — animated loaders and status indicators.
- **Data Display** — animated counters, progress rings, sparkline trends.
- **Disclosure** — smooth expand/collapse for record details and FAQs.

#### Custom Components

Essential bespoke components driven by Civora's core function:

1. **Donation-to-Destination Tracer** — a visual flow component following each donated good from intake through to resale sale *or* transfer to a partner nonprofit, with a verifiable audit trail.
2. **Public Transparency Dashboard** — an embeddable, public-facing widget showing real-time revenue, grants written (inbound/outbound), and goods distributed, designed to be shared and verified by donors and the press.
3. **Grant Pipeline Timeline** — a calm deadline tracker for inbound and outbound grants with status, owner, and document links.
4. **Fund Accounting Ledger Widget** — restricted vs. unrestricted fund views with one-click board-deck and Form 990–ready exports.

### Micro-Interactions

1. **Button Hover** — primary buttons shift along the gradient toward Signal Blue and lift 1px with a soft shadow (150ms ease-out).
2. **Form Focus** — input borders animate from Slate Gray to Civora Teal with a faint glow.
3. **Loading States** — a gentle gradient shimmer skeleton (never a harsh spinner) while data loads.
4. **Success Actions** — a checkmark draws itself in Success green with a brief, restrained pulse when a record saves or a reconciliation balances.
5. **Navigation** — active module indicator slides smoothly along the sidebar (200ms).
6. **Connection reveal** — on the dashboard and transparency views, connection beams animate once to show records linking into the hub.

### Responsive Design
*(Contribution led by the Lead Front-End Developer)*

- **Mobile-First Approach:** Core principle. Layouts, type, and touch targets are designed for small screens first, then progressively enhanced — operators log donations from the loading dock and check reports on the go.
- **Breakpoints (Tailwind CSS):**

| Token | Min-width |
|-------|-----------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

- **Mobile Adaptations:** Simplified navigation via hamburger menu and bottom tab bar; multi-column dashboards collapse to single stacked cards; data tables become scrollable card lists; touch targets sized ≥44×44px; primary actions (log donation, log volunteer hours) pinned within thumb reach.

### Accessibility

- **Color Contrast (WCAG AA):** All text meets ≥4.5:1 (≥3:1 for large text); functional colors verified against their backgrounds.
- **Keyboard Navigation:** Every interactive element fully operable via keyboard with a logical tab order.
- **Screen Reader Support (ARIA):** Semantic landmarks, ARIA labels on charts/widgets, and descriptive table headers for financial and donor data.
- **Visible Focus Indicators:** A clear 2px Civora Teal focus ring on all focusable elements.
- **Respect for Reduced Motion:** All gradient shifts, count-ups, connection beams, and reveals honor `prefers-reduced-motion`, falling back to instant states.

### Dark/Light Mode

Both modes are fully supported, implemented via **DaisyUI themes**. Civora detects the user's system preference automatically and provides a user-selectable toggle, so operators working late can switch to a low-glare dark theme without losing the brand's identity.

---

## Implementation Guidelines
*(Contribution led by the Lead Front-End Developer)*

### CSS Framework

- **Tailwind CSS** — utility-first foundation.
- **DaisyUI** — component theming and dark/light mode management.
- **Custom Utilities** — *(placeholder)* brand-specific utilities for the Civora gradient, connection-beam styling, transparency-widget styling, and fund-accounting table treatments.

### Animation Library

- **Framer Motion** — primary library for complex, orchestrated animations (connection beams, the Donation-to-Destination Tracer, scroll reveals, page transitions).
- **Tailwind Animations** — for simple, performant transitions (hovers, focus states, fades).

### Icon System

- **Heroicons** — the standard, comprehensive base icon set.
- **Custom SVGs** — for domain-specific concepts (donated-goods intake, partner-org transfer, fund types, transparency seal, the Civora connection mark).

### Asset Management

| Asset Type | Preferred Format |
|------------|------------------|
| Icons | SVG |
| Images / photography | WebP |
| Video | MP4 / WebM |

### Code Structure

- **Component-Based Architecture** — small, reusable, single-responsibility components.
- **Utility-First CSS** — Tailwind utilities composed in markup, abstracted to components only when repeated.
- **Responsive Variants** — mobile-first base styles enhanced with `sm:` → `2xl:` variants.

---

## Design Tokens
*(Contribution led by the Lead Front-End Developer)*

```json
{
  "colors": {
    "primary": {
      "deepIndigo": "#141B4D",
      "civicBlue": "#243A8E",
      "signalBlue": "#1E6FB0",
      "civoraTeal": "#2A9D8F",
      "brightTeal": "#4FB59A",
      "beaconAmber": "#F2B14C"
    },
    "neutral": {
      "ink": "#10162E",
      "slateGray": "#586079",
      "cloud": "#F3F5FA",
      "white": "#FFFFFF",
      "black": "#080B16"
    },
    "functional": {
      "success": "#2E9E5B",
      "warning": "#E8A317",
      "error": "#D64545",
      "info": "#2D7DD2"
    }
  },
  "typography": {
    "fontFamily": {
      "primary": "Inter, sans-serif",
      "secondary": "Space Grotesk, sans-serif"
    }
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  },
  "borderRadius": {
    "sm": "0.125rem",
    "md": "0.25rem",
    "lg": "0.5rem",
    "xl": "1rem",
    "full": "9999px"
  }
}
```
