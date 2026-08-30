import { PROFILE } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-border-soft px-6 py-8">
      <div className="mx-auto max-w-5xl text-center text-xs text-text-muted">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </footer>
  )
}
