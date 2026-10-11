'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef } from 'react'
import { Eyebrow } from '@/components/site/primitives'

const TEXT =
  'We believe good care starts with understanding the person — not just the problem. Every plan at MCR is shaped around how you move, what you want to return to, and the pace that feels right for you.'

const EMPHASIS = new Set(['person', 'move,', 'you.'])

export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  const words = TEXT.split(' ')

  return (
    <section className="bg-white section-y" aria-label="Our philosophy">
      <div className="container-mcr grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Eyebrow index="i.">Our philosophy</Eyebrow>
        </div>
        <p ref={ref} className="text-display-md text-forest lg:col-span-9">
          {words.map((word, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
              emphasis={EMPHASIS.has(word)}
            >
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  )
}

function Word({
  children,
  progress,
  range,
  emphasis,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
  emphasis: boolean
}) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <motion.span style={{ opacity }} className={emphasis ? 'font-serif italic text-sage' : undefined}>
      {children}{' '}
    </motion.span>
  )
}
