import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Code2, Database, Layers3 } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const specialties = [
  { icon: Code2, label: 'WEB DEVELOPMENT', labelId: 'PENGEMBANGAN WEB' },
  { icon: Layers3, label: 'FULL-STACK', labelId: 'FULL-STACK' },
  { icon: Database, label: 'DATA ANALYTICS', labelId: 'ANALISIS DATA' },
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
  const { language } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#242424] text-white"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.04) 1px,
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
        <Hexagon className="left-[-80px] top-[12%] h-[190px] w-[220px] border-white opacity-20" />
        <Hexagon className="left-[5%] top-[29%] h-[90px] w-[105px] border-white opacity-15" />
        <Hexagon className="bottom-[5%] left-[-40px] h-[160px] w-[185px] border-white opacity-15" />
        <Hexagon className="right-[-70px] top-[36%] h-[200px] w-[230px] border-white opacity-20" />
        <Hexagon className="right-[5%] top-[19%] h-[85px] w-[100px] border-white opacity-15" />
        <Hexagon className="bottom-[7%] right-[-50px] h-[180px] w-[210px] border-white opacity-15" />
      </div>

      {/* Technical Lines */}
      <div className="pointer-events-none absolute bottom-0 left-[7%] top-0 hidden w-px bg-white/[0.06] lg:block" />
      <div className="pointer-events-none absolute bottom-0 right-[7%] top-0 hidden w-px bg-white/[0.06] lg:block" />

      {/* Main */}
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-4 pb-24 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">
        <div className="grid w-full items-center gap-8 sm:gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-8">

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
            <p className="mb-5 font-mono text-sm font-semibold tracking-wide text-[#35B83D] sm:text-base">
              {language === 'id' ? 'Halo, saya Safridha Audi' : "Hi, I'm Safridha Audi"}
            </p>

            {/* Main Title */}
            <h1 className="max-w-3xl font-display text-[clamp(2rem,8vw,3rem)] font-semibold leading-[1.02] tracking-[-.05em] sm:text-[clamp(3.2rem,6vw,5.5rem)] sm:leading-[1.02]">
              {language === 'id' ? 'Pengembang Web' : 'Web Developer'}
              <span className="mt-1 block text-white">
                & {language === 'id' ? 'Analis Data.' : 'Data Analyst.'}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-[#C2C2C2] sm:text-base">
              {language === 'id'
                ? 'Lulusan Teknik Informatika yang tertarik pada pengembangan web full-stack dan analisis data. Saya senang membangun aplikasi yang intuitif serta mengolah data menjadi insight yang mudah dipahami.'
                : 'An Informatics Engineering graduate interested in full-stack web development and data analytics. I enjoy building intuitive applications and turning data into clear, useful insights.'}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-[#168F2B] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#117523]"
              >
                {language === 'id' ? 'Lihat karya saya' : 'Explore my work'} <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border border-white/25 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                {language === 'id' ? 'Mari terhubung' : "Let's connect"}
              </a>
            </div>

            {/* Specialties */}
            <div className="mt-7 flex flex-wrap gap-2">
              {specialties.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="group flex items-center gap-2 border border-white/20 bg-white/5 px-3.5 py-2.5 transition-colors duration-300 hover:border-[#35B83D] hover:bg-white/10"
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.7}
                      className="text-[#35B83D]"
                    />

                    <span className="font-mono text-[9px] tracking-[.06em] text-[#D0D0D0] sm:text-[10px] sm:tracking-[.1em]">
                      {language === 'id' ? item.labelId : item.label}
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
            className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px]"
          >
            {/* Outer Frame */}
            <div
              className="pointer-events-none absolute -inset-4 border border-dashed border-white/25 sm:-inset-6"
              style={{
                clipPath:
                  'polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0 50%)',
              }}
            />

            {/* Photo */}
            <div className="profile-frame relative mx-auto aspect-square w-[90%]">

              {/* Outer Hexagon */}
              <div
                className="absolute inset-0 bg-[#444444]"
                style={{
                  clipPath:
                    'polygon(25% 1%,75% 1%,99% 50%,75% 99%,25% 99%,1% 50%)',
                }}
              />

              {/* White Border */}
              <div
                className="absolute inset-[7px] bg-[#242424]"
                style={{
                  clipPath:
                    'polygon(25% 1%,75% 1%,99% 50%,75% 99%,25% 99%,1% 50%)',
                }}
              />

              {/* Image */}
              <div
                className="absolute inset-[14px] overflow-hidden bg-[#383838]"
                style={{
                  clipPath:
                    'polygon(25% 1%,75% 1%,99% 50%,75% 99%,25% 99%,1% 50%)',
                }}
              >
                <img
                  src="/profile/safridha.jpg"
                  alt={language === 'id' ? 'Potret Safridha Audi' : 'Portrait of Safridha Audi'}
                  className="profile-image h-full w-full object-cover object-center"
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
              <span className="h-2 w-2 rounded-full bg-[#35B83D]" />
              <span className="h-px w-14 bg-white/40" />
            </div>

            <div className="absolute right-[-5px] top-[37%] hidden items-center lg:flex">
              <span className="h-px w-14 bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-[#35B83D]" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-7 left-6 flex items-center gap-3 lg:left-12">
          <ArrowDown
            size={15}
            strokeWidth={1.5}
          />

          <span className="font-mono text-[9px] uppercase tracking-[.16em] text-[#B5B5B5] sm:tracking-[.22em]">
            {language === 'id' ? 'GULIR UNTUK MENJELAJAH' : 'SCROLL TO EXPLORE'}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero