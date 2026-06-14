import Logo from './Logo'

const COLUMNS = [
  {
    title: 'Product',
    links: ['Platform', 'Integrations', 'Pricing', 'Security', 'Changelog'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Case Studies', 'Help Center', 'Migration Guide', 'Webinars'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Contact', 'Press Kit', 'Partners'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms', 'Cookie Policy', 'GDPR', 'Acceptable Use'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo light />
          <p className="footer__tagline">Every donation, grant, and good — connected and visible.</p>

          <form className="footer__news" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="news" className="footer__news-label">
              Get nonprofit operations tips and product updates.
            </label>
            <div className="footer__news-row">
              <input id="news" type="email" placeholder="you@yournonprofit.org" aria-label="Email address" />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </div>
          </form>

          <div className="footer__social" aria-label="Social links">
            {['in', 'X', 'f', '▶'].map((s) => (
              <a key={s} href="#top" className="footer__social-link" aria-label={`Kindela on ${s}`}>{s}</a>
            ))}
          </div>
        </div>

        <div className="footer__cols">
          {COLUMNS.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}><a href="#top">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2026 Kindela. All rights reserved.</span>
        <span>The operating system for mission-driven nonprofits.</span>
      </div>
    </footer>
  )
}
