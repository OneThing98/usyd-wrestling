export default function RecordBookPage() {
  const categories = [
    "All-Time Win Leaders",
    "Single-Season Records",
    "Career Records",
    "Team Records",
    "Championship Results",
    "National Qualifiers",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold text-primary uppercase">Record Book</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        The complete history of USYD Wrestling achievements, records, and milestones.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-dark"
          >
            <h2 className="font-display font-bold text-lg text-primary uppercase">{category}</h2>
            <div className="mt-4 space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800"
                >
                  <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
