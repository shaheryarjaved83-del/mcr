import { Hero } from '@/components/home/hero'
import { Statement } from '@/components/home/statement'
import { ServicesShowcase } from '@/components/home/services-showcase'
import { Approach } from '@/components/home/approach'
import { InjuriesTeaser, PhilosophyBand, TeamTeaser, TestimonialTeaser } from '@/components/home/teasers'
import { CtaSection } from '@/components/site/sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <ServicesShowcase />
      <Approach />
      <PhilosophyBand />
      <InjuriesTeaser />
      <TeamTeaser />
      <TestimonialTeaser />
      <CtaSection />
    </>
  )
}
