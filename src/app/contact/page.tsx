import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
              Let&apos;s Talk About Your{" "}
              <span className="text-brand-green">IT Needs</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Whether you need a full MSP partnership or a one-time project, our team is ready
              to help. Fill out the form and we&apos;ll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-brand-navy/10">
                <h2 className="font-heading font-bold text-2xl text-brand-navy mb-2">
                  Send Us a Message
                </h2>
                <p className="text-brand-text text-sm mb-8">
                  Fill out the form below and our team will get back to you shortly.
                </p>

                <form className="space-y-6" action="https://formspree.io/f/xojgjkgy" method="POST">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-text mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-navy/10 text-brand-navy placeholder-brand-text/50 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-text mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-navy/10 text-brand-navy placeholder-brand-text/50 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all"
                        placeholder="john@company.com.au"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-text mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-navy/10 text-brand-navy placeholder-brand-text/50 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all"
                        placeholder="Your Company Pty Ltd"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-text mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-brand-navy/10 text-brand-navy placeholder-brand-text/50 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all"
                        placeholder="+61 400 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-brand-text mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-brand-navy/10 text-brand-navy focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all"
                    >
                      <option value="">Select a service...</option>
                      <option value="Managed IT Support">Managed IT Support</option>
                      <option value="Microsoft 365">Microsoft 365</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Cloud Infrastructure">Cloud Infrastructure</option>
                      <option value="Active Directory">Active Directory & Identity</option>
                      <option value="Intune & Endpoint">Intune & Endpoint Management</option>
                      <option value="Automation">Automation & Scripting</option>
                      <option value="Network Infrastructure">Network Infrastructure</option>
                      <option value="Other">Other / General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-text mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-brand-navy/10 text-brand-navy placeholder-brand-text/50 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all resize-none"
                      placeholder="Tell us about your IT needs, challenges, or project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-greenDark transition-all hover:shadow-xl hover:shadow-brand-green/20"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Office */}
              <div className="p-8 rounded-2xl bg-gray-50 border border-brand-navy/10">
                <h3 className="font-heading font-semibold text-lg text-brand-navy mb-6">
                  Our Office
                </h3>
                <div className="space-y-4 text-sm text-brand-text">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>
                      15 Dorrie Crescent<br />
                      Moncrieff ACT 2914<br />
                      Canberra, Australia
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <a href="mailto:info@thekakaduit.au" className="hover:text-brand-green transition-colors">
                      info@thekakaduit.au
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:0251144800" className="hover:text-brand-green transition-colors">
                      0251144800
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Mon–Fri: 8:00 AM – 6:00 PM AEST</span>
                  </div>
                </div>
              </div>

              {/* Google Reviews */}
              <div className="p-8 rounded-2xl bg-gray-50 border border-brand-navy/10">
                <h3 className="font-heading font-semibold text-lg text-brand-navy mb-4">
                  Client Reviews
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-brand-navy/10 flex items-center justify-center">
                    <svg className="w-7 h-7" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.3v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l2.85 2.22c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-brand-text mt-1">5.0 rating · 24+ reviews</div>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-brand-green text-sm font-medium hover:text-brand-greenDark transition-colors"
                >
                  Read our Google Reviews
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Quick Links */}
              <div className="p-8 rounded-2xl bg-gray-50 border border-brand-navy/10">
                <h3 className="font-heading font-semibold text-lg text-brand-navy mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {[
                    { href: "/services", label: "All Services" },
                    { href: "/projects", label: "Our Projects" },
                    { href: "/blog", label: "IT Insights" },
                    { href: "/about", label: "About Us" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between p-3 rounded-lg bg-white border border-brand-navy/5 text-sm text-brand-text hover:text-brand-green hover:border-brand-green/30 transition-all"
                    >
                      {link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
