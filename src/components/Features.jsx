import Icon from './Icon'
import Reveal from './Reveal'

const FEATURES = [
  {
    icon: 'route',
    name: 'Donation-to-Destination Tracer',
    benefit:
      'Every donated good traced from the loading dock to the resale floor or a partner nonprofit — with a verifiable audit trail. The one-eared rabbit went to a child on May 19, and you can prove it.',
    metric: '100% of goods accounted for',
    visual: 'tracer',
  },
  {
    icon: 'calendar',
    name: 'Grants pipeline, inbound & outbound',
    benefit:
      'A calm timeline of every grant you’re chasing and every grant you’re disbursing to on-the-ground partners. No deadline lunges at you from a calendar you forgot to check.',
    metric: 'Never miss a renewal',
    visual: 'pipeline',
  },
  {
    icon: 'receipt',
    name: 'Donor tracking, tax-ready',
    benefit:
      'Cash and in-kind gifts logged, acknowledged, and Form 990–ready automatically. Acknowledgment letters send themselves.',
    metric: 'Audit-ready in one click',
    visual: 'donor',
  },
  {
    icon: 'scale',
    name: 'Fund accounting that reconciles',
    benefit:
      'Restricted vs. unrestricted, POS-to-bank reconciliation, board-deck exports. Your hands stop shaking under the table.',
    metric: 'Books that balance',
    visual: 'ledger',
  },
  {
    icon: 'eye',
    name: 'Public Transparency layer',
    benefit:
      'A live, embeddable report showing revenue raised, grants written, and goods placed with children. Everything connected — anyone can verify it.',
    metric: 'Trust, made visible',
    visual: 'transparency',
  },
  {
    icon: 'users',
    name: 'Volunteer management',
    benefit:
      'Schedules, roles, and hours in one place — no more sticky notes or sign-up sheets.',
    metric: 'Every hour, honored',
    visual: 'volunteers',
  },
]

function FeatureVisual({ kind }) {
  if (kind === 'tracer') {
    return (
      <div className="fv fv--tracer">
        <span className="fv__node">Intake</span>
        <span className="fv__beam"><i /></span>
        <span className="fv__node fv__node--teal">Partner org</span>
        <span className="fv__beam fv__beam--green"><i /></span>
        <span className="fv__node fv__node--green">Verified ✓</span>
      </div>
    )
  }
  if (kind === 'pipeline') {
    return (
      <div className="fv fv--list">
        {[
          ["Children's Resilience Fund", 'Submitted', 'info'],
          ['State Youth Crisis Block', 'Draft · due Jul 15', 'warning'],
          ['Partner: Haven House (out)', 'Disbursed', 'teal'],
        ].map(([n, s, c]) => (
          <div key={n} className="fv__row">
            <span>{n}</span>
            <span className={`fv__pill fv__pill--${c}`}>{s}</span>
          </div>
        ))}
      </div>
    )
  }
  if (kind === 'donor') {
    return (
      <div className="fv fv--list">
        {[
          ['Margaret Ellison', 'In-kind + cash', 'success'],
          ['Treasure Coast Rotary', 'Grant', 'success'],
          ['James & Co. Realty', 'Pending letter', 'warning'],
        ].map(([n, t, c]) => (
          <div key={n} className="fv__row">
            <span>{n}</span>
            <span className={`fv__pill fv__pill--${c}`}>{t}</span>
          </div>
        ))}
      </div>
    )
  }
  if (kind === 'ledger') {
    return (
      <div className="fv fv--ledger">
        <div className="fv__fund"><span>Unrestricted</span><strong>$186,200</strong></div>
        <div className="fv__fund fv__fund--alt"><span>Restricted</span><strong>$97,300</strong></div>
        <div className="fv__reconciled"><Icon name="check" size={16} stroke="var(--success)" /> May reconciliation balanced</div>
      </div>
    )
  }
  if (kind === 'transparency') {
    return (
      <div className="fv fv--public">
        <div className="fv__pub"><strong>$284,500</strong><span>Revenue raised</span></div>
        <div className="fv__pub"><strong>$27,500</strong><span>Granted to partners</span></div>
        <div className="fv__pub"><strong>504</strong><span>Goods to children</span></div>
      </div>
    )
  }
  return (
    <div className="fv fv--list">
      {[
        ['Diane R.', 'Store floor · 42h'],
        ['Tracie M.', 'Intake & sorting · 38h'],
        ['Marcus T.', 'Partner deliveries · 31h'],
      ].map(([n, r]) => (
        <div key={n} className="fv__row">
          <span>{n}</span>
          <span className="fv__muted">{r}</span>
        </div>
      ))}
    </div>
  )
}

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Everything, connected</span>
          <h2>Five tools you duct-tape together — replaced by one.</h2>
          <p>Benefit-led, built around how a nonprofit actually runs — use what you need, today or as you grow.</p>
        </Reveal>

        <div className="features__list">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.name}
              id={f.visual === 'transparency' ? 'transparency' : undefined}
              className={`feature ${i % 2 ? 'feature--rev' : ''}`}
            >
              <div className="feature__text">
                <span className="feature__icon"><Icon name={f.icon} size={26} /></span>
                <h3>{f.name}</h3>
                <p>{f.benefit}</p>
                <span className="feature__metric">
                  <Icon name="check" size={16} stroke="var(--success)" />
                  {f.metric}
                </span>
              </div>
              <div className="feature__visual">
                <FeatureVisual kind={f.visual} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
