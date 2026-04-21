import type { Metadata } from "next";
import { MembershipPage } from "@/components/membership/MembershipPage";

export const metadata: Metadata = {
  title: "Membership | USYD Wrestling",
  description:
    "Join the University of Sydney Wrestling Club. Membership options for students and non\u2011students.",
};

export default function Page() {
  return <MembershipPage />;
}
