"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TheShift() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      if (!path) return;

      const pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        },
      });

      // Draw the S-curve path
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "none",
      });

      // Split text into words for stagger animation
      if (textRef.current) {
        const words = textRef.current.querySelectorAll(".word");
        tl.fromTo(
          words,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const question = "What if getting dressed felt effortless?";

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ background: "#F2E8DF" }}
    >
      {/* Oversized editorial section counter */}
      <span
        className="absolute font-mono font-bold leading-none pointer-events-none select-none"
        style={{ fontSize: "clamp(8rem,22vw,18rem)", color: "rgba(158,123,95,0.06)", bottom: "-4%", left: "2%" }}
        aria-hidden="true"
      >
        01
      </span>

      {/* Right-side fabric seam stripe */}
      <div
        className="absolute top-0 right-0 w-[5px] h-full pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #C4A882, #9E7B5F, #6B4F35)" }}
      />

      {/* S-curve SVG — thicker and more visible on warm background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M-50 400 C200 100, 400 100, 600 400 S1000 700, 1250 400"
          stroke="#9E7B5F"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        {/* Secondary ghost curve for depth */}
        <path
          d="M-50 420 C200 120, 400 120, 600 420 S1000 720, 1250 420"
          stroke="#C9A84C"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>

      {/* Text */}
      <p
        ref={textRef}
        className="relative z-10 font-display italic text-3xl md:text-4xl lg:text-5xl text-center px-6 max-w-4xl"
        style={{ color: "#6B4F35" }}
      >
        {question.split(" ").map((word, i) => (
          <span key={i} className="word inline-block mr-[0.3em] opacity-0">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}
