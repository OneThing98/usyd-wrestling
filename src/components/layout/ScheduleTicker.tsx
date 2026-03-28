"use client";

import { mockMatches } from "@/lib/mock-data";

export function ScheduleTicker() {
  const matches = mockMatches;

  return (
    <div className="bg-dark text-white py-3 border-t border-b border-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center gap-2">
          <button
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-6 min-w-max">
              {matches.map((match) => (
                <div
                  key={match.id}
                  className="flex items-center gap-3 px-4 py-1 border-r border-gray-700 last:border-r-0"
                >
                  <span className="text-xs text-gray-400">
                    {new Date(match.date).toLocaleDateString("en-AU", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>

                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-[8px] text-gray-400">VS</span>
                  </div>

                  <span className="text-sm font-display">{match.opponent}</span>

                  {match.result ? (
                    <span
                      className={`text-sm font-display font-bold px-2 py-0.5 rounded ${
                        match.result === "W"
                          ? "bg-green-900/50 text-green-400"
                          : match.result === "L"
                          ? "bg-red-900/50 text-red-400"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {match.result} {match.score}
                    </span>
                  ) : (
                    <span className="text-xs text-secondary font-display uppercase">
                      {match.time || "TBD"}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
