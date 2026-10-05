import React from "react";
import Link from "next/link";
import { Phone, Star, ArrowRight } from "lucide-react";
import { Business } from "@/types/business";
import { Card } from "@/components/ui/Card";

interface NearbyBusinessesProps {
  businesses: Business[];
}

export function NearbyBusinesses({ businesses }: NearbyBusinessesProps) {
  if (businesses.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
          Nearby Stays, Food & Artisans
        </h3>
        <Link
          href="/businesses"
          className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 hover:underline"
        >
          View Directory <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {businesses.map((biz) => (
          <Card key={biz.id} className="p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                  {biz.categoryLabel}
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  {biz.rating}
                </span>
              </div>
              <h4 className="font-bold text-base text-zinc-900 dark:text-white mt-2">
                {biz.name}
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
                {biz.tagline}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-500">{biz.location}</span>
              <a
                href={`tel:${biz.phone}`}
                className="inline-flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold hover:underline"
              >
                <Phone className="w-3 h-3" /> Call Now
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default NearbyBusinesses;
