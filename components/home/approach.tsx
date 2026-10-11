'use client'

import Image from 'next/image'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { ease } from '@/lib/motion'
import { Eyebrow } from '@/components/site/primitives'

const steps = [
  {
    word: 'Listen',
    title: 'We start with your story.',
    text: 'What has brought you in, what you have tried, and what you would like to get back to. Understanding comes before any plan.',
    image: '/images/care.png',
    alt: 'Physiotherapist talking with a seated patient while assessing her shoulder',
  },
  {
    word: 'Assess',
    title: 'We look at how you move.',
    text: 'An assessment appropriate to your concerns, explained in plain language so you understand what we are looking for and why.',
    image: '/images/assessment.png',
    alt: 'Physiotherapist assessing the movement of a patient’s knee',
  },
  {
    word: 'Plan',
    title: 'We agree a way forward.',
    text: 'Together we shape a plan around your goals — combining hands-on care, exercise, and advice where appropriate.',
    image: '/images/follow-up.png',
    alt: 'Patient performing a band exercise while a physiotherapist reviews notes',
  },
  {
    word: 'Move',
    title: 'We progress at your pace.',
    text: 'Plans are reviewed and adapted as things change, with the aim of helping you move with more confidence and independence.',
    image: '/images/movement.png',
    alt: 'Patient performing a controlled step-down exercise with guidance',
  },
]

export function Approach() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative bg-forest text-ivory section-y" aria-labelledby="approach-heading">
      <div className="container-mcr">
        <div className="max-w-3xl">
          <Eyebrow index="iii." tone="light">
            Our approach
          </Eyebrow>
          <h2 id="approach-heading" className="mt-8 text-display-lg">
            Four steps. <em className="font-serif font-normal italic text-mint">One person.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-[calc(var(--header-height)+2rem)]">
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active}
                    className="absolute inset-0"
                    initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    exit={{ opacity: 0.6 }}
                    transition={{ duration: 1, ease: ease.out }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scale: 1.15 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.4, ease: ease.out }}
                    >
                      <Image src={steps[active].image} alt={steps[active].alt} fill sizes="40vw" className="object-cover" />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 flex items-center gap-2 bg-forest px-4 py-3">
                  {steps.map((s, i) => (
                    <span
                      key={s.word}
                      className={cn(
                        'h-1 rounded-full transition-all duration-500 ease-expo',
                        i === active ? 'w-8 bg-mint' : 'w-3 bg-ivory/25',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {steps.map((step, i) => (
              <Step key={step.word} index={i} step={step} active={active === i} onActive={() => setActive(i)} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

function Step({
  step,
  index,
  active,
  onActive,
}: {
  step: (typeof steps)[number]
  index: number
  active: boolean
  onActive: () => void
}) {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })

  useEffect(() => {
    if (inView) onActive()
  }, [inView, onActive])

  return (
    <li ref={ref} className="border-t border-ivory/15 py-10 lg:min-h-[60vh] lg:py-14">
      <div className="flex items-baseline gap-5">
        <span className="font-serif text-xl italic text-mint/70">0{index + 1}</span>
        <p
          className={cn(
            'text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.05em] transition-colors duration-700',
            active ? 'text-ivory' : 'text-ivory/20 lg:text-ivory/20',
          )}
        >
          {step.word}
        </p>
      </div>
      <div className="mt-6 max-w-md pl-0 sm:pl-12">
        <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
        <p className="mt-3 leading-relaxed text-ivory/70">{step.text}</p>
      </div>
      <div className="relative mt-8 aspect-[4/3] overflow-hidden lg:hidden">
        <Image src={step.image} alt={step.alt} fill sizes="100vw" className="object-cover" />
      </div>
    </li>
  )
}
