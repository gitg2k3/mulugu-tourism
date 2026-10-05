import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeritageSection() {
  const points = [
    "Inscribed as a UNESCO World Heritage Site in 2021",
    "Constructed in 1213 CE during the glorious Kakatiya Golden Age",
    "Revolutionary lightweight floating bricks engineered to float on water",
    "Earthquake-resistant sandbox foundation technique that stood 800+ years",
    "Exquisite dolerite stone bracket figures of celestial dancers (Madanikas)",
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-900 border-y border-zinc-200/80 dark:border-zinc-800">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
                alt="UNESCO Ramappa Temple Palampet"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-zinc-950">
                  UNESCO World Heritage Site
                </span>
                <h3 className="text-xl font-bold mt-2">Ramappa (Rudreshwara) Temple</h3>
                <p className="text-xs text-zinc-300">Palampet Village, Mulugu District</p>
              </div>
            </div>

            {/* Floating floating brick badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-amber-50 dark:bg-amber-950 border border-amber-300 dark:border-amber-800 p-4 rounded-2xl shadow-xl max-w-[220px]">
              <div className="text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Floating Bricks Tech
              </div>
              <p className="text-[11px] text-amber-800/80 dark:text-amber-300/80 mt-1">
                Medieval bricks that actually float in water, reducing roof weight by 70%.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 text-xs font-semibold">
              <span>UNESCO Inscription No. 1570</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight">
              Ramappa Temple: An Architectural Poem in Stone
            </h2>

            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              Described by the traveler Marco Polo as &quot;the brightest star in the galaxy of medieval temples&quot;, 
              Ramappa Temple stands as an engineering wonder of the Kakatiya Dynasty. Built under the craftsmanship of 
              sculptor Ramappa, it remains one of the very few monuments in India named after its chief architect.
            </p>

            <ul className="space-y-3 pt-2">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/places/ramappa-temple">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl">
                  <span>Explore Ramappa Guide</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/heritage">
                <Button size="lg" variant="outline" className="rounded-xl">
                  <span>All Heritage Sites</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeritageSection;
