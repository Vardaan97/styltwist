"use client";

import { useState } from "react";
import Link from "next/link";
import {
  contactSchema,
  type ContactFormData,
  serviceOptions,
  contactMethodOptions,
} from "@/lib/validations/contact";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    serviceInterest: "wardrobe-consulting",
    message: "",
    preferredContact: "email",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (res.ok) {
        setSuccess(true);
      }
    } catch {
      setErrors({ fullName: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="w-20 h-20 mx-auto rounded-full bg-champagne/20 flex items-center justify-center shadow-[0_0_40px_rgba(201,168,76,0.3)]">
              <CheckCircle className="w-10 h-10 text-champagne" />
            </div>
            <h2 className="font-display italic text-3xl md:text-4xl text-navy">
              Thank you
            </h2>
            <p className="text-navy/60 max-w-md mx-auto">
              Your style journey is about to begin. We&apos;ll be in touch within 24 hours.
            </p>
            <Link
              href="/"
              className="inline-block font-mono text-xs tracking-widest uppercase text-champagne border border-champagne/30 px-8 py-3 rounded-pill hover:bg-champagne/10 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left side */}
          <div className="lg:w-[40%] flex flex-col justify-center">
            <svg
              className="w-24 h-1 mb-8"
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
            <h1 className="font-display italic text-4xl md:text-5xl text-navy mb-6">
              Let&apos;s start your style journey
            </h1>
            <p className="text-navy/60 text-lg leading-relaxed mb-8">
              Tell us about yourself and what you&apos;re looking for. Every great
              transformation begins with a conversation.
            </p>
            <div className="space-y-4 text-navy/40 text-sm">
              <p>A stylist will reach out within 24 hours</p>
              <p>Initial consultations are complimentary</p>
              <p>No commitment required</p>
            </div>
          </div>

          {/* Right side: form */}
          <div className="lg:w-[60%]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-navy/50 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#F0F3F9] text-navy rounded-card px-5 py-3.5 border border-[#E2E6EF] focus:border-champagne focus:shadow-[0_0_15px_rgba(201,168,76,0.15)] outline-none transition-all"
                  placeholder="Your name"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-navy/50 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-[#F0F3F9] text-navy rounded-card px-5 py-3.5 border border-[#E2E6EF] focus:border-champagne focus:shadow-[0_0_15px_rgba(201,168,76,0.15)] outline-none transition-all"
                  placeholder="you@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-navy/50 mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-[#F0F3F9] text-navy rounded-card px-5 py-3.5 border border-[#E2E6EF] focus:border-champagne focus:shadow-[0_0_15px_rgba(201,168,76,0.15)] outline-none transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service Interest */}
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-navy/50 mb-2">
                  Service Interest *
                </label>
                <select
                  name="serviceInterest"
                  value={form.serviceInterest}
                  onChange={handleChange}
                  className="w-full bg-[#F0F3F9] text-navy rounded-card px-5 py-3.5 border border-[#E2E6EF] focus:border-champagne focus:shadow-[0_0_15px_rgba(201,168,76,0.15)] outline-none transition-all appearance-none"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-white text-navy">
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.serviceInterest && (
                  <p className="text-red-400 text-xs mt-1">{errors.serviceInterest}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-navy/50 mb-2">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-[#F0F3F9] text-navy rounded-card px-5 py-3.5 border border-[#E2E6EF] focus:border-champagne focus:shadow-[0_0_15px_rgba(201,168,76,0.15)] outline-none transition-all resize-none"
                  placeholder="Tell us about your style goals..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Preferred Contact */}
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-navy/50 mb-3">
                  Preferred Contact Method *
                </label>
                <div className="flex gap-6 flex-wrap">
                  {contactMethodOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          form.preferredContact === opt.value
                            ? "border-champagne"
                            : "border-[#E2E6EF] group-hover:border-navy/40"
                        }`}
                      >
                        {form.preferredContact === opt.value && (
                          <div className="w-2 h-2 rounded-full bg-champagne" />
                        )}
                      </div>
                      <input
                        type="radio"
                        name="preferredContact"
                        value={opt.value}
                        checked={form.preferredContact === opt.value}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="text-navy/70 text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
                {errors.preferredContact && (
                  <p className="text-red-400 text-xs mt-1">{errors.preferredContact}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="relative magnetic-btn w-full font-mono text-sm tracking-widest uppercase text-white bg-navy px-8 py-4 rounded-pill hover:scale-[1.03] transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Begin Your Journey"}
                <span className="absolute inset-0 rounded-pill border-2 border-navy animate-[pulse-ring_2s_ease-out_infinite] pointer-events-none" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

