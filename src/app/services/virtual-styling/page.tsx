"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery Video Call",
    description:
      "We begin with a detailed one-on-one video consultation — typically 60 to 90 minutes — to understand your lifestyle, preferences, body type, colour palette, and style aspirations. This is the foundation of everything that follows.",
  },
  {
    number: "02",
    title: "Digital Wardrobe Review",
    description:
      "You share photographs of your existing wardrobe, and we conduct a thorough audit remotely. We identify what works, what needs tailoring, what can be restyled, and what gaps need filling — all documented in a clear, actionable report.",
  },
  {
    number: "03",
    title: "Personalised Digital Lookbook",
    description:
      "Based on our consultation and wardrobe review, we create a bespoke digital lookbook — a curated collection of outfit combinations, styling tips, and accessory pairings tailored to your daily life, work, and social calendar.",
  },
  {
    number: "04",
    title: "Curated Shopping Links",
    description:
      "We handpick pieces from trusted Indian and international retailers — Tata CLiQ Luxury, Ajio Luxe, Myntra, Net-a-Porter, and more — sending you direct links with sizing guidance so you can shop with confidence from home.",
  },
  {
    number: "05",
    title: "Follow-Up Sessions",
    description:
      "Style is an evolving journey. We schedule follow-up video calls to refine your looks, address new occasions, review purchases, and ensure every addition to your wardrobe earns its place.",
  },
];

const perfectFor = [
  {
    title: "NRIs & Global Indians",
    description:
      "Living abroad but want styling rooted in Indian sensibility? We work across time zones with NRI clients in the US, UK, UAE, Singapore, and beyond — blending global fashion with Indian occasion wear.",
  },
  {
    title: "Clients Outside Delhi NCR",
    description:
      "Whether you are in Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, or Ahmedabad — our virtual service brings Styltwist's expertise directly to you without the need to travel to Gurgaon.",
  },
  {
    title: "Tier-2 & Tier-3 Cities",
    description:
      "Access to luxury personal styling should not be limited by geography. Clients in Jaipur, Chandigarh, Lucknow, Indore, Kochi, and Pune now have a direct line to a dedicated stylist.",
  },
  {
    title: "Busy Professionals",
    description:
      "For executives, entrepreneurs, and professionals with demanding schedules, virtual sessions fit seamlessly into your calendar — no commute, no waiting, just focused styling from wherever you are.",
  },
  {
    title: "Convenience Seekers",
    description:
      "Some clients simply prefer the ease of working from home. Virtual styling offers the same depth and personalisation as our in-person service, delivered entirely through digital channels.",
  },
];

const deliverables = [
  {
    title: "HD Video Consultations",
    description:
      "Face-to-face sessions via Zoom or Google Meet, recorded for your reference. Real-time style guidance with the same warmth and attention as an in-person meeting.",
  },
  {
    title: "Digital Lookbook PDF",
    description:
      "A beautifully designed, high-resolution lookbook with outfit ideas, colour palettes, and styling notes — yours to keep, reference, and revisit whenever you get dressed.",
  },
  {
    title: "Curated Shopping Links",
    description:
      "Handpicked product links from leading Indian e-commerce platforms and select international retailers, complete with size recommendations and styling context.",
  },
  {
    title: "Seasonal Style Guides",
    description:
      "Quarterly updates aligned to Indian seasons and the social calendar — from summer linens and monsoon layering to festive-season ethnic wear and winter tailoring.",
  },
  {
    title: "WhatsApp & Email Access",
    description:
      "Direct stylist access between sessions for quick outfit checks, shopping queries, and last-minute occasion advice. We are a message away when you need us.",
  },
  {
    title: "Outfit-of-the-Day Ideas",
    description:
      "Regular outfit suggestions pushed to your inbox or WhatsApp, built from your own wardrobe and recent purchases — so you never stare at your closet wondering what to wear.",
  },
];

const faqs = [
  {
    question: "Is virtual styling as effective as in-person styling?",
    answer:
      "Absolutely. The core of our work — understanding your lifestyle, building a cohesive wardrobe strategy, and curating looks — translates seamlessly to a virtual format. Many of our long-term clients work with us entirely remotely and find the convenience of digital delivery a significant advantage. The only difference is that we review your wardrobe through photographs rather than in person, and shopping recommendations come as curated links rather than physical pull-outs.",
  },
  {
    question: "What technology do I need for virtual styling?",
    answer:
      "All you need is a smartphone or laptop with a camera, a stable internet connection, and access to Zoom or Google Meet. For the wardrobe review, you will photograph your clothing using your phone camera — we provide simple guidelines to help you capture clear, useful images. No special equipment or technical expertise is required.",
  },
  {
    question: "Can you help me shop online?",
    answer:
      "This is one of the strongest aspects of our virtual service. We curate product links from trusted platforms such as Tata CLiQ Luxury, Ajio Luxe, Myntra, Nykaa Fashion, Pernia's Pop-Up Shop, and select international sites like Net-a-Porter and Mr Porter. Each recommendation comes with specific sizing advice, fabric notes, and suggestions for how the piece fits into your broader wardrobe.",
  },
  {
    question: "Do you work with clients outside India?",
    answer:
      "Yes. We work with NRI clients and global Indians across the United States, United Kingdom, UAE, Singapore, Canada, Australia, and Europe. Sessions are scheduled to accommodate your time zone, and our shopping recommendations are tailored to include retailers that deliver to your location.",
  },
  {
    question: "How do fittings work in a virtual setting?",
    answer:
      "Once your purchases arrive, we schedule a brief video call where you try on each piece and we assess fit, proportions, and styling options together in real time. If alterations are needed, we guide you on exactly what to communicate to your local tailor. This ensures every piece fits as well as if we had been there in the fitting room with you.",
  },
];

