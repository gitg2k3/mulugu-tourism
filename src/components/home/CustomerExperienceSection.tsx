"use client";

import React from "react";
import Image from "next/image";

export function CustomerExperienceSection() {
  const reviews = [
    {
      title: "AN UNFORGETTABLE EXPERIENCE!",
      comment:
        "I've traveled to many places, but the sunrise at Laknavaram was unlike anything I've ever seen. The guide was knowledgeable and friendly, and the entire trip was seamlessly organized. Highly recommended!",
      author: "Dennis Callis",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      date: "Aug 29, 2026 2:46 pm",
    },
    {
      title: "BREATHTAKING VIEWS PLANNING",
      comment:
        "From booking to the actual adventure, everything was perfect! The early morning walk across the suspension bridge was worth it for the incredible views of the lake landscape. A must-do for anyone visiting Telangana!",
      author: "Mary Freund",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
      date: "Aug 30, 2026 8:50 pm",
    },
    {
      title: "THE PERFECT ADVENTURE GETAWAY",
      comment:
        "I was blown away by the beauty of Ramappa Temple and Bogatha Waterfalls. The tour was well-organized, and the guides were fantastic. They made sure everyone was comfortable and enjoying themselves. An absolute must-see!",
      author: "Daniel Hamilton",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80",
      date: "Aug 14, 2026 3:51 pm",
    },
    {
      title: "A JOURNEY LIKE NO OTHER",
      comment:
        "Our trip to Mulugu exceeded all expectations. The heritage tour and the journey through Eturnagaram forests was full of beautiful scenery. We'll be talking about this trip for years to come!",
      author: "Alex Buckmaster",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      date: "Aug 17, 2026 10:09 am",
    },
    {
      title: "GREAT EXPERIENCE FOR NATURE LOVERS",
      comment:
        "Mulugu is a nature lover's paradise! The hike to Bogatha was exhilarating, and the views were stunning. Our guide shared so much about the local culture and landscape, making the trip even more special.",
      author: "Corina McCoy",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      date: "Sep 1, 2026 9:48 pm",
    },
    {
      title: "WELL WORTH THE EARLY WAKE-UP CALL",
      comment:
        "Getting up before dawn was tough, but it was completely worth it once we saw the sunrise over Ramappa Lake. It's a sight that everyone should experience at least once in their life!",
      author: "Lorri Warf",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
      date: "Aug 9, 2026 11:18 am",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Scenic Landscape */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85')",
        }}
      />
      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] uppercase tracking-tight">
            OUR CUSTOMERS <span className="text-[#1D72FE]">EXPERIENCE</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#64748B]">
            Hear from Our Happy Travelers: Real Stories, Real Adventures
          </p>
        </div>

        {/* 2 Rows x 3 Columns Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] border border-[#E5E9EE] p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-extrabold text-xs sm:text-sm uppercase tracking-tight text-[#111827] mb-2.5">
                  {rev.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed line-clamp-4">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Timestamp */}
              <div className="mt-6 pt-4 border-t border-[#E5E9EE]/60 flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 bg-zinc-200">
                  <Image
                    src={rev.avatar}
                    alt={rev.author}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111827]">
                    {rev.author}
                  </h4>
                  <p className="text-[10px] text-[#64748B]">
                    {rev.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CustomerExperienceSection;
