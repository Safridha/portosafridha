import { motion } from 'framer-motion'
import { ArrowDown, Code2, Database, Layers3 } from 'lucide-react'

const specialties = [
  { icon: Code2, label: 'WEB DEVELOPMENT' },
  { icon: Layers3, label: 'FULL STACK' },
  { icon: Database, label: 'DATA ANALYTICS' },
]

function Hexagon({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute border border-[#B8B6B2] ${className}`}
      style={{
        clipPath:
          'polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%)',
      }}
    />
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F3F2F0] text-[#171717]"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(23,23,23,.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(23,23,23,.045) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Soft Light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-[100px]" />

      {/* Hexagon Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Hexagon className="left-[-80px] top-[12%] h-[190px] w-[220px] opacity-30" />
        <Hexagon className="left-[5%] top-[29%] h-[90px] w-[105px] opacity-20" />
        <Hexagon className="bottom-[5%] left-[-40px] h-[160px] w-[185px] opacity-25" />
        <Hexagon className="right-[-70px] top-[36%] h-[200px] w-[230px] opacity-30" />
        <Hexagon className="right-[5%] top-[19%] h-[85px] w-[100px] opacity-20" />
        <Hexagon className="bottom-[7%] right-[-50px] h-[180px] w-[210px] opacity-25" />
      </div>

      {/* Technical Lines */}
      <div className="pointer-events-none absolute bottom-0 left-[7%] top-0 hidden w-px bg-black/[0.06] lg:block" />
      <div className="pointer-events-none absolute bottom-0 right-[7%] top-0 hidden w-px bg-black/[0.06] lg:block" />

      {/* Main */}
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-6 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-8">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            {/* Main Title */}
            <h1 className="font-display text-[clamp(3.2rem,6vw,6rem)] font-semibold leading-[.86] tracking-[-.07em]">
              INFORMATICS
              <span className="block mt-2 text-[#5C5A58]">
                ENGINEER.
              </span>
            </h1>

            {/* Name */}
            <h2 className="mt-8 font-display text-xl font-semibold sm:text-2xl">
              Safridha Audi Apriliasunfity
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[590px] text-sm leading-7 text-[#666360] sm:text-[15px]">
              Informatics Engineering graduate focused on
              building functional digital experiences,
              developing web applications, and transforming
              data into meaningful insights.
            </p>

            {/* Specialties */}
            <div className="mt-7 flex flex-wrap gap-2">
              {specialties.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-2 border border-[#D2D0CC] bg-white/80 px-3.5 py-2.5 transition-colors duration-300 hover:border-[#777471] hover:bg-white"
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.7}
                      className="text-[#555250]"
                    />

                    <span className="font-mono text-[8px] tracking-[.1em] text-[#555250] sm:text-[9px]">
                      {item.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            {/* Outer Frame */}
            <div
              className="pointer-events-none absolute -inset-6 border border-dashed border-[#AAA8A4]/40"
              style={{
                clipPath:
                  'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0 50%)',
              }}
            />

            {/* Photo */}
            <div className="relative mx-auto aspect-square w-[90%]">

              {/* Outer Hexagon */}
              <div
                className="absolute inset-0 bg-[#C4C2BE]"
                style={{
                  clipPath:
                    'polygon(25% 1%,75% 1%,99% 50%,75% 99%,25% 99%,1% 50%)',
                }}
              />

              {/* White Border */}
              <div
                className="absolute inset-[7px] bg-[#F3F2F0]"
                style={{
                  clipPath:
                    'polygon(25% 1%,75% 1%,99% 50%,75% 99%,25% 99%,1% 50%)',
                }}
              />

              {/* Image */}
              <div
                className="absolute inset-[14px] overflow-hidden bg-[#BDBBB7]"
                style={{
                  clipPath:
                    'polygon(25% 1%,75% 1%,99% 50%,75% 99%,25% 99%,1% 50%)',
                }}
              >
                <img
                  src="/profile/safridha.jpg"
                  alt="Safridha Audi"
                  className="h-full w-full object-contain object-center"
                />
              </div>

              {/* Inner Frame */}
              <div
                className="pointer-events-none absolute inset-[22px] border border-white/60"
                style={{
                  clipPath:
                    'polygon(25% 1%,75% 1%,99% 50%,75% 99%,25% 99%,1% 50%)',
                }}
              />
            </div>

            {/* Connection Lines */}
            <div className="absolute left-0 top-1/2 hidden items-center lg:flex">
              <span className="h-2 w-2 rounded-full bg-[#666360]" />
              <span className="h-px w-14 bg-[#A7A5A1]" />
            </div>

            <div className="absolute right-[-5px] top-[37%] hidden items-center lg:flex">
              <span className="h-px w-14 bg-[#A7A5A1]" />
              <span className="h-2 w-2 rounded-full bg-[#666360]" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-7 left-6 flex items-center gap-3 lg:left-12">
          <ArrowDown
            size={15}
            strokeWidth={1.5}
          />

          <span className="font-mono text-[8px] uppercase tracking-[.22em] text-[#8A8783]">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero