import { getWrestlers } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { mockWrestlers } from "@/lib/mock-data";
import type { Wrestler } from "@/types";
import { RosterView } from "@/components/roster/RosterView";
import type { WrestlerCardData } from "@/components/roster/WrestlerCard";

function slugStr(s: string | { current: string } | undefined): string {
  if (!s) return "";
  if (typeof s === "string") return s;
  return s.current;
}

function resolvePhoto(photo: unknown): string | undefined {
  if (!photo) return undefined;
  if (typeof photo === "string") return photo;
  return urlFor(photo as never).width(400).height(400).url();
}

function toWrestlerData(w: Wrestler, idx: number): WrestlerCardData {
  return {
    id: w._id ?? w.id ?? `w-${idx}`,
    name: w.name,
    slug: slugStr(w.slug),
    weightClass: w.weightClass,
    year: w.year,
    hometown: w.hometown,
    highSchool: w.highSchool,
    photoUrl: resolvePhoto(w.photo),
    record: w.record,
    height: w.height,
    socialLinks: w.socialLinks,
  };
}

export default async function RosterPage() {
  const sanityWrestlers = await getWrestlers();

  const wrestlers: WrestlerCardData[] =
    sanityWrestlers.length > 0
      ? sanityWrestlers.map(toWrestlerData)
      : mockWrestlers.map(toWrestlerData);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold text-primary uppercase">Team Roster</h1>

      <RosterView wrestlers={wrestlers} />
    </div>
  );
}
