import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, MapPin, ArrowLeft, Clock, Share2 } from "lucide-react";
import { getEventBySlug } from "@/lib/queries/events";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} | Discover Mulugu Events`,
    description: event.tagline,
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) notFound();

  return (
    <div className="py-12">
      <Container size="lg">
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Events
        </Link>

        <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-6 sm:p-10">
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden mb-8 bg-zinc-800">
            <Image
              src={event.coverImage}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="success">{event.category}</Badge>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(event.startDate)}</span>
              {event.endDate && <span> - {formatDate(event.endDate)}</span>}
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            {event.title}
          </h1>

          <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{event.location}</span>
          </div>

          <div className="my-8 py-6 border-y border-zinc-100 dark:border-zinc-800">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white mb-3">
              About This Event
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {event.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="tel:+918715220000">
              <Button size="lg">Tourism Information & Assistance</Button>
            </a>
            <Link href="/explore">
              <Button size="lg" variant="outline">Explore Nearby Places</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
