/**
 * Central business details. Every field that has not been confirmed by MCR Physiotherapy
 * is flagged `verified: false` and rendered with a "pending verification" label.
 * Replace the values and flip the flag once the clinic supplies confirmed details.
 */
export const site = {
  name: 'MCR Physiotherapy',
  shortName: 'MCR',
  tagline: 'The Art of Movement',
  description:
    'Personalised physiotherapy and movement-focused care to help you work towards your goals, build confidence, and get back to the activities that matter to you.',
  url: 'https://mcr-physiotherapy.example',
}

export type ContactDetail = {
  label: string
  value: string
  href?: string
  verified: boolean
}

export const contactDetails: ContactDetail[] = [
  { label: 'Telephone', value: 'Number to be confirmed', verified: false },
  { label: 'Email', value: 'Email address to be confirmed', verified: false },
  { label: 'Address', value: 'Clinic address to be confirmed', verified: false },
]

export const openingHours: { days: string; hours: string; verified: boolean }[] = [
  { days: 'Monday – Friday', hours: 'Hours to be confirmed', verified: false },
  { days: 'Saturday', hours: 'Hours to be confirmed', verified: false },
  { days: 'Sunday', hours: 'Hours to be confirmed', verified: false },
]

export const socialLinks: { label: string; href: string }[] = []

export const mainNav = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Injuries', href: '/common-injuries' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export const secondaryNav = [
  { label: 'Home', href: '/' },
  { label: 'Book Now', href: '/book-now' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]
