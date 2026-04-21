import { getNews, getSponsors, getMatches } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { mockNews, mockSponsors, mockMatches } from "@/lib/mock-data";
import type { NewsArticle, Sponsor, Match } from "@/types";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ScheduleTicker, type ScheduleTickerMatch } from "@/components/layout/ScheduleTicker";
import { ContentGrid, type ContentGridNewsItem } from "@/components/home/ContentGrid";
import { SponsorBar, type SponsorBarItem } from "@/components/common/SponsorBar";

const CURRENT_SEASON = "2025-26";

function slugStr(s: string | { current: string } | undefined): string {
  if (!s) return "";
  if (typeof s === "string") return s;
  return s.current;
}

function resolveImage(
  src: unknown,
  width: number,
  height: number
): string | undefined {
  if (!src) return undefined;
  if (typeof src === "string") return src;
  return urlFor(src as never).width(width).height(height).url();
}

function toNewsItem(n: NewsArticle, idx: number): ContentGridNewsItem {
  return {
    id: n._id ?? n.id ?? `n-${idx}`,
    title: n.title,
    slug: slugStr(n.slug),
    date: n.date,
    excerpt: n.excerpt,
    thumbnailUrl: resolveImage(n.thumbnail, 800, 450),
    heroImageUrl: resolveImage(n.heroImage, 1600, 900),
    isFeatured: n.isFeatured,
  };
}

function toSponsorItem(s: Sponsor, idx: number): SponsorBarItem {
  return {
    id: s._id ?? s.id ?? `s-${idx}`,
    name: s.name,
    logoUrl: resolveImage(s.logo, 192, 96),
    url: s.url,
  };
}

function toTickerMatch(m: Match, idx: number): ScheduleTickerMatch {
  return {
    id: m._id ?? m.id ?? `m-${idx}`,
    date: m.date,
    time: m.time,
    opponent: m.opponent,
    opponentLogoUrl: resolveImage(m.opponentLogo, 80, 80),
    result: m.result,
    score: m.score,
  };
}

export default async function HomePage() {
  const [sanityNews, sanitySponsors, sanityMatches] = await Promise.all([
    getNews(6),
    getSponsors(),
    getMatches(CURRENT_SEASON),
  ]);

  const news: ContentGridNewsItem[] =
    sanityNews.length > 0
      ? sanityNews.map(toNewsItem)
      : mockNews.map(toNewsItem);

  const sponsors: SponsorBarItem[] =
    sanitySponsors.length > 0
      ? sanitySponsors.map(toSponsorItem)
      : mockSponsors.map(toSponsorItem);

  const matches: ScheduleTickerMatch[] =
    sanityMatches.length > 0
      ? sanityMatches.map(toTickerMatch)
      : mockMatches.map(toTickerMatch);

  return (
    <div>
      <HeroCarousel />
      <ScheduleTicker matches={matches} />
      <ContentGrid news={news} />
      <SponsorBar sponsors={sponsors} />
    </div>
  );
}
