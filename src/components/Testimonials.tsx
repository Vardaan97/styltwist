"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "I used to stand in front of my closet for twenty minutes every morning. Now I reach in and everything works.",
    name: "Sophia M.",
    title: "Creative Director",
  },
  {
    quote:
      "It wasn't about buying more clothes. It was about understanding myself. That's what Styltwist gave me.",
    name: "James K.",
    title: "Entrepreneur",
  },
  {
    quote:
      "For the first time in years, I feel like my outside matches my inside. Confident, intentional, me.",
    name: "Amara L.",
    title: "Architect",
  },
  {
    quote:
      "They didn't just style me — they listened. Every piece tells a story I'm proud to wear.",
    name: "Elena V.",
    title: "Physician",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSlides = testimonials.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalSlides * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      slidesRef.current.forEach((slide, i) => {
        if (!slide || i === 0) return;

        // Cross-fade: fade out previous, fade in current
        tl.to(slidesRef.current[i - 1], { opacity: 0, duration: 0.5 }, i - 0.5);
        tl.fromTo(
          slide,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          i - 0.5
        );

        // Update dots
        if (dotsRef.current[i - 1]) {
          tl.to(dotsRef.current[i - 1], { backgroundColor: "#E2E6EF", scale: 1, duration: 0.3 }, i - 0.5);
        }
        if (dotsRef.current[i]) {
          tl.to(dotsRef.current[i], { backgroundColor: "#C9A84C", scale: 1.3, duration: 0.3 }, i - 0.5);
        }

        // Hold
        tl.to(slide, { opacity: 1, duration: 0.8 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Decorative quote mark */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-display text-champagne/[0.08] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Testimonial slides */}
      {testimonials.map((t, i) => (
        <div
          key={i}
          ref={(el) => { slidesRef.current[i] = el; }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16"
          style={{ opacity: i === 0 ? 1 : 0 }}
        >
          <blockquote className="font-display italic text-2xl md:text-3xl lg:text-5xl text-navy text-center max-w-4xl leading-snug mb-8">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="text-center">
            <p className="font-mono text-xs tracking-widest text-champagne uppercase">
              {t.name}
            </p>
            <p className="font-mono text-xs text-navy/40 mt-1">{t.title}</p>
          </div>
        </div>
      ))}

      {/* Progress dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {testimonials.map((_, i) => (
          <div
            key={i}
            ref={(el) => { dotsRef.current[i] = el; }}
            className="w-2 h-2 rounded-full transition-colors"
            style={{
              backgroundColor: i === 0 ? "#C9A84C" : "#E2E6EF",
              transform: i === 0 ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
