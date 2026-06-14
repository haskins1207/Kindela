import { useEffect, useState } from 'react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { label: 'Platform', href: '#features' },
  { label: 'How It Works', href: '#solution' },
  { label: 'Transparency', href: '#transparency' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Nonprofits We Serve', href: '#proof' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label="Kindela home">
          <Logo />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <a className="nav__signin" href="#top">Sign In</a>
          <a className="btn btn-primary nav__cta" href="#walkthrough">Request a Walkthrough</a>
        </div>

        <div className="nav__mobile">
          <ThemeToggle />
          <button
            className="nav__burger"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav__drawer">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="nav__drawer-signin" href="#top" onClick={() => setOpen(false)}>Sign In</a>
          <a className="btn btn-primary btn-block" href="#walkthrough" onClick={() => setOpen(false)}>
            Request a Walkthrough
          </a>
        </div>
      )}
    </header>
  )
}
