import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "Styltwist | %s",
    default: "Styltwist | Luxury Wardrobe Consulting",
  },
  description:
    "India's premier luxury wardrobe consulting service. Personalized styling, curated wardrobes & expert fashion advice delivered to your door in Gurgaon & beyond.",
  keywords: [
    "luxury wardrobe consulting",
    "personal stylist India",
    "wardrobe makeover Gurgaon",
    "fashion consultant",
    "personal shopping",
    "style transformation",
    "luxury styling service",
  ],
  metadataBase: new URL("https://styltwist.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Styltwist | Luxury Wardrobe Consulting",
    description:
      "India's premier luxury wardrobe consulting service. Personalized styling, curated wardrobes & expert fashion advice.",
    type: "website",
    locale: "en_IN",
    siteName: "Styltwist",
  },
  twitter: {
    card: "summary_large_image",
    title: "Styltwist | Luxury Wardrobe Consulting",
    description:
      "India's premier luxury wardrobe consulting service. Personalized styling, curated wardrobes & expert fashion advice.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <JsonLd />
        <div className="page-transition">{children}</div>
        {/* SVG Noise Overlay - reduced for light theme */}
        <svg className="noise-overlay" style={{ opacity: 0.015 }} aria-hidden="true">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </body>
    </html>
  );
}
