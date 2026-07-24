import DashboardPreview from './DashboardPreview'
import Icon from './Icon'

// The three sharpest, most defensible differentiators (from kindela-differentiators.md).
const DIFFERENTIATORS = [
  'Trace every donated good — to a resale sale or a partner org',
  'A resale POS and books that reconcile, in one system',
  'A live impact report anyone can verify',
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">
            <Icon name="link" size={15} />
            Built for mission-driven nonprofits — not generic software, not bloated enterprise.
          </span>

          <h1 className="hero__title">
            Stop running your mission on <span className="gradient-text">six systems that don&rsquo;t talk.</span>
          </h1>

          <p className="hero__sub">
            Kindela unifies donors, grants, donated-goods inventory, accounting, and volunteers in one
            place — and shows the public exactly where every dollar and every coat goes.
          </p>

          <div className="hero__ctas">
            <a className="btn btn-primary" href="#walkthrough">Request a Walkthrough</a>
            <a className="btn btn-secondary" href="#solution">See How It Works</a>
          </div>

          <p className="hero__microcopy">
            Free consultation &nbsp;•&nbsp; No credit card &nbsp;•&nbsp; Built-in nonprofit pricing
          </p>

          <ul className="hero__diff">
            {DIFFERENTIATORS.map((d) => (
              <li key={d}>
                <Icon name="check" size={16} stroke="var(--kindela-teal)" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}
