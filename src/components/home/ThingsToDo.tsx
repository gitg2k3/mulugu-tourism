import React from "react";
import Link from "next/link";
import { Waves, Trees, Compass, Sparkles, Flame, Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ThingsToDo() {
  const experiences = [
    {
      title: "Walk Laknavaram Suspension Bridge",
      desc: "Stroll above tranquil waters connecting 13 islands ringed by forested hills.",
      icon: Waves,
      tag: "Waterfront",
      href: "/places/laknavaram-lake",
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Tadvai Canopy Walk & Wildlife Safaris",
      desc: "Spot hornbills, deer, and ancient deciduous flora in Eturnagaram sanctuary.",
      icon: Trees,
      tag: "Eco-Adventure",
      href: "/places/tadvai-eco-huts",
      color: "from-emerald-600 to-teal-500",
    },
    {
      title: "Trek to Bogatha Forest Waterfalls",
      desc: "Experience Telangana's Niagara tumbling over scenic forest rock walls.",
      icon: Compass,
      tag: "Nature Trek",
      href: "/places/bogatha-waterfall",
      color: "from-amber-600 to-orange-500",
    },
    {
      title: "Witness Medaram Jatara Traditions",
      desc: "Immerse yourself in Asia's largest biennial tribal gathering of faith and lore.",
      icon: Flame,
      tag: "Tribal Lore",
      href: "/places/medaram-sammakka-sarakka",
      color: "from-rose-600 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-900 border-t border-zinc-200/80 dark:border-zinc-800">
      <Container size="xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Unforgettable Things to Do in Mulugu
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
            Tailor-made experiences whether you seek peaceful lake retreats, ancient temple iconography, or untamed forest safaris.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <Link
                key={exp.title}
                href={exp.href}
                className="group relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${exp.color} text-white flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    {exp.tag}
                  </span>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white mt-1 group-hover:text-emerald-600 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 group-hover:underline">
                  <span>Learn more</span> &rarr;
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ThingsToDo;
