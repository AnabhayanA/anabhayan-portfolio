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
  const iconClassNames = {
    linkedin: "size-4 text-[#0A66C2]",
    github: "size-4 text-[#181717] dark:text-[#f5f5f5]",
    gmail: "size-4",
  } as const;

  const brandButtonClassNames = {
    linkedin:
      "w-full justify-start rounded-full border-[#0A66C2]/20 bg-background/75 text-foreground hover:border-[#0A66C2]/35 hover:bg-[#0A66C2]/10",
    github:
      "w-full justify-start rounded-full border-[#181717]/20 bg-background/75 text-foreground hover:border-[#181717]/35 hover:bg-[#181717]/10 dark:border-[#f5f5f5]/20 dark:hover:border-[#f5f5f5]/35 dark:hover:bg-[#f5f5f5]/12",
    gmail:
      "w-full justify-start rounded-full border-[#EA4335]/20 bg-background/75 text-foreground hover:border-[#EA4335]/35 hover:bg-[#EA4335]/10",
  } as const;

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
              <Button asChild variant="outline" className={brandButtonClassNames.gmail}>
                <Link href="mailto:aahruran@gmail.com">
                  <GmailIcon className={iconClassNames.gmail} /> Email
                </Link>
              </Button>
              <Button asChild variant="outline" className={brandButtonClassNames.linkedin}>
                <Link href="https://www.linkedin.com/in/anabhayan-ahruran2027" target="_blank" rel="noreferrer">
                  <LinkedInIcon className={iconClassNames.linkedin} /> LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" className={brandButtonClassNames.github}>
                <Link href="https://github.com/AnabhayanA" target="_blank" rel="noreferrer">
                  <GitHubIcon className={iconClassNames.github} /> GitHub
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
