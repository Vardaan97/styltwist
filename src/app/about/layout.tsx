import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Styltwist — India's premier luxury wardrobe consulting service founded in Gurgaon. We believe fashion is personal, not prescriptive. Gender-neutral styling for everyone.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Styltwist | Luxury Wardrobe Consulting",
    description:
      "Founded in Gurgaon, Styltwist brings personalised luxury styling to clients across India. Learn our story, values, and approach.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
