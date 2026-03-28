import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "USYD Wrestling Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={{ height: "100vh" }}>{children}</div>;
}
