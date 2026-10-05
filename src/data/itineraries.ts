export interface SeedItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  recommendedPlaces: string[];
}

export interface SeedItinerary {
  id: string;
  slug: string;
  title: string;
  duration: string;
  summary: string;
  highlights: string[];
  coverImage: string;
  days: SeedItineraryDay[];
}

export const ITINERARIES: SeedItinerary[] = [
  {
    id: "itin-1",
    slug: "ramappa-heritage-sunset-tour",
    title: "Ramappa Heritage Sunset Tour",
    duration: "1 Day Tour",
    summary:
      "Experience Ramappa's stunning UNESCO heritage and Laknavaram Lake on our most affordable guided tour.",
    highlights: [
      "3 destinations with 1 day tour",
      "Pickup from Warangal / Hyderabad",
      "Authentic Telangana traditional meal",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    days: [
      {
        day: 1,
        title: "Day 1: UNESCO Wonders & Lake Sunset",
        description: "Full day tour of Ramappa Temple, lunch, and Laknavaram sunset stroll.",
        activities: ["Ramappa Guided Walk", "Kakatiya Canteen Lunch", "Suspension Bridge Sunset"],
        recommendedPlaces: ["ramappa-temple", "laknavaram-lake"],
      },
    ],
  },
  {
    id: "itin-2",
    slug: "weekend-mulugu-highlights",
    title: "Laknavaram Island Panorama",
    duration: "2 Days Tour",
    summary:
      "Immerse yourself in majestic views: a comprehensive lake panorama, island cottages, and sunset boating.",
    highlights: [
      "5 destinations with 2 days tour",
      "Pickup from Warangal / Hyderabad",
      "Haritha Island cottage stay included",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    days: [
      {
        day: 1,
        title: "Day 1: Arrival & UNESCO Wonders",
        description:
          "Morning drive to Palampet. Guided exploration of Ramappa Temple and afternoon arrival at Laknavaram Lake.",
        activities: ["Ramappa Guided Tour", "Laknavaram Sunset Walk"],
        recommendedPlaces: ["ramappa-temple", "laknavaram-lake"],
      },
      {
        day: 2,
        title: "Day 2: Eco-Forests & Waterways",
        description:
          "Sunrise boat tour on Laknavaram, followed by journey to Tadvai Reserve for forest canopy walk.",
        activities: ["Morning Boat Safari", "Tadvai Canopy Walk"],
        recommendedPlaces: ["tadvai-eco-huts", "medaram-sammakka-sarakka"],
      },
    ],
  },
  {
    id: "itin-3",
    slug: "wild-waterfalls-and-tribal-lore",
    title: "Bogatha Scenic Picnic & Trek",
    duration: "2 Days Tour",
    summary:
      "Enjoy a relaxing day at Bogatha: scenic picnic packages, waterfall plunge, and Cheekupally stream trails.",
    highlights: [
      "7 destinations with 2 days tour",
      "Pickup from Warangal / Hyderabad",
      "Forest campfire & local tribal meal",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    days: [
      {
        day: 1,
        title: "Day 1: Waterfalls & Teak Forests",
        description: "Journey deep along NH 163 to Bogatha Waterfalls for hiking and natural pool swims.",
        activities: ["Bogatha Waterfall Hike", "Forest Trail Photography"],
        recommendedPlaces: ["bogatha-waterfall"],
      },
      {
        day: 2,
        title: "Day 2: Tadvai Canopy & Wildlife",
        description: "Explore the ancient Eturnagaram forest corridor and wildlife canopy walk.",
        activities: ["Canopy Walk", "Birdwatching Safari"],
        recommendedPlaces: ["tadvai-eco-huts"],
      },
    ],
  },
  {
    id: "itin-4",
    slug: "extraordinary-mulugu-expedition",
    title: "Extraordinary Grand Expedition",
    duration: "3 Days Tour",
    summary:
      "Unforgettable moments await: embark on an extraordinary grand heritage and wilderness circuit across Mulugu.",
    highlights: [
      "12 destinations with 3 days tour",
      "Pickup from Warangal / Hyderabad",
      "Luxury eco-cottages & cultural show",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    days: [
      {
        day: 1,
        title: "Day 1: Ramappa & Laknavaram",
        description: "UNESCO World Heritage Ramappa Temple and Laknavaram Lake night camping.",
        activities: ["Heritage Architecture Walk", "Lake Kayaking"],
        recommendedPlaces: ["ramappa-temple", "laknavaram-lake"],
      },
      {
        day: 2,
        title: "Day 2: Bogatha & Deep Wildwoods",
        description: "Waterfalls trek and Eturnagaram wildlife sanctuary safari.",
        activities: ["Waterfall Trek", "Night Safari"],
        recommendedPlaces: ["bogatha-waterfall", "tadvai-eco-huts"],
      },
      {
        day: 3,
        title: "Day 3: Sacred Tribal Shrines",
        description: "Medaram Sammakka Sarakka Gadde shrine and Koya tribal handicrafts.",
        activities: ["Medaram Darshan", "Tribal Handicrafts Shopping"],
        recommendedPlaces: ["medaram-sammakka-sarakka"],
      },
    ],
  },
];
