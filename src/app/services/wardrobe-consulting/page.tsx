"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a detailed conversation about your lifestyle, professional demands, personal preferences, and style aspirations. This is where we learn what makes you feel most like yourself — and where the gaps in your current wardrobe might lie. Whether you are a corporate professional navigating boardroom dressing or a creative seeking a more refined personal aesthetic, this first conversation sets the foundation for everything that follows.",
  },
  {
    number: "02",
    title: "Wardrobe Audit",
    description:
      "Our stylist visits your home (or connects virtually) to go through every piece in your closet. We assess fit, condition, relevance, and versatility. You will be surprised how many outfits are hiding in plain sight — pieces you have forgotten about, combinations you have never tried. We catalogue what works beautifully, what needs tailoring, and what no longer serves your current chapter.",
  },
  {
    number: "03",
    title: "Decluttering & Organisation",
    description:
      "With your approval, we help you part with pieces that no longer align with your lifestyle or goals. This is never about discarding for the sake of minimalism — it is about creating space for what truly matters. We organise your wardrobe by category, colour, and occasion so that getting dressed becomes intuitive and enjoyable rather than stressful.",
  },
  {
    number: "04",
    title: "Gap Analysis",
    description:
      "Once we understand what you have, we identify what is missing. Perhaps you need versatile layering pieces for Gurgaon winters, or breathable fabrics that transition from office to evening during Delhi summers. We create a prioritised list of additions that will multiply your outfit options without unnecessary spending.",
  },
  {
    number: "05",
    title: "Shopping Plan & Sourcing",
    description:
      "We develop a curated shopping plan tailored to your budget, sourcing from the best Indian designers, high-street brands, and international labels. Whether it is a handloom sari from a master weaver or a perfectly cut blazer from a Mumbai atelier, every recommendation is intentional. We handle the research so you only see options that are right for you.",
  },
];

const benefits = [
  {
    title: "Save Time",
    description:
      "Stop spending mornings staring at a full closet with nothing to wear. A consulted wardrobe means every piece works, and getting dressed takes minutes, not anxiety.",
  },
  {
    title: "Reduce Decision Fatigue",
    description:
      "When your wardrobe is organised with purpose, daily outfit decisions become effortless. You free up mental energy for the things that truly matter in your day.",
  },
  {
    title: "Maximise Your Existing Wardrobe",
    description:
      "Most people wear only 20% of what they own. We unlock the other 80% through fresh combinations, minor alterations, and a clearer understanding of what you already have.",
  },
  {
    title: "Build a Cohesive Capsule Collection",
    description:
      "We help you curate a capsule wardrobe where every piece complements the rest. Fewer items, more outfits — a philosophy that is both sustainable and deeply satisfying.",
  },
  {
    title: "Shop Smarter",
    description:
      "With a clear understanding of your wardrobe gaps, every purchase becomes intentional. No more impulse buys that sit unworn. Every rupee spent earns its place in your closet.",
  },
  {
    title: "Feel Confident Daily",
    description:
      "When you know you look good, you carry yourself differently. Our clients consistently tell us that the biggest transformation is not their wardrobe — it is how they feel walking out the door.",
  },
];

const idealClients = [
  {
    title: "Busy Professionals",
    description:
      "Executives, entrepreneurs, and leaders who want to look polished without spending hours on outfit planning. Your schedule is demanding — your wardrobe should not add to the pressure.",
  },
  {
    title: "New Parents Returning to Work",
    description:
      "Your body, lifestyle, and priorities may have shifted. We help you rebuild a wardrobe that honours who you are now, ensuring you step back into the professional world with confidence and ease.",
  },
  {
    title: "Career Changers",
    description:
      "Moving from corporate to creative, or vice versa? A new chapter deserves a wardrobe that reflects your evolution. We bridge the gap between where you have been and where you are headed.",
  },
  {
    title: "Anyone Feeling Overwhelmed",
    description:
      "If your closet gives you more stress than joy, this service is for you. Whether you have too many clothes or too few that feel right, we bring clarity, organisation, and a renewed sense of personal style.",
  },
];

const faqs = [
  {
    question: "How long does a wardrobe consultation take?",
    answer:
      "A full wardrobe consulting engagement typically spans two to four sessions over two to three weeks. The initial consultation is about 60 to 90 minutes. The wardrobe audit and organisation can take three to five hours depending on the size of your closet. We pace the process comfortably — there is no rush, and we work around your schedule.",
  },
  {
    question: "Do you work with all budgets?",
    answer:
      "Absolutely. Wardrobe consulting is not about spending more — it is about spending wisely. We work with a range of budgets and tailor our sourcing recommendations accordingly. Whether you prefer high-street brands, Indian designer labels, or a thoughtful mix of both, we find the best options within your comfort zone.",
  },
  {
    question: "Do I need to buy new clothes?",
    answer:
      "Not necessarily. Many of our clients are pleasantly surprised to discover that their existing wardrobe holds far more potential than they realised. Our audit often reveals hidden combinations and forgotten pieces. New purchases are only recommended to fill genuine gaps — and always within your budget.",
  },
  {
    question: "Can you help me build a capsule wardrobe?",
    answer:
      "Yes, capsule wardrobe creation is one of the most popular outcomes of our wardrobe consulting service. We help you identify a core collection of versatile, high-quality pieces that mix and match seamlessly. The result is a smaller, smarter wardrobe that offers more outfit options than a closet three times its size.",
  },
  {
    question: "Do you offer virtual wardrobe consultations?",
    answer:
      "We do. While we are based in Gurgaon and love working with clients in person across Delhi-NCR, we also offer comprehensive virtual wardrobe consulting for clients anywhere in India. Through video sessions, photo reviews, and curated digital recommendations, we deliver the same personalised experience remotely.",
  },
];

