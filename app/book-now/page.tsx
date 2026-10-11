import type { Metadata } from 'next'
import { contactDetails, site } from '@/lib/site'
import { services } from '@/lib/services'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Eyebrow, Italic, PendingBadge } from '@/components/site/primitives'
import { CtaSection, PageHero } from '@/components/site/sections'
import { ContactForm } from '@/components/site/contact-form'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Book Now',
  description: `Book an appointment at ${site.name}. Request a time online or contact the clinic directly.`,
}

export default function BookNowPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Now"
        crumbs={[{ label: 'Book Now' }]}
        intro="Take the first step towards moving with more confidence. Request an appointment online or contact the clinic directly."
        lines={[
          'Book an',
          <span key="b">
            <Italic>appointment.</Italic>
          </span>,
        ]}
      >
        <div className="mt-10">
          <PendingBadge>Online booking — coming soon</PendingBadge>
        </div>
      </PageHero>

      {/* How to book */}
      <section className="bg-white section-y" aria-labelledby="how-heading">
        <div className="container-mcr">
          <div className="max-w-2xl">
            <Eyebrow index="i.">How to book</Eyebrow>
            <h2 id="how-heading" className="mt-8 text-display-md text-forest">
              Two <Italic>simple</Italic> ways.
            </h2>
          </div>

          <Stagger className="mt-14 grid gap-8 lg:grid-cols-2" amount={0.1}>
            <StaggerItem>
              <div className="flex h-full flex-col rounded-2xl border border-forest/12 bg-ivory p-8 md:p-10">
                <span className="font-serif text-3xl italic text-sage" aria-hidden="true">01</span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-forest">
                  Request online
                </h3>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  Use the form below to tell us which service you are interested in and your preferred times.
                  We will get back to you to confirm.
                </p>
                <p className="mt-4 text-sm text-ink-muted/70">
                  Until our online booking system is live, this form is a request — not a confirmed booking.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex h-full flex-col rounded-2xl border border-forest/12 bg-ivory p-8 md:p-10">
                <span className="font-serif text-3xl italic text-sage" aria-hidden="true">02</span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-forest">
                  Contact the clinic
                </h3>
                <p className="mt-4 leading-relaxed text-ink-muted">
                  Call or email us directly — the fastest way to secure a specific time slot.
                </p>
                <div className="mt-6 flex flex-col gap-3 border-t border-forest/15 pt-6">
                  {contactDetails.map((c) => (
                    <div key={c.label}>
                      <span className="text-eyebrow text-forest/60">{c.label}</span>
                      <p className="mt-1 text-sm font-medium text-forest">{c.value}</p>
                    </div>
                  ))}
                </div>
                <PendingBadge className="mt-4" />
              </div>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      {/* Service picker */}
      <section className="bg-ivory section-y" aria-labelledby="choose-heading">
        <div className="container-mcr">
          <div className="max-w-2xl">
            <Eyebrow index="ii.">Which service?</Eyebrow>
            <h2 id="choose-heading" className="mt-8 text-display-md text-forest">
              Not sure where to <Italic>start?</Italic>
            </h2>
            <p className="mt-6 text-lede text-charcoal/75">
              If you are new to MCR, a Physiotherapy Assessment is usually the right first step. Explore each
              service to learn more, or get in touch and we will help you choose.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-baseline justify-between gap-3 rounded-xl border border-forest/12 bg-white px-5 py-5 transition-all duration-300 ease-expo hover:border-forest hover:bg-mint"
                >
                  <div>
                    <span className="font-serif text-sm italic text-sage">{s.index}</span>
                    <p className="mt-1 text-sm font-semibold tracking-tight text-forest">{s.name}</p>
                  </div>
                  <ArrowUpRight className="size-4 shrink-0 text-forest/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-forest" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section className="bg-white section-y" aria-labelledby="form-heading">
        <div className="container-mcr grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="iii.">Request</Eyebrow>
            <h2 id="form-heading" className="mt-8 text-display-md text-forest">
              Tell us your <Italic>preferences.</Italic>
            </h2>
            <p className="mt-6 text-lede text-charcoal/75">
              Share your preferred days and times, and the service you are interested in. We will get back to
              you to confirm your appointment.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="rounded-2xl border border-forest/12 bg-ivory p-8 md:p-10">
              <ContactForm variant="booking" />
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title={['Questions', 'first?']}
        text="If you would like to talk through your options before booking, visit our FAQ page or contact us — we are happy to help."
      />
    </>
  )
}
