import Icon from './Icon'
import Reveal from './Reveal'

const SIX = ['QuickBooks', 'Donor sheet', 'Grants calendar', 'Sign-up sheet', 'Email threads', 'Impact deck']

export default function Solution() {
  return (
    <section className="section solution" id="solution">
      <div className="container solution__inner">
        <Reveal className="solution__copy">
          <span className="eyebrow">From patchwork to one system</span>
          <h2>One source of truth — and a window the whole community can see through.</h2>

          <p>
            The problem was never that you weren’t capable — it was that your tools never connected,
            so you carried the whole picture in your head, alone.
          </p>
          <p>
            Civora connects every river — donations in, goods out, dollars tracked, hours logged —
            so entering something once means it’s right everywhere.
          </p>
          <p>
            Walk into the board meeting prepared. Hand a funder a clean report in seconds.
            Stop carrying the stress home.
          </p>

          <div className="uvp">
            <Icon name="shield" size={22} />
            <p>
              <strong>No other platform connects all of it.</strong> Unlike a donor CRM, a retail POS, or
              enterprise software priced for huge foundations, Civora speaks nonprofit — in-kind gifts,
              restricted vs. unrestricted funds, outbound granting, and (when you need it) routing donated
              goods to partner orgs — then proves it to the public, live.
            </p>
          </div>
        </Reveal>

        <Reveal className="solution__visual" delay={120}>
          <div className="ba">
            <div className="ba__before">
              <span className="ba__tag">Today</span>
              <div className="ba__tabs">
                {SIX.map((t) => (
                  <span key={t} className="ba__tab">{t}</span>
                ))}
              </div>
              <span className="ba__note">Six tabs. None of them talking.</span>
            </div>

            <div className="ba__arrow"><Icon name="arrow" size={26} /></div>

            <div className="ba__after">
              <span className="ba__tag ba__tag--after">With Civora</span>
              <div className="ba__hub">
                <span className="ba__hub-core"><Icon name="link" size={26} stroke="#fff" /></span>
              </div>
              <span className="ba__note ba__note--after">One connected operating system.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
