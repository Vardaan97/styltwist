import { MetadataRoute } from "next";

const blogSlugs = [
  "capsule-wardrobe-revolution",
  "colour-psychology-fashion",
  "sustainable-fashion-india-2026",
  "science-of-first-impressions",
  "power-dressing-hybrid-era",
  "indian-wedding-guest-dressing-guide",
  "fashion-ai-revolution-personal-style",
  "wardrobe-roi-quality-over-quantity",
  "rise-of-gender-neutral-fashion-india",
  "body-confidence-through-clothing",
  "art-of-transitional-dressing",
  "fabric-guide-indian-climate",
  "decision-fatigue-getting-dressed",
  "fashion-week-trends-real-life",
  "minimalist-wardrobe-less-is-more",
  "personal-branding-through-fashion",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://styltwist.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/wardrobe-consulting`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/personal-styling`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/event-styling`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/virtual-styling`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
