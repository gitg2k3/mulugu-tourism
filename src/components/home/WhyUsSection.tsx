"use client";

import React from "react";

export function WhyUsSection() {
  const points = [
    {
      number: "1",
      title: "Professional Guide",
      description: "Experienced and friendly guides make your holiday safe and comfortable.",
    },
    {
      number: "2",
      title: "An affordable price",
      description: "Affordable prices and many attractive promotions, and we provide FREE entrance tickets to heritage sites.",
    },
    {
      number: "3",
      title: "Easy Booking",
      description: "Just follow and finished booking step, you can immediately book for the departure date.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] uppercase tracking-tight">
            WHY SHOULD TRIP <br />
            <span className="text-[#1D72FE]">WITH US?</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#64748B]">
            Experience Mulugu Like Never Before with Our Expert-Led Tours
          </p>
        </div>

        {/* 3 Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point) => (
            <div
              key={point.number}
              className="bg-white rounded-[24px] border border-[#E5E9EE] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Number Badge */}
                <span className="inline-block text-sm font-serif italic text-[#1D72FE] mb-4">
                  {point.number}
                </span>

                {/* Italic Serif Title */}
                <h3 className="text-lg sm:text-xl font-serif italic font-medium text-[#111827] mb-2">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyUsSection;
