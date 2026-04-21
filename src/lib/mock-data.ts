import type {
  Wrestler,
  Coach,
  SupportStaff,
  Match,
  NewsArticle,
  HeroSlide,
  Camp,
  Sponsor,
  TimetableDay,
} from "@/types";

export const mockWrestlers: Wrestler[] = [
  {
    id: "1",
    name: "Lachlan Murray",
    slug: "lachlan-murray",
    weightClass: "74kg",
    year: "Junior",
    hometown: "Sydney, NSW",
    highSchool: "Newington College",
    record: "18-4",
    height: "178cm",
    socialLinks: {
      instagram: "https://instagram.com/lachmurray",
    },
  },
  {
    id: "2",
    name: "James Chen",
    slug: "james-chen",
    weightClass: "65kg",
    year: "Senior",
    hometown: "Melbourne, VIC",
    highSchool: "Scotch College",
    record: "22-3",
    height: "172cm",
    socialLinks: {
      twitter: "https://twitter.com/jchen_wrestling",
      instagram: "https://instagram.com/jameschen65",
    },
  },
  {
    id: "3",
    name: "Daniel Kowalski",
    slug: "daniel-kowalski",
    weightClass: "86kg",
    year: "Freshman",
    hometown: "Brisbane, QLD",
    highSchool: "Brisbane Grammar",
    record: "9-2",
    height: "183cm",
  },
];

export const mockCoaches: Coach[] = [
  {
    id: "c1",
    name: "Mark Thompson",
    slug: "mark-thompson",
    title: "Head Coach",
  },
  {
    id: "c2",
    name: "Sarah Liu",
    slug: "sarah-liu",
    title: "Associate Head Coach",
  },
  {
    id: "c3",
    name: "David Petrov",
    slug: "david-petrov",
    title: "Assistant Coach",
  },
];

export const mockSupportStaff: SupportStaff[] = [
  {
    id: "s1",
    name: "Emily Watson",
    slug: "emily-watson",
    title: "Director of Operations",
  },
  {
    id: "s2",
    name: "Tom Nguyen",
    slug: "tom-nguyen",
    title: "Athletic Trainer",
  },
];

export const mockMatches: Match[] = [
  {
    id: "m1",
    date: "2026-03-15",
    time: "14:00",
    season: "2025-26",
    opponent: "UNSW Wrestling",
    location: "Sydney Uni Sports Centre",
    homeAway: "home",
    result: "W",
    score: "28-12",
    links: { recap: "/news/usyd-defeats-unsw" },
  },
  {
    id: "m2",
    date: "2026-04-05",
    time: "16:00",
    season: "2025-26",
    opponent: "UTS Grappling",
    location: "UTS Multipurpose Arena",
    homeAway: "away",
    result: null,
    links: { tickets: "/donate" },
  },
  {
    id: "m3",
    date: "2026-03-01",
    time: "12:00",
    season: "2025-26",
    opponent: "Macquarie Uni Wrestling",
    location: "Sydney Uni Sports Centre",
    homeAway: "home",
    result: "W",
    score: "32-8",
  },
];

export const mockNews: NewsArticle[] = [
  {
    id: "n1",
    title: "USYD Wrestling Dominates Intervarsity Championship",
    slug: "usyd-dominates-intervarsity",
    date: "2026-03-20",
    excerpt:
      "The team claimed five gold medals at the annual Intervarsity Championship held at Sydney Olympic Park.",
    heroImage: "/images/placeholder-hero.jpg",
    thumbnail: "/images/placeholder-thumb.jpg",
    author: "USYD Wrestling Media",
    isFeatured: true,
    tags: ["competition", "results"],
  },
  {
    id: "n2",
    title: "Three Wrestlers Named to National Development Squad",
    slug: "national-development-squad",
    date: "2026-03-10",
    excerpt:
      "Lachlan Murray, James Chen, and Daniel Kowalski have been selected for the Australian National Development Squad.",
    thumbnail: "/images/placeholder-thumb.jpg",
    author: "USYD Wrestling Media",
    tags: ["athletes", "national team"],
  },
  {
    id: "n3",
    title: "Summer Camp Registration Now Open",
    slug: "summer-camp-registration",
    date: "2026-02-28",
    excerpt:
      "Register now for the annual USYD Wrestling Summer Camp running from December 15 to 20.",
    thumbnail: "/images/placeholder-thumb.jpg",
    author: "USYD Wrestling Media",
    tags: ["camps", "registration"],
  },
];

