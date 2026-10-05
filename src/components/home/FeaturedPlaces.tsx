import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Place } from "@/types/place";
import { PlaceGrid } from "@/components/places/PlaceGrid";
import { Container } from "@/components/ui/Container";

interface FeaturedPlacesProps {
  places: Place[];
}

export function FeaturedPlaces({ places }: FeaturedPlacesProps) {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950/50">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Must-Visit Landmarks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              Featured Attractions in Mulugu
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 max-w-xl">
              From medieval Kakatiya temples to waterfalls and wild game reserves, experience the best of Telangana.
            </p>
          </div>

          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 transition-colors group"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <PlaceGrid places={places} />
      </Container>
    </section>
  );
}

export default FeaturedPlaces;
