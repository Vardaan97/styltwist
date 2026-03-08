import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Styling",
  description:
    "Make a statement at every occasion with Styltwist's event styling service. Wedding styling, gala preparation, and head-to-toe occasion dressing in Gurgaon and across India.",
  alternates: { canonical: "/services/event-styling" },
};

export default function EventStylingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
