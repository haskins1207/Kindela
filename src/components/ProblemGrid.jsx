import Icon from './Icon'
import Reveal from './Reveal'

const PAINS = [
  {
    icon: 'box',
    title: 'Records you can’t connect.',
    body: 'Donors in one tool, grants in another, in-kind gifts and inventory in a third — and nothing reconciles.',
    stat: 'Disconnected data is a leading source of nonprofit reporting errors.',
  },
  {
    icon: 'clock',
    title: 'Reports that take all night.',
    body: 'Board decks and funder impact reports built by hand the night before — and they still don’t look credible.',
    stat: 'Admin burden is a top driver of nonprofit-leader burnout.',
  },
  {
    icon: 'help',
    title: 'The question you can’t answer.',
    body: 'When a donor asks “where did my money go?”, the honest answer is scattered across six tools.',
    stat: 'Donor trust is the leading predictor of repeat giving.',
  },
]

export default function ProblemGrid() {
  return (
    <section className="section problem" id="problem">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Where your evenings disappear</span>
          <h2>
            Still stitching together QuickBooks, a donor spreadsheet,
            a grants calendar, and a volunteer sign-up sheet?
          </h2>
          <p>Every hour lost to the patchwork is an hour stolen from the children you serve.</p>
        </Reveal>

        <div className="problem__grid">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} className="pain-card" delay={i * 100}>
              <span className="pain-card__icon"><Icon name={p.icon} size={28} /></span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <p className="pain-card__stat">{p.stat}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
