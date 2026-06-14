import { useEffect, useState } from 'react'
import { useCountUp } from '../hooks/useCountUp'

const FLOWS = [
  { good: '142 winter coats', dest: 'Resale floor', result: '$2,130 raised', color: 'var(--beacon-amber)' },
  { good: '88 sneakers', dest: 'Haven House', result: 'Routed to kids', color: 'var(--civora-teal)' },
  { good: '64 supply kits', dest: 'Sunrise Family', result: 'Routed to partner', color: 'var(--civic-blue)' },
]

function MiniStat({ label, value, prefix = '', sub, accent }) {
  const v = useCountUp(value, { duration: 1800 })
  return (
    <div className="dash-stat" style={{ '--accent': accent }}>
      <span className="dash-stat__label">{label}</span>
      <span className="dash-stat__value">
        {prefix}{Math.round(v).toLocaleString('en-US')}
      </span>
      <span className="dash-stat__sub">{sub}</span>
    </div>
  )
}

export default function DashboardPreview() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % FLOWS.length), 2800)
    return () => clearInterval(t)
  }, [])
  const f = FLOWS[active]

  return (
    <div className="dash" role="img" aria-label="Civora dashboard preview showing live stats and the Donation-to-Destination Tracer">
      <div className="dash__bar">
        <span className="dash__dot" /><span className="dash__dot" /><span className="dash__dot" />
        <span className="dash__title">Good evening, Kari</span>
        <span className="dash__chip dash__chip--ok">May reconciliation balanced ✓</span>
      </div>

      <div className="dash__body">
        <div className="dash__stats">
          <MiniStat label="Earned revenue (YTD)" value={284500} prefix="$" sub="▲ 12% vs last year" accent="var(--beacon-amber)" />
          <MiniStat label="Grants secured" value={213000} prefix="$" sub="3 in pipeline" accent="var(--civora-teal)" />
          <MiniStat label="Goods placed with children" value={504} sub="2 partner orgs" accent="var(--civic-blue)" />
        </div>

        <div className="tracer">
          <div className="tracer__head">
            <span className="tracer__title">Donation-to-Destination Tracer</span>
            <span className="tracer__sub">From the loading dock to its destination.</span>
          </div>
          <div className="tracer__flow">
            <div className="tracer__node">
              <span className="tracer__dot" style={{ '--c': 'var(--deep-indigo)' }} />
              <span className="tracer__label">Intake</span>
              <span className="tracer__detail">{f.good}</span>
            </div>
            <span className="tracer__beam" style={{ '--c': f.color }}><i /></span>
            <div className="tracer__node">
              <span className="tracer__dot" style={{ '--c': f.color }} />
              <span className="tracer__label">Destination</span>
              <span className="tracer__detail">{f.dest}</span>
            </div>
            <span className="tracer__beam" style={{ '--c': 'var(--success)' }}><i /></span>
            <div className="tracer__node">
              <span className="tracer__dot" style={{ '--c': 'var(--success)' }} />
              <span className="tracer__label">Verified</span>
              <span className="tracer__detail">{f.result}</span>
            </div>
          </div>
          <div className="tracer__dots">
            {FLOWS.map((_, i) => (
              <button
                key={i}
                className={`tracer__pip ${i === active ? 'is-active' : ''}`}
                style={{ '--c': f.color }}
                onClick={() => setActive(i)}
                aria-label={`Show flow ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