export default function VirtualStylingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whatIsRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const perfectForRef = useRef<HTMLDivElement>(null);
  const perfectForCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const deliverablesRef = useRef<HTMLDivElement>(null);
  const deliverablesCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const faqRef = useRef<HTMLDivElement>(null);
  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // What is Virtual Styling
      gsap.fromTo(
        whatIsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whatIsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // How It Works steps stagger
      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        gsap.fromTo(
          step,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: stepsContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Perfect For cards stagger
      perfectForCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: perfectForRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Deliverables cards stagger
      deliverablesCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: deliverablesRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // FAQ items stagger
      faqItemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: faqRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // CTA
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
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
              <Link href="/services" className="hover:text-navy transition-colors">
                Services
              </Link>
              {" / "}Virtual Styling
            </p>
            <h1 className="font-display italic text-4xl md:text-6xl text-navy mb-6">
              Virtual Styling
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Luxury personal styling, delivered to you wherever you are. Whether
              you&apos;re in Mumbai, Bangalore, Dubai, or New York — Styltwist
              brings the same meticulous, personalised styling experience to your
              screen, your inbox, and your wardrobe.
            </p>
          </div>
        </section>

        {/* What is Virtual Styling */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div ref={whatIsRef} className="opacity-0 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <svg
                className="w-24 h-1 mx-auto mb-8"
                viewBox="0 0 96 2"
                fill="none"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="96"
                  y2="1"
                  stroke="#C9A84C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <h2 className="font-display italic text-3xl md:text-5xl text-navy mb-6">
                What is Virtual Styling?
              </h2>
            </div>
            <div className="space-y-6 text-navy/60 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Virtual styling is Styltwist&apos;s remote personal styling
                service — designed for clients who want expert wardrobe guidance
                without the constraints of geography. It is the same considered,
                detail-oriented experience we deliver in person, translated
                thoughtfully into a digital format.
              </p>
              <p>
                Through high-definition video consultations, we sit with you
                face-to-face — discussing your lifestyle, dissecting your current
                wardrobe, and building a strategy for how you want to dress going
                forward. Your stylist then creates a bespoke digital lookbook:
                a curated collection of outfits, colour palettes, and styling
                notes designed specifically around your body, your routine, and
                your ambitions.
              </p>
              <p>
                Online shopping guidance is woven into every engagement. Rather
                than sending you to browse aimlessly, we handpick pieces from
                India&apos;s leading e-commerce platforms — Tata CLiQ Luxury,
                Ajio Luxe, Myntra, Nykaa Fashion, and Pernia&apos;s Pop-Up Shop
                — as well as international retailers where appropriate. Every
                link comes with sizing advice, fabric context, and a note on
                how the piece integrates into your broader wardrobe.
              </p>
              <p>
                The result is a styling experience that is every bit as rich,
                personal, and transformative as having your stylist walk into
                your wardrobe — just delivered through a screen, at a time that
                suits you.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                The Process
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                How It Works
              </h2>
            </div>
            <div ref={stepsContainerRef} className="space-y-6 max-w-3xl mx-auto">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepsRef.current[i] = el;
                  }}
                  className="opacity-0 bg-[#F0F3F9] rounded-card-lg p-8 border border-[#E2E6EF] flex gap-6"
                >
                  <span className="font-mono text-3xl font-light text-champagne shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display italic text-xl md:text-2xl text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-navy/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfect For */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                Who It&apos;s For
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                Perfect For
              </h2>
            </div>
            <div
              ref={perfectForRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {perfectFor.map((item, i) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    perfectForCardsRef.current[i] = el;
                  }}
                  className="opacity-0 bg-white rounded-card-lg p-8 border border-[#E2E6EF]"
                >
                  <h3 className="font-display italic text-xl text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Receive */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <svg
                className="w-24 h-1 mx-auto mb-8"
                viewBox="0 0 96 2"
                fill="none"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="96"
                  y2="1"
                  stroke="#C9A84C"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                Deliverables
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                What You Receive
              </h2>
            </div>
            <div
              ref={deliverablesRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {deliverables.map((item, i) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    deliverablesCardsRef.current[i] = el;
                  }}
                  className="opacity-0 bg-[#F0F3F9] rounded-card-lg p-8 border border-[#E2E6EF]"
                >
                  <h3 className="font-display italic text-xl text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                Common Questions
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                Frequently Asked Questions
              </h2>
            </div>
            <div ref={faqRef} className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    faqItemsRef.current[i] = el;
                  }}
                  className="opacity-0 bg-white rounded-card-lg p-8 border border-[#E2E6EF]"
                >
                  <h3 className="font-display italic text-lg md:text-xl text-navy mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-navy/60 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div ref={ctaRef} className="opacity-0 max-w-3xl mx-auto text-center">
            <svg
              className="w-24 h-1 mx-auto mb-8"
              viewBox="0 0 96 2"
              fill="none"
            >
              <line
                x1="0"
                y1="1"
                x2="96"
                y2="1"
                stroke="#C9A84C"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-6">
              Your stylist is one call away
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-10">
              No matter where you are in India — or the world — Styltwist&apos;s
              virtual styling service brings luxury wardrobe consulting to your
              doorstep. Book a complimentary introductory call and discover what
              intentional, personalised styling can do for you.
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
                className="inline-block font-mono text-sm tracking-widest uppercase text-navy border border-navy/20 px-10 py-4 rounded-pill hover:border-navy/40 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </LenisProvider>
  );
}
