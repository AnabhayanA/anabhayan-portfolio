import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/site/fade-in";
import { PageReveal } from "@/components/site/page-reveal";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact and internship connection hub for Anabhayan Ahruran.",
};

export default function ContactPage() {
  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something impactful together."
        description="Open to internship opportunities and conversations around UX, product design, frontend engineering, and cloud technology."
      />

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <FadeIn>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Share a role, project, or collaboration context and I will follow up.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-3">
                <Input placeholder="Name" required />
                <Input type="email" placeholder="Email" required />
                <Textarea placeholder="Tell me about the opportunity" rows={6} required />
                <Button type="submit" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Direct Channels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-start rounded-full">
                <Link href="mailto:anabhayan@example.com">
                  <Mail className="size-4" /> Email
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start rounded-full">
                <Link href="https://www.linkedin.com">
                  <BriefcaseBusiness className="size-4" /> LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start rounded-full">
                <Link href="https://github.com">
                  <GitBranch className="size-4" /> GitHub
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
