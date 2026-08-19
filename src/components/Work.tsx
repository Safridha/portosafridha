import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  ExternalLink,
  GraduationCap,
  MapPin,
  Users,
} from 'lucide-react'
import { useState } from 'react'

type WorkTab =
  | 'projects'
  | 'experience'
  | 'education'
  | 'certifications'
  | 'tech'
  | 'organizations'

const tabs: {
  id: WorkTab
  number: string
  label: string
}[] = [
  {
    id: 'projects',
    number: '01',
    label: 'Projects',
  },
  {
    id: 'experience',
    number: '02',
    label: 'Experience',
  },
  {
    id: 'education',
    number: '03',
    label: 'Education',
  },
  {
    id: 'certifications',
    number: '04',
    label: 'Certifications',
  },
  {
    id: 'tech',
    number: '05',
    label: 'Tech Stack',
  },
  {
    id: 'organizations',
    number: '06',
    label: 'Organizations',
  },
]

/* =========================
   PROJECTS
========================= */

const projects = [
  {
    number: '01',
    title: 'QCF Digital Platform',
    category: 'WEB DEVELOPMENT',
    year: '2026',
    description:
      'A modern digital platform for presenting corporate culture, assessment, consulting, and organizational development solutions.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/qcf.jpg',
    link: '#',
  },
  {
    number: '02',
    title: '2Audi Digital',
    category: 'LANDING PAGE',
    year: '2026',
    description:
      'A modern landing page for a digital printing business with responsive layouts, product presentation, and conversion-focused user experience.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    image: '/projects/2audi.jpg',
    link: '#',
  },
  {
    number: '03',
    title: 'Government CRUD System',
    category: 'FULL STACK',
    year: '2026',
    description:
      'A Laravel-based application for managing structured data through a functional and organized administrative workflow.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    image: '/projects/government.jpg',
    link: '#',
  },
  {
    number: '04',
    title: 'Desafar Digital Platform',
    category: 'WEB DEVELOPMENT',
    year: '2026',
    description:
      'A digital web project developed to create a professional online presence with a modern interface and structured content.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/desafar.jpg',
    link: '#',
  },
]

/* =========================
   EXPERIENCE
========================= */

const experiences = [
  {
    number: '01',
    role: 'Web Developer',
    company: 'Freelance / Project Based',
    period: '2025 — Present',
    location: 'Indonesia',
    description:
      'Developing websites and digital products based on client and business requirements, from interface implementation to deployment.',
    technologies: ['React', 'Laravel', 'PHP', 'Tailwind CSS'],
  },
  {
    number: '02',
    role: 'Web Development / IT',
    company: 'Professional Experience',
    period: '2026',
    location: 'Indonesia',
    description:
      'Working on digital solutions, web development, data processing, and technical implementation to support business and organizational needs.',
    technologies: ['Web Development', 'Data', 'Technology'],
  },
]

/* =========================
   EDUCATION
========================= */

const education = [
  {
    number: '01',
    degree: 'Bachelor of Informatics Engineering',
    institution: 'Universitas Muhammadiyah Surakarta',
    period: 'Graduated',
    location: 'Surakarta, Indonesia',
    description:
      'Studied software development, information systems, databases, programming, data processing, and other areas of information technology.',
  },
]

/* =========================
   CERTIFICATIONS
========================= */

const certifications = [
  {
    number: '01',
    title: 'Certification Title',
    issuer: 'Certification Provider',
    year: '2026',
    description:
      'Add your relevant professional, technical, programming, data, or other certification here.',
  },
  {
    number: '02',
    title: 'Certification Title',
    issuer: 'Certification Provider',
    year: '2026',
    description:
      'Additional certification or training that supports your professional development.',
  },
]

/* =========================
   TECH STACK
========================= */

const techStack = [
  {
    category: 'FRONTEND',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    category: 'BACKEND',
    technologies: [
      'PHP',
      'Laravel',
      'REST API',
      'CRUD',
      'Authentication',
    ],
  },
  {
    category: 'DATABASE',
    technologies: [
      'MySQL',
      'SQL',
      'Database Design',
      'Data Modeling',
    ],
  },
  {
    category: 'DATA',
    technologies: [
      'Python',
      'Data Analysis',
      'Data Processing',
      'Data Visualization',
      'Excel',
      'Google Sheets',
    ],
  },
  {
    category: 'TOOLS',
    technologies: [
      'Git',
      'GitHub',
      'VS Code',
      'npm',
      'Vercel',
      'Figma',
    ],
  },
]

