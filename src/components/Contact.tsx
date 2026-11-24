import { Check, Copy, Mail } from 'lucide-react'
import { useState } from 'react'
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6'
import { useLanguage } from '../LanguageContext'

const contacts = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/safridhaaudia',
    href: 'https://www.linkedin.com/in/safridhaaudia',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    value: 'github.com/Safridha',
    href: 'https://github.com/Safridha',
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    value: 'instagram.com/safriidhaa',
    href: 'https://www.instagram.com/safriidhaa',
    icon: FaInstagram,
  },
  {
    label: 'Email',
    value: 'safridhaaudiapriliasunfity@gmail.com',
    href: 'mailto:safridhaaudiapriliasunfity@gmail.com',
    icon: Mail,
  },
]

function Contact() {
  const [copiedContact, setCopiedContact] = useState<string | null>(null)
  const { language } = useLanguage()

  const copyText = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedContact(value)

      setTimeout(() => {
        setCopiedContact(null)
      }, 1800)
    } catch {
      setCopiedContact(null)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#EAE9E7] text-[#171717]"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(23,23,23,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,23,23,.035) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

        {/* Header */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8A8783] sm:text-[11px] sm:tracking-[0.25em]">
            {language === 'id' ? 'Kontak' : 'Contact'}
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,9vw,5.8rem)] font-semibold leading-[.92] tracking-[-.07em] sm:text-[clamp(3rem,6vw,5.8rem)] sm:leading-[.88]">
            {language === 'id' ? 'Punya ide?' : 'Have an idea?'}
            <span className="block text-[#171717]">
              {language === 'id' ? 'Mari wujudkan bersama.' : "Let's bring it to life."}
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-[15px] leading-7 text-[#6B6966] sm:text-base">
            {language === 'id'
              ? 'Saya terbuka untuk peluang kerja, kolaborasi, maupun obrolan seputar pengembangan web dan data. Silakan hubungi saya lewat kanal berikut.'
              : "I'm open to new opportunities, collaborations, and conversations about web development and data. Feel free to reach out through any of the channels below."}
          </p>
        </div>

        {/* Contact */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {contacts.map((contact) => {
            const Icon = contact.icon

            return (
              <div
                key={contact.label}
                className="group flex min-w-0 items-center gap-3 border border-[#171717]/10 bg-white/60 px-3.5 py-3 transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#171717]/10 bg-[#F3F2F0] text-[#555250]">
                  <Icon size={15} />
                </div>

                {/* Contact Info */}
                <a
                  href={contact.href}
                  target={
                    contact.label === 'Email'
                      ? undefined
                      : '_blank'
                  }
                  rel={
                    contact.label === 'Email'
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="min-w-0 flex-1"
                >
                  <p className="font-display text-xs font-semibold text-[#171717]">
                    {contact.label}
                  </p>

                  <p
                    className={`mt-0.5 font-mono leading-4 text-[#77736F] ${
                      contact.label === 'Email'
                        ? 'text-[9px] sm:text-[10px]'
                        : 'text-[10px]'
                    }`}
                  >
                    {contact.label === 'Email' ? (
                      <>
                        {contact.value.slice(0, contact.value.indexOf('@'))}
                        <wbr />
                        {contact.value.slice(contact.value.indexOf('@'))}
                      </>
                    ) : (
                      contact.value
                    )}
                  </p>
                </a>

                {/* Copy Button */}
                <button
                  type="button"
                  onClick={() => copyText(contact.value)}
                  aria-label={
                    copiedContact === contact.value
                      ? language === 'id'
                        ? `${contact.label} berhasil disalin`
                        : `${contact.label} copied`
                      : language === 'id'
                        ? `Salin ${contact.label}`
                        : `Copy ${contact.label}`
                  }
                  className="flex h-10 w-10 shrink-0 items-center justify-center text-[#77736F] transition-colors hover:text-[#171717]"
                >
                  {copiedContact === contact.value ? (
                    <Check size={13} />
                  ) : (
                    <Copy size={13} />
                  )}
                </button>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-[#171717]/15 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-display text-sm font-semibold">
                Safridha Audi
              </p>

              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#77736F] sm:text-[9px] sm:tracking-[0.16em]">
                {language === 'id' ? 'Pengembang Web & Analis Data' : 'Web Developer & Data Analyst'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-[#777471]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#999591]">
                © 2026
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact