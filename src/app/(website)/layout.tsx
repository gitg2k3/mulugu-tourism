import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "../globals.css";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/layout/MobileNavigation";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Discover Mulugu | UNESCO Heritage & Eco-Tourism Capital of Telangana",
    template: "%s | Discover Mulugu",
  },
  description:
    "Discover the natural beauty and cultural heritage of Mulugu, Telangana. Explore UNESCO World Heritage Ramappa Temple, Laknavaram Lake, Bogatha Waterfalls, and Medaram Jatara.",
  keywords: [
    "Mulugu Tourism",
    "Ramappa Temple UNESCO",
    "Laknavaram Lake",
    "Bogatha Waterfalls",
    "Medaram Jatara",
    "Telangana Eco Tourism",
    "Tadvai Forest Cottages",
  ],
  authors: [{ name: "Discover Mulugu" }],
  icons: {
    icon: "/icons/Discover Mulugu_ Tribal Heritage Gateway.png",
  },
};

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-emerald-500 selection:text-white">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <MobileNavigation />
        </div>
      </body>
    </html>
  );
}
