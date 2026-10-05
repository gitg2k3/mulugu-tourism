"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { Place } from "@/types/place";

interface MapMarkerProps {
  place: Place;
  isSelected?: boolean;
  onSelect?: (place: Place) => void;
}

export function MapMarker({ place, isSelected, onSelect }: MapMarkerProps) {
  return (
    <button
      onClick={() => onSelect?.(place)}
      className={`group flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all ${
        isSelected
          ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 shadow-sm"
          : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300"
      }`}
    >
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
          isSelected
            ? "bg-emerald-600 text-white"
            : "bg-zinc-100 dark:bg-zinc-800 text-emerald-600 group-hover:bg-emerald-50"
        }`}
      >
        <MapPin className="w-4 h-4" />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-semibold text-xs text-zinc-900 dark:text-white truncate">
          {place.title}
        </h4>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
          {place.location}
        </p>
      </div>
    </button>
  );
}

export default MapMarker;
