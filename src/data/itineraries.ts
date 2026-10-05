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
    slug: "weekend-mulugu-highlights",
    title: "Weekend Heritage & Lakes (2 Days / 1 Night)",
    duration: "2 Days",
    summary:
      "The quintessential Mulugu circuit covering Ramappa UNESCO Temple, sunset at Laknavaram Lake, and local cuisine.",
    highlights: [
      "UNESCO Ramappa Temple",
      "Laknavaram Suspension Bridge",
      "Haritha Lake Cottages",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    days: [
      {
        day: 1,
        title: "Day 1: Arrival & UNESCO Wonders",
        description:
          "Morning drive from Hyderabad/Warangal to Palampet. Guided exploration of Ramappa Temple, lunch at Kakatiya Canteen, and afternoon arrival at Laknavaram Lake for sunset suspension bridge stroll.",
        activities: [
          "Ramappa Guided Tour",
          "Kakatiya Canteen Lunch",
          "Laknavaram Sunset Walk",
        ],
        recommendedPlaces: ["ramappa-temple", "laknavaram-lake"],
      },
      {
        day: 2,
        title: "Day 2: Eco-Forests & Waterways",
        description:
          "Sunrise boat tour on Laknavaram, followed by journey to Tadvai Reserve for forest canopy walk and Medaram cultural heritage visit.",
        activities: [
          "Morning Boat Safari",
          "Tadvai Canopy Walk",
          "Medaram Shrine Visit",
        ],
        recommendedPlaces: ["tadvai-eco-huts", "medaram-sammakka-sarakka"],
      },
    ],
  },
  {
    id: "itin-2",
    slug: "wild-waterfalls-and-tribal-lore",
    title: "Wild Waterfalls & Tribal Trail (3 Days / 2 Nights)",
    duration: "3 Days",
    summary:
      "An adventurous escape covering Bogatha waterfalls, Tadvai deep forest canopy walks, and Medaram tribal shrine.",
    highlights: [
      "Bogatha Waterfall Trek",
      "Tadvai Eco-Park Canopy Walk",
      "Medaram Gadde Shrine",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    days: [
      {
        day: 1,
        title: "Day 1: Waterfalls & Teak Forests",
        description:
          "Journey deep along NH 163 to Bogatha Waterfalls for hiking, viewing galleries, and forest streams.",
        activities: ["Bogatha Waterfall Hike", "Forest Trail Photography"],
        recommendedPlaces: ["bogatha-waterfall"],
      },
      {
        day: 2,
        title: "Day 2: Tadvai Canopy & Wildlife",
        description:
          "Explore the ancient Eturnagaram forest corridor, wildlife canopy walk, and overnight log hut stay.",
        activities: ["Canopy Walk", "Birdwatching Safari", "Night Stargazing"],
        recommendedPlaces: ["tadvai-eco-huts"],
      },
      {
        day: 3,
        title: "Day 3: Sacred Tribal Shrines",
        description:
          "Pay homage at Medaram Sammakka Sarakka Gadde and explore Giri Gramodhyog tribal crafts market before departure.",
        activities: ["Medaram Darshan", "Tribal Handicrafts Shopping"],
        recommendedPlaces: ["medaram-sammakka-sarakka"],
      },
    ],
  },
];
