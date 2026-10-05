import React from "react";
import { Metadata } from "next";
import { Store } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getAllBusinesses } from "@/lib/queries/businesses";
import { BusinessGrid } from "@/components/businesses/BusinessGrid";

export const metadata: Metadata = {
  title: "Local Businesses & Stays | Discover Mulugu",
  description: "Directory of eco-resorts, Haritha cottages, Telangana cuisine dining, tribal handicrafts, and certified local guides.",
};

export default async function BusinessesPage() {
  const businesses = await getAllBusinesses();

  return (
    <div className="py-12 sm:py-16">
      <Container size="xl">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <Store className="w-4 h-4" />
            <span>District Commerce & Hospitality</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Local Business Directory
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Verified stays, Telangana traditional dining, certified guides, and authentic tribal artisan markets supporting the local Mulugu economy.
          </p>
        </div>

        <BusinessGrid businesses={businesses} />
      </Container>
    </div>
  );
}
