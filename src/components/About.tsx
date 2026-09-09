import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { PROFILE } from '../data/content'

export function About() {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <SectionHeading eyebrow="01 · About" title="A developer who ships, not just studies" />
        <div className="about__body">
          {PROFILE.summary.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="about__lede">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
