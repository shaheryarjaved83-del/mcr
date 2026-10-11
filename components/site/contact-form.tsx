'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { services } from '@/lib/services'
import { ease, duration } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { PendingBadge } from './primitives'

type Status = 'idle' | 'success'

export function ContactForm({
  variant = 'contact',
}: {
  variant?: 'contact' | 'booking'
}) {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.base, ease: ease.out }}
        className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl bg-mint px-8 py-16 text-center"
      >
        <span className="font-serif text-5xl italic text-sage" aria-hidden="true">
          ✓
        </span>
        <h3 className="mt-6 text-2xl font-semibold text-forest">
          Thank you — your message has been noted.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal/70">
          This is a demo form. Until our online system is live, please contact the clinic directly
          to book or enquire — the details are shown alongside this form.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-semibold text-forest underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" />
        <div>
          <label htmlFor="service" className="mb-2 block text-eyebrow text-forest">
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="h-12 w-full rounded-xl border border-forest/20 bg-white px-4 text-sm text-forest outline-none transition-colors focus:border-forest"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="general">General enquiry</option>
            <option value="unsure">I'm not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-eyebrow text-forest">
          {variant === 'booking' ? 'Preferred days & times' : 'How can we help?'}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={
            variant === 'booking'
              ? 'e.g. Weekday mornings, flexible on dates'
              : 'Tell us a little about what you need…'
          }
          className="w-full rounded-xl border border-forest/20 bg-white px-4 py-3 text-sm text-forest outline-none transition-colors focus:border-forest"
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <PendingBadge />
        <button
          type="submit"
          className="group inline-flex h-12 items-center gap-3 rounded-full bg-forest pl-6 pr-1.5 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-charcoal"
        >
          <span>{variant === 'booking' ? 'Request appointment' : 'Send message'}</span>
          <span className="grid size-9 place-items-center rounded-full bg-ivory/12">
            <svg className="size-4 transition-transform duration-500 ease-expo group-hover:-translate-y-6 group-hover:translate-x-6" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg className="absolute size-4 -translate-x-6 translate-y-6 transition-transform duration-500 ease-expo group-hover:translate-x-0 group-hover:translate-y-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-eyebrow text-forest">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={cn(
          'h-12 w-full rounded-xl border border-forest/20 bg-white px-4 text-sm text-forest outline-none transition-colors',
          'focus:border-forest placeholder:text-ink-muted/50',
        )}
      />
    </div>
  )
}
