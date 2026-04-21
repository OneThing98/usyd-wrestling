import { getWrestlers, getCoaches, getSupportStaff } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { mockWrestlers, mockCoaches, mockSupportStaff } from "@/lib/mock-data";
import type { Wrestler, Coach, SupportStaff } from "@/types";
import { RosterView } from "@/components/roster/RosterView";
import { CoachingStaffSection } from "@/components/roster/CoachingStaffSection";
import { SupportStaffSection } from "@/components/roster/SupportStaffSection";
import type { WrestlerCardData } from "@/components/roster/WrestlerCard";
import type { StaffCardData } from "@/components/roster/StaffCard";

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

function toStaffData(p: Coach | SupportStaff): StaffCardData {
  return {
    name: p.name,
    slug: slugStr(p.slug),
    title: p.title,
    photoUrl: resolvePhoto(p.photo),
    bio: p.bio,
  };
}

export default async function RosterPage() {
  const [sanityWrestlers, sanityCoaches, sanityStaff] = await Promise.all([
    getWrestlers(),
    getCoaches(),
    getSupportStaff(),
  ]);

  const wrestlers: WrestlerCardData[] =
    sanityWrestlers.length > 0
      ? sanityWrestlers.map(toWrestlerData)
      : mockWrestlers.map(toWrestlerData);

  const coaches: StaffCardData[] =
    sanityCoaches.length > 0
      ? sanityCoaches.map(toStaffData)
      : mockCoaches.map(toStaffData);

  const supportStaff: StaffCardData[] =
    sanityStaff.length > 0
      ? sanityStaff.map(toStaffData)
      : mockSupportStaff.map(toStaffData);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold text-primary uppercase">Team Roster</h1>

      <RosterView wrestlers={wrestlers} />

      <CoachingStaffSection coaches={coaches} />
      <SupportStaffSection supportStaff={supportStaff} />
    </div>
  );
}
