import { useState } from "react";
import {
  ArrowDown,
  ExternalLink,
  Award,
  BriefcaseBusiness,
  FolderKanban,
  Users,
} from "lucide-react";

type SectionId = "projects" | "experience" | "organization" | "certificates";

const sections = [
  {
    id: "projects" as SectionId,
    title: "Proyek",
    description:
      "Beberapa website dan sistem yang saya kerjakan dalam pengembangan web dan digital.",
    icon: FolderKanban,
  },
  {
    id: "experience" as SectionId,
    title: "Experience",
    description:
      "Pengalaman yang saya dapatkan melalui pekerjaan, magang, dan aktivitas profesional.",
    icon: BriefcaseBusiness,
  },
  {
    id: "organization" as SectionId,
    title: "Organisasi",
    description:
      "Pengalaman berorganisasi dan berkontribusi dalam kegiatan kemahasiswaan.",
    icon: Users,
  },
  {
    id: "certificates" as SectionId,
    title: "Sertifikasi",
    description:
      "Pelatihan dan pembelajaran yang mendukung perkembangan kemampuan teknis saya.",
    icon: Award,
  },
];

/* =========================
   PROJECTS
========================= */

const projects = [
  {
    title: "BPKPAD",
    year: "2025 — 2026",
    description:
      "Mengembangkan dan membantu pengelolaan sistem informasi untuk mendukung kebutuhan administrasi dan pengolahan data di lingkungan BPKPAD. Sistem dibuat untuk membantu proses administrasi agar lebih terstruktur dan efisien.",
    stack: "PHP · Laravel · CSS · MySQL",
  },
  {
    title: "2 Audi Digital Printing",
    year: "2026",
    description:
      "Mengembangkan website landing page untuk 2 Audi Digital Printing sebagai media informasi layanan, produk, dan identitas digital perusahaan.",
    stack: "React · Vite · Tailwind CSS",
    link: "https://audi-digital-printing.vercel.app/",
  },
  {
    title: "Qurrota",
    year: "2026",
    description:
      "Mengembangkan website untuk Qurrota sebagai platform digital yang berkaitan dengan QCF (Qurrota Corporate Forum), dengan fokus pada penyajian informasi program dan layanan secara terstruktur.",
    stack: "Web Development",
    link: "https://qurota.id",
  },
  {
    title: "Desafar",
    year: "2026",
    description:
      "Mengembangkan website untuk Desafar sebagai media informasi dan digital presence untuk layanan perjalanan umroh.",
    stack: "Web Development",
    link: "https://desafar.vercel.app/",
  },
];

/* =========================
   EXPERIENCE
========================= */

const experiences = [
  {
    title: "Magang — BPKPAD",
    year: "2025 — 2026",
    description:
      "Mengembangkan dan membantu pengelolaan sistem informasi untuk mendukung kebutuhan administrasi dan pengolahan data di lingkungan BPKPAD.",
  },
  {
    title: "Studi Independen — RevoU",
    year: "2024",
    description:
      "Mengikuti program Studi Independen di RevoU sebagai bagian dari pengembangan kemampuan di bidang digital. Program ini memberikan pengalaman belajar berbasis proyek serta memperluas pemahaman mengenai dunia digital dan profesional.",
  },
];

/* =========================
   ORGANIZATION
========================= */

const organizations = [
  {
    title: "Sekretaris Bidang Immawati — IMM Adam Malik",
    year: "2022 — 2024",
    description:
      "Berperan sebagai sekretaris bidang Immawati dalam Ikatan Mahasiswa Muhammadiyah Adam Malik, dengan tanggung jawab dalam administrasi, dokumentasi, dan koordinasi kegiatan bidang.",
  },
  {
    title: "HMTI UMS",
    year: "2022 — 2024",
    description:
      "Berpartisipasi dalam kegiatan organisasi mahasiswa Teknik Informatika dan berbagai aktivitas kemahasiswaan.",
  },
];

/* =========================
   CERTIFICATES
========================= */

const certificates = [
  {
    title: "Pemrograman Back-End",
    issuer: "SOLOCOM",
    description:
      "Mengikuti pelatihan Pemrograman Back-End dengan fokus pada pengembangan aplikasi web sisi server, pembuatan API, pengelolaan database, serta logika backend untuk membangun sistem yang efisien dan terstruktur.",
  },
  {
    title: "Python Programming",
    issuer: "Coursera Project Network",
    description:
      "Menyelesaikan proyek online dengan fokus pada dasar pemrograman Python, termasuk pembuatan program sederhana, penggunaan variabel, dan penerapan logika dasar dalam pengembangan aplikasi.",
    link: "https://www.coursera.org/account/accomplishments/verify/ZFCH7LFQHBDX",
  },
  {
    title: "Studi Independen — RevoU",
    issuer: "RevoU",
    description:
      "Mengikuti program Studi Independen di RevoU sebagai bagian dari pengembangan kemampuan dan pengalaman di bidang digital.",
  },
];

