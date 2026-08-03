"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-green text-sm font-semibold uppercase tracking-wider font-mono">
              Get In Touch
            </span>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white mt-3 mb-6">
              Let&apos;s Talk About Your <span className="text-brand-green">IT Needs</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Ready to transform your IT? Whether you&apos;re looking for proactive managed services,
              a security assessment, or strategic consulting — we&apos;re here to help.
              Fill out the form or reach out via phone or email. We serve businesses across Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className="font-heading font-bold text-2xl text-brand-navy mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-brand-green mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-brand-text">
                      15 Dorrie Crescent<br />
                      Moncrieff ACT 2914<br />
                      Australia
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <a href="mailto:info@thekakaduit.au" className="text-brand-text hover:text-brand-green transition-colors">
                      info@thekakaduit.au
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="text-brand-text">
                      <a href="tel:0251144800" className="hover:text-brand-green transition-colors">0251144800</a>
                      <br />
                      <span className="text-sm text-slate-400">Mon–Fri: 7am–7pm, Sat: 8am–4pm</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="h-64 rounded-2xl bg-gray-200 border border-brand-navy/10 flex items-center justify-center">
                <span className="text-brand-text font-medium">Map of Australia — we serve nationwide</span>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-brand-navy mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-brand-navy/10 rounded-lg focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-brand-navy/10 rounded-lg focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-brand-navy/10 rounded-lg focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-brand-navy/10 rounded-lg focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                />
                <select
                  className="w-full px-4 py-3 border border-brand-navy/10 rounded-lg focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>How can we help you?</option>
                  <option>Managed IT Services</option>
                  <option>Cybersecurity</option>
                  <option>Cloud Infrastructure</option>
                  <option>Microsoft 365</option>
                  <option>Business Telephone System (VoIP)</option>
                  <option>Professional Graphics Design</option>
                  <option>Digital Marketing</option>
                  <option>IT Consultation</option>
                </select>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-brand-navy/10 rounded-lg focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-brand-green hover:bg-brand-greenDark text-white font-semibold rounded-lg transition-all hover:shadow-xl hover:shadow-brand-green/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
