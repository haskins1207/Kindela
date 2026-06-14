import Icon from './Icon'
import Reveal from './Reveal'

// Wordmark chips instead of fetched SVG logos — keeps the build self-contained
// and avoids shipping third-party marks we don't have rights to.
const INTEGRATIONS = [
  'QuickBooks', 'Xero', 'Stripe', 'PayPal', 'Square', 'Plaid',
  'DocuSign', 'Mailchimp', 'Constant Contact', 'Google Sheets', 'Bloomerang', 'Zapier',
]

const PRACTICES = [
  ['256-bit encryption', 'Data encrypted in transit and at rest.'],
  ['SSO / SAML', 'Single sign-on for your whole team.'],
  ['Role-based access', 'Separate board, staff, and volunteer views.'],
  ['Backups & audit logs', 'Automated backups and a full activity trail.'],
]

const COMPLIANCE = ['SOC 2 Type II', 'GDPR', 'CCPA', 'ISO 27001']

export default function IntegrationsSecurity() {
  return (
    <section className="section intsec" id="integrations">
      <div className="container intsec__inner">
        {/* Integrations */}
        <Reveal className="intsec__col">
          <span className="eyebrow">Plays well with others</span>
          <h2>Works with the tools you already trust.</h2>
          <p>
            Connect what you’ve already got — Kindela pulls it into one source of truth.
            No rip-and-replace, no starting over.
          </p>

          <ul className="intsec__logos">
            {INTEGRATIONS.map((name) => (
              <li key={name} className="intsec__logo">{name}</li>
            ))}
          </ul>

          <a className="btn-ghost intsec__link" href="#integrations">
            View all integrations <Icon name="arrow" size={16} />
          </a>
        </Reveal>

        {/* Security & Compliance */}
        <Reveal className="intsec__col intsec__security" delay={120}>
          <span className="eyebrow">Built for trust</span>
          <h2>Your donors’ data, protected.</h2>
          <p>
            The same accountability we give the public, we give your records — guarded,
            access-controlled, and auditable.
          </p>

          <ul className="intsec__practices">
            {PRACTICES.map(([title, desc]) => (
              <li key={title}>
                <span className="intsec__check"><Icon name="check" size={16} stroke="var(--success)" /></span>
                <span>
                  <strong>{title}</strong>
                  <span className="intsec__practice-desc">{desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="intsec__badges">
            {COMPLIANCE.map((badge) => (
              <span key={badge} className="intsec__badge">
                <Icon name="shield" size={18} stroke="var(--kindela-teal)" />
                {badge}
              </span>
            ))}
          </div>

          <p className="intsec__note">
            Security practices are core to Kindela’s design. Compliance certifications shown reflect
            our roadmap — we publish what we’ve earned, nothing we haven’t.
          </p>

          <a className="btn-ghost intsec__link" href="#integrations">
            View security documentation <Icon name="arrow" size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
