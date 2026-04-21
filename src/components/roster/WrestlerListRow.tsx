import Link from "next/link";
import type { WrestlerCardData } from "./WrestlerCard";

interface WrestlerListRowProps {
  wrestler: WrestlerCardData;
}

export function WrestlerListRow({ wrestler }: WrestlerListRowProps) {
  return (
    <div className="flex items-center gap-4 py-3 px-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
        {wrestler.photoUrl ? (
          <img
            src={wrestler.photoUrl}
            alt={wrestler.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-primary/30 text-xs font-display">IMG</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <Link
          href={`/roster/${wrestler.slug}`}
          className="font-display font-bold hover:text-secondary transition-colors"
        >
          {wrestler.name}
        </Link>
        <p className="text-sm text-gray-500">{wrestler.year}</p>
      </div>
      <div className="hidden md:block text-sm text-gray-600 dark:text-gray-400 w-20 text-center">
        <span className="bg-secondary/20 text-dark dark:text-secondary px-2 py-0.5 rounded font-display text-xs font-bold">
          {wrestler.weightClass}
        </span>
      </div>
      <div className="hidden md:block text-sm text-gray-500 w-40">{wrestler.hometown}</div>
      {wrestler.record && (
        <div className="hidden lg:block text-sm font-display font-bold w-16 text-center">
          {wrestler.record}
        </div>
      )}
      <Link
        href={`/roster/${wrestler.slug}`}
        className="text-xs font-display uppercase tracking-wider text-primary hover:text-secondary transition-colors"
      >
        Bio
      </Link>
    </div>
  );
}
