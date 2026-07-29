import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-heading" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "The Kakadu IT Solutions | Managed IT Services Canberra",
    template: "%s | The Kakadu IT Solutions",
  },
  description:
    "The Kakadu IT Solutions is a Canberra-based Managed Service Provider (MSP) delivering end-to-end IT support, Microsoft 365, Azure, cybersecurity, and cloud infrastructure for Australian businesses.",
  keywords: [
    "IT support Canberra",
    "managed IT services",
    "MSP Canberra",
    "Microsoft 365",
    "Azure",
    "cybersecurity",
    "IT support Australia",
    "Kakadu IT",
  ],
  openGraph: {
    title: "The Kakadu IT Solutions | Managed IT Services Canberra",
    description:
      "Empowering Canberra businesses through innovation and expertise. 24/7 managed IT support, cloud, cybersecurity, and more.",
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
