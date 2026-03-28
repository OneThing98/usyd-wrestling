# USYD Wrestling

Website for the University of Sydney Wrestling Club. Built to mirror the layout and structure of [Penn State Wrestling](https://gopsusports.com/sports/wrestling).

Current site: [usydwrestling.org](https://usydwrestling.org)

## Tech Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Sanity CMS (planned).

Deployed on Vercel.

## Getting Started

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    Routes
│   ├── page.tsx            Homepage (hero carousel, schedule ticker, content grid)
│   ├── schedule/           Season schedule and results
│   ├── roster/             Wrestlers, coaching staff, and support staff
│   ├── roster/[slug]/      Individual wrestler or coach profile
│   ├── news/               News articles and match recaps
│   ├── news/[slug]/        Individual article
│   ├── stats/              Team and individual stats
│   ├── record-book/        Historical records
│   ├── facility/           Training facility info
│   ├── camps/              Camps and clinics
│   ├── archives/           Past seasons and results
│   ├── donate/             Support the club
│   └── interest-form/      Fan signup for updates
├── components/
│   ├── layout/             GlobalNav, SportNav, Footer, ScheduleTicker, MobileMenu
│   ├── home/               HeroCarousel, ContentGrid, FeaturedNewsCard, PromoCTA
│   ├── roster/             WrestlerCard, WrestlerGrid, RosterControls, StaffCard,
│   │                       CoachingStaffSection, SupportStaffSection
│   ├── schedule/           ScheduleTable
│   ├── news/               NewsCard, NewsGrid, NewsFilter
│   ├── stats/              StatsTable
│   ├── coaches/            CoachCard
│   └── common/             CTAButton, SocialLinks, SponsorBar
├── lib/
│   ├── site-config.ts      Navigation, branding, seasons
│   └── mock-data.ts        Placeholder data for development
└── types/
    └── index.ts            TypeScript interfaces (Wrestler, Coach, Match, etc.)
```

## Navigation

Two tier nav matching Penn State's pattern:

1. **GlobalNav**: University links (USyd, USU, Sydney Uni Sport)
2. **SportNav**: Wrestling specific. Schedule | Team (Roster, Coaches, Record Book) | Stats | News | Donate | Sign Up | More (Archives, Camps, Facility, Recruiting)

## Content Management

Sanity CMS will be added for non-technical editors to manage rosters, news, schedules, and other content. Schemas are outlined in `sanity/README.md`.

For now, mock data in `src/lib/mock-data.ts` is used during development.

## Status

Skeleton phase. All pages and components exist as placeholders. No real UI or styling has been implemented yet.

## Scripts

```
npm run dev       Start dev server
npm run build     Production build
npm run start     Serve production build
npm run lint      Run ESLint
```