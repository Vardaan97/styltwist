import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wardrobe Consulting",
  description:
    "Transform your closet with Styltwist's professional wardrobe consulting service in Gurgaon. Complete wardrobe audit, capsule wardrobe building, and personalised shopping plans across India.",
  alternates: { canonical: "/services/wardrobe-consulting" },
};

export default function WardrobeConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
