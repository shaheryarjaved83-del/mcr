import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ArrowLink } from '@/components/site/primitives'
import { MovementLine } from '@/components/motion/reveal'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ivory pt-[var(--header-height)]">
      <MovementLine
        className="absolute inset-x-0 top-1/3 h-64 w-full text-sage/40"
        path="M0 160 C 160 40, 330 230, 520 120 S 820 10, 1000 110"
        strokeWidth={1.2}
      />
      <div className="container-mcr relative grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-eyebrow text-forest">404 — Page not found</p>
          <h1 className="mt-8 text-display-xl text-forest">
            This page <em className="font-serif font-normal italic text-sage">moved.</em>
          </h1>
          <p className="mt-8 max-w-lg text-lede text-charcoal/75">
            The page you are looking for does not exist or may have been moved. Let us help you find your way
            back.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ArrowLink href="/" size="lg">
              Back to home
            </ArrowLink>
            <ArrowLink href="/services" variant="outline" size="lg">
              Explore services
            </ArrowLink>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-forest/12 bg-white p-8">
            <p className="text-eyebrow text-forest">Quick links</p>
            <ul className="mt-6 flex flex-col gap-1">
              {[
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Team', href: '/team' },
                { label: 'Common Injuries', href: '/common-injuries' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'Contact', href: '/contact' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Book Now', href: '/book-now' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-4 rounded-lg px-3 py-3 text-forest transition-colors hover:bg-mint"
                  >
                    <span className="text-sm font-semibold">{link.label}</span>
                    <ArrowUpRight className="size-4 text-forest/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-forest" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
