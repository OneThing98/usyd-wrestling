"use client";

import { useState } from "react";
import { mockMatches } from "@/lib/mock-data";
import { seasons } from "@/lib/site-config";

export function ScheduleTable() {
  const [selectedSeason, setSelectedSeason] = useState("2025-26");

  const matches = mockMatches.filter((m) => m.season === selectedSeason);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <label className="text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400">
            Season
          </label>
          <select
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
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

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="py-3 px-4 font-display text-xs uppercase tracking-wider">Date</th>
              <th className="py-3 px-4 font-display text-xs uppercase tracking-wider">Time</th>
              <th className="py-3 px-4 font-display text-xs uppercase tracking-wider">Opponent</th>
              <th className="py-3 px-4 font-display text-xs uppercase tracking-wider">Location</th>
              <th className="py-3 px-4 font-display text-xs uppercase tracking-wider">Result</th>
              <th className="py-3 px-4 font-display text-xs uppercase tracking-wider">Links</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr
                key={match.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <td className="py-3 px-4 text-sm">
                  {new Date(match.date).toLocaleDateString("en-AU", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                  {match.time || "TBD"}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
                    <span className="text-sm font-display font-bold">{match.opponent}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                  {match.location}
                </td>
                <td className="py-3 px-4">
                  {match.result ? (
                    <span
                      className={`text-sm font-display font-bold ${
                        match.result === "W"
                          ? "text-green-600"
                          : match.result === "L"
                          ? "text-red-600"
                          : "text-gray-500"
                      }`}
                    >
                      {match.result} {match.score}
                    </span>
                  ) : (
                    <span className="text-xs font-display uppercase text-secondary">Upcoming</span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    {match.links?.recap && (
                      <a
                        href={match.links.recap}
                        className="text-xs text-primary hover:text-secondary transition-colors font-display uppercase"
                      >
                        Recap
                      </a>
                    )}
                    {match.links?.video && (
                      <a
                        href={match.links.video}
                        className="text-xs text-primary hover:text-secondary transition-colors font-display uppercase"
                      >
                        Video
                      </a>
                    )}
                    {match.links?.stats && (
                      <a
                        href={match.links.stats}
                        className="text-xs text-primary hover:text-secondary transition-colors font-display uppercase"
                      >
                        Stats
                      </a>
                    )}
                    {match.links?.tickets && (
                      <a
                        href={match.links.tickets}
                        className="text-xs text-secondary hover:text-secondary/80 transition-colors font-display uppercase font-bold"
                      >
                        Tickets
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
