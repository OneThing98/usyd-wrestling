import { defineQuery } from "next-sanity";

export const WRESTLERS_QUERY = defineQuery(
  `*[_type == "wrestler"] | order(weightClass asc, name asc)`
);

export const WRESTLER_BY_SLUG_QUERY = defineQuery(
  `*[_type == "wrestler" && slug.current == $slug][0]`
);

export const COACHES_QUERY = defineQuery(
  `*[_type == "coach"] | order(order asc, name asc)`
);

export const COACH_BY_SLUG_QUERY = defineQuery(
  `*[_type == "coach" && slug.current == $slug][0]`
);

export const SUPPORT_STAFF_QUERY = defineQuery(
  `*[_type == "supportStaff"] | order(order asc, name asc)`
);

export const SUPPORT_STAFF_BY_SLUG_QUERY = defineQuery(
  `*[_type == "supportStaff" && slug.current == $slug][0]`
);

export const MATCHES_QUERY = defineQuery(
  `*[_type == "match" && season == $season] | order(date asc)`
);

export const NEWS_QUERY = defineQuery(
  `*[_type == "newsArticle"] | order(date desc) [0...$limit]`
);

export const FEATURED_NEWS_QUERY = defineQuery(
  `*[_type == "newsArticle" && isFeatured == true] | order(date desc) [0]`
);

export const NEWS_BY_SLUG_QUERY = defineQuery(
  `*[_type == "newsArticle" && slug.current == $slug][0]`
);

export const HERO_SLIDES_QUERY = defineQuery(
  `*[_type == "heroSlide"] | order(order asc)`
);

export const CAMPS_QUERY = defineQuery(
  `*[_type == "camp"] | order(startDate asc)`
);

export const SPONSORS_QUERY = defineQuery(
  `*[_type == "sponsor"] | order(tier asc, name asc)`
);

export const FACILITY_QUERY = defineQuery(
  `*[_type == "facility"][0]`
);

export const SEASONS_QUERY = defineQuery(
  `*[_type == "season"] | order(value desc)`
);

export const RECORD_BOOK_QUERY = defineQuery(
  `*[_type == "recordBookEntry"] | order(category asc, year desc)`
);

export const TIMETABLE_QUERY = defineQuery(
  `*[_type == "timetable"][0]`
);
