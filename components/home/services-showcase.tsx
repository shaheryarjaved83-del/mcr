'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/services'
import { ease } from '@/lib/motion'
import { Reveal, SplitHeadline } from '@/components/motion/reveal'
import { ArrowLink, Eyebrow } from '@/components/site/primitives'

export function ServicesShowcase() {
  const [active, setActive] = useState<number | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 24 })
  const sy = useSpring(y, { stiffness: 180, damping: 24 })

  return (
    <section className="relative bg-ivory section-y" aria-labelledby="services-heading">
      <div className="container-mcr">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow index="ii.">Services</Eyebrow>
            <h2 id="services-heading" className="sr-only">
              Our services
            </h2>
            <SplitHeadline
              as="p"
              className="mt-8 text-display-lg text-forest"
              lines={[
                'Care designed',
                <span key="b">
                  around <em className="font-serif font-normal italic">you.</em>
                </span>,
              ]}
            />
          </div>
          <Reveal className="flex flex-col items-start gap-6 lg:col-span-5" delay={0.15}>
            <p className="text-lede text-charcoal/75">
              From your first assessment to structured strength work and recovery, each service is delivered with
              the same principles: listen carefully, explain clearly, progress appropriately.
            </p>
            <ArrowLink href="/services" variant="outline">
              View all services
            </ArrowLink>
          </Reveal>
        </div>

        <div
          className="relative mt-16 md:mt-24"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            x.set(e.clientX - rect.left)
            y.set(e.clientY - rect.top)
          }}
          onMouseLeave={() => setActive(null)}
        >
          <ul className="border-t border-forest/15">
            {services.map((s, i) => (
              <motion.li
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 0.7, ease: ease.out, delay: (i % 4) * 0.06 }}
                className="border-b border-forest/15"
              >
                <Link
                  href={`/services/${s.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 md:grid-cols-12 md:gap-6 md:py-8"
                >
                  <span className="font-serif text-lg italic text-sage md:col-span-1">{s.index}</span>
                  <span className="md:col-span-6">
                    <span className="block text-[clamp(1.5rem,3.2vw,3rem)] font-medium leading-none tracking-[-0.035em] text-forest transition-transform duration-500 ease-expo group-hover:translate-x-3">
                      {s.name}
                    </span>
                    <span className="mt-3 block text-sm leading-relaxed text-ink-muted md:hidden">{s.summary}</span>
                  </span>
                  <span className="hidden text-sm leading-relaxed text-ink-muted md:col-span-4 md:block">{s.summary}</span>
                  <span className="grid size-11 place-items-center justify-self-end rounded-full border border-forest/20 text-forest transition-all duration-500 ease-expo group-hover:rotate-45 group-hover:border-forest group-hover:bg-forest group-hover:text-ivory md:col-span-1">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="pointer-events-none absolute left-0 top-0 z-10 hidden h-72 w-56 -translate-x-1/2 -translate-y-1/2 lg:block"
            style={{ x: sx, y: sy }}
            aria-hidden="true"
          >
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  key={active}
                  className="absolute inset-0 overflow-hidden bg-stone"
                  initial={{ clipPath: 'inset(50% 50% 50% 50%)', opacity: 0 }}
                  animate={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
                  exit={{ clipPath: 'inset(50% 50% 50% 50%)', opacity: 0 }}
                  transition={{ duration: 0.5, ease: ease.out }}
                >
                  <Image src={services[active].image} alt="" fill sizes="224px" className="object-cover" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
