import { motion } from 'framer-motion'
import {
  BarChart3,
  Code2,
  Database,
  GitBranch,
  Layout,
  Server,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      'Python',
      'PHP',
      'JavaScript',
      'TypeScript',
    ],
  },
  {
    title: 'Frontend',
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
    title: 'Backend',
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
    title: 'Database',
    icon: Database,
    skills: [
      'MySQL',
      'SQL',
      'Database Design',
      'Data Modeling',
    ],
  },
  {
    title: 'Data & Analytics',
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
    title: 'Tools & Workflow',
    icon: GitBranch,
    skills: [
      'Git',
      'GitHub',
      'Vite',
      'VS Code',
      'Vercel',
      'npm',
    ],
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
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F3F2F0] text-[#171717]"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(23,23,23,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(23,23,23,.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hexagon atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Hexagon className="left-[-100px] top-[15%] h-[260px] w-[300px]" />

        <Hexagon className="right-[-120px] bottom-[5%] h-[330px] w-[380px]" />

        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[25%] top-[18%] h-24 w-28 border border-[#171717]/[0.06]"
          style={{
            clipPath:
              'polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8A8783]">
            Technical Skills
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[.88] tracking-[-.07em]">
            Tools I use
            <span className="block text-[#5C5A58]">
              to build & analyze.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#6B6966] sm:text-base">
            A collection of technologies, tools, and technical
            capabilities I use to develop digital products and
            work with data.
          </p>
        </motion.div>

        {/* Skills list */}
        <div className="mt-16 border-t border-[#171717]/15 lg:mt-20">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group grid gap-5 border-b border-[#171717]/15 py-7 transition-all duration-300 hover:bg-white/40 lg:grid-cols-[220px_1fr]"
              >
                {/* Category */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center border border-[#171717]/10 bg-white transition-all duration-300 group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-white">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-display text-base font-semibold">
                    {group.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap items-center gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="border border-[#D1CFCC] bg-white px-3 py-2 font-mono text-[8px] uppercase tracking-[0.06em] text-[#55524F] transition-all duration-300 hover:border-[#171717] hover:text-[#171717]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 flex items-center justify-between"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#999591]">
            Technical capabilities
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#999591]">
            Skills
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills