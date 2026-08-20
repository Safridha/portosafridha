import { useState } from "react";
import {
  BriefcaseBusiness,
  ChevronDown,
  ExternalLink,
  FolderOpen,
  GraduationCap,
  Users,
} from "lucide-react";

type Item = {
  title: string;
  organization?: string;
  period?: string;
  description: string;
  technologies?: string[];
  documentation?: string;
  link?: string;
};

type Section = {
  key: string;
  title: string;
  subtitle: string;
  icon: typeof FolderOpen;
  items: Item[];
};

const sections: Section[] = [
  {
    key: "projects",
    title: "Projects",
    subtitle:
      "Website dan sistem yang saya kerjakan dalam pengembangan web dan digital.",
    icon: FolderOpen,
    items: [
      {
        title: "Sistem Administrasi BPKPAD",
        organization: "BPKPAD",
        period: "2025 — 2026",
        description:
          "Mengembangkan dan membantu pengelolaan sistem informasi untuk mendukung kebutuhan administrasi dan pengolahan data di lingkungan BPKPAD. Sistem dibuat untuk membantu proses administrasi agar lebih terstruktur dan efisien.",
        technologies: ["PHP", "Laravel", "CSS", "MySQL"],
        documentation: "/documentation/bpkpad.png",
      },
      {
        title: "2 Audi Digital Printing",
        organization: "Landing Page",
        period: "2026",
        description:
          "Website landing page yang dikembangkan untuk memberikan informasi mengenai layanan digital printing, produk, dan kebutuhan pelanggan secara lebih mudah dan terstruktur.",
        technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
        documentation: "/documentation/2audi.png",
        link: "https://desafar.vercel.app/",
      },
      {
        title: "QCF — Our’anic Corporate Forum",
        organization: "Corporate Website",
        period: "2026",
        description:
          "Website untuk memperkenalkan Qur’anic Corporate Forum (QCF), sebuah platform yang berfokus pada pengembangan budaya organisasi, kepemimpinan, sumber daya manusia, dan transformasi digital berbasis nilai-nilai Qur’ani.",
        technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
        documentation: "/documentation/qcf.png",
      },
    ],
  },

  {
    key: "experience",
    title: "Experience",
    subtitle: "Pengalaman kerja, magang, dan program pengembangan profesional.",
    icon: BriefcaseBusiness,
    items: [
      {
        title: "Pengalaman Magang",
        organization: "Pengembangan Web & Sistem Informasi",
        period: "2025 — 2026",
        description:
          "Terlibat dalam pengembangan dan pengelolaan sistem informasi, termasuk membantu proses pengembangan aplikasi web, pengolahan data, serta kebutuhan administrasi digital.",
        technologies: ["PHP", "Laravel", "MySQL", "Web Development"],
        documentation: "/documentation/magang.png",
      },
      {
        title: "Studi Independen",
        organization: "RevoU",
        period: "2024 — 2025",
        description:
          "Mengikuti program Studi Independen bersama RevoU dengan fokus pada pengembangan kemampuan digital, analisis data, dan penerapan keterampilan melalui pembelajaran berbasis proyek.",
        technologies: [
          "Data Analytics",
          "Digital Skills",
          "Project Based Learning",
        ],
        documentation: "/documentation/revou.png",
      },
    ],
  },

  {
    key: "organization",
    title: "Organization",
    subtitle: "Kegiatan organisasi dan pengalaman berkolaborasi.",
    icon: Users,
    items: [
      {
        title: "Sekretaris Bidang Immawati",
        organization: "Ikatan Mahasiswa Muhammadiyah Adam Malik",
        period: "2022 — 2024",
        description:
          "Berperan sebagai sekretaris bidang Immawati dalam mendukung administrasi, dokumentasi, koordinasi kegiatan, serta pengelolaan kebutuhan organisasi.",
        documentation: "/documentation/immawati.png",
      },
      {
        title: "Staff Divisi Kaderisasi",
        organization: "Himpunan Mahasiswa Teknik Informatika UMS",
        period: "2022 — 2024",
        description:
          "Berperan dalam kegiatan organisasi dan kaderisasi mahasiswa Teknik Informatika, termasuk mendukung pelaksanaan kegiatan, koordinasi anggota, dan kebutuhan administrasi divisi.",
        documentation: "/documentation/hmti.png",
      },
    ],
  },

  {
    key: "certification",
    title: "Certification",
    subtitle: "Pelatihan dan sertifikasi yang telah diselesaikan.",
    icon: GraduationCap,
    items: [
          {
            title: 'Pemrograman Back-End',
            organization: 'Lembaga Pendidikan Solocom',
            period: 'Issued Aug 2024 · Expired Jan 2025',
            description:
              'Mengikuti pelatihan Pemrograman Back-End yang diselenggarakan oleh SOLOCOM dengan fokus pada pengembangan aplikasi web sisi server. Mempelajari dasar hingga implementasi pembuatan API, pengelolaan database, serta logika backend untuk membangun sistem yang efisien dan terstruktur.',
            technologies: [
              'Back-End',
              'API',
              'Database',
              'Web Development',
            ],
            documentation: '/documentation/backend-solocom.png',
          },
      
          {
            title: 'Create Your First Python Program',
            organization: 'Coursera',
            period: 'Issued Feb 2023',
            description:
              'Menyelesaikan proyek online melalui Coursera Project Network dengan fokus pada dasar pemrograman Python, termasuk pembuatan program sederhana, penggunaan variabel, serta penerapan logika dasar dalam pengembangan aplikasi.',
            technologies: [
              'Python',
              'Programming',
              'Coursera Project Network',
            ],
            documentation: '/documentation/python-coursera.png',
            link: 'https://www.coursera.org/account/accomplishments/verify/ZFCH7LFQHBDX',
          },
        ],
      },
    ]
  

