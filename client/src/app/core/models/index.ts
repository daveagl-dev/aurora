export interface Currency {
  code: string;
  symbol: string;
  rate: number;
}

export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isBestseller: boolean;
  sustainability: string;
  description: string;
  fabricCare: string;
  images: string[];
  colors: ColorOption[];
  sizes: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  color: ColorOption;
  size: string;
  quantity: number;
}

export interface Hotspot {
  top: string;
  left: string;
  productId: string;
  title: string;
  price: number;
}

export interface LookbookEditorial {
  id: number;
  title: string;
  image: string;
  hotspots: Hotspot[];
}

export interface PressMention {
  outlet: string;
  quote: string;
}

export type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating';
export type GridColumns = 2 | 3 | 4;
