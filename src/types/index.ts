export interface Wrestler {
  id: string;
  name: string;
  slug: string;
  weightClass: string;
  year: string;
  hometown: string;
  highSchool: string;
  photo?: string;
  bio?: string;
  record?: string;
  height?: string;
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    nilProfile?: string;
  };
}

export interface Coach {
  id: string;
  name: string;
  slug: string;
  title: string;
  photo?: string;
  bio?: string;
}

export interface SupportStaff {
  id: string;
  name: string;
  slug: string;
  title: string;
  photo?: string;
  bio?: string;
}

export interface Match {
  id: string;
  date: string;
  time?: string;
  season: string;
  opponent: string;
  opponentLogo?: string;
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

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  body?: string;
  thumbnail?: string;
  heroImage?: string;
  author?: string;
  tags?: string[];
  isFeatured?: boolean;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface Camp {
  id: string;
  name: string;
  slug: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
  registrationUrl?: string;
  price?: string;
  ageGroup?: string;
  photo?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url?: string;
  tier?: "primary" | "secondary";
}

export interface Facility {
  name: string;
  description: string;
  address?: string;
  photos?: string[];
  features?: string[];
  mapUrl?: string;
  capacity?: string;
}

export interface Season {
  label: string;
  value: string;
  isCurrent: boolean;
}

export interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
}