function Work() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (key: string) => {
    setOpenSection((current) => (current === key ? null : key));
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#EAE9E7] text-[#171717]"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(23,23,23,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,23,23,.035) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        {/* HEADER */}
        <div className="border-t border-[#171717]/15 pt-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8A8783]">
            Work
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[.88] tracking-[-.07em]">
            My work &<span className="block text-[#5C5A58]">journey.</span>
          </h2>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#6B6966] sm:text-base">
            Proyek, pengalaman, organisasi, dan sertifikasi yang membentuk
            perjalanan saya di bidang teknologi dan pengembangan digital.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="mt-16 border-t border-[#171717]/15">
          {sections.map((section) => {
            const isOpen = openSection === section.key;
            const Icon = section.icon;

            return (
              <div key={section.key} className="border-b border-[#171717]/15">
                {/* SECTION HEADER */}
                <button
                  type="button"
                  onClick={() => toggleSection(section.key)}
                  className="group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors duration-200 hover:bg-[#171717]/[0.025] sm:py-8"
                  aria-expanded={isOpen}
                >
                  <div className="flex min-w-0 items-center gap-5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center border border-[#171717]/10 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#171717] text-white"
                          : "bg-[#F3F2F0] text-[#555250]"
                      }`}
                    >
                      <Icon size={19} strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                        {section.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#77736F]">
                        {section.subtitle}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center border border-[#171717]/10 transition-all duration-200 ${
                      isOpen
                        ? "bg-[#171717] text-white"
                        : "bg-transparent text-[#77736F]"
                    }`}
                  >
                    <ChevronDown
                      size={17}
                      strokeWidth={1.5}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* SECTION CONTENT */}
                {isOpen && (
                  <div className="pb-8">
                    {section.items.map((item, index) => (
                      <article
                        key={`${section.key}-${item.title}`}
                        className={`grid gap-8 border-t border-[#171717]/10 py-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12 ${
                          index === 0 ? "border-t-0 pt-4" : ""
                        }`}
                      >
                        {/* LEFT CONTENT */}
                        <div className="min-w-0">
                          {/* Number */}
                          <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#8A8783]">
                            {String(index + 1).padStart(2, "0")}
                          </p>

                          {/* Title + Period */}
                          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                            <h4 className="font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                              {item.title}
                            </h4>

                            {item.period && (
                              <span className="shrink-0 font-mono text-[8px] uppercase tracking-[0.2em] text-[#8A8783] sm:text-right">
                                {item.period}
                              </span>
                            )}
                          </div>

                          {/* Organization */}
                          {item.organization && (
                            <p className="mt-2 text-sm text-[#77736F]">
                              {item.organization}
                            </p>
                          )}

                          {/* Technologies */}
                          {item.technologies &&
                            item.technologies.length > 0 && (
                              <div className="mt-5 flex flex-wrap gap-2">
                                {item.technologies.map((technology) => (
                                  <span
                                    key={technology}
                                    className="border border-[#171717]/10 bg-[#F3F2F0] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-[#77736F]"
                                  >
                                    {technology}
                                  </span>
                                ))}
                              </div>
                            )}

                          {/* Description */}
                          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#5F5C59] sm:text-base">
                            {item.description}
                          </p>

                          {/* Website Button */}
                          {item.link && (
                            <div className="mt-7">
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 border border-[#171717]/20 bg-[#F3F2F0] px-5 py-3 text-sm font-medium text-[#171717] shadow-[0_2px_0_rgba(23,23,23,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#171717]/30 hover:bg-white hover:shadow-[0_4px_0_rgba(23,23,23,0.14)] active:translate-y-0 active:shadow-[0_1px_0_rgba(23,23,23,0.12)]"
                              >
                                Visit Website
                                <ExternalLink size={15} strokeWidth={1.7} />
                              </a>
                            </div>
                          )}
                        </div>

                        {/* DOCUMENTATION */}
                        <div className="lg:pt-7">
                          <p className="mb-3 font-mono text-[8px] uppercase tracking-[0.2em] text-[#999591]">
                            Documentation
                          </p>

                          {item.documentation ? (
                            <div className="w-full overflow-hidden border border-[#171717]/10 bg-white">
                              <img
                                src={item.documentation}
                                alt={`${item.title} documentation`}
                                loading="lazy"
                                className="block aspect-[4/3] h-auto w-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="flex aspect-[4/3] w-full items-center justify-center border border-[#171717]/10 bg-[#F3F2F0]">
                              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#999591]">
                                No documentation
                              </span>
                            </div>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
