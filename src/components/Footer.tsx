import Link from "next/link";

export default function Footer() {
  const services = [
    "Managed IT Support",
    "Microsoft 365",
    "Azure Cloud",
    "Cybersecurity",
    "Active Directory",
    "Intune MDM",
    "ITIL Frameworks",
    "Network Infrastructure",
  ];

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-cyan rounded-lg flex items-center justify-center">
                <span className="text-brand-navy font-heading font-bold text-lg">K</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-white">THE KAKADU</div>
                <div className="text-[10px] text-brand-cyan uppercase tracking-[0.2em] font-medium">
                  IT Solutions
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering Canberra businesses through innovation and expertise.
              Your trusted MSP for end-to-end IT solutions.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-navy transition-all text-sm font-semibold"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors"
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
                    className="text-sm text-slate-400 hover:text-brand-cyan transition-colors"
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
                <svg className="w-5 h-5 text-brand-cyan mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>15 Dorrie Crescent<br/>Moncrieff ACT 2914</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@thekakadu.com.au" className="hover:text-brand-cyan transition-colors">info@thekakadu.com.au</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+61251144800" className="hover:text-brand-cyan transition-colors">+61 (02) 5114 4800</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} The Kakadu IT Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-brand-cyan transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
