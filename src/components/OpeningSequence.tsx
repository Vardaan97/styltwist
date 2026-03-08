"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OpeningSequence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation on load — tagline and decorative elements
      const entranceTl = gsap.timeline({ delay: 0.3 });
      entranceTl
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(
          decorRef.current,
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );

      // Scroll-driven sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
        },
      });

      // Fade out tagline
      tl.to(taglineRef.current, { opacity: 0, y: -20, duration: 0.5 });
      tl.to(decorRef.current, { opacity: 0, duration: 0.3 }, "<");

      // Line 1: fade in
      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      // Hold
      tl.to(line1Ref.current, { opacity: 1, duration: 1.5 });
      // Fade out
      tl.to(line1Ref.current, { opacity: 0, y: -20, duration: 0.8 });

      // Line 2: fade in
      tl.fromTo(
        line2Ref.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      // Hold
      tl.to(line2Ref.current, { opacity: 1, duration: 1.5 });
      // Fade out
      tl.to(line2Ref.current, { opacity: 0, y: -20, duration: 0.8 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FFFFFF 60%, #F2E8DF)" }}
    >
      {/* Top-left L-bracket accent */}
      <div className="absolute top-24 left-8 pointer-events-none">
        <div className="w-20 h-[2px]" style={{ background: "linear-gradient(to right, #9E7B5F, #C9A84C)", opacity: 0.5 }} />
        <div className="w-[2px] h-20" style={{ background: "linear-gradient(to bottom, #9E7B5F, transparent)", opacity: 0.5 }} />
      </div>
      {/* Bottom-right L-bracket accent */}
      <div className="absolute bottom-20 right-8 pointer-events-none flex flex-col items-end">
        <div className="w-[2px] h-20" style={{ background: "linear-gradient(to top, #C9A84C, transparent)", opacity: 0.5 }} />
        <div className="w-20 h-[2px]" style={{ background: "linear-gradient(to left, #C9A84C, #9E7B5F)", opacity: 0.5 }} />
      </div>

      {/* Runway accent stripes — bottom left */}
      <div className="absolute bottom-24 left-0 flex flex-col gap-[5px] pointer-events-none">
        <div className="w-24 h-[2px]" style={{ background: "#C9A84C", opacity: 0.5 }} />
        <div className="w-16 h-[2px]" style={{ background: "#C4A882", opacity: 0.4 }} />
        <div className="w-10 h-[2px]" style={{ background: "#9E7B5F", opacity: 0.35 }} />
      </div>

      {/* Initial tagline visible on load */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <p
          ref={taglineRef}
          className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase text-navy/40 mb-6 opacity-0"
        >
          Luxury Wardrobe Consulting
        </p>

        {/* Mocha→champagne decorative line */}
        <div
          ref={decorRef}
          className="w-16 h-px mb-8 origin-center opacity-0"
          style={{ background: "linear-gradient(to right, #9E7B5F, #C9A84C, #9E7B5F)" }}
        />

        {/* Scroll-driven text lines */}
        <p
          ref={line1Ref}
          className="absolute font-display italic text-5xl md:text-6xl lg:text-7xl leading-tight text-navy text-center px-6 opacity-0"
        >
          Your closet is full.
        </p>
        <p
          ref={line2Ref}
          className="absolute font-display italic text-5xl md:text-6xl lg:text-7xl leading-tight text-navy text-center px-6 opacity-0"
        >
          But nothing feels right.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-navy/30">
          Scroll
        </span>
        <div className="w-px h-8 bg-navy/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-navy/50 animate-[scroll-line_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
