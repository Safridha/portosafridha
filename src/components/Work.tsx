import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FolderKanban,
  BriefcaseBusiness,
  Users,
  Award,
  ChevronDown,
  ExternalLink,
} from 'lucide-react'

type Project = {
  title: string
  category: string
  organization: string
  period: string
  description: string
  technologies: string[]
  link?: string
}

type Experience = {
  position: string
  organization: string
  type: string
  period: string
  location?: string
  description: string[]
}

type Organization = {
  position: string
  organization: string
  period: string
  description: string[]
}

type Certification = {
  title: string
  issuer: string
  period: string
  description: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'Sistem Administrasi BPKPAD',
    category: 'WEB APPLICATION',
    organization:
      'Badan Pengelolaan Keuangan Pendapatan dan Aset Daerah Kabupaten Sukoharjo',
    period: 'Maret 2025 — April 2025',
    description:
      'Sistem administrasi berbasis web yang dikembangkan untuk membantu proses administrasi, pengelolaan data, pengajuan, tracking, dan manajemen dokumen di lingkungan BPKPAD.',
    technologies: ['PHP', 'Laravel', 'CSS', 'MySQL'],
  },
  {
    title: '2 Audi Digital Printing',
    category: 'LANDING PAGE',
    organization: '2 Audi Digital Printing',
    period: '2026',
    description:
      'Website landing page yang dikembangkan untuk memberikan informasi mengenai layanan digital printing, produk, dan kebutuhan pelanggan secara lebih mudah dan terstruktur.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    link: 'https://audi-digital-printing.vercel.app/',
  },
  {
    title: 'QCF — Qur’anic Corporate Forum',
    category: 'CORPORATE WEBSITE',
    organization: 'Qur’anic Corporate Forum',
    period: '2026',
    description:
      'Website untuk memperkenalkan Qur’anic Corporate Forum (QCF), sebuah platform yang berfokus pada pengembangan budaya organisasi, kepemimpinan, sumber daya manusia, dan transformasi digital berbasis nilai-nilai Qur’ani.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    link: 'https://qurota.id/',
  },
  {
    title: 'Desafar',
    category: 'UMROH WEBSITE',
    organization: 'Desafar',
    period: '2026',
    description:
      'Website yang dikembangkan untuk mendukung kebutuhan informasi dan layanan perjalanan umroh, termasuk penyajian informasi program dan berbagai kebutuhan digital Desafar.',
    technologies: ['Web Development', 'React', 'Vite'],
    link: 'https://desafar.vercel.app/',
  },
]

const experiences: Experience[] = [
  {
    position: 'Pengembang Web',
    organization:
      'Badan Pengelolaan Keuangan Pendapatan dan Aset Daerah Kabupaten Sukoharjo',
    type: 'Apprenticeship',
    period: 'Maret 2025 — April 2025',
    location: 'Sukoharjo, Jawa Tengah · On-site',
    description: [
      'Mengembangkan aplikasi web untuk mendukung administrasi surat permohonan pajak daerah menggunakan PHP, CSS, dan Laravel.',
      'Merancang dan mengimplementasikan fitur pengajuan, tracking, dan manajemen dokumen.',
      'Berkolaborasi dengan tim internal dalam analisis kebutuhan dan peningkatan user experience.',
      'Melakukan pengujian sistem untuk memastikan fungsionalitas berjalan optimal.',
      'Melakukan maintenance dan perbaikan bug untuk menjaga performa aplikasi.',
    ],
  },
  {
    position: 'Analis Data',
    organization: 'RevoU',
    type: 'Apprenticeship / Studi Independen',
    period: 'September 2024 — Desember 2024',
    location: 'Remote',
    description: [
      'Melakukan analisis data penjualan secara end-to-end, mulai dari data cleaning hingga visualisasi.',
      'Mengolah dan memvisualisasikan data menggunakan Microsoft Excel dan Power BI.',
      'Mengidentifikasi pola, tren, dan peluang dari data untuk menghasilkan insight bisnis.',
      'Mengembangkan rekomendasi strategis berbasis data untuk mendukung pengambilan keputusan.',
      'Berkontribusi dalam peningkatan keberlanjutan dan performa bisnis melalui analisis data.',
    ],
  },
]

const organizations: Organization[] = [
  {
    position: 'Sekretaris Bidang Immawati',
    organization: 'Ikatan Mahasiswa Muhammadiyah (IMM) Adam Malik',
    period: '2022 — 2024',
    description: [
      'Mendukung administrasi dan koordinasi kegiatan bidang Immawati.',
      'Mengelola dokumentasi dan kebutuhan administrasi kegiatan organisasi.',
      'Berkolaborasi dengan anggota bidang dalam pelaksanaan program kerja.',
    ],
  },
  {
    position: 'Staff Divisi Kaderisasi',
    organization: 'Himpunan Mahasiswa Teknik Informatika UMS',
    period: '2022 — 2024',
    description: [
      'Berperan dalam kegiatan dan program kerja Divisi Kaderisasi.',
      'Mendukung pelaksanaan kegiatan organisasi dan pengembangan anggota.',
      'Berkolaborasi dengan pengurus dan anggota dalam menjalankan program kerja.',
    ],
  },
]

