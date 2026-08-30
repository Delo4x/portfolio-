import { PROFILE } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-border-soft px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        
      </div>
    </footer>
  )
}
