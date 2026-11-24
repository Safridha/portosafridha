import {
  BriefcaseBusiness,
  ExternalLink,
  FolderOpen,
  GraduationCap,
  Users,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

type Item = {
  title: string;
  titleId?: string;
  organization?: string;
  organizationId?: string;
  period?: string;
  periodId?: string;
  description: string;
  descriptionId?: string;
  technologies?: string[];
  documentation?: string;
  link?: string;
};

type Section = {
  key: string;
  title: string;
  titleId?: string;
  subtitle: string;
  subtitleId?: string;
  icon: typeof FolderOpen;
  items: Item[];
};

const sections: Section[] = [
  {
    key: "projects",
    title: "Projects",
    titleId: "Proyek",
    subtitle:
      "Websites and digital systems I've built to address real needs, from information systems to customer-facing landing pages.",
    subtitleId:
      "Aplikasi dan situs web yang saya kerjakan untuk menjawab kebutuhan nyata, dari sistem informasi hingga landing page.",
    icon: FolderOpen,
    items: [
      {
        title: "BPKPAD Administration System",
        organization: "BPKPAD",
        period: "2025 — 2026",
        description:
          "Helped develop and maintain an information system for BPKPAD's administrative and data-processing needs. The system supports more structured administrative workflows and information management.",
        descriptionId:
          "Mengembangkan dan mendukung pengelolaan sistem informasi untuk kebutuhan administrasi dan pengolahan data BPKPAD. Sistem ini membantu merapikan alur kerja administrasi agar proses pengelolaan informasi lebih terstruktur.",
        technologies: ["PHP", "Laravel", "CSS", "MySQL"],
        documentation: "/documentation/bpkpad.png",
      },
      {
        title: "2 Audi Digital Printing",
        organization: "Digital Printing Website",
        organizationId: "Landing Page",
        period: "2026",
        description:
          "Built a digital printing website that presents services and products in a clear, organized way. Its responsive design helps customers find the printing services they need.",
        descriptionId:
          "Membangun situs percetakan digital yang menyajikan informasi layanan dan produk secara terstruktur. Tampilan responsif membantu pelanggan menemukan layanan cetak yang mereka butuhkan.",
        technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
        documentation: "/documentation/2audi.png",
        link: "https://2audiprinting.my.id/",
      },
      {
        title: "QCF — Qur'anic Corporate Forum",
        organization: "Corporate Website",
        period: "2026",
        description:
          "Built the official website for Qur'anic Corporate Forum (QCF), highlighting its work in organizational culture, leadership, human resources, and digital transformation guided by Qur'anic values.",
        descriptionId:
          "Membangun situs resmi Qur'anic Corporate Forum (QCF) untuk memperkenalkan fokus organisasi pada budaya organisasi, kepemimpinan, SDM, dan transformasi digital berlandaskan nilai-nilai Al-Qur'an.",
        technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
        documentation: "/documentation/qcf.png",
        link: "https://qurota.id/",
      },
    ],
  },

  {
    key: "experience",
    title: "Experience",
    titleId: "Pengalaman",
    subtitle:
      "Professional experience and learning programs that have shaped how I work and grow.",
    subtitleId:
      "Pengalaman profesional dan program pengembangan yang membentuk cara saya bekerja dan belajar.",
    icon: BriefcaseBusiness,
    items: [
      {
        title: "Internship Experience",
        titleId: "Pengalaman Magang",
        organization: "Web Development & Information Systems",
        organizationId: "Pengembangan Web & Sistem Informasi",
        period: "2025 — 2026",
        description:
          "Contributed to the development and maintenance of information systems, including web application development, data processing, and digital administrative needs.",
        descriptionId:
          "Berkontribusi dalam pengembangan dan pengelolaan sistem informasi, termasuk mendukung pembuatan aplikasi web, pengolahan data, dan kebutuhan administrasi digital.",
        technologies: ["PHP", "Laravel", "MySQL", "Web Development"],
        documentation: "/documentation/magang.png",
      },
      {
        title: "Independent Study Program",
        titleId: "Studi Independen",
        organization: "RevoU",
        period: "2024",
        description:
          "Completed RevoU's Independent Study Program focused on data analytics. Analyzed sales data end to end—from cleaning and processing to visualization with Microsoft Excel and Power BI—and developed data-driven insights and recommendations.",
        descriptionId:
          "Menyelesaikan program Studi Independen RevoU dengan fokus analisis data. Mengerjakan analisis data penjualan dari pembersihan hingga visualisasi menggunakan Microsoft Excel dan Power BI, lalu menyusun insight serta rekomendasi berbasis data.",
        technologies: [
          "Data Analytics",
          "Microsoft Excel",
          "Power BI",
          "Data Visualization",
        ],
        documentation: "/documentation/revou.png",
      },
    ],
  },

  {
    key: "organization",
    title: "Leadership & Organizations",
    titleId: "Organisasi",
    subtitle:
      "Experiences in collaboration, coordination, and community contribution throughout my studies.",
    subtitleId:
      "Pengalaman berkolaborasi, berkoordinasi, dan berkontribusi selama masa perkuliahan.",
    icon: Users,
    items: [
      {
        title: "Secretary of the Immawati Division",
        organization: "Ikatan Mahasiswa Muhammadiyah Adam Malik",
        period: "2022 — 2024",
        description:
          "Served as secretary of the Immawati Division, supporting administration, documentation, activity coordination, and organizational operations.",
        descriptionId:
          "Menjalankan tugas sekretaris Divisi Immawati, termasuk mendukung administrasi, dokumentasi, koordinasi kegiatan, dan pengelolaan organisasi.",
        documentation: "/documentation/immawati.png",
      },
      {
        title: "Cadre Development Division Staff",
        organization: "Himpunan Mahasiswa Teknik Informatika UMS",
        period: "2022 — 2024",
        description:
          "Contributed to organizational activities and student development within UMS's Informatics Engineering student association, supporting events, member coordination, and divisional administration.",
        descriptionId:
          "Berkontribusi dalam kegiatan organisasi dan pengembangan mahasiswa di Himpunan Mahasiswa Teknik Informatika UMS, termasuk mendukung pelaksanaan acara, koordinasi anggota, dan administrasi divisi.",
        documentation: "/documentation/hmti.png",
      },
    ],
  },

  {
    key: "certification",
    title: "Certifications",
    titleId: "Sertifikasi",
    subtitle:
      "Training and certifications that have supported my technical development.",
    subtitleId:
      "Pelatihan dan sertifikasi yang mendukung pengembangan kemampuan teknis saya.",
    icon: GraduationCap,
    items: [
      {
        title: "Back-End Programming",
        organization: "Solocom Education Institution",
        period: "Issued Aug 2024 · Expired Jan 2025",
        periodId: "Terbit Agu 2024 · Kedaluwarsa Jan 2025",
        description:
          "Completed SOLOCOM's Back-End Programming training, focused on server-side web development. Topics included API fundamentals and implementation, database management, and backend logic for building structured systems.",
        descriptionId:
          "Menyelesaikan pelatihan Back-End Programming dari SOLOCOM dengan fokus pada pengembangan sisi server. Materi mencakup dasar dan penerapan API, pengelolaan basis data, serta logika backend untuk membangun sistem yang terstruktur.",
        technologies: ["Back-End", "API", "Database", "Web Development"],
        documentation: "/documentation/backend-solocom.png",
      },
      {
        title: "Create Your First Python Program",
        organization: "Coursera",
        period: "Feb 2023",
        description:
          "Completed a guided project through the Coursera Project Network covering Python fundamentals, from building simple programs and working with variables to applying basic programming logic.",
        descriptionId:
          "Menyelesaikan proyek daring melalui Coursera Project Network untuk mempelajari dasar Python, mulai dari membuat program sederhana dan menggunakan variabel hingga menerapkan logika pemrograman dasar.",
        technologies: ["Python", "Programming", "Coursera Project Network"],
        documentation: "/documentation/python-coursera.png",
        link: "https://www.coursera.org/account/accomplishments/verify/ZFCH7LFQHBDX",
      },
    ],
  },
];

function Work() {
  const { language } = useLanguage();

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

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        {/* HEADER */}
        <div className="border-t border-[#171717]/15 pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8783] sm:text-[11px] sm:tracking-[0.25em]">
            {language === "id" ? "Portofolio" : "Portfolio"}
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,9vw,5.8rem)] font-semibold leading-[.92] tracking-[-.07em] sm:text-[clamp(3rem,6vw,5.8rem)] sm:leading-[.88]">
            {language === "id" ? "Karya dan" : "Selected work &"}
            <span className="block text-[#171717]">
              {language === "id" ? "perjalanan." : "experience."}
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-[15px] leading-7 text-[#6B6966] sm:text-base">
            {language === "id"
              ? "Dari proyek web hingga pengalaman organisasi—setiap langkah memberi saya ruang untuk belajar, berkolaborasi, dan membuat solusi digital yang semakin bermanfaat."
              : "From web projects to organizational roles, each experience has helped me learn, collaborate, and build more useful digital solutions."}
          </p>
        </div>

        {/* ALL SECTIONS */}
        <div className="mt-16">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <section
                key={section.key}
                className="border-t border-[#171717]/15 py-12 sm:py-16"
              >
                {/* SECTION HEADER */}
                <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#171717]/10 bg-[#171717] text-white">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] sm:text-4xl">
                        {language === "id" ? section.titleId ?? section.title : section.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-[15px] leading-6 text-[#77736F] sm:text-sm">
                        {language === "id" ? section.subtitleId ?? section.subtitle : section.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="self-end font-mono text-[10px] uppercase tracking-[0.12em] text-[#8A8783] sm:self-auto sm:text-[9px] sm:tracking-[0.2em]">
                    {String(section.items.length).padStart(2, "0")} {language === "id" ? "entri" : "items"}
                  </span>
                </div>

                {/* SECTION ITEMS */}
                <div className="border-t border-[#171717]/10">
                  {section.items.map((item, index) => (
                    <article
                      key={`${section.key}-${item.title}`}
                      className="grid gap-8 border-b border-[#171717]/10 py-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12"
                    >
                      {/* LEFT CONTENT */}
                      <div className="min-w-0">
                        {/* Number */}
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8783] sm:text-[9px] sm:tracking-[0.3em]">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        {/* Title + Period */}
                        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                          <h4 className="font-display text-[22px] font-semibold tracking-[-0.035em] sm:text-3xl">
                            {language === "id" ? item.titleId ?? item.title : item.title}
                          </h4>

                          {item.period && (
                            <span className="font-mono text-[10px] leading-5 uppercase tracking-[0.12em] text-[#77736F] sm:shrink-0 sm:text-[9px] sm:tracking-[0.2em] sm:text-right">
                              {language === "id" ? item.periodId ?? item.period : item.period}
                            </span>
                          )}
                        </div>

                        {/* Organization */}
                        {item.organization && (
                          <p className="mt-2 text-sm text-[#77736F]">
                            {language === "id" ? item.organizationId ?? item.organization : item.organization}
                          </p>
                        )}

                        {/* Technologies */}
                        {item.technologies &&
                          item.technologies.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2">
                              {item.technologies.map((technology) => (
                                <span
                                  key={technology}
                                  className="border border-[#171717]/10 bg-[#F3F2F0] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.04em] text-[#555250] sm:text-[9px] sm:tracking-[0.12em]"
                                >
                                  {technology}
                                </span>
                              ))}
                            </div>
                          )}

                        {/* Description */}
                        <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#5F5C59] sm:text-base">
                          {language === "id" ? item.descriptionId ?? item.description : item.description}
                        </p>

                        {/* Website Button */}
                        {item.link && (
                          <div className="mt-7">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-3 border border-[#171717]/20 bg-[#F3F2F0] px-5 py-3 text-sm font-medium text-[#171717] shadow-[0_2px_0_rgba(23,23,23,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_4px_0_rgba(23,23,23,0.18)] active:translate-y-0"
                            >
                              {language === "id" ? "Kunjungi situs" : "Visit website"}
                              <ExternalLink size={15} strokeWidth={1.7} />
                            </a>
                          </div>
                        )}
                      </div>

                      {/* DOCUMENTATION */}
                      <div className="lg:pt-7">
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#77736F] sm:text-[9px] sm:tracking-[0.2em]">
                          {language === "id" ? "Dokumentasi" : "Documentation"}
                        </p>

                        {item.documentation ? (
                          <div className="w-full overflow-hidden border border-[#171717]/10 bg-white">
                            <img
                              src={item.documentation}
                              alt={`${item.title} ${language === "id" ? "dokumentasi" : "documentation"}`}
                              loading="lazy"
                              className="block aspect-[4/3] h-auto w-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex aspect-[4/3] w-full items-center justify-center border border-[#171717]/10 bg-[#F3F2F0]">
                            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#77736F] sm:text-[9px] sm:tracking-[0.15em]">
                              {language === "id" ? "Dokumentasi belum tersedia" : "Documentation not available"}
                            </span>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;