import { Coordinates, MediaItem, Review } from './common';

export type BusinessCategory =
  | 'stay'
  | 'dining'
  | 'guides'
  | 'handicrafts'
  | 'transport'
  | 'eco-stay';

export interface Business {
  id: string;
  slug: string;
  name: string;
  category: BusinessCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  address: string;
  location: string;
  coordinates: Coordinates;
  phone: string;
  email?: string;
  website?: string;
  featuredImage: string;
  images?: MediaItem[];
  pricingRange?: '₹' | '₹₹' | '₹₹₹';
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  isFeatured?: boolean;
  amenities?: string[];
  reviews?: Review[];
}
