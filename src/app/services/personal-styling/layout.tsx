import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Styling",
  description:
    "Elevate your everyday style with Styltwist's personal styling service. Curated lookbooks, outfit formulas, and expert shopping guidance tailored to your lifestyle in Gurgaon and across India.",
  alternates: { canonical: "/services/personal-styling" },
};

export default function PersonalStylingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
