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
              Fill out the form or reach out via email. We serve businesses across Australia.
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
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-heading font-bold text-xl text-brand-navy mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/whoisashish/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-text hover:bg-brand-green hover:text-white transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.598 0 .045.547.045 1.218v21.564C.045 23.447.598 24 1.326 24h11.494v-9.304h-3.155V11.4h3.155V8.541c0-3.136 1.894-4.775 4.66-4.775 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.795-.7-1.795-1.763v-2.31h3.587l-.467 3.296h-3.12V24h6.116c.727 0 1.28-.551 1.28-1.218V1.218C23.995.547 23.442 0 22.675 0z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/user_aacis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-text hover:bg-brand-green hover:text-white transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.81.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.81-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 2.88c-3.14 0-3.5 0-4.77.06-1.16.06-1.64.26-1.97.41-.37.17-.67.38-.98.69-.3.32-.52.72-.69 1.09-.15.33-.35.71-.41 1.87-.06 1.27-.07 1.65-.07 4.79s.01 3.52.07 4.79c.06 1.16.26 1.54.41 1.87.17.37.38.67.69.98.32.3.72.52 1.09.69.33.15.71.35 1.87.41 1.27.06 1.65.07 4.79.07s3.52-.01 4.79-.07c1.16-.06 1.54-.26 1.87-.41.37-.17.67-.38.98-.69.3-.32.52-.72.69-1.09.15-.33.35-.71.41-1.87.06-1.27.07-1.65.07-4.79s-.01-3.52-.07-4.79c-.06-1.16-.26-1.54-.41-1.87-.17-.37-.38-.67-.69-.98-.32-.3-.72-.52-1.09-.69-.33-.15-.71-.35-1.87-.41-1.27-.06-1.65-.07-4.79-.07M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-11.17a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/thekakaduit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-text hover:bg-brand-green hover:text-white transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3-1.81-3-1.81 0-2.1 1.41-2.1 2.9v5.67H9.41V9h3.41v1.56h.05c.47-.88 1.62-1.8 3.32-1.8 3.55 0 4.2 2.33 4.2 5.36v6.33zM5.34 7.62a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.07 20.45H3.6V9h3.47v11.45zM22.22 20.45h-3.41V9c0-2.65-.05-6-3.63-6s-4.24 4.24-4.24 6v7.95H3.78V9h3.28V20.45h-.04c.44.12 1 .21 1.6.27v-1.04c.55-.08 1.2-.15 1.83-.15.66 0 1.35.09 1.98.25.67.18 1.28.43 1.83.74V20.45z" />
                    </svg>
                  </a>
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
