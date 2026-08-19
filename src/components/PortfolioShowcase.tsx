import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  Award,
  Code2,
  FolderKanban,
  Layers3,
} from 'lucide-react'

const showcaseItems = [
  {
    number: '01',
    title: 'Projects',
    description:
      'Web applications and digital experiences built through frontend, backend, and full-stack development.',
    icon: FolderKanban,
    href: '#projects',
    tag: 'SELECTED WORK',
  },
  {
    number: '02',
    title: 'Certificates',
    description:
      'A collection of learning achievements and certifications that support my technical journey.',
    icon: Award,
    href: '#certificates',
    tag: 'LEARNING',
  },
  {
    number: '03',
    title: 'Tech Stack',
    description:
      'The technologies, tools, and frameworks I use to design, develop, and deliver digital solutions.',
    icon: Code2,
    href: '#skills',
    tag: 'CAPABILITIES',
  },
]

function PortfolioShowcase() {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-[#171717] text-white"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* Ocean glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#168AAD]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#168AAD]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8FCFD8]">
                02 / SHOWCASE
              </span>
            </div>

            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
              Explore the work
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Portfolio
              <span className="block text-[#8FCFD8]">
                Showcase.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              Explore my journey through projects, technical skills,
              certifications, and the things I continue to learn along
              the way.
            </p>
          </motion.div>
        </div>

        {/* Showcase cards */}
        <div className="mt-16 border-t border-white/10">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.a
                key={item.number}
                href={item.href}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group relative grid gap-6 border-b border-white/10 py-8 transition-colors duration-500 hover:bg-white/[0.025] sm:grid-cols-[90px_1fr_1.2fr_70px] sm:items-center"
              >
                {/* Number */}
                <div className="font-mono text-xs text-white/25">
                  {item.number}
                </div>

                {/* Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] text-[#8FCFD8] transition-all duration-300 group-hover:border-[#168AAD]/50 group-hover:bg-[#168AAD]/10">
                    <Icon size={19} />
                  </div>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#168AAD]">
                      {item.tag}
                    </p>

                    <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#8FCFD8]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="max-w-xl text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/60">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[#168AAD] group-hover:bg-[#168AAD] group-hover:text-white sm:justify-self-end">
                  <ArrowDownRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex items-center justify-between"
        >
          <div className="flex items-center gap-3 text-white/30">
            <Layers3 size={14} />

            <span className="font-mono text-[9px] uppercase tracking-[0.18em]">
              Keep exploring
            </span>
          </div>

          <span className="font-mono text-[9px] text-white/20">
            02 / 07
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioShowcase