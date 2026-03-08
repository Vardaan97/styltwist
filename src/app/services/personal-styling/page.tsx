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
    title: "Style Profile Assessment",
    description:
      "We begin with an in-depth conversation about your preferences, habits, and aspirations. Through a curated questionnaire and one-on-one discussion, we map out your aesthetic sensibility — from the colours that make you feel alive to the silhouettes that suit your frame. This isn\u2019t a surface-level quiz; it\u2019s a genuine exploration of who you are and how you want to show up in the world.",
  },
  {
    number: "02",
    title: "Lifestyle Analysis",
    description:
      "Your wardrobe should mirror your life, not someone else\u2019s. We study your daily routine, professional demands, social calendar, and travel patterns. Whether you split your week between boardrooms in Cyber City and weekend brunches in Khan Market, or you work remotely and need polished-yet-comfortable options, we design around the reality of how you live.",
  },
  {
    number: "03",
    title: "Lookbook Creation",
    description:
      "Using insights from your profile and lifestyle analysis, we craft a personalised digital lookbook — a visual guide of outfits, pairings, and styling ideas tailored specifically to you. Each lookbook is organised by occasion (work, casual, evening, travel) so you always know exactly what to reach for.",
  },
  {
    number: "04",
    title: "Shopping Guidance",
    description:
      "We take the guesswork out of shopping. Whether we accompany you to select boutiques and stores across Gurgaon and Delhi, or curate an online edit for you to review, every recommendation is intentional. No impulse purchases, no wasted spend — only pieces that earn their place in your wardrobe.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Style isn\u2019t static, and neither is our relationship with you. As seasons change, as your career evolves, as life shifts, we\u2019re here to refine and refresh your wardrobe. Reach out any time for quick outfit advice, packing guidance, or a seasonal wardrobe update.",
  },
];

const deliverables = [
  {
    title: "Personalised Style Profile",
    description:
      "A comprehensive document capturing your colour palette, preferred silhouettes, fabric affinities, and style personality. Consider it your fashion blueprint — a reference you can return to whenever you shop or dress.",
  },
  {
    title: "Curated Lookbooks",
    description:
      "Beautifully designed digital lookbooks with outfit combinations for every context in your life. Updated seasonally, they eliminate decision fatigue and ensure you always look put-together.",
  },
  {
    title: "Shopping Lists",
    description:
      "Targeted, budget-conscious shopping lists that highlight exactly what your wardrobe needs. We specify brands, price points, and alternatives so you can shop with clarity and confidence.",
  },
  {
    title: "Outfit Formulas",
    description:
      "Simple, repeatable outfit templates for every occasion — from Monday morning meetings to Saturday dinner reservations. Mix, match, and never second-guess yourself again.",
  },
  {
    title: "Seasonal Refresh Guidance",
    description:
      "As India\u2019s seasons shift from monsoon layers to winter warmth to summer ease, we help you transition your wardrobe gracefully. Stay current without chasing trends.",
  },
  {
    title: "Priority Stylist Access",
    description:
      "Direct access to your personal stylist via WhatsApp or email. Have a last-minute event? Need a quick opinion on an online find? We\u2019re a message away.",
  },
];

const audiences = [
  {
    title: "Busy Executives",
    description:
      "You have fifteen minutes to get dressed and zero tolerance for a wardrobe that doesn\u2019t work. We build systems so your mornings run on autopilot.",
  },
  {
    title: "Entrepreneurs & Founders",
    description:
      "Your personal brand matters. We help you project authority, creativity, and approachability — whatever your industry demands.",
  },
  {
    title: "Style-Curious Individuals",
    description:
      "You know what you like but struggle to put it together. We bridge the gap between inspiration and execution, turning Pinterest boards into real-life outfits.",
  },
  {
    title: "Anyone Ready to Elevate",
    description:
      "Perhaps you\u2019re entering a new chapter — a new role, a new city, a new phase of life. Personal styling helps you step into it looking and feeling your absolute best.",
  },
];

const faqs = [
  {
    question:
      "How is personal styling different from wardrobe consulting?",
    answer:
      "Wardrobe consulting focuses on your existing wardrobe — auditing, organising, and optimising what you already own. Personal styling goes further, encompassing ongoing outfit guidance, shopping accompaniment, lookbook creation, and day-to-day style support. Think of wardrobe consulting as the foundation and personal styling as the continuing relationship that keeps your style evolving.",
  },
  {
    question: "How often should I work with a personal stylist?",
    answer:
      "It depends on your needs. Some clients prefer an intensive initial engagement followed by seasonal check-ins. Others value ongoing monthly support, especially during transitional periods such as a career change, relocation, or lifestyle shift. We tailor the frequency entirely to your rhythm — there\u2019s no fixed commitment.",
  },
  {
    question: "Do you shop with me or for me?",
    answer:
      "Both options are available. Many clients enjoy the experience of shopping together — we visit curated stores across Gurgaon and Delhi NCR, guiding you through selections in real time. If your schedule is tight, we can also shop on your behalf, presenting pre-selected options for your approval before any purchase is made.",
  },
  {
    question: "What if I don\u2019t know my style?",
    answer:
      "That\u2019s precisely where we excel. Most of our clients come to us feeling uncertain about their style identity, and that\u2019s perfectly normal. Our style profile assessment is designed to uncover preferences you may not even realise you have. By the end of our first session, you\u2019ll have a much clearer picture of the aesthetic that feels authentically yours.",
  },
  {
    question: "Can men use your personal styling service?",
    answer:
      "Absolutely. Styltwist is a gender-neutral styling practice. We work with men, women, and non-binary individuals with equal expertise and enthusiasm. Great style has no gender, and our approach is built on understanding the individual — not fitting you into a predefined mould.",
  },
];

export default function PersonalStylingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whatIsRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const audienceRef = useRef<HTMLDivElement>(null);
  const audienceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const deliverablesRef = useRef<HTMLDivElement>(null);
  const deliverableCardsRef = useRef<(HTMLDivElement | null)[]>([]);
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

      // Who It's For cards
      audienceCardsRef.current.forEach((card, i) => {
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
              trigger: audienceRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Deliverable cards
      deliverableCardsRef.current.forEach((card, i) => {
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

      // FAQ items
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
        <section className="pt-32 pb-20 px-6" style={{ background: "linear-gradient(to bottom, #FDFAF7, #F2E8DF)" }}>
          <div ref={heroRef} className="opacity-0 max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-6">
              <Link href="/services" className="hover:text-navy transition-colors">
                Services
              </Link>{" "}
              / Personal Styling
            </p>
            <h1 className="font-display italic text-4xl md:text-6xl text-navy mb-6">
              Personal Styling
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Your style should feel effortless, intentional, and unmistakably
              yours. Our personal styling service gives you a dedicated stylist
              who understands your life, your goals, and your aesthetic — and
              translates it all into a wardrobe that works every single day.
            </p>
          </div>
        </section>

        {/* What Is Personal Styling */}
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
                What is personal styling?
              </h2>
            </div>
            <div className="space-y-6 text-navy/60 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Personal styling is the art of building a cohesive, expressive
                wardrobe around the life you actually lead. Unlike a one-off
                makeover, it&apos;s an ongoing relationship between you and a
                dedicated stylist who learns your preferences, understands your
                routine, and anticipates your needs before you even voice them.
              </p>
              <p>
                At Styltwist, personal styling encompasses day-to-day outfit
                guidance, curated lookbooks, and hands-on shopping accompaniment.
                We create outfit systems — repeatable, versatile combinations that
                remove decision fatigue from your mornings. Whether you&apos;re
                navigating back-to-back meetings in Cyber City, attending a
                reception in Lutyens&apos; Delhi, or catching a weekend flight to
                Goa, your wardrobe should transition as smoothly as you do.
              </p>
              <p>
                We believe style is deeply personal. It isn&apos;t about following
                trends or replicating magazine covers. It&apos;s about
                understanding the impression you want to make, the comfort you
                need, and the confidence you deserve — then engineering a wardrobe
                that delivers on all three, every day, without effort.
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
                How it works
              </h2>
            </div>
            <div
              ref={stepsContainerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepsRef.current[i] = el;
                  }}
                  className={`opacity-0 bg-[#F0F3F9] rounded-card-lg p-8 border border-[#E2E6EF] ${
                    i === 4 ? "md:col-start-1 lg:col-start-2" : ""
                  }`}
                >
                  <span className="font-mono text-4xl font-light text-champagne">
                    {step.number}
                  </span>
                  <h3 className="font-display italic text-2xl text-navy mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed text-sm">
                    {step.description}
                  </p>
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
              ref={audienceRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {audiences.map((audience, i) => (
                <div
                  key={audience.title}
                  ref={(el) => {
                    audienceCardsRef.current[i] = el;
                  }}
                  className="opacity-0 bg-white rounded-card-lg p-8 border border-[#E2E6EF]"
                >
                  <h3 className="font-display italic text-2xl text-navy mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
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
                What you get
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
                    deliverableCardsRef.current[i] = el;
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
                  <h3 className="font-display italic text-lg md:text-xl text-navy mb-3">
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
              Ready to elevate your everyday style?
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-10">
              Book a complimentary consultation and discover how personal styling
              can transform not just your wardrobe, but the way you feel every
              morning you get dressed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="magnetic-btn inline-block font-mono text-sm tracking-widest uppercase text-white bg-navy px-10 py-4 rounded-pill hover:scale-[1.03] transition-transform duration-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="font-mono text-xs tracking-widest uppercase text-champagne hover:text-navy transition-colors"
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
