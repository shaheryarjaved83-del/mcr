/**
 * DEMO CONTENT. These profiles and testimonials are placeholders that show how the
 * layout will look. Replace them with verified MCR Physiotherapy staff and genuine,
 * consented patient feedback before publishing.
 */

export type TeamMember = {
  id: string
  name: string
  role: string
  image: string
  imageAlt: string
  bio: string
  interests: string[]
  qualifications: string
  isDemo: true
}

export const team: TeamMember[] = [
  {
    id: 'demo-physiotherapist',
    name: 'Team member name',
    role: 'Physiotherapist',
    image: '/images/team-1.png',
    imageAlt: 'Placeholder portrait representing a physiotherapist',
    bio: 'This is a demo profile. Replace it with a short, verified biography that introduces the clinician, their approach to care, and what they enjoy about helping people move well.',
    interests: ['Musculoskeletal assessment', 'Exercise-based rehabilitation', 'Return to activity'],
    qualifications: 'Verified qualifications and professional registration to be added',
    isDemo: true,
  },
  {
    id: 'demo-sports-therapist',
    name: 'Team member name',
    role: 'Sports & Massage Therapist',
    image: '/images/team-2.png',
    imageAlt: 'Placeholder portrait representing a sports therapist',
    bio: 'This is a demo profile. Replace it with a verified biography describing the therapist’s background, the services they deliver, and how they work with patients.',
    interests: ['Massage', 'Cupping therapy', 'Recovery'],
    qualifications: 'Verified qualifications and memberships to be added',
    isDemo: true,
  },
  {
    id: 'demo-coach',
    name: 'Team member name',
    role: 'Strength & Conditioning Coach',
    image: '/images/team-3.png',
    imageAlt: 'Placeholder portrait representing a strength and conditioning coach',
    bio: 'This is a demo profile. Replace it with a verified biography covering the coach’s experience, coaching philosophy, and the people they typically work with.',
    interests: ['Strength & conditioning', 'Functional training', 'Athletic preparation'],
    qualifications: 'Verified accreditations to be added',
    isDemo: true,
  },
]

export type Testimonial = {
  id: string
  quote: string
  author: string
  context: string
  isSample: true
}

export const testimonials: Testimonial[] = [
  {
    id: 's1',
    quote:
      'Sample testimonial — I appreciated how much time was spent understanding what I wanted to get back to. Everything was explained clearly and I always knew what the next step was.',
    author: 'Sample patient',
    context: 'Physiotherapy Assessment',
    isSample: true,
  },
  {
    id: 's2',
    quote:
      'Sample testimonial — The sessions felt genuinely personal. My exercises changed as I progressed, which kept me motivated and confident.',
    author: 'Sample patient',
    context: 'Follow-Up & Functional Training',
    isSample: true,
  },
  {
    id: 's3',
    quote:
      'Sample testimonial — A calm, professional environment. I never felt rushed, and every option was discussed honestly with me.',
    author: 'Sample patient',
    context: 'Massage',
    isSample: true,
  },
  {
    id: 's4',
    quote:
      'Sample testimonial — The structured programme gave my training a clear direction. I liked that progress was reviewed rather than guessed.',
    author: 'Sample patient',
    context: 'Strength & Conditioning',
    isSample: true,
  },
]
