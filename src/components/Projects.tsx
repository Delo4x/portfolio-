import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { PROJECTS } from '../data/content'
import type { Project } from '../data/content'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Things I've built"
          description="A mix of course work and personal projects. Open one for screenshots and detail, or jump straight to the code."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="flex h-full w-full flex-col rounded-3xl border border-border-soft bg-surface p-6 text-left transition-colors hover:border-accent"
              >
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

                <span className="mt-5 pt-1 font-mono text-xs text-accent">View details →</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-60 flex items-start justify-center overflow-y-auto bg-bg/80 p-4 backdrop-blur sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="my-auto w-full max-w-2xl rounded-3xl border border-border-soft bg-surface p-7 sm:p-9"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-accent-2">{project.period}</p>
            <h3 className="mt-1 text-2xl font-semibold text-heading">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-border-soft px-3 py-1 text-sm text-text-muted transition-colors hover:text-heading"
          >
            Close
          </button>
        </div>

        <Gallery images={project.images} title={project.title} />

        <p className="mt-6 leading-relaxed text-text">{project.description}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border-soft bg-bg-soft px-2.5 py-0.5 text-xs text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-heading px-5 py-2 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border-soft px-5 py-2 text-sm text-text transition-colors hover:border-accent hover:text-heading"
            >
              Live demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function Gallery({ images, title }: { images: string[]; title: string }) {
  const [broken, setBroken] = useState<Record<string, boolean>>({})
  const shown = images.filter((src) => !broken[src])

  if (shown.length === 0) {
    return (
      <div className="mt-6 flex h-40 items-center justify-center rounded-2xl border border-dashed border-border-soft bg-bg-soft text-sm text-text-muted">
        Screenshots coming soon
      </div>
    )
  }

  return (
    <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
      {images.map((src) => (
        <img
          key={src}
          src={src}
          alt={`${title} screenshot`}
          loading="lazy"
          onError={() => setBroken((b) => ({ ...b, [src]: true }))}
          className={`h-56 w-auto shrink-0 snap-start rounded-2xl border border-border-soft object-cover ${
            broken[src] ? 'hidden' : ''
          }`}
        />
      ))}
    </div>
  )
}
