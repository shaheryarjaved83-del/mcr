'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { mainNav, site } from '@/lib/site'
import { services } from '@/lib/services'
import { ease } from '@/lib/motion'
import { ArrowLink } from './primitives'
import { Logo } from './logo'
import { MobileMenu } from './mobile-menu'

export function SiteHeader() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const dropdownId = useId()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 24)
    setHidden(y > 400 && y > prev && !servicesOpen && !menuOpen)
  })

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!servicesOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setServicesOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [servicesOpen])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140)
  }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: ease.out }}
      >
        <div
          className={cn(
            'transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-expo',
            scrolled || servicesOpen
              ? 'bg-ivory/85 shadow-[0_1px_0_rgba(23,63,53,0.08)] backdrop-blur-xl'
              : 'bg-transparent',
          )}
        >
          <div className="container-mcr flex h-[var(--header-height)] items-center justify-between gap-6">
            <Link href="/" className="relative z-10 shrink-0" aria-label={`${site.name} — home`}>
              <Logo />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {mainNav.map((item) => {
                  const active = isActive(item.href)
                  if (item.href === '/services') {
                    return (
                      <li key={item.href} className="relative" onMouseEnter={openServices} onMouseLeave={scheduleClose}>
                        <div className="flex items-center">
                          <NavLink href={item.href} active={active}>
                            {item.label}
                          </NavLink>
                          <button
                            type="button"
                            aria-expanded={servicesOpen}
                            aria-controls={dropdownId}
                            aria-label="Show services menu"
                            onClick={() => setServicesOpen((o) => !o)}
                            className="-ml-2 grid size-7 place-items-center rounded-full text-forest/70 hover:text-forest"
                          >
                            <ChevronDown
                              className={cn('size-3.5 transition-transform duration-300', servicesOpen && 'rotate-180')}
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </li>
                    )
                  }
                  return (
                    <li key={item.href}>
                      <NavLink href={item.href} active={active}>
                        {item.label}
                      </NavLink>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ArrowLink href="/book-now" className="hidden sm:inline-flex">
                Book Now
              </ArrowLink>
              <button
                type="button"
                className="relative z-10 grid size-12 place-items-center rounded-full border border-forest/15 bg-ivory/70 lg:hidden"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span className="relative block h-3 w-5" aria-hidden="true">
                  <motion.span
                    className="absolute left-0 top-0 h-[1.5px] w-full bg-forest"
                    animate={menuOpen ? { top: '50%', rotate: 45 } : { top: '0%', rotate: 0 }}
                    transition={{ duration: 0.4, ease: ease.out }}
                  />
                  <motion.span
                    className="absolute bottom-0 left-0 h-[1.5px] w-full bg-forest"
                    animate={menuOpen ? { bottom: '40%', rotate: -45 } : { bottom: '0%', rotate: 0 }}
                    transition={{ duration: 0.4, ease: ease.out }}
                  />
                </span>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                id={dropdownId}
                className="hidden overflow-hidden border-t border-forest/8 lg:block"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: ease.out }}
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                <div className="container-mcr grid grid-cols-12 gap-8 py-10">
                  <div className="col-span-3">
                    <p className="text-eyebrow text-forest">Services</p>
                    <p className="mt-4 text-display-sm text-forest">
                      Eight ways to <em className="font-serif font-normal italic">move forward.</em>
                    </p>
                    <ArrowLink href="/services" variant="text" className="mt-6">
                      View all services
                    </ArrowLink>
                  </div>
                  <ul className="col-span-9 grid grid-cols-2 gap-x-10 xl:grid-cols-4">
                    {services.map((s, i) => (
                      <motion.li
                        key={s.slug}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: ease.out, delay: 0.05 + i * 0.03 }}
                      >
                        <Link
                          href={`/services/${s.slug}`}
                          className="group flex items-baseline gap-3 border-b border-forest/10 py-4 text-forest"
                        >
                          <span className="font-serif text-sm italic text-sage">{s.index}</span>
                          <span className="text-[0.95rem] font-semibold tracking-tight transition-transform duration-300 ease-expo group-hover:translate-x-1">
                            {s.name}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} isActive={isActive} />
    </>
  )
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'relative block rounded-full px-4 py-2 text-sm font-semibold tracking-tight transition-colors',
        active ? 'text-forest' : 'text-charcoal/70 hover:text-forest',
      )}
    >
      {active && (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 -z-10 rounded-full bg-mint"
          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
        />
      )}
      {children}
    </Link>
  )
}
