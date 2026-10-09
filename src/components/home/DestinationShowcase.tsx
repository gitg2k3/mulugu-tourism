"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import type { Place } from "@/types/place";

interface DestinationShowcaseProps {
  places: Place[];
}

export function DestinationShowcase({ places }: DestinationShowcaseProps) {
  // Find center index (prefer Bogatha or middle element)
  const bogathaIndex = places?.findIndex((p) => p.slug.includes("bogatha")) ?? -1;
  const defaultIndex = bogathaIndex !== -1 ? bogathaIndex : Math.floor((places?.length ?? 0) / 2);

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  if (!places || places.length === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : places.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < places.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="destinations" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] uppercase tracking-tight">
            ESCAPE TO OUR <br />
            <span className="text-[#1D72FE]">FAVORITE DESTINATION</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Discover the most celebrated vacation spots in Mulugu, from UNESCO Ramappa Temple, Laknavaram Lake, Bogatha Waterfalls to sacred tribal reserves.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="relative">
          {/* Circular Previous Button */}
          <button
            onClick={handlePrev}
            type="button"
            className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#E5E9EE] shadow-md flex items-center justify-center text-[#111827] hover:border-[#1D72FE] hover:text-[#1D72FE] transition-all cursor-pointer"
            aria-label="Previous destination"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Circular Next Button */}
          <button
            onClick={handleNext}
            type="button"
            className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-[#E5E9EE] shadow-md flex items-center justify-center text-[#111827] hover:border-[#1D72FE] hover:text-[#1D72FE] transition-all cursor-pointer"
            aria-label="Next destination"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Row from Payload CMS */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 py-6 overflow-x-auto no-scrollbar">
            {places.map((place, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={place.id}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer transition-all duration-500 ease-out flex flex-col items-center shrink-0 ${
                    isActive
                      ? "w-[220px] sm:w-[260px] md:w-[280px] -translate-y-2 scale-105 z-20"
                      : "w-[160px] sm:w-[190px] md:w-[210px] opacity-80 hover:opacity-100 z-10"
                  }`}
                >
                  {/* Portrait Card Image */}
                  <Link
                    href={`/places/${place.slug}`}
                    className={`relative w-full block rounded-[24px] overflow-hidden shadow-sm transition-all duration-500 border border-[#E5E9EE] ${
                      isActive ? "h-[320px] sm:h-[370px] shadow-xl" : "h-[250px] sm:h-[290px]"
                    }`}
                  >
                    <Image
                      src={place.featuredImage || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"}
                      alt={place.title}
                      fill
                      sizes="(max-width: 768px) 220px, 280px"
                      className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                  </Link>

                  {/* Caption & Visitor Tag Below Card */}
                  <div className="mt-4 text-center">
                    <Link href={`/places/${place.slug}`}>
                      <p
                        className={`text-base sm:text-lg italic font-serif transition-colors hover:text-[#1D72FE] ${
                          isActive
                            ? "font-semibold text-[#111827]"
                            : "text-zinc-600 font-normal"
                        }`}
                      >
                        {place.title.split("(")[0].trim()}
                      </p>
                    </Link>

                    {isActive && (
                      <div className="mt-1 flex items-center justify-center gap-1.5 text-xs text-[#64748B] font-medium animate-in fade-in duration-300">
                        <span className="w-2 h-2 rounded-full bg-[#258C42]" />
                        <span>{place.categoryLabel || "Verified Attraction"}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Action: Explore Destinations Pill Button */}
        <div className="mt-10 text-center">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5E9EE] bg-white text-[#111827] hover:border-[#1D72FE] hover:text-[#1D72FE] text-xs font-semibold shadow-xs transition-all group"
          >
            <span>Explore Destinations</span>
            <span className="w-4 h-4 rounded-full border border-[#1D72FE] text-[#1D72FE] flex items-center justify-center group-hover:bg-[#1D72FE] group-hover:text-white transition-all">
              <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default DestinationShowcase;
