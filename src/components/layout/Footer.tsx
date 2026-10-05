import React from "react";
import Link from "next/link";
import { ShieldCheck, PhoneCall, Trees, Compass } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getSiteSettingsGlobal, getFooterGlobal } from "@/lib/queries/homepage";
import StarburstThanksFooter, { FooterLink } from "@/components/ui/starburst-thanks-footer";

export async function Footer() {
  const [siteSettings, footerData] = await Promise.all([
    getSiteSettingsGlobal(),
    getFooterGlobal(),
  ]);

  const helpline = siteSettings.contactPhone || SITE_CONFIG.contact.helpline;
  const email = siteSettings.contactEmail || SITE_CONFIG.contact.email;
  const copyright = footerData.copyright || `© ${new Date().getFullYear()} Discover Mulugu. All rights reserved.`;

  const destinationLinks: FooterLink[] = [
    {
      caption: "UNESCO World Heritage",
      label: "Ramappa Temple",
      href: "/places/ramappa-temple",
    },
    {
      caption: "Suspension Bridge & Lake",
      label: "Laknavaram Lake",
      href: "/places/laknavaram-lake",
    },
    {
      caption: "Telangana Niagara",
      label: "Bogatha Waterfalls",
      href: "/places/bogatha-waterfall",
    },
    {
      caption: "Asia's Largest Tribal Fair",
      label: "Medaram Jatara",
      href: "/places/medaram-sammakka-sarakka",
    },
    {
      caption: "Forest Cottages & Canopy",
      label: "Tadvai Eco-Huts",
      href: "/places/tadvai-eco-huts",
    },
    {
      caption: "Resorts & Local Food",
      label: "Tourism Directory",
      href: "/businesses",
    },
    {
      caption: "Live Destination Guide",
      label: "District Map",
      href: "/map",
    },
  ];

  const customLogo = (
    <div className="flex flex-col items-center gap-2 text-center select-none">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#188BAF]/20 border border-[#188BAF]/40 text-[#188BAF] text-xs font-semibold tracking-wide uppercase">
        <ShieldCheck className="w-3.5 h-3.5 text-[#EFA316]" />
        <span>UNESCO Heritage &amp; Eco-Tourism Capital</span>
      </div>
      <div className="flex items-center gap-2.5 mt-1">
        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading">
          {siteSettings.siteName || SITE_CONFIG.name}
        </span>
        <span className="text-xs px-2 py-0.5 rounded bg-[#EFA316]/20 text-[#EFA316] font-medium border border-[#EFA316]/40 hidden sm:inline-block">
          {SITE_CONFIG.teluguName}
        </span>
      </div>
      <p className="text-xs text-zinc-400 max-w-md">
        {footerData.aboutText || SITE_CONFIG.description}
      </p>
    </div>
  );

  const bottomSlot = (
    <div className="max-w-6xl mx-auto px-4 space-y-8 text-zinc-400">
      {/* Quick Helplines Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-white/10 text-xs">
        <div className="flex items-center justify-center sm:justify-start gap-2.5 bg-white/5 px-4 py-2.5 rounded-lg border border-white/5">
          <PhoneCall className="w-4 h-4 text-[#EFA316] shrink-0" />
          <div>
            <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Tourism Helpline</div>
            <a href={`tel:${helpline}`} className="text-zinc-200 font-semibold hover:text-[#EFA316] transition-colors">
              {helpline}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2.5 bg-white/5 px-4 py-2.5 rounded-lg border border-white/5">
          <Trees className="w-4 h-4 text-[#258C42] shrink-0" />
          <div>
            <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Forest &amp; Eco Helpline</div>
            <a
              href={`tel:${siteSettings.emergencyForestHelpline || "18004255364"}`}
              className="text-zinc-200 font-semibold hover:text-[#258C42] transition-colors"
            >
              {siteSettings.emergencyForestHelpline || "1800-425-5364"}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-2.5 bg-white/5 px-4 py-2.5 rounded-lg border border-white/5">
          <Compass className="w-4 h-4 text-[#1D72FE] shrink-0" />
          <div>
            <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Police &amp; Medical Emergency</div>
            <span className="text-zinc-200 font-semibold">
              Police: {siteSettings.emergencyPolice || "100"} | Med: {siteSettings.emergencyAmbulance || "108"}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation & Legal Links */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-zinc-300 font-medium">{copyright}</p>
          <p className="text-[11px] text-zinc-500 max-w-xl">
            Discover Mulugu is an independent travel &amp; eco-tourism guide and is not affiliated with or endorsed by any government entity.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-zinc-400">
          <Link href="/about" className="hover:text-white transition-colors">
            About Mulugu
          </Link>
          <Link href="/itineraries" className="hover:text-white transition-colors">
            Itineraries
          </Link>
          <Link href="/map" className="hover:text-white transition-colors">
            Interactive Map
          </Link>
          <Link href="/events" className="hover:text-white transition-colors">
            Jatara &amp; Festivals
          </Link>
          <Link href="/admin" className="text-zinc-600 hover:text-zinc-400 transition-colors">
            Admin Portal
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full mt-auto">
      <StarburstThanksFooter
        name={siteSettings.siteName || SITE_CONFIG.name}
        logo={customLogo}
        thanks={["Dhanyavadalu", "Namaskaram", "Johar", "Thank you", "Swagatam", "Vandanalu"]}
        tagline="for exploring mulugu"
        signoff="Preserve sacred forests, honor tribal traditions & travel responsibly."
        links={destinationLinks}
        email={email}
        phone={helpline}
        copiedLabel="Contact Copied!"
        height="auto"
        background="#071326"
        ink="#F6F8FA"
        accent="#EFA316"
        starPoints={12}
        bottomSlot={bottomSlot}
      />
    </div>
  );
}

export default Footer;
