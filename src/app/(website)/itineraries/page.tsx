import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getAllItineraries } from "@/lib/queries/itineraries";

export const metadata: Metadata = {
  title: "Travel Itineraries | Discover Mulugu",
  description: "Curated 1-day, 2-day, and weekend itineraries to explore UNESCO Ramappa, Laknavaram, and Bogatha.",
};

export default async function ItinerariesPage() {
  const itineraries = await getAllItineraries();

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

        {itineraries.length === 0 ? (
          <div className="py-16 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 p-8">
            <p className="text-zinc-600 dark:text-zinc-400 font-medium">
              No itineraries currently available. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itineraries.map((itinerary) => (
              <div
                key={itinerary.slug}
                className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div
                    className="aspect-[16/9] bg-cover bg-center bg-zinc-800"
                    style={{
                      backgroundImage: itinerary.coverImage
                        ? `url(${itinerary.coverImage})`
                        : undefined,
                    }}
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

                    {itinerary.highlights && itinerary.highlights.length > 0 && (
                      <div className="mt-6 space-y-2">
                        {itinerary.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
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
        )}
      </Container>
    </div>
  );
}
