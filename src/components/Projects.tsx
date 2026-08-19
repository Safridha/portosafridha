import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ExternalLink,
  Github,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'QCF Digital Platform',
    category: 'WEB DEVELOPMENT',
    description:
      'A modern digital platform designed to present corporate culture, assessment, consulting, and organizational development solutions.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    year: '2026',
    image: '/projects/qcf.jpg',
    link: '#',
    github: '#',
  },
  {
    number: '02',
    title: '2Audi Digital',
    category: 'LANDING PAGE',
    description:
      'A modern landing page for a digital printing business, focusing on clear product presentation, responsive design, and conversion-oriented user experience.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    year: '2026',
    image: '/projects/2audi.jpg',
    link: '#',
    github: '#',
  },
  {
    number: '03',
    title: 'Government CRUD System',
    category: 'FULL STACK DEVELOPMENT',
    description:
      'A Laravel-based CRUD application for managing structured government-related data with a clean and functional administrative workflow.',
    technologies: ['Laravel', 'PHP', 'MySQL'],
    year: '2026',
    image: '/projects/government.jpg',
    link: '#',
    github: '#',
  },
  {
    number: '04',
    title: 'Qurrota Digital Platform',
    category: 'WEB DEVELOPMENT',
    description:
      'A responsive web project developed to create a professional digital presence with a modern interface and structured content.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    year: '2026',
    image: '/projects/qurrota.jpg',
    link: '#',
    github: '#',
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F1F0EE]"
    >
      {/* Background grid */}
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#168AAD]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6B6966]">
                03 / SELECTED WORK
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#171717] sm:text-5xl lg:text-7xl">
              Things I&apos;ve
              <span className="block text-[#0B5269]">
                built.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6B6966] sm:text-base">
              A selection of digital products, websites, and applications
              I&apos;ve worked on through development, experimentation, and
              continuous learning.
            </p>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="mt-20 space-y-20 lg:mt-28 lg:space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 0.8,
                delay: 0.05,
              }}
              className="group"
            >
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >

                {/* Project image */}
                <div className="relative">

                  {/* Number */}
                  <div
                    className={`absolute -top-8 z-10 font-display text-7xl font-semibold tracking-[-0.08em] text-[#D5D3CF] ${
                      index % 2 !== 0
                        ? 'right-0'
                        : 'left-0'
                    }`}
                  >
                    {project.number}
                  </div>

                  <a
                    href={project.link}
                    className="group/image relative block overflow-hidden border border-[#D2D0CC] bg-[#E1DFDB]"
                  >
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover/image:scale-[1.04] group-hover/image:grayscale-0"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#062B38]/0 transition-all duration-500 group-hover/image:bg-[#062B38]/20" />

                    {/* View button */}
                    <div className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center bg-white text-[#171717] opacity-0 shadow-lg transition-all duration-500 group-hover/image:translate-y-0 group-hover/image:opacity-100">
                      <ArrowUpRight size={19} />
                    </div>

                    {/* Corner label */}
                    <div className="absolute left-5 top-5 bg-[#171717]/90 px-3 py-2 backdrop-blur-sm">
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#8FCFD8]">
                        {project.category}
                      </span>
                    </div>
                  </a>
                </div>

                {/* Project information */}
                <div
                  className={
                    index % 2 !== 0
                      ? 'lg:pr-12'
                      : 'lg:pl-4'
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#168AAD]">
                      {project.category}
                    </span>

                    <span className="h-px w-8 bg-[#C8C6C2]" />

                    <span className="font-mono text-[9px] text-[#989591]">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-[#171717] transition-colors duration-300 group-hover:text-[#0B5269] sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B6966] sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-[#D2D0CC] bg-white px-3 py-2 font-mono text-[9px] tracking-[0.08em] text-[#55524F]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-9 flex items-center gap-6">
                    <a
                      href={project.link}
                      className="group/link flex items-center gap-2 text-sm font-medium text-[#171717] transition-colors hover:text-[#0B5269]"
                    >
                      View Project

                      <ExternalLink
                        size={15}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>

                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-[#6B6966] transition-colors hover:text-[#171717]"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-[#D2D0CC] pt-6 lg:mt-32"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#989591]">
              Selected projects
            </span>

            <span className="font-mono text-[9px] text-[#989591]">
              04 / 07
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects