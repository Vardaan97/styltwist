"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    title: "Intentional",
    description:
      "Every piece in your wardrobe should earn its place. We help you build a collection that reflects purpose, not impulse — a wardrobe where everything works together and nothing goes to waste.",
  },
  {
    number: "02",
    title: "Personal",
    description:
      "No two style journeys are the same. We listen first, then craft a strategy that honours your individuality, your body, your lifestyle, and your aspirations. Cookie-cutter advice has no place here.",
  },
  {
    number: "03",
    title: "Effortless",
    description:
      "True style looks easy. We design systems and wardrobes that make getting dressed the simplest part of your day — so you can focus on the things that matter most to you.",
  },
  {
    number: "04",
    title: "Inclusive",
    description:
      "Style has no gender, no age limit, and no size requirement. We work with every body, every budget tier, and every aesthetic — from minimalist to maximalist, from boardroom to bohemian.",
  },
];

const milestones = [
  { year: "2024", text: "Styltwist founded in Gurgaon with a vision to make luxury styling accessible across India" },
  { year: "2024", text: "Launched virtual styling to serve clients in Mumbai, Bangalore, Chennai, and beyond" },
  { year: "2025", text: "Expanded service portfolio to include event styling for Indian weddings and corporate galas" },
  { year: "2025", text: "Growing community of clients who dress with intention every single day" },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const journeyRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<(HTMLDivElement | null)[]>([]);
  const differenceRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });

      [storyRef, philosophyRef, differenceRef, founderRef, ctaRef].forEach((ref) => {
        gsap.fromTo(ref.current, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: i * 0.12,
          scrollTrigger: { trigger: valuesRef.current, start: "top 80%", toggleActions: "play none none none" },
        });
      });

      milestonesRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { opacity: 0, x: i % 2 === 0 ? -30 : 30 }, {
          opacity: 1, x: 0, duration: 0.6, ease: "power3.out", delay: i * 0.15,
          scrollTrigger: { trigger: journeyRef.current, start: "top 80%", toggleActions: "play none none none" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <LenisProvider>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-white pt-32 pb-20 px-6">
          <div ref={heroRef} className="opacity-0 max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-6">
              About Styltwist
            </p>
            <h1 className="font-display italic text-4xl md:text-6xl text-navy mb-6">
              Redefining Personal Style in India
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Styltwist is India&apos;s premier luxury wardrobe consulting service, founded in
              Gurgaon with a mission to help individuals dress with confidence, intention, and
              authenticity. We believe that great style isn&apos;t about following trends — it&apos;s
              about understanding who you are.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div ref={storyRef} className="opacity-0 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <svg className="w-24 h-1 mb-8" viewBox="0 0 96 2" fill="none">
                  <line x1="0" y1="1" x2="96" y2="1" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-6">
                  How It All Started
                </h2>
                <p className="text-navy/60 text-lg leading-relaxed mb-4">
                  Styltwist was born from a simple observation: India&apos;s fashion landscape is
                  rich with incredible designers, fabrics, and traditions — yet most people still
                  struggle to put together outfits that feel truly &ldquo;them.&rdquo;
                </p>
                <p className="text-navy/60 text-lg leading-relaxed mb-4">
                  Our founder saw a gap between luxury retail and genuine personal styling. Shopping
                  malls and online stores offer endless options, but very little guidance. Styltwist
                  was created to bridge that gap — to bring the kind of personalised, one-on-one
                  styling experience that was previously reserved for celebrities and fashion insiders
                  to professionals, entrepreneurs, and anyone who values looking and feeling their best.
                </p>
                <p className="text-navy/60 text-lg leading-relaxed">
                  Operating from Gurgaon in the heart of the Delhi NCR region, we now serve clients
                  across India — from Mumbai and Bangalore to Chennai and Hyderabad — through both
                  in-person consultations and our virtual styling service.
                </p>
              </div>
              <div className="bg-white rounded-card-lg p-8 border border-[#E2E6EF]">
                <p className="font-display italic text-2xl md:text-3xl text-navy leading-snug mb-6">
                  &ldquo;Most fashion focuses on trends. We focus on <span className="text-champagne">you</span>.&rdquo;
                </p>
                <p className="text-navy/40 font-mono text-xs tracking-widest uppercase">
                  The Styltwist Philosophy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div ref={philosophyRef} className="opacity-0 max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
              Our Approach
            </p>
            <h2 className="font-display italic text-3xl md:text-5xl text-navy mb-6">
              Fashion is personal, not prescriptive
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              We don&apos;t believe in one-size-fits-all style rules. There are no &ldquo;must-have&rdquo;
              lists or seasonal mandates here. Our philosophy centres on understanding who you are, how
              you live, and what makes you feel confident — then translating that into a wardrobe that
              works effortlessly, every single day.
            </p>
            <p className="text-navy/60 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              Whether you&apos;re a CEO who needs to command a boardroom, a new parent returning to work,
              or someone preparing for Indian wedding season, we craft a style strategy that&apos;s as
              unique as you are. Our approach blends global fashion sensibility with an intimate
              understanding of Indian culture, body types, climate, and lifestyle.
            </p>
            <p className="text-navy/60 text-lg leading-relaxed max-w-3xl mx-auto">
              We work with Indian and international designers, high-street brands, and heritage artisans
              alike — because great style isn&apos;t about price tags. It&apos;s about curation.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                What We Stand For
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                Our Values
              </h2>
            </div>
            <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <div
                  key={value.number}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className="opacity-0 bg-white rounded-card-lg p-8 border border-[#E2E6EF]"
                >
                  <span className="font-mono text-4xl font-light text-champagne">
                    {value.number}
                  </span>
                  <h3 className="font-display italic text-2xl text-navy mt-4 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                Our Journey
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                Building Something Meaningful
              </h2>
            </div>
            <div ref={journeyRef} className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  ref={(el) => { milestonesRef.current[i] = el; }}
                  className="opacity-0 flex items-start gap-6"
                >
                  <span className="font-mono text-sm text-champagne tracking-wider shrink-0 mt-1">
                    {m.year}
                  </span>
                  <div className="flex-1 border-l border-[#E2E6EF] pl-6">
                    <p className="text-navy/60 leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div ref={differenceRef} className="opacity-0 max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <svg className="w-24 h-1 mx-auto mb-8" viewBox="0 0 96 2" fill="none">
                <line x1="0" y1="1" x2="96" y2="1" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-6">
                What Makes Styltwist Different
              </h2>
              <p className="text-navy/60 text-lg leading-relaxed max-w-2xl mx-auto">
                In a world of fast fashion and algorithm-driven recommendations, we offer something
                increasingly rare: genuine human expertise applied to your unique needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Culturally Fluent",
                  text: "We understand the nuances of dressing in India — from office dress codes in Gurgaon to wedding guest attire in Jaipur. We blend Indian and western aesthetics with ease.",
                },
                {
                  title: "Gender-Neutral",
                  text: "Style knows no gender. Our services are designed for everyone — men, women, and non-binary individuals. We celebrate all expressions of personal style.",
                },
                {
                  title: "Relationship-First",
                  text: "We don't do one-off transactions. Every client relationship is built on trust, ongoing dialogue, and a deep understanding of your evolving style needs.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-card-lg p-8 border border-[#E2E6EF]">
                  <h3 className="font-display italic text-xl text-navy mb-3">{item.title}</h3>
                  <p className="text-navy/60 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div ref={founderRef} className="opacity-0 max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-6">
              The Founder
            </p>
            <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-6">
              Built on Passion, Rooted in Gurgaon
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Styltwist was founded by Soumya, whose passion for fashion meets a deep commitment to
              helping people feel confident in their own skin. After years of observing how the right
              outfit can transform not just how someone looks, but how they carry themselves, she set
              out to create a styling service that truly puts the individual first.
            </p>
            <p className="text-navy/60 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
              Operating from Gurgaon, Soumya and the Styltwist team combine an eye for global trends
              with a deep appreciation for Indian craftsmanship and culture. Every consultation is a
              collaboration — we don&apos;t impose a style; we discover yours.
            </p>
            <p className="text-navy/60 text-lg leading-relaxed max-w-2xl mx-auto">
              Today, Styltwist serves clients across India, from busy professionals in Delhi NCR to
              entrepreneurs in Mumbai, tech leaders in Bangalore, and NRIs seeking to reconnect with
              Indian fashion. Every wardrobe we shape tells a story — and we&apos;re just getting started.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div ref={ctaRef} className="opacity-0 max-w-3xl mx-auto text-center">
            <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-6">
              Ready to Redefine Your Style?
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-6">
              Book a complimentary consultation and discover what intentional dressing can do for you.
              Whether you&apos;re in Gurgaon or anywhere in India, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="magnetic-btn inline-block font-mono text-sm tracking-widest uppercase text-white bg-navy px-10 py-4 rounded-pill hover:scale-[1.03] transition-transform duration-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block font-mono text-sm tracking-widest uppercase text-navy border border-navy/20 px-10 py-4 rounded-pill hover:bg-navy/5 transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </LenisProvider>
  );
}