/* =========================
   ORGANIZATIONS
========================= */

const organizations = [
  {
    number: '01',
    name: 'Organization / Community',
    role: 'Member / Position',
    period: '2024 — 2025',
    description:
      'Add your organization, community, campus activity, committee, or other meaningful involvement here.',
  },
  {
    number: '02',
    name: 'Organization / Activity',
    role: 'Member / Position',
    period: '2023 — 2024',
    description:
      'Add another relevant organizational or extracurricular experience here.',
  },
]

function Work() {
  const [activeTab, setActiveTab] = useState<WorkTab>('projects')

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#171717] text-white"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Ocean atmosphere */}
      <div className="pointer-events-none absolute -right-60 top-20 h-[600px] w-[600px] rounded-full bg-[#168AAD]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#168AAD]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8FCFD8]">
                04 / WORK & JOURNEY
              </span>
            </div>

            <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
              Experience · Projects · Growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              My work,
              <span className="block text-[#8FCFD8]">
                experience & journey.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              A closer look at the projects I&apos;ve built, experiences
              I&apos;ve gained, technologies I work with, and the journey
              that continues to shape me as an Informatics Engineer.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16 overflow-x-auto border-y border-white/10 lg:mt-24">
          <div className="flex min-w-max">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-3 px-5 py-5 text-left transition-all duration-300 sm:px-6 ${
                    isActive
                      ? 'bg-white/[0.06]'
                      : 'hover:bg-white/[0.025]'
                  }`}
                >
                  <span
                    className={`font-mono text-[9px] ${
                      isActive
                        ? 'text-[#168AAD]'
                        : 'text-white/25'
                    }`}
                  >
                    {tab.number}
                  </span>

                  <span
                    className={`text-xs font-medium sm:text-sm ${
                      isActive
                        ? 'text-white'
                        : 'text-white/45 group-hover:text-white/75'
                    }`}
                  >
                    {tab.label}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="active-work-tab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#168AAD]"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[500px] pt-12 lg:pt-16">
          <AnimatePresence mode="wait">

            {/* PROJECTS */}
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#168AAD]">
                      Selected work
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      Projects I&apos;ve built
                    </h3>
                  </div>

                  <span className="font-mono text-[9px] text-white/25">
                    {projects.length.toString().padStart(2, '0')} PROJECTS
                  </span>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {projects.map((project, index) => (
                    <motion.a
                      key={project.number}
                      href={project.link}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="group relative overflow-hidden border border-white/10 bg-white/[0.035]"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden bg-[#232020]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />

                        <div className="absolute left-4 top-4 bg-[#171717]/90 px-3 py-2">
                          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#8FCFD8]">
                            {project.category}
                          </span>
                        </div>

                        <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-white text-[#171717] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <ArrowUpRight size={17} />
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="font-display text-xl font-semibold transition-colors group-hover:text-[#8FCFD8]">
                            {project.title}
                          </h4>

                          <span className="font-mono text-[9px] text-white/25">
                            {project.year}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-white/40">
                          {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="border border-white/10 px-2.5 py-1.5 font-mono text-[8px] text-white/45"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* EXPERIENCE */}
            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#168AAD]">
                    Professional journey
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Experience
                  </h3>
                </div>

                <div className="border-t border-white/10">
                  {experiences.map((experience) => (
                    <div
                      key={experience.number}
                      className="grid gap-6 border-b border-white/10 py-8 lg:grid-cols-[80px_1fr_1.4fr]"
                    >
                      <span className="font-mono text-[10px] text-white/25">
                        {experience.number}
                      </span>

                      <div>
                        <h4 className="font-display text-xl font-semibold">
                          {experience.role}
                        </h4>

                        <p className="mt-2 text-sm text-[#8FCFD8]">
                          {experience.company}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-4 text-white/35">
                          <span className="flex items-center gap-2 font-mono text-[9px]">
                            <CalendarDays size={13} />
                            {experience.period}
                          </span>

                          <span className="flex items-center gap-2 font-mono text-[9px]">
                            <MapPin size={13} />
                            {experience.location}
                          </span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm leading-7 text-white/45">
                          {experience.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {experience.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="border border-white/10 px-2.5 py-1.5 font-mono text-[8px] text-white/40"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* EDUCATION */}
            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#168AAD]">
                    Academic background
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Education
                  </h3>
                </div>

                {education.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-8 border border-white/10 bg-white/[0.025] p-7 lg:grid-cols-[100px_1fr]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center border border-[#168AAD]/30 bg-[#168AAD]/10 text-[#8FCFD8]">
                      <GraduationCap size={22} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[9px] text-[#168AAD]">
                            {item.number}
                          </p>

                          <h4 className="mt-2 font-display text-2xl font-semibold">
                            {item.degree}
                          </h4>

                          <p className="mt-2 text-base text-[#8FCFD8]">
                            {item.institution}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="font-mono text-[9px] text-white/30">
                            {item.period}
                          </p>

                          <p className="mt-2 flex items-center gap-2 font-mono text-[9px] text-white/30">
                            <MapPin size={12} />
                            {item.location}
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 max-w-3xl text-sm leading-7 text-white/45">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CERTIFICATIONS */}
            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#168AAD]">
                    Learning & achievements
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Certifications
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {certifications.map((certificate) => (
                    <div
                      key={certificate.number}
                      className="group border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-[#168AAD]/40 hover:bg-white/[0.04]"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.03] text-[#8FCFD8]">
                          <Award size={18} />
                        </div>

                        <span className="font-mono text-[9px] text-white/25">
                          {certificate.year}
                        </span>
                      </div>

                      <p className="mt-7 font-mono text-[9px] text-[#168AAD]">
                        CERTIFICATION / {certificate.number}
                      </p>

                      <h4 className="mt-2 font-display text-xl font-semibold">
                        {certificate.title}
                      </h4>

                      <p className="mt-2 text-sm text-[#8FCFD8]">
                        {certificate.issuer}
                      </p>

                      <p className="mt-5 text-sm leading-6 text-white/40">
                        {certificate.description}
                      </p>

                      <button
                        type="button"
                        className="mt-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/50 transition-colors hover:text-[#8FCFD8]"
                      >
                        View certificate
                        <ExternalLink size={13} />
                      </button>
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-mono text-[8px] text-white/20">
                  Replace the placeholder entries above with your actual
                  certifications.
                </p>
              </motion.div>
            )}

            {/* TECH STACK */}
            {activeTab === 'tech' && (
              <motion.div
                key="tech"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#168AAD]">
                    Technologies
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Tech Stack
                  </h3>
                </div>

                <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
                  {techStack.map((stack) => (
                    <div
                      key={stack.category}
                      className="border-b border-r border-white/10 p-6"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-[9px] tracking-[0.16em] text-[#8FCFD8]">
                          {stack.category}
                        </p>

                        <Code2
                          size={15}
                          className="text-white/20"
                        />
                      </div>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {stack.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-[9px] text-white/55 transition-all duration-300 hover:border-[#168AAD]/50 hover:bg-[#168AAD]/10 hover:text-[#8FCFD8]"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ORGANIZATIONS */}
            {activeTab === 'organizations' && (
              <motion.div
                key="organizations"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#168AAD]">
                    Activities & involvement
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    Organizations
                  </h3>
                </div>

                <div className="border-t border-white/10">
                  {organizations.map((organization) => (
                    <div
                      key={organization.number}
                      className="grid gap-6 border-b border-white/10 py-8 lg:grid-cols-[80px_1fr_1.2fr]"
                    >
                      <span className="font-mono text-[10px] text-white/25">
                        {organization.number}
                      </span>

                      <div>
                        <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.03] text-[#8FCFD8]">
                          <Users size={18} />
                        </div>

                        <h4 className="mt-5 font-display text-xl font-semibold">
                          {organization.name}
                        </h4>

                        <p className="mt-2 text-sm text-[#8FCFD8]">
                          {organization.role}
                        </p>

                        <p className="mt-3 font-mono text-[9px] text-white/30">
                          {organization.period}
                        </p>
                      </div>

                      <p className="text-sm leading-7 text-white/40">
                        {organization.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 font-mono text-[8px] text-white/20">
                  Replace the placeholder entries with your actual
                  organizational experiences.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-3">
            <BriefcaseBusiness
              size={14}
              className="text-[#168AAD]"
            />

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
              Work & professional journey
            </span>
          </div>

          <span className="font-mono text-[9px] text-white/20">
            04 / 06
          </span>
        </div>
      </div>
    </section>
  )
}

export default Work