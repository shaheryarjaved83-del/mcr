'use client'

import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ease } from '@/lib/motion'

type FaqItem = { q: string; a: string }

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <ul className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={i} className="border-b border-forest/15">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left md:py-8"
            >
              <span
                className={cn(
                  'text-lg font-semibold tracking-tight transition-colors duration-300 md:text-xl',
                  isOpen ? 'text-forest' : 'text-charcoal/70 group-hover:text-forest',
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  'grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-expo',
                  isOpen ? 'border-forest bg-forest text-ivory rotate-45' : 'border-forest/25 text-forest',
                )}
              >
                <Plus className="size-4" aria-hidden="true" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: ease.out }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 text-[0.95rem] leading-relaxed text-ink-muted md:pb-8">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
