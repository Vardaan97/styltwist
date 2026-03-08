"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { LogoStacked } from "@/components/logos/StyltwistLogos";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      linesRef.current.forEach((line, i) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            delay: i * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} className="relative bg-[#FAFAF8] border-t border-champagne py-16 md:py-20 px-6">
      {/* Mocha gradient top strip */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(to right, #C9A84C, #9E7B5F, #6B4F35)" }} />
      <div className="max-w-7xl mx-auto">
        {/* 4-column grid */}
        <div
          ref={(el) => { linesRef.current[0] = el; }}
          className="opacity-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {/* Brand column */}
          <div className="space-y-4">
            <div style={{ width: "120px", height: "40px" }}>
              <LogoStacked className="w-full h-full" />
            </div>
            <p className="text-navy/50 text-sm leading-relaxed">
              Redefining personal style since 2024
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/styltwist/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-navy/40 hover:text-champagne transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-navy/40 hover:text-champagne transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 1 1 8 0c0 2.5-1.5 4-3 6l-1 4" />
                  <path d="M12 12l-2 6" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/styltwist/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-navy/40 hover:text-champagne transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="space-y-4">
            <p className="font-mono text-xs tracking-widest uppercase text-navy font-semibold">
              Services
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "Wardrobe Consulting", href: "/services/wardrobe-consulting" },
                { label: "Personal Styling", href: "/services/personal-styling" },
                { label: "Event Styling", href: "/services/event-styling" },
                { label: "Virtual Styling", href: "/services/virtual-styling" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-navy/50 text-sm hover:text-champagne transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="space-y-4">
            <p className="font-mono text-xs tracking-widest uppercase text-navy font-semibold">
              Company
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-navy/50 text-sm hover:text-champagne transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <p className="font-mono text-xs tracking-widest uppercase text-navy font-semibold">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-navy/40 mt-0.5 shrink-0" />
                <span className="text-navy/50 text-sm">Gurgaon, Haryana, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-navy/40 mt-0.5 shrink-0" />
                <a
                  href="mailto:soumyastyltwist@gmail.com"
                  className="text-navy/50 text-sm hover:text-champagne transition-colors"
                >
                  soumyastyltwist@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-navy/40 mt-0.5 shrink-0" />
                <a href="tel:+917048959604" className="text-navy/50 text-sm hover:text-champagne transition-colors">+91 704-8959-604</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          ref={(el) => { linesRef.current[1] = el; }}
          className="opacity-0 mt-14 pt-8 border-t border-[#E2E6EF] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-xs text-navy/30 tracking-wider">
            &copy; {new Date().getFullYear()} Styltwist. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="font-mono text-xs text-navy/30 hover:text-champagne transition-colors tracking-wider"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="font-mono text-xs text-navy/30 hover:text-champagne transition-colors tracking-wider"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
