import { Reveal } from './Reveal'
import { GITHUB_URL, LINKEDIN_URL, PROFILE } from '../data/content'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <Reveal className="mx-auto max-w-2xl rounded-3xl border border-border-soft bg-surface px-8 py-14 text-center sm:px-14">
        <p className="mb-3 font-mono text-sm text-accent">05 · Contact</p>
        <h2 className="text-3xl font-semibold text-heading sm:text-4xl">
          Let's build something together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-text-muted">
          I'm actively looking for a developer role in {PROFILE.location} or remote/hybrid. Reach
          out, I'd love to hear about what you're building.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-full bg-heading px-6 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            {PROFILE.email}
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-sm">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-text-muted hover:text-heading">
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-text-muted hover:text-heading">
            GitHub
          </a>
          <a href={PROFILE.cvFile} download className="text-text-muted hover:text-heading">
            Download résumé
          </a>
        </div>
      </Reveal>
    </section>
  )
}
