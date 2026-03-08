"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "I used to stand in front of my closet for twenty minutes every morning. Now I reach in and everything works.",
    name: "Sophia M.",
    title: "Creative Director",
    bg: "linear-gradient(135deg, #F2E8DF 0%, #EDE0D4 100%)",
    topBorderColor: "#9E7B5F",
  },
  {
    quote:
      "It wasn't about buying more clothes. It was about understanding myself. That's what Styltwist gave me.",
    name: "James K.",
    title: "Entrepreneur",
    bg: "linear-gradient(135deg, #FFFDF5 0%, #FFF8E8 100%)",
    topBorderColor: "#C9A84C",
  },
  {
    quote:
      "For the first time in years, I feel like my outside matches my inside. Confident, intentional, me.",
    name: "Amara L.",
    title: "Architect",
    bg: "linear-gradient(135deg, #F0F3F9 0%, #EBF0F8 100%)",
    topBorderColor: "#1B2A4A",
  },
  {
    quote:
      "They didn't just style me — they listened. Every piece tells a story I'm proud to wear.",
    name: "Elena V.",
    title: "Physician",
    bg: "linear-gradient(135deg, #F5F0EB 0%, #EDE5DD 100%)",
    topBorderColor: "#C4A882",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Testimonial slides — each with its own background */}
      {testimonials.map((t, i) => (
        <div
          key={i}
          ref={(el) => { slidesRef.current[i] = el; }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-16"
          style={{ opacity: i === 0 ? 1 : 0, background: t.bg }}
        >
          {/* Colored top border stripe */}
          <div
            className="absolute top-0 left-0 w-full h-[3px]"
            style={{ background: t.topBorderColor }}
          />

          {/* Decorative quote mark — mocha tinted */}
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] font-display leading-none select-none pointer-events-none"
            style={{ color: `${t.topBorderColor}1A` }}
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote className="relative z-10 font-display italic text-2xl md:text-3xl lg:text-5xl text-navy text-center max-w-4xl leading-snug mb-10">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Editorial name dividers */}
          <div className="relative z-10 flex items-center gap-4 text-center">
            <div className="w-12 h-px" style={{ background: t.topBorderColor, opacity: 0.5 }} />
            <div>
              <p className="font-mono text-xs tracking-widest uppercase" style={{ color: t.topBorderColor }}>
                {t.name}
              </p>
              <p className="font-mono text-xs text-navy/40 mt-1">{t.title}</p>
            </div>
            <div className="w-12 h-px" style={{ background: t.topBorderColor, opacity: 0.5 }} />
          </div>
        </div>
      ))}

      {/* Progress dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
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
