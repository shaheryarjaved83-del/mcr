import Link from 'next/link'
import type { Metadata } from 'next'
import { injuries, regions, type Region } from '@/lib/injuries'
import { getService } from '@/lib/services'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal'
import { ArrowLink, Eyebrow, Italic } from '@/components/site/primitives'
import { CtaSection, PageHero } from '@/components/site/sections'

export const metadata: Metadata = {
  title: 'Common Injuries',
  description:
    'Common concerns people come to MCR Physiotherapy with — from ankle sprains and knee pain to back pain and post-surgery rehabilitation. An assessment helps us understand your specific situation.',
}

const regionDescriptions: Record<Region, string> = {
  'Lower body': 'Hips, knees, ankles, and everything in between.',
  'Upper body': 'Shoulders, elbows, wrists, and hands.',
  Spine: 'Lower back, upper back, and neck.',
  General: 'Concerns that span areas or affect overall movement.',
}

export default function CommonInjuriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Common concerns"
        crumbs={[{ label: 'Common Injuries' }]}
        intro="Every person is different. These are some of the concerns people often come to us with — an assessment helps us understand your specific situation."
        lines={[
          'Concerns we',
          <span key="b">
            <Italic>commonly</Italic> see.
          </span>,
        ]}
      />

      {regions.map((region, ri) => {
        const regionInjuries = injuries.filter((inj) => inj.region === region)
        return (
          <section
            key={region}
            className={ri % 2 === 0 ? 'bg-white section-y' : 'bg-ivory section-y'}
            aria-labelledby={`region-${region}`}
          >
            <div className="container-mcr">
              <div className="max-w-2xl">
                <Eyebrow index={`${String(ri + 1).padStart(2, '0')}.`}>{region}</Eyebrow>
                <h2 id={`region-${region}`} className="mt-6 text-display-md text-forest">
                  {region.split(' ').map((word, wi) => (
                    <span key={wi}>
                      {wi === region.split(' ').length - 1 ? (
                        <Italic>{word}</Italic>
                      ) : (
                        `${word} `
                      )}
                    </span>
                  ))}
                </h2>
                <p className="mt-5 text-lede text-charcoal/75">{regionDescriptions[region]}</p>
              </div>

              <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.06}>
                {regionInjuries.map((inj) => (
                  <StaggerItem key={inj.name}>
                    <div className="group flex h-full flex-col rounded-2xl border border-forest/12 bg-white p-7 transition-all duration-500 ease-expo hover:border-forest/30 hover:shadow-[0_12px_40px_-12px_rgba(23,63,53,0.12)]">
                      <h3 className="text-xl font-semibold tracking-tight text-forest">{inj.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{inj.summary}</p>

                      <div className="mt-6 border-t border-forest/10 pt-5">
                        <p className="text-eyebrow text-forest/60">Services that may help</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {inj.services.map((slug) => {
                            const service = getService(slug)
                            if (!service) return null
                            return (
                              <Link
                                key={slug}
                                href={`/services/${slug}`}
                                className="inline-flex items-center gap-1.5 rounded-full border border-forest/15 px-3.5 py-1.5 text-[0.8rem] font-semibold text-forest transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-ivory"
                              >
                                {service.shortName}
                                <ArrowUpRight className="size-3" aria-hidden="true" />
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        )
      })}

      {/* Important note */}
      <section className="bg-forest text-ivory section-y" aria-labelledby="important-heading">
        <div className="container-mcr grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow tone="light">A note</Eyebrow>
            <h2 id="important-heading" className="mt-8 text-display-md">
              This is <Italic>general</Italic> information.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lede text-ivory/80">
              The concerns listed here are common, but they are not a diagnosis. Pain and movement problems
              can have many causes, and the right approach depends on your individual situation.
            </p>
            <p className="mt-6 leading-relaxed text-ivory/65">
              An assessment is the best way to understand what may be contributing to your concern and to agree
              a sensible plan. If you are unsure where to start, a Physiotherapy Assessment is usually the
              right first step.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ArrowLink href="/book-now" variant="light" size="lg">
                Book an assessment
              </ArrowLink>
              <ArrowLink href="/contact" variant="ghost-light" size="lg">
                Ask a question
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
