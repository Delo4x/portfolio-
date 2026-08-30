// ---------------------------------------------------------------------------
// Central content file. Everything visible on the site is defined here,
// sourced from Delovan's CV. Update the two profile links below before
// deploying.
// ---------------------------------------------------------------------------

export const GITHUB_URL = 'https://github.com/Delo4x'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/delovan-sulaiman-542654332/'

export const PROFILE = {
  name: 'Delovan Sulaiman',
  role: 'Software Developer',
  location: 'Jönköping, Sweden',
  email: 'delovansulaiman4@gmail.com',
  cvFile: '/Delovan_Sulaiman_Software_Developer.pdf',
  tagline: 'I build software people actually use, from AI prototypes to production mobile apps.',
  summary: [
    "I'm a software developer with a degree in Software Development and Mobile Platforms from Jönköping University. Over the past year I've taken a project from an idea to a working AI prototype at Jönköping Energi, built mobile applications together with a professional development team, and worked as a licensed security officer alongside my studies.",
    'I write clean, maintainable code on both the frontend and the backend, I pick up new technologies quickly, and I enjoy the moment a difficult problem finally falls into place. I work just as well on my own as I do in a team, and I am looking for a role where I can keep building software that people actually use.',
  ],
}

export const STATS = [
  { value: '67.5%', label: 'Precision on final thesis model' },
  { value: '~800', label: 'Images collected & annotated' },
  { value: '5.5ms', label: 'Model inference time' },
  { value: '5', label: 'Languages spoken' },
]

export type SkillLevel = 'Strong' | 'Good'

export const SKILL_GROUPS: {
  title: string
  items: { name: string; level?: SkillLevel }[]
}[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Java', level: 'Strong' },
      { name: 'Kotlin', level: 'Strong' },
      { name: 'Python', level: 'Strong' },
      { name: 'JavaScript', level: 'Good' },
      { name: 'TypeScript', level: 'Good' },
      { name: 'C / C++', level: 'Good' },
      { name: 'SQL', level: 'Good' },
    ],
  },
  {
    title: 'Mobile',
    items: [
      { name: 'Android' },
      { name: 'iOS' },
      { name: 'Kotlin for Android' },
      { name: 'Mobile UI/UX' },
    ],
  },
  {
    title: 'Web & Backend',
    items: [
      { name: 'REST APIs' },
      { name: 'HTML & CSS' },
      { name: 'Databases & data structures' },
      { name: 'OOP & design patterns' },
    ],
  },
  {
    title: 'AI & Computer Vision',
    items: [
      { name: 'YOLO26' },
      { name: 'Dataset annotation (Label Studio)' },
      { name: 'Model evaluation (precision / recall / mAP)' },
      { name: 'Applied ML dashboards' },
    ],
  },
  {
    title: 'Tools & practice',
    items: [
      { name: 'Git & GitHub' },
      { name: 'Docker' },
      { name: 'Team releases & code review' },
      { name: 'Testing & debugging' },
    ],
  },
]

export const FEATURED_PROJECT = {
  title: 'Object Detection in Industrial Environments Using AI',
  subtitle: "Bachelor's thesis, Jönköping University × Jönköping Energi",
  period: 'Feb 2026 to Jun 2026',
  description:
    'A solo-run computer vision project: built and evaluated an AI prototype that automatically identifies iron pipes, insulation, and pallets in photographs from a real industrial environment. I owned the full pipeline: collecting and annotating a dataset of roughly 800 images in Label Studio, training and comparing several YOLO26 model sizes across different image resolutions and epoch counts, and building a dashboard where a photo can be uploaded and run through the model live.',
  supervisors: 'Supervised by Jönköping University and Piroz Kristedt at Jönköping Energi.',
  metrics: [
    { value: '67.5%', label: 'Precision' },
    { value: '54.6%', label: 'Recall' },
    { value: '55.5%', label: 'mAP@0.5' },
    { value: '5.5ms', label: 'Inference time' },
  ],
  config: 'Best configuration: YOLO26s · 840px input · 150 epochs',
  tags: ['Python', 'YOLO26', 'Computer Vision', 'Label Studio', 'Dashboard'],
}

