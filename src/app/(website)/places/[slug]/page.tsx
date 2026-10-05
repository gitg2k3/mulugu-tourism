import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Clock,
  Ticket,
  Calendar,
  Sparkles,
  Navigation,
  CheckCircle2,
  Info,
  Car,
} from "lucide-react";
import { getPlaceBySlug, getAllPlaces } from "@/lib/queries/places";
import { getAllBusinesses } from "@/lib/queries/businesses";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PlaceGallery } from "@/components/places/PlaceGallery";
import { NearbyBusinesses } from "@/components/places/NearbyBusinesses";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);
  if (!place) return { title: "Place Not Found" };

  return {
    title: `${place.title} | Discover Mulugu`,
    description: place.tagline,
  };
}

export default async function PlaceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);
  if (!place) notFound();

  const allBusinesses = await getAllBusinesses();
  const nearbyBusinesses = allBusinesses.filter((b) =>
    place.nearbyBusinesses?.includes(b.slug)
  );

  return (
    <div className="py-10">
      <Container size="xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-6">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <Link href="/explore" className="hover:text-emerald-700">Explore</Link>
          <span>/</span>
          <span className="text-zinc-900 dark:text-zinc-100 font-medium">{place.title}</span>
        </div>

        {/* Hero Section of Place */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {place.isUNESCO ? (
              <Badge variant="unesco" className="bg-amber-500 text-zinc-950 font-bold">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                UNESCO World Heritage Site
              </Badge>
            ) : (
              <Badge variant="success">{place.categoryLabel}</Badge>
            )}
            <span className="text-xs text-zinc-500 font-medium">{place.location}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            {place.title}
          </h1>

          {place.teluguTitle && (
            <p className="text-base sm:text-lg text-emerald-700 dark:text-emerald-400 font-medium">
              {place.teluguTitle}
            </p>
          )}

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
            {place.tagline}
          </p>
        </div>

        {/* Featured Image Banner */}
        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl mb-12 bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={place.featuredImage}
            alt={place.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute bottom-4 right-4">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${place.coordinates.lat},${place.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-white/95 text-zinc-900 hover:bg-white backdrop-blur-md shadow-lg">
                <Navigation className="w-4 h-4 text-emerald-600 mr-1.5" />
                <span>Get Driving Directions</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Quick Facts Card Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 mb-12">
          {place.timings && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Opening Hours</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                {place.timings}
              </p>
            </div>
          )}

          {place.entryFee && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <Ticket className="w-3.5 h-3.5 text-emerald-600" />
                <span>Entry Ticket</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                {place.entryFee}
              </p>
            </div>
          )}

          {place.bestTimeToVisit && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Best Season</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                {place.bestTimeToVisit}
              </p>
            </div>
          )}

          {place.distanceFromDistrictHQ && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <Car className="w-3.5 h-3.5 text-emerald-600" />
                <span>Distance</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                {place.distanceFromDistrictHQ}
              </p>
            </div>
          )}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (8 cols): Description & Highlights */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                About this Destination
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
                {place.description}
              </p>
            </div>

            {place.highlights && place.highlights.length > 0 && (
              <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
                <h3 className="font-bold text-lg text-emerald-950 dark:text-emerald-300 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  Key Highlights & Architecture
                </h3>
                <ul className="space-y-2.5">
                  {place.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            <PlaceGallery images={place.gallery} title={place.title} />

            {/* Visitor Tips */}
            {place.tipsForVisitors && place.tipsForVisitors.length > 0 && (
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-amber-600" />
                  Traveler Tips & Good to Know
                </h3>
                <ul className="space-y-2">
                  {place.tipsForVisitors.map((tip, i) => (
                    <li key={i} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 list-disc list-inside">
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column (4 cols): Nearby Businesses & Location Card */}
          <div className="lg:col-span-4 space-y-8">
            <NearbyBusinesses businesses={nearbyBusinesses} />

            {/* Location & Navigation Card */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-4">
              <h4 className="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                Location & GPS
              </h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {place.location}
              </p>
              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    Open in Google Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
