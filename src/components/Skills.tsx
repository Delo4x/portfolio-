import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { SKILL_GROUPS } from '../data/content'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__inner section__inner--wide">
        <SectionHeading
          eyebrow="02 · Toolbox"
          title="What I build with"
          description="Strongest where I've shipped the most: Java, Kotlin and Python. Comfortable moving across the whole stack when a project needs it."
        />

        <div className="skills__grid">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="skill-group">
                <h3 className="subhead">{group.title}</h3>
                <ul className="skill-group__items">
                  {group.items.map((item) => (
                    <li key={item.name} className="skill">
                      {item.name}
                      {item.level === 'Strong' && <span className="skill__dot" title="Strong" />}
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
