"use client";

import React from "react";

export function TrustBar() {
  const mediaLogos = [
    { name: "mbc", style: "font-black tracking-tighter text-2xl lowercase italic" },
    { name: "ALJAZEERA", style: "font-extrabold tracking-widest text-lg uppercase font-serif" },
    { name: "The New York Times", style: "font-serif italic font-bold text-xl tracking-tight" },
    { name: "The Guardian", style: "font-bold text-lg tracking-tight font-serif" },
    { name: "BBC", style: "font-black text-xl tracking-widest uppercase border-2 border-current px-2 py-0.5" },
  ];

  return (
    <section id="partners" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
          {mediaLogos.map((logo) => (
            <div
              key={logo.name}
              className="text-[#111827] hover:text-[#1D72FE] transition-colors cursor-default select-none flex items-center justify-center"
            >
              <span className={logo.style}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
