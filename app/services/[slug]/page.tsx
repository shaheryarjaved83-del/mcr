import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { services, getService } from '@/lib/services'
import { ClipImage, MovementLine, ParallaxImage, Reveal, SplitHeadline, Stagger, StaggerItem } from '@/components/motion/reveal'
import { ArrowLink, Breadcrumbs, Eyebrow, Italic } from '@/components/site/primitives'
import { CtaSection, PageHero, RelatedServices } from '@/components/site/sections'
import { FaqAccordion } from '@/components/site/faq-accordion'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getService(slug)
    if (!service) return { title: 'Service not found' }
    return {
      title: service.name,
      description: service.metaDescription,
      openGraph: {
        title: `${service.name} | MCR Physiotherapy`,
        description: service.metaDescription,
        images: [{ url: service.image, alt: service.imageAlt }],
      },
    }
  })
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)

  if (!service) notFound()

  const headlineLines: React.ReactNode[] = [
    service.headline.lead,
    <span key="accent">
      <Italic>{service.headline.accent}</Italic>
      {service.headline.tail ? ` ${service.headline.tail}` : ''}
    </span>,
  ]

  return (
    <>
      <PageHero
        eyebrow={`${service.category} — ${service.index}`}
        crumbs={[{ label: 'Services', href: '/services' }, { label: service.name }]}
        intro={service.summary}
        lines={headlineLines}
      />

      {/* Intro section — layout varies by service.layout */}
      <IntroSection service={service} />

      {/* Suitable for */}
      <section className="bg-white section-y" aria-labelledby="suitable-heading">
        <div className="container-mcr grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="i.">Who it's for</Eyebrow>
            <h2 id="suitable-heading" className="mt-8 text-display-sm text-forest">
              Is this <Italic>right</Italic> for you?
            </h2>
          </div>
          <Stagger className="lg:col-span-8 grid gap-4 sm:grid-cols-2" amount={0.06}>
            {service.suitableFor.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 border-t border-forest/15 pt-5">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-forest">
                    <svg className="size-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6.5L4.5 9L10 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm leading-relaxed text-charcoal/75">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-ivory section-y" aria-labelledby="expect-heading">
        <div className="container-mcr">
          <div className="max-w-2xl">
            <Eyebrow index="ii.">What to expect</Eyebrow>
            <h2 id="expect-heading" className="mt-8 text-display-md text-forest">
              A clear, <Italic>step-by-step</Italic> approach.
            </h2>
          </div>
          <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" amount={0.08}>
            {service.expect.map((item, i) => (
              <StaggerItem key={i}>
                <div className="border-t border-forest/15 pt-6">
                  <span className="font-serif text-lg italic text-sage" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-forest">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Session flow */}
      <section className="relative bg-forest text-ivory section-y" aria-labelledby="session-heading">
        <MovementLine
          className="absolute inset-x-0 top-10 h-24 w-full text-sage/25"
          path="M0 80 C 200 10, 400 120, 600 40 S 900 10, 1000 50"
          strokeWidth={1}
        />
        <div className="container-mcr relative">
          <div className="max-w-2xl">
            <Eyebrow index="iii." tone="light">
              What a session looks like
            </Eyebrow>
            <h2 id="session-heading" className="mt-8 text-display-md">
              From start to <Italic>finish.</Italic>
            </h2>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-4">
            {service.session.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <span className="font-serif text-3xl italic text-mint/60" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white section-y" aria-labelledby="benefits-heading">
        <div className="container-mcr grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="iv.">Benefits</Eyebrow>
            <h2 id="benefits-heading" className="mt-8 text-display-sm text-forest">
              What you <Italic>gain.</Italic>
            </h2>
          </div>
          <Stagger className="lg:col-span-8 grid gap-8 sm:grid-cols-3" amount={0.1}>
            {service.benefits.map((b, i) => (
              <StaggerItem key={i}>
                <div className="flex h-full flex-col rounded-2xl border border-forest/12 bg-ivory p-7">
                  <span className="font-serif text-lg italic text-sage" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-forest">{b.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{b.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Considerations (optional) */}
      {service.considerations && (
        <section className="bg-mint section-y" aria-labelledby="considerations-heading">
          <div className="container-mcr grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow index="v.">Before you book</Eyebrow>
              <h2 id="considerations-heading" className="mt-8 text-display-sm text-forest">
                {service.considerations.title}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="flex flex-col gap-5">
                {service.considerations.points.map((point, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <li className="flex items-start gap-4 rounded-xl border border-forest/15 bg-white/60 p-5">
                      <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-forest text-ivory">
                        <span className="text-xs font-bold">!</span>
                      </span>
                      <p className="text-sm leading-relaxed text-charcoal/75">{point}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Signature section */}
      <section className="relative overflow-hidden bg-forest text-ivory section-y" aria-labelledby="signature-heading">
        <div className="container-mcr relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Eyebrow tone="light">{service.signature.eyebrow}</Eyebrow>
            <h2 id="signature-heading" className="mt-8 text-display-lg">
              {service.signature.title}
            </h2>
            <p className="mt-8 max-w-lg text-lede text-ivory/75">{service.signature.text}</p>
            <ArrowLink href="/book-now" variant="light" size="lg" className="mt-10">
              Book this service
            </ArrowLink>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
              <ParallaxImage
                src={service.secondaryImage}
                alt={service.secondaryAlt}
                className="absolute inset-0"
                strength={8}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service-specific FAQs */}
      <section className="bg-ivory section-y" aria-labelledby="service-faqs-heading">
        <div className="container-mcr grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="vi.">Questions</Eyebrow>
            <h2 id="service-faqs-heading" className="mt-8 text-display-sm text-forest">
              About this <Italic>service.</Italic>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              Still have questions? Visit our general FAQ page or get in touch.
            </p>
            <ArrowLink href="/faq" variant="text" className="mt-6">
              General FAQ
            </ArrowLink>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      <RelatedServices slugs={service.related} />

      <CtaSection />
    </>
  )
}

// --- Intro section with layout variations ---

function IntroSection({ service }: { service: NonNullable<ReturnType<typeof getService>> }) {
  if (service.layout === 'split') {
    return (
      <section className="bg-ivory section-y" aria-labelledby="intro-heading">
        <div className="container-mcr grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Eyebrow>Overview</Eyebrow>
            <h2 id="intro-heading" className="mt-8 text-display-md text-forest">
              What it <Italic>is.</Italic>
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {service.intro.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-lede text-charcoal/75">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <ClipImage src={service.image} alt={service.imageAlt} className="aspect-[4/5] w-full" />
          </div>
        </div>
      </section>
    )
  }

  if (service.layout === 'fullbleed') {
    return (
      <section className="relative" aria-labelledby="intro-heading">
        <div className="relative h-[55svh] min-h-[360px] overflow-hidden">
          <ClipImage src={service.image} alt={service.imageAlt} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
          <div className="container-mcr absolute inset-x-0 bottom-0 pb-10">
            <h2 id="intro-heading" className="max-w-2xl text-display-md text-ivory">
              What it <Italic>is.</Italic>
            </h2>
          </div>
        </div>
        <div className="bg-white section-y">
          <div className="container-mcr max-w-3xl">
            <Eyebrow>Overview</Eyebrow>
            <div className="mt-8 flex flex-col gap-5">
              {service.intro.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-lede text-charcoal/75">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (service.layout === 'centered') {
    return (
      <section className="bg-ivory section-y" aria-labelledby="intro-heading">
        <div className="container-mcr">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">Overview</Eyebrow>
            <h2 id="intro-heading" className="mt-8 text-display-md text-forest">
              What it <Italic>is.</Italic>
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {service.intro.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-lede text-charcoal/75 text-left">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <ClipImage src={service.image} alt={service.imageAlt} className="aspect-[16/9] w-full" />
          </div>
        </div>
      </section>
    )
  }

  // stacked
  return (
    <section className="bg-white section-y" aria-labelledby="intro-heading">
      <div className="container-mcr">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <ClipImage src={service.image} alt={service.imageAlt} className="aspect-[4/3] w-full" />
          </div>
          <div className="lg:col-span-6">
            <Eyebrow>Overview</Eyebrow>
            <h2 id="intro-heading" className="mt-8 text-display-md text-forest">
              What it <Italic>is.</Italic>
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {service.intro.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="text-lede text-charcoal/75">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
