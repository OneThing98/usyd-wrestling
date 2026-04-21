"use client";

import { useState } from "react";
import { RosterControls } from "./RosterControls";
import { WrestlerCard, type WrestlerCardData } from "./WrestlerCard";
import { WrestlerListRow } from "./WrestlerListRow";
import { WrestlerTableRow } from "./WrestlerTableRow";

interface RosterViewProps {
  wrestlers: WrestlerCardData[];
}

export function RosterView({ wrestlers }: RosterViewProps) {
  const [season, setSeason] = useState("2025-26");
  const [sort, setSort] = useState("az");
  const [view, setView] = useState<"card" | "list" | "table">("card");

  const sorted = [...wrestlers].sort((a, b) => {
    switch (sort) {
      case "za":
        return b.name.localeCompare(a.name);
      case "weight-asc":
        return parseInt(a.weightClass) - parseInt(b.weightClass);
      case "weight-desc":
        return parseInt(b.weightClass) - parseInt(a.weightClass);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <>
      <RosterControls
        currentSeason={season}
        currentSort={sort}
        currentView={view}
        onSeasonChange={setSeason}
        onSortChange={setSort}
        onViewChange={setView}
      />

      <div className="mt-8">
        {view === "card" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sorted.map((w) => (
              <WrestlerCard key={w.id} wrestler={w} />
            ))}
          </div>
        )}

        {view === "list" && (
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            {sorted.map((w) => (
              <WrestlerListRow key={w.id} wrestler={w} />
            ))}
          </div>
        )}

        {view === "table" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white text-left">
                  <th className="py-2 px-3 font-display text-xs uppercase tracking-wider w-12"></th>
                  <th className="py-2 px-3 font-display text-xs uppercase tracking-wider">Name</th>
                  <th className="py-2 px-3 font-display text-xs uppercase tracking-wider">Weight</th>
                  <th className="py-2 px-3 font-display text-xs uppercase tracking-wider">Year</th>
                  <th className="py-2 px-3 font-display text-xs uppercase tracking-wider">Hometown</th>
                  <th className="py-2 px-3 font-display text-xs uppercase tracking-wider">High School</th>
                  <th className="py-2 px-3 font-display text-xs uppercase tracking-wider">Record</th>
                  <th className="py-2 px-3 font-display text-xs uppercase tracking-wider">Height</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((w) => (
                  <WrestlerTableRow key={w.id} wrestler={w} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
