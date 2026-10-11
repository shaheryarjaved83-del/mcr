import Image from 'next/image'
import Link from 'next/link'
import { injuries } from '@/lib/injuries'
import { team, testimonials } from '@/lib/people'
import { ParallaxImage, Reveal, SplitHeadline, Stagger, StaggerItem } from '@/components/motion/reveal'
import { ArrowLink, Eyebrow, PendingBadge } from '@/components/site/primitives'

export function PhilosophyBand() {
  return (
    <section className="relative" aria-label="Clinic environment">
      <ParallaxImage
        src="/images/clinic.png"
        alt="A calm, light-filled MCR treatment room with a prepared treatment table"
        className="h-[80svh] min-h-[480px]"
        strength={10}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
      <div className="container-mcr absolute inset-x-0 bottom-0 pb-12 md:pb-20">
        <SplitHeadline
          as="p"
          className="max-w-4xl text-display-md text-ivory"
          lines={[
            'A calm space to',
            <span key="b">
              <em className="font-serif font-normal italic text-mint">understand,</em> recover
            </span>,
            'and rebuild.',
          ]}
        />
      </div>
    </section>
  )
}

export function InjuriesTeaser() {
  const featured = injuries.slice(0, 10)
  return (
    <section className="bg-white section-y" aria-labelledby="injuries-heading">
      <div className="container-mcr grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow index="iv.">Common concerns</Eyebrow>
          <h2 id="injuries-heading" className="mt-8 text-display-md text-forest">
            Concerns we <em className="font-serif font-normal italic">commonly</em> help people with.
          </h2>
          <p className="text-lede mt-6 text-charcoal/75">
            Every person is different. These are some of the concerns people often come to us with — an assessment
            helps us understand your specific situation.
          </p>
          <ArrowLink href="/common-injuries" className="mt-10">
            Explore common injuries
          </ArrowLink>
        </div>
        <Stagger className="flex flex-wrap content-start gap-3 lg:col-span-6 lg:col-start-7" amount={0.04}>
          {featured.map((inj) => (
            <StaggerItem key={inj.name}>
              <Link
                href="/common-injuries"
                className="block rounded-full border border-forest/15 px-5 py-3 text-[0.95rem] font-semibold text-forest transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-ivory"
              >
                {inj.name}
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function TeamTeaser() {
  return (
    <section className="bg-ivory section-y" aria-labelledby="team-heading">
      <div className="container-mcr">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow index="v.">The team</Eyebrow>
            <h2 id="team-heading" className="mt-8 text-display-md text-forest">
              People who <em className="font-serif font-normal italic">care</em> how you move.
            </h2>
          </div>
          <ArrowLink href="/team" variant="outline">
            Meet the team
          </ArrowLink>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.1} className={i === 1 ? 'lg:mt-16' : undefined}>
              <Link href="/team" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                  <Image
                    src={m.image}
                    alt={m.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover grayscale-[30%] transition-all duration-[1.2s] ease-expo group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <PendingBadge className="absolute left-4 top-4 border-ivory/60 bg-ivory/85 backdrop-blur">
                    Demo profile
                  </PendingBadge>
                </div>
                <p className="mt-5 text-lg font-semibold tracking-tight text-forest">{m.name}</p>
                <p className="text-sm text-ink-muted">{m.role}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialTeaser() {
  const t = testimonials[0]
  return (
    <section className="bg-white section-y" aria-labelledby="testimonial-heading">
      <div className="container-mcr grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Eyebrow index="vi.">Testimonials</Eyebrow>
          <h2 id="testimonial-heading" className="sr-only">
            Testimonials
          </h2>
          <PendingBadge className="mt-6">Sample — not a real review</PendingBadge>
        </div>
        <Reveal className="lg:col-span-8 lg:col-start-5">
          <figure>
            <span className="font-serif text-8xl leading-none text-sage" aria-hidden="true">
              “
            </span>
            <blockquote className="-mt-6 text-display-sm text-forest">{t.quote.replace('Sample testimonial — ', '')}</blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-muted">
              <span className="font-semibold text-forest">{t.author}</span>
              <span className="h-px w-6 bg-forest/30" aria-hidden="true" />
              <span>{t.context}</span>
            </figcaption>
          </figure>
          <ArrowLink href="/testimonials" variant="text" className="mt-10">
            Read more testimonials
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  )
}
