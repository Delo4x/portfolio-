import { motion } from 'framer-motion'
import { GITHUB_URL, LINKEDIN_URL, PROFILE, STATS } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-40 sm:pt-48">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-[110px]"
        style={{ background: 'linear-gradient(120deg, #8f8bff, #4fd8c4)' }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-4 py-1.5 font-mono text-xs text-text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
          {PROFILE.location} · Open to work
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl font-semibold tracking-tight text-heading sm:text-6xl"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-3 text-lg text-text-muted sm:text-xl"
        >
          {PROFILE.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-text sm:text-lg"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-heading px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            See my work
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm text-text transition-colors hover:border-accent hover:text-heading"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-5 py-2.5 text-sm text-text transition-colors hover:border-accent hover:text-heading"
          >
            GitHub
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-border-soft pt-10 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-semibold text-heading sm:text-3xl">{stat.value}</dd>
              <p className="mt-1 text-xs leading-snug text-text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
