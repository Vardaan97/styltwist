import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Styling",
  description:
    "Experience luxury personal styling from anywhere in India with Styltwist's virtual styling service. Video consultations, digital lookbooks, and curated shopping guidance delivered remotely.",
  alternates: { canonical: "/services/virtual-styling" },
};

export default function VirtualStylingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
