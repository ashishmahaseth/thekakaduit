import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const posts: Record<string, {
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  readTime: string;
}> = {
  "m365-migration-guide": {
    title: "The Complete Microsoft 365 Migration Guide for Australian Businesses",
    excerpt:
      "Planning a Microsoft 365 migration? This comprehensive guide covers everything from initial assessment to post-migration optimization.",
    date: "2025-06-15",
    category: "Cloud",
    readTime: "8 min read",
    content: [
      "Migrating to Microsoft 365 is one of the most impactful decisions a business can make. But done poorly, it can lead to data loss, downtime, and frustrated users. This guide walks you through our proven methodology.",
      "## Phase 1: Assessment & Planning",
      "Before touching a single mailbox, we conduct a thorough assessment of your current environment. This includes:",
      "- Inventorying all mailboxes, distribution lists, and shared resources",
      "- Evaluating your current email system and data volumes",
      "- Identifying custom solutions and third-party integrations",
      "- Mapping user permissions and access requirements",
      "## Phase 2: Pilot Migration",
      "We never migrate all users at once. A controlled pilot with 5-10 users reveals integration issues and training needs before the full rollout.",
      "## Phase 3: Full Migration",
      "With the pilot validated, we execute the full migration in batches — typically by department — to minimize disruption.",
      "## Phase 4: Post-Migration Optimization",
      "Migration isn't the finish line. We optimize licensing, configure security policies, and provide training to ensure your team gets maximum value from M365.",
    ],
  },
  "cybersecurity-checklist": {
    title: "10 Essential Cybersecurity Checks Every MSP Client Needs",
    excerpt:
      "Protect your business with this actionable cybersecurity checklist covering endpoint security, MFA, backups, and compliance.",
    date: "2025-05-28",
    category: "Security",
    readTime: "6 min read",
    content: [
      "Cybersecurity isn't a one-time project — it's an ongoing process. Here are the 10 checks we perform for every client.",
      "## The Checklist",
      "1. **Endpoint Protection**: Is every device running updated antivirus/EDR?",
      "2. **Multi-Factor Authentication**: Is MFA enforced on all cloud services?",
      "3. **Backup Strategy**: Are backups automated, tested, and offsite?",
      "4. **Patch Management**: Are OS and application patches applied within 72 hours?",
      "5. **Firewall Configuration**: Are unused ports closed and rules documented?",
      "6. **Access Control**: Do former employees still have active accounts?",
      "7. **Email Security**: Is anti-phishing protection enabled?",
      "8. **Data Classification**: Is sensitive data identified and protected?",
      "9. **Incident Response Plan**: Does your team know what to do during a breach?",
      "10. **Compliance Alignment**: Are you meeting industry regulatory requirements?",
    ],
  },
  "azure-vs-on-prem": {
    title: "Azure vs On-Premises: Making the Right Choice for Your Business",
    excerpt:
      "Should you move to the cloud or stay on-premises? We break down the costs, benefits, and considerations for Australian businesses.",
    date: "2025-05-10",
    category: "Cloud",
    readTime: "10 min read",
    content: [
      "The cloud vs on-premises debate continues to evolve. Here's our framework for deciding what's right for your business.",
      "## When to Choose Cloud",
      "Cloud (Azure) is ideal when:",
      "- You need scalability and flexibility",
      "- Your team is distributed or remote-first",
      "- You want to reduce capital expenditure",
      "- Rapid deployment is critical",
      "## When to Keep On-Premises",
      "On-premises still makes sense when:",
      "- You have strict data residency requirements",
      "- Legacy applications aren't cloud-ready",
      "- Bandwidth constraints exist",
      "- Total cost of ownership favors capital investment",
    ],
  },
  "intune-autopilot-guide": {
    title: "Zero-Touch Deployment with Windows Autopilot and Intune",
    excerpt:
      "Learn how to streamline device provisioning with Microsoft Intune and Windows Autopilot — saving hours of manual setup.",
    date: "2025-04-22",
    category: "Endpoint",
    readTime: "7 min read",
    content: [
      "Zero-touch deployment isn't just convenient — it's a necessity at scale. With Autopilot and Intune, new devices are ready for users within minutes of unboxing.",
      "## Key Components",
      "1. **Autopilot Profiles**: Pre-configure device settings that apply on first boot",
      "2. **Intune Policies**: Manage apps, compliance, and settings remotely",
      "3. **ESP (Enrollment Status Page)**: Gives users visibility during provisioning",
      "4. **White Glove**: IT pre-provisions devices for a polished unboxing experience",
    ],
  },
  "itil-for-small-business": {
    title: "Applying ITIL Principles to Small Business IT Support",
    excerpt:
      "ITIL isn't just for enterprises. Here's how to adapt ITIL frameworks to deliver consistent, professional IT support for SMBs.",
    date: "2025-04-05",
    category: "Management",
    readTime: "9 min read",
    content: [
      "ITIL provides a structured approach to IT service management that scales beautifully from enterprise to small business.",
      "## Core ITIL Principles for SMBs",
      "Focus on the fundamentals: incident management, change management, and problem management. You don't need the full ITIL suite — just the practices that deliver value.",
    ],
  },
  "powershell-automation": {
    title: "PowerShell Automation: 5 Scripts Every IT Admin Should Have",
    excerpt:
      "Save time and reduce errors with these essential PowerShell scripts for user management, reporting, and infrastructure monitoring.",
    date: "2025-03-18",
    category: "Automation",
    readTime: "11 min read",
    content: [
      "PowerShell is the backbone of Windows automation. These five scripts form the foundation of our managed services toolkit.",
      "## Essential Scripts",
      "1. **User Provisioning**: Automated account creation with licensing",
      "2. **License Audit**: Report on M365 license usage and costs",
      "3. **Stale Account Detection**: Find and disable inactive accounts",
      "4. **Device Compliance Report**: Intune compliance status across all endpoints",
      "5. **Security Baseline Check**: Verify Defender and firewall settings",
    ],
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <article className="pt-32 pb-24 bg-brand-navy min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-cyan transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-brand-cyan">{post.title.slice(0, 40)}...</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-sm text-slate-500">{post.readTime}</span>
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-slate-300 mb-6">{post.excerpt}</p>
            <div className="text-sm text-slate-500">
              {new Date(post.date).toLocaleDateString("en-AU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-heading font-bold text-2xl text-white mt-12 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("- ")) {
                return (
                  <li key={i} className="text-slate-300 ml-4">
                    {block.replace("- ", "")}
                  </li>
                );
              }
              if (block.match(/^\d+\./)) {
                return (
                  <li key={i} className="text-slate-300 ml-4">
                    {block.replace(/^\d+\.\s*/, "")}
                  </li>
                );
              }
              return (
                <p key={i} className="text-slate-300 leading-relaxed mb-6">
                  {block}
                </p>
              );
            })}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-cyan hover:text-brand-cyan-dark transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
