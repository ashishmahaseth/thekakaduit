import Link from "next/link";
import Image from "next/image";

const services = [
  "Managed IT Support",
  "Microsoft 365",
  "Cybersecurity",
  "Cloud Infrastructure",
  "Active Directory",
  "Intune MDM",
  "Automation & Scripting",
  "Network Infrastructure",
];

const partners = [
  { name: "Microsoft", slug: "microsoft" },
  { name: "Google", slug: "google" },
  { name: "Cisco", slug: "cisco" },
  { name: "Dell", slug: "dell" },
  { name: "HP", slug: "hp" },
  { name: "Lenovo", slug: "lenovo" },
  { name: "Fortinet", slug: "fortinet" },
  { name: "Palo Alto Networks", slug: "paloaltonetworks" },
  { name: "VMware", slug: "vmware" },
  { name: "AWS", slug: "aws" },
];

const clients = [
  { name: "National Retail Group", slug: "national-retail-group" },
  { name: "TechStart Australia", slug: "techstart-australia" },
  { name: "National Healthcare Group", slug: "national-healthcare-group" },
  { name: "Australian Government Contractor", slug: "gov-contractor" },
  { name: "EduCore Solutions", slug: "educore-solutions" },
  { name: "FinTrust Capital", slug: "fintrust-capital" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/thekakaduit/images/kakadu-logo.jpg"
                  alt="Kakadu IT Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-white">THE KAKADU</div>
                <div className="text-[10px] text-brand-green uppercase tracking-[0.2em] font-semibold">
                  IT Solutions
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering Australian businesses through innovation and expertise.
              Your trusted MSP for end-to-end IT solutions across Australia.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green hover:text-white transition-all text-sm font-semibold"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">IT Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-400 hover:text-brand-green transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/projects", label: "Projects" },
                { href: "/blog", label: "Insights" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>15 Dorrie Crescent<br />Moncrieff ACT 2914</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <a href="mailto:info@thekakaduit.au" className="hover:text-brand-green transition-colors">info@thekakaduit.au</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0251144800" className="hover:text-brand-green transition-colors">0251144800</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h4 className="font-heading font-semibold text-white text-center mb-6">Technology Partners</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {partners.map((partner) => {
              const logoPath = `/thekakaduit/images/partners/${partner.slug}.png`;
              return (
              <div
                key={partner.name}
                className="relative h-10 w-32 grayscale hover:grayscale-0 hover:opacity-100 opacity-60 transition-all duration-300"
                style={{ minHeight: "40px" }}
              >
                <Image
                  src={logoPath}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              );
            })}
          </div>
        </div>

        {/* Clients Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="font-heading font-semibold text-white text-center mb-6">Trusted By</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {clients.map((client) => {
              const logoPath = `/thekakaduit/images/clients/${client.slug}.png`;
              return (
              <div
                key={client.name}
                className="relative h-10 w-32 grayscale hover:grayscale-0 hover:opacity-100 opacity-60 transition-all duration-300"
                style={{ minHeight: "40px" }}
              >
                <Image
                  src={logoPath}
                  alt={client.name}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
              );
            })}
          </div>
          <p className="text-center text-slate-400 text-sm mt-6">
            ...and 100+ businesses across Australia
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} The Kakadu IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-green transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
