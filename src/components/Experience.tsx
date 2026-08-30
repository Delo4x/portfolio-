import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { EARLIER_BACKGROUND, EDUCATION, EXPERIENCE, LANGUAGES } from '../data/content'

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="04 · Path" title="Experience & education" />

        <ol className="relative space-y-10 border-l border-border-soft pl-8">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={`${item.role}-${item.org}`} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <p className="font-mono text-xs text-text-muted">{item.period}</p>
                <h3 className="mt-1 text-lg font-medium text-heading">
                  {item.role} <span className="text-text-muted">· {item.org}</span>
                </h3>
                <p className="text-sm text-text-muted">{item.location}</p>
                <ul className="mt-2 space-y-1">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-text">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1} className="mt-10 rounded-2xl border border-border-soft bg-surface p-6">
          <p className="text-sm leading-relaxed text-text-muted">{EARLIER_BACKGROUND}</p>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <Reveal>
            <h3 className="mb-4 font-mono text-sm text-text-muted">Education</h3>
            <ul className="space-y-5">
              {EDUCATION.map((edu) => (
                <li key={edu.school}>
                  <p className="font-mono text-xs text-text-muted">{edu.period}</p>
                  <p className="mt-1 font-medium text-heading">{edu.program}</p>
                  <p className="text-sm text-text-muted">{edu.school}</p>
                  {edu.details && <p className="mt-1 text-sm text-text">{edu.details}</p>}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className="mb-4 font-mono text-sm text-text-muted">Languages</h3>
            <ul className="space-y-2">
              {LANGUAGES.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between border-b border-border-soft py-2 text-sm"
                >
                  <span className="text-text">{lang.name}</span>
                  <span className="text-text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
