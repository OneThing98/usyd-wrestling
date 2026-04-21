import Link from "next/link";

export interface FeaturedNewsData {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  heroImageUrl?: string;
}

interface FeaturedNewsCardProps {
  article: FeaturedNewsData;
}

export function FeaturedNewsCard({ article }: FeaturedNewsCardProps) {
  return (
    <Link href={`/news/${article.slug}`} className="block group">
      <div className="relative h-[400px] bg-primary/30 overflow-hidden rounded-lg">
        {article.heroImageUrl && (
          <img
            src={article.heroImageUrl}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent z-10" />

        {!article.heroImageUrl && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 font-display text-4xl uppercase">
              Featured Image
            </span>
          </div>
        )}

        <div className="relative z-20 h-full flex flex-col justify-end p-6">
          <span className="text-secondary text-xs font-display uppercase tracking-wider">
            {new Date(article.date).toLocaleDateString("en-AU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-white group-hover:text-secondary transition-colors">
            {article.title}
          </h3>
          <p className="mt-2 text-gray-300 text-sm line-clamp-2">{article.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
