"use client";

import { useState } from "react";
import Link from "next/link";

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

export default function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative p-8 rounded-2xl bg-white border-2 border-brand-navy/10 transition-all duration-300 group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fade-in-up 0.6s ease-out forwards`,
        animationDelay: `${index * 100}ms`,
        opacity: 0,
      }}
    >
      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-brand-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Icon box */}
      <div
        className="relative z-10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
        style={{
          backgroundColor: isHovered ? "#14261C" : "#e8f7f0",
          color: isHovered ? "#ffffff" : "#1BAE70",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {service.icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-heading font-semibold text-xl text-brand-navy mb-3 transition-colors">
          {service.title}
        </h3>
        <p className="text-brand-text text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-brand-green text-sm font-semibold transition-all"
          style={{
            gap: isHovered ? "0.5rem" : "0.25rem",
          }}
        >
          Learn more
          <svg
            className="w-4 h-4 transition-transform duration-300"
            style={{ transform: isHovered ? "translateX(4px)" : "translateX(0)" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Hover border effect */}
      <div
        className="absolute inset-0 rounded-2xl border-2 border-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />
    </div>
  );
}
