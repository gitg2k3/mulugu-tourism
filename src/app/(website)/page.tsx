import React from "react";
import Hero from "@/components/home/Hero";
import FeaturedPlaces from "@/components/home/FeaturedPlaces";
import HeritageSection from "@/components/home/HeritageSection";
import ThingsToDo from "@/components/home/ThingsToDo";
import PopularBusinesses from "@/components/home/PopularBusinesses";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import { getFeaturedPlaces } from "@/lib/queries/places";
import { getFeaturedBusinesses } from "@/lib/queries/businesses";
import { getUpcomingEvents } from "@/lib/queries/events";
import { getHomepageGlobal } from "@/lib/queries/homepage";

export const metadata = {
  title: "Discover Mulugu | UNESCO Heritage, Lakes & Eco-Tourism Guide",
  description:
    "Explore the UNESCO Heritage & Eco-Tourism wonders of Mulugu. Discover Ramappa Temple, Laknavaram Lake suspension bridges, Bogatha waterfalls, and Medaram Jatara.",
};

export default async function HomePage() {
  const [homepageData, featuredPlaces, popularBusinesses, upcomingEvents] = await Promise.all([
    getHomepageGlobal(),
    getFeaturedPlaces(),
    getFeaturedBusinesses(),
    getUpcomingEvents(),
  ]);

  return (
    <div className="flex flex-col">
      <Hero data={homepageData} />
      <FeaturedPlaces places={featuredPlaces} />
      <HeritageSection />
      <ThingsToDo />
      <PopularBusinesses businesses={popularBusinesses} />
      <UpcomingEvents events={upcomingEvents} />
    </div>
  );
}
