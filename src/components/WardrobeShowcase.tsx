"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    alt: "Elegant fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    alt: "Fashion editorial",
  },
  {
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    alt: "Street fashion",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    alt: "Style inspiration",
  },
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    alt: "Curated wardrobe",
  },
];

export default function WardrobeShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
      });

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const total = cards.length;
        const angle = -30 + (i * 60) / (total - 1);
        const spreadX = -300 + (i * 600) / (total - 1);
        const spreadY = Math.abs(angle) * 1.5;

        tl.fromTo(
          card,
          {
            rotation: (i - 2) * 2,
            x: 0,
            y: 0,
          },
          {
            rotation: angle,
            x: spreadX,
            y: spreadY,
            duration: 1,
            ease: "power2.out",
          },
          0
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform += ` perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.4, ease: "power2.out" });
  };

  return (
    <section ref={sectionRef} className="relative py-32 md:py-0 md:h-screen bg-white overflow-hidden">
      <h2 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-navy text-center pt-8 md:pt-24 mb-16">
        Your Wardrobe, Curated
      </h2>

      {/* Mobile: horizontal scroll */}
      <div className="md:hidden flex gap-4 px-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
        {cards.map((card, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-64 h-80 rounded-card-lg overflow-hidden shadow-2xl"
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={256}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Desktop: stacked cards that fan out */}
      <div
        ref={containerRef}
        className="hidden md:flex items-center justify-center h-[60vh]"
      >
        <div className="relative">
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="absolute w-48 lg:w-56 h-64 lg:h-72 rounded-card-lg overflow-hidden shadow-2xl cursor-pointer"
              style={{
                left: "50%",
                top: "50%",
                marginLeft: "-7rem",
                marginTop: "-9rem",
                zIndex: i,
              }}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 224px, 192px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
