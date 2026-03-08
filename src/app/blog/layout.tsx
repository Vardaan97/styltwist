import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Fashion insights, styling tips, and wardrobe wisdom from Styltwist founder Soumya Sharma. Expert advice on personal style, Indian fashion, capsule wardrobes, and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Style Journal | Styltwist Blog",
    description:
      "Expert fashion insights and styling tips from India's premier wardrobe consulting service.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
