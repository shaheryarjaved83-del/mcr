export type Region = 'Lower body' | 'Upper body' | 'Spine' | 'General'

export type Injury = {
  name: string
  region: Region
  summary: string
  services: string[]
}

export const regions: Region[] = ['Lower body', 'Upper body', 'Spine', 'General']

export const injuries: Injury[] = [
  {
    name: 'Ankle sprains',
    region: 'Lower body',
    summary: 'Ongoing discomfort, instability, or reduced confidence after rolling the ankle.',
    services: ['physiotherapy-assessment', 'functional-training'],
  },
  {
    name: 'Knee pain',
    region: 'Lower body',
    summary: 'Pain or stiffness around the knee that affects stairs, running, squatting, or kneeling.',
    services: ['physiotherapy-assessment', 'strength-and-conditioning'],
  },
  {
    name: 'Hamstring strains',
    region: 'Lower body',
    summary: 'Discomfort at the back of the thigh, often linked to sprinting or sudden movements.',
    services: ['physiotherapy-assessment', 'strength-and-conditioning'],
  },
  {
    name: 'Achilles concerns',
    region: 'Lower body',
    summary: 'Stiffness or pain at the back of the ankle, often noticed in the morning or with activity.',
    services: ['physiotherapy-assessment', 'functional-training'],
  },
  {
    name: 'Hip & groin pain',
    region: 'Lower body',
    summary: 'Discomfort around the hip or groin that may affect walking, sport, or sitting.',
    services: ['physiotherapy-assessment', 'functional-training'],
  },
  {
    name: 'Shoulder pain',
    region: 'Upper body',
    summary: 'Pain, stiffness, or weakness when reaching, lifting, or sleeping on the shoulder.',
    services: ['physiotherapy-assessment', 'physiotherapy-follow-up'],
  },
  {
    name: 'Elbow pain',
    region: 'Upper body',
    summary: 'Discomfort on the inside or outside of the elbow, often related to gripping or repetitive tasks.',
    services: ['physiotherapy-assessment', 'massage'],
  },
  {
    name: 'Wrist & hand concerns',
    region: 'Upper body',
    summary: 'Pain or reduced grip and movement through the wrist or hand.',
    services: ['physiotherapy-assessment'],
  },
  {
    name: 'Lower back pain',
    region: 'Spine',
    summary: 'Pain or stiffness in the lower back that affects daily tasks, sitting, or activity.',
    services: ['physiotherapy-assessment', 'functional-training'],
  },
  {
    name: 'Neck pain',
    region: 'Spine',
    summary: 'Stiffness or discomfort in the neck, which some people notice with desk work or sleep position.',
    services: ['physiotherapy-assessment', 'massage'],
  },
  {
    name: 'Upper back stiffness',
    region: 'Spine',
    summary: 'Tightness or reduced mobility through the upper back and shoulders.',
    services: ['massage', 'functional-training'],
  },
  {
    name: 'Muscle strains',
    region: 'General',
    summary: 'Overstretched or overloaded muscles causing pain, tightness, or weakness.',
    services: ['physiotherapy-assessment', 'massage'],
  },
  {
    name: 'Sports injuries',
    region: 'General',
    summary:
      'Injuries picked up through training or competition, and support planning a structured, appropriate return to your sport.',
    services: ['physiotherapy-assessment', 'strength-and-conditioning', 'normatec'],
  },
  {
    name: 'Mobility concerns',
    region: 'General',
    summary: 'Stiffness or reduced range of movement that makes everyday tasks or activity feel harder than they should.',
    services: ['functional-training', 'massage'],
  },
  {
    name: 'Post-surgery rehabilitation',
    region: 'General',
    summary: 'Exercise-based rehabilitation following surgery, in line with your surgical team’s guidance.',
    services: ['physiotherapy-assessment', 'physiotherapy-follow-up'],
  },
]
