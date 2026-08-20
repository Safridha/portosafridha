import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const education = [
  {
    logo: '/education/ums.png',
    school: 'Universitas Muhammadiyah Surakarta',
    degree: 'S1 Teknik Informatika · 2022 — 2026',
  },
  {
    logo: '/education/sma-batik-1.png',
    school: 'SMA Batik 1 Surakarta',
    degree: 'IPA · 2019 — 2022',
  },
  {
    logo: '/education/smp-9.png',
    school: 'SMP Negeri 9 Surakarta',
    degree: '2016 — 2019',
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

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#EAE9E7] text-[#171717]"
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

      {/* Decorative Shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Hexagon className="left-[-100px] top-[12%] h-[280px] w-[320px]" />
        <Hexagon className="right-[-120px] top-[25%] h-[350px] w-[400px]" />
        <Hexagon className="bottom-[-120px] left-[40%] h-[300px] w-[340px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8A8783]">
            About Me
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[.88] tracking-[-.07em]">
            More than
            <span className="block text-[#5C5A58]">
              just a developer.
            </span>
          </h2>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-12 max-w-4xl"
        >
          <p className="text-lg leading-8 text-[#454340] sm:text-xl lg:text-2xl">
            I&apos;m{' '}
            <strong className="font-semibold text-[#171717]">
              Safridha Audi
            </strong>
            , an Informatics Engineering graduate with an
            interest in{' '}
            <strong className="font-semibold text-[#171717]">
              web development, full stack development,
              and data analytics.
            </strong>
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#6B6966] sm:text-base">
            I enjoy building web applications, developing
            digital experiences, and working with data to
            discover meaningful insights. I like understanding
            how things work and turning ideas into solutions
            that are functional, clear, and useful.
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6B6966] sm:text-base">
            Beyond the technical side, I value problem solving,
            collaboration, attention to detail, and continuously
            learning new technologies.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 border-t border-[#171717]/15 pt-6 lg:mt-16"
        >
          <div className="mb-5 flex items-center justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#8A8783]">
              Education
            </p>

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="text-[#8A8783]"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3 lg:gap-8">
            {education.map((item, index) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="flex items-center gap-3"
              >
                <img
                  src={item.logo}
                  alt={`${item.school} logo`}
                  className="h-8 w-8 shrink-0 object-contain"
                  loading="lazy"
                />

                <div className="min-w-0">
                  <h4 className="truncate font-display text-sm font-semibold text-[#171717]">
                    {item.school}
                  </h4>

                  <p className="mt-0.5 text-[11px] text-[#77736F]">
                    {item.degree}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About