"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const curatedItems = [
  { label: "Tailored Blazer", category: "Outerwear", note: "Selected for your style profile" },
  { label: "Silk Blouse", category: "Tops", note: "Pairs with 8 items in your wardrobe" },
  { label: "Structured Trousers", category: "Bottoms", note: "Versatile day-to-night piece" },
  { label: "Leather Accessories", category: "Accessories", note: "Finishing touches, curated" },
  { label: "Statement Footwear", category: "Shoes", note: "Handpicked for your lifestyle" },
];

export default function StylingBox() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const lidRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: boxRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );

      gsap.fromTo(
        lidRef.current,
        { rotateX: 0 },
        {
          rotateX: -75, duration: 1.2, ease: "power2.out",
          scrollTrigger: { trigger: boxRef.current, start: "top 60%", toggleActions: "play none none none" },
        }
      );

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out", delay: 0.3 + i * 0.12,
            scrollTrigger: { trigger: boxRef.current, start: "top 50%", toggleActions: "play none none none" },
          }
        );
      });

      gsap.fromTo(
        tagRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: boxRef.current, start: "top 40%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#F8F9FC] overflow-hidden px-6">
      <div ref={headerRef} className="opacity-0 text-center mb-16 md:mb-20">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-4">
          Curated For You
        </p>
        <h2 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
          Your Styling Box, Delivered
        </h2>
        <p className="text-navy/50 max-w-lg mx-auto">
          Every piece hand-selected by your stylist. Tailored to your style profile,
          lifestyle, and wardrobe goals.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div ref={boxRef} className="opacity-0 relative" style={{ perspective: "1200px" }}>
          {/* Box lid */}
          <div
            ref={lidRef}
            className="relative bg-navy rounded-t-card-lg px-8 py-6 flex items-center justify-between"
            style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 180 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-5">
                <text x="90" y="22" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="16" fontWeight="200" fill="#FFFFFF" letterSpacing="10">STYL</text>
                <line x1="50" y1="28" x2="130" y2="28" stroke="#C9A84C" strokeWidth="1" />
                <text x="90" y="46" textAnchor="middle" fontFamily="'Inter', system-ui, sans-serif" fontSize="16" fontWeight="200" fill="#FFFFFF" letterSpacing="10">TWIST</text>
              </svg>
            </div>
            <p className="font-mono text-[9px] tracking-widest uppercase text-white/40">
              Styled With Care
            </p>
          </div>

          {/* Box body */}
          <div className="bg-white rounded-b-card-lg border border-t-0 border-[#E2E6EF] p-6 md:p-10">
            <div className="bg-[#F8F9FC]/50 rounded-card p-6 md:p-8 border border-[#E8EBF2] border-dashed">
              <div className="space-y-4">
                {curatedItems.map((item, i) => (
                  <div
                    key={item.label}
                    ref={(el) => { itemsRef.current[i] = el; }}
                    className="opacity-0 flex items-center gap-4 md:gap-6 bg-white rounded-card p-4 md:p-5 border border-[#E2E6EF] hover:border-champagne/30 transition-colors group"
                  >
                    <span className="font-mono text-2xl font-light text-champagne/40 shrink-0 w-8 text-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-card bg-[#F0F3F9] border border-[#E2E6EF] shrink-0 flex items-center justify-center group-hover:border-champagne/30 transition-colors">
                      <svg className="w-5 h-5 text-navy/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />}
                        {i === 1 && <><path d="M20.38 3.46L16 2 7.56 14.27a4 4 0 00-.38 3.65L9 21l6-5.5" /><path d="M10.95 12.36L16 2" /></>}
                        {i === 2 && <path d="M4 20h16M6 16l2-12h8l2 12" />}
                        {i === 3 && <><circle cx="12" cy="12" r="3" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.3-6.7l-1.4 1.4M6.7 17.3l-1.4 1.4m0-12l1.4 1.4m10.6 10.6l1.4 1.4" /></>}
                        {i === 4 && <path d="M5 21l2-6 5-3 5 3 2 6H5zM8 12l4-9 4 9" />}
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <p className="text-navy font-medium text-sm md:text-base">{item.label}</p>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-navy/25 hidden sm:inline">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-navy/40 text-xs md:text-sm">{item.note}</p>
                    </div>

                    <div className="w-6 h-6 rounded-full border border-champagne/30 flex items-center justify-center shrink-0 group-hover:bg-champagne/10 transition-colors">
                      <svg className="w-3 h-3 text-champagne" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div
                ref={tagRef}
                className="opacity-0 mt-6 pt-6 border-t border-dashed border-[#E2E6EF] flex items-center justify-between"
              >
                <div>
                  <p className="font-mono text-[9px] tracking-widest uppercase text-navy/30 mb-1">
                    Stylist Note
                  </p>
                  <p className="text-navy/50 text-sm italic">
                    &ldquo;These pieces work beautifully with your existing navy and cream palette. Mix and match for 15+ outfits.&rdquo;
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-champagne/10 flex items-center justify-center shrink-0 ml-4">
                  <span className="font-display italic text-champagne text-[10px]">SS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
