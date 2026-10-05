"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Compass, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "@/components/search/SearchBar";
import { DISTRICT_STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />

      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>UNESCO World Heritage & Pristine Forest Heart of Telangana</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Discover the Soul of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
            Mulugu
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
          Step into 800 years of Kakatiya architectural genius at Ramappa Temple, walk across
          the 13 emerald islands of Laknavaram Lake, and witness Asia&apos;s largest tribal celebration at Medaram.
        </p>

        {/* Search bar inside Hero */}
        <div className="mt-10 max-w-2xl mx-auto">
          <SearchBar />
        </div>

        {/* Quick actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/explore">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-900/30">
              <Compass className="w-4 h-4 mr-1" />
              <span>Explore All Attractions</span>
            </Button>
          </Link>
          <Link href="/heritage">
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 bg-white/5 hover:bg-white/10 text-white rounded-2xl backdrop-blur-md"
            >
              <span>Ramappa UNESCO Heritage</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>

        {/* District Stat Badges */}
        <div className="mt-14 pt-10 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          {DISTRICT_STATS.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-lg sm:text-xl font-bold text-emerald-400">{stat.value}</div>
              <div className="text-xs text-zinc-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
