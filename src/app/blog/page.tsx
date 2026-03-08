"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog-data";
import type { BlogPost } from "@/lib/blog-types";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Wardrobe", "Styling", "Trends", "Sustainability", "Psychology", "Culture"];
const cardAccents = ["#C9A84C", "#9E7B5F", "#C4A882", "#1B2A4A"];

export default function BlogPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const allPosts = getAllPosts();
  const filteredPosts =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.5, ease: "power3.out", delay: i * 0.08,
        });
      });
    });
    return () => ctx.revert();
  }, [activeCategory]);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  };

  return (
    <LenisProvider>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ background: "linear-gradient(to bottom, #FDFAF7, #F2E8DF)" }}>
          <div ref={heroRef} className="opacity-0 max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-6">
              The Style Journal
            </p>
            <h1 className="font-display italic text-4xl md:text-6xl text-navy mb-6">
              Insights on Style, Fashion &amp; Self-Expression
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Expert perspectives on personal styling, wardrobe strategy, and the fashion
              landscape — written by Soumya Sharma, founder of Styltwist.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-[#F2E8DF] pb-8 px-6">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-pill transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-white"
                    : "text-navy/40 border border-[#E2E6EF] hover:border-navy/30 hover:text-navy/70"
                }`}
                style={activeCategory === cat ? { backgroundColor: "#9E7B5F" } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {activeCategory === "All" && allPosts.length > 0 && (
          <section className="py-16 px-6 border-y border-[#E2E6EF]" style={{ background: "#F2E8DF" }}>
            <div className="max-w-5xl mx-auto">
              <Link href={`/blog/${allPosts[0].slug}`} className="group block">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                  <div className="lg:w-[60%]">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-champagne mb-3">
                      Latest Post
                    </p>
                    <h2 className="font-display italic text-2xl md:text-4xl text-navy mb-4 group-hover:text-champagne transition-colors">
                      {allPosts[0].title}
                    </h2>
                    <p className="text-navy/60 leading-relaxed mb-4">
                      {allPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-navy/30 font-mono text-[10px] tracking-widest uppercase">
                      <span>{formatDate(allPosts[0].date)}</span>
                      <span>&middot;</span>
                      <span>{allPosts[0].readTime}</span>
                      <span>&middot;</span>
                      <span>{allPosts[0].category}</span>
                    </div>
                  </div>
                  <div className="lg:w-[40%] bg-white rounded-card-lg p-8 border border-[#E2E6EF]" style={{ borderLeftWidth: "4px", borderLeftColor: "#9E7B5F" }}>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-navy/30 mb-4">Key Insight</p>
                    {allPosts[0].content.find((b) => b.type === "stat") ? (
                      (() => {
                        const stat = allPosts[0].content.find((b) => b.type === "stat");
                        if (stat && stat.type === "stat") {
                          return (
                            <>
                              <p className="font-display italic text-4xl text-champagne mb-2">{stat.value}</p>
                              <p className="text-navy/60 text-sm">{stat.label}</p>
                              <p className="text-navy/30 text-xs mt-1">{stat.source}</p>
                            </>
                          );
                        }
                        return null;
                      })()
                    ) : (
                      <p className="font-display italic text-xl text-navy/60">
                        {allPosts[0].excerpt.split(".")[0]}.
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="py-16 md:py-24 px-6" style={{ background: "linear-gradient(to bottom, #F2E8DF, #FDFAF7 40%)" }}>
          <div ref={gridRef} className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory === "All" ? filteredPosts.slice(1) : filteredPosts).map((post: BlogPost, i: number) => (
                <article
                  key={post.slug}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className="opacity-0 group"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="bg-white rounded-card-lg overflow-hidden border border-[#E2E6EF] h-full flex flex-col hover:border-champagne/30 transition-colors duration-300">
                      {/* Color accent top border */}
                      <div className="h-[3px] w-full shrink-0" style={{ background: cardAccents[i % cardAccents.length] }} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-[10px] tracking-widest uppercase text-champagne">
                          {post.category}
                        </span>
                        <span className="text-navy/20">&middot;</span>
                        <span className="font-mono text-[10px] tracking-widest uppercase text-navy/30">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display italic text-lg text-navy mb-3 group-hover:text-champagne transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-navy/50 text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-widest uppercase text-navy/30">
                          {formatDate(post.date)}
                        </span>
                        <span className="font-mono text-[10px] tracking-widest uppercase text-champagne group-hover:translate-x-1 transition-transform">
                          Read &rarr;
                        </span>
                      </div>
                    </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-6 border-t border-[#E2E6EF]" style={{ background: "#F2E8DF" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-6">
              Ready to Put These Ideas Into Practice?
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-10">
              Book a complimentary consultation and let us help you build a wardrobe
              that works as hard as you do.
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
