import { mockSponsors } from "@/lib/mock-data";

export function SponsorBar() {
  return (
    <div className="py-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs font-display uppercase tracking-wider text-gray-500 mb-4">
          Partners & Sponsors
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {mockSponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-24 h-12 bg-gray-300 dark:bg-gray-700 rounded flex items-center justify-center group-hover:bg-gray-400 dark:group-hover:bg-gray-600 transition-colors">
                <span className="text-[8px] text-gray-500 dark:text-gray-400 font-display uppercase">
                  {sponsor.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
