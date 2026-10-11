import Image from 'next/image'
import type { Metadata } from 'next'
import { ClipImage, MovementLine, ParallaxImage, Reveal, SplitHeadline, Stagger, StaggerItem } from '@/components/motion/reveal'
import { ArrowLink, Eyebrow, Italic } from '@/components/site/primitives'
import { CtaSection, PageHero } from '@/components/site/sections'

export const metadata: Metadata = {
  title: 'About',
  description:
    'MCR Physiotherapy is a movement-focused clinic built on listening, clear explanation, and plans shaped around the person — not just the problem.',
}

const values = [
  {
    title: 'Listen first',
    text: 'Understanding your story comes before any plan. We take time to hear what has brought you in and what you want to get back to.',
  },
  {
    title: 'Explain clearly',
    text: 'Findings, options, and expectations are discussed in plain language so you always understand what is happening and why.',
  },
  {
    title: 'Progress appropriately',
    text: 'Plans are reviewed and adapted as you change — challenged when ready, eased when needed, and never rushed.',
  },
  {
    title: 'Be honest',
    text: 'We do not make guarantees or exaggerated claims. Care is grounded in realistic expectations and individual circumstances.',
  },
]

const approachSteps = [
  {
    index: '01',
    title: 'A conversation, not a checklist',
    text: 'Your first appointment is about understanding — your concerns, your history, and the goals that matter to you. We listen before we assess.',
    image: '/images/care.png',
    alt: 'Physiotherapist talking with a seated patient during an assessment',
  },
  {
    index: '02',
    title: 'An assessment that makes sense',
    text: 'Your physiotherapist carries out an assessment appropriate to your concerns and explains what they find in plain language.',
    image: '/images/assessment.png',
    alt: 'Physiotherapist assessing the movement of a patient\u2019s knee',
  },
  {
    index: '03',
    title: 'A plan you understand and agree with',
    text: 'Together we shape a plan around your goals — combining hands-on care, exercise, and advice where appropriate, at a pace that feels right.',
    image: '/images/follow-up.png',
    alt: 'Patient performing a resistance band exercise while a physiotherapist reviews notes',
  },
  {
    index: '04',
    title: 'Progress that is reviewed, not guessed',
    text: 'As things change, your plan is adapted. The aim is to help you move with more confidence and, in time, continue independently.',
    image: '/images/movement.png',
    alt: 'Patient performing a controlled step-down exercise with guidance',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        crumbs={[{ label: 'About' }]}
        intro="A movement-focused clinic built on listening, clear explanation, and plans shaped around the person — not just the problem."
        lines={[
          'Care that treats',
          <span key="b">
            the <Italic>person,</Italic> not just
          </span>,
          'the problem.',
        ]}
      >
        <div className="mt-16">
          <ClipImage
            src="/images/clinic.png"
            alt="A calm, light-filled MCR treatment room with a prepared treatment table"
            className="aspect-[16/7] w-full"
            priority
          />
        </div>
      </PageHero>

      {/* Philosophy statement */}
      <section className="bg-white section-y" aria-labelledby="philosophy-heading">
        <div className="container-mcr grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Eyebrow index="i.">Our philosophy</Eyebrow>
          </div>
          <div className="lg:col-span-9">
            <SplitHeadline
              as="p"
              className="text-display-md text-forest"
              lines={[
                'Good care starts with',
                <span key="b">
                  <Italic>understanding</Italic> the person
                </span>,
                '— not just the problem.',
              ]}
            />
            <Reveal className="mt-10 max-w-2xl" delay={0.2}>
              <p className="text-lede text-charcoal/75">
                Every plan at MCR is shaped around how you move, what you want to return to, and the pace that
                feels right for you. We combine hands-on care with exercise and advice, and we are honest about
                what treatment can and cannot do.
              </p>
              <p className="mt-6 leading-relaxed text-charcoal/70">
                We believe movement is at the centre of recovery and long-term wellbeing. Whether you are
                dealing with a new concern, an ongoing issue, or working towards a specific goal, our role is
                to guide you with clarity, patience, and a plan that reflects where you are — not where a
                textbook says you should be.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory section-y" aria-labelledby="values-heading">
        <div className="container-mcr">
          <div className="max-w-2xl">
            <Eyebrow index="ii.">What guides us</Eyebrow>
            <h2 id="values-heading" className="mt-8 text-display-md text-forest">
              Four principles, <Italic>always.</Italic>
            </h2>
          </div>
          <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" amount={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="border-t border-forest/15 pt-6">
                  <span className="font-serif text-lg italic text-sage" aria-hidden="true">
                    {String(values.indexOf(v) + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-forest">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Approach steps */}
      <section className="relative bg-forest text-ivory section-y" aria-labelledby="approach-heading">
        <MovementLine
          className="absolute inset-x-0 top-12 h-32 w-full text-sage/25"
          path="M0 100 C 200 20, 400 160, 600 60 S 900 20, 1000 70"
          strokeWidth={1}
        />
        <div className="container-mcr relative">
          <div className="max-w-2xl">
            <Eyebrow index="iii." tone="light">
              How we work
            </Eyebrow>
            <h2 id="approach-heading" className="mt-8 text-display-lg">
              Listen. Assess. <Italic>Plan. Move.</Italic>
            </h2>
          </div>
          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            {approachSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.1}>
                <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <span className="font-serif text-2xl italic text-mint/70">{step.index}</span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-4 leading-relaxed text-ivory/70">{step.text}</p>
                  </div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-charcoal sm:w-40">
                    <Image src={step.image} alt={step.alt} fill sizes="160px" className="object-cover" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="relative" aria-label="Clinic environment">
        <ParallaxImage
          src="/images/clinic.png"
          alt="A calm, light-filled MCR treatment room with a prepared treatment table"
          className="h-[70svh] min-h-[420px]"
          strength={10}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/15 to-transparent" />
        <div className="container-mcr absolute inset-x-0 bottom-0 pb-12 md:pb-20">
          <SplitHeadline
            as="p"
            className="max-w-3xl text-display-md text-ivory"
            lines={[
              'A calm space to',
              <span key="b">
                <Italic>understand,</Italic> recover,
              </span>,
              'and rebuild.',
            ]}
          />
        </div>
      </section>

      <CtaSection
        title={['Come and', 'see us.']}
        text="Book an appointment and take the first step towards moving with more confidence. If you are unsure which service is right for you, start with a Physiotherapy Assessment."
      />
    </>
  )
}
