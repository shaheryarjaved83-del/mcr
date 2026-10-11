import type { Metadata } from 'next'
import { testimonials } from '@/lib/people'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { Eyebrow, Italic, PendingBadge } from '@/components/site/primitives'
import { CtaSection, PageHero } from '@/components/site/sections'

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'What people say about their experience at MCR Physiotherapy. These are sample testimonials — genuine, consented feedback will be added before publishing.',
}

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        crumbs={[{ label: 'Testimonials' }]}
        intro="What people say about working with us. Every experience is individual, but these reflections capture the kind of care we aim to provide."
        lines={[
          'In their',
          <span key="b">
            <Italic>own</Italic> words.
          </span>,
        ]}
      >
        <div className="mt-10">
          <PendingBadge>Sample testimonials — not real reviews</PendingBadge>
        </div>
      </PageHero>

      {/* Intro band */}
      <section className="bg-ivory section-y" aria-labelledby="testimonials-intro">
        <div className="container-mcr max-w-2xl">
          <Eyebrow index="i.">Feedback</Eyebrow>
          <h2 id="testimonials-intro" className="mt-8 text-display-md text-forest">
            Care that feels <Italic>personal.</Italic>
          </h2>
          <p className="mt-6 text-lede text-charcoal/75">
            We are grateful to everyone who takes the time to share their experience. These testimonials will
            be replaced with genuine, consented feedback before the site goes live.
          </p>
        </div>
      </section>

      {/* Testimonial grid */}
      <section className="bg-white section-y" aria-label="Testimonials">
        <div className="container-mcr">
          <Stagger className="grid gap-8 md:grid-cols-2" amount={0.08}>
            {testimonials.map((t, i) => (
              <StaggerItem key={t.id}>
                <figure
                  className={`flex h-full flex-col rounded-2xl border border-forest/12 bg-ivory p-8 md:p-10 ${
                    i === 0 || i === 3 ? 'md:translate-y-8' : ''
                  }`}
                >
                  <span className="font-serif text-6xl leading-none text-sage" aria-hidden="true">
                    “
                  </span>
                  <blockquote className="-mt-4 flex-1 text-display-sm text-forest">
                    {t.quote.replace('Sample testimonial — ', '')}
                  </blockquote>
                  <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <span className="font-semibold text-forest">{t.author}</span>
                    <span className="h-px w-6 bg-forest/30" aria-hidden="true" />
                    <span className="text-ink-muted">{t.context}</span>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Share your experience */}
      <section className="bg-forest text-ivory section-y" aria-labelledby="share-heading">
        <div className="container-mcr grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow tone="light">Your turn</Eyebrow>
            <h2 id="share-heading" className="mt-8 text-display-md">
              Want to <Italic>share</Italic> your experience?
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lede text-ivory/80">
              If you have been seen at MCR and would like to share your experience, we would love to hear from
              you. With your consent, your feedback could help others decide whether we are the right fit.
            </p>
            <p className="mt-6 leading-relaxed text-ivory/65">
              Please contact the clinic — we will provide a way to submit feedback privately, and only publish
              it with your explicit consent.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
