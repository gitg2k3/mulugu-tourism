import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Globe, Star, CheckCircle, Mail, ArrowLeft } from "lucide-react";
import { getBusinessBySlug } from "@/lib/queries/businesses";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const biz = await getBusinessBySlug(slug);
  if (!biz) return { title: "Business Not Found" };
  return {
    title: `${biz.name} | Discover Mulugu Directory`,
    description: biz.tagline,
  };
}

export default async function BusinessDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const biz = await getBusinessBySlug(slug);
  if (!biz) notFound();

  return (
    <div className="py-12">
      <Container size="lg">
        <Link
          href="/businesses"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>

        <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl p-6 sm:p-10">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8 bg-zinc-800">
            <Image
              src={biz.featuredImage}
              alt={biz.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Badge variant="success">{biz.categoryLabel}</Badge>
              {biz.isVerified && (
                <Badge variant="default" className="text-emerald-700 dark:text-emerald-400">
                  <CheckCircle className="w-3 h-3 mr-1" /> Verified Business
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-sm font-bold text-zinc-800 dark:text-zinc-200">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{biz.rating}</span>
              <span className="text-zinc-400">({biz.reviewCount} reviews)</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            {biz.name}
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2">
            {biz.tagline}
          </p>

          <div className="my-8 py-6 border-y border-zinc-100 dark:border-zinc-800 space-y-4">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white">About</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {biz.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href={`tel:${biz.phone}`} className="w-full">
              <Button size="lg" className="w-full">
                <Phone className="w-4 h-4 mr-2" /> Call {biz.phone}
              </Button>
            </a>
            {biz.website && (
              <a href={biz.website} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" variant="outline" className="w-full">
                  <Globe className="w-4 h-4 mr-2" /> Visit Official Website
                </Button>
              </a>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
