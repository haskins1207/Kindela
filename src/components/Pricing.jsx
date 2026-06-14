import { useState } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'

const TIERS = [
  {
    name: 'Starter',
    forWho: 'Small teams getting organized',
    monthly: 49,
    annual: 39,
    features: [
      'Donor + in-kind tracking',
      'Basic in-kind & inventory tracking',
      'Single location or program',
      'Volunteer scheduling',
      'Public transparency widget',
    ],
    cta: 'Start Free Trial',
    primary: false,
  },
  {
    name: 'Growth',
    forWho: 'Most chosen by growing nonprofits',
    monthly: 149,
    annual: 119,
    features: [
      'Everything in Starter',
      'Inbound & outbound grants pipeline',
      'Full fund accounting & reconciliation',
      'Multi-location + partner-org routing',
      'Form 990 exports',
    ],
    cta: 'Start Free Trial',
    primary: true,
  },
  {
    name: 'Network',
    forWho: 'Larger orgs / multi-program',
    custom: true,
    features: [
      'Everything in Growth',
      'Advanced reporting',
      'Multi-entity',
      'Dedicated onboarding & data migration',
      'SLAs',
    ],
    cta: 'Request a Walkthrough',
    primary: false,
  },
]

const FAQ = [
  ['Can I change plans?', 'Yes — upgrade or downgrade anytime. Your data and history come with you.'],
  ['What’s in the free trial?', 'Full Growth-tier access for 30 days. No credit card, no commitment.'],
  ['Do you help migrate my old donor and inventory data?', 'We do — guided migration is included so you’re not re-keying years of records alone.'],
  ['Do you offer additional nonprofit discounts?', 'Every tier is nonprofit-priced. Smaller and newer orgs — reach out, we’ll work with you.'],
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const [open, setOpen] = useState(0)

  return (
    <section className="section pricing" id="pricing">
      <div className="container container-wide">
        <Reveal className="section-head">
          <span className="eyebrow">Transparent, nonprofit-conscious</span>
          <h2>Pricing you can read at a glance — because transparency is the point.</h2>
        </Reveal>

        <Reveal className="pricing__toggle-wrap">
          <div className="pricing__toggle" role="group" aria-label="Billing period">
            <button
              className={!annual ? 'is-active' : ''}
              onClick={() => setAnnual(false)}
              aria-pressed={!annual}
            >Monthly</button>
            <button
              className={annual ? 'is-active' : ''}
              onClick={() => setAnnual(true)}
              aria-pressed={annual}
            >Annual <span className="pricing__save">save ~20%</span></button>
          </div>
        </Reveal>

        <div className="pricing__grid">
          {TIERS.map((t) => (
            <Reveal key={t.name} className={`tier ${t.primary ? 'tier--featured' : ''}`}>
              {t.primary && <span className="tier__badge">Most chosen by growing nonprofits</span>}
              <h3 className="tier__name">{t.name}</h3>
              <p className="tier__for">{t.forWho}</p>

              <div className="tier__price">
                {t.custom ? (
                  <span className="tier__custom">Contact us</span>
                ) : (
                  <>
                    <span className="tier__amount">${annual ? t.annual : t.monthly}</span>
                    <span className="tier__period">/mo{annual ? ' · billed annually' : ''}</span>
                  </>
                )}
              </div>

              <a
                className={`btn ${t.primary ? 'btn-primary' : 'btn-secondary'} btn-block`}
                href="#walkthrough"
              >{t.cta}</a>

              <ul className="tier__features">
                {t.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={18} stroke="var(--civora-teal)" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <p className="pricing__trust">
          No credit card required &nbsp;•&nbsp; Cancel anytime &nbsp;•&nbsp; We help you migrate your data
        </p>

        <div className="faq">
          {FAQ.map(([q, a], i) => (
            <div key={q} className={`faq__item ${open === i ? 'is-open' : ''}`}>
              <button
                className="faq__q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {q}
                <span className="faq__sign">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="faq__a">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
