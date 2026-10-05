"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, X, ArrowRight } from "lucide-react";

export function FaqSection() {
  // First item open by default as in Image 5
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "WHAT IS INCLUDED IN THE MULUGU TRIP PACKAGE?",
      answer:
        "Our Mulugu trip package typically includes transportation to and from Warangal / Hyderabad, a guided tour, entrance fees, and breakfast. Some packages may also offer additional options like jeep rides, lake boating, or accommodation, depending on the chosen itinerary.",
    },
    {
      question: "WHAT SHOULD I BRING FOR THE MULUGU TRIP?",
      answer:
        "We recommend bringing comfortable walking shoes, light cotton clothing, sunscreen, insect repellent for forest trails, and a valid government ID for resort check-ins.",
    },
    {
      question: "HOW FIT DO I NEED TO BE FOR THE MULUGU TRIP?",
      answer:
        "The majority of attractions, including Ramappa Temple and Laknavaram Lake, require minimal physical effort and are suitable for travelers of all age groups.",
    },
    {
      question: "WHAT IS THE BEST TIME OF YEAR TO VISIT MULUGU?",
      answer:
        "The ideal season to explore Mulugu is from August to February when the post-monsoon waterfalls are at full flow and the weather is pleasantly cool.",
    },
    {
      question: "HOW DO I REACH MULUGU FROM HYDERABAD OR WARANGAL?",
      answer:
        "Mulugu is located approximately 190 km from Hyderabad (approx. 3.5 hours drive via NH 163) and 50 km from Warangal railway station with regular bus and taxi connections.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] uppercase tracking-tight">
            FREQUENTLY ASKED <br />
            <span className="text-[#1D72FE]">QUESTION</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#64748B]">
            Find answers to all the questions you had in mind or may have later.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-[#E5E9EE] rounded-[20px] sm:rounded-[24px] overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F6F8FA]/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-tight text-[#111827]">
                    {faq.question}
                  </span>
                  <span className="w-6 h-6 rounded-full border border-[#1D72FE] flex items-center justify-center text-[#1D72FE] shrink-0">
                    {isOpen ? (
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-0 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-transparent animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <p className="mt-12 text-center text-xs text-[#64748B] italic">
          *Prices do not apply to High Season: <strong className="text-zinc-700 not-italic">Holiday Season, Christmas and New Year</strong>
        </p>

        {/* Contact Us Pill Button */}
        <div className="mt-6 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5E9EE] bg-white text-[#111827] hover:border-[#1D72FE] hover:text-[#1D72FE] text-xs font-semibold shadow-xs transition-all group"
          >
            <span>Contact Us</span>
            <span className="w-4 h-4 rounded-full border border-[#1D72FE] text-[#1D72FE] flex items-center justify-center group-hover:bg-[#1D72FE] group-hover:text-white transition-all">
              <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FaqSection;
