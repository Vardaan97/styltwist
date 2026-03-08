"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const occasions = [
  {
    title: "Indian Weddings & Sangeet",
    description:
      "From the mehendi to the reception, we style every function with precision — whether you envision a hand-embroidered lehenga, a regal sherwani, or a contemporary fusion ensemble that bridges tradition and modernity.",
  },
  {
    title: "Corporate Galas & Dinners",
    description:
      "Command the room at formal business events. We craft polished, authoritative looks — tailored suits, statement saris, or refined cocktail dressing — that project confidence without saying a word.",
  },
  {
    title: "Cocktail Parties",
    description:
      "Strike the balance between effortless and elevated. We curate cocktail looks that feel current and polished, with just the right edge to set you apart from the crowd.",
  },
  {
    title: "Award Ceremonies & Red Carpet",
    description:
      "When all eyes are on you, every detail matters. We source show-stopping ensembles and coordinate accessories, hair, and makeup direction for a flawless head-to-toe moment.",
  },
  {
    title: "Festival Celebrations",
    description:
      "Diwali, Eid, Lohri, Navratri — we help you honour the occasion in style. From luxurious ethnic wear to contemporary festive dressing, we ensure you look the part without the last-minute scramble.",
  },
  {
    title: "Destination Events",
    description:
      "Jaipur palace wedding or a Goa beach celebration — we plan your complete event wardrobe around the setting, climate, and dress code so every outfit lands perfectly in context.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Event Brief & Mood Board",
    description:
      "We begin with a detailed consultation to understand the occasion — venue, dress code, cultural context, personal preferences, and the impression you want to make. From here, we build a curated mood board to align on direction.",
  },
  {
    number: "02",
    title: "Outfit Sourcing & Selection",
    description:
      "Drawing on our network of Indian and international designers, boutiques, and ateliers, we source a curated shortlist of options. Whether it is a couture lehenga from a Delhi atelier or a bespoke suit from a Savile Row-trained tailor, we bring the right pieces to you.",
  },
  {
    number: "03",
    title: "Fittings & Alterations Coordination",
    description:
      "We coordinate all fittings and liaise directly with tailors and alteration specialists to ensure every garment fits impeccably. You never have to chase a tailor or worry about timelines — we manage it all.",
  },
  {
    number: "04",
    title: "Accessories & Finishing Touches",
    description:
      "Jewellery, shoes, bags, pocket squares, cufflinks, dupattas — we style the complete look from head to toe. Every accessory is chosen with intention, ensuring cohesion without excess.",
  },
  {
    number: "05",
    title: "Day-of Styling Support",
    description:
      "On the day of the event, we are available to ensure everything comes together seamlessly — from final adjustments to last-minute outfit changes. You simply get dressed and walk in with confidence.",
  },
];

const benefits = [
  {
    title: "Access to Designer Collections",
    description:
      "We maintain relationships with leading Indian couturiers, emerging designers, and established international labels. This gives you access to pieces and appointments that are not always available to walk-in clients.",
  },
  {
    title: "Complete Head-to-Toe Coordination",
    description:
      "We do not stop at the outfit. Jewellery, footwear, bags, hair and makeup direction — every element is considered and curated to create a cohesive, polished look.",
  },
  {
    title: "Alterations Management",
    description:
      "We take the stress out of fittings. From scheduling appointments to overseeing the final stitch, we manage the entire alterations process so every garment fits you perfectly.",
  },
  {
    title: "Day-of Styling Available",
    description:
      "For high-stakes occasions, we offer on-site styling support. We ensure you are camera-ready, handle outfit transitions, and manage last-minute adjustments so you can focus on the event.",
  },
  {
    title: "Works Within Your Budget",
    description:
      "Whether your vision calls for couture or clever high-street styling, we work within your budget to deliver the strongest possible impact. Great style is about curation, not just cost.",
  },
  {
    title: "Culturally Informed Styling",
    description:
      "Indian occasions come with nuance — colour codes, fabric expectations, regional traditions. We understand these cultural layers and style with sensitivity and sophistication, whether it is a South Indian wedding or a Punjabi reception.",
  },
];

const faqs = [
  {
    question: "How far in advance should I book event styling?",
    answer:
      "For weddings and large-scale events, we recommend booking at least six to eight weeks in advance — ideally earlier if couture or custom pieces are involved. For cocktail parties and smaller occasions, two to three weeks is usually sufficient. That said, we have managed last-minute requests when schedules allow, so do reach out regardless of your timeline.",
  },
  {
    question: "Can you source Indian designer wear and couture?",
    answer:
      "Absolutely. We have established relationships with leading Indian designers and couture houses across Delhi, Mumbai, and beyond. Whether you are looking for a Sabyasachi lehenga, a Tarun Tahiliani sari, or an emerging label that is not yet on your radar, we can source and coordinate fittings on your behalf.",
  },
  {
    question: "Do you attend the event with me for day-of styling?",
    answer:
      "Yes, we offer day-of styling as part of our premium event packages. This includes being present to dress you, manage outfit changes, handle steaming and last-minute adjustments, and ensure you look flawless throughout the event. This service is especially popular for multi-day weddings and high-profile appearances.",
  },
  {
    question: "What about accessories and jewellery?",
    answer:
      "Accessories are an integral part of our event styling service. We style the complete look — jewellery (including sourcing statement pieces or coordinating with your family jewellery), shoes, bags, watches, pocket squares, turbans, and dupattas. We also provide direction on hair and makeup to ensure everything works together.",
  },
  {
    question: "Can you style an entire wedding party or group?",
    answer:
      "Yes, we regularly style bridal parties, groomsmen, and family groups for weddings and large celebrations. We ensure a cohesive visual language across the group while honouring individual preferences and comfort. Group packages are available — get in touch to discuss your requirements.",
  },
];

export default function EventStylingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whatIsRef = useRef<HTMLDivElement>(null);
  const occasionsContainerRef = useRef<HTMLDivElement>(null);
  const occasionCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const processRef = useRef<HTMLDivElement>(null);
  const processCardsRef = useRef<(HTMLDivElement | null)[]>([]);
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

      // What is Event Styling
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

      // Occasion cards stagger
      occasionCardsRef.current.forEach((card, i) => {
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
              trigger: occasionsContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

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
              trigger: processRef.current,
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
              {" / "}Event Styling
            </p>
            <h1 className="font-display italic text-4xl md:text-6xl text-navy mb-6">
              Event Styling
            </h1>
            <p className="text-navy/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              When the occasion calls for something extraordinary, settling for
              &ldquo;good enough&rdquo; is not an option. Our event styling service
              ensures you arrive looking exceptional — perfectly dressed for the
              moment, effortlessly confident in every detail.
            </p>
          </div>
        </section>

        {/* What is Event Styling */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div ref={whatIsRef} className="opacity-0 max-w-4xl mx-auto text-center">
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
              What is Event Styling?
            </h2>
            <div className="text-navy/60 text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
              <p>
                Event styling is the art of curating a complete look — outfit,
                accessories, and finishing touches — for a specific occasion. It goes
                far beyond picking a dress or suit off the rack. It is about
                understanding the context of the event, the cultural nuances at play,
                your personal style, and the impression you want to leave behind.
              </p>
              <p>
                India&apos;s social calendar is unlike any other in the world. Wedding
                season alone brings a whirlwind of mehendis, sangeets, haldi
                ceremonies, and receptions — each with its own dress code, mood, and
                expectations. Add to that corporate galas, festival gatherings, cocktail
                evenings, and destination celebrations, and the demand on your wardrobe
                becomes relentless.
              </p>
              <p>
                At Styltwist, we take the pressure out of occasion dressing. Whether you
                need a single statement look for an awards night or an entire wardrobe of
                coordinated outfits for a five-day wedding, we handle every detail — from
                sourcing and fittings to day-of styling — so you can simply show up and
                be present.
              </p>
            </div>
          </div>
        </section>

        {/* Occasions We Style For */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                Every Occasion, Elevated
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                Occasions We Style For
              </h2>
            </div>
            <div
              ref={occasionsContainerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {occasions.map((occasion, i) => (
                <div
                  key={occasion.title}
                  ref={(el) => {
                    occasionCardsRef.current[i] = el;
                  }}
                  className="opacity-0 bg-[#F0F3F9] rounded-card-lg p-8 border border-[#E2E6EF]"
                >
                  <h3 className="font-display italic text-xl md:text-2xl text-navy mb-3">
                    {occasion.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed">
                    {occasion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="bg-[#F0F3F9] py-20 md:py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                From Vision to Reality
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                Our Process
              </h2>
            </div>
            <div ref={processRef} className="space-y-8">
              {processSteps.map((step, i) => (
                <div
                  key={step.number}
                  ref={(el) => {
                    processCardsRef.current[i] = el;
                  }}
                  className="opacity-0 bg-white rounded-card-lg p-8 md:p-10 border border-[#E2E6EF] flex flex-col md:flex-row md:items-start gap-6"
                >
                  <span className="font-mono text-4xl font-light text-champagne shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display italic text-2xl text-navy mb-3">
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

        {/* Why Choose Styltwist */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-champagne mb-4">
                The Styltwist Difference
              </p>
              <h2 className="font-display italic text-3xl md:text-4xl text-navy">
                Why Choose Styltwist for Events
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
                  <h3 className="font-display italic text-xl md:text-2xl text-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed">
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
                  <h3 className="font-display italic text-xl text-navy mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-navy/60 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 md:py-28 px-6">
          <div ref={ctaRef} className="opacity-0 max-w-3xl mx-auto text-center">
            <h2 className="font-display italic text-3xl md:text-4xl text-navy mb-6">
              Your next event deserves a stylist
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-10">
              Tell us about the occasion and we&apos;ll craft a styling plan tailored
              to you — from outfit sourcing to day-of support. Your first
              consultation is complimentary.
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
