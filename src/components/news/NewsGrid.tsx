import Link from "next/link";

export interface NewsGridItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  thumbnailUrl?: string;
}

interface NewsGridProps {
  articles: NewsGridItem[];
}

export function NewsGrid({ articles }: NewsGridProps) {
  if (articles.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500 font-display">
        No articles yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/news/${article.slug}`}
          className="group block bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        >
          <div className="relative h-48 bg-primary/20 flex items-center justify-center overflow-hidden">
            {article.thumbnailUrl ? (
              <img
                src={article.thumbnailUrl}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <span className="text-primary/20 font-display text-lg uppercase">
                Thumbnail
              </span>
            )}
          </div>
          <div className="p-4">
            <span className="text-xs text-gray-500 font-display uppercase">
              {new Date(article.date).toLocaleDateString("en-AU", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <h3 className="mt-1 font-display font-bold text-lg group-hover:text-secondary transition-colors">
              {article.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {article.excerpt}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
