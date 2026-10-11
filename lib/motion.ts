import type { Transition, Variants } from 'motion/react'

export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  soft: [0.33, 1, 0.68, 1] as const,
}

export const duration = {
  fast: 0.25,
  base: 0.7,
  slow: 1.1,
  cinematic: 1.6,
}

export const stagger = {
  tight: 0.05,
  base: 0.09,
  loose: 0.14,
}

export const baseTransition: Transition = { duration: duration.base, ease: ease.out }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.slow, ease: ease.out } },
}

export const lineReveal: Variants = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: duration.slow, ease: ease.out } },
}

export const staggerContainer = (amount: number = stagger.base, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: amount, delayChildren } },
})

export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: duration.cinematic, ease: ease.out },
  },
}

export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' } as const
