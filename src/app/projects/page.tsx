import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const projects = [
  {
    title: "Microsoft 365 Enterprise Migration",
    category: "Cloud Migration",
    description:
      "Seamless migration of 500+ mailboxes from on-prem Exchange to Microsoft 365 for a Canberra government contractor. Zero data loss, zero downtime.",
    tech: ["Exchange Online", "Azure AD", "PowerShell", "Intune"],
    result: "Zero downtime · 500+ mailboxes migrated · 100% data integrity",
  },
  {
    title: "Intune MDM Rollout — 500 Endpoints",
    category: "Endpoint Management",
    description:
      "Full Microsoft Intune deployment including Windows Autopilot zero-touch provisioning, compliance policies, and app deployment.",
    tech: ["Intune", "Autopilot", "Azure AD", "PowerShell"],
    result: "500+ devices enrolled · 95% compliance rate · 60% faster onboarding",
  },
  {
    title: "Active Directory & Conditional Access",
    category: "Identity & Access",
    description:
      "Redesigned on-prem Active Directory and Azure AD/Entra ID environment with modern conditional access policies and OU restructuring.",
    tech: ["Active Directory", "Entra ID", "PowerShell", "GPO"],
    result: "Improved security posture · Automated provisioning · 200+ users migrated",
  },
  {
    title: "Microsoft Defender Deployment",
    category: "Cybersecurity",
    description:
      "Enterprise-grade endpoint security with Microsoft Defender for Endpoint, including automated threat detection and incident response workflows.",
    tech: ["Defender", "Azure Sentinel", "PowerShell", "ITIL"],
    result: "500+ devices protected · Automated remediation · ISO 27001 aligned",
  },
  {
    title: "Email Migration — 6 Client Deployments",
    category: "Cloud Migration",
    description:
      "Multiple GoDaddy/cPanel to Microsoft 365 migrations for small business clients, ranging from 25 to 150 mailboxes per deployment.",
    tech: ["M365", "Exchange", "DNS", "MigrationWiz"],
    result: "6 successful migrations · Minimal downtime · Zero data loss",
  },
  {
    title: "PowerShell Automation Framework",
    category: "Automation",
    description:
      "Custom PowerShell module for automated user lifecycle management, license assignment, and compliance reporting.",
    tech: ["PowerShell", "MS Graph", "Azure AD", "Automation"],
    result: "80% time savings · 500+ user lifecycle automated · Zero manual errors",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-green text-sm font-semibold uppercase tracking-wider font-mono">
              Our Work
            </span>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white mt-3 mb-6">
              Projects That{" "}
              <span className="text-brand-green">Deliver Results</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              A selection of successful IT infrastructure projects across cloud migration,
              endpoint management, cybersecurity, and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-gray-50 border border-brand-navy/10 hover:border-brand-green/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-brand-green/5"
              >
                <div className="p-8 pb-6">
                  <span className="text-xs font-mono text-brand-green uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-semibold text-xl text-brand-navy mt-2 mb-3 group-hover:text-brand-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brand-text text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="px-8 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-brand-greenLight text-brand-green text-xs font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-brand-navy/5">
                    <div className="text-xs text-brand-text uppercase tracking-wider font-semibold mb-1">
                      Outcome
                    </div>
                    <p className="text-sm text-brand-green font-medium">{project.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Whether it&apos;s a cloud migration, security overhaul, or automation project — we have the
            expertise to deliver.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-greenDark transition-all hover:shadow-xl hover:shadow-brand-green/20"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
