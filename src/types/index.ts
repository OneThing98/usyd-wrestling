interface SanityDocument {
  _id?: string;
  _type?: string;
  _createdAt?: string;
  _updatedAt?: string;
}

export interface Wrestler extends SanityDocument {
  id?: string;
  name: string;
  slug: string | { current: string };
  weightClass: string;
  year: string;
  hometown: string;
  highSchool: string;
  photo?: any;
  bio?: string;
  record?: string;
  height?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    nilProfile?: string;
  };
}

export interface Coach extends SanityDocument {
  id?: string;
  name: string;
  slug: string | { current: string };
  title: string;
  photo?: any;
  bio?: string;
  order?: number;
}

export interface SupportStaff extends SanityDocument {
  id?: string;
  name: string;
  slug: string | { current: string };
  title: string;
  photo?: any;
  bio?: string;
  order?: number;
}

export interface Match extends SanityDocument {
  id?: string;
  date: string;
  time?: string;
  season: string;
  opponent: string;
  opponentLogo?: any;
  location: string;
  homeAway: "home" | "away" | "neutral";
  result?: "W" | "L" | "D" | null;
  score?: string;
  links?: {
    video?: string;
    stats?: string;
    recap?: string;
    tickets?: string;
  };
}

export interface NewsArticle extends SanityDocument {
  id?: string;
  title: string;
  slug: string | { current: string };
  date: string;
  excerpt: string;
  body?: any[];
  thumbnail?: any;
  heroImage?: any;
  author?: string;
  tags?: string[];
  isFeatured?: boolean;
}

export interface HeroSlide extends SanityDocument {
  id?: string;
  title: string;
  subtitle?: string;
  image: any;
  ctaText?: string;
  ctaLink?: string;
  order?: number;
}

export interface Camp extends SanityDocument {
  id?: string;
  name: string;
  slug: string | { current: string };
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
  registrationUrl?: string;
  price?: string;
  ageGroup?: string;
  photo?: any;
}

export interface Sponsor extends SanityDocument {
  id?: string;
  name: string;
  logo: any;
  url?: string;
  tier?: "primary" | "secondary";
}

export interface Facility extends SanityDocument {
  name: string;
  description: string;
  address?: string;
  photos?: any[];
  features?: string[];
  mapUrl?: string;
  capacity?: string;
}

export interface Season extends SanityDocument {
  label: string;
  value: string;
  isCurrent: boolean;
}

export interface RecordBookEntry extends SanityDocument {
  category: string;
  wrestlerName: string;
  value: string;
  year?: string;
  description?: string;
}

export interface TimetableSession {
  name: string;
  time: string;
  location: string;
}

export interface TimetableDay {
  day: string;
  sessions: TimetableSession[];
}

export interface Timetable extends SanityDocument {
  days: TimetableDay[];
  note?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
}
