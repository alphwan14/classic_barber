export interface Barber {
  id: string;
  name: string;
  photo: string;
  specialty: string;
  experienceYears: number;
  rating: number;
  cutsCompleted: number;
  skills: string[];
  bio: string;
  availability: string;
  price: string;
  specialties: string[];
  languages: string[];
}

export const barbers = [
  {
    id: 'james-mwangi',
    name: 'James Mwangi',
    photo: '/images/barbers/jamesmwangi.jpg',
    specialty: 'Fade Master',
    experienceYears: 8,
    rating: 4.9,
    cutsCompleted: 2500,
    skills: ['Skin Fades', 'Design Work', 'Beard Sculpting', 'Precision Cutting'],
    bio: 'Specializes in precision fades and creative designs. Trained in London barbering academies with certifications in modern cutting techniques.',
    availability: 'Mon-Sat: 9AM-7PM',
    price: 'KSh 700+',
    specialties: ['High Fades', 'Design Fades', 'Taper Fades', 'Skin Fades'],
    languages: ['English', 'Swahili', 'Kikuyu']
  },
  {
    id: 'david-ochieng',
    name: 'David Ochieng',
    photo: '/images/barbers/davidochieng.jpg',
    specialty: 'Afro Specialist',
    experienceYears: 6,
    rating: 4.8,
    cutsCompleted: 1800,
    skills: ['Braids', 'Twist Outs', 'Dread Maintenance', 'Afro Styling'],
    bio: 'Expert in all afro-textured hair styles and maintenance. Known for gentle handling of sensitive scalps and natural hair care advice.',
    availability: 'Tue-Sun: 10AM-8PM',
    price: 'KSh 600+',
    specialties: ['Box Braids', 'Cornrows', 'Twist Outs', 'Dreadlocks'],
    languages: ['English', 'Swahili', 'Luo']
  },
  {
    id: 'mike-kamau',
    name: 'Mike Kamau',
    photo: '/images/barbers/mikekamau.jpg',
    specialty: 'Traditional Cuts',
    experienceYears: 10,
    rating: 4.7,
    cutsCompleted: 3200,
    skills: ['Classic Cuts', 'Beard Work', 'Hot Towel Shave', 'Straight Razor'],
    bio: 'Master of traditional barbering with modern techniques. Your grandfather\'s barber with today\'s style. Expert in vintage and classic cuts.',
    availability: 'Mon-Fri: 8AM-6PM',
    price: 'KSh 500+',
    specialties: ['Pompadour', 'Side Part', 'Business Cut', 'Classic Style'],
    languages: ['English', 'Swahili', 'Kikuyu']
  },
  {
    id: 'brian-maina',
    name: 'Brian Maina',
    photo: '/images/barbers/brianmaina.jpg',
    specialty: 'Modern Styles',
    experienceYears: 5,
    rating: 4.9,
    cutsCompleted: 1500,
    skills: ['Textured Cuts', 'Styling', 'Hair Care', 'Trend Analysis'],
    bio: 'Young, energetic barber with fresh perspectives on modern men\'s grooming. Stays updated with global hair trends and techniques.',
    availability: 'Wed-Sun: 9AM-9PM',
    price: 'KSh 650+',
    specialties: ['Textured Crop', 'French Crop', 'Modern Fades', 'Styling'],
    languages: ['English', 'Swahili']
  },
  {
    id: 'robert-odhiambo',
    name: 'Robert Odhiambo',
    photo: '/images/barbers/robertodhiambo.jpg',
    specialty: 'Beard Expert',
    experienceYears: 7,
    rating: 4.8,
    cutsCompleted: 2200,
    skills: ['Beard Sculpting', 'Line Ups', 'Mustache Design', 'Beard Care'],
    bio: 'Transforms beards into works of art. Specializes in shaping, maintenance, and helping clients grow their ideal beard style.',
    availability: 'Mon-Sat: 10AM-8PM',
    price: 'KSh 550+',
    specialties: ['Beard Shaping', 'Mustache Design', 'Line Ups', 'Beard Maintenance'],
    languages: ['English', 'Swahili', 'Luo']
  },
  {
    id: 'paul-njoroge',
    name: 'Paul Njoroge',
    photo: '/images/barbers/paulnjoroge.jpg',
    specialty: 'All-Round Master',
    experienceYears: 12,
    rating: 5.0,
    cutsCompleted: 4500,
    skills: ['All Styles', 'Consultation', 'Hair Health', 'Technical Cutting'],
    bio: 'The shop\'s most experienced barber. Can execute any style with perfection. Known for exceptional consultation skills and hair health advice.',
    availability: 'Tue-Sat: 9AM-7PM',
    price: 'KSh 800+',
    specialties: ['All Styles', 'Consultation', 'Hair Health', 'Technical Work'],
    languages: ['English', 'Swahili', 'Kikuyu']
  }
];
