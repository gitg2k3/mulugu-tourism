import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Globe, Star, CheckCircle, ArrowLeft, Landmark } from "lucide-react";
import { getBusinessBySlug } from "@/lib/queries/businesses";
import { getPlacesForBusiness } from "@/lib/queries/places";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const biz = await getBusinessBySlug(slug);
  if (!biz) return { title: "Business Not Found" };
  return {
    title: `${biz.name} | Discover Mulugu Directory`,
    description: biz.tagline || biz.description,
  };
}

export default async function BusinessDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [biz, relatedPlaces] = await Promise.all([
    getBusinessBySlug(slug),
    getPlacesForBusiness(slug),
  ]);

  if (!biz) notFound();

  return (
    <div className="py-12">
      <Container size="lg">
        <Link
          href="/businesses"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>

        <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-6 sm:p-10 space-y-8">
          {biz.featuredImage && (
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-800">
              <Image
                src={biz.featuredImage}
                alt={biz.name}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Badge variant="success">{biz.categoryLabel}</Badge>
                {biz.isVerified && (
                  <Badge variant="default" className="text-emerald-700 dark:text-emerald-400">
                    <CheckCircle className="w-3 h-3 mr-1" /> Verified Business
                  </Badge>
                )}
                {biz.pricingRange && (
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    Price: {biz.pricingRange}
                  </span>
                )}
              </div>

              {typeof biz.rating === "number" && (
                <div className="flex items-center gap-1.5 text-sm font-bold text-zinc-800 dark:text-zinc-200">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>{biz.rating}</span>
                  {typeof biz.reviewCount === "number" && (
                    <span className="text-zinc-400 font-normal">({biz.reviewCount} reviews)</span>
                  )}
                </div>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              {biz.name}
            </h1>
            {biz.tagline && (
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2">
                {biz.tagline}
              </p>
            )}

            {biz.location && (
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-3">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{biz.address || biz.location}</span>
              </div>
            )}
          </div>

          {biz.description && (
            <div className="py-6 border-y border-zinc-100 dark:border-zinc-800 space-y-4">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-white">About</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {biz.description}
              </p>
            </div>
          )}

          {biz.amenities && biz.amenities.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-zinc-900 dark:text-white">Amenities & Features</h3>
              <div className="flex flex-wrap gap-2">
                {biz.amenities.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Tourist Destinations */}
          {relatedPlaces.length > 0 && (
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700 space-y-4">
              <h3 className="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                <Landmark className="w-4 h-4 text-emerald-600" />
                Nearby Attractions & Monuments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPlaces.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/places/${p.slug}`}
                    className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-600/50 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-white">{p.title}</div>
                      <div className="text-[11px] text-zinc-500">{p.location}</div>
                    </div>
                    <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold ml-2">
                      View &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {biz.phone ? (
              <a href={`tel:${biz.phone}`} className="w-full">
                <Button size="lg" className="w-full">
                  <Phone className="w-4 h-4 mr-2" /> Call {biz.phone}
                </Button>
              </a>
            ) : null}
            {biz.website ? (
              <a href={biz.website} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" variant="outline" className="w-full">
                  <Globe className="w-4 h-4 mr-2" /> Visit Website
                </Button>
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
}
