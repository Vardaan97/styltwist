"use client";

import { useLayoutEffect, useRef } from "react";
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

  useLayoutEffect(() => {
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
      className="relative h-screen w-full overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F2E8DF 0%, #EDE0D4 50%, #F8F5F0 100%)" }}
    >
      {/* Warm background layer with floating color orbs */}
      <div
        ref={bgLayerRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 40%, rgba(196,168,130,0.18) 0%, transparent 45%), radial-gradient(ellipse at 75% 60%, rgba(158,123,95,0.12) 0%, transparent 45%), radial-gradient(ellipse at 50% 20%, rgba(201,168,76,0.08) 0%, transparent 40%)",
        }}
      />

      {/* Floating decorative circles — fashion palette reference */}
      <div className="absolute top-[15%] left-[8%] w-32 h-32 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,168,130,0.22) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[20%] right-[10%] w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)" }} />
      <div className="absolute top-[55%] left-[5%] w-20 h-20 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(158,123,95,0.15) 0%, transparent 70%)" }} />

      {/* Section counter */}
      <span
        className="absolute font-mono font-bold leading-none pointer-events-none select-none"
        style={{ fontSize: "clamp(8rem,22vw,18rem)", color: "rgba(158,123,95,0.05)", top: "-4%", right: "2%" }}
        aria-hidden="true"
      >
        02
      </span>

      {/* Decorative corner accents with mocha tones */}
      <div className="absolute top-20 left-12 pointer-events-none">
        <div className="w-20 h-[2px]" style={{ background: "linear-gradient(to right, #9E7B5F, transparent)", opacity: 0.4 }} />
        <div className="w-[2px] h-20" style={{ background: "linear-gradient(to bottom, #9E7B5F, transparent)", opacity: 0.4 }} />
      </div>
      <div className="absolute bottom-20 right-12 pointer-events-none flex flex-col items-end">
        <div className="w-[2px] h-20" style={{ background: "linear-gradient(to top, #C9A84C, transparent)", opacity: 0.4 }} />
        <div className="w-20 h-[2px]" style={{ background: "linear-gradient(to left, #C9A84C, transparent)", opacity: 0.4 }} />
      </div>

      {/* Content area — centered, clean, readable */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        <p
          ref={labelRef}
          className="font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8 opacity-0"
          style={{ color: "#9E7B5F" }}
        >
          Your Style Partner
        </p>

        <div
          ref={lineRef}
          className="w-16 h-px mb-8 origin-center"
          style={{ transform: "scaleX(0)", background: "linear-gradient(to right, #9E7B5F, #C9A84C)" }}
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

      {/* Left door panel — warm inner edge */}
      <div
        ref={leftPanelRef}
        className="absolute top-0 left-0 w-1/2 h-full z-20"
        style={{ background: "linear-gradient(to right, #FFFFFF, #FDFAF7)" }}
      >
        <div className="absolute right-0 top-0 w-px h-full" style={{ background: "linear-gradient(to bottom, #C4A882, #E2E6EF, #C4A882)", opacity: 0.5 }} />
      </div>

      {/* Right door panel — warm inner edge */}
      <div
        ref={rightPanelRef}
        className="absolute top-0 right-0 w-1/2 h-full z-20"
        style={{ background: "linear-gradient(to left, #FFFFFF, #FDFAF7)" }}
      >
        <div className="absolute left-0 top-0 w-px h-full" style={{ background: "linear-gradient(to bottom, #C4A882, #E2E6EF, #C4A882)", opacity: 0.5 }} />
      </div>
    </section>
  );
}
