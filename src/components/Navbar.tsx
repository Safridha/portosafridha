import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = [
        'home',
        'about',
        'skills',
        'work',
        'contact',
      ]

      const currentSection = sections.reduce(
        (current, section) => {
          const element = document.getElementById(section)

          if (!element) {
            return current
          }

          const offset = element.offsetTop - 180

          if (window.scrollY >= offset) {
            return section
          }

          return current
        },
        'home',
      )

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1440px] px-4 py-4 sm:px-6 lg:px-8">

        {/* =========================================
            NAVBAR
        ========================================== */}

        <nav
          className={`relative isolate flex items-center justify-between overflow-hidden rounded-2xl border px-3 py-3 transition-all duration-500 sm:px-4 ${
            isScrolled
              ? 'border-[#CBC9C6] bg-white/[0.97] shadow-lg shadow-black/[0.07] backdrop-blur-xl'
              : 'border-[#D8D6D2]/80 bg-white/[0.92] shadow-sm backdrop-blur-md'
          }`}
        >

          {/* =========================================
              SUBTLE HEXAGON ATMOSPHERE
          ========================================== */}

          <div className="pointer-events-none absolute -right-8 -top-8 -z-10 opacity-40">
            <div
              className="h-20 w-20 border border-[#D9D7D3]"
              style={{
                clipPath:
                  'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%)',
              }}
            />
          </div>

          <div className="pointer-events-none absolute -bottom-10 right-20 -z-10 opacity-25">
            <div
              className="h-14 w-14 border border-[#D9D7D3]"
              style={{
                clipPath:
                  'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%)',
              }}
            />
          </div>

          <div className="pointer-events-none absolute -left-7 -top-8 -z-10 opacity-20">
            <div
              className="h-16 w-16 border border-[#D9D7D3]"
              style={{
                clipPath:
                  'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%)',
              }}
            />
          </div>

          {/* =========================================
              LOGO
          ========================================== */}

          <a
            href="#home"
            onClick={handleNavClick}
            className="group relative flex shrink-0 items-center gap-3"
          >
            {/* SA logo */}

            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#171717] font-display text-sm font-semibold text-white transition-all duration-300 group-hover:bg-[#303030] group-hover:shadow-md group-hover:shadow-black/10">

              <span className="relative z-10">
                SA
              </span>

              {/* Small animated glow */}

              <span className="absolute -bottom-4 -right-4 h-8 w-8 rounded-full bg-white/10 blur-md transition-transform duration-500 group-hover:scale-150" />

            </div>

            {/* Brand text */}

            <div className="hidden sm:block">
              <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#999591]">
                Portfolio
              </p>

              <p className="mt-0.5 font-display text-sm font-semibold tracking-tight text-[#171717]">
                Safridha Audi
              </p>
            </div>
          </a>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================== */}

          <div className="hidden items-center md:flex">

            <div className="flex items-center rounded-xl border border-[#E1DFDC] bg-[#F7F6F4] p-1">

              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.replace('#', '')

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group relative flex items-center rounded-lg px-4 py-2.5 transition-all duration-300 lg:px-5 ${
                      isActive
                        ? 'bg-white text-[#171717] shadow-sm'
                        : 'text-[#686562] hover:bg-white/70 hover:text-[#171717]'
                    }`}
                  >
                    <span className="text-xs font-medium lg:text-sm">
                      {item.label}
                    </span>

                    {/* Active indicator */}

                    <span
                      className={`absolute bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#171717] transition-all duration-300 ${
                        isActive
                          ? 'w-5 opacity-100'
                          : 'w-0 opacity-0'
                      }`}
                    />

                    {/* Hover underline */}

                    {!isActive && (
                      <span className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#777471] transition-all duration-300 group-hover:w-4" />
                    )}
                  </a>
                )
              })}

            </div>
          </div>

          {/* =========================================
              MOBILE BUTTON
          ========================================== */}

          <button
            type="button"
            aria-label={
              isOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={isOpen}
            onClick={() =>
              setIsOpen((previous) => !previous)
            }
            className={`relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 md:hidden ${
              isOpen
                ? 'border-[#171717] bg-[#171717] text-white'
                : 'border-[#D2D0CC] bg-white text-[#171717] hover:border-[#777471] hover:bg-[#F5F4F2]'
            }`}
          >
            {isOpen ? (
              <X
                size={19}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={19}
                strokeWidth={1.8}
              />
            )}
          </button>
        </nav>

        {/* =========================================
            MOBILE NAVIGATION
        ========================================== */}

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen
              ? 'mt-3 max-h-[440px] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#D4D2CF] bg-white p-3 shadow-xl shadow-black/[0.08]">

            {/* Mobile hexagon decoration */}

            <div className="pointer-events-none absolute -right-8 -top-8 opacity-40">
              <div
                className="h-24 w-24 border border-[#D9D7D3]"
                style={{
                  clipPath:
                    'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%)',
                }}
              />
            </div>

            {/* Mobile Header */}

            <div className="relative border-b border-[#E8E6E3] px-3 pb-4 pt-2">
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#999591]">
                Navigation
              </p>

              <p className="mt-1 font-display text-sm font-semibold text-[#171717]">
                Explore portfolio
              </p>
            </div>

            {/* Mobile Items */}

            <div className="relative mt-2 space-y-1">

              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.replace('#', '')

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`group relative flex items-center justify-between overflow-hidden rounded-xl px-3 py-3.5 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#F1F0EE]'
                        : 'hover:bg-[#F7F6F4]'
                    }`}
                  >

                    {/* Active indicator */}

                    <span
                      className={`absolute bottom-2 left-0 top-2 w-0.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-[#171717]'
                          : 'bg-transparent'
                      }`}
                    />

                    <span
                      className={`pl-1 text-sm font-medium ${
                        isActive
                          ? 'text-[#171717]'
                          : 'text-[#555250]'
                      }`}
                    >
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={15}
                      className={`transition-all duration-300 ${
                        isActive
                          ? 'translate-x-0.5 -translate-y-0.5 text-[#171717]'
                          : 'text-[#999591] opacity-50 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#171717] group-hover:opacity-100'
                      }`}
                    />
                  </a>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar