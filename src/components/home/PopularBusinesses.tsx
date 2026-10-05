import React from "react";
import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import { Business } from "@/types/business";
import { BusinessGrid } from "@/components/businesses/BusinessGrid";
import { Container } from "@/components/ui/Container";

interface PopularBusinessesProps {
  businesses: Business[];
}

export function PopularBusinesses({ businesses }: PopularBusinessesProps) {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950/40">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
              <Store className="w-3.5 h-3.5" />
              <span>Local Hospitality & Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              Stay, Eat & Shop Authentic Mulugu
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2 max-w-xl">
              Support local enterprise: stay in Haritha lake resorts, savor native Telangana spices, and purchase organic tribal handicrafts.
            </p>
          </div>

          <Link
            href="/businesses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 transition-colors group"
          >
            <span>View All Businesses</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <BusinessGrid businesses={businesses} />
      </Container>
    </section>
  );
}

export default PopularBusinesses;
