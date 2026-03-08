import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Styltwist's luxury personal styling services: wardrobe consulting, personal styling, event styling, and virtual styling. Serving clients in Gurgaon, Delhi NCR, and across India.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Styling Services | Styltwist",
    description:
      "From wardrobe transformations to event-ready looks — discover Styltwist's range of luxury personal styling services across India.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
