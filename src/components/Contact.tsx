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
    description: 'Professional profile',
    value: 'linkedin.com/in/safridhaaudia',
    href: 'https://www.linkedin.com/in/safridhaaudia',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    description: 'Code & projects',
    value: 'github.com/Safridha',
    href: 'https://github.com/Safridha',
    icon: FaGithub,
  },
  {
    label: 'Instagram',
    description: 'Personal / creative',
    value: 'instagram.com/safriidhaa',
    href: 'https://www.instagram.com/safriidhaa',
    icon: FaInstagram,
  },
  {
    label: 'Email',
    description: 'Get in touch',
    value: 'safridhaaudiapriliasunfity@gmail.com',
    href: 'mailto:safridhaaudiapriliasunfity@gmail.com',
    icon: Mail,
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

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyText = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
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
            linear-gradient(
              rgba(23,23,23,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(23,23,23,.035) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hexagons */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Hexagon className="left-[-120px] top-[12%] h-[320px] w-[370px]" />
        <Hexagon className="right-[-100px] bottom-[5%] h-[360px] w-[410px]" />

        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[20%] top-[15%] h-24 w-28 border border-[#171717]/[0.06]"
          style={{
            clipPath:
              'polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8A8783]">
            Contact
          </p>

          <h2 className="mt-5 max-w-5xl font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[.88] tracking-[-.07em]">
            Let&apos;s connect
            <span className="block text-[#5C5A58]">
              and build something.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-[#6B6966] sm:text-base">
            Have a project, opportunity, collaboration, or simply
            want to say hello? I&apos;d be happy to hear from you.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon

            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="group relative border border-[#171717]/10 bg-white/70 p-5 transition-all duration-300 hover:border-[#171717]/25 hover:bg-white"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#171717]/10 bg-[#F3F2F0] text-[#555250] transition-all duration-300 group-hover:bg-[#171717] group-hover:text-white">
                    <Icon size={17} />
                  </div>

                  <button
                    type="button"
                    onClick={() => copyText(contact.value)}
                    aria-label={`Copy ${contact.label}`}
                    className="flex h-8 w-8 items-center justify-center border border-[#171717]/10 text-[#999591] transition-all duration-300 hover:border-[#171717] hover:bg-[#171717] hover:text-white"
                  >
                    {copied ? (
                      <Check size={14} />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                <p className="mt-6 font-display text-sm font-semibold">
                  {contact.label}
                </p>

                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-[#999591]">
                  {contact.description}
                </p>

                <a
                  href={contact.href}
                  target={contact.label === 'Email' ? undefined : '_blank'}
                  rel={
                    contact.label === 'Email'
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="mt-4 block truncate text-xs text-[#666360] transition-colors hover:text-[#171717]"
                >
                  {contact.value}
                </a>
              </motion.div>
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

              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#999591]">
                Informatics Engineer
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#999591]">
                React · TypeScript
              </span>

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