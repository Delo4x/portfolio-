import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { EARLIER_BACKGROUND, EDUCATION, EXPERIENCE, LANGUAGES } from '../data/content'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__inner">
        <SectionHeading eyebrow="05 · Path" title="Experience & education" />

        <ol className="timeline">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={`${item.role}-${item.org}`} delay={i * 0.05}>
              <li className="timeline__item">
                <span className="timeline__dot" />
                <p className="timeline__period">{item.period}</p>
                <h3 className="timeline__role">
                  {item.role} <span className="timeline__org">· {item.org}</span>
                </h3>
                <p className="timeline__location">{item.location}</p>
                <ul className="timeline__points">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="timeline__point">
                      <span className="timeline__point-dot" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1} className="earlier">
          <p className="earlier__text">{EARLIER_BACKGROUND}</p>
        </Reveal>

        <div className="path-extra">
          <Reveal>
            <h3 className="subhead">Education</h3>
            <ul className="info-list">
              {EDUCATION.map((edu) => (
                <li key={edu.school}>
                  <p className="info-list__period">{edu.period}</p>
                  <p className="info-list__title">{edu.program}</p>
                  <p className="info-list__sub">{edu.school}</p>
                  {edu.details && <p className="info-list__detail">{edu.details}</p>}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className="subhead">Languages</h3>
            <ul className="lang-list">
              {LANGUAGES.map((lang) => (
                <li key={lang.name} className="lang-row">
                  <span className="lang-row__name">{lang.name}</span>
                  <span className="lang-row__level">{lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
