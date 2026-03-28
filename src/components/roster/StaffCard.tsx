import Link from "next/link";
import type { Coach, SupportStaff } from "@/types";

interface StaffCardProps {
  person: Coach | SupportStaff;
}

export function StaffCard({ person }: StaffCardProps) {
  return (
    <div className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-dark">
      <div className="h-48 bg-primary/20 flex items-center justify-center">
        <span className="text-primary/20 font-display text-xl uppercase">Photo</span>
      </div>
      <div className="p-4 text-center">
        <Link
          href={`/roster/${person.slug}`}
          className="font-display font-bold text-lg group-hover:text-secondary transition-colors"
        >
          {person.name}
        </Link>
        <p className="text-sm text-secondary font-display uppercase tracking-wider mt-1">
          {person.title}
        </p>
        <Link
          href={`/roster/${person.slug}`}
          className="inline-block mt-3 text-xs font-display uppercase tracking-wider text-primary hover:text-secondary transition-colors"
        >
          View Bio
        </Link>
      </div>
    </div>
  );
}
