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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg/80 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm text-heading">
          {PROFILE.name}
        </a>
        <ul className="hidden gap-8 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-heading"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={PROFILE.cvFile}
          download
          className="rounded-full border border-border px-4 py-1.5 text-sm text-text transition-colors hover:border-accent hover:text-heading"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
