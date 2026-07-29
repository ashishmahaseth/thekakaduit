"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-brand-navy/10"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/images/kakadu-logo.png"
                alt="Kakadu IT Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight text-brand-navy group-hover:text-brand-green transition-colors">
                THE KAKADU
              </span>
              <span className="text-[10px] text-brand-green uppercase tracking-[0.2em] font-semibold">
                IT Solutions
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative ${
                  pathname === link.href
                    ? "text-brand-green font-semibold"
                    : "text-brand-text hover:text-brand-navy"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-green rounded-full" />
                )}
              </Link>
            ))}

            {/* Helpdesk Button */}
            <Link
              href="/contact"
              className="relative ml-2 px-5 py-2.5 bg-brand-green text-white font-semibold text-sm rounded-lg hover:bg-brand-greenDark transition-all duration-300 animate-helpdesk-glow flex items-center gap-2 group"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Helpdesk</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-green rounded-full animate-helpdesk-pulse border-2 border-white" />
            </Link>

            {/* Book a Call */}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-brand-navy text-white font-semibold text-sm rounded-lg hover:bg-brand-navyLight transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brand-navy"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-brand-navy/10 mt-2 bg-white/95 backdrop-blur-md rounded-b-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 text-base font-medium px-2 ${
                  pathname === link.href ? "text-brand-green font-semibold" : "text-brand-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 px-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-green text-white font-semibold rounded-lg"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Helpdesk
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 bg-brand-navy text-white font-semibold rounded-lg"
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
