"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, ExternalLink, MapPin, Compass } from "lucide-react";
import { Place } from "@/types/place";
import { MapMarker } from "./MapMarker";
import { Button } from "@/components/ui/Button";

interface MapProps {
  places: Place[];
}

export function Map({ places }: MapProps) {
  const [selectedPlace, setSelectedPlace] = useState<Place>(places[0]);

  const mapEmbedUrl = selectedPlace
    ? `https://maps.google.com/maps?q=${selectedPlace.coordinates.lat},${selectedPlace.coordinates.lng}&z=14&output=embed`
    : `https://maps.google.com/maps?q=18.2588,79.9431&z=11&output=embed`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-4 sm:p-6">
      {/* Sidebar Place Directory */}
      <div className="lg:col-span-4 flex flex-col h-[520px]">
        <div className="mb-4">
          <h3 className="font-bold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-600" />
            <span>Mulugu Destinations</span>
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Select a point of interest to inspect location and get directions
          </p>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
          {places.map((place) => (
            <MapMarker
              key={place.id}
              place={place}
              isSelected={selectedPlace?.id === place.id}
              onSelect={setSelectedPlace}
            />
          ))}
        </div>

        {selectedPlace && (
          <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                {selectedPlace.categoryLabel}
              </span>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedPlace.coordinates.lat},${selectedPlace.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" /> Navigate Now
              </a>
            </div>
            <Link href={`/places/${selectedPlace.slug}`}>
              <Button size="sm" variant="outline" className="w-full text-xs">
                View Full Details <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Embedded Interactive Map View */}
      <div className="lg:col-span-8 relative h-[520px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
        <iframe
          title="Mulugu Interactive Tourism Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapEmbedUrl}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default Map;
