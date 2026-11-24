import { motion } from 'framer-motion'
import {
  BarChart3,
  Code2,
  Database,
  GitBranch,
  Layout,
  Server,
} from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const skillGroups = [
  {
    title: { en: 'Programming', id: 'Pemrograman' },
    icon: Code2,
    skills: ['Python', 'PHP', 'JavaScript', 'TypeScript'],
  },
  {
    title: { en: 'Frontend', id: 'Frontend' },
    icon: Layout,
    skills: [
      'HTML',
      'CSS',
      'React',
      'Tailwind CSS',
      'Responsive Design',
      'UI Implementation',
    ],
  },
  {
    title: { en: 'Backend', id: 'Backend' },
    icon: Server,
    skills: [
      'Laravel',
      'PHP',
      'REST API',
      'CRUD',
      'Authentication',
      'API Integration',
    ],
  },
  {
    title: { en: 'Database', id: 'Basis Data' },
    icon: Database,
    skills: ['MySQL', 'SQL', 'Database Design', 'Data Modeling'],
  },
  {
    title: { en: 'Data & Analytics', id: 'Data & Analitik' },
    icon: BarChart3,
    skills: [
      'Python',
      'Data Processing',
      'Data Analysis',
      'Data Visualization',
      'Power BI',
      'Excel',
      'Google Sheets',
    ],
  },
  {
    title: { en: 'Tools & Workflow', id: 'Tools & Alur Kerja' },
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Vite', 'VS Code', 'Vercel', 'npm'],
  },
]

function Hexagon({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute border border-[#171717]/[0.06] ${className}`}
      style={{
        clipPath:
          'polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%)',
      }}
    />
  )
}

function Skills() {
  const { language } = useLanguage()

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F3F2F0] text-[#171717]"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(23,23,23,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,23,23,.035) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Hexagon className="left-[-100px] top-[15%] h-[260px] w-[300px]" />
        <Hexagon className="right-[-120px] bottom-[5%] h-[330px] w-[380px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8783] sm:text-[11px] sm:tracking-[0.25em]">
            {language === 'id' ? 'Keahlian' : 'Technical Skills'}
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,9vw,5.8rem)] font-semibold leading-[.92] tracking-[-.07em] sm:text-[clamp(3rem,6vw,5.8rem)] sm:leading-[.88]">
            {language === 'id' ? 'Bekal untuk' : 'Tools I use'}
            <span className="block text-[#171717]">
              {language === 'id' ? 'membangun & menganalisis.' : 'to build & analyze.'}
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#6B6966] sm:text-base">
            {language === 'id'
              ? 'Teknologi dan tools yang saya gunakan untuk mengembangkan produk digital serta mengolah data—dengan fokus pada solusi yang fungsional dan mudah dipahami.'
              : 'The technologies and tools I use to build digital products and work with data—with a focus on practical, easy-to-understand solutions.'}
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mt-14 border-t border-[#171717]/15 lg:mt-20">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.title.en}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group grid gap-4 border-b border-[#171717]/15 py-6 transition-colors duration-300 hover:bg-white/40 lg:grid-cols-[220px_1fr]"
              >
                {/* Category */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#171717]/10 bg-white text-[#171717] transition-colors duration-300 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-base font-semibold">
                    {group.title[language]}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap items-center gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#D1CFCC] bg-white px-3 py-2 font-mono text-[10px] uppercase tracking-[0.04em] text-[#55524F] transition-colors duration-300 hover:border-[#171717] hover:text-[#171717] sm:text-[9px] sm:tracking-[0.06em]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-7 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#999591] sm:text-[9px] sm:tracking-[0.2em]">
            {language === 'id' ? 'Ringkasan keahlian' : 'Technical capabilities'}
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#999591] sm:text-[9px] sm:tracking-[0.2em]">
            {language === 'id' ? '06 kategori' : '06 categories'}
          </span>
        </div>

      </div>
    </section>
  )
}

export default Skills