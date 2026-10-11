import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { services, type Service } from '@/lib/services'
import { MovementLine, Reveal, SplitHeadline } from '@/components/motion/reveal'
import { ArrowLink, Breadcrumbs, Eyebrow } from './primitives'

export function CtaSection({
  title = ['Ready to', 'move forward?'],
  text = 'Book an appointment and take the first step towards moving with more confidence. If you are unsure which service is right for you, start with a Physiotherapy Assessment.',
}: {
  title?: [string, string]
  text?: string
}) {
  return (
    <section className="relative overflow-hidden bg-mint" aria-label="Book an appointment">
      <MovementLine
        className="absolute inset-x-0 bottom-0 h-56 w-full text-forest/20"
        path="M0 180 C 220 40, 420 220, 620 110 S 880 30, 1000 120"
        strokeWidth={1}
      />
      <div className="container-mcr section-y relative grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Eyebrow>Begin</Eyebrow>
          <SplitHeadline
            as="h2"
            className="mt-8 text-display-lg text-forest"
            lines={[
              title[0],
              <em key="a" className="font-serif font-normal italic">
                {title[1]}
              </em>,
            ]}
          />
        </div>
        <Reveal className="flex flex-col gap-8 lg:col-span-4" delay={0.2}>
          <p className="text-lede text-forest/80">{text}</p>
          <div className="flex flex-wrap gap-3">
            <ArrowLink href="/book-now" size="lg">
              Book Now
            </ArrowLink>
            <ArrowLink href="/contact" variant="outline" size="lg">
              Contact us
            </ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function PageHero({
  eyebrow,
  lines,
  intro,
  crumbs,
  children,
  className,
}: {
  eyebrow: string
  lines: React.ReactNode[]
  intro?: string
  crumbs: { label: string; href?: string }[]
  children?: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn('relative overflow-hidden bg-ivory pt-[calc(var(--header-height)+3rem)]', className)}>
      <div className="container-mcr pb-16 md:pb-24">
        <Breadcrumbs items={crumbs} />
        <Eyebrow className="mt-12">{eyebrow}</Eyebrow>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <SplitHeadline as="h1" animateOnMount delay={0.15} className="text-display-lg text-forest lg:col-span-8" lines={lines} />
          {intro && (
            <Reveal className="lg:col-span-4" delay={0.4}>
              <p className="text-lede text-charcoal/75">{intro}</p>
            </Reveal>
          )}
        </div>
        {children}
      </div>
      <MovementLine className="absolute inset-x-0 bottom-0 h-24 w-full text-sage/50" path="M0 80 C 250 0, 500 140, 750 50 S 950 30, 1000 60" strokeWidth={1} />
    </section>
  )
}

export function ServiceCard({ service, className, sizes }: { service: Service; className?: string; sizes?: string }) {
  return (
    <Link href={`/services/${service.slug}`} className={cn('group block', className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes={sizes ?? '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
          className="object-cover transition-transform duration-[1.4s] ease-expo group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/0 to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute left-5 top-5 font-serif text-lg italic text-ivory">{service.index}</span>
        <span className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-ivory text-forest transition-transform duration-500 ease-expo group-hover:rotate-45">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
        <span className="absolute bottom-5 left-5 rounded-full bg-ivory/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-forest backdrop-blur">
          {service.category}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-forest">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.summary}</p>
    </Link>
  )
}

export function RelatedServices({ slugs }: { slugs: string[] }) {
  const related = services.filter((s) => slugs.includes(s.slug))
  return (
    <section className="bg-white section-y" aria-labelledby="related-heading">
      <div className="container-mcr">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Continue exploring</Eyebrow>
            <h2 id="related-heading" className="mt-6 text-display-md text-forest">
              Related <em className="font-serif font-normal italic">services</em>
            </h2>
          </div>
          <ArrowLink href="/services" variant="outline">
            All services
          </ArrowLink>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
