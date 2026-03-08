"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "150+", label: "Clients Styled" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Brands Curated" },
];

export default function StatsStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 px-6 overflow-hidden"
      style={{ background: "#F2E8DF" }}
    >
      {/* Decorative mocha hairline top and bottom */}
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(to right, transparent, #9E7B5F, transparent)" }} />

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            ref={(el) => { itemsRef.current[i] = el; }}
            className="opacity-0 flex flex-col items-center text-center"
          >
            <span
              className="font-display italic leading-none mb-2"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "#C9A84C" }}
            >
              {stat.value}
            </span>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase" style={{ color: "#9E7B5F" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
