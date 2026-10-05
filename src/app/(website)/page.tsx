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

export const metadata = {
  title: "Discover Mulugu | UNESCO Heritage, Lakes & Eco-Tourism Capital of Telangana",
  description:
    "Official tourism portal for Mulugu District. Explore UNESCO World Heritage Ramappa Temple, Laknavaram Lake suspension bridges, Bogatha waterfalls, and Medaram Jatara.",
};

export default async function HomePage() {
  const [featuredPlaces, popularBusinesses, upcomingEvents] = await Promise.all([
    getFeaturedPlaces(),
    getFeaturedBusinesses(),
    getUpcomingEvents(),
  ]);

  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedPlaces places={featuredPlaces} />
      <HeritageSection />
      <ThingsToDo />
      <PopularBusinesses businesses={popularBusinesses} />
      <UpcomingEvents events={upcomingEvents} />
    </div>
  );
}
