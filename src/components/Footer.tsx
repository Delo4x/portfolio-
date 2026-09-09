import { PROFILE } from '../data/content'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </footer>
  )
}
