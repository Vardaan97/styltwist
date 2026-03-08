"use client";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Styltwist",
    description:
      "India's premier luxury wardrobe consulting service offering personalized styling, curated wardrobes, and expert fashion advice.",
    url: "https://styltwist.vercel.app",
    email: "soumyastyltwist@gmail.com",
    telephone: "+917048959604",
    founder: {
      "@type": "Person",
      name: "Soumya Sharma",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurgaon",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    priceRange: "$$$",
    image: "https://styltwist.vercel.app/og-image.jpg",
    sameAs: [
      "https://www.instagram.com/styltwist/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Styling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wardrobe Consulting",
            description: "Complete wardrobe audit, capsule wardrobe building, and personalised shopping plans.",
            url: "https://styltwist.vercel.app/services/wardrobe-consulting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Personal Styling",
            description: "Day-to-day style guidance, curated lookbooks, and outfit formulas.",
            url: "https://styltwist.vercel.app/services/personal-styling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Event Styling",
            description: "Head-to-toe styling for weddings, galas, and special occasions.",
            url: "https://styltwist.vercel.app/services/event-styling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Virtual Styling",
            description: "Remote styling via video consultations and digital lookbooks across India.",
            url: "https://styltwist.vercel.app/services/virtual-styling",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
