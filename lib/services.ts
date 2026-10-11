export type ServiceLayout = 'split' | 'fullbleed' | 'stacked' | 'centered'

export type Service = {
  slug: string
  index: string
  name: string
  shortName: string
  category: 'Assessment' | 'Movement' | 'Hands-on' | 'Recovery'
  layout: ServiceLayout
  headline: { lead: string; accent: string; tail?: string }
  summary: string
  image: string
  imageAlt: string
  secondaryImage: string
  secondaryAlt: string
  metaDescription: string
  intro: string[]
  suitableFor: string[]
  expect: { title: string; text: string }[]
  session: { title: string; text: string }[]
  benefits: { title: string; text: string }[]
  considerations?: { title: string; points: string[] }
  signature: { eyebrow: string; title: string; text: string }
  faqs: { q: string; a: string }[]
  related: string[]
}

export const services: Service[] = [
  {
    slug: 'physiotherapy-assessment',
    index: '01',
    name: 'Physiotherapy Assessment',
    shortName: 'Assessment',
    category: 'Assessment',
    layout: 'split',
    headline: { lead: 'Every plan begins', accent: 'with listening.' },
    summary:
      'A thorough first appointment to understand your concerns, explore how you move, and agree on a sensible way forward.',
    image: '/images/assessment.png',
    imageAlt: 'Physiotherapist assessing the range of motion of a patient’s knee on a treatment table',
    secondaryImage: '/images/care.png',
    secondaryAlt: 'Physiotherapist assessing a seated patient’s shoulder movement',
    metaDescription:
      'An initial physiotherapy assessment at MCR Physiotherapy: a conversation about your concerns and goals, an appropriate physical assessment, and a clear explanation of findings.',
    intro: [
      'Your first appointment is about understanding — not rushing to a solution. We take time to hear what has brought you in, what you have already tried, and what you would like to get back to.',
      'From there, your physiotherapist will carry out an assessment appropriate to your concerns, explain what they have found in plain language, and discuss options with you so that any plan is one you understand and agree with.',
    ],
    suitableFor: [
      'People experiencing a new or ongoing musculoskeletal concern',
      'Anyone who would like a professional view on pain, stiffness, or movement',
      'Active people wanting to understand a recurring niggle',
      'Those returning to activity and unsure where to start',
    ],
    expect: [
      { title: 'A conversation first', text: 'We discuss your concerns, relevant medical history, daily routine, and the goals that matter to you.' },
      { title: 'An appropriate assessment', text: 'Depending on your concerns, this may include observing movement, testing strength and range, and other relevant checks.' },
      { title: 'Findings explained', text: 'Your physiotherapist explains what they have found and what it may mean, and answers your questions.' },
      { title: 'A suggested plan', text: 'Together you agree a sensible next step — which may include treatment, exercise, follow-up, or referral where appropriate.' },
    ],
    session: [
      { title: 'Arrive & settle', text: 'Wear comfortable clothing that allows the relevant area to be assessed.' },
      { title: 'History & goals', text: 'We ask about your concern, how it affects you, and what you hope to achieve.' },
      { title: 'Movement & testing', text: 'Relevant physical tests chosen for your specific situation.' },
      { title: 'Discussion & next steps', text: 'Clear explanation, initial advice, and an agreed plan.' },
    ],
    benefits: [
      { title: 'Clarity', text: 'A clearer understanding of what may be contributing to your concern.' },
      { title: 'Direction', text: 'An individual plan rather than generic advice.' },
      { title: 'Confidence', text: 'Guidance on what you can safely keep doing in the meantime.' },
    ],
    signature: {
      eyebrow: 'What we may explore',
      title: 'An assessment shaped around you — not a checklist.',
      text: 'No two assessments are identical. Your physiotherapist will choose what is relevant to your concerns, and will always explain what they are doing and why.',
    },
    faqs: [
      { q: 'Do I need a referral?', a: 'Referral requirements can depend on your circumstances and any insurance arrangements. Please contact the clinic to check what applies to you.' },
      { q: 'What should I wear?', a: 'Comfortable, loose clothing that allows the area of concern to be moved and assessed easily.' },
      { q: 'Will I receive treatment in my first session?', a: 'Where appropriate, your physiotherapist may begin treatment or give exercises during the assessment. This is discussed with you first.' },
    ],
    related: ['physiotherapy-follow-up', 'functional-training', 'massage'],
  },
  {
    slug: 'physiotherapy-follow-up',
    index: '02',
    name: 'Physiotherapy Assessment Follow-Up',
    shortName: 'Follow-Up',
    category: 'Assessment',
    layout: 'split',
    headline: { lead: 'Progress is', accent: 'a conversation,', tail: 'not a straight line.' },
    summary:
      'Ongoing sessions to review how things are changing, reassess where relevant, and adapt your plan as you progress.',
    image: '/images/follow-up.png',
    imageAlt: 'Patient performing a resistance band shoulder exercise while a physiotherapist reviews her plan',
    secondaryImage: '/images/rehab.png',
    secondaryAlt: 'Runner performing a single-leg balance exercise observed by a physiotherapist',
    metaDescription:
      'Physiotherapy follow-up appointments at MCR Physiotherapy: reviewing progress, reassessing relevant concerns, and adapting your plan where appropriate.',
    intro: [
      'Follow-up sessions keep your plan responsive. We look at what has changed since your last visit — what feels better, what feels the same, and what you have noticed along the way.',
      'Your physiotherapist will reassess where relevant and adjust treatment, exercises, or advice so the approach continues to reflect where you are now, rather than where you started.',
    ],
    suitableFor: [
      'People who have completed an initial MCR assessment',
      'Anyone following an exercise or rehabilitation plan',
      'Those whose symptoms or goals have changed',
      'People wanting support progressing safely',
    ],
    expect: [
      { title: 'Review', text: 'An honest conversation about how things have been since your last session.' },
      { title: 'Reassess', text: 'Relevant measures are rechecked to understand what has changed.' },
      { title: 'Adapt', text: 'Treatment and exercises may be progressed, regressed, or refined.' },
      { title: 'Plan ahead', text: 'Agreeing what to focus on before your next contact with the clinic.' },
    ],
    session: [
      { title: 'Check-in', text: 'How have you been? Any changes, questions, or concerns?' },
      { title: 'Reassessment', text: 'Relevant tests repeated where useful.' },
      { title: 'Treatment & exercise', text: 'Hands-on care and/or exercise, as agreed.' },
      { title: 'Updated plan', text: 'Clear next steps and any changes to your home programme.' },
    ],
    benefits: [
      { title: 'Continuity', text: 'Care that builds on what has already been learned about you.' },
      { title: 'Responsiveness', text: 'A plan adjusted to how you are actually progressing.' },
      { title: 'Accountability', text: 'Regular check-ins can help you stay consistent with your goals.' },
    ],
    signature: {
      eyebrow: 'The progression loop',
      title: 'Review. Reassess. Adapt. Repeat — only as long as it is useful.',
      text: 'The number of follow-ups varies from person to person. Your physiotherapist will discuss whether further sessions are likely to be helpful and when you may be ready to continue independently.',
    },
    faqs: [
      { q: 'How many follow-up sessions will I need?', a: 'This depends on your individual concerns, goals, and how you progress. It will be discussed openly with you, and reviewed regularly.' },
      { q: 'Can I book a follow-up without an initial assessment?', a: 'Follow-ups are designed to build on an initial assessment. If you have not been seen before, please book a Physiotherapy Assessment first.' },
      { q: 'What if my symptoms change between sessions?', a: 'Let the clinic know. Your physiotherapist can advise whether to bring your appointment forward or seek other care.' },
    ],
    related: ['physiotherapy-assessment', 'strength-and-conditioning', 'functional-training'],
  },
  {
    slug: 'functional-training',
    index: '03',
    name: 'Functional Training',
    shortName: 'Functional',
    category: 'Movement',
    layout: 'fullbleed',
    headline: { lead: 'Train for the life', accent: 'you actually live.' },
    summary:
      'Exercise built around real-world movement — improving quality, coordination, and functional strength with appropriate progression.',
    image: '/images/functional.png',
    imageAlt: 'Man performing a controlled kettlebell goblet squat in a bright training studio',
    secondaryImage: '/images/movement.png',
    secondaryAlt: 'Woman performing a step-down exercise on a box guided by a physiotherapist',
    metaDescription:
      'Functional training at MCR Physiotherapy: guided exercise focused on movement quality, coordination, and functional strength, progressed appropriately for you.',
    intro: [
      'Functional training focuses on the movements you rely on every day — squatting, lifting, carrying, stepping, reaching, and turning — and helps you perform them with more control and confidence.',
      'Sessions are built around your goals, whether that is managing the stairs comfortably, returning to a hobby, or preparing for a more active lifestyle. Exercises are chosen and progressed to suit you.',
    ],
    suitableFor: [
      'People wanting to move more confidently in daily life',
      'Those transitioning from rehabilitation back to general activity',
      'Anyone looking to improve coordination and control',
      'People who prefer guided, purposeful exercise',
    ],
    expect: [
      { title: 'Movement screen', text: 'We look at how you currently move through relevant everyday patterns.' },
      { title: 'Purposeful exercise', text: 'Exercises selected to reflect the tasks that matter to you.' },
      { title: 'Coaching', text: 'Clear cues and feedback to help you move well.' },
      { title: 'Progression', text: 'Exercises are adjusted as your control and capacity change.' },
    ],
    session: [
      { title: 'Warm-up', text: 'Gentle preparation for the session ahead.' },
      { title: 'Skill & control', text: 'Coordination and movement-quality work.' },
      { title: 'Functional strength', text: 'Loaded or bodyweight patterns as appropriate.' },
      { title: 'Take-home', text: 'A manageable plan to continue between sessions.' },
    ],
    benefits: [
      { title: 'Movement quality', text: 'Practising patterns with better control and awareness.' },
      { title: 'Everyday capacity', text: 'Building strength that relates directly to daily tasks.' },
      { title: 'Confidence', text: 'Feeling more prepared for the activities you enjoy.' },
    ],
    signature: {
      eyebrow: 'Five fundamental patterns',
      title: 'Squat. Hinge. Push. Pull. Carry.',
      text: 'Most of what we do in daily life is built from a small set of movement patterns. Training them thoughtfully — at a level that is right for you — is the heart of functional training.',
    },
    faqs: [
      { q: 'Do I need to be fit to start?', a: 'No. Sessions are planned around your current level and progressed gradually.' },
      { q: 'Is this different from a gym class?', a: 'Yes — sessions are individual and shaped around your goals and any relevant history discussed with the clinic.' },
      { q: 'What equipment is used?', a: 'This varies. Sessions may use bodyweight, bands, kettlebells, or other equipment depending on your plan.' },
    ],
    related: ['strength-and-conditioning', 'physiotherapy-assessment', 'normatec'],
  },
  {
    slug: 'strength-and-conditioning',
    index: '04',
    name: 'Strength & Conditioning',
    shortName: 'S&C',
    category: 'Movement',
    layout: 'stacked',
    headline: { lead: 'Stronger,', accent: 'deliberately.' },
    summary:
      'Structured, progressive training to build strength and physical preparation around your individual performance goals.',
    image: '/images/strength.png',
    imageAlt: 'Female athlete performing a barbell deadlift with good form in a bright studio',
    secondaryImage: '/images/rehab.png',
    secondaryAlt: 'Athlete balancing on one leg during a rehabilitation exercise',
    metaDescription:
      'Strength & conditioning at MCR Physiotherapy: structured, progressive exercise programmes designed around your physical preparation and individual performance goals.',
    intro: [
      'Strength & conditioning applies structure to training. Rather than doing a little of everything, we plan progressive work that targets the qualities most relevant to your sport, activity, or goal.',
      'Programmes are individual and reviewed over time, balancing challenge with recovery so that training remains appropriate for you.',
    ],
    suitableFor: [
      'Recreational and competitive athletes',
      'People preparing for an event, season, or challenge',
      'Those progressing beyond the later stages of rehabilitation',
      'Anyone wanting a structured, coached strength programme',
    ],
    expect: [
      { title: 'Needs analysis', text: 'Understanding your activity, demands, training history, and goals.' },
      { title: 'Baseline testing', text: 'Relevant, appropriate measures to inform programming.' },
      { title: 'Structured programme', text: 'A planned progression rather than random workouts.' },
      { title: 'Review & adjust', text: 'Programme updated in response to how you adapt.' },
    ],
    session: [
      { title: 'Prepare', text: 'Mobility and activation specific to the session.' },
      { title: 'Power & speed', text: 'Included where relevant to your goals.' },
      { title: 'Strength', text: 'Main lifts or patterns, progressively loaded.' },
      { title: 'Conditioning', text: 'Energy-system work matched to your demands.' },
    ],
    benefits: [
      { title: 'Structured progress', text: 'Training planned with a clear purpose and direction.' },
      { title: 'Physical preparation', text: 'Developing qualities relevant to your chosen activity.' },
      { title: 'Coached technique', text: 'Feedback that helps you lift and move with good form.' },
    ],
    signature: {
      eyebrow: 'Programme philosophy',
      title: 'Progressive. Individual. Measured.',
      text: 'Good programming is less about intensity and more about consistency. We aim to challenge you appropriately, track how you respond, and progress at a pace you can sustain.',
    },
    faqs: [
      { q: 'Is strength training suitable for me?', a: 'Strength training can be adapted for many people. Your coach or physiotherapist will discuss suitability with you, taking into account any relevant history.' },
      { q: 'Do you write programmes for training on my own?', a: 'Programme options can be discussed with the clinic, including guidance for training between sessions.' },
      { q: 'Can you help me return to sport?', a: 'S&C can form part of a return-to-activity plan. Your physiotherapist will advise whether it is appropriate for your situation.' },
    ],
    related: ['functional-training', 'normatec', 'massage'],
  },
  {
    slug: 'acupuncture',
    index: '05',
    name: 'Acupuncture',
    shortName: 'Acupuncture',
    category: 'Hands-on',
    layout: 'centered',
    headline: { lead: 'A quieter', accent: 'approach', tail: 'to care.' },
    summary:
      'The use of fine, single-use needles as part of a wider treatment plan, with careful screening and clear communication.',
    image: '/images/acupuncture.png',
    imageAlt: 'Gloved practitioner placing fine acupuncture needles on a patient’s upper back',
    secondaryImage: '/images/clinic.png',
    secondaryAlt: 'Calm, bright treatment room with a treatment table and linen curtains',
    metaDescription:
      'Acupuncture at MCR Physiotherapy: fine, single-use needles used as part of a wider treatment plan, with careful screening, consent, and clear communication.',
    intro: [
      'Acupuncture involves inserting very fine, sterile, single-use needles into specific points of the body. In a physiotherapy context, it is typically used alongside other approaches such as exercise and advice, rather than on its own.',
      'Research into acupuncture is ongoing and responses vary between individuals. Your practitioner will discuss whether it may be appropriate for you, what the evidence suggests, and what you can realistically expect.',
    ],
    suitableFor: [
      'Adults for whom acupuncture has been considered appropriate after screening',
      'People who would like an additional option alongside exercise-based care',
      'Those comfortable with the use of fine needles',
    ],
    expect: [
      { title: 'Screening', text: 'We review your medical history to check that acupuncture is appropriate for you.' },
      { title: 'Informed consent', text: 'You will be told what is involved, possible side-effects, and can ask questions before agreeing.' },
      { title: 'Treatment', text: 'Needles are inserted and usually left in place for a short period while you rest.' },
      { title: 'Aftercare', text: 'Guidance on how you may feel afterwards and when to get in touch.' },
    ],
    session: [
      { title: 'Consultation', text: 'Health questions and discussion of your goals.' },
      { title: 'Positioning', text: 'You are positioned comfortably and supported.' },
      { title: 'Needling', text: 'Fine needles placed; you are monitored throughout.' },
      { title: 'Rest & review', text: 'Needles removed and your response discussed.' },
    ],
    benefits: [
      { title: 'An additional option', text: 'May complement exercise and other physiotherapy approaches for some people.' },
      { title: 'Considered use', text: 'Used only where it is felt to be appropriate and agreed with you.' },
      { title: 'Calm setting', text: 'A quiet, unhurried session with time to ask questions.' },
    ],
    considerations: {
      title: 'Important precautions',
      points: [
        'Acupuncture is not suitable for everyone. Please tell your practitioner about any bleeding disorders, anticoagulant medication, pregnancy, pacemakers, needle phobia, or other medical conditions.',
        'Mild, temporary effects such as minor bruising, soreness, or light-headedness can occur.',
        'You can ask to stop at any time.',
      ],
    },
    signature: {
      eyebrow: 'Our approach',
      title: 'Measured language. Careful practice.',
      text: 'We believe in being honest about what acupuncture is and is not. It is one tool within a wider plan, and we will never present it as a cure.',
    },
    faqs: [
      { q: 'Does acupuncture hurt?', a: 'Most people describe a brief prick or a dull, heavy sensation. Your practitioner will check in with you throughout.' },
      { q: 'Are the needles single-use?', a: 'Yes. Acupuncture needles should be sterile and single-use.' },
      { q: 'How many sessions will I need?', a: 'This varies. Your practitioner will discuss whether acupuncture appears to be helpful and whether to continue.' },
    ],
    related: ['massage', 'cupping-therapy', 'physiotherapy-assessment'],
  },
  {
    slug: 'massage',
    index: '06',
    name: 'Massage',
    shortName: 'Massage',
    category: 'Hands-on',
    layout: 'split',
    headline: { lead: 'Hands-on care,', accent: 'at your pace.' },
    summary:
      'Hands-on soft tissue work tailored to your comfort, with clear communication throughout every session.',
    image: '/images/massage.png',
    imageAlt: 'Therapist performing a sports massage on a patient’s calf on a linen-draped table',
    secondaryImage: '/images/clinic.png',
    secondaryAlt: 'Bright treatment room with natural light and a neatly prepared treatment table',
    metaDescription:
      'Massage at MCR Physiotherapy: hands-on soft tissue work tailored to your comfort, with communication throughout and realistic expectations.',
    intro: [
      'Massage uses hands-on techniques to work with the muscles and soft tissues. Many people find it helps them feel more relaxed and comfortable, and it can be used on its own or alongside other care.',
      'Every session is guided by communication. Pressure, areas treated, and positioning are always discussed and adjusted to what feels right for you.',
    ],
    suitableFor: [
      'People who enjoy or would like to try hands-on treatment',
      'Active people looking for a recovery-focused session',
      'Those experiencing general muscular tightness or tension',
      'Anyone wanting a session alongside exercise-based care',
    ],
    expect: [
      { title: 'A short consultation', text: 'Health questions and a conversation about what you would like from the session.' },
      { title: 'Comfort first', text: 'You are positioned comfortably with appropriate draping at all times.' },
      { title: 'Ongoing communication', text: 'Pressure is adjusted as you go — just let us know.' },
      { title: 'Aftercare', text: 'Simple guidance for the hours and days after your session.' },
    ],
    session: [
      { title: 'Check-in', text: 'Goals, areas of focus, and any health considerations.' },
      { title: 'Settle', text: 'Positioning and comfort checked.' },
      { title: 'Treatment', text: 'Techniques chosen for you, with pressure you agree with.' },
      { title: 'Close', text: 'Time to get up slowly and discuss any next steps.' },
    ],
    benefits: [
      { title: 'Relaxation', text: 'Many people find massage a calming, restorative experience.' },
      { title: 'Feeling looser', text: 'Some people report feeling less tight after a session.' },
      { title: 'Part of a plan', text: 'Can complement exercise, rather than replace it.' },
    ],
    signature: {
      eyebrow: 'The language of comfort',
      title: 'You are always in control of the session.',
      text: 'Lighter, firmer, a different area, or a pause — your feedback shapes every part of the treatment. Some temporary soreness can occur afterwards; your therapist will explain what is normal.',
    },
    faqs: [
      { q: 'Will massage be painful?', a: 'It should not be beyond what you are comfortable with. Pressure is always adjusted to your feedback.' },
      { q: 'What should I wear?', a: 'Comfortable clothing. You will be appropriately draped and only the areas being treated are uncovered.' },
      { q: 'Can I have massage if I have a medical condition?', a: 'Please mention any health conditions during booking or at your consultation so your therapist can check suitability.' },
    ],
    related: ['cupping-therapy', 'normatec', 'acupuncture'],
  },
  {
    slug: 'cupping-therapy',
    index: '07',
    name: 'Cupping Therapy',
    shortName: 'Cupping',
    category: 'Hands-on',
    layout: 'centered',
    headline: { lead: 'Technique,', accent: 'explained honestly.' },
    summary:
      'A technique using suction cups on the skin, offered with clear explanation, screening, and honest expectations.',
    image: '/images/cupping.png',
    imageAlt: 'Clear cupping therapy cups placed on a patient’s shoulder and upper back',
    secondaryImage: '/images/massage.png',
    secondaryAlt: 'Therapist performing hands-on treatment in a calm clinic',
    metaDescription:
      'Cupping therapy at MCR Physiotherapy: what the technique involves, what a session looks like, relevant precautions, and possible temporary skin marks.',
    intro: [
      'Cupping involves placing cups on the skin and creating gentle suction, which lifts the skin and underlying soft tissue. Cups may be left in place or moved gently across the area.',
      'Some people find cupping a useful part of hands-on care. Scientific evidence is still developing, so we are clear about what it involves and what to expect — and we do not make claims about detoxification or curing disease.',
    ],
    suitableFor: [
      'Adults who have been screened as suitable',
      'People who would like to try an additional hands-on technique',
      'Those comfortable with possible temporary skin marks',
    ],
    expect: [
      { title: 'Explanation', text: 'What cupping involves and why it may or may not be suitable for you.' },
      { title: 'Screening', text: 'Questions about skin conditions, medication, and general health.' },
      { title: 'Application', text: 'Cups are applied and suction adjusted to your comfort.' },
      { title: 'Skin check', text: 'Skin is checked afterwards and aftercare explained.' },
    ],
    session: [
      { title: 'Consent', text: 'You agree to the technique once fully informed.' },
      { title: 'Preparation', text: 'Skin is prepared; positioning is checked.' },
      { title: 'Cupping', text: 'Static or moving cups, as discussed.' },
      { title: 'Aftercare', text: 'What to expect over the following days.' },
    ],
    benefits: [
      { title: 'A different sensation', text: 'Some people enjoy the feeling of the gentle lifting technique.' },
      { title: 'Part of hands-on care', text: 'Can be combined with massage or other approaches.' },
      { title: 'Honest guidance', text: 'Clear expectations, without exaggerated claims.' },
    ],
    considerations: {
      title: 'Precautions & skin marks',
      points: [
        'Cupping commonly leaves circular marks on the skin. These are usually temporary and may take several days to fade.',
        'Cupping may not be appropriate for people with certain skin conditions, bleeding disorders, those taking anticoagulant medication, or during pregnancy. Please disclose any health conditions.',
        'Cupping is not a detox treatment and is not a cure for disease.',
      ],
    },
    signature: {
      eyebrow: 'About the marks',
      title: 'Circular marks are common — and usually temporary.',
      text: 'We tell you about marks before we begin, so you can decide whether cupping is right for you — for example, before an event where your skin will be visible.',
    },
    faqs: [
      { q: 'Will cupping leave marks?', a: 'Often, yes. Circular marks are common and usually fade over several days.' },
      { q: 'Does cupping detox the body?', a: 'We do not make detoxification claims. Cupping is offered as a hands-on technique only.' },
      { q: 'Is cupping painful?', a: 'Most people describe a pulling or tight sensation. Suction is adjusted to your comfort.' },
    ],
    related: ['massage', 'acupuncture', 'normatec'],
  },
  {
    slug: 'normatec',
    index: '08',
    name: 'NormaTec',
    shortName: 'NormaTec',
    category: 'Recovery',
    layout: 'fullbleed',
    headline: { lead: 'Recovery,', accent: 'with realistic expectations.' },
    summary:
      'Dynamic air-compression recovery sessions using the NormaTec system — relaxed, simple, and clearly explained.',
    image: '/images/normatec.png',
    imageAlt: 'Athlete relaxing on a recovery lounge wearing pneumatic compression recovery boots',
    secondaryImage: '/images/strength.png',
    secondaryAlt: 'Athlete performing a deadlift in a strength studio',
    metaDescription:
      'NormaTec compression sessions at MCR Physiotherapy: how the compression system works, what a session feels like, suitability considerations, and realistic expectations.',
    intro: [
      'NormaTec is a dynamic air-compression system. You relax while wearing attachments — typically on the legs — that inflate and deflate in sequence, creating a rhythmic, massage-like squeezing sensation.',
      'Many active people use compression as part of their recovery routine because they find it comfortable and relaxing. It is not a substitute for sleep, nutrition, appropriate training load, or professional assessment, and individual experiences vary.',
    ],
    suitableFor: [
      'Active people who would like a relaxed recovery session',
      'Those curious to try compression as part of their routine',
      'People who have been screened as suitable for compression',
    ],
    expect: [
      { title: 'Screening', text: 'A few health questions to check compression is appropriate for you.' },
      { title: 'Fitting', text: 'Attachments are fitted comfortably over clothing.' },
      { title: 'Relax', text: 'Lie back while the system cycles through compression.' },
      { title: 'Adjust', text: 'Pressure can be changed or stopped at any time.' },
    ],
    session: [
      { title: 'Check-in', text: 'Health questions and how you are feeling.' },
      { title: 'Fit & settle', text: 'Comfortable positioning and fitting.' },
      { title: 'Compression', text: 'Sequential inflation, adjusted to you.' },
      { title: 'Finish', text: 'Remove attachments and discuss your experience.' },
    ],
    benefits: [
      { title: 'Comfortable', text: 'Many people find the sensation relaxing and pleasant.' },
      { title: 'Simple', text: 'No effort required — you simply rest during the session.' },
      { title: 'Routine-friendly', text: 'Can sit alongside training and other recovery habits.' },
    ],
    considerations: {
      title: 'Suitability considerations',
      points: [
        'Compression may not be suitable for people with certain circulatory or vascular conditions, suspected or recent blood clots, recent fractures, open wounds, or some other medical conditions.',
        'Please disclose any health conditions or concerns before your session.',
        'NormaTec does not guarantee faster recovery or improved performance.',
      ],
    },
    signature: {
      eyebrow: 'Realistic expectations',
      title: 'A comfortable addition to recovery — not a shortcut.',
      text: 'We will always be clear: compression can be a relaxing part of a routine, but the foundations of recovery remain rest, sleep, nutrition, and well-planned training.',
    },
    faqs: [
      { q: 'What does NormaTec feel like?', a: 'A rhythmic squeezing that moves along the limb. Pressure can be adjusted to your comfort.' },
      { q: 'Do I need to undress?', a: 'No. Attachments are usually worn over light clothing.' },
      { q: 'Will it make me recover faster?', a: 'Individual responses vary, and we do not guarantee specific outcomes. Many people simply find it a comfortable part of their routine.' },
    ],
    related: ['strength-and-conditioning', 'massage', 'functional-training'],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