// ---------------------------------------------------------------------------
// Projects. Each project has its own detail view ("dashboard") with a short
// write-up and a screenshot gallery.
//
// Screenshots live in  public/projects/<slug>/  and are named 1.png, 2.png,
// 3.png ...  Any file that is missing is skipped automatically, so it is safe
// to list slots before the images exist. PNG or JPG both work.
// ---------------------------------------------------------------------------

export type Project = {
  slug: string
  title: string
  tagline: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
  github: string
  demo?: string
  images: string[]
}

const shots = (slug: string, n: number) =>
  Array.from({ length: n }, (_, i) => `/projects/${slug}/${i + 1}.png`)

export const PROJECTS: Project[] = [
  {
    slug: 'mattecoach',
    title: 'MatteCoach',
    tagline: 'Math practice app with micro-lessons, quizzes and a progress dashboard.',
    period: 'Jan 2026',
    description:
      'An interactive math trainer built to make practice stick. Learners work through short lessons and quiz packs with instant feedback across three domains (arithmetic, equation solving and geometry), each with three difficulty levels. A dashboard tracks streaks, accuracy and history so progress stays visible over time.',
    highlights: [
      'Three math domains, three difficulty levels each',
      'Micro-lessons paired with quiz packs and instant feedback',
      'Progress dashboard with streaks, accuracy and results history',
      'Responsive layout for desktop, tablet and mobile',
      'Progress persisted in the browser with LocalStorage',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS', 'LocalStorage'],
    github: 'https://github.com/Delo4x/MatteCoach',
    images: shots('mattecoach', 3),
  },
  {
    slug: 'roadmap',
    title: 'Vägkarta',
    tagline: 'Trading strategy builder with guided checklists and automatic scoring.',
    period: 'Jan 2026',
    description:
      'A tool for traders to document a strategy and then follow it consistently. Users pick a trading style, describe their edge with an AI-assisted refinement step, then build a custom roadmap of one to seven weighted steps. Before each trade a pre-entry checklist scores how well the setup matches the plan, and everything auto-saves.',
    highlights: [
      'Trading style selection: scalper, day, swing, position',
      'AI-assisted refinement of the strategy description',
      'Custom roadmap builder, one to seven steps with importance weights',
      'Pre-entry checklist with automatic setup scoring',
      'Auto-save, with the storage layer swappable for a backend API',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS', 'Lucide'],
    github: 'https://github.com/Delo4x/RoadMap',
    demo: 'https://road-map-eta.vercel.app',
    images: shots('roadmap', 3),
  },
  {
    slug: 'personligt-schema',
    title: 'Personligt schema',
    tagline: 'Staff scheduling app backed by a live database.',
    period: 'Jul 2026',
    description:
      'A scheduling app for planning staff shifts, built on Next.js with Supabase as the backend so schedules are stored and shared through a real database rather than living only in one browser.',
    highlights: [
      'Next.js App Router with TypeScript',
      'Supabase (Postgres and auth) as the backend',
      'Tailwind CSS interface',
      'Deployed on Vercel',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Delo4x/Personalschema',
    demo: 'https://personalschema.vercel.app',
    images: shots('personligt-schema', 3),
  },
  {
    slug: 'solkatten',
    title: 'Solkatten',
    tagline: 'Restaurant and bar site for Solkatten in Borgholm, Öland.',
    period: 'May 2026',
    description:
      'A single-page site for a restaurant and bar in Borgholm on Öland, built with plain HTML, CSS and JavaScript with no framework or build step. Five sections cover a hero carousel, five menu blocks, happy hour, drinks and a contact section with an interactive map.',
    highlights: [
      'Vanilla HTML, CSS and JavaScript, no build step',
      'Interactive map with Leaflet and OpenStreetMap tiles',
      'Animated hero: rising particles, rotating sun rays, gold dividers',
      'Gold-on-dark visual style with Playfair Display and Cinzel type',
      'Responsive down to mobile',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js'],
    github: 'https://github.com/Delo4x/Solkatten-Restaurang',
    images: shots('solkatten', 3),
  },
  {
    slug: 'korkortsquiz',
    title: 'Körkortsquiz',
    tagline: 'Swedish driving-licence theory quiz with its own backend.',
    period: 'Nov 2025',
    description:
      'A practice quiz for the Swedish driving-licence theory test. Questions are served from a small backend and answered in the browser, with the interface styled from scratch in CSS.',
    highlights: [
      'Question bank served from a backend',
      'Hand-written CSS, no UI framework',
      'Multiple-choice practice flow',
    ],
    tech: ['JavaScript', 'CSS', 'Backend API'],
    github: 'https://github.com/Delo4x/korkorts-quiz',
    images: shots('korkortsquiz', 3),
  },
  {
    slug: 'tidigare-portfolj',
    title: 'Tidigare portfölj',
    tagline: 'My first portfolio site: multi-page and hand-built.',
    period: 'Feb 2025',
    description:
      'The first version of my portfolio: a multi-page site with separate pages for home, about, experience, skills and contact, built with plain HTML, CSS and JavaScript on a small Node server. Kept here to show where I started.',
    highlights: [
      'Separate pages for about, experience, skills and contact',
      'Plain HTML, CSS and JavaScript',
      'Small Node.js server',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    github: 'https://github.com/Delo4x/Delovan-Sulaiman-Portfolio',
    images: shots('tidigare-portfolj', 3),
  },
]

export type ExperienceItem = {
  role: string
  org: string
  location: string
  period: string
  bullets: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Security Officer (part-time)',
    org: 'Tempest AB',
    location: 'Jönköping',
    period: 'Jan 2026 to Present',
    bullets: ['Licensed security officer, working alongside full-time studies.'],
  },
  {
    role: 'Security Officer',
    org: 'Avarn',
    location: 'Jönköping',
    period: 'Jun 2025 to Dec 2025',
    bullets: ['Licensed security work requiring calm judgement and accountability under pressure.'],
  },
  {
    role: 'Programmer / App Developer',
    org: 'Jönköping Energi',
    location: 'Jönköping',
    period: 'Jun 2025 to Jul 2025 · 5-week summer role',
    bullets: [
      'Worked on the development of mobile applications and internal systems.',
      'Took part in programming, testing, and improving user interfaces.',
      'Collaborated with the development team to implement new features and improve performance.',
    ],
  },
  {
    role: 'Software Development Intern',
    org: 'Jönköping Energi',
    location: 'Jönköping',
    period: 'Feb 2025 to May 2025',
    bullets: [
      'Contributed to both backend and frontend development of the Jönköping Energi customer app, used by real customers.',
      'Took part in team meetings and in the release of a new version of the app.',
      'Supervised by Robin Kochauf, Jönköping Energi.',
    ],
  },
]

export const EARLIER_BACKGROUND =
  'Before moving into software, I spent several years in kitchen, home-care, and childcare roles during school and summer seasons (2017 to 2024), including as a chef during peak restaurant seasons. That work is where I learned to stay calm, take responsibility, and deliver even when the pressure is on.'

export const EDUCATION = [
  {
    school: 'Jönköping University',
    program: 'B.Sc. Software Development and Mobile Platforms',
    period: 'Sep 2023 to Jun 2026',
    details: 'Android, iOS, Kotlin, HTML/CSS, C++, C, Python, Java',
  },
  {
    school: 'Alléskolan, Hallsberg',
    program: 'Natural Sciences programme',
    period: '2019 to 2021',
    details: '',
  },
]

export const LANGUAGES = [
  { name: 'Kurdish', level: 'Native' },
  { name: 'Arabic', level: 'Native' },
  { name: 'Swedish', level: 'Highly proficient' },
  { name: 'English', level: 'Highly proficient' },
  { name: 'Turkish', level: 'Highly proficient' },
]
