import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const posts = [
  {
    slug: "m365-migration-guide",
    title: "The Complete Microsoft 365 Migration Guide for Australian Businesses",
    excerpt:
      "Planning a Microsoft 365 migration? This comprehensive guide covers everything from initial assessment to post-migration optimization.",
    date: "2025-06-15",
    category: "Cloud",
    readTime: "8 min read",
  },
  {
    slug: "cybersecurity-checklist",
    title: "10 Essential Cybersecurity Checks Every MSP Client Needs",
    excerpt:
      "Protect your business with this actionable cybersecurity checklist covering endpoint security, MFA, backups, and compliance.",
    date: "2025-05-28",
    category: "Security",
    readTime: "6 min read",
  },
  {
    slug: "azure-vs-on-prem",
    title: "Azure vs On-Premises: Making the Right Choice for Your Business",
    excerpt:
      "Should you move to the cloud or stay on-premises? We break down the costs, benefits, and considerations for Australian businesses.",
    date: "2025-05-10",
    category: "Cloud",
    readTime: "10 min read",
  },
  {
    slug: "intune-autopilot-guide",
    title: "Zero-Touch Deployment with Windows Autopilot and Intune",
    excerpt:
      "Learn how to streamline device provisioning with Microsoft Intune and Windows Autopilot — saving hours of manual setup.",
    date: "2025-04-22",
    category: "Endpoint",
    readTime: "7 min read",
  },
  {
    slug: "itil-for-small-business",
    title: "Applying ITIL Principles to Small Business IT Support",
    excerpt:
      "ITIL isn&apos;t just for enterprises. Here&apos;s how to adapt ITIL frameworks to deliver consistent, professional IT support for SMBs.",
    date: "2025-04-05",
    category: "Management",
    readTime: "9 min read",
  },
  {
    slug: "powershell-automation",
    title: "PowerShell Automation: 5 Scripts Every IT Admin Should Have",
    excerpt:
      "Save time and reduce errors with these essential PowerShell scripts for user management, reporting, and infrastructure monitoring.",
    date: "2025-03-18",
    category: "Automation",
    readTime: "11 min read",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-cyan text-sm font-semibold uppercase tracking-wider font-mono">
              Insights & Resources
            </span>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white mt-3 mb-6">
              IT Knowledge{" "}
              <span className="text-brand-cyan">Hub</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical guides, industry insights, and expert perspectives from The Kakadu IT team.
              Stay informed on the latest in managed IT, cloud, and cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories filter (visual only) */}
          <div className="flex flex-wrap gap-3 mb-12">
            {["All", "Cloud", "Security", "Endpoint", "Management", "Automation"].map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === "All"
                    ? "bg-brand-cyan text-brand-navy"
                    : "bg-brand-navy text-slate-300 border border-white/10 hover:border-brand-cyan hover:text-brand-cyan"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl bg-brand-navy border border-white/10 hover:border-brand-cyan/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-brand-cyan/5 flex flex-col"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-brand-cyan uppercase tracking-wider font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>

                  <h2 className="font-heading font-semibold text-xl text-white mb-3 group-hover:text-brand-cyan transition-colors leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs text-slate-500">
                      {new Date(post.date).toLocaleDateString("en-AU", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-brand-cyan text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
