import Reveal from './Reveal'

export default function FinalCTA() {
  return (
    <section className="final" id="walkthrough">
      <div className="container container-narrow">
        <Reveal className="final__inner">
          <h2 className="final__title">Connect everything. Show everyone.</h2>
          <p className="final__sub">
            Join the mission-driven teams using Kindela to get their time back, prove their impact, and
            pour their hours back into the children they serve. Start free — no credit card, and we’ll
            help you move your data.
          </p>
          <div className="final__ctas">
            <a className="btn btn-light" href="#walkthrough">Start Your 30-Day Trial</a>
            <a className="btn final__ghost" href="#walkthrough">Request a Walkthrough</a>
          </div>
          <p className="final__trust">
            30-day trial &nbsp;•&nbsp; No credit card &nbsp;•&nbsp; Cancel anytime &nbsp;•&nbsp; We migrate your data
          </p>
        </Reveal>
      </div>
    </section>
  )
}
