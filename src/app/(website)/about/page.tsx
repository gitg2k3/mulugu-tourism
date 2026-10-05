import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Trees, Landmark, HeartHandshake, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG, DISTRICT_STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Mulugu District | Official Tourism Portal",
  description: "Learn about the history, geography, indigenous communities, and administrative initiatives of Mulugu District, Telangana.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="xl">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>District Profile</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            About Mulugu District
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Formed in 2019, Mulugu is Telangana&apos;s proud eco-cultural sanctuary, characterized by dense
            deciduous forests of the Northern Telangana plateau, fertile Godavari river basins, and deep-rooted
            tribal traditions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {DISTRICT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 dark:text-emerald-400">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Sections */}
        <div className="space-y-12 max-w-4xl text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Trees className="w-5 h-5 text-emerald-600" />
              Ecology & Biodiversity
            </h2>
            <p>
              More than 70% of Mulugu is blanketed by contiguous reserve forests, forming a crucial wildlife corridor
              adjoining the Eturnagaram Wildlife Sanctuary. The district is rich in teak, bamboo, Mahua, and medicinal
              flora, sheltering endangered species like the four-horned antelope, leopards, and over 200 resident and
              migratory avian species.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Landmark className="w-5 h-5 text-amber-600" />
              UNESCO Heritage Recognition
            </h2>
            <p>
              In July 2021, the 800-year-old Ramappa Temple (Rudreshwara) in Palampet was inscribed on the UNESCO
              World Heritage List, marking Telangana&apos;s first global heritage monument. The recognition honors the
              unrivaled stone carving prowess and hydraulic ingenuity of the Kakatiya Dynasty.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-rose-600" />
              Sustainable Community-Led Tourism
            </h2>
            <p>
              Discover Mulugu is designed to uplift indigenous tribal communities (Koya, Nayakpod) by promoting
              community-guided nature treks, local homestays, and direct forest produce markets. Tourism revenues directly
              support grassroots eco-development committees (EDCs).
            </p>
          </section>

          {/* Contact & District Administration Desk */}
          <div className="p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-emerald-600" />
              District Tourism Office
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              {SITE_CONFIG.contact.address}
            </p>
            <div className="pt-2 text-xs sm:text-sm">
              <p>Helpline: <strong className="text-zinc-900 dark:text-white">{SITE_CONFIG.contact.helpline}</strong></p>
              <p>Email: <strong className="text-zinc-900 dark:text-white">{SITE_CONFIG.contact.email}</strong></p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
