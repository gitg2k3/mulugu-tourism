import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { getArticleBySlug } from "@/lib/queries/articles";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Discover Mulugu Guides`,
    description: article.excerpt,
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div className="py-12">
      <Container size="md">
        <Link
          href="/guides"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Guides
        </Link>

        <article className="space-y-6">
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span className="font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              {article.category}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 italic border-l-4 border-emerald-600 pl-4">
            {article.excerpt}
          </p>

          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden my-8 bg-zinc-800">
            <Image src={article.coverImage} alt={article.title} fill className="object-cover" />
          </div>

          <div className="prose dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              Mulugu district represents one of South India&apos;s most culturally dense and ecologically intact
              destinations. Steeped in the architectural glory of the Kakatiya Dynasty, its temples and lakes
              were engineered with profound environmental foresight.
            </p>
            <p>
              Visitors are encouraged to travel responsibly, support local tribal weavers and honey cooperatives,
              and maintain respect for the sacred groves of Chilakalagutta and Sammakka Sarakka.
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
}
