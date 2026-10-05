import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getAllArticles } from "@/lib/queries/articles";

export const metadata: Metadata = {
  title: "Travel Guides & Cultural Stories | Discover Mulugu",
  description: "Comprehensive travel guides, historical articles, and insider tips for exploring Mulugu District.",
};

export default async function GuidesPage() {
  const articles = await getAllArticles();

  return (
    <div className="py-12 sm:py-16">
      <Container size="xl">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Travel Guides & Culture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Insider Guides to Mulugu
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Expert insights on Kakatiya architectural wonders, eco-tourism packing tips, and local cultural etiquette.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="py-16 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 p-8">
            <p className="text-zinc-600 dark:text-zinc-400 font-medium">
              No travel guides or articles currently published.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] bg-zinc-800">
                    <Image src={article.coverImage} alt={article.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-300">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-xl text-zinc-900 dark:text-white">
                      {article.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    href={`/guides/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
