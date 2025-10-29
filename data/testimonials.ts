export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  style: string;
  date: string;
  barber?: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ahmed Hassan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'James gave me the best fade of my life! Clean lines, perfect blending, and great conversation. I\'ve found my permanent barber.',
    style: 'High Fade',
    date: '2 weeks ago',
    barber: 'James Mwangi',
    verified: true
  },
  {
    id: 't2',
    name: 'Samuel Gitonga',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'David transformed my natural hair! The twist out was perfect and he taught me how to maintain it. Professional and knowledgeable.',
    style: 'Twist Out',
    date: '1 month ago',
    barber: 'David Ochieng',
    verified: true
  },
  {
    id: 't3',
    name: 'Fatma Ali',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'Took my 8-year-old son for his first proper haircut. Brian was so patient and made him feel comfortable. The cut was stylish too!',
    style: 'Kids Fade',
    date: '3 weeks ago',
    barber: 'Brian Maina',
    verified: true
  },
  {
    id: 't4',
    name: 'Michael Omondi',
    avatar: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'Robert is a beard wizard! My beard has never looked better. The shaping was perfect and the hot towel treatment was amazing.',
    style: 'Beard Sculpting',
    date: '5 days ago',
    barber: 'Robert Odhiambo',
    verified: true
  },
  {
    id: 't5',
    name: 'John Kamau',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    text: 'Paul is a true master. I showed him a picture and he recreated it perfectly. 12 years of experience really shows in his work.',
    style: 'Textured Crop',
    date: '2 months ago',
    barber: 'Paul Njoroge',
    verified: true
  },
  {
    id: 't6',
    name: 'Daniel Mwangi',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop',
    rating: 4,
    text: 'Great service overall. Mike gave me a classic cut that held up well. The shop has a good vibe and professional atmosphere.',
    style: 'Classic Cut',
    date: '1 week ago',
    barber: 'Mike Kamau',
    verified: true
  }
];