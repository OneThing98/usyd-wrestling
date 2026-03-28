import type { NavItem, Season } from "@/types";

export const siteConfig = {
  clubName: "USYD Wrestling",
  clubFullName: "University of Sydney Wrestling Club",
  logo: "/images/usyd-wrestling-logo.png",
  universityLogo: "/images/usyd-logo.png",
  socialLinks: {
    twitter: "https://twitter.com/usydwrestling",
    instagram: "https://instagram.com/usydwrestling",
    facebook: "https://facebook.com/usydwrestling",
    youtube: "https://youtube.com/@usydwrestling",
  },
  colors: {
    primary: "#002855",
    secondary: "#D4A843",
    dark: "#0A0A0A",
    accent: "#FFFFFF",
  },
};

export const seasons: Season[] = [
  { label: "2025-26", value: "2025-26", isCurrent: true },
  { label: "2024-25", value: "2024-25", isCurrent: false },
  { label: "2023-24", value: "2023-24", isCurrent: false },
  { label: "2022-23", value: "2022-23", isCurrent: false },
];

export const sportNavItems: NavItem[] = [
  { label: "Schedule", href: "/schedule" },
  {
    label: "Team",
    children: [
      { label: "Roster", href: "/roster" },
      { label: "Coaches", href: "/roster#coaches" },
      { label: "Record Book", href: "/record-book" },
    ],
  },
  { label: "Stats", href: "/stats" },
  { label: "News", href: "/news" },
  { label: "Donate", href: "/donate" },
  { label: "Sign Up", href: "/interest-form" },
  {
    label: "More",
    children: [
      { label: "Archives", href: "/archives" },
      { label: "Camps", href: "/camps" },
      { label: "Facility", href: "/facility" },
      { label: "Recruiting Questionnaire", href: "/interest-form" },
    ],
  },
];

export const globalNavLinks: NavItem[] = [
  { label: "University of Sydney", href: "https://sydney.edu.au", external: true },
  { label: "USU", href: "https://usu.edu.au", external: true },
  { label: "Sydney Uni Sport", href: "https://susf.com.au", external: true },
];
