import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/site/fade-in";
import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/components/site/brand-icons";
import { PageReveal } from "@/components/site/page-reveal";
import { SectionHeader } from "@/components/site/section-header";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact hub for project management internship opportunities and collaboration.",
};

export default function ContactPage() {
  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s Connect"
        description="Open to Project Management internships and conversations across product, UX, and technology-focused teams."
      />

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <FadeIn>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Share role details or collaboration context and I will follow up promptly.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Direct Channels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="social-chip w-full justify-start">
                <Link href="mailto:aahruran@gmail.com">
                  <GmailIcon className="social-chip-icon size-4 text-[#EA4335]" /> Email
                </Link>
              </Button>
              <Button asChild variant="outline" className="social-chip w-full justify-start">
                <Link href="https://www.linkedin.com/in/anabhayan-ahruran2027" target="_blank" rel="noreferrer">
                  <LinkedInIcon className="social-chip-icon size-4 text-[#0A66C2]" /> LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" className="social-chip w-full justify-start">
                <Link href="https://github.com/AnabhayanA" target="_blank" rel="noreferrer">
                  <GitHubIcon className="social-chip-icon size-4 text-[#c9d1d9]" /> GitHub
                </Link>
              </Button>
              <Button asChild className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                <Link href="/resume">Resume Download</Link>
              </Button>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </PageReveal>
  );
}
