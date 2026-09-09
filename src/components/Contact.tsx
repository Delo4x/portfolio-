import { Reveal } from './Reveal'
import { GITHUB_URL, LINKEDIN_URL, PROFILE } from '../data/content'

export function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal className="contact">
        <p className="contact__eyebrow">06 · Contact</p>
        <h2 className="contact__title">Let's build something together</h2>
        <p className="contact__text">
          I'm actively looking for a developer role in {PROFILE.location} or remote/hybrid. Reach
          out, I'd love to hear about what you're building.
        </p>

        <div className="contact__actions">
          <a href={`mailto:${PROFILE.email}`} className="btn btn--primary">
            {PROFILE.email}
          </a>
        </div>

        <div className="contact__links">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="contact__link">
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="contact__link">
            GitHub
          </a>
          <a href={PROFILE.cvFile} download className="contact__link">
            Download résumé
          </a>
        </div>
      </Reveal>
    </section>
  )
}
