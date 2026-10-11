import type { Metadata } from 'next'
import { site } from '@/lib/site'
import { PendingBadge } from '@/components/site/primitives'
import { PageHero } from '@/components/site/sections'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses, and protects personal information.`,
}

const sections = [
  {
    heading: 'Introduction',
    body: [
      `${site.name} (\"we\", \"us\", \"the clinic\") is committed to protecting the privacy of our patients and website visitors. This policy explains how we collect, use, and store personal information, both online and in the clinic.`,
      `This is a draft privacy policy provided as a starting point. It has not been reviewed by a legal professional and should be reviewed and adapted before publication. Please do not rely on this document as your final privacy policy without seeking appropriate advice.`,
    ],
  },
  {
    heading: 'Information we collect',
    body: [
      'In the clinic: personal and health information you provide during appointments, including contact details, medical history, assessment findings, treatment notes, and exercise programmes.',
      'On this website: any information you submit through a contact or booking form, such as your name, email address, phone number, and message content. We may also collect standard technical information such as browser type and pages visited, using privacy-respecting analytics.',
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      'To provide and manage your physiotherapy care, including assessment, treatment, and follow-up.',
      'To communicate with you about appointments, treatment plans, and related matters.',
      'To meet legal, regulatory, and professional registration obligations.',
      'We do not sell your personal data to third parties.',
    ],
  },
  {
    heading: 'Legal basis for processing',
    body: [
      'We process personal and health data on the basis of providing healthcare (the performance of a task in the public interest, or our legitimate interests as a healthcare provider), and with your consent where applicable. Health data is classed as special category data and is handled with additional safeguards.',
    ],
  },
  {
    heading: 'How long we keep your data',
    body: [
      'Clinical records are retained in line with professional body guidance and applicable regulations. Records are typically kept for a number of years after your last appointment, after which they are securely destroyed. The specific retention period should be confirmed with the clinic.',
    ],
  },
  {
    heading: 'Sharing your information',
    body: [
      'We may share relevant information with other healthcare professionals involved in your care (such as your GP or consultant) where appropriate and with your knowledge. We may also share information where required by law.',
      'Any third-party services we use (such as booking or analytics tools) are expected to process data in line with applicable data protection law.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'Under data protection law, you have rights including access to your personal data, correction of inaccurate information, and in some cases erasure or restriction of processing. To exercise any of these rights, please contact the clinic.',
      'If you have a concern about how we handle your data, you have the right to complain to the Information Commissioner\u2019s Office (ICO).',
    ],
  },
  {
    heading: 'Security',
    body: [
      'We take reasonable steps to protect personal information from unauthorised access, loss, or misuse. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: 'Cookies',
    body: [
      'This website may use cookies and similar technologies for basic functionality and privacy-respecting analytics. You can control cookies through your browser settings. A detailed cookie policy will be added once the specific tools in use have been confirmed.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      `If you have any questions about this privacy policy or how we handle your data, please contact the clinic directly. Contact details are available on our contact page.`,
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        crumbs={[{ label: 'Privacy Policy' }]}
        intro={`How ${site.name} collects, uses, and protects personal information. This is a draft provided for review.`}
        lines={[
          'Privacy',
          <span key="b">
            <em className="font-serif font-normal italic">policy.</em>
          </span>,
        ]}
      >
        <div className="mt-10">
          <PendingBadge>Draft — pending legal review</PendingBadge>
        </div>
      </PageHero>

      <section className="bg-white section-y" aria-labelledby="privacy-content">
        <div className="container-mcr grid gap-12 lg:grid-cols-12">
          <nav aria-label="Contents" className="lg:col-span-3">
            <div className="sticky top-[calc(var(--header-height)+2rem)] hidden flex-col gap-2 lg:flex">
              <p className="text-eyebrow text-forest">Contents</p>
              {sections.map((s, i) => (
                <a
                  key={i}
                  href={`#section-${i}`}
                  className="text-sm font-semibold text-charcoal/60 transition-colors hover:text-forest"
                >
                  {s.heading}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex flex-col lg:col-span-8 lg:col-start-5">
            <div className="flex flex-col gap-12">
              {sections.map((s, i) => (
                <div key={i} id={`section-${i}`} className="scroll-mt-32">
                  <h2 className="text-display-sm text-forest">{s.heading}</h2>
                  <div className="mt-5 flex flex-col gap-4">
                    {s.body.map((p, pi) => (
                      <p key={pi} className="leading-relaxed text-charcoal/75">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-16 border-t border-forest/15 pt-8 text-sm text-ink-muted">
              Last updated: To be confirmed. This document is a draft and has not been reviewed by a legal
              professional.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
