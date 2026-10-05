import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Experience: ${slug} | Discover Mulugu`,
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="py-12">
      <Container size="md">
        <Link
          href="/experiences"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Experiences
        </Link>

        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guided Experience</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white capitalize">
            {slug.replace(/-/g, " ")}
          </h1>

          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
            Immerse yourself with expert local naturalists and community guides in Mulugu District.
            Enjoy curated trails, local organic cuisine, and safety equipment included.
          </p>

          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 space-y-3">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-white">What&apos;s Included</h3>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Authorized Tourism Naturalist / Guide
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Life jackets and safety gear
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Local organic refreshments & water
              </li>
            </ul>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <a href="tel:+918715220000">
              <Button size="lg">Call Tourism Helpdesk to Book</Button>
            </a>
            <Link href="/explore">
              <Button size="lg" variant="outline">Browse More Places</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
