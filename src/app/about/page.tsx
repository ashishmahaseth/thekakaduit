import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const values = [
    {
      title: "Integrity",
      desc: "We operate with complete transparency. No hidden fees, no jargon — just honest advice and genuine expertise.",
    },
    {
      title: "Innovation",
      desc: "Technology evolves fast. We stay ahead of the curve so your business always has the best tools and strategies.",
    },
    {
      title: "Partnership",
      desc: "We don&apos;t just manage systems — we understand your business goals and align IT to help you achieve them.",
    },
    {
      title: "Excellence",
      desc: "From response times to documentation quality, we hold ourselves to the highest standards in everything we do.",
    },
  ];

  const team = [
    { name: "Ashish Mahaseth", role: "IT Support Engineer", initials: "AM" },
    { name: "Lead Engineer", role: "Senior Systems Architect", initials: "SE" },
    { name: "Project Lead", role: "Technical Project Coordinator", initials: "PL" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider font-mono">
              About Us
            </span>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white mt-3 mb-6">
              Your IT Partner Since 2021
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              The Kakadu IT Solutions was founded with a simple mission: make enterprise-grade IT
              support accessible to Australian businesses of every size.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider font-mono">
                Our Story
              </span>
              <h2 className="font-heading font-bold text-4xl text-white mt-3 mb-6">
                From Canberra Roots to National Reach
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Founded in Canberra, ACT, The Kakadu IT Solutions started as a one-person operation
                  with a big vision: to deliver the kind of IT support that larger enterprises take for
                  granted — but make it accessible to small and medium businesses.
                </p>
                <p>
                  Today, we manage IT infrastructure for 500+ endpoints across multiple client
                  environments. Our team brings together expertise in Microsoft 365, Azure, cybersecurity,
                  and ITIL-aligned service delivery.
                </p>
                <p>
                  We&apos;re proud to be Australian-owned and operated, serving businesses across the ACT
                  and beyond with the same commitment to quality that built our reputation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "500+", label: "Endpoints Managed" },
                { num: "50+", label: "Tickets / Week" },
                { num: "30+", label: "M365 Migrations" },
                { num: "100%", label: "Client Retention" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-brand-navy border border-white/10 text-center">
                  <div className="font-heading font-bold text-3xl text-brand-cyan mb-2">{stat.num}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider font-mono">
              Our Values
            </span>
            <h2 className="font-heading font-bold text-4xl text-white mt-3">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-brand-dark border border-white/10 hover:border-brand-cyan/30 transition-all"
              >
                <h3 className="font-heading font-semibold text-xl text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider font-mono">
              Our Team
            </span>
            <h2 className="font-heading font-bold text-4xl text-white mt-3">
              Meet the Experts
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-2xl bg-brand-navy border border-white/10 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-brand-cyan/20 flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading font-bold text-2xl text-brand-cyan">{member.initials}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-1">{member.name}</h3>
                <p className="text-sm text-brand-cyan">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
