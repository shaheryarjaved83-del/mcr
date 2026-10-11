import type { Metadata } from 'next'
import { services } from '@/lib/services'
import { Stagger, StaggerItem } from '@/components/motion/reveal'
import { Eyebrow } from '@/components/site/primitives'
import { CtaSection, PageHero, ServiceCard } from '@/components/site/sections'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'From physiotherapy assessment to strength & conditioning, massage, acupuncture, cupping, and recovery — explore the services available at MCR Physiotherapy.',
}

const categories = ['Assessment', 'Movement', 'Hands-on', 'Recovery'] as const

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        crumbs={[{ label: 'Services' }]}
        intro="From your first assessment to structured strength work and recovery, each service is delivered with the same principles: listen carefully, explain clearly, progress appropriately."
        lines={[
          'Eight ways to',
          <span key="b">
            <em className="font-serif font-normal italic">move</em> forward.
          </span>,
        ]}
      />

      {categories.map((category, ci) => {
        const items = services.filter((s) => s.category === category)
        return (
          <section
            key={category}
            className={ci % 2 === 0 ? 'bg-white section-y' : 'bg-ivory section-y'}
            aria-labelledby={`cat-${category}`}
          >
            <div className="container-mcr">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <Eyebrow index={`${String(ci + 1).padStart(2, '0')}.`}>{category}</Eyebrow>
                  <h2 id={`cat-${category}`} className="mt-6 text-display-sm text-forest">
                    {category === 'Assessment' && (
                      <>
                        Understanding <em className="font-serif font-normal italic">starts here.</em>
                      </>
                    )}
                    {category === 'Movement' && (
                      <>
                        Train for the life <em className="font-serif font-normal italic">you live.</em>
                      </>
                    )}
                    {category === 'Hands-on' && (
                      <>
                        Care you can <em className="font-serif font-normal italic">feel.</em>
                      </>
                    )}
                    {category === 'Recovery' && (
                      <>
                        Rest, <em className="font-serif font-normal italic">restored.</em>
                      </>
                    )}
                  </h2>
                </div>
              </div>
              <Stagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3" amount={0.08}>
                {items.map((s) => (
                  <StaggerItem key={s.slug}>
                    <ServiceCard service={s} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        )
      })}

      <CtaSection />
    </>
  )
}
