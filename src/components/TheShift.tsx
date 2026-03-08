"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TheShift() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
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
      style={{ background: "linear-gradient(to bottom, #FFFFFF, #F8F5F0)" }}
    >
      {/* S-curve SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          ref={pathRef}
          d="M-50 400 C200 100, 400 100, 600 400 S1000 700, 1250 400"
          stroke="#C9A84C"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>

      {/* Text */}
      <p
        ref={textRef}
        className="relative z-10 font-display italic text-3xl md:text-4xl lg:text-5xl text-champagne text-center px-6 max-w-4xl"
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