export const mockHeroSlides: HeroSlide[] = [
  {
    id: "h1",
    title: "USYD Wrestling",
    subtitle: "Tradition. Toughness. Team.",
    image: "/images/placeholder-hero.jpg",
    ctaText: "View Schedule",
    ctaLink: "/schedule",
  },
  {
    id: "h2",
    title: "2026 Intervarsity Champions",
    subtitle: "Five gold medals at the Intervarsity Championship",
    image: "/images/placeholder-hero-2.jpg",
    ctaText: "Read More",
    ctaLink: "/news/usyd-dominates-intervarsity",
  },
  {
    id: "h3",
    title: "Summer Camp 2026",
    subtitle: "Registration now open for all skill levels",
    image: "/images/placeholder-hero-3.jpg",
    ctaText: "Register Now",
    ctaLink: "/camps",
  },
];

export const mockCamps: Camp[] = [
  {
    id: "camp1",
    name: "USYD Summer Wrestling Camp",
    slug: "summer-camp-2026",
    startDate: "2026-12-15",
    endDate: "2026-12-20",
    location: "Sydney Uni Sports Centre",
    description:
      "Intensive five-day camp for wrestlers of all skill levels. Featuring guest coaches and competition preparation.",
    price: "$350",
    ageGroup: "14-25",
  },
  {
    id: "camp2",
    name: "Beginners Clinic",
    slug: "beginners-clinic-2026",
    startDate: "2026-07-10",
    endDate: "2026-07-11",
    location: "Sydney Uni Sports Centre",
    description: "Two-day introductory clinic for those new to wrestling.",
    price: "$75",
    ageGroup: "12-18",
  },
];

export const mockSponsors: Sponsor[] = [
  {
    id: "sp1",
    name: "Sydney Uni Sport & Fitness",
    logo: "/images/sponsors/susf.png",
    url: "https://susf.com.au",
    tier: "primary",
  },
  {
    id: "sp2",
    name: "Wrestling Australia",
    logo: "/images/sponsors/wrestling-aus.png",
    url: "https://wrestling.org.au",
    tier: "primary",
  },
  {
    id: "sp3",
    name: "USU",
    logo: "/images/sponsors/usu.png",
    url: "https://usu.edu.au",
    tier: "secondary",
  },
];

export const timetableData: TimetableDay[] = [
  {
    day: "Monday",
    sessions: [
      { name: "Freestyle Wrestling", time: "7:30PM \u2013 9:30PM", location: "SUSF Dojo" },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { name: "Open Mat", time: "7:00AM \u2013 8:30AM", location: "SUSF Dojo" },
      { name: "Greco Roman", time: "7:30PM \u2013 9:30PM", location: "SUSF Dojo" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { name: "Freestyle Wrestling", time: "7:30PM \u2013 9:30PM", location: "SUSF Dojo" },
    ],
  },
  {
    day: "Thursday",
    sessions: [
      { name: "Strength & Conditioning", time: "8:00PM \u2013 9:30PM", location: "Brydens Boxing" },
    ],
  },
  {
    day: "Friday",
    sessions: [
      { name: "Kids Wrestling", time: "4:30PM \u2013 5:30PM", location: "SUSF Dojo" },
      { name: "Womens Wrestling", time: "5:30PM \u2013 7:30PM", location: "SUSF Dojo" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { name: "Greco Roman", time: "9:00AM \u2013 11:00AM", location: "SUSF Dojo" },
      { name: "Freestyle Wrestling", time: "5:30PM \u2013 7:30PM", location: "SUSF Dojo" },
    ],
  },
  {
    day: "Sunday",
    sessions: [
      { name: "Competition Team", time: "10:00AM \u2013 12:00PM", location: "SUSF Dojo" },
    ],
  },
];
