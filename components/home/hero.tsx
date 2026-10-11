'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ease } from '@/lib/motion'
import { MovementLine, SplitHeadline } from '@/components/motion/reveal'
import { ArrowLink } from '@/components/site/primitives'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-ivory pt-[var(--header-height)]"
      aria-label="Introduction"
    >
      <MovementLine
        className="absolute inset-x-0 top-[38%] h-64 w-full text-sage/45"
        path="M0 160 C 160 40, 330 230, 520 120 S 820 10, 1000 110"
        delay={1.2}
        strokeWidth={1.2}
      />

      <div className="container-mcr relative grid min-h-[calc(100svh-var(--header-height))] grid-cols-1 gap-10 pb-10 pt-8 lg:grid-cols-12 lg:gap-6 lg:pb-14">
        <motion.div className="relative z-10 flex flex-col justify-between lg:col-span-7" style={reduce ? undefined : { y: textY, opacity: fade }}>
          <motion.p
            className="text-eyebrow flex items-center gap-3 text-forest"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: ease.out, delay: 0.1 }}
          >
            <span className="h-px w-8 bg-forest/40" aria-hidden="true" />
            MCR Physiotherapy
          </motion.p>

          <div className="py-10 lg:py-0">
            <SplitHeadline
              as="h1"
              animateOnMount
              delay={0.2}
              className="text-display-xl text-forest"
              lines={[
                'The Art',
                <span key="of">
                  of <em className="font-serif font-normal italic text-sage">Movement</em>
                </span>,
              ]}
            />
            <motion.p
              className="text-lede mt-8 max-w-xl text-charcoal/75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: ease.out, delay: 0.75 }}
            >
              Personalised physiotherapy and movement-focused care to help you work towards your goals, build
              confidence, and get back to the activities that matter to you.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: ease.out, delay: 0.9 }}
            >
              <ArrowLink href="/book-now" size="lg">
                Book an appointment
              </ArrowLink>
              <ArrowLink href="/services" variant="outline" size="lg">
                Explore services
              </ArrowLink>
            </motion.div>
          </div>

          <motion.div
            className="hidden items-center gap-4 lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <span className="relative block h-12 w-px overflow-hidden bg-forest/15" aria-hidden="true">
              <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/3 bg-forest" />
            </span>
            <span className="text-eyebrow text-ink-muted">Scroll to explore</span>
          </motion.div>
        </motion.div>

        <div className="relative lg:col-span-5">
          <motion.div
            className="relative aspect-[4/5] h-full w-full overflow-hidden bg-stone lg:aspect-auto lg:min-h-[560px]"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{ duration: 1.6, ease: ease.out, delay: 0.25 }}
          >
            <motion.div className="absolute inset-0" style={reduce ? undefined : { y: imgY, scale: imgScale }}>
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.25 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease: ease.out, delay: 0.25 }}
              >
                <Image
                  src="/images/hero.png"
                  alt="A physiotherapist guiding a patient through a controlled lunge in a bright, calm studio"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-[50%_30%]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 left-4 right-4 flex items-center justify-between gap-4 bg-forest px-5 py-4 text-ivory sm:left-auto sm:right-6 sm:w-72 lg:-left-16 lg:right-auto lg:bottom-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: ease.out, delay: 1.25 }}
          >
            <div>
              <p className="text-eyebrow text-mint/80">Start here</p>
              <p className="mt-2 text-sm font-semibold">Physiotherapy Assessment</p>
            </div>
            <span className="font-serif text-3xl italic text-mint">01</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
