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
    "Project management portfolio for Anabhayan Ahruran, a first-generation Information Systems student at NJIT with strengths in UX, product design, web development, and cross-functional delivery.",
  openGraph: {
    title: "Anabhayan Ahruran | Portfolio",
    description:
      "Internship-ready project management portfolio featuring UX case studies, technical projects, certifications, and leadership-focused delivery work.",
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
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground selection:bg-[#5d4330]/16 selection:text-foreground">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_9%_8%,rgba(201,155,112,0.2),transparent_32%),radial-gradient(circle_at_88%_0%,rgba(168,121,91,0.16),transparent_30%),linear-gradient(to_bottom,rgba(131,99,74,0.09),transparent_28%)]" />
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
