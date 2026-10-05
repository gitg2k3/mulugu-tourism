import React from "react";
import { Metadata } from "next";
import { Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PlaceGrid } from "@/components/places/PlaceGrid";
import { SearchBar } from "@/components/search/SearchBar";
import { getAllPlaces } from "@/lib/queries/places";

export const metadata: Metadata = {
  title: "Explore All Attractions | Discover Mulugu",
  description: "Browse all tourist places, lakes, waterfalls, sanctuaries, and heritage sites in Mulugu District.",
};

export default async function ExplorePage(props: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const searchParams = await props.searchParams;
  const allPlaces = await getAllPlaces();

  const query = searchParams.q?.toLowerCase() || "";
  const category = searchParams.category || "";

  const filteredPlaces = allPlaces.filter((p) => {
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query);
    const matchesCategory = !category || p.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="py-12 sm:py-16">
      <Container size="xl">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <Compass className="w-4 h-4" />
            <span>District Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Explore All Destinations
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Discover historic UNESCO temples, emerald forest waterfalls, serene island lakes, and sacred tribal sanctuaries.
          </p>

          <div className="mt-6 max-w-xl">
            <SearchBar placeholder="Search by destination name, Mandal or keyword..." initialQuery={query} />
          </div>
        </div>

        <PlaceGrid places={filteredPlaces} />
      </Container>
    </div>
  );
}
