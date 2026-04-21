import { client } from "./client";
import {
  WRESTLERS_QUERY,
  WRESTLER_BY_SLUG_QUERY,
  COACHES_QUERY,
  SUPPORT_STAFF_QUERY,
  MATCHES_QUERY,
  NEWS_QUERY,
  FEATURED_NEWS_QUERY,
  NEWS_BY_SLUG_QUERY,
  HERO_SLIDES_QUERY,
  CAMPS_QUERY,
  SPONSORS_QUERY,
  FACILITY_QUERY,
  SEASONS_QUERY,
  RECORD_BOOK_QUERY,
  TIMETABLE_QUERY,
} from "./queries";
import type {
  Wrestler,
  Coach,
  SupportStaff,
  Match,
  NewsArticle,
  HeroSlide,
  Camp,
  Sponsor,
  Facility,
  Season,
  RecordBookEntry,
  Timetable,
} from "@/types";

export async function getWrestlers(): Promise<Wrestler[]> {
  return client.fetch(WRESTLERS_QUERY);
}

export async function getWrestlerBySlug(slug: string): Promise<Wrestler | null> {
  return client.fetch(WRESTLER_BY_SLUG_QUERY, { slug });
}

export async function getCoaches(): Promise<Coach[]> {
  return client.fetch(COACHES_QUERY);
}

export async function getSupportStaff(): Promise<SupportStaff[]> {
  return client.fetch(SUPPORT_STAFF_QUERY);
}

export async function getMatches(season: string): Promise<Match[]> {
  return client.fetch(MATCHES_QUERY, { season });
}

export async function getNews(limit?: number): Promise<NewsArticle[]> {
  return client.fetch(NEWS_QUERY, { limit: limit ?? 100 });
}

export async function getFeaturedNews(): Promise<NewsArticle | null> {
  return client.fetch(FEATURED_NEWS_QUERY);
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  return client.fetch(NEWS_BY_SLUG_QUERY, { slug });
}

export async function getHeroSlides(): Promise<HeroSlide[]> {
  return client.fetch(HERO_SLIDES_QUERY);
}

export async function getCamps(): Promise<Camp[]> {
  return client.fetch(CAMPS_QUERY);
}

export async function getSponsors(): Promise<Sponsor[]> {
  return client.fetch(SPONSORS_QUERY);
}

export async function getFacility(): Promise<Facility | null> {
  return client.fetch(FACILITY_QUERY);
}

export async function getSeasons(): Promise<Season[]> {
  return client.fetch(SEASONS_QUERY);
}

export async function getRecordBook(): Promise<RecordBookEntry[]> {
  return client.fetch(RECORD_BOOK_QUERY);
}

export async function getTimetable(): Promise<Timetable | null> {
  return client.fetch(TIMETABLE_QUERY);
}
