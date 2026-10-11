import Link from 'next/link'
import { contactDetails, mainNav, openingHours, secondaryNav, site } from '@/lib/site'
import { services } from '@/lib/services'
import { MovementLine } from '@/components/motion/reveal'
import { Logo } from './logo'
import { PendingBadge } from './primitives'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-ivory">
      <MovementLine
        className="absolute inset-x-0 top-16 h-40 w-full text-sage/30"
        path="M0 140 C 200 40, 380 200, 600 100 S 900 20, 1000 80"
        strokeWidth={1}
      />
      <div className="container-mcr relative pb-10 pt-24 md:pt-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-10 max-w-md text-display-sm text-ivory">
              Movement changes <em className="font-serif font-normal italic text-mint">everything.</em>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/65">{site.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <FooterCol title="Explore">
              {mainNav.map((n) => (
                <FooterLink key={n.href} href={n.href}>
                  {n.label}
                </FooterLink>
              ))}
              {secondaryNav
                .filter((n) => n.href !== '/')
                .map((n) => (
                  <FooterLink key={n.href} href={n.href}>
                    {n.label}
                  </FooterLink>
                ))}
            </FooterCol>
            <FooterCol title="Services">
              {services.map((s) => (
                <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                  {s.name}
                </FooterLink>
              ))}
            </FooterCol>
            <div className="col-span-2 sm:col-span-1">
              <FooterCol title="Visit">
                {contactDetails.map((c) => (
                  <li key={c.label} className="text-sm">
                    <span className="block text-ivory/45">{c.label}</span>
                    <span className="text-ivory/85">{c.value}</span>
                  </li>
                ))}
                <li className="pt-2 text-sm">
                  <span className="block text-ivory/45">Opening hours</span>
                  {openingHours.map((h) => (
                    <span key={h.days} className="block text-ivory/85">
                      {h.days}: {h.hours}
                    </span>
                  ))}
                </li>
                <li className="pt-2">
                  <PendingBadge className="border-mint/40 text-mint/80" />
                </li>
              </FooterCol>
            </div>
          </div>
        </div>

        <p
          className="mt-24 select-none text-[clamp(3.5rem,15vw,15rem)] font-medium leading-[0.8] tracking-[-0.06em] text-ivory/[0.07]"
          aria-hidden="true"
        >
          The Art of <span className="font-serif italic">Movement</span>
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-ivory/12 pt-8 text-xs text-ivory/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="max-w-xl md:text-right">
            Information on this website is general and not a substitute for individual clinical advice. In an
            emergency call 999.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-eyebrow text-mint/80">{title}</h2>
      <ul className="mt-6 flex flex-col gap-3">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-ivory/80 transition-colors hover:text-mint">
        {children}
      </Link>
    </li>
  )
}
