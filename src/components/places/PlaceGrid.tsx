import React from "react";
import { Place } from "@/types/place";
import { PlaceCard } from "./PlaceCard";

interface PlaceGridProps {
  places: Place[];
  emptyMessage?: string;
}

export function PlaceGrid({
  places,
  emptyMessage = "No tourist attractions found matching the criteria.",
}: PlaceGridProps) {
  if (places.length === 0) {
    return (
      <div className="py-16 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-750 bg-zinc-50/50 dark:bg-zinc-900/50 p-8">
        <p className="text-zinc-600 dark:text-zinc-400 font-medium">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default PlaceGrid;
