import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const education = [
  {
    logo: '/education/ums.png',
    school: 'Universitas Muhammadiyah Surakarta',
    degree: { en: 'B.S. in Informatics Engineering · 2022 — 2026', id: 'S1 Teknik Informatika · 2022 — 2026' },
  },
  {
    logo: '/education/sma-batik-1.png',
    school: 'SMA Batik 1 Surakarta',
    degree: { en: 'Science track · 2019 — 2022', id: 'IPA · 2019 — 2022' },
  },
  {
    logo: '/education/smp-9.png',
    school: 'SMP Negeri 9 Surakarta',
    degree: { en: '2016 — 2019', id: '2016 — 2019' },
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
  const { language } = useLanguage()

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

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8783] sm:text-[11px] sm:tracking-[0.25em]">
            {language === 'id' ? 'Tentang Saya' : 'About Me'}
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,9vw,5.8rem)] font-semibold leading-[.92] tracking-[-.07em] sm:text-[clamp(3rem,6vw,5.8rem)] sm:leading-[.88]">
            {language === 'id' ? 'Bukan sekadar' : 'More than'}
            <span className="block text-[#171717]">
              {language === 'id' ? 'menulis kode.' : 'just a developer.'}
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
            {language === 'id' ? 'Saya ' : "I'm "}
            <strong className="font-semibold text-[#171717]">
              Safridha Audi
            </strong>
            {language === 'id'
              ? ', lulusan Teknik Informatika yang berfokus pada '
              : ', an Informatics Engineering graduate focused on '}
            <strong className="font-semibold text-[#171717]">
              {language === 'id'
                ? 'pengembangan web full-stack.'
                : 'full-stack web development.'}
            </strong>
          </p>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#6B6966] sm:text-base">
            {language === 'id'
              ? 'Saya menikmati proses membangun aplikasi web yang intuitif, mulai dari antarmuka hingga integrasi API dan basis data. Saya juga memiliki kemampuan analisis data sebagai keterampilan tambahan. Bagi saya, solusi yang baik bukan hanya berjalan—tetapi juga jelas, relevan, dan membantu penggunanya.'
              : 'I enjoy building intuitive web applications, from their interfaces to API and database integrations. I also bring data analysis as a complementary skill. To me, a good solution does more than work—it should be clear, relevant, and useful to the people who use it.'}
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6B6966] sm:text-base">
            {language === 'id'
              ? 'Saya juga menghargai kolaborasi, ketelitian, dan kemauan untuk terus belajar. Saya terbuka untuk bertumbuh bersama tim dan mengerjakan tantangan digital yang bermakna.'
              : "I value collaboration, attention to detail, and continuous learning. I'm eager to grow with a team and take on meaningful digital challenges."}
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
              {language === 'id' ? 'Pendidikan' : 'Education'}
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
                  <h4 className="font-display text-sm font-semibold leading-5 text-[#171717]">
                    {item.school}
                  </h4>

                  <p className="mt-0.5 text-xs leading-5 text-[#77736F]">
                    {item.degree[language]}
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