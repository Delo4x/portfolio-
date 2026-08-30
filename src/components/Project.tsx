import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { FEATURED_PROJECT } from '../data/content'

export function Project() {
  const p = FEATURED_PROJECT
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="03 · Featured project" title="Case study" />

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border-soft bg-surface">
            <div className="border-b border-border-soft p-8 sm:p-10">
              <p className="font-mono text-xs text-accent-2">{p.period}</p>
              <h3 className="mt-2 text-2xl font-semibold text-heading sm:text-3xl">{p.title}</h3>
              <p className="mt-1 text-sm text-text-muted">{p.subtitle}</p>

              <p className="mt-6 leading-relaxed text-text">{p.description}</p>
              <p className="mt-4 text-sm text-text-muted">{p.supervisors}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border-soft bg-bg-soft px-3 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-y divide-border-soft sm:grid-cols-4 sm:divide-y-0">
              {p.metrics.map((m) => (
                <div key={m.label} className="p-6 text-center">
                  <p className="text-2xl font-semibold text-heading">{m.value}</p>
                  <p className="mt-1 text-xs text-text-muted">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="border-t border-border-soft px-8 py-4 text-center font-mono text-xs text-text-muted sm:px-10">
              {p.config}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
