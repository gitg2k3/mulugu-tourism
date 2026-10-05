import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, MapPin, Sparkles, CheckCircle2, Ticket, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getPlaceBySlug } from "@/lib/queries/places";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);
  if (!place) return { title: "Experience Not Found" };
  return {
    title: `${place.title} Experience | Discover Mulugu`,
    description: place.tagline,
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const place = await getPlaceBySlug(slug);
  if (!place) notFound();

  return (
    <div className="py-12">
      <Container size="md">
        <Link
          href="/experiences"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Experiences
        </Link>

        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{place.categoryLabel}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            {place.title}
          </h1>

          {place.teluguTitle && (
            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              {place.teluguTitle}
            </p>
          )}

          {place.featuredImage && (
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-800">
              <Image
                src={place.featuredImage}
                alt={place.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
            {place.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            {place.timings && (
              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Timings: {place.timings}</span>
              </div>
            )}
            {place.entryFee && (
              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <Ticket className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Entry: {place.entryFee}</span>
              </div>
            )}
            {place.bestTimeToVisit && (
              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Best Season: {place.bestTimeToVisit}</span>
              </div>
            )}
            {place.location && (
              <div className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Location: {place.location}</span>
              </div>
            )}
          </div>

          {place.highlights && place.highlights.length > 0 && (
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 space-y-3">
              <h3 className="font-bold text-sm text-zinc-900 dark:text-white">Experience Highlights</h3>
              <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
                {place.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {place.tipsForVisitors && place.tipsForVisitors.length > 0 && (
            <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
                Traveler Tips
              </h4>
              <ul className="space-y-1.5 text-xs text-emerald-800 dark:text-emerald-200">
                {place.tipsForVisitors.map((tip, i) => (
                  <li key={i}>• {tip}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-4 flex flex-wrap gap-4">
            <Link href={`/places/${place.slug}`}>
              <Button size="lg">View Full Destination Guide</Button>
            </Link>
            <a href="tel:+918715220000">
              <Button size="lg" variant="outline">Call Tourism Helpdesk</Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
