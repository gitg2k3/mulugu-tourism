import { Coordinates, MediaItem, Review } from './common';

export type PlaceCategory = 
  | 'heritage'
  | 'waterfalls'
  | 'lakes-eco-tourism'
  | 'wildlife-forests'
  | 'spiritual-temples'
  | 'adventure';

export interface Place {
  id: string;
  slug: string;
  title: string;
  teluguTitle?: string;
  tagline: string;
  description: string;
  category: PlaceCategory;
  categoryLabel: string;
  location: string;
  coordinates: Coordinates;
  featuredImage: string;
  gallery: MediaItem[];
  timings?: string;
  entryFee?: string;
  bestTimeToVisit?: string;
  distanceFromDistrictHQ?: string;
  isFeatured?: boolean;
  isUNESCO?: boolean;
  highlights: string[];
  tipsForVisitors?: string[];
  reviews?: Review[];
  rating?: number;
  nearbyPlaces?: string[]; // array of place slugs
  nearbyBusinesses?: string[]; // array of business slugs
}
