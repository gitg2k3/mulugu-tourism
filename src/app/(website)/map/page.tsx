import React from "react";
import { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Map } from "@/components/maps/Map";
import { getAllPlaces } from "@/lib/queries/places";

export const metadata: Metadata = {
  title: "Interactive Tourism Map | Discover Mulugu",
  description: "Interactive geographical map of Mulugu District showing UNESCO sites, waterfalls, resorts, and forest trails.",
};

export default async function MapPage() {
  const places = await getAllPlaces();

  return (
    <div className="py-12 sm:py-16">
      <Container size="xl">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <MapPin className="w-4 h-4" />
            <span>Geographical Tourism Atlas</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Interactive District Map
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Locate key landmarks, get real-time driving directions, and plan your journey through the forests and waterways of Mulugu.
          </p>
        </div>

        <Map places={places} />
      </Container>
    </div>
  );
}
