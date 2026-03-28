"use client";

import { seasons } from "@/lib/site-config";

interface RosterControlsProps {
  currentSeason: string;
  currentSort: string;
  currentView: "card" | "list" | "table";
  onSeasonChange: (season: string) => void;
  onSortChange: (sort: string) => void;
  onViewChange: (view: "card" | "list" | "table") => void;
}

export function RosterControls({
  currentSeason,
  currentSort,
  currentView,
  onSeasonChange,
  onSortChange,
  onViewChange,
}: RosterControlsProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400">
            Season
          </label>
          <select
            value={currentSeason}
            onChange={(e) => onSeasonChange(e.target.value)}
            className="bg-white dark:bg-dark border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm"
          >
            {seasons.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400">
            Sort
          </label>
          <select
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-white dark:bg-dark border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm"
          >
            <option value="az">A to Z</option>
            <option value="za">Z to A</option>
            <option value="class-asc">Class (Ascending)</option>
            <option value="class-desc">Class (Descending)</option>
            <option value="weight-asc">Weight (Ascending)</option>
            <option value="weight-desc">Weight (Descending)</option>
          </select>
        </div>

        <div className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
          {(["card", "list", "table"] as const).map((view) => (
            <button
              key={view}
              onClick={() => onViewChange(view)}
              className={`px-3 py-1.5 text-sm font-display uppercase tracking-wider transition-colors ${
                currentView === view
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-dark text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
}
