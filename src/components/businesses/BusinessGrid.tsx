import React from "react";
import { Business } from "@/types/business";
import { BusinessCard } from "./BusinessCard";

interface BusinessGridProps {
  businesses: Business[];
  emptyMessage?: string;
}

export function BusinessGrid({
  businesses,
  emptyMessage = "No businesses found matching your criteria.",
}: BusinessGridProps) {
  if (businesses.length === 0) {
    return (
      <div className="py-16 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 p-8">
        <p className="text-zinc-600 dark:text-zinc-400 font-medium">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map((biz) => (
        <BusinessCard key={biz.id} business={biz} />
      ))}
    </div>
  );
}

export default BusinessGrid;
