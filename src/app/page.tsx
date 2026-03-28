import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ScheduleTicker } from "@/components/layout/ScheduleTicker";
import { ContentGrid } from "@/components/home/ContentGrid";
import { SponsorBar } from "@/components/common/SponsorBar";

export default function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <ScheduleTicker />
      <ContentGrid />
      <SponsorBar />
    </div>
  );
}
