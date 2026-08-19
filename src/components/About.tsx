import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const education = [
  {
    logo: '/education/ums.png',
    school: 'Universitas Muhammadiyah Surakarta',
    degree: 'S1 Teknik Informatika',
    year: '2022 — 2026',
  },
  {
    logo: '/education/sma-batik-1.png',
    school: 'SMA Batik 1 Surakarta',
    degree: 'Science / IPA',
    year: '2019 — 2022',
  },
  {
    logo: '/education/smp-9.png',
    school: 'SMP Negeri 9 Surakarta',
    degree: 'Junior High School',
    year: '2016 — 2019',
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

      {/* Hexagons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Hexagon className="left-[-100px] top-[12%] h-[280px] w-[320px]" />
        <Hexagon className="right-[-120px] top-[25%] h-[350px] w-[400px]" />
        <Hexagon className="bottom-[-120px] left-[40%] h-[300px] w-[340px]" />

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[15%] left-[15%] h-24 w-28 border border-[#171717]/[0.07]"
          style={{
            clipPath:
              'polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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

        {/* About */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border-l border-[#171717]/20 pl-5"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8A8783]">
              Who I am
            </p>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#666360]">
              An Informatics Engineering graduate who enjoys
              turning ideas, technology, and data into useful
              digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="max-w-4xl text-lg leading-8 text-[#454340] sm:text-xl lg:text-2xl">
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

            <p className="mt-6 max-w-3xl text-sm leading-7 text-[#6B6966] sm:text-base">
              I enjoy building web applications, developing
              digital experiences, and working with data to
              discover meaningful insights. I like understanding
              how things work and turning ideas into solutions
              that are functional, clear, and useful.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6B6966] sm:text-base">
              Beyond the technical side, I value problem solving,
              collaboration, attention to detail, and continuously
              learning new technologies.
            </p>
          </motion.div>
        </div>

        {/* Education — ONE ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-[#171717]/15 pt-7 lg:mt-24"
        >
          <div className="flex items-center justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#8A8783]">
              Education
            </p>

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="text-[#8A8783]"
            />
          </div>

          <div className="mt-7 grid gap-7 sm:grid-cols-3 sm:gap-5 lg:gap-10">
            {education.map((item, index) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex items-center gap-4"
              >
                {/* Logo */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <img
                    src={item.logo}
                    alt={`${item.school} logo`}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h4 className="truncate font-display text-sm font-semibold text-[#171717]">
                    {item.school}
                  </h4>

                  <p className="mt-1 text-xs text-[#77736F]">
                    {item.degree} · {item.year}
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