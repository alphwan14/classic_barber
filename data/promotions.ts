export interface Promotion {
  id: string;
  title: string;
  description: string;
  badge: string;
  validUntil?: string;
  terms: string[];
  discount?: string;
  image?: string;
}

export const promotions: Promotion[] = [
  {
    id: 'loyalty-program',
    title: 'Classic Loyalty Program',
    description: 'Get your 6th haircut FREE! Collect stamps with every visit and enjoy rewards.',
    badge: 'Loyalty',
    terms: [
      'One stamp per paid service',
      'Valid for 12 months',
      'Not combinable with other offers',
      'Free haircut up to KSh 800 value'
    ],
    discount: '1 Free Haircut'
  },
  {
    id: 'student-wednesday',
    title: 'Student Wednesdays - 20% Off',
    description: 'All students enjoy 20% off any haircut service every Wednesday. Just show your student ID.',
    badge: 'Student',
    validUntil: 'Ongoing',
    terms: [
      'Valid student ID required',
      'Wednesday only',
      'All haircut services included',
      'Not valid with other promotions'
    ],
    discount: '20% Off',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: 'birthday-special',
    title: 'Birthday Grooming Package',
    description: 'Celebrate your birthday with us! Free beard trim and styling with any haircut booking.',
    badge: 'Birthday',
    validUntil: 'Valid on birthday week',
    terms: [
      'Valid 7 days before and after birthday',
      'ID proof required',
      'Must book appointment',
      'Includes free beard service'
    ],
    discount: 'Free Beard Service'
  },
  {
    id: 'early-bird',
    title: 'Early Bird Special - 15% Off',
    description: 'Book appointments before 11 AM and enjoy 15% off any service. Perfect for morning people!',
    badge: 'Early Bird',
    validUntil: 'Daily',
    terms: [
      'Appointments before 11 AM only',
      'All services included',
      'Advance booking recommended',
      'Not valid on weekends'
    ],
    discount: '15% Off'
  },
  {
    id: 'referral-bonus',
    title: 'Refer a Friend - Get KSh 300 Off',
    description: 'Refer a friend to Classic Barber and both of you get KSh 300 off your next service.',
    badge: 'Referral',
    terms: [
      'Friend must be first-time customer',
      'Both parties receive discount',
      'Valid for 30 days',
      'Mention referral at booking'
    ],
    discount: 'KSh 300 Off'
  },
  {
    id: 'corporate-wellness',
    title: 'Corporate Wellness Program',
    description: 'Special rates for corporate groups and team building grooming sessions.',
    badge: 'Corporate',
    terms: [
      'Minimum 5 employees',
      'Advance booking required',
      'Custom packages available',
      'In-shop or on-site service'
    ],
    discount: 'Group Rates'
  }
];