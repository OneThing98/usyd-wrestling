import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { GlobalNav } from "@/components/layout/GlobalNav";
import { SportNav } from "@/components/layout/SportNav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "USYD Wrestling",
  description: "University of Sydney Wrestling Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <GlobalNav />
        <SportNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
