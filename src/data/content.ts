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
