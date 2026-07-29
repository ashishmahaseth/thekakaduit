import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-heading" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "The Kakadu IT Solutions | Managed IT Services Australia",
    template: "%s | The Kakadu IT Solutions",
  },
  description:
    "The Kakadu IT Solutions is an Australia-wide Managed Service Provider (MSP) delivering end-to-end IT support, Microsoft 365, Azure, cybersecurity, and cloud infrastructure for Australian businesses.",
  keywords: [
    "IT support Australia",
    "managed IT services Australia",
    "Microsoft 365",
    "Azure",
    "cybersecurity Australia",
    "cloud infrastructure",
    "MSP Australia",
    "licensed IT professionals",
    "Kakadu IT",
  ],
  openGraph: {
    title: "The Kakadu IT Solutions | Managed IT Services Australia",
    description:
      "Australia-wide managed IT services delivered by highly experienced, licensed professionals. 24/7 support, cloud, cybersecurity, and Microsoft 365 solutions.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrains.variable}`}>
      <body className="font-sans bg-white text-brand-text antialiased">
        {children}
      </body>
    </html>
  );
}
