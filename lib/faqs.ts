export type FaqGroup = { group: string; items: { q: string; a: string }[] }

export const faqGroups: FaqGroup[] = [
  {
    group: 'Getting started',
    items: [
      {
        q: 'Which appointment should I book first?',
        a: 'If you have not been seen at MCR before, a Physiotherapy Assessment is usually the right starting point. If you are unsure, contact the clinic and we can help you choose.',
      },
      {
        q: 'Do I need a GP referral?',
        a: 'Referral requirements can depend on your circumstances and any insurance arrangements. Please contact the clinic to confirm what applies to you.',
      },
      {
        q: 'What should I bring?',
        a: 'Any relevant information about your concern — such as scan reports, letters, or a list of medication — and comfortable clothing.',
      },
    ],
  },
  {
    group: 'Appointments',
    items: [
      {
        q: 'What should I wear?',
        a: 'Comfortable, loose clothing that allows the area of concern to be moved and assessed. For movement-based sessions, wear clothing and footwear suitable for exercise.',
      },
      {
        q: 'How long are appointments?',
        a: 'Appointment lengths vary by service. Confirmed durations will be shown when booking.',
      },
      {
        q: 'How many sessions will I need?',
        a: 'This varies from person to person. Your clinician will discuss a plan with you and review it regularly — there is no fixed number.',
      },
      {
        q: 'Can I bring someone with me?',
        a: 'Yes, you are welcome to bring a friend, family member, or chaperone to your appointment.',
      },
    ],
  },
  {
    group: 'Treatments',
    items: [
      {
        q: 'Are acupuncture and cupping suitable for everyone?',
        a: 'No. Both require screening, and are not suitable for some people — for example those with certain medical conditions, bleeding disorders, or during pregnancy. Your practitioner will discuss suitability with you.',
      },
      {
        q: 'Will treatment hurt?',
        a: 'Treatment should be kept within what you are comfortable with. Some temporary soreness can occur after certain treatments, and your clinician will explain what to expect.',
      },
      {
        q: 'Do you guarantee results?',
        a: 'No. Responses to treatment vary, and we focus on honest, individual plans and realistic expectations rather than guarantees.',
      },
    ],
  },
  {
    group: 'Booking & policies',
    items: [
      {
        q: 'How do I cancel or rearrange?',
        a: 'Cancellation and rescheduling policies will be confirmed by the clinic. Please contact MCR as early as possible if you need to change your appointment.',
      },
      {
        q: 'Do you work with insurers?',
        a: 'Please contact the clinic to check whether your insurer is accepted and what information you may need.',
      },
      {
        q: 'Is this site suitable for emergencies?',
        a: 'No. If you have a medical emergency, call 999 or attend A&E. For urgent advice, contact NHS 111.',
      },
    ],
  },
]
