import { motion } from 'framer-motion'
import { Check, Copy, Mail } from 'lucide-react'
import { useState } from 'react'
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6'

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

function Hexagon({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute border border-[#171717]/[0.05] ${className}`}
      style={{
        clipPath:
          'polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%)',
      }}
    />
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyText = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#EAE9E7] text-[#171717]"
    >
      {/* Background */}
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

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Hexagon className="left-[-120px] top-[10%] h-[300px] w-[340px]" />
        <Hexagon className="right-[-120px] bottom-[5%] h-[320px] w-[360px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8A8783]">
            Contact
          </p>

          <h2 className="mt-4 font-display text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[.9] tracking-[-.07em]">
            Let&apos;s connect
            <span className="block text-[#5C5A58]">
              and build something.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B6966] sm:text-base">
            Have a project, opportunity, or collaboration in mind?
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon

            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group flex min-w-0 items-center gap-3 border border-[#171717]/10 bg-white/70 px-3.5 py-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                {/* Logo */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#171717]/10 bg-[#F3F2F0] text-[#555250] transition-all duration-300 group-hover:bg-[#171717] group-hover:text-white">
                  <Icon size={15} />
                </div>

                {/* Text */}
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
                  <p className="font-display text-xs font-semibold">
                    {contact.label}
                  </p>

                  <p className="mt-0.5 truncate font-mono text-[8px] text-[#999591]">
                    {contact.value}
                  </p>
                </a>

                {/* Copy */}
                <button
                  type="button"
                  onClick={() => copyText(contact.value)}
                  aria-label={`Copy ${contact.label}`}
                  className="flex h-7 w-7 shrink-0 items-center justify-center text-[#999591] transition-colors hover:text-[#171717]"
                >
                  {copied ? (
                    <Check size={13} />
                  ) : (
                    <Copy size={13} />
                  )}
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-[#171717]/15 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-sm font-semibold">
                Safridha Audi
              </p>

              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#999591]">
                Informatics Engineer
              </p>
            </div>

              <span className="h-1 w-1 rounded-full bg-[#777471]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#999591]">
                © 2026
              </span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact