import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support Coverage" },
    { number: "15+", label: "Years Experience" },
  ];

  const services = [
    {
      title: "Managed IT Support",
      description:
        "Comprehensive 24/7 IT management for your business. We monitor, maintain, and optimize your IT infrastructure so you can focus on growth.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "Microsoft 365",
      description:
        "Complete Microsoft 365 deployment, migration, and management. From Exchange to Teams, we ensure your collaboration tools run flawlessly.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your business with enterprise-grade security. Endpoint protection, firewall management, threat detection, and compliance frameworks.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Azure and hybrid cloud architecture designed for reliability, scalability, and cost-efficiency. We build the foundation for your digital future.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      quote: "The Kakadu IT transformed our IT operations. Their proactive approach means we rarely even think about IT — it just works.",
      author: "Sarah Chen",
      role: "CFO, Canberra Business Group",
      rating: 5,
    },
    {
      quote: "Professional, responsive, and deeply knowledgeable. They managed our Microsoft 365 migration with zero downtime.",
      author: "Michael Torres",
      role: "Operations Manager, TechStart Canberra",
      rating: 5,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
            Canberra&apos;s Trusted IT Partner
          </div>

          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight max-w-5xl mx-auto">
            Empowering Businesses Through{" "}
            <span className="text-brand-cyan">Innovation</span> &{" "}
            <span className="text-brand-gold">Expertise</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            The Kakadu IT Solutions delivers end-to-end managed IT services, cloud infrastructure,
            cybersecurity, and Microsoft 365 solutions for Australian businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-cyan text-brand-navy font-semibold rounded-lg hover:bg-brand-cyan-dark transition-all hover:shadow-xl hover:shadow-brand-cyan/20"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:border-brand-cyan hover:text-brand-cyan transition-all"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-brand-cyan mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider font-mono">
              What We Do
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-3 mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              From day-to-day support to strategic cloud architecture, we provide the full spectrum
              of IT services your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-brand-navy border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-cyan/5"
              >
                <div className="w-16 h-16 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6 group-hover:bg-brand-cyan group-hover:text-brand-navy transition-all">
                  {service.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="text-brand-cyan text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider font-mono">
                Why The Kakadu IT
              </span>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-3 mb-6">
                Your IT Partner,{" "}
                <span className="text-brand-cyan">Not Just a Vendor</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We don&apos;t just fix problems — we prevent them. Our proactive approach means
                your systems stay secure, compliant, and running at peak performance.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Proactive Monitoring",
                    desc: "24/7 system monitoring with real-time alerts. We catch issues before they impact your business.",
                  },
                  {
                    title: "Australian Based Support",
                    desc: "Local team, local knowledge. No overseas call centers — you speak directly to engineers who understand your environment.",
                  },
                  {
                    title: "Security First",
                    desc: "ISO 27001 aligned practices. We build security into every layer of your IT infrastructure.",
                  },
                  {
                    title: "Scalable Solutions",
                    desc: "From 10 to 500+ users, our solutions grow with your business. Flexible, future-proof technology.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - testimonial / trust card */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-brand-dark border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed italic">
                  &ldquo;The Kakadu IT transformed our IT operations. Their proactive approach means
                  we rarely even think about IT — it just works.&rdquo;
                </p>
                <div>
                  <div className="font-heading font-semibold text-white">Sarah Chen</div>
                  <div className="text-sm text-slate-400">CFO, Canberra Business Group</div>
                </div>
              </div>

              {/* Google Reviews placeholder */}
              <div className="p-6 rounded-2xl bg-brand-navy border border-white/10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.3v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l2.85 2.22c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-heading font-semibold text-white">Google Reviews</div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-slate-300">5.0 · 24 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider font-mono">
              Testimonials
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mt-3">
              Trusted by Canberra Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="p-8 rounded-2xl bg-brand-navy border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-heading font-semibold text-white">{t.author}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-brand-gold/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
            Ready to Transform Your IT?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Join 500+ Australian businesses that trust The Kakadu IT Solutions for their
            technology infrastructure. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-cyan text-brand-navy font-semibold rounded-lg hover:bg-brand-cyan-dark transition-all hover:shadow-xl hover:shadow-brand-cyan/20"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+61251144800"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:border-brand-cyan hover:text-brand-cyan transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
