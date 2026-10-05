"use client";

import React from "react";
import { CATEGORIES } from "@/data/categories";

interface FiltersProps {
  selectedCategory: string;
  onSelectCategory: (categorySlug: string) => void;
}

export function Filters({ selectedCategory, onSelectCategory }: FiltersProps) {
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

      {CATEGORIES.map((cat) => (
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
