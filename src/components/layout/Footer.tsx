import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SponsorBar } from "@/components/common/SponsorBar";

export function Footer() {
  return (
    <>
      <SponsorBar />
      <footer className="bg-dark text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-dark text-sm">W</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg">{siteConfig.clubName}</span>
                <p className="text-xs text-gray-400">{siteConfig.clubFullName}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/interest-form" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/interest-form" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/interest-form" className="hover:text-white transition-colors">
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
