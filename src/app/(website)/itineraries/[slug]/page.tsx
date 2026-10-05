import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Itinerary: ${slug} | Discover Mulugu`,
  };
}

export default async function ItineraryDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="py-12">
      <Container size="md">
        <Link
          href="/itineraries"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Itineraries
        </Link>

        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 space-y-6">
          <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
            Curated Travel Plan
          </span>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white capitalize">
            {slug.replace(/-/g, " ")}
          </h1>

          <div className="space-y-6 pt-4">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <h3 className="font-bold text-base text-zinc-900 dark:text-white">Day 1: Arrival & UNESCO Wonders</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mt-2">
                Morning drive from Hyderabad/Warangal to Palampet. Guided exploration of Ramappa Temple, lunch at Kakatiya Canteen, and afternoon arrival at Laknavaram Lake for sunset suspension bridge stroll.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
              <h3 className="font-bold text-base text-zinc-900 dark:text-white">Day 2: Eco-Forests & Waterways</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mt-2">
                Sunrise boat tour on Laknavaram, followed by journey to Tadvai Reserve for forest canopy walk and Medaram cultural heritage visit.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/explore">
              <Button size="lg">Explore Places in this Itinerary</Button>
            </Link>
            <Link href="/map">
              <Button size="lg" variant="outline">View on Interactive Map</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
