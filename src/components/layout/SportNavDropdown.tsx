"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { NavItem } from "@/types";

interface SportNavDropdownProps {
  item: NavItem;
}

export function SportNavDropdown({ item }: SportNavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-white hover:text-secondary transition-colors font-display text-sm uppercase tracking-wider"
      >
        {item.label}
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && item.children && (
        <div className="absolute top-full left-0 mt-2 bg-dark border border-gray-700 rounded-md shadow-lg min-w-48 z-50">
          {item.children.map((child) => (
            <Link
              key={child.label}
              href={child.href || "#"}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary hover:text-white transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
