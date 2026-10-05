import React from "react";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import DestinationShowcase from "@/components/home/DestinationShowcase";
import WhyUsSection from "@/components/home/WhyUsSection";
import PackageSection from "@/components/home/PackageSection";
import CustomerExperienceSection from "@/components/home/CustomerExperienceSection";
import BlogNewsSection from "@/components/home/BlogNewsSection";
import FaqSection from "@/components/home/FaqSection";
import { getFeaturedPlaces } from "@/lib/queries/places";
import { getAllItineraries } from "@/lib/queries/itineraries";
import { getAllArticles } from "@/lib/queries/articles";
import { getHomepageGlobal } from "@/lib/queries/homepage";

export const metadata = {
  title: "Discover Mulugu | Gateway to Telangana’s Tribal Heritage & UNESCO Wonders",
  description:
    "Explore the UNESCO Heritage & Eco-Tourism wonders of Mulugu. Discover Ramappa Temple, Laknavaram Lake, Bogatha waterfalls, and Medaram.",
};

export default async function HomePage() {
  const [homepageData, places, itineraries, articles] = await Promise.all([
    getHomepageGlobal(),
    getFeaturedPlaces(),
    getAllItineraries(),
    getAllArticles(),
  ]);

  return (
    <div className="flex flex-col bg-white">
      {/* 1. Hero Section with Top Pill Badge, Impactful Headline, Panoramic Landscape & Floating Booking Widget */}
      <Hero data={homepageData} />

      {/* 2. Media Trust Bar */}
      <TrustBar />

      {/* 3. Escape to Our Favorite Destination Carousel (Payload Places) */}
      <DestinationShowcase places={places} />

      {/* 4. Why Should Trip With Us (3 Minimal Value Cards) */}
      <WhyUsSection />

      {/* 5. Choose Your Package (Payload Itineraries) */}
      <PackageSection itineraries={itineraries} />

      {/* 6. Our Customers Experience (6 Review Cards with Landscape Background) */}
      <CustomerExperienceSection />

      {/* 7. Blog and News Section (Payload Articles) */}
      <BlogNewsSection articles={articles} />

      {/* 8. Frequently Asked Question (5 Accordion Cards + Contact Us) */}
      <FaqSection />
    </div>
  );
}
