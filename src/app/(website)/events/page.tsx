import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getAllEvents } from "@/lib/queries/events";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events & Medaram Jatara | Discover Mulugu",
  description: "Schedule and guide to festivals, Medaram Jatara, Kakatiya cultural celebrations, and eco-carnivals in Mulugu.",
};

export default async function EventsPage() {
  const events = await getAllEvents();

  return (
    <div className="py-12 sm:py-16">
      <Container size="xl">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <Calendar className="w-4 h-4" />
            <span>Festivals & Celebrations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Mulugu Events Calendar
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Participate in tribal heritage celebrations, classical Kakatiya dance performances, and nature fairs throughout the year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-zinc-800">
                  <Image src={event.coverImage} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-300">
                    {event.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-semibold mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(event.startDate)}</span>
                  </div>
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
                    {event.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex items-center gap-1 text-xs text-zinc-500 truncate">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
                <Link
                  href={`/events/${event.slug}`}
                  className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline shrink-0 ml-2"
                >
                  Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
