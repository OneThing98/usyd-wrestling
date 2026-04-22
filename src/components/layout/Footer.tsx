import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getSponsors } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { mockSponsors } from "@/lib/mock-data";
import { SponsorBar, type SponsorBarItem } from "@/components/common/SponsorBar";

function resolveLogo(src: unknown): string | undefined {
  if (!src) return undefined;
  if (typeof src === "string") return src;
  return urlFor(src as never).width(192).height(96).url();
}

export async function Footer() {
  const sanitySponsors = await getSponsors();

  const sponsors: SponsorBarItem[] =
    sanitySponsors.length > 0
      ? sanitySponsors.map((s, i) => ({
          id: s._id ?? s.id ?? `s-${i}`,
          name: s.name,
          logoUrl: resolveLogo(s.logo),
          url: s.url,
        }))
      : mockSponsors.map((s, i) => ({
          id: s.id ?? `s-${i}`,
          name: s.name,
          logoUrl: resolveLogo(s.logo),
          url: s.url,
        }));

  return (
    <>
      <SponsorBar sponsors={sponsors} />
      <footer className="bg-dark text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={siteConfig.logo} alt={siteConfig.clubName} className="w-10 h-10" />
              <div>
                <span className="font-display font-bold text-lg">{siteConfig.clubName}</span>
                <p className="text-xs text-gray-400">{siteConfig.clubFullName}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/membership" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/membership" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/membership" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} {siteConfig.clubFullName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {Object.entries(siteConfig.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-secondary transition-colors text-xs capitalize"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