const certifications: Certification[] = [
  {
    title: 'Pemrograman Back-End',
    issuer: 'Lembaga Pendidikan Solocom',
    period: 'Agustus 2024 — Januari 2025',
    description:
      'Mengikuti pelatihan Pemrograman Back-End dengan fokus pada pengembangan aplikasi web sisi server. Mempelajari dasar hingga implementasi pembuatan API, pengelolaan database, serta logika backend untuk membangun sistem yang efisien dan terstruktur.',
  },
  {
    title: 'Create Your First Python Program',
    issuer: 'Coursera Project Network',
    period: 'Februari 2023',
    description:
      'Menyelesaikan proyek online melalui Coursera Project Network dengan fokus pada dasar pemrograman Python, termasuk pembuatan program sederhana, penggunaan variabel, serta penerapan logika dasar dalam pengembangan aplikasi.',
    link: 'https://www.coursera.org/account/accomplishments/verify/ZFCH7LFQHBDX',
  },
]

function Work() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection((current) =>
      current === section ? null : section
    )
  }

  return (
    <section
      id="work"
      className="relative w-full bg-[#f7f7f5] text-[#171717]"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 lg:px-20">

        {/* HEADER */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8A8783]">
    Work
  </p>

  <h2 className="mt-5 max-w-4xl font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[.88] tracking-[-.07em]">
    Selected
    <span className="block text-[#5C5A58]">
      works & experiences.
    </span>
  </h2>

  <p className="mt-8 max-w-3xl text-sm leading-7 text-[#6B6966] sm:text-base">
    Proyek, pengalaman, organisasi, dan sertifikasi yang membentuk
    perjalanan saya di bidang teknologi dan pengembangan digital.
  </p>
</motion.div>

        {/* ACCORDION */}
        <div className="border-t border-[#d9d9d6]">

          {/* ================= PROJECTS ================= */}
          <div className="border-b border-[#d9d9d6]">
            <button
              type="button"
              onClick={() => toggleSection('projects')}
              className="group flex w-full items-center justify-between py-7 text-left"
              aria-expanded={openSection === 'projects'}
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#171717] text-white">
                  <FolderKanban size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.02em]">
                    Proyek
                  </h3>

                  <p className="mt-1 text-sm text-[#777773]">
                    Website dan sistem yang pernah saya bangun.
                  </p>
                </div>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d5d5d1]">
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`transition-transform duration-300 ${
                    openSection === 'projects'
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </div>
            </button>

            {openSection === 'projects' && (
              <div className="pb-8">
                {projects.map((project, index) => (
                  <article
                    key={project.title}
                    className="border-t border-[#e1e1de] py-8 md:py-10"
                  >
                    <div className="grid gap-8 lg:grid-cols-[80px_minmax(0,1fr)_280px]">

                      {/* NUMBER */}
                      <div className="hidden pt-2 text-[10px] tracking-[0.3em] text-[#999995] lg:block">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* MAIN INFORMATION */}
                      <div>
                        <div className="mb-3 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#92928e]">
                          <span>
                            Project {String(index + 1).padStart(2, '0')}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-[#999995]" />

                          <span>{project.category}</span>
                        </div>

                        <h4 className="text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                          {project.title}
                        </h4>

                        <p className="mt-2 text-sm text-[#777773]">
                          {project.organization}
                          <span className="mx-2">·</span>
                          {project.period}
                        </p>

                        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#62625f]">
                          {project.description}
                        </p>

                        {/* TECHNOLOGIES */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="border border-[#d8d8d4] px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[#777773]"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        {/* WEBSITE */}
                        <div className="mt-6">
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                inline-flex
                                items-center
                                gap-2
                                border
                                border-[#cfcfcb]
                                bg-[#f7f7f5]
                                px-4
                                py-2.5
                                text-xs
                                text-[#555552]
                                transition-all
                                duration-200
                                ease-out
                                hover:-translate-y-0.5
                                hover:border-[#bcbcb8]
                                hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                                active:translate-y-0
                                active:shadow-none
                              "
                            >
                              Lihat Website

                              <ExternalLink
                                size={13}
                                strokeWidth={1.5}
                              />
                            </a>
                          ) : (
                            <span className="text-xs italic text-[#9a9a96]">
                              Website belum tersedia
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* ================= EXPERIENCE ================= */}
          <div className="border-b border-[#d9d9d6]">
            <button
              type="button"
              onClick={() => toggleSection('experience')}
              className="group flex w-full items-center justify-between py-7 text-left"
              aria-expanded={openSection === 'experience'}
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#171717] text-white">
                  <BriefcaseBusiness size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.02em]">
                    Pengalaman
                  </h3>

                  <p className="mt-1 text-sm text-[#777773]">
                    Pengalaman kerja dan apprenticeship.
                  </p>
                </div>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d5d5d1]">
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`transition-transform duration-300 ${
                    openSection === 'experience'
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </div>
            </button>

            {openSection === 'experience' && (
              <div className="pb-8">
                {experiences.map((experience, index) => (
                  <article
                    key={`${experience.position}-${experience.organization}`}
                    className="border-t border-[#e1e1de] py-8"
                  >
                    <div className="grid gap-6 md:grid-cols-[80px_minmax(0,1fr)]">

                      <div className="text-[10px] tracking-[0.3em] text-[#999995]">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-2xl font-medium tracking-[-0.025em]">
                            {experience.position}
                          </h4>

                          <span className="text-[9px] uppercase tracking-[0.25em] text-[#999995]">
                            {experience.type}
                          </span>
                        </div>

                        <p className="mt-2 text-sm text-[#777773]">
                          {experience.organization}
                        </p>

                        <p className="mt-1 text-sm text-[#999995]">
                          {experience.period}

                          {experience.location && (
                            <>
                              <span className="mx-2">·</span>
                              {experience.location}
                            </>
                          )}
                        </p>

                        <ul className="mt-6 max-w-4xl space-y-2 text-[15px] leading-7 text-[#62625f]">
                          {experience.description.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3"
                            >
                              <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#777773]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* ================= ORGANIZATION ================= */}
          <div className="border-b border-[#d9d9d6]">
            <button
              type="button"
              onClick={() => toggleSection('organization')}
              className="group flex w-full items-center justify-between py-7 text-left"
              aria-expanded={openSection === 'organization'}
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#171717] text-white">
                  <Users size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.02em]">
                    Organisasi
                  </h3>

                  <p className="mt-1 text-sm text-[#777773]">
                    Kegiatan organisasi dan kontribusi selama perkuliahan.
                  </p>
                </div>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d5d5d1]">
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`transition-transform duration-300 ${
                    openSection === 'organization'
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </div>
            </button>

            {openSection === 'organization' && (
              <div className="pb-8">
                {organizations.map((organization, index) => (
                  <article
                    key={`${organization.position}-${organization.organization}`}
                    className="border-t border-[#e1e1de] py-8"
                  >
                    <div className="grid gap-6 md:grid-cols-[80px_minmax(0,1fr)]">

                      <div className="text-[10px] tracking-[0.3em] text-[#999995]">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div>
                        <h4 className="text-2xl font-medium tracking-[-0.025em]">
                          {organization.position}
                        </h4>

                        <p className="mt-2 text-sm text-[#777773]">
                          {organization.organization}
                        </p>

                        <p className="mt-1 text-sm text-[#999995]">
                          {organization.period}
                        </p>

                        <ul className="mt-6 max-w-4xl space-y-2 text-[15px] leading-7 text-[#62625f]">
                          {organization.description.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3"
                            >
                              <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-[#777773]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* ================= CERTIFICATIONS ================= */}
          <div className="border-b border-[#d9d9d6]">
            <button
              type="button"
              onClick={() => toggleSection('certifications')}
              className="group flex w-full items-center justify-between py-7 text-left"
              aria-expanded={openSection === 'certifications'}
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#171717] text-white">
                  <Award size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.02em]">
                    Sertifikasi
                  </h3>

                  <p className="mt-1 text-sm text-[#777773]">
                    Sertifikasi dan pelatihan yang pernah diselesaikan.
                  </p>
                </div>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d5d5d1]">
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`transition-transform duration-300 ${
                    openSection === 'certifications'
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </div>
            </button>

            {openSection === 'certifications' && (
              <div className="pb-8">
                {certifications.map((certification, index) => (
                  <article
                    key={certification.title}
                    className="border-t border-[#e1e1de] py-8"
                  >
                    <div className="grid gap-6 md:grid-cols-[80px_minmax(0,1fr)]">

                      <div className="text-[10px] tracking-[0.3em] text-[#999995]">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div>
                        <h4 className="text-2xl font-medium tracking-[-0.025em]">
                          {certification.title}
                        </h4>

                        <p className="mt-2 text-sm text-[#777773]">
                          {certification.issuer}
                        </p>

                        <p className="mt-1 text-sm text-[#999995]">
                          {certification.period}
                        </p>

                        <p className="mt-6 max-w-4xl text-[15px] leading-7 text-[#62625f]">
                          {certification.description}
                        </p>

                        {certification.link && (
                          <div className="mt-6">
                            <a
                              href={certification.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                inline-flex
                                items-center
                                gap-2
                                border
                                border-[#cfcfcb]
                                bg-[#f7f7f5]
                                px-4
                                py-2.5
                                text-xs
                                text-[#555552]
                                transition-all
                                duration-200
                                ease-out
                                hover:-translate-y-0.5
                                hover:border-[#bcbcb8]
                                hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                                active:translate-y-0
                                active:shadow-none
                              "
                            >
                              Lihat Credential

                              <ExternalLink
                                size={13}
                                strokeWidth={1.5}
                              />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Work