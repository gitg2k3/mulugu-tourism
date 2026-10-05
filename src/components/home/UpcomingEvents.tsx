import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { TourismEvent } from "@/types/common";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";

interface UpcomingEventsProps {
  events: TourismEvent[];
}

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <section className="py-20 bg-zinc-950 text-white">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Festivals & Celebrations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Upcoming Events & Jataras
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              Immerse yourself in rich cultural festivities, tribal harvest gatherings, and dance celebrations.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
          >
            <span>View All Events</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {events.length === 0 ? (
          <div className="py-12 text-center rounded-2xl border border-dashed border-zinc-800 p-8">
            <p className="text-zinc-400 font-medium">No upcoming events scheduled at this time.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 hover:border-emerald-500/50 transition-all flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-800">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-300">
                    {event.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(event.startDate)}</span>
                    </div>
                    <h3 className="font-bold text-base text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {event.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                    <div className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <Link
                      href={`/events/${event.slug}`}
                      className="text-emerald-400 font-semibold hover:underline shrink-0 ml-2"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default UpcomingEvents;
