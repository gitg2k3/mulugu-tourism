import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { getSiteSettingsGlobal, getFooterGlobal } from "@/lib/queries/homepage";

export async function Footer() {
  const [siteSettings, footerData] = await Promise.all([
    getSiteSettingsGlobal(),
    getFooterGlobal(),
  ]);

  const helpline = siteSettings.contactPhone || SITE_CONFIG.contact.helpline;
  const email = siteSettings.contactEmail || SITE_CONFIG.contact.email;
  const aboutText = footerData.aboutText || SITE_CONFIG.description;
  const copyright = footerData.copyright || `© ${new Date().getFullYear()} Discover Mulugu. All rights reserved.`;

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800 pt-16 pb-12 mt-auto">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl text-white tracking-tight">
                {siteSettings.siteName || SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {aboutText}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Community Tourism & Heritage Guide
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Explore Destinations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/places/ramappa-temple" className="hover:text-emerald-400 transition-colors">
                  Ramappa Temple (UNESCO)
                </Link>
              </li>
              <li>
                <Link href="/places/laknavaram-lake" className="hover:text-emerald-400 transition-colors">
                  Laknavaram Suspension Bridge
                </Link>
              </li>
              <li>
                <Link href="/places/bogatha-waterfall" className="hover:text-emerald-400 transition-colors">
                  Bogatha Waterfalls
                </Link>
              </li>
              <li>
                <Link href="/places/medaram-sammakka-sarakka" className="hover:text-emerald-400 transition-colors">
                  Medaram Sammakka Sarakka
                </Link>
              </li>
              <li>
                <Link href="/places/tadvai-eco-huts" className="hover:text-emerald-400 transition-colors">
                  Tadvai Forest Eco-Tourism
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tourism Highlights & Directory */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Visitor Information
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/businesses" className="hover:text-emerald-400 transition-colors">
                  Resorts, Stays & Food Directory
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-emerald-400 transition-colors">
                  Medaram Jatara & Festivals
                </Link>
              </li>
              <li>
                <Link href="/itineraries" className="hover:text-emerald-400 transition-colors">
                  Suggested Travel Itineraries
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-emerald-400 transition-colors">
                  Interactive District Map
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Mulugu District
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Emergency Helplines */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Emergency & Helplines
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${helpline}`} className="hover:text-white transition-colors">
                  Helpline: {helpline}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p>{copyright}</p>
            <p className="text-[11px] text-zinc-600">
              Discover Mulugu is an independent travel &amp; eco-tourism guide and is not affiliated with or endorsed by any government entity.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              Terms of Use
            </Link>
            <Link href="/admin" className="text-zinc-600 hover:text-zinc-400 transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
