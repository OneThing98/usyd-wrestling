import Link from "next/link";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/roster"
        className="text-sm font-display uppercase tracking-wider text-primary hover:text-secondary transition-colors"
      >
        Back to Roster
      </Link>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="aspect-[3/4] bg-primary/20 rounded-lg flex items-center justify-center">
            <span className="text-primary/20 font-display text-3xl uppercase">Photo</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-4xl font-display font-bold text-primary uppercase">
            {slug.replace(/-/g, " ")}
          </h1>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-xs font-display uppercase tracking-wider text-gray-500">
                Weight Class
              </span>
              <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded mt-1" />
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-xs font-display uppercase tracking-wider text-gray-500">
                Year
              </span>
              <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded mt-1" />
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-xs font-display uppercase tracking-wider text-gray-500">
                Hometown
              </span>
              <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mt-1" />
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-xs font-display uppercase tracking-wider text-gray-500">
                Record
              </span>
              <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded mt-1" />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-display font-bold text-primary uppercase">Bio</h2>
            <div className="mt-4 space-y-3">
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-display font-bold text-primary uppercase">
              Season Stats
            </h2>
            <div className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {["Wins", "Losses", "Falls"].map((stat) => (
                  <div key={stat}>
                    <div className="h-8 w-12 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
                    <span className="text-xs font-display uppercase tracking-wider text-gray-500 mt-1 block">
                      {stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
