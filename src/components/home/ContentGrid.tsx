import Link from "next/link";
import { FeaturedNewsCard, type FeaturedNewsData } from "./FeaturedNewsCard";
import { PromoCTA } from "./PromoCTA";

export interface ContentGridNewsItem extends FeaturedNewsData {
  id: string;
  thumbnailUrl?: string;
  isFeatured?: boolean;
}

interface ContentGridProps {
  news: ContentGridNewsItem[];
}

export function ContentGrid({ news }: ContentGridProps) {
  const featured = news.find((n) => n.isFeatured) ?? news[0];
  const otherNews = featured ? news.filter((n) => n.id !== featured.id) : [];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {featured && (
          <div className="lg:col-span-2">
            <FeaturedNewsCard article={featured} />
          </div>
        )}

        <div className="flex flex-col gap-6">
          <PromoCTA
            title="Donate"
            subtitle="Support USYD Wrestling"
            href="/donate"
            variant="primary"
          />
          <PromoCTA
            title="Summer Camp"
            subtitle="Registration now open"
            href="/camps"
            variant="secondary"
          />
        </div>

        {otherNews.map((article) => (
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

        <PromoCTA
          title="Membership"
          subtitle="Join the club today"
          href="/membership"
          variant="primary"
        />
      </div>
    </section>
  );
}
