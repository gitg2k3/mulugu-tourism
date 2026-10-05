import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, CheckCircle2, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getItineraryBySlug } from "@/lib/queries/itineraries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = await getItineraryBySlug(slug);
  if (!itinerary) return { title: "Itinerary Not Found" };
  return {
    title: `${itinerary.title} | Discover Mulugu`,
    description: itinerary.summary,
  };
}

export default async function ItineraryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const itinerary = await getItineraryBySlug(slug);
  if (!itinerary) notFound();

  return (
    <div className="py-12">
      <Container size="md">
        <Link
          href="/itineraries"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Itineraries
        </Link>

        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              Curated Travel Plan
            </span>
            <span className="text-zinc-400">•</span>
            <span className="text-xs font-semibold text-zinc-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {itinerary.duration}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            {itinerary.title}
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {itinerary.summary}
          </p>

          {itinerary.highlights && itinerary.highlights.length > 0 && (
            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2">
                Circuit Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                {itinerary.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-6 pt-4">
            {itinerary.days && itinerary.days.length > 0 ? (
              itinerary.days.map((day) => (
                <div
                  key={day.day}
                  className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 space-y-3"
                >
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white">
                    {day.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {day.description}
                  </p>

                  {day.activities && day.activities.length > 0 && (
                    <div className="pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Planned Activities
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {day.activities.map((act, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-0.5 rounded-md bg-zinc-200/70 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300"
                          >
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {day.recommendedPlaces && day.recommendedPlaces.length > 0 && (
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        Key Stops:
                      </span>
                      {day.recommendedPlaces.map((placeSlug) => (
                        <Link
                          key={placeSlug}
                          href={`/places/${placeSlug}`}
                          className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline capitalize"
                        >
                          {placeSlug.replace(/-/g, " ")}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                <p className="text-xs text-zinc-500">Day-by-day details coming soon.</p>
              </div>
            )}
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/explore">
              <Button size="lg">Explore Places in this Itinerary</Button>
            </Link>
            <Link href="/map">
              <Button size="lg" variant="outline">View on Interactive Map</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
