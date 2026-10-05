"use client";

import React from "react";

export interface FilterCategoryItem {
  id: string;
  title: string;
  slug: string;
}

interface FiltersProps {
  selectedCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  categories?: FilterCategoryItem[];
}

const DEFAULT_CATEGORIES: FilterCategoryItem[] = [
  { id: "cat-heritage", title: "UNESCO & Heritage", slug: "heritage" },
  { id: "cat-lakes", title: "Lakes & Waterways", slug: "lakes-eco-tourism" },
  { id: "cat-waterfalls", title: "Cascading Waterfalls", slug: "waterfalls" },
  { id: "cat-wildlife", title: "Wildlife & Forests", slug: "wildlife-forests" },
  { id: "cat-spiritual", title: "Spiritual & Tribal Lore", slug: "spiritual-temples" },
  { id: "cat-adventure", title: "Adventure & Camping", slug: "adventure" },
];

export function Filters({
  selectedCategory,
  onSelectCategory,
  categories = DEFAULT_CATEGORIES,
}: FiltersProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      <button
        onClick={() => onSelectCategory("all")}
        className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
          selectedCategory === "all"
            ? "bg-emerald-700 text-white shadow-sm"
            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
        }`}
      >
        All Destinations
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.slug)}
          className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            selectedCategory === cat.slug
              ? "bg-emerald-700 text-white shadow-sm"
              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          }`}
        >
          {cat.title}
        </button>
      ))}
    </div>
  );
}

export default Filters;
