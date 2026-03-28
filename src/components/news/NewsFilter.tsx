"use client";

interface NewsFilterProps {
  currentYear: string;
  currentCategory: string;
  onYearChange: (year: string) => void;
  onCategoryChange: (category: string) => void;
}

export function NewsFilter({
  currentYear,
  currentCategory,
  onYearChange,
  onCategoryChange,
}: NewsFilterProps) {
  const years = ["All", "2026", "2025", "2024", "2023"];
  const categories = ["All", "Competition", "Athletes", "Camps", "Recruiting", "Club News"];

  return (
    <div className="flex flex-wrap items-center gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <label className="text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400">
          Year
        </label>
        <select
          value={currentYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="bg-white dark:bg-dark border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm font-display uppercase tracking-wider text-gray-600 dark:text-gray-400">
          Category
        </label>
        <select
          value={currentCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="bg-white dark:bg-dark border border-gray-300 dark:border-gray-600 rounded px-3 py-1.5 text-sm"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
