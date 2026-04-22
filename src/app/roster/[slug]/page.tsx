import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getWrestlerBySlug,
  getCoachBySlug,
  getSupportStaffBySlug,
} from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import type { Coach, SupportStaff, Wrestler } from "@/types";

function resolvePhoto(photo: unknown, w: number, h: number): string | undefined {
  if (!photo) return undefined;
  if (typeof photo === "string") return photo;
  return urlFor(photo as never).width(w).height(h).url();
}

function paragraphs(text: string | undefined): string[] {
  if (!text) return [];
  return text
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

function StaffProfile({ person }: { person: Coach | SupportStaff }) {
  const photoUrl = resolvePhoto(person.photo, 800, 1000);
  const bioParagraphs = paragraphs(person.bio);

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Link
        href="/coaches"
        className="text-sm font-display uppercase tracking-wider text-primary hover:text-secondary transition-colors"
      >
        Back to Coaches
      </Link>

      {photoUrl ? (
        <div className="mt-8 aspect-[4/5] w-full max-w-md mx-auto bg-primary/10 rounded-lg overflow-hidden">
          <img
            src={photoUrl}
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="mt-8 aspect-[4/5] w-full max-w-md mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
          <span className="text-primary/30 font-display text-3xl uppercase">Photo</span>
        </div>
      )}

      <h1 className="mt-8 text-4xl md:text-5xl font-display font-bold text-primary uppercase text-center">
        {person.name}
      </h1>

      <p className="mt-2 text-base font-display uppercase tracking-wider text-secondary text-center">
        {person.title}
      </p>

      {bioParagraphs.length > 0 && (
        <div className="mt-10 space-y-4 text-base leading-relaxed">
          {bioParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      )}
    </div>
  );
}

function WrestlerProfile({ wrestler }: { wrestler: Wrestler }) {
  const photoUrl = resolvePhoto(wrestler.photo, 600, 800);
  const bioParagraphs = paragraphs(wrestler.bio);

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/roster"
        className="text-sm font-display uppercase tracking-wider text-primary hover:text-secondary transition-colors"
      >
        Back to Roster
      </Link>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          {photoUrl ? (
            <div className="aspect-[3/4] bg-primary/20 rounded-lg overflow-hidden">
              <img
                src={photoUrl}
                alt={wrestler.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[3/4] bg-primary/20 rounded-lg flex items-center justify-center">
              <span className="text-primary/20 font-display text-3xl uppercase">Photo</span>
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <h1 className="text-4xl font-display font-bold text-primary uppercase">
            {wrestler.name}
          </h1>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-xs font-display uppercase tracking-wider text-gray-500">
                Weight Class
              </span>
              <div className="mt-1 font-display">{wrestler.weightClass}</div>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-xs font-display uppercase tracking-wider text-gray-500">
                Year
              </span>
              <div className="mt-1 font-display">{wrestler.year}</div>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-xs font-display uppercase tracking-wider text-gray-500">
                Hometown
              </span>
              <div className="mt-1 font-display">{wrestler.hometown}</div>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <span className="text-xs font-display uppercase tracking-wider text-gray-500">
                Record
              </span>
              <div className="mt-1 font-display">{wrestler.record ?? "—"}</div>
            </div>
          </div>

          {bioParagraphs.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-display font-bold text-primary uppercase">Bio</h2>
              <div className="mt-4 space-y-3 text-base leading-relaxed">
                {bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const wrestler = await getWrestlerBySlug(slug);
  if (wrestler) {
    return <WrestlerProfile wrestler={wrestler} />;
  }

  const coach = await getCoachBySlug(slug);
  if (coach) {
    return <StaffProfile person={coach} />;
  }

  const staff = await getSupportStaffBySlug(slug);
  if (staff) {
    return <StaffProfile person={staff} />;
  }

  notFound();
}
