import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "../globals.css";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNavigation from "@/components/layout/MobileNavigation";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
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
      className={`${jakarta.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111827] font-sans selection:bg-[#1D72FE] selection:text-white">
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
