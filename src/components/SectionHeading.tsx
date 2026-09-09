import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__text">{description}</p>}
    </Reveal>
  )
}