function Work() {
  // Semua dropdown tertutup ketika halaman pertama kali dibuka
  const [openSection, setOpenSection] = useState<SectionId | null>(null);

  // Accordion behavior
  const handleToggle = (id: SectionId) => {
    setOpenSection((current) => (current === id ? null : id));
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
        <div className="mb-12 border-t border-[#171717]/15 pt-6 lg:mb-16">
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8A8783]">
            Work
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[.88] tracking-[-.07em]">
            My work &
            <span className="block text-[#5C5A58]">
              journey.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#6B6966] sm:text-base">
            Proyek, pengalaman, organisasi, dan sertifikasi yang membentuk
            perjalanan saya di bidang teknologi dan pengembangan digital.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="border-t border-[#171717]/15">
          {sections.map((section) => {
            const Icon = section.icon;
            const isOpen = openSection === section.id;

            return (
              <div key={section.id} className="border-b border-[#171717]/15">
                {/* SECTION BUTTON */}
                <button
                  type="button"
                  onClick={() => handleToggle(section.id)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-5 py-6 text-left sm:py-7"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    {/* Icon */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-transform duration-200 ${
                        isOpen
                          ? "border-[#171717] bg-[#171717] text-white"
                          : "border-[#171717]/10 bg-white text-[#555250] group-hover:-translate-y-0.5 group-hover:border-[#171717]/30"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold sm:text-xl">
                        {section.title}
                      </h3>

                      <p className="mt-1 max-w-xl text-xs leading-5 text-[#77736F] sm:text-sm">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border border-[#171717]/10 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ArrowDown size={15} strokeWidth={1.5} />
                  </span>
                </button>

                {/* DROPDOWN */}
                {isOpen && (
                  <div className="pb-7 sm:pl-14">
                    {/* ================= PROJECTS ================= */}
                    {section.id === "projects" && (
                      <div className="space-y-4">
                        {projects.map((project) => (
                          <article
                            key={project.title}
                            className="border border-[#171717]/10 bg-white/60 p-5 sm:p-6"
                          >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-3">
                                  <h4 className="font-display text-base font-semibold sm:text-lg">
                                    {project.title}
                                  </h4>

                                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#999591]">
                                    {project.year}
                                  </span>
                                </div>

                                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6B6966]">
                                  {project.description}
                                </p>

                                <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.12em] text-[#8A8783]">
                                  {project.stack}
                                </p>
                              </div>

                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex w-fit shrink-0 items-center gap-2 border border-[#171717]/10 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-[#555250] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#171717]/30"
                                >
                                  Website
                                  <ExternalLink size={11} />
                                </a>
                              )}
                            </div>
                          </article>
                        ))}
                      </div>
                    )}

                    {/* ================= EXPERIENCE ================= */}
                    {section.id === "experience" && (
                      <div className="space-y-4">
                        {experiences.map((item) => (
                          <article
                            key={item.title}
                            className="border border-[#171717]/10 bg-white/60 p-5 sm:p-6"
                          >
                            <div className="flex flex-wrap items-center gap-3">
                              <h4 className="font-display text-base font-semibold sm:text-lg">
                                {item.title}
                              </h4>

                              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#999591]">
                                {item.year}
                              </span>
                            </div>

                            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6B6966]">
                              {item.description}
                            </p>
                          </article>
                        ))}
                      </div>
                    )}

                    {/* ================= ORGANIZATION ================= */}
                    {section.id === "organization" && (
                      <div className="space-y-4">
                        {organizations.map((item) => (
                          <article
                            key={item.title}
                            className="border border-[#171717]/10 bg-white/60 p-5 sm:p-6"
                          >
                            <div className="flex flex-wrap items-center gap-3">
                              <h4 className="font-display text-base font-semibold sm:text-lg">
                                {item.title}
                              </h4>

                              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#999591]">
                                {item.year}
                              </span>
                            </div>

                            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6B6966]">
                              {item.description}
                            </p>
                          </article>
                        ))}
                      </div>
                    )}

                    {/* ================= CERTIFICATES ================= */}
                    {section.id === "certificates" && (
                      <div className="space-y-4">
                        {certificates.map((item) => (
                          <article
                            key={item.title}
                            className="border border-[#171717]/10 bg-white/60 p-5 sm:p-6"
                          >
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                              <div>
                                <h4 className="font-display text-base font-semibold sm:text-lg">
                                  {item.title}
                                </h4>

                                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#999591]">
                                  {item.issuer}
                                </p>
                              </div>

                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex w-fit shrink-0 items-center gap-2 border border-[#171717]/10 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-[#555250] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#171717]/30"
                                >
                                  Credential
                                  <ExternalLink size={11} />
                                </a>
                              )}
                            </div>

                            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#6B6966]">
                              {item.description}
                            </p>
                          </article>
                        ))}
                      </div>
                    )}
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
