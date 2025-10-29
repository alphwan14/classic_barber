export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  features: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    id: 'premium-beard-oil',
    name: 'Premium Argan Beard Oil',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=500&auto=format&fit=crop',
    price: 1200,
    originalPrice: 1500,
    description: 'Luxury beard oil with argan oil and sandalwood scent. Softens, conditions, and promotes healthy beard growth.',
    category: 'beard-care',
    features: ['100% Natural Oils', 'Non-Greasy Formula', 'Sandalwood Scent', 'Promotes Growth'],
    inStock: true,
    rating: 4.8,
    reviewCount: 47
  },
  {
    id: 'matte-pomade',
    name: 'Strong Hold Matte Pomade',
    image: 'https://images.unsplash.com/photo-1585386959984-a41552231683?q=80&w=500&auto=format&fit=crop',
    price: 900,
    description: 'Water-based pomade with strong hold and natural matte finish. Perfect for textured styles and modern looks.',
    category: 'styling',
    features: ['Strong Hold', 'Matte Finish', 'Water Washable', 'All Day Control'],
    inStock: true,
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: 'soothing-aftershave',
    name: 'Aloe & Witch Hazel Aftershave',
    image: 'https://images.unsplash.com/photo-1599050751791-a5b879137602?q=80&w=500&auto=format&fit=crop',
    price: 850,
    description: 'Soothing aftershave balm with aloe vera and witch hazel. Reduces irritation and moisturizes skin.',
    category: 'skincare',
    features: ['Soothes Irritation', 'Alcohol-Free', 'Moisturizing', 'Natural Ingredients'],
    inStock: true,
    rating: 4.7,
    reviewCount: 34
  },
  {
    id: 'professional-trimmer',
    name: 'Professional Cordless Trimmer',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=500&auto=format&fit=crop',
    price: 4500,
    originalPrice: 5500,
    description: 'Professional-grade cordless trimmer with titanium blades. Perfect for detailed work and sharp lines.',
    category: 'tools',
    features: ['Cordless Operation', 'Titanium Blades', '3-Hour Battery', 'Precision Guide'],
    inStock: true,
    rating: 4.6,
    reviewCount: 23
  },
  {
    id: 'tea-tree-shampoo',
    name: 'Tea Tree Invigorating Shampoo',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500&auto=format&fit=crop',
    price: 800,
    description: 'Deep cleansing shampoo with tea tree oil. Removes buildup and invigorates the scalp.',
    category: 'hair-care',
    features: ['Tea Tree Oil', 'Deep Cleansing', 'Scalp Health', 'Fresh Scent'],
    inStock: true,
    rating: 4.5,
    reviewCount: 56
  },
  {
    id: 'boar-bristle-brush',
    name: 'Natural Boar Bristle Brush',
    image: 'https://images.unsplash.com/photo-1588421842261-3fe14fbd9768?q=80&w=500&auto=format&fit=crop',
    price: 650,
    description: '100% natural boar bristle brush. Distributes natural oils and adds shine to your hair.',
    category: 'tools',
    features: ['100% Natural Bristles', 'Distributes Oils', 'Adds Shine', 'Durable Wood'],
    inStock: true,
    rating: 4.8,
    reviewCount: 41
  },
  {
    id: 'beard-balm',
    name: 'Beard Conditioning Balm',
    image: 'https://images.unsplash.com/photo-1594736797933-d0ea3ff8db41?q=80&w=500&auto=format&fit=crop',
    price: 950,
    description: 'Nourishing beard balm with shea butter and beeswax. Tames flyaways and conditions deeply.',
    category: 'beard-care',
    features: ['Shea Butter', 'Beeswax Base', 'Light Hold', 'Conditions Deeply'],
    inStock: false,
    rating: 4.7,
    reviewCount: 29
  },
  {
    id: 'hair-clay',
    name: 'Texturizing Hair Clay',
    image: 'https://images.unsplash.com/photo-1594736797933-d0ea3ff8db41?q=80&w=500&auto=format&fit=crop',
    price: 1100,
    description: 'Premium hair clay for natural texture and volume. Provides flexible hold with matte finish.',
    category: 'styling',
    features: ['Natural Texture', 'Matte Finish', 'Flexible Hold', 'Adds Volume'],
    inStock: true,
    rating: 4.9,
    reviewCount: 67
  }
];