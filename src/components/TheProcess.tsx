"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Consult",
    description:
      "A conversation about you, your life, your aspirations. No judgement, just understanding.",
    side: "right" as const,
    accentColor: "#C9A84C",   // champagne
  },
  {
    title: "Profile",
    description:
      "We decode your style DNA — body, palette, lifestyle. The science behind the art.",
    side: "left" as const,
    accentColor: "#C4A882",   // mocha-light
  },
  {
    title: "Curate",
    description:
      "Hand-selected pieces that tell your story. Every item intentional, every outfit effortless.",
    side: "right" as const,
    accentColor: "#9E7B5F",   // mocha
  },
  {
    title: "Deliver",
    description:
      "Your new wardrobe arrives. Try, love, keep. The beginning of a new relationship with style.",
    side: "left" as const,
    accentColor: "#6B4F35",   // mocha-dark
  },
];

export default function TheProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const line = lineRef.current;
      if (!line) return;

      const lineLength = line.getTotalLength();
      gsap.set(line, {
        strokeDasharray: lineLength,
        strokeDashoffset: lineLength,
      });

      // Main timeline for line drawing
      gsap.to(line, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Animate each node and card
      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        const card = cardsRef.current[i];

        gsap.fromTo(
          node,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: node,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        if (card) {
          const xFrom = steps[i].side === "right" ? 60 : -60;
          gsap.fromTo(
            card,
            { opacity: 0, x: xFrom },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: node,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FDFAF7, #F2E8DF 60%, #FDFAF7)" }}
    >
      {/* Section counter */}
      <span
        className="absolute font-mono font-bold leading-none pointer-events-none select-none"
        style={{ fontSize: "clamp(8rem,22vw,18rem)", color: "rgba(158,123,95,0.05)", top: "0%", right: "0%" }}
        aria-hidden="true"
      >
        03
      </span>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-navy text-center mb-24">
          The Process
        </h2>

        <div className="relative">
          {/* Vertical SVG line — gradient from champagne to mocha-dark */}
          <svg
            className="absolute left-6 md:left-1/2 top-0 h-full w-1 md:-translate-x-1/2"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="timelineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#9E7B5F" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#6B4F35" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <line
              ref={lineRef}
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="url(#timelineGrad)"
              strokeWidth="2"
            />
          </svg>

          {/* Steps */}
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex items-center ${
                  step.side === "right"
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Node — color per step */}
                <div
                  className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10"
                  ref={(el) => { nodesRef.current[i] = el; }}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: step.accentColor,
                      boxShadow: `0 0 20px ${step.accentColor}55`,
                    }}
                  />
                </div>

                {/* Spacer for mobile */}
                <div className="w-16 md:hidden shrink-0" />

                {/* Content card */}
                <div
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className={`opacity-0 md:w-[calc(50%-3rem)] ${
                    step.side === "right"
                      ? "md:ml-auto md:pl-12"
                      : "md:mr-auto md:pr-12"
                  }`}
                >
                  <div
                    className="relative bg-white backdrop-blur-sm rounded-card-lg p-8 border border-[#E2E6EF] overflow-hidden"
                    style={{ borderLeftWidth: "4px", borderLeftColor: step.accentColor }}
                  >
                    {/* Large background step number */}
                    <span
                      className="absolute font-mono font-bold leading-none pointer-events-none select-none"
                      style={{
                        fontSize: "5rem",
                        color: step.accentColor,
                        opacity: 0.06,
                        bottom: "-0.5rem",
                        right: "1rem",
                        lineHeight: 1,
                      }}
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="font-mono text-xs tracking-widest uppercase"
                      style={{ color: step.accentColor }}
                    >
                      0{i + 1}
                    </span>
                    <h3 className="font-display italic text-2xl md:text-3xl text-navy mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-navy/50 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
