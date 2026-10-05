export interface Coordinates {
  lat: number;
  lng: number;
}

export interface MediaItem {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

export interface TourismEvent {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  category: string;
  coverImage: string;
  isFeatured?: boolean;
}

export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  activities: string[];
  recommendedPlaces: string[];
}

export interface Itinerary {
  id: string;
  slug: string;
  title: string;
  duration: string;
  summary: string;
  highlights: string[];
  days: ItineraryItem[];
  coverImage: string;
}
