import { motion } from 'framer-motion'
import { GITHUB_URL, LINKEDIN_URL, PROFILE, STATS } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__grid" aria-hidden />
      <div className="hero__glow" aria-hidden />

      <div className="hero__inner">
        <motion.p
          className="hero__badge"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero__badge-dot" />
          {PROFILE.location} · Open to work
        </motion.p>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          {PROFILE.name}
        </motion.h1>

        <motion.p
          className="hero__role"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          {PROFILE.role}
        </motion.p>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
        >
          <a href="#work" className="btn btn--primary">
            See my work
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="btn btn--ghost">
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn btn--ghost">
            GitHub
          </a>
        </motion.div>

        <motion.dl
          className="hero__stats"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="stat">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="stat__value">{stat.value}</dd>
              <p className="stat__label">{stat.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
