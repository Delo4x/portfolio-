import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { PROJECTS } from '../data/content'

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Things I've built"
          description="A mix of course work and personal projects. Each one links to its code, and to a live version where there is one."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-3xl border border-border-soft bg-surface p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold text-heading">{project.title}</h3>
                  <span className="shrink-0 font-mono text-xs text-accent-2">{project.period}</span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-text-muted">{project.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border-soft bg-bg-soft px-2.5 py-0.5 text-xs text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 pt-1 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-muted transition-colors hover:text-heading"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-text-muted transition-colors hover:text-heading"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
