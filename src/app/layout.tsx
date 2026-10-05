import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

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
    "Official tourism portal for Mulugu District, Telangana. Explore UNESCO World Heritage Ramappa Temple, Laknavaram Lake, Bogatha Waterfalls, and Medaram Jatara.",
  keywords: [
    "Mulugu Tourism",
    "Ramappa Temple UNESCO",
    "Laknavaram Lake",
    "Bogatha Waterfalls",
    "Medaram Jatara",
    "Telangana Tourism",
    "Tadvai Forest Cottages",
  ],
  authors: [{ name: "District Administration Mulugu" }],
  icons: {
    icon: "/icons/Discover Mulugu_ Tribal Heritage Gateway.png",
  },
};

export default function RootLayout({
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
        {children}
      </body>
    </html>
  );
}
