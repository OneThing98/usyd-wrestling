"use client";

import { useState } from "react";
import Link from "next/link";
import { sportNavItems, siteConfig } from "@/lib/site-config";
import { SportNavDropdown } from "./SportNavDropdown";
import { MobileMenu } from "./MobileMenu";

export function SportNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-primary text-white sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-3">
          <img src={siteConfig.logo} alt={siteConfig.clubName} className="w-8 h-8" />
          <span className="font-display font-bold text-lg uppercase tracking-wider">
            {siteConfig.clubName.split(" ").pop()}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {sportNavItems.map((item) =>
            item.children ? (
              <SportNavDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="text-white hover:text-secondary transition-colors font-display text-sm uppercase tracking-wider"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </nav>
  );
}
