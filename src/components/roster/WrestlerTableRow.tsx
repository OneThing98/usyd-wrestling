import Link from "next/link";
import type { WrestlerCardData } from "./WrestlerCard";

interface WrestlerTableRowProps {
  wrestler: WrestlerCardData;
}

export function WrestlerTableRow({ wrestler }: WrestlerTableRowProps) {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <td className="py-3 px-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
          {wrestler.photoUrl ? (
            <img
              src={wrestler.photoUrl}
              alt={wrestler.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-primary/30 text-[8px] font-display">IMG</span>
          )}
        </div>
      </td>
      <td className="py-3 px-3">
        <Link
          href={`/roster/${wrestler.slug}`}
          className="font-display font-bold text-sm hover:text-secondary transition-colors"
        >
          {wrestler.name}
        </Link>
      </td>
      <td className="py-3 px-3 text-sm font-display font-bold">{wrestler.weightClass}</td>
      <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-400">{wrestler.year}</td>
      <td className="py-3 px-3 text-sm text-gray-500">{wrestler.hometown}</td>
      <td className="py-3 px-3 text-sm text-gray-500">{wrestler.highSchool || ""}</td>
      <td className="py-3 px-3 text-sm font-display font-bold">{wrestler.record || ""}</td>
      <td className="py-3 px-3 text-sm text-gray-500">{wrestler.height || ""}</td>
    </tr>
  );
}
