'use client'

import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { mainNav } from '@/lib/site'
import { services } from '@/lib/services'
import { ease } from '@/lib/motion'
import { ArrowLink } from './primitives'

export function MobileMenu({
  open,
  onClose,
  isActive,
}: {
  open: boolean
  onClose: () => void
  isActive: (href: string) => boolean
}) {
  const [servicesExpanded, setServicesExpanded] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Slide-in panel */}
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-50 w-[min(85vw,400px)] overflow-y-auto bg-ivory shadow-2xl lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: ease.out }}
          >
            <div className="flex min-h-full flex-col px-6 pb-8 pt-[calc(var(--header-height)+1rem)]">
              {/* Navigation */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
              >
                <ul className="flex flex-col gap-1">
                  {mainNav.map((item) => (
                    <motion.li
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: ease.out } },
                      }}
                    >
                      {item.href === '/services' ? (
                        <div>
                          <div className="flex items-center gap-2">
                            <MenuLink href={item.href} active={isActive(item.href)} onClick={onClose}>
                              {item.label}
                            </MenuLink>
                            <button
                              type="button"
                              aria-expanded={servicesExpanded}
                              aria-label="Toggle service list"
                              onClick={() => setServicesExpanded((v) => !v)}
                              className={cn(
                                'grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300',
                                servicesExpanded
                                  ? 'bg-forest text-ivory rotate-90'
                                  : 'bg-forest/10 text-forest hover:bg-forest/20',
                              )}
                            >
                              <ChevronRight className="size-4" aria-hidden="true" />
                            </button>
                          </div>
                          <AnimatePresence initial={false}>
                            {servicesExpanded && (
                              <motion.ul
                                className="mt-3 overflow-hidden rounded-xl bg-white/60 px-4 py-2"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: ease.out }}
                              >
                                {services.map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      href={`/services/${s.slug}`}
                                      onClick={onClose}
                                      className="flex items-baseline gap-3 border-b border-forest/8 py-3 text-sm font-semibold text-forest/90 last:border-0 hover:text-forest"
                                    >
                                      <span className="font-serif text-xs italic text-sage">{s.index}</span>
                                      {s.name}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <MenuLink href={item.href} active={isActive(item.href)} onClick={onClose}>
                          {item.label}
                        </MenuLink>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>

              {/* Footer CTA */}
              <motion.div
                className="mt-auto space-y-6 border-t border-forest/15 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: ease.out, delay: 0.4 }}
              >
                <ArrowLink href="/book-now" size="lg" className="w-full justify-center">
                  Book Now
                </ArrowLink>
                <div className="text-center">
                  <p className="font-serif text-lg italic text-sage">The Art of Movement</p>
                  <p className="mt-2 text-xs text-ink-muted">
                    Personalised physiotherapy &amp; care
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function MenuLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'group flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-lg font-semibold transition-all duration-300',
        active
          ? 'bg-mint text-forest'
          : 'text-charcoal hover:bg-white/60 hover:text-forest',
      )}
    >
      <span className="flex items-center gap-2">
        {active && (
          <span className="size-1.5 rounded-full bg-forest" aria-hidden="true" />
        )}
        {children}
      </span>
      <ChevronRight
        className={cn(
          'size-4 transition-all duration-300',
          active ? 'text-forest translate-x-0' : 'text-charcoal/30 -translate-x-1 group-hover:translate-x-0 group-hover:text-forest/60',
        )}
        aria-hidden="true"
      />
    </Link>
  )
}
