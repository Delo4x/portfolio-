import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { PROFILE } from '../data/content'

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="01 · About" title="A developer who ships, not just studies" />
        <div className="space-y-5">
          {PROFILE.summary.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-text">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
