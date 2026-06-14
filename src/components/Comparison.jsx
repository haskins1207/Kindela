import Icon from './Icon'
import Reveal from './Reveal'

// Columns = tool categories the patchwork is made of (named examples for clarity + search intent).
const COLS = [
  { name: 'Kindela', ex: 'all-in-one', kindela: true },
  { name: 'Donor CRMs', ex: 'Bloomerang · DonorPerfect · LGL' },
  { name: 'Retail POS', ex: 'Square · Lightspeed · KORONA' },
  { name: 'Resale POS', ex: 'ThriftCart · SimpleConsign' },
  { name: 'Enterprise', ex: 'Blackbaud · Salesforce' },
  { name: 'Spreadsheets', ex: 'Excel · Google Sheets' },
]

// Honest scoring from kindela-competitive-landscape.md. Order: Kindela, Donor CRM, Retail POS, Resale POS, Enterprise, Spreadsheets.
const ROWS = [
  { cap: 'Donor & in-kind gift tracking', vals: ['yes', 'yes', 'no', 'partial', 'yes', 'no'] },
  { cap: 'Fund accounting (restricted / unrestricted)', vals: ['yes', 'partial', 'no', 'no', 'yes', 'no'] },
  { cap: 'Grants — inbound & outbound', vals: ['yes', 'partial', 'no', 'no', 'partial', 'no'] },
  { cap: 'Resale / thrift POS', vals: ['yes', 'no', 'yes', 'yes', 'no', 'no'] },
  { cap: 'Route donated goods to partner orgs', vals: ['yes', 'no', 'no', 'no', 'no', 'no'] },
  { cap: 'Volunteer management', vals: ['yes', 'partial', 'no', 'partial', 'partial', 'no'] },
  { cap: 'Public, verifiable transparency', vals: ['yes', 'no', 'no', 'no', 'partial', 'no'] },
  { cap: 'Nonprofit-conscious pricing', vals: ['yes', 'yes', 'yes', 'yes', 'no', 'yes'] },
]

// "Why not just use X?" — honest one-liners (from kindela-differentiators.md). Headings name products for search intent.
const ONE_LINERS = [
  ['ThriftCart', 'ThriftCart runs your resale floor. Kindela runs your whole nonprofit — donors, grants, books, volunteers, and a public report — with the resale floor connected to all of it.'],
  ['a donor CRM (Bloomerang, DonorPerfect)', 'Great donor CRMs — but they don’t run your resale store or your books. Kindela connects the gift to the good to the ledger to the public report.'],
  ['Salesforce or Blackbaud', 'Enterprise power without the enterprise price or the consultants — plus the resale and donated-goods layer they don’t have.'],
  ['QuickBooks', 'Keep audit-grade books and your donors, grants, goods, and volunteers in one place — no Class-tag workarounds, no re-keying.'],
  ['Square or KORONA', 'A POS that actually understands in-kind donations, fund accounting, and routing goods to partner orgs — not just retail SKUs.'],
  ['Zeffy', 'Zeffy is a great free start. When the spreadsheets and logins pile up, Kindela is what you graduate into — one connected system.'],
  ['spreadsheets', 'Stop running your mission on tabs that don’t talk. One source of truth you can actually publish — and prove.'],
]

function Cell({ value }) {
  const map = {
    yes: { icon: 'check', cls: 'cmp-yes', label: 'Yes' },
    partial: { icon: 'minus', cls: 'cmp-partial', label: 'Partial' },
    no: { icon: 'x', cls: 'cmp-no', label: 'No' },
  }
  const m = map[value]
  return (
    <span className={`cmp-cell ${m.cls}`} title={m.label}>
      <Icon name={m.icon} size={18} />
      <span className="sr-only">{m.label}</span>
    </span>
  )
}

export default function Comparison() {
  return (
    <section className="section compare" id="compare">
      <div className="container container-wide">
        <Reveal className="section-head">
          <span className="eyebrow">Why not just use…?</span>
          <h2>You’ve probably got pieces of this already.</h2>
          <p>Each tool does one slice. Kindela connects them — and adds the parts none of them have.</p>
        </Reveal>

        <Reveal className="compare__table-wrap">
          <table className="compare__table">
            <caption className="sr-only">
              How Kindela compares to donor CRMs, retail POS, resale POS, enterprise suites, and spreadsheets
            </caption>
            <thead>
              <tr>
                <th scope="col" className="compare__rowhead-blank"><span className="sr-only">Capability</span></th>
                {COLS.map((c) => (
                  <th key={c.name} scope="col" className={c.kindela ? 'compare__col compare__col--kindela' : 'compare__col'}>
                    <span className="compare__col-name">{c.name}</span>
                    <span className="compare__col-ex">{c.ex}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.cap}>
                  <th scope="row" className="compare__rowhead">{row.cap}</th>
                  {row.vals.map((v, i) => (
                    <td key={i} className={i === 0 ? 'compare__td compare__td--kindela' : 'compare__td'}>
                      <Cell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="compare__note">
          Based on Kindela’s 2026 competitive research. <strong>Partial</strong> = limited, available only via an add-on
          or a second product, or a manual workaround. We keep this honest — verify anything before it drives a decision.
        </p>

        <div className="compare__cards">
          {ONE_LINERS.map(([name, line], i) => (
            <Reveal key={name} className="compare__card" delay={(i % 3) * 80}>
              <h3>Why not just use {name}?</h3>
              <p>{line}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
