import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Compass, Sparkles, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Experiences & Adventures | Discover Mulugu",
  description: "Find thrilling and tranquil eco-experiences in Mulugu: lake kayaking, night safaris, temple walks, and forest trails.",
};

const EXPERIENCES = [
  {
    slug: "laknavaram-night-camping",
    title: "Laknavaram Island Night Camping & Kayaking",
    desc: "Camp beneath starry skies on secluded lake islands with bonfires, barbecues, and morning kayak paddles.",
    duration: "Overnight (2D/1N)",
    category: "Lakes & Water",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "eturnagaram-birding-trail",
    title: "Eturnagaram Canopy Walk & Birdwatching Safari",
    desc: "Guided nature walk with forest naturalists observing Malabar Pied Hornbills, Asian Paradise Flycatchers, and ancient Mahua trees.",
    duration: "Half-Day (4 Hours)",
    category: "Wildlife & Forests",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "ramappa-architectural-walk",
    title: "Ramappa Sunset Architectural & Iconography Tour",
    desc: "An in-depth temple walk exploring Kakatiya sculptural secrets, sandbox foundation marvels, and the story of sculptor Ramappa.",
    duration: "2 Hours",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="xl">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <Compass className="w-4 h-4" />
            <span>Adventure & Eco-Tours</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Curated Mulugu Experiences
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Escape the ordinary with nature camping, bird watching, and heritage walks conducted with certified local guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.slug}
              className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div
                  className="aspect-[16/10] bg-cover bg-center"
                  style={{ backgroundImage: `url(${exp.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
                    <span>{exp.category}</span>
                    <span>{exp.duration}</span>
                  </div>
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/experiences/${exp.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  <span>View Details & Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
