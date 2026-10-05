import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Star, CheckCircle, Globe } from "lucide-react";
import { Business } from "@/types/business";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface BusinessCardProps {
  business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <Card className="flex flex-col h-full group hover:border-emerald-600/40">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={business.featuredImage}
          alt={business.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="success" className="bg-emerald-900/90 text-white border-0">
            {business.categoryLabel}
          </Badge>
          {business.pricingRange && (
            <Badge variant="default" className="bg-black/60 text-white border-0">
              {business.pricingRange}
            </Badge>
          )}
        </div>
        {business.isVerified && (
          <div className="absolute top-3 right-3 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            Verified
          </div>
        )}
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors">
              {business.name}
            </h3>
            <div className="flex items-center gap-1 text-xs font-bold text-zinc-800 dark:text-zinc-200 shrink-0">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{business.rating}</span>
              <span className="text-zinc-400">({business.reviewCount})</span>
            </div>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {business.tagline}
          </p>

          <div className="mt-3 flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{business.location}</span>
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-3">
          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> Call
          </a>

          {business.website ? (
            <a
              href={business.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" /> Website
            </a>
          ) : (
            <Link
              href={`/businesses/${business.slug}`}
              className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 transition-colors"
            >
              Details &rarr;
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}

export default BusinessCard;
