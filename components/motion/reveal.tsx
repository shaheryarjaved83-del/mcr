'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { clipReveal, duration, ease, fadeUp, lineReveal, staggerContainer, viewportOnce } from '@/lib/motion'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article' | 'p' | 'span'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const Comp = motion[as]
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ duration: duration.base, ease: ease.out, delay }}
    >
      {children}
    </Comp>
  )
}

export function Stagger({
  children,
  className,
  amount,
  delay = 0,
  as = 'div',
}: RevealProps & { amount?: number }) {
  const Comp = motion[as === 'li' ? 'ul' : as]
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(amount, delay)}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({ children, className, as = 'div' }: RevealProps) {
  const Comp = motion[as]
  return (
    <Comp className={className} variants={fadeUp}>
      {children}
    </Comp>
  )
}

/** Masked line-by-line headline reveal. Pass each visual line as an array item. */
export function SplitHeadline({
  lines,
  className,
  lineClassName,
  delay = 0,
  as = 'h2',
  animateOnMount = false,
}: {
  lines: React.ReactNode[]
  className?: string
  lineClassName?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
  animateOnMount?: boolean
}) {
  const Comp = motion[as]
  const trigger = animateOnMount
    ? { initial: 'hidden', animate: 'visible' }
    : { initial: 'hidden', whileInView: 'visible', viewport: viewportOnce }
  return (
    <Comp className={className} {...trigger} variants={staggerContainer(0.1, delay)}>
      {lines.map((line, i) => (
        <span key={i} className={cn('block overflow-hidden pb-[0.08em] -mb-[0.08em]', lineClassName)}>
          <motion.span className="block will-change-transform" variants={lineReveal}>
            {line}
          </motion.span>
        </span>
      ))}
    </Comp>
  )
}

/** Image revealed by an upward clip-path wipe with a subtle settle. */
export function ClipImage({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  delay = 0,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
  sizes?: string
  delay?: number
}) {
  return (
    <motion.div
      className={cn('relative overflow-hidden bg-stone', className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={clipReveal}
      transition={{ duration: duration.cinematic, ease: ease.out, delay }}
    >
      <motion.div
        className="absolute inset-0"
        variants={{ hidden: { scale: 1.15 }, visible: { scale: 1, transition: { duration: 1.8, ease: ease.out, delay } } }}
      >
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={cn('object-cover', imgClassName)} />
      </motion.div>
    </motion.div>
  )
}

/** Image with gentle scroll-linked parallax inside an overflow-hidden frame. */
export function ParallaxImage({
  src,
  alt,
  className,
  strength = 12,
  priority,
  sizes = '100vw',
}: {
  src: string
  alt: string
  className?: string
  strength?: number
  priority?: boolean
  sizes?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])
  return (
    <div ref={ref} className={cn('relative overflow-hidden bg-stone', className)}>
      <motion.div className="absolute -inset-y-[15%] inset-x-0" style={{ y: reduce ? 0 : y }}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  )
}

/** Signature MCR motif: a flowing line that draws itself as it enters the viewport. */
export function MovementLine({
  className,
  path = 'M2 120 C 180 20, 320 220, 520 110 S 860 10, 1000 90',
  viewBox = '0 0 1000 220',
  delay = 0.2,
  strokeWidth = 1.5,
}: {
  className?: string
  path?: string
  viewBox?: string
  delay?: number
  strokeWidth?: number
}) {
  return (
    <svg viewBox={viewBox} fill="none" aria-hidden="true" className={cn('pointer-events-none', className)} preserveAspectRatio="none">
      <motion.path
        d={path}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ pathLength: { duration: 2.4, ease: ease.inOut, delay }, opacity: { duration: 0.3, delay } }}
      />
    </svg>
  )
}
