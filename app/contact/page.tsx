import type { Metadata } from 'next'
import { contactDetails, openingHours, site } from '@/lib/site'
import { Eyebrow, Italic, PendingBadge } from '@/components/site/primitives'
import { CtaSection, PageHero } from '@/components/site/sections'
import { ContactForm } from '@/components/site/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name}. Call, email, or send us a message — we are happy to help you choose the right starting point.`,
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumbs={[{ label: 'Contact' }]}
        intro="Questions, booking enquiries, or just not sure where to start — we are happy to help. Get in touch and we will point you in the right direction."
        lines={[
          'Get in',
          <span key="b">
            <Italic>touch.</Italic>
          </span>,
        ]}
      />

      <section className="bg-white section-y" aria-labelledby="contact-heading">
        <div className="container-mcr grid gap-12 lg:grid-cols-12">
          {/* Contact details */}
          <div className="lg:col-span-5">
            <Eyebrow index="i.">Details</Eyebrow>
            <h2 id="contact-heading" className="mt-8 text-display-sm text-forest">
              Ways to <Italic>reach us.</Italic>
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              {contactDetails.map((c) => (
                <div key={c.label} className="border-t border-forest/15 pt-6">
                  <p className="text-eyebrow text-forest">{c.label}</p>
                  <p className="mt-3 text-lg font-semibold text-forest">{c.value}</p>
                  {!c.verified && <PendingBadge className="mt-3" />}
                </div>
              ))}

              <div className="border-t border-forest/15 pt-6">
                <p className="text-eyebrow text-forest">Opening hours</p>
                <div className="mt-4 flex flex-col gap-2">
                  {openingHours.map((h) => (
                    <div key={h.days} className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="font-medium text-forest">{h.days}</span>
                      <span className={h.verified ? 'text-charcoal/75' : 'text-ink-muted italic'}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <PendingBadge className="mt-4" />
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <Eyebrow index="ii.">Message us</Eyebrow>
            <h2 className="mt-8 text-display-sm text-forest">
              Send us a <Italic>message.</Italic>
            </h2>
            <div className="mt-10 rounded-2xl border border-forest/12 bg-ivory p-8 md:p-10">
              <ContactForm variant="contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Important notice */}
      <section className="bg-forest text-ivory section-y" aria-labelledby="notice-heading">
        <div className="container-mcr grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow tone="light">Important</Eyebrow>
            <h2 id="notice-heading" className="mt-8 text-display-sm">
              Not for <Italic>emergencies.</Italic>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lede text-ivory/80">
              This website and contact form are not monitored for medical emergencies. If you have a medical
              emergency, call 999 or attend A&E.
            </p>
            <p className="mt-6 leading-relaxed text-ivory/65">
              For urgent but non-emergency advice, contact NHS 111. For appointment enquiries, please use the
              contact details above during opening hours.
            </p>
          </div>
        </div>
      </section>

      <CtaSection
        title={['Prefer to', 'book?']}
        text="If you know which service you need, head straight to our booking page to request an appointment."
      />
    </>
  )
}