export default function WardrobeConsultingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whatIsRef = useRef<HTMLDivElement>(null);
  const processContainerRef = useRef<HTMLDivElement>(null);
  const processCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const whoRef = useRef<HTMLDivElement>(null);
  const whoCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const benefitsContainerRef = useRef<HTMLDivElement>(null);
  const benefitCardsRef = useRef<(HTMLDivElement | null)[]>([]);
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

      // What Is section
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

      // Process cards stagger
      processCardsRef.current.forEach((card, i) => {
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
              trigger: processContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Who cards stagger
      whoCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: whoRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Benefit cards stagger
      benefitCardsRef.current.forEach((card, i) => {
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
              trigger: benefitsContainerRef.current,
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
              <span className="mx-2 text-navy/30">/</span>
              Wardrobe Consulting
            </p>
            <h1 className="font-display italic text-4xl md:text-6xl text-navy mb-6">
              Wardrobe Consulting
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A complete wardrobe transformation — from audit to action. We help you
              rediscover what you own, release what no longer serves you, and build a
              closet that works as hard as you do. Based in Gurgaon, serving
              discerning clients across India.
            </p>
          </div>
        </section>

        {/* What Is Wardrobe Consulting */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div ref={whatIsRef} className="opacity-0 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <svg className="w-24 h-1 mx-auto mb-8" viewBox="0 0 96 2" fill="none">
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
                What is wardrobe consulting?
              </h2>
            </div>
            <div className="space-y-6 text-navy/60 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Wardrobe consulting is a deeply personal service that goes far beyond
                organising your closet. It is the art of understanding your life — your
                routines, your ambitions, your comfort zones, and your aspirations — and
                translating all of that into a wardrobe that genuinely supports who you
                are and who you are becoming.
              </p>
              <p>
                At Styltwist, we approach wardrobe consulting as a collaborative journey.
                We do not impose trends or dictate what you should wear. Instead, we
                listen, observe, and guide. Our process begins with understanding the full
                picture: your daily schedule, the climates you navigate (from
                air-conditioned offices to humid Delhi summers), the occasions you dress
                for, and the image you want to project to the world.
              </p>
              <p>
                The result is not just a tidier closet. It is a curated, intentional
                collection of clothing and accessories that makes getting dressed one of
                the most effortless and enjoyable parts of your day. Whether you need a
                streamlined capsule wardrobe for everyday ease or a comprehensive
                overhaul that touches every shelf and hanger, our wardrobe consulting
                service is designed to bring lasting clarity and confidence to your
                personal style.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                How It Works
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                What to Expect
              </h2>
            </div>
            <div
              ref={processContainerRef}
              className="space-y-6"
            >
              {processSteps.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el) => {
                    processCardsRef.current[i] = el;
                  }}
                  className="opacity-0 bg-[#F0F3F9] rounded-card-lg p-8 md:p-10 border border-[#E2E6EF] flex flex-col md:flex-row md:items-start gap-6"
                >
                  <span className="font-mono text-4xl font-light text-champagne shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display italic text-2xl md:text-3xl text-navy mb-3">
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

        {/* Who It's For */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                Is This For You?
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                Who it&apos;s for
              </h2>
            </div>
            <div
              ref={whoRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {idealClients.map((client, i) => (
                <div
                  key={client.title}
                  ref={(el) => {
                    whoCardsRef.current[i] = el;
                  }}
                  className="opacity-0 bg-white rounded-card-lg p-8 border border-[#E2E6EF]"
                >
                  <h3 className="font-display italic text-2xl text-navy mb-3">
                    {client.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <svg className="w-24 h-1 mx-auto mb-8" viewBox="0 0 96 2" fill="none">
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
                The Impact
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                Why invest in wardrobe consulting
              </h2>
            </div>
            <div
              ref={benefitsContainerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  ref={(el) => {
                    benefitCardsRef.current[i] = el;
                  }}
                  className="opacity-0 bg-[#F0F3F9] rounded-card-lg p-8 border border-[#E2E6EF]"
                >
                  <h3 className="font-display italic text-xl text-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed text-sm">
                    {benefit.description}
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
                Frequently asked questions
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
                  <h3 className="font-display italic text-xl text-navy mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-navy/60 leading-relaxed">
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
            <svg className="w-24 h-1 mx-auto mb-8" viewBox="0 0 96 2" fill="none">
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
              Ready to transform your wardrobe?
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-10">
              Your first consultation is complimentary. Tell us about your wardrobe
              challenges and style goals, and we&apos;ll craft a personalised plan to
              bring clarity, confidence, and joy back to your closet.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="magnetic-btn inline-block font-mono text-sm tracking-widest uppercase text-white bg-navy px-10 py-4 rounded-pill hover:scale-[1.03] transition-transform duration-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block font-mono text-xs tracking-widest uppercase text-champagne hover:text-navy transition-colors px-6 py-4"
              >
                View All Services &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </LenisProvider>
  );
}
