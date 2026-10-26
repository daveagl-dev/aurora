import {
  ColorOption, Currency, LookbookEditorial, PressMention, Product,
} from '../models';

export const CURRENCIES: Currency[] = [
  { code: 'USD', symbol: '$', rate: 1.0 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'JPY', symbol: '¥', rate: 155.0 },
];

export const CATEGORIES = [
  'All', 'Haute Couture', 'Tailored Suits', 'Minimal Essentials',
  'Leather Goods', 'Footwear', 'Accessories',
];

export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const COLORS: ColorOption[] = [
  { name: 'Onyx Black', hex: '#111111' },
  { name: 'Alabaster White', hex: '#F9F8F6' },
  { name: 'Champagne Gold', hex: '#D4AF37' },
  { name: 'Taupe Beige', hex: '#B8A99A' },
  { name: 'Midnight Navy', hex: '#1A2332' },
  { name: 'Emerald Green', hex: '#1C3A27' },
];

export const FREE_SHIPPING_THRESHOLD = 2000;
export const MAX_PRICE = 2500;
export const MIN_PRICE = 300;

export const PRODUCTS: Product[] = [
  {
    id: 'aura-101',
    name: 'Architectural Tailored Wool Blazer',
    category: 'Tailored Suits',
    subCategory: 'Jackets',
    price: 1250,
    rating: 4.9,
    reviewCount: 38,
    isNew: true,
    isBestseller: true,
    sustainability: 'Organic Italian Wool',
    description: 'Sculptural silhouette single-breasted blazer meticulously tailored in Milan from ethically sourced virgin wool. Features peak lapels, interior silk lining, and subtle padded shoulders for an empowering modern posture.',
    fabricCare: '100% Virgin Wool; Lining: 100% Mulberry Silk. Dry clean only. Iron low heat.',
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    ],
    colors: [COLORS[0], COLORS[3], COLORS[4]],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
  },
  {
    id: 'aura-102',
    name: 'Atelier Silk Bias-Cut Midi Dress',
    category: 'Haute Couture',
    subCategory: 'Dresses',
    price: 980,
    rating: 5.0,
    reviewCount: 42,
    isNew: true,
    isBestseller: false,
    sustainability: 'Zero-Waste Silk Crafting',
    description: 'Effortlessly fluid floor-skimming dress cut on the bias from heavy 22-momme Mulberry silk. Designed to drape seamlessly around the female form with delicate cross-back spaghetti straps.',
    fabricCare: '100% Mulberry Silk. Hand wash cold or eco dry clean.',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
    ],
    colors: [COLORS[1], COLORS[2], COLORS[0]],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
  },
  {
    id: 'aura-103',
    name: 'Sovereign Calfskin Structured Tote',
    category: 'Leather Goods',
    subCategory: 'Bags',
    price: 1850,
    rating: 4.8,
    reviewCount: 29,
    isNew: false,
    isBestseller: true,
    sustainability: 'LWG Gold Certified Leather',
    description: 'Handcrafted in Florence, the Sovereign Tote combines timeless elegance with daily utility. Features hand-painted edge paint, solid brass champagne-gold hardware, and a suede-lined multi-compartment interior.',
    fabricCare: '100% Full-Grain Italian Calfskin. Condition periodically with specialist cream.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
    ],
    colors: [COLORS[0], COLORS[3]],
    sizes: ['One Size'],
    inStock: true,
  },
  {
    id: 'aura-104',
    name: 'Cashmere-Blend Oversized Trench Coat',
    category: 'Minimal Essentials',
    subCategory: 'Outerwear',
    price: 1620,
    rating: 4.9,
    reviewCount: 19,
    isNew: true,
    isBestseller: true,
    sustainability: 'Recycled Cashmere Blend',
    description: 'A contemporary reinterpretation of the iconic trench. Crafted from a heavyweight waterproof cashmere-wool blend with storm flaps, a belted waist, and horn buttons.',
    fabricCare: '70% Wool, 30% Recycled Cashmere. Professional dry clean only.',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
    ],
    colors: [COLORS[3], COLORS[0]],
    sizes: ['S', 'M', 'L'],
    inStock: true,
  },
  {
    id: 'aura-105',
    name: 'Sculpted Nappa Leather Mule Heels',
    category: 'Footwear',
    subCategory: 'Shoes',
    price: 720,
    rating: 4.7,
    reviewCount: 15,
    isNew: false,
    isBestseller: false,
    sustainability: 'Vegetable Tanned Leather',
    description: 'Minimalist slip-on mules featuring an architectural 85mm flared heel, square toe bed, and cushioned memory foam leather insoles for surprising long-wear comfort.',
    fabricCare: '100% Nappa Leather upper and sole. Store in signature dust bag.',
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1000&auto=format&fit=crop',
    ],
    colors: [COLORS[1], COLORS[0], COLORS[2]],
    sizes: ['36', '37', '38', '39', '40', '41'],
    inStock: true,
  },
  {
    id: 'aura-106',
    name: 'Heritage Monogram Silk Square Scarf',
    category: 'Accessories',
    subCategory: 'Scarves',
    price: 340,
    rating: 5.0,
    reviewCount: 54,
    isNew: false,
    isBestseller: true,
    sustainability: 'Non-Toxic Botanical Dyes',
    description: '90x90cm hand-rolled edge silk twill scarf adorned with Aurora’s geometric motif. Designed to be styled as a headscarf, around the neck, or wrapped onto bag handles.',
    fabricCare: '100% Silk Twill. Hand wash cold with delicate detergent.',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
    ],
    colors: [COLORS[2], COLORS[4]],
    sizes: ['One Size'],
    inStock: true,
  },
  {
    id: 'aura-107',
    name: 'Pleated Wide-Leg Double-Pleat Trouser',
    category: 'Tailored Suits',
    subCategory: 'Pants',
    price: 680,
    rating: 4.8,
    reviewCount: 22,
    isNew: true,
    isBestseller: false,
    sustainability: 'OEKO-TEX Certified Linen Wool',
    description: 'Relaxed high-waisted tailored trousers featuring sharp front double pleats, fluid wide leg cut, and side adjusters eliminating the need for a belt.',
    fabricCare: '60% Wool, 40% Linen. Dry clean.',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    ],
    colors: [COLORS[0], COLORS[3], COLORS[1]],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
  },
  {
    id: 'aura-108',
    name: 'Celestial 18k Vermeil Choker Necklace',
    category: 'Accessories',
    subCategory: 'Jewelry',
    price: 490,
    rating: 4.9,
    reviewCount: 67,
    isNew: false,
    isBestseller: true,
    sustainability: '100% Recycled Gold & Silver',
    description: 'Sleek collar necklet forged in thick 18k gold vermeil over recycled sterling silver. Engineered with a hidden spring hinge for smooth ergonomic wear.',
    fabricCare: '18k Gold Vermeil. Avoid moisture and perfume contact.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    ],
    colors: [COLORS[2]],
    sizes: ['One Size'],
    inStock: true,
  },
];

