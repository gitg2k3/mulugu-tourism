import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Compass, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Travel Itineraries | Discover Mulugu",
  description: "Curated 1-day, 2-day, and weekend itineraries to explore UNESCO Ramappa, Laknavaram, and Bogatha.",
};

const ITINERARIES = [
  {
    slug: "weekend-mulugu-highlights",
    title: "Weekend Heritage & Lakes (2 Days / 1 Night)",
    duration: "2 Days",
    summary: "The quintessential Mulugu circuit covering Ramappa UNESCO Temple, sunset at Laknavaram Lake, and local cuisine.",
    highlights: ["UNESCO Ramappa Temple", "Laknavaram Suspension Bridge", "Haritha Lake Cottages"],
    cover: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "wild-waterfalls-and-tribal-lore",
    title: "Wild Waterfalls & Tribal Trail (3 Days / 2 Nights)",
    duration: "3 Days",
    summary: "An adventurous escape covering Bogatha waterfalls, Tadvai deep forest canopy walks, and Medaram tribal shrine.",
    highlights: ["Bogatha Waterfall Trek", "Tadvai Eco-Park Canopy Walk", "Medaram Gadde Shrine"],
    cover: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ItinerariesPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="xl">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <Compass className="w-4 h-4" />
            <span>Trip Planning</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Curated Travel Itineraries
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Expertly crafted travel plans with realistic drive times, recommended meals, and lodging options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ITINERARIES.map((itinerary) => (
            <div
              key={itinerary.slug}
              className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div
                  className="aspect-[16/9] bg-cover bg-center"
                  style={{ backgroundImage: `url(${itinerary.cover})` }}
                />
                <div className="p-8">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                    {itinerary.duration}
                  </span>
                  <h3 className="font-bold text-xl text-zinc-900 dark:text-white mt-3">
                    {itinerary.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    {itinerary.summary}
                  </p>

                  <div className="mt-6 space-y-2">
                    {itinerary.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href={`/itineraries/${itinerary.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  <span>View Day-by-Day Breakdown</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
