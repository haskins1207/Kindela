# Civora — Landing Page

> The operating system for mission-driven nonprofits. *Every donation, grant, and good — connected and visible.*

A frontend-only marketing landing page for **Civora**, built with **Vite + React 19** and plain CSS (brand-token design system). Deploys as a static site to **Netlify**.

## Tech stack
- **Vite 8** + **React 19** (single-page, anchor-scroll — no client-side router)
- Plain CSS with design tokens (`src/index.css`) + component styles (`src/App.css`)
- Light/dark theming via CSS custom properties (`[data-theme="dark"]`)
- No backend — the "Request a Walkthrough" form currently logs its payload at a marked `// CRM integration point` (wire to Netlify Forms / a Netlify Function / a CRM endpoint when ready)

## Local development
```bash
npm install
npm run dev      # Vite dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy (Netlify)
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Config is in [`netlify.toml`](./netlify.toml) (Node 20, SPA fallback).
- Connect this repo in Netlify → it builds and deploys automatically on push.

> Note: `serve.py` is a **local preview helper only** (used by the Claude Code preview tooling) and is **not** part of the Netlify deploy.

## Page sections
Nav · Hero · Problem · Solution · Features · Comparison ("Why not just use…?") · Savings Calculator · Social Proof · Pricing · Integrations & Security · Demo/Video · Final CTA · Footer — plus an accessible "Request a Walkthrough" modal.

## Documentation
Strategy and brand docs live in [`docs/`](./docs):

| Doc | What it is |
|-----|-----------|
| `civora-brand-design-system.md` | Brand identity, palette, type, components |
| `civora-landing-page-prd.md` | Landing-page product requirements |
| `civora-problem-aware-avatar.md` | Target customer (Kari) — problem-aware stage |
| `civora-app.md` | Dashboard app prototype (reference) |
| `civora-competitive-landscape.md` | Market research: ~20 products, capability matrix |
| `civora-swot.md` | SWOT analysis |
| `civora-differentiators.md` | Positioning + ranked differentiators (copy-ready) |

Canonical product-marketing context: [`.agents/product-marketing.md`](./.agents/product-marketing.md).
