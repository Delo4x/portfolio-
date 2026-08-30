import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SKILL_GROUPS } from '../data/content'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="02 · Toolbox"
          title="What I build with"
          description="Strongest where I've shipped the most: Java, Kotlin and Python. Comfortable moving across the whole stack when a project needs it."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border-soft bg-surface p-6 transition-colors hover:border-border">
                <h3 className="mb-4 font-mono text-sm text-text-muted">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-1.5 rounded-full border border-border-soft bg-bg-soft px-3 py-1.5 text-sm text-text"
                    >
                      {item.name}
                      {item.level === 'Strong' && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-2" title="Strong" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
