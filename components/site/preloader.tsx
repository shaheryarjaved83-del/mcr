'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { ease } from '@/lib/motion'

const SESSION_KEY = 'mcr-intro-seen'

export function Preloader() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY)
    if (seen || reduce) {
      setVisible(false)
      return
    }
    sessionStorage.setItem(SESSION_KEY, '1')
    const t = setTimeout(() => setVisible(false), 1700)
    return () => clearTimeout(t)
  }, [reduce])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-forest text-ivory"
          aria-hidden="true"
          exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
          transition={{ duration: 0.9, ease: ease.inOut }}
        >
          <div className="flex flex-col items-center gap-6">
            <svg viewBox="0 0 220 60" className="w-56 text-mint">
              <motion.path
                d="M4 44 C 40 4, 70 4, 100 34 S 170 64, 216 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.3, ease: ease.inOut }}
              />
            </svg>
            <div className="overflow-hidden">
              <motion.p
                className="text-eyebrow text-ivory/80"
                initial={{ y: '120%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, ease: ease.out, delay: 0.35 }}
              >
                MCR — The Art of Movement
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
