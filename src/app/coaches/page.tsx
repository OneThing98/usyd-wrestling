import type { Metadata } from "next";
import { getCoaches, getSupportStaff } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { mockCoaches, mockSupportStaff } from "@/lib/mock-data";
import type { Coach, SupportStaff } from "@/types";
import { CoachingStaffSection } from "@/components/roster/CoachingStaffSection";
import { SupportStaffSection } from "@/components/roster/SupportStaffSection";
import type { StaffCardData } from "@/components/roster/StaffCard";

export const metadata: Metadata = {
  title: "Coaches | USYD Wrestling",
};

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

function toStaffData(p: Coach | SupportStaff): StaffCardData {
  return {
    name: p.name,
    slug: slugStr(p.slug),
    title: p.title,
    photoUrl: resolvePhoto(p.thumbnail) || resolvePhoto(p.photo),
    bio: p.bio,
  };
}

export default async function CoachesPage() {
  const [sanityCoaches, sanityStaff] = await Promise.all([
    getCoaches(),
    getSupportStaff(),
  ]);

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
      <h1 className="text-4xl font-display font-bold text-primary uppercase">Coaching Staff</h1>

      <CoachingStaffSection coaches={coaches} />
      <SupportStaffSection supportStaff={supportStaff} />
    </div>
  );
}
