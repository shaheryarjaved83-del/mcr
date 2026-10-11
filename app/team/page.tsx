import Image from 'next/image'
import type { Metadata } from 'next'
import { team } from '@/lib/people'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { ArrowLink, Eyebrow, Italic, PendingBadge } from '@/components/site/primitives'
import { CtaSection, PageHero } from '@/components/site/sections'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the people behind MCR Physiotherapy — physiotherapists, therapists, and coaches who care about how you move.',
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The team"
        crumbs={[{ label: 'Team' }]}
        intro="The people you will work with. Every team member brings a different perspective, but the same commitment: to listen, explain clearly, and help you move with confidence."
        lines={[
          'People who',
          <span key="b">
            <Italic>care</Italic> how you move.
          </span>,
        ]}
      />

      <section className="bg-white section-y" aria-labelledby="team-intro">
        <div className="container-mcr">
          <div className="max-w-2xl">
            <Eyebrow index="i.">Who we are</Eyebrow>
            <h2 id="team-intro" className="mt-8 text-display-md text-forest">
              Different skills. <Italic>One approach.</Italic>
            </h2>
            <p className="mt-6 text-lede text-charcoal/75">
              MCR brings together physiotherapists, hands-on therapists, and strength coaches. What unites the
              team is a shared philosophy: understand the person, explain clearly, and progress at the right
              pace.
            </p>
          </div>

          <div className="mt-10">
            <PendingBadge>
              Demo profiles — verified content to be added
            </PendingBadge>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-ivory section-y" aria-labelledby="team-grid-heading">
        <div className="container-mcr">
          <h2 id="team-grid-heading" className="sr-only">
            Team members
          </h2>
          <div className="flex flex-col gap-16 lg:gap-24">
            {team.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.05}>
                <article
                  className={`grid gap-10 lg:grid-cols-12 lg:gap-16 ${
                    i % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div className="lg:col-span-5 lg:[direction:ltr]">
                    <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                      <Image
                        src={m.image}
                        alt={m.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 42vw, 100vw"
                        className="object-cover"
                      />
                      <PendingBadge className="absolute left-4 top-4 border-ivory/60 bg-ivory/85 backdrop-blur">
                        Demo profile
                      </PendingBadge>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center lg:col-span-7 lg:[direction:ltr]">
                    <span className="font-serif text-lg italic text-sage">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-display-sm text-forest">{m.name}</h3>
                    <p className="mt-2 text-lg font-semibold text-sage">{m.role}</p>
                    <p className="mt-6 max-w-xl leading-relaxed text-charcoal/75">{m.bio}</p>

                    <div className="mt-8">
                      <p className="text-eyebrow text-forest">Interests</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {m.interests.map((interest) => (
                          <span
                            key={interest}
                            className="rounded-full border border-forest/15 px-4 py-2 text-sm font-medium text-forest"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 border-t border-forest/15 pt-6">
                      <p className="text-eyebrow text-forest">Qualifications</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{m.qualifications}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="bg-white section-y" aria-labelledby="join-heading">
        <div className="container-mcr grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow index="ii.">Join us</Eyebrow>
            <h2 id="join-heading" className="mt-8 text-display-md text-forest">
              Want to <Italic>work here?</Italic>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lede text-charcoal/75">
              We are always interested in hearing from physiotherapists, therapists, and coaches who share our
              philosophy. If that sounds like you, get in touch.
            </p>
            <ArrowLink href="/contact" variant="outline" className="mt-8">
              Get in touch
            </ArrowLink>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
