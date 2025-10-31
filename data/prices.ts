export interface PriceItem {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  popular?: boolean;
}

export interface VIPPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  includes: string[];
  benefits: string[];
}

export const priceList: PriceItem[] = [
  {
    id: 'basic-cut',
    name: 'Classic Haircut',
    price: 500,
    duration: '30 min',
    description: 'Standard haircut with clipper work and basic styling',
    popular: true
  },
  {
    id: 'precision-cut',
    name: 'Precision Fade',
    price: 700,
    duration: '45 min',
    description: 'Detailed fade work with sharp lines and perfect blending'
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim & Shape',
    price: 300,
    duration: '20 min',
    description: 'Beard shaping with line up and hot towel treatment'
  },
  {
    id: 'kids-cut',
    name: 'Kids Cut (Under 12)',
    price: 400,
    duration: '25 min',
    description: 'Gentle service for children with patience and care'
  },
  {
    id: 'haircut-beard',
    name: 'Haircut + Beard',
    price: 800,
    duration: '60 min',
    description: 'Complete grooming package with haircut and beard service',
    popular: true
  },
  {
    id: 'design-work',
    name: 'Design & Artwork',
    price: 900,
    duration: '60 min',
    description: 'Creative designs, patterns, and detailed artwork'
  },
  {
    id: 'hot-towel',
    name: 'Hot Towel Shave',
    price: 600,
    duration: '30 min',
    description: 'Traditional straight razor shave with hot towels'
  },
  {
    id: 'hair-wash',
    name: 'Therapeutic Wash',
    price: 200,
    duration: '15 min',
    description: 'Scalp massage with premium shampoo and conditioner'
  }
];

export const vipList: VIPPackage[] = [
  {
    id: 'vip-executive',
    name: 'VIP Executive Package',
    price: 2000,
    duration: '90 min',
    description: 'Ultimate grooming experience for the discerning gentleman',
    includes: [
      'Private room service',
      'Precision haircut',
      'Beard sculpting',
      'Hot towel treatment',
      'Scalp massage',
      'Premium product finish'
    ],
    benefits: [
      'Priority booking',
      'Extended consultation',
      'Personalized style plan',
      'Complimentary drinks',
      'Extended service time'
    ]
  },
  {
    id: 'vip-wedding',
    name: 'Wedding Premium Package',
    price: 2500,
    duration: '120 min',
    description: 'Perfect grooming for your special day',
    includes: [
      'Pre-wedding consultation',
      'Precision haircut',
      'Beard detailing',
      'Facial treatment',
      'Hot towel ritual',
      'Premium styling'
    ],
    benefits: [
      'Flexible scheduling',
      'Emergency touch-up kit',
      'Photography ready finish',
      'Complimentary champagne',
      'Groom party discounts'
    ]
  }
];
