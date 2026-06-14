import { useMemo, useState } from 'react'
import Reveal from './Reveal'

const calculateSavings = (monthlySpend, adminHours, staffCount, hourlyCost) => {
  // Kindela consolidates tools; assume ~55% reduction in tool spend
  const annualToolSavings = monthlySpend * 12 * 0.55
  // ~60% of manual admin time recovered via single source of truth
  const recoveredHours = adminHours * 0.6 * 52
  const annualTimeSavings = recoveredHours * hourlyCost
  return {
    annualToolSavings,
    annualTimeSavings,
    recoveredHours,
    totalAnnualValue: annualToolSavings + annualTimeSavings,
  }
}

const money = (n) => '$' + Math.round(n).toLocaleString('en-US')

function Field({ label, hint, children }) {
  return (
    <label className="calc__field">
      <span className="calc__label">
        {label}
        {hint && <span className="calc__hint">{hint}</span>}
      </span>
      {children}
    </label>
  )
}

export default function SavingsCalculator() {
  const [monthlySpend, setMonthlySpend] = useState(280)
  const [adminHours, setAdminHours] = useState(12)
  const [staffCount, setStaffCount] = useState(3)
  const [hourlyCost, setHourlyCost] = useState(35)

  const result = useMemo(
    () => calculateSavings(monthlySpend, adminHours, staffCount, hourlyCost),
    [monthlySpend, adminHours, staffCount, hourlyCost],
  )

  const max = Math.max(result.annualToolSavings, result.annualTimeSavings, 1)

  return (
    <section className="section calc" id="savings">
      <div className="container container-narrow">
        <Reveal className="section-head">
          <span className="eyebrow">Stop paying for five tools</span>
          <h2>See what you’d save by replacing your patchwork.</h2>
          <p>Opportunity recovered — not a hard sell. Adjust the sliders to your org.</p>
        </Reveal>

        <Reveal className="calc__card">
          <div className="calc__inputs">
            <Field label="Current monthly software spend" hint={money(monthlySpend)}>
              <input
                type="range" min="0" max="800" step="10"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(+e.target.value)}
                aria-label="Current monthly software spend in dollars"
              />
            </Field>

            <Field label="Staff/volunteer hours per week on manual data entry & reporting" hint={`${adminHours} hrs`}>
              <input
                type="range" min="0" max="40" step="1"
                value={adminHours}
                onChange={(e) => setAdminHours(+e.target.value)}
                aria-label="Weekly hours on manual data entry and reporting"
              />
            </Field>

            <div className="calc__row">
              <Field label="People touching the books">
                <input
                  type="number" min="1" max="25"
                  value={staffCount}
                  onChange={(e) => setStaffCount(Math.max(1, Math.min(25, +e.target.value || 1)))}
                  aria-label="Number of paid staff touching the books"
                />
              </Field>
              <Field label="Avg. loaded hourly cost">
                <div className="calc__money-input">
                  <span>$</span>
                  <input
                    type="number" min="0" max="200"
                    value={hourlyCost}
                    onChange={(e) => setHourlyCost(Math.max(0, +e.target.value || 0))}
                    aria-label="Average loaded hourly cost of staff time"
                  />
                </div>
              </Field>
            </div>
          </div>

          <div className="calc__output" aria-live="polite">
            <span className="calc__output-label">Estimated value recovered every year</span>
            <span className="calc__total">{money(result.totalAnnualValue)}</span>

            <div className="calc__bars">
              <div className="calc__bar-row">
                <span>Tool spend saved</span>
                <div className="calc__track">
                  <div
                    className="calc__bar calc__bar--amber"
                    style={{ width: `${(result.annualToolSavings / max) * 100}%` }}
                  />
                </div>
                <strong>{money(result.annualToolSavings)}</strong>
              </div>
              <div className="calc__bar-row">
                <span>Staff time recovered</span>
                <div className="calc__track">
                  <div
                    className="calc__bar calc__bar--teal"
                    style={{ width: `${(result.annualTimeSavings / max) * 100}%` }}
                  />
                </div>
                <strong>{money(result.annualTimeSavings)}</strong>
              </div>
            </div>

            <p className="calc__footnote">
              ≈ {Math.round(result.recoveredHours).toLocaleString()} staff hours given back to the mission each year
              {staffCount > 1 ? `, across ${staffCount} people on the books.` : '.'}
            </p>

            <a className="btn btn-primary btn-block" href="#walkthrough">Email me my savings summary</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
