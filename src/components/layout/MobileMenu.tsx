"use client";

import { useState } from "react";
import Link from "next/link";
import { sportNavItems } from "@/lib/site-config";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  function toggleExpand(label: string) {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  }

  return (
    <div className="lg:hidden bg-dark border-t border-gray-700">
      <div className="px-4 py-4 space-y-1">
        {sportNavItems.map((item) =>
          item.children ? (
            <div key={item.label}>
              <button
                onClick={() => toggleExpand(item.label)}
                className="w-full flex items-center justify-between py-3 text-white font-display text-sm uppercase tracking-wider"
              >
                {item.label}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedItems.includes(item.label) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedItems.includes(item.label) && (
                <div className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href || "#"}
                      onClick={onClose}
                      className="block py-2 text-gray-300 hover:text-secondary text-sm"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href || "#"}
              onClick={onClose}
              className="block py-3 text-white font-display text-sm uppercase tracking-wider hover:text-secondary"
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}
