"use client";

import Link from "next/link";
import { globalNavLinks, siteConfig } from "@/lib/site-config";

export function GlobalNav() {
  return (
    <nav className="bg-dark text-white text-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-10">
        <Link href="/" className="flex items-center gap-2">
          <img src={siteConfig.logo} alt={siteConfig.clubName} className="w-6 h-6" />
          <span className="font-display font-bold text-xs uppercase tracking-wider">
            {siteConfig.clubFullName}
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          {globalNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-gray-300 hover:text-white transition-colors text-xs"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
