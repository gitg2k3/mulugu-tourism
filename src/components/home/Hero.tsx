"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Search,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  X,
} from "lucide-react";
import type { HomepageGlobalData } from "@/lib/queries/homepage";

interface HeroProps {
  data?: HomepageGlobalData;
}

export function Hero({ data }: HeroProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [passengerDropdownOpen, setPassengerDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const heroImage =
    data?.heroBackgroundUrl ||
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <section className="relative pt-12 pb-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Floating Pill Badge */}
        <div className="flex justify-center mb-7">
          <Link
            href="#destinations"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1A202C] text-white text-xs sm:text-sm font-medium hover:bg-black transition-all shadow-xs group"
          >
            <span className="flex items-center gap-1.5 bg-black/60 px-2.5 py-0.5 rounded-full text-xs font-bold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#258C42] animate-pulse" />
              Number 1
            </span>
            <span className="text-zinc-200">Mulugu Travel Vacation in Telangana</span>
            <span className="w-4 h-4 rounded-full border border-[#1D72FE] text-[#1D72FE] flex items-center justify-center group-hover:bg-[#1D72FE] group-hover:text-white transition-all ml-0.5">
              <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </Link>
        </div>

        {/* Hero Title: Bold, Two Lines with Blue Accents */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight text-[#111827] uppercase leading-[1.08]">
            READY TO START YOUR{" "}
            <span className="text-[#1D72FE]">MULUGU</span>
            <br />
            <span className="text-[#1D72FE]">WONDERFUL JOURNEY</span> WITH US
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#64748B] max-w-xl mx-auto font-normal">
            Experience ancient Kakatiya architecture, pristine canopy lakes, and vibrant tribal sanctuaries.
          </p>
        </div>

        {/* Panoramic Landscape Hero Image */}
        <div className="mt-10 sm:mt-12 relative w-full h-[360px] sm:h-[460px] md:h-[540px] rounded-[28px] overflow-hidden shadow-lg border border-[#E5E9EE]">
          <Image
            src={heroImage}
            alt="Panoramic view of Laknavaram Lake suspension bridge and mountain range"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
          />
        </div>

        {/* Floating Booking Widget Overlapping the Bottom of the Image */}
        <div className="relative z-20 -mt-16 sm:-mt-20 md:-mt-22 max-w-4xl mx-auto px-2 sm:px-4">
          <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E9EE] shadow-[0_16px_36px_-8px_rgba(0,0,0,0.12)] p-6 sm:p-7 md:p-8">
            <h2 className="text-lg font-bold text-[#111827] mb-4">
              Book Travel Now!
            </h2>

            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
              
              {/* Choose a Date (Pill input) */}
              <div className="md:col-span-5 relative">
                <div className="relative flex items-center bg-[#F6F8FA] border border-[#E5E9EE] rounded-full px-5 py-3.5 hover:border-zinc-400 transition-colors">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm text-[#111827] outline-none cursor-pointer placeholder:text-[#64748B]"
                    placeholder="Choose a date"
                    aria-label="Choose a date"
                  />
                  <Calendar className="w-4 h-4 text-[#64748B] pointer-events-none absolute right-5" />
                </div>
              </div>

              {/* Select Passengers (Pill dropdown) */}
              <div className="md:col-span-4 relative">
                <button
                  type="button"
                  onClick={() => setPassengerDropdownOpen(!passengerDropdownOpen)}
                  className="w-full flex items-center justify-between bg-[#F6F8FA] border border-[#E5E9EE] rounded-full px-5 py-3.5 text-xs sm:text-sm text-[#111827] hover:border-zinc-400 transition-colors cursor-pointer text-left"
                >
                  <span className={passengers ? "text-[#111827] font-medium" : "text-[#64748B]"}>
                    {passengers || "Select Passengers"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#64748B] shrink-0" />
                </button>

                {passengerDropdownOpen && (
                  <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-[#E5E9EE] rounded-2xl shadow-xl p-2 z-30 space-y-1">
                    {["1 Passenger", "2 Passengers", "3-5 Passengers", "Group (6+ Passengers)"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setPassengers(opt);
                          setPassengerDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs sm:text-sm rounded-xl hover:bg-[#F6F8FA] text-[#111827] transition-colors"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Check Availability Button (Blue Pill Button) */}
              <div className="md:col-span-3">
                <button
                  type="submit"
                  className="w-full h-[48px] bg-[#1D72FE] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm rounded-full flex items-center justify-center gap-2 shadow-md shadow-[#1D72FE]/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Check Availability</span>
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[24px] max-w-md w-full p-6 sm:p-7 shadow-2xl border border-[#E5E9EE] relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-zinc-600 rounded-full hover:bg-[#F6F8FA]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D72FE] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111827]">Tours Available!</h3>
                <p className="text-xs text-[#64748B]">Mulugu Tourism Circuit</p>
              </div>
            </div>

            <p className="text-xs text-[#64748B] mb-5 leading-relaxed">
              Guided departures for <strong className="text-[#111827]">{passengers || "Travelers"}</strong> are open on{" "}
              <strong className="text-[#111827]">{selectedDate || "selected dates"}</strong>.
            </p>

            <div className="flex gap-3">
              <Link
                href="#packages"
                onClick={() => setShowModal(false)}
                className="flex-1 bg-[#1D72FE] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-full text-center text-xs shadow-md transition-all"
              >
                Select Package
              </Link>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2.5 border border-[#E5E9EE] hover:bg-[#F6F8FA] text-[#111827] font-semibold rounded-full text-xs transition-all"
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

export default Hero;
