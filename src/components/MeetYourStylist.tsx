"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MeetYourStylist() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const fgLayerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        },
      });

      // Slide panels apart
      tl.to(leftPanelRef.current, { xPercent: -100, duration: 2, ease: "power2.out" }, 0);
      tl.to(rightPanelRef.current, { xPercent: 100, duration: 2, ease: "power2.out" }, 0);

      // Parallax background
      tl.fromTo(bgLayerRef.current, { y: 40 }, { y: -40, duration: 4, ease: "none" }, 0);

      // Label fade in
      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        0.6
      );

      // Gold line draw
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power2.out" },
        0.8
      );

      // Main text
      tl.fromTo(
        fgLayerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
        0.9
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#F8F9FC]"
    >
      {/* Subtle background pattern */}
      <div
        ref={bgLayerRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(27,42,74,0.03) 0%, transparent 50%)",
        }}
      />

      {/* Decorative corner accents */}
      <div className="absolute top-20 left-12 w-20 h-px bg-champagne/20" />
      <div className="absolute top-20 left-12 w-px h-20 bg-champagne/20" />
      <div className="absolute bottom-20 right-12 w-20 h-px bg-champagne/20" />
      <div className="absolute bottom-20 right-12 w-px h-20 bg-champagne/20" />

      {/* Content area — centered, clean, readable */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        <p
          ref={labelRef}
          className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne mb-8 opacity-0"
        >
          Your Style Partner
        </p>

        <div
          ref={lineRef}
          className="w-16 h-px bg-champagne mb-8 origin-center"
          style={{ transform: "scaleX(0)" }}
        />

        <div ref={fgLayerRef} className="opacity-0 max-w-2xl">
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-navy mb-8 leading-tight">
            Meet Your Personal Stylist
          </h2>
          <p className="text-navy/60 max-w-lg mx-auto text-lg md:text-xl leading-relaxed mb-6">
            Someone who listens before they style. Who understands that fashion is
            personal, not prescriptive.
          </p>
          <p className="text-navy/40 max-w-md mx-auto text-base leading-relaxed">
            Your wardrobe, reimagined with intention.
          </p>
        </div>
      </div>

      {/* Left door panel */}
      <div
        ref={leftPanelRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-white z-20"
      >
        <div className="absolute right-0 top-0 w-px h-full bg-[#E2E6EF]" />
      </div>

      {/* Right door panel */}
      <div
        ref={rightPanelRef}
        className="absolute top-0 right-0 w-1/2 h-full bg-white z-20"
      >
        <div className="absolute left-0 top-0 w-px h-full bg-[#E2E6EF]" />
      </div>
    </section>
  );
}
