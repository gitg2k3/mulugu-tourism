"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/queries/articles";

interface BlogNewsSectionProps {
  articles: Article[];
}

export function BlogNewsSection({ articles }: BlogNewsSectionProps) {
  if (!articles || articles.length === 0) return null;

  const featured = articles[0];
  const gridArticles = articles.slice(1, 4);

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] uppercase tracking-tight">
            BLOG AND <span className="text-[#1D72FE]">NEWS</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#64748B]">
            Stay Updated: Travel Tips, Stories, and the Latest News from Mulugu
          </p>
        </div>

        {/* Top Large Featured Article (Horizontal Split) */}
        {featured && (
          <div className="bg-white rounded-[24px] border border-[#E5E9EE] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-8 grid grid-cols-1 md:grid-cols-12 items-center group">
            
            {/* Left Cover Image */}
            <div className="md:col-span-6 relative h-[280px] sm:h-[340px] md:h-[400px] w-full overflow-hidden bg-zinc-100">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Content */}
            <div className="md:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#111827] group-hover:text-[#1D72FE] transition-colors leading-tight">
                  <Link href={`/guides/${featured.slug}`}>
                    {featured.title}
                  </Link>
                </h3>
                <p className="mt-4 text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {featured.excerpt}
                </p>
              </div>

              {/* Meta Row with Circular Arrow Button */}
              <div className="mt-6 pt-5 border-t border-[#E5E9EE] flex items-center justify-between">
                <span className="text-xs text-[#64748B] font-medium">
                  {formatDate(featured.publishedAt)} • {featured.readTime}
                </span>
                <Link
                  href={`/guides/${featured.slug}`}
                  className="w-9 h-9 rounded-full border border-[#E5E9EE] flex items-center justify-center text-[#1D72FE] hover:bg-[#1D72FE] hover:text-white hover:border-[#1D72FE] transition-all"
                  aria-label={`Read ${featured.title}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* Bottom 3 Articles Grid */}
        {gridArticles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridArticles.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-[24px] border border-[#E5E9EE] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={art.coverImage}
                      alt={art.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-5">
                    <h4 className="text-sm sm:text-base font-bold text-[#111827] group-hover:text-[#1D72FE] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/guides/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h4>
                  </div>
                </div>

                {/* Meta Row */}
                <div className="px-5 pb-5 pt-0 flex items-center justify-between text-xs text-[#64748B]">
                  <span>
                    {formatDate(art.publishedAt)} • {art.readTime}
                  </span>
                  <Link
                    href={`/guides/${art.slug}`}
                    className="w-8 h-8 rounded-full border border-[#E5E9EE] flex items-center justify-center text-[#1D72FE] hover:bg-[#1D72FE] hover:text-white hover:border-[#1D72FE] transition-all"
                    aria-label={`Read ${art.title}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default BlogNewsSection;
