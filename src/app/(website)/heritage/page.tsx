import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Landmark, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getPlaceBySlug } from "@/lib/queries/places";

export const metadata: Metadata = {
  title: "UNESCO & Kakatiya Heritage | Discover Mulugu",
  description: "Explore UNESCO World Heritage Ramappa Temple, Kakatiya architecture, and medieval history in Mulugu.",
};

export default async function HeritagePage() {
  const ramappa = await getPlaceBySlug("ramappa-temple");

  return (
    <div className="py-12 sm:py-16">
      <Container size="xl">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>World Heritage & Medieval History</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            The Living Kakatiya Legacy
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Mulugu district is home to centuries of grand Kakatiya engineering — from temple sanctuaries that withstand earthquakes to vast irrigation reservoirs that sustain thousands of acres to this day.
          </p>
        </div>

        {/* Ramappa Spotlight Hero Card */}
        {ramappa && (
          <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl mb-16 grid grid-cols-1 lg:grid-cols-12">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-6 bg-zinc-800">
              <Image
                src={ramappa.featuredImage}
                alt="Ramappa Temple"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-amber-500 text-zinc-950 font-bold text-xs px-3 py-1 rounded-full">
                UNESCO Inscribed 2021
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  Rudreshwara Temple (Palampet)
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                  {ramappa.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {ramappa.description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-900/50">
                    <div className="text-xs font-bold text-amber-900 dark:text-amber-200">1213 CE</div>
                    <div className="text-[11px] text-amber-800/80 dark:text-amber-300/80">Recharla Rudra Era</div>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 dark:border-amber-900/50">
                    <div className="text-xs font-bold text-amber-900 dark:text-amber-200">Floating Bricks</div>
                    <div className="text-[11px] text-amber-800/80 dark:text-amber-300/80">Spongy lightweight clay</div>
                  </div>
                </div>
              </div>

              <div>
                <Link href={`/places/${ramappa.slug}`}>
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl">
                    <span>Read Complete Ramappa Architectural Dossier</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
