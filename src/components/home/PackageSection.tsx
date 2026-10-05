"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Car, Sparkles, CheckCircle2, X } from "lucide-react";
import type { Itinerary } from "@/types/common";

interface PackageSectionProps {
  itineraries: Itinerary[];
}

export function PackageSection({ itineraries }: PackageSectionProps) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  if (!itineraries || itineraries.length === 0) return null;

  const priceMap: Record<number, string> = {
    0: "1,499",
    1: "2,499",
    2: "3,299",
    3: "4,999",
  };

  return (
    <section id="packages" className="relative py-24 bg-zinc-50/60 overflow-hidden">
      {/* Background Subtle Landscape Mask */}
      <div
        className="absolute inset-0 bg-cover bg-bottom opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=70')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] uppercase tracking-tight">
            CHOOSE YOUR <span className="text-[#1D72FE]">PACKAGE</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#64748B]">
            Find the Perfect Mulugu Adventure for You: Customizable Tours to Suit Every Traveler
          </p>
        </div>

        {/* 4 Cards Grid from Payload CMS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itineraries.slice(0, 4).map((itin, index) => {
            const hasBadge = index === 1 || index === 3;
            const price = priceMap[index] || "2,999";

            return (
              <div
                key={itin.id}
                className="bg-white rounded-[24px] border border-[#E5E9EE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Card Image */}
                <div className="relative h-44 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={itin.coverImage || "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"}
                    alt={itin.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Green 2024 Badge on top left if applicable */}
                  {hasBadge && (
                    <div className="absolute top-3 left-3 bg-[#258C42] text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
                      <span>🏆</span>
                      <span>2024</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-sm uppercase tracking-tight text-[#111827]">
                      <Link href={`/itineraries/${itin.slug}`} className="hover:text-[#1D72FE] transition-colors">
                        {itin.title}
                      </Link>
                    </h3>
                    <p className="text-[11px] text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
                      {itin.summary}
                    </p>

                    {/* Highlights with Lucide Icons */}
                    <div className="mt-5 space-y-2.5 text-xs text-zinc-700">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#258C42] shrink-0" />
                        <span className="text-[11px] truncate">
                          {itin.highlights[0] || `${itin.duration} guided tour`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car className="w-3.5 h-3.5 text-[#258C42] shrink-0" />
                        <span className="text-[11px] truncate">
                          {itin.highlights[1] || "Pickup from Warangal / Hyderabad"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#258C42] shrink-0" />
                        <span className="text-[11px] truncate">
                          {itin.highlights[2] || "Traditional Telangana meals"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E9EE]">
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-xs text-[#64748B]">* </span>
                      <span className="text-lg font-bold text-[#111827]">₹{price}</span>
                      <span className="text-[10px] text-[#64748B]"> / person</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedPackage(itin.title)}
                        className="flex-1 bg-[#1D72FE] hover:bg-blue-600 text-white text-xs font-semibold py-2 px-4 rounded-full transition-all shadow-xs cursor-pointer text-center"
                      >
                        Choose
                      </button>
                      <Link
                        href={`/itineraries/${itin.slug}`}
                        className="text-xs font-medium text-zinc-600 hover:text-[#111827] px-2 py-2 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <p className="mt-12 text-center text-xs text-[#64748B] italic">
          *Prices do not apply to High Season: <strong className="text-zinc-700 not-italic">Holiday Season, Christmas and New Year</strong>
        </p>

      </div>

      {/* Confirmation Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[24px] max-w-sm w-full p-6 shadow-2xl border border-[#E5E9EE] relative">
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-600 rounded-full hover:bg-[#F6F8FA]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1D72FE] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#111827]">Package Selected</h4>
                <p className="text-[11px] text-[#64748B]">{selectedPackage}</p>
              </div>
            </div>

            <p className="text-xs text-[#64748B] mb-5 leading-relaxed">
              Confirm your booking for <strong className="text-[#111827]">{selectedPackage}</strong> with our travel concierge.
            </p>

            <div className="flex gap-2">
              <Link
                href="/explore"
                onClick={() => setSelectedPackage(null)}
                className="flex-1 bg-[#1D72FE] hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded-full text-center text-xs shadow-xs transition-all"
              >
                Proceed
              </Link>
              <button
                type="button"
                onClick={() => setSelectedPackage(null)}
                className="px-3 py-2 border border-[#E5E9EE] hover:bg-[#F6F8FA] text-[#111827] font-medium rounded-full text-xs transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PackageSection;
