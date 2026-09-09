import { useEffect, useState } from 'react'
import { PROFILE } from '../data/content'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'site-header site-header--scrolled' : 'site-header'}>
      <nav className="site-nav">
        <a href="#top" className="site-nav__brand">
          {PROFILE.name}
        </a>
        <ul className="site-nav__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="site-nav__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={PROFILE.cvFile} download className="site-nav__cta">
          Resume
        </a>
      </nav>
    </header>
  )
}
