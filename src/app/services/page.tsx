import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    id: "managed-it",
    title: "Managed IT Support",
    tagline: "Your outsourced IT department",
    description:
      "We provide 24/7 proactive monitoring, help desk support, and comprehensive IT management for businesses of all sizes. Think of us as your dedicated IT team — without the overhead.",
    features: [
      "24/7 Help Desk & Remote Support",
      "Server & Network Monitoring",
      "Patch Management & Updates",
      "Backup & Disaster Recovery",
      "Asset Management & Procurement",
      "SLA-backed Response Times",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    id: "microsoft-365",
    title: "Microsoft 365",
    tagline: "Collaboration without boundaries",
    description:
      "From initial migration to ongoing administration, we ensure your Microsoft 365 environment is secure, optimized, and delivering maximum productivity for your team.",
    features: [
      "Tenant Setup & Configuration",
      "Email Migration (Exchange Online)",
      "SharePoint & OneDrive Management",
      "Teams Deployment & Policies",
      "License Optimization",
      "User Provisioning & Offboarding",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Protect what matters most",
    description:
      "In an era of increasing threats, robust security isn&apos;t optional. We implement layered defense strategies aligned with ISO 27001 principles.",
    features: [
      "Endpoint Protection (Defender)",
      "Firewall & Network Security",
      "Email Security & Anti-Phishing",
      "Multi-Factor Authentication Rollout",
      "Security Audits & Compliance",
      "Incident Response & Remediation",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    tagline: "Scalable, resilient, cost-effective",
    description:
      "We design and manage Azure and hybrid cloud environments that are optimized for performance, security, and cost — tailored to your business needs.",
    features: [
      "Azure Architecture & Migration",
      "Hybrid Cloud Design",
      "Cost Optimization & FinOps",
      "Infrastructure as Code",
      "Disaster Recovery Planning",
      "Performance Monitoring",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    id: "active-directory",
    title: "Active Directory & Identity",
    tagline: "Secure identity management",
    description:
      "User provisioning, group policy, conditional access, and identity lifecycle management for on-prem AD and Azure AD/Entra ID environments.",
    features: [
      "User Lifecycle Management",
      "Group Policy & OU Design",
      "Conditional Access Policies",
      "Entra ID (Azure AD) Administration",
      "SSO & MFA Implementation",
      "Identity Audit & Compliance",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: "intune-mdm",
    title: "Intune & Endpoint Management",
    tagline: "Zero-touch device deployment",
    description:
      "Streamline device management with Microsoft Intune. From enrollment to compliance, we manage the full lifecycle of your endpoints.",
    features: [
      "Intune Tenant Configuration",
      "Windows Autopilot Deployment",
      "Compliance Policy Design",
      "App Deployment & Protection",
      "Device Enrollment Automation",
      "Endpoint Analytics & Reporting",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "automation",
    title: "Automation & Scripting",
    tagline: "Eliminate repetitive tasks",
    description:
      "PowerShell, Power Automate, and Azure Logic Apps to automate your IT workflows — from user onboarding to compliance reporting.",
    features: [
      "PowerShell Automation Scripts",
      "Power Automate Workflows",
      "Azure Logic Apps Integration",
      "Scheduled Task Automation",
      "Reporting Dashboards",
      "Custom API Integrations",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "network-infrastructure",
    title: "Network Infrastructure",
    tagline: "Reliable connectivity, always",
    description:
      "Network design, implementation, and management ensuring your business stays connected, secure, and performing at its best.",
    features: [
      "Network Design & Cabling",
      "WiFi & Wireless Solutions",
      "VPN & Remote Access",
      "Firewall Configuration",
      "Network Monitoring",
      "VoIP & Unified Communications",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider font-mono">
              Our Services
            </span>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white mt-3 mb-6">
              End-to-End IT{" "}
              <span className="text-brand-cyan">Solutions</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              From day-to-day support to strategic cloud architecture, we provide the full spectrum
              of managed IT services your business needs to thrive in a digital-first world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="group p-8 rounded-2xl bg-brand-navy border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-brand-cyan/5 flex flex-col"
              >
                <div className="w-16 h-16 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6 group-hover:bg-brand-cyan group-hover:text-brand-navy transition-all">
                  {service.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-white mb-1">{service.title}</h3>
                <p className="text-brand-cyan text-sm font-medium mb-3">{service.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-brand-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-cyan text-sm font-semibold hover:gap-3 transition-all mt-auto"
                >
                  Enquire now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Every business is unique. Let&apos;s discuss your specific IT challenges and build a
            tailored strategy that fits your goals and budget.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-cyan text-brand-navy font-semibold rounded-lg hover:bg-brand-cyan-dark transition-all hover:shadow-xl hover:shadow-brand-cyan/20"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
