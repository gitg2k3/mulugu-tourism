"use client";

import React from "react";

interface BusinessFiltersProps {
  currentCategory: string;
  onSelectCategory: (cat: string) => void;
}

export function BusinessFilters({
  currentCategory,
  onSelectCategory,
}: BusinessFiltersProps) {
  const categories = [
    { label: "All Listings", value: "all" },
    { label: "Eco-Stays & Resorts", value: "eco-stay" },
    { label: "Authentic Dining", value: "dining" },
    { label: "Tribal Handicrafts", value: "handicrafts" },
    { label: "Local Tour Guides", value: "guides" },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onSelectCategory(cat.value)}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            currentCategory === cat.value
              ? "bg-emerald-700 text-white shadow-sm"
              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default BusinessFilters;
