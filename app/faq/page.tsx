import type { Metadata } from 'next'
import { faqGroups } from '@/lib/faqs'
import { Reveal, SplitHeadline } from '@/components/motion/reveal'
import { Eyebrow } from '@/components/site/primitives'
import { CtaSection, PageHero } from '@/components/site/sections'
import { FaqAccordion } from '@/components/site/faq-accordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about appointments, treatments, and booking at MCR Physiotherapy.',
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        crumbs={[{ label: 'FAQ' }]}
        intro="Answers to the questions we hear most. If something is not covered here, please contact the clinic and we will be happy to help."
        lines={[
          'Questions,',
          <span key="b">
            <em className="font-serif font-normal italic">answered.</em>
          </span>,
        ]}
      />

      <section className="bg-white section-y" aria-labelledby="faq-heading">
        <div className="container-mcr grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow>Common questions</Eyebrow>
            <h2 id="faq-heading" className="mt-8 text-display-md text-forest">
              The things people <em className="font-serif font-normal italic">often</em> ask.
            </h2>
            <div className="mt-10 sticky top-[calc(var(--header-height)+2rem)] hidden flex-col gap-2 lg:flex">
              {faqGroups.map((g, i) => (
                <a
                  key={g.group}
                  href={`#group-${i}`}
                  className="text-sm font-semibold text-charcoal/60 transition-colors hover:text-forest"
                >
                  {g.group}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-16">
              {faqGroups.map((group, gi) => (
                <Reveal key={group.group} delay={gi * 0.05}>
                  <div id={`group-${gi}`} className="scroll-mt-32">
                    <h3 className="border-b border-forest/15 pb-4 text-display-sm text-forest">
                      {group.group}
                    </h3>
                    <div className="mt-2">
                      <FaqAccordion items={group.items} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title={['Still', 'unsure?']}
        text="If your question is not answered here, get in touch — we will be happy to help you choose the right starting point."
      />
    </>
  )
}
