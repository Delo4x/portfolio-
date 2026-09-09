import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { PROJECTS } from '../data/content'
import type { Project } from '../data/content'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="section">
      <div className="section__inner section__inner--wide">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Things I've built"
          description="A mix of course work and personal projects. Open one for screenshots and detail, or jump straight to the code."
        />

        <div className="project-grid">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <button type="button" className="project-card" onClick={() => setActive(project)}>
                <div className="project-card__head">
                  <h3 className="project-card__title">{project.title}</h3>
                  <span className="project-card__period">{project.period}</span>
                </div>

                <p className="project-card__tagline">{project.tagline}</p>

                <div className="project-card__tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>

                <span className="project-card__more">View details →</span>
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
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal__panel"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__head">
          <div>
            <p className="modal__period">{project.period}</p>
            <h3 className="modal__title">{project.title}</h3>
          </div>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
            Close
          </button>
        </div>

        <Gallery images={project.images} title={project.title} />

        <p className="modal__desc">{project.description}</p>

        <ul className="modal__points">
          {project.highlights.map((h) => (
            <li key={h} className="modal__point">
              <span className="modal__point-dot" />
              {h}
            </li>
          ))}
        </ul>

        <div className="modal__tags">
          {project.tech.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="modal__actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--primary">
            GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn--ghost">
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
  const hasVisible = images.some((src) => !broken[src])

  if (!hasVisible) {
    return <div className="gallery--empty">Screenshots coming soon</div>
  }

  return (
    <div className="gallery">
      {images.map((src) => (
        <img
          key={src}
          src={src}
          alt={`${title} screenshot`}
          loading="lazy"
          hidden={broken[src]}
          onError={() => setBroken((b) => ({ ...b, [src]: true }))}
          className="gallery__img"
        />
      ))}
    </div>
  )
}
