import { Download, FileText } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/site/fade-in";
import { PageReveal } from "@/components/site/page-reveal";
import { SectionHeader } from "@/components/site/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Resume",
  description: "Project management resume hub with recruiter-ready highlights, qualifications, and supporting credentials.",
};

export default function ResumePage() {
  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="Resume"
        title="Resume and Qualifications"
        description="Concise overview of project management trajectory, strengths, and credentials for recruiter and hiring-manager review."
      />

      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <FadeIn>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="size-5 text-foreground/70" /> Resume Viewer
              </CardTitle>
              <CardDescription>Connect your latest resume PDF here so recruiters can review the full story without leaving the site.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid min-h-[380px] place-items-center rounded-2xl border border-dashed border-border/70 bg-background/30 p-6 text-center text-sm text-muted-foreground">
                Resume viewer placeholder
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Highlights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Information Systems student at NJIT building toward a Project Manager career.</p>
              <p>Hands-on experience across project planning, team collaboration, UX research, and technical execution.</p>
              <p>Actively pursuing internships in Project Management, Product, UX, and technology-focused tracks.</p>
              <p>Strengths include turning ambiguous requirements into structured, reviewable work that feels ready for real teams.</p>
              <Button asChild className="mt-2 w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                <Link href="mailto:aahruran@gmail.com?subject=Resume%20Request%20-%20Anabhayan%20Ahruran">
                  <Download className="size-4" /> Request Resume Copy
                </Link>
              </Button>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl">Supporting Credentials</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Direct access to certification PDFs and verification pages from one recruiter-facing hub.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <FadeIn key={certification.title} delay={0.05 * index}>
              <Card className="glass h-full">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg">{certification.title}</CardTitle>
                      <CardDescription>
                        {certification.issuer} • {certification.date}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">{certification.downloadSize}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {certification.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <Button asChild variant="outline" className="w-full rounded-full">
                      <Link href={certification.link} target="_blank" rel="noreferrer">
                        View Credential
                      </Link>
                    </Button>
                    <Button asChild className="w-full rounded-full">
                      <Link href={certification.download} target="_blank" download>
                        <Download className="size-4" /> Download PDF
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageReveal>
  );
}
