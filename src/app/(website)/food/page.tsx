import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Utensils, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Food & Authentic Telangana Cuisine | Discover Mulugu",
  description: "Taste traditional Telangana flavors: Sarva Pindi, Pachi Pulusu, country chicken curries, and organic millet foods in Mulugu.",
};

export default function FoodPage() {
  const dishes = [
    {
      name: "Sarva Pindi (Ginnappa)",
      telugu: "సర్వ పిండి",
      desc: "A savory pancake made with rice flour, chana dal, peanuts, sesame seeds, green chilies, and curry leaves cooked crisp in an earthen or copper pan.",
      image: "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Telangana Natu Kodi Kura",
      telugu: "తెలంగాణ నాటు కోడి కూర",
      desc: "Spicy country chicken curry slow-cooked with freshly ground roasted spices, coriander, and native shallots, best enjoyed with hot steamed rice or Jowar rotis.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pachi Pulusu & Jonna Rotti",
      telugu: "పచ్చి పులుసు & జొన్న రొట్టెలు",
      desc: "Uncooked spiced tamarind stew infused with charcoal-smoked shallots and green chilies, paired with wholesome iron-rich sorghum flatbreads.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pure Koya Wild Forest Honey",
      telugu: "కొండ తేనె",
      desc: "Raw, unpasteurized natural honey collected sustainably by indigenous Koya gatherers from deep Eturnagaram cliff bee colonies.",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <Container size="xl">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
            <Utensils className="w-4 h-4" />
            <span>Culinary Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Traditional Food of Mulugu
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
            Savor the authentic earthy spices and wholesome millets of the Telangana Deccan and indigenous tribal culinary traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-zinc-800">
                <Image src={dish.image} alt={dish.name} fill className="object-cover" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {dish.telugu}
                  </span>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-white mt-1">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                    {dish.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
