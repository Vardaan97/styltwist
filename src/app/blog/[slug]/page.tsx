"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useParams } from "next/navigation";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/blog-data";
import type { ContentBlock } from "@/lib/blog-types";

gsap.registerPlugin(ScrollTrigger);

function ContentRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="text-navy/60 text-lg leading-relaxed mb-6">{block.text}</p>;

    case "heading":
      return <h2 className="font-display italic text-2xl md:text-3xl text-navy mt-12 mb-6">{block.text}</h2>;

    case "subheading":
      return <h3 className="font-display italic text-xl md:text-2xl text-navy mt-10 mb-4">{block.text}</h3>;

    case "stat":
      return (
        <div className="bg-[#F0F3F9] rounded-card-lg p-8 border border-[#E2E6EF] my-8 text-center">
          <p className="font-display italic text-4xl md:text-5xl text-champagne mb-2">{block.value}</p>
          <p className="text-navy/60 text-lg mb-2">{block.label}</p>
          <p className="font-mono text-[10px] tracking-widest uppercase text-navy/30">{block.source}</p>
        </div>
      );

    case "stats-row":
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
          {block.stats.map((s, i) => (
            <div key={i} className="bg-[#F0F3F9] rounded-card p-6 border border-[#E2E6EF] text-center">
              <p className="font-display italic text-2xl md:text-3xl text-champagne mb-1">{s.value}</p>
              <p className="text-navy/60 text-sm mb-1">{s.label}</p>
              <p className="font-mono text-[9px] tracking-wider text-navy/25">{s.source}</p>
            </div>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className="space-y-3 my-6 ml-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-4 h-4 text-champagne shrink-0 mt-1.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-navy/60 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );

    case "numbered-list":
      return (
        <ol className="space-y-4 my-6">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="font-mono text-sm text-champagne shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-navy/60 leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-champagne pl-6 py-2 my-8">
          <p className="font-display italic text-xl md:text-2xl text-navy leading-snug mb-2">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <p className="font-mono text-[10px] tracking-widest uppercase text-navy/40">
              &mdash; {block.attribution}
            </p>
          )}
        </blockquote>
      );

    case "callout":
      return (
        <div className="bg-navy rounded-card-lg p-8 my-8 text-center">
          <p className="font-mono text-[10px] tracking-widest uppercase text-champagne mb-3">
            {block.title}
          </p>
          <p className="text-white/70 leading-relaxed">{block.text}</p>
        </div>
      );

    case "tip":
      return (
        <div className="bg-champagne/5 border border-champagne/20 rounded-card p-6 my-6">
          <p className="font-mono text-[10px] tracking-widest uppercase text-champagne mb-2">
            Stylist&apos;s Tip
          </p>
          <p className="text-navy/60 leading-relaxed">{block.text}</p>
        </div>
      );

    default:
      return null;
  }
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      gsap.fromTo(contentRef.current, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.3,
      });
    });
    return () => ctx.revert();
  }, []);

  if (!post) {
    return (
      <LenisProvider>
        <Navbar />
        <main className="min-h-screen bg-white pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display italic text-4xl text-navy mb-6">Post Not Found</h1>
            <p className="text-navy/60 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/blog"
              className="font-mono text-xs tracking-widest uppercase text-champagne hover:text-navy transition-colors"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </LenisProvider>
    );
  }

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  };

  // Get related posts (same category, excluding current)
  const related = allPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <LenisProvider>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white pt-32 pb-16 px-6">
          <div ref={heroRef} className="opacity-0 max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="font-mono text-[10px] tracking-widest uppercase text-navy/30 hover:text-champagne transition-colors inline-flex items-center gap-2 mb-8"
            >
              <span aria-hidden="true">&larr;</span> Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-widest uppercase text-champagne">
                {post.category}
              </span>
              <span className="text-navy/20">&middot;</span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-navy/30">
                {post.readTime}
              </span>
            </div>
            <h1 className="font-display italic text-3xl md:text-5xl text-navy mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 pb-8 border-b border-[#E2E6EF]">
              <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center">
                <span className="font-display italic text-champagne text-sm">SS</span>
              </div>
              <div>
                <p className="text-navy text-sm font-medium">{post.author}</p>
                <p className="font-mono text-[10px] tracking-widest uppercase text-navy/30">
                  {formatDate(post.date)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white pb-20 px-6">
          <div ref={contentRef} className="opacity-0 max-w-3xl mx-auto">
            {post.content.map((block, i) => (
              <ContentRenderer key={i} block={block} />
            ))}

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-[#E2E6EF]">
              <p className="font-mono text-[10px] tracking-widest uppercase text-navy/30 mb-4">
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-widest uppercase text-navy/40 border border-[#E2E6EF] px-3 py-1.5 rounded-pill"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 bg-[#F0F3F9] rounded-card-lg p-8 border border-[#E2E6EF]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-champagne/10 flex items-center justify-center shrink-0">
                  <span className="font-display italic text-champagne text-lg">SS</span>
                </div>
                <div>
                  <p className="font-display italic text-lg text-navy mb-1">Soumya Sharma</p>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-champagne mb-3">
                    Founder, Styltwist
                  </p>
                  <p className="text-navy/50 text-sm leading-relaxed">
                    Soumya is a certified personal stylist and the founder of Styltwist, India&apos;s
                    premier luxury wardrobe consulting service. Based in Gurgaon, she helps clients
                    across India dress with confidence, intention, and authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="bg-[#F0F3F9] py-16 md:py-24 px-6 border-t border-[#E2E6EF]">
            <div className="max-w-5xl mx-auto">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4 text-center">
                Continue Reading
              </p>
              <h2 className="font-display italic text-2xl md:text-3xl text-navy mb-12 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {related.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                    <div className="bg-white rounded-card-lg p-6 border border-[#E2E6EF] h-full hover:border-champagne/30 transition-colors">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-champagne">
                        {rp.category}
                      </span>
                      <h3 className="font-display italic text-lg text-navy mt-3 mb-3 group-hover:text-champagne transition-colors leading-snug">
                        {rp.title}
                      </h3>
                      <p className="text-navy/40 text-sm">{rp.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-white py-16 md:py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display italic text-2xl md:text-3xl text-navy mb-6">
              Want Personalised Style Advice?
            </h2>
            <p className="text-navy/60 leading-relaxed mb-8">
              Book a complimentary consultation with Styltwist and let us help you build
              a wardrobe you love.
            </p>
            <Link
              href="/contact"
              className="magnetic-btn inline-block font-mono text-sm tracking-widest uppercase text-white bg-navy px-10 py-4 rounded-pill hover:scale-[1.03] transition-transform duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </LenisProvider>
  );
}
