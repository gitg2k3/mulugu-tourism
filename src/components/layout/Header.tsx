"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Landmark } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Partners", href: "#partners" },
    { name: "FAQ", href: "#faq" },
    { name: "Coupons and Promos", href: "#packages" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E9EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-[#1D72FE] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Landmark className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-[#111827]">
              Discover<span className="text-[#1D72FE]">Mulugu</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#334155] hover:text-[#1D72FE] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA Button: Explore Destinations with arrow in circle */}
          <div className="hidden sm:flex items-center">
            <Link
              href="#destinations"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5E9EE] bg-white text-[#111827] hover:border-[#1D72FE] hover:text-[#1D72FE] text-xs sm:text-sm font-semibold transition-all shadow-xs group"
            >
              <span>Explore Destinations</span>
              <span className="w-5 h-5 rounded-full border border-[#1D72FE] text-[#1D72FE] flex items-center justify-center group-hover:bg-[#1D72FE] group-hover:text-white transition-all">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 rounded-lg text-[#334155] hover:bg-[#F6F8FA] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#111827]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E9EE] bg-white px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-sm font-medium text-[#334155] hover:bg-[#F6F8FA] hover:text-[#1D72FE]"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1D72FE] text-white text-xs font-semibold shadow-xs"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
