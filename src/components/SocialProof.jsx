import Reveal from './Reveal'

const TESTIMONIALS = [
  {
    quote: 'I stopped rebuilding the board deck by hand. The numbers are just… there, and they’re right.',
    name: 'Treasurer',
    org: 'Community food bank',
    metric: 'Board meetings: 2 hrs → 40 min',
  },
  {
    quote: 'For the first time I could answer a donor’s “where did it go?” on the spot — and show them.',
    name: 'Executive Director',
    org: 'Arts education nonprofit',
    metric: 'First clean audit in years',
  },
  {
    quote: 'Five subscriptions became one. The migration help meant I wasn’t re-keying years of data alone.',
    name: 'Operations Lead',
    org: 'Animal rescue with a resale shop',
    metric: '5 tools → 1 platform',
  },
]

const STATS = [
  ['Mission-driven teams', 'Hundreds'],
  ['Goods traced end-to-end', 'Thousands'],
  ['Hours given back', 'Every week'],
  ['Audit-ready books', 'By design'],
]

export default function SocialProof() {
  return (
    <section className="section proof" id="proof">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">From peers who’ve been at that kitchen table</span>
          <h2>The trusted-ED test: “it changed everything for us.”</h2>
          <p>From food banks to arts nonprofits to full-suite operations — the same relief.</p>
        </Reveal>

        <Reveal className="case">
          <div className="case__context">
            <span className="case__label">When an org needs all of it</span>
            <p className="case__org">A children’s-mission nonprofit running the full suite — donors, grants, fund accounting, a resale store, and outbound granting to two partner orgs (~$600K budget).</p>
            <blockquote className="case__quote">
              “We were holding the whole operation together with spreadsheets and prayer. Kindela gave us
              one place for everything — and a public page our funders actually trust.”
            </blockquote>
            <p className="case__attr">Executive Director · children’s-mission nonprofit</p>
          </div>
          <div className="case__results">
            {[
              ['5 → 1', 'tools replaced'],
              ['9 hrs', 'saved per week'],
              ['1st', 'clean audit in years'],
            ].map(([big, small]) => (
              <div key={small} className="case__result">
                <strong>{big}</strong>
                <span>{small}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="proof__grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.quote} className="quote-card" delay={i * 100}>
              <p className="quote-card__quote">“{t.quote}”</p>
              <div className="quote-card__foot">
                <span className="quote-card__name">{t.name}</span>
                <span className="quote-card__org">{t.org}</span>
              </div>
              <span className="quote-card__metric">{t.metric}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="proof__stats">
          {STATS.map(([label, value]) => (
            <div key={label} className="proof__stat">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </Reveal>
        <p className="proof__disclaimer">
          Figures are illustrative placeholders — we’ll publish verified numbers as our community grows.
          Transparency is the product; the page holds itself to the same standard.
        </p>
      </div>
    </section>
  )
}
