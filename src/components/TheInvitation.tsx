"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const words = ["Your.", "Style.", "Journey.", "Starts.", "Here."];

export default function TheInvitation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
        },
      });

      // Reveal each word
      wordsRef.current.forEach((word) => {
        if (!word) return;
        tl.fromTo(
          word,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          }
        );
        // Hold after each word
        tl.to(word, { opacity: 1, duration: 0.3 });
      });

      // Show CTA
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
        tl.to(ctaRef.current, { opacity: 1, duration: 1 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-2 px-6">
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => { wordsRef.current[i] = el; }}
            className="font-display text-5xl md:text-7xl lg:text-9xl text-navy opacity-0"
          >
            {word}
          </span>
        ))}
      </div>

      <div ref={ctaRef} className="mt-16 opacity-0">
        <Link
          href="/contact"
          className="relative magnetic-btn inline-block font-mono text-sm tracking-widest uppercase text-white bg-navy px-10 py-4 rounded-pill hover:scale-[1.03] transition-transform duration-300"
        >
          Book a Consultation
          {/* Pulse ripple */}
          <span className="absolute inset-0 rounded-pill border-2 border-navy animate-[pulse-ring_2s_ease-out_infinite] pointer-events-none" />
        </Link>
      </div>
    </section>
  );
}
