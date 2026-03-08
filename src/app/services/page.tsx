"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Wardrobe Consulting",
    slug: "wardrobe-consulting",
    tagline: "Transform your closet into a curated collection",
    description:
      "A complete wardrobe audit and transformation. We assess every piece you own, identify gaps, and build a cohesive collection that aligns with your lifestyle and goals. From decluttering to capsule wardrobe building, we help you make the most of what you have — and know exactly what to add.",
    features: ["Full wardrobe audit", "Capsule wardrobe building", "Gap analysis & shopping plan", "Seasonal refresh guidance"],
  },
  {
    number: "02",
    title: "Personal Styling",
    slug: "personal-styling",
    tagline: "Effortless style, every single day",
    description:
      "Day-to-day style guidance tailored to your routine. From boardroom presentations to weekend brunches, we create versatile outfit systems that make getting dressed effortless. You'll receive personalised lookbooks, outfit formulas, and shopping guidance — all designed around your body, your budget, and your life.",
    features: ["Personalised style profile", "Curated lookbooks", "Shopping accompaniment", "Outfit formulas for every occasion"],
  },
  {
    number: "03",
    title: "Event Styling",
    slug: "event-styling",
    tagline: "Make every entrance unforgettable",
    description:
      "Look extraordinary for weddings, galas, corporate events, and special occasions. We curate complete head-to-toe looks — from outfits and accessories to hair and makeup direction — that make a statement while staying true to who you are. Whether it's Indian wedding season or a black-tie gala, we've got you covered.",
    features: ["Indian wedding & sangeet styling", "Corporate event dressing", "Accessories & jewellery coordination", "Day-of styling support"],
  },
  {
    number: "04",
    title: "Virtual Styling",
    slug: "virtual-styling",
    tagline: "Luxury styling from anywhere in India",
    description:
      "The same personalised experience, delivered through video consultations and curated digital lookbooks. Perfect for clients outside Gurgaon, busy professionals, or anyone who prefers the convenience of remote styling. We serve clients across India — from Mumbai and Bangalore to Chennai and beyond.",
    features: ["HD video consultations", "Digital lookbook PDFs", "Curated online shopping links", "WhatsApp stylist access"],
  },
];

const stats = [
  { number: "100+", label: "Wardrobes Transformed" },
  { number: "4", label: "Styling Services" },
  { number: "24hr", label: "Response Time" },
  { number: "Pan-India", label: "Service Coverage" },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const processRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });

      statsItemsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.5, ease: "power3.out", delay: i * 0.1,
          scrollTrigger: { trigger: statsRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: i * 0.15,
          scrollTrigger: { trigger: cardsContainerRef.current, start: "top 80%", toggleActions: "play none none none" },
        });
      });

      [processRef, pricingRef, ctaRef].forEach((ref) => {
        gsap.fromTo(ref.current, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
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
        <section className="pt-32 pb-16 px-6" style={{ background: "linear-gradient(to bottom, #FDFAF7, #F2E8DF)" }}>
          <div ref={heroRef} className="opacity-0 max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-6">
              What We Offer
            </p>
            <h1 className="font-display italic text-4xl md:text-6xl text-navy mb-6">
              Styling Services Tailored to You
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              From complete wardrobe transformations to event-ready looks, Styltwist offers a range of
              luxury personal styling services designed for professionals, entrepreneurs, and anyone
              who values dressing with intention. Based in Gurgaon, serving clients across India.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 px-6 border-y border-[#E2E6EF]" style={{ background: "#F2E8DF" }}>
          <div ref={statsRef} className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                ref={(el) => { statsItemsRef.current[i] = el; }}
                className="opacity-0 text-center"
              >
                <p className="font-display italic text-3xl md:text-4xl text-navy mb-1">{stat.number}</p>
                <p className="font-mono text-[10px] tracking-widest uppercase text-navy/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <svg className="w-24 h-1 mx-auto mb-8" viewBox="0 0 96 2" fill="none">
                <line x1="0" y1="1" x2="96" y2="1" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-4">
                Our Services
              </h2>
              <p className="text-navy/60 max-w-xl mx-auto">
                Each service is designed to meet you where you are and take your style to the next level.
              </p>
            </div>
            <div ref={cardsContainerRef} className="space-y-8">
              {services.map((service, i) => (
                <div
                  key={service.number}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className="opacity-0 bg-[#F0F3F9] rounded-card-lg p-8 md:p-10 border border-[#E2E6EF] flex flex-col lg:flex-row gap-8"
                >
                  <div className="lg:w-[60%]">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-mono text-4xl font-light text-champagne">
                        {service.number}
                      </span>
                      <p className="font-mono text-[10px] tracking-widest uppercase text-navy/40">
                        {service.tagline}
                      </p>
                    </div>
                    <h3 className="font-display italic text-2xl md:text-3xl text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-navy/60 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="font-mono text-xs tracking-widest uppercase text-champagne hover:text-navy transition-colors inline-flex items-center gap-2"
                    >
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                  <div className="lg:w-[40%]">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-navy/30 mb-4">
                      Includes
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-champagne shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-navy/60 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div ref={processRef} className="opacity-0 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                How It Works
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-4">
                Your Style Journey in Four Steps
              </h2>
              <p className="text-navy/60 max-w-xl mx-auto">
                Every Styltwist engagement follows a proven process designed to deliver lasting results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { step: "01", title: "Consult", text: "Book a complimentary consultation. We discuss your lifestyle, goals, challenges, and aspirations to understand exactly what you need." },
                { step: "02", title: "Profile", text: "We build your personal style profile — analysing your body type, colour palette, lifestyle needs, and existing wardrobe to create a clear strategy." },
                { step: "03", title: "Curate", text: "Your stylist crafts personalised recommendations — whether that's a wardrobe edit, lookbook, shopping list, or complete outfit coordination." },
                { step: "04", title: "Deliver", text: "You receive your curated style solution with ongoing support. We're here for seasonal refreshes, special events, and everything in between." },
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-card-lg p-8 border border-[#E2E6EF]">
                  <span className="font-mono text-3xl font-light text-champagne">{item.step}</span>
                  <h3 className="font-display italic text-xl text-navy mt-3 mb-3">{item.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div ref={pricingRef} className="opacity-0 max-w-3xl mx-auto text-center">
            <svg className="w-24 h-1 mx-auto mb-8" viewBox="0 0 96 2" fill="none">
              <line x1="0" y1="1" x2="96" y2="1" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-6">
              Pricing Tailored to You
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-4">
              Every style journey is unique, so our pricing reflects that. We don&apos;t believe in
              rigid packages — instead, we craft a personalised proposal based on your specific needs,
              timeline, and goals.
            </p>
            <p className="text-navy/60 text-lg leading-relaxed">
              Book a complimentary consultation to discuss your needs. There&apos;s no commitment
              required, and your first conversation with us is always free.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div ref={ctaRef} className="opacity-0 max-w-3xl mx-auto text-center">
            <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-6">
              Let&apos;s Begin Your Transformation
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-10">
              Your first consultation is on us. Tell us about your style goals and we&apos;ll
              take it from there — whether you&apos;re in Gurgaon or anywhere across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="magnetic-btn inline-block font-mono text-sm tracking-widest uppercase text-white bg-navy px-10 py-4 rounded-pill hover:scale-[1.03] transition-transform duration-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/about"
                className="inline-block font-mono text-sm tracking-widest uppercase text-navy border border-navy/20 px-10 py-4 rounded-pill hover:bg-navy/5 transition-colors duration-300"
              >
                About Styltwist
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </LenisProvider>
  );
}
