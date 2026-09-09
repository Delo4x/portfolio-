import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { FEATURED_PROJECT } from '../data/content'

export function Project() {
  const p = FEATURED_PROJECT
  return (
    <section id="work" className="section">
      <div className="section__inner section__inner--wide">
        <SectionHeading eyebrow="03 · Featured project" title="Case study" />

        <Reveal>
          <article className="case">
            <div className="case__body">
              <p className="case__period">{p.period}</p>
              <h3 className="case__title">{p.title}</h3>
              <p className="case__subtitle">{p.subtitle}</p>

              <p className="case__desc">{p.description}</p>
              <p className="case__note">{p.supervisors}</p>

              <div className="case__tags">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="case__metrics">
              {p.metrics.map((m) => (
                <div key={m.label} className="metric">
                  <p className="metric__value">{m.value}</p>
                  <p className="metric__label">{m.label}</p>
                </div>
              ))}
            </div>

            <p className="case__config">{p.config}</p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
