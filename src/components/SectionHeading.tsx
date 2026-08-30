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
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm tracking-wide text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-heading sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-text-muted">{description}</p>}
    </Reveal>
  )
}
