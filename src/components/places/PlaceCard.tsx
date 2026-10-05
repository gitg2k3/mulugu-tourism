import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Sparkles, Clock } from "lucide-react";
import { Place } from "@/types/place";
import { Badge } from "@/components/ui/Badge";

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Link
      href={`/places/${place.slug}`}
      className="group flex flex-col h-full rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={place.featuredImage}
          alt={place.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Badges on top */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          {place.isUNESCO ? (
            <Badge variant="unesco" className="backdrop-blur-md bg-amber-500/90 text-white border-0 shadow-md">
              <Sparkles className="w-3 h-3" />
              UNESCO Heritage
            </Badge>
          ) : (
            <Badge variant="success" className="backdrop-blur-md bg-emerald-800/90 text-white border-0 shadow-md">
              {place.categoryLabel}
            </Badge>
          )}

          {place.rating && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-amber-300 border border-white/20">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              {place.rating}
            </span>
          )}
        </div>

        {/* Location at bottom of image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/90">
          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate max-w-[240px] font-medium drop-shadow-sm">{place.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {place.teluguTitle && (
          <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium mb-1">
            {place.teluguTitle}
          </p>
        )}
        <h3 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
          {place.title}
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
          {place.tagline}
        </p>

        {place.timings && (
          <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center text-xs text-zinc-500 dark:text-zinc-400">
            <Clock className="w-3.5 h-3.5 mr-1.5 text-zinc-400" />
            <span>{place.timings}</span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default PlaceCard;
