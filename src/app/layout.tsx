import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/site/footer";
import { SiteNavbar } from "@/components/site/navbar";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anabhayan Ahruran | Portfolio",
    template: "%s | Anabhayan Ahruran",
  },
  description:
    "Premium internship-focused portfolio for Anabhayan Ahruran, Information Systems student at NJIT specializing in UX, product design, web development, and cloud technology.",
  openGraph: {
    title: "Anabhayan Ahruran | Portfolio",
    description:
      "Internship-ready portfolio with distinct UX and development tracks, case studies, certifications, and technical projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${spaceGrotesk.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground selection:bg-white/20 selection:text-foreground">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_28%),radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_36%)]" />
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