export const LOOKBOOK_HOTSPOTS: LookbookEditorial[] = [
  {
    id: 1,
    title: 'Autumn Parisienne Ensemble',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    hotspots: [
      { top: '35%', left: '48%', productId: 'aura-101', title: 'Wool Blazer', price: 1250 },
      { top: '75%', left: '52%', productId: 'aura-105', title: 'Nappa Leather Mules', price: 720 },
    ],
  },
  {
    id: 2,
    title: 'Monochrome Evening Elegance',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    hotspots: [
      { top: '45%', left: '50%', productId: 'aura-102', title: 'Silk Bias-Cut Dress', price: 980 },
      { top: '60%', left: '70%', productId: 'aura-103', title: 'Calfskin Tote', price: 1850 },
    ],
  },
];

export const PRESS_MENTIONS: PressMention[] = [
  { outlet: 'VOGUE', quote: 'Aurora is redefining modern luxury with uncompromising craftsmanship and sculptural minimalism.' },
  { outlet: "HARPER'S BAZAAR", quote: 'The pinnacle of ethical high fashion. Every piece feels like a custom runway creation.' },
  { outlet: 'GQ INTERNATIONAL', quote: 'Tailoring elevated to an art form. The modern standard for quiet luxury.' },
  { outlet: 'ELLE DÉCOR', quote: 'A masterclass in effortless silhouette design and sustainably sourced haute couture.' },
];

export const POPULAR_SEARCHES = ['Silk Bias Dress', 'Wool Blazer', 'Calfskin Bag', 'Cashmere Trench', 'Mule Heels'];

export const HOME_CATEGORIES = [
  { title: 'Haute Couture', category: 'Haute Couture', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop' },
  { title: 'Tailored Suits', category: 'Tailored Suits', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop' },
  { title: 'Leather Goods', category: 'Leather Goods', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' },
];
