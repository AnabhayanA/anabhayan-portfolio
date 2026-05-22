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
  title: "Certifications",
  description: "Professional certifications and continuing education credentials.",
};

export default function CertificationsPage() {
  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="Certifications"
        title="Professional Learning, Clearly Presented"
        description="A recruiter-friendly snapshot of credentials supporting UX, agile collaboration, and cloud development growth."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification, index) => (
          <FadeIn key={certification.title} delay={0.05 * index}>
            <Card className="glass h-full">
              <CardHeader>
                <div
                  className={`mb-2 inline-flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-xs font-semibold tracking-[0.16em] ${certification.logoClassName}`}
                >
                  {certification.logoLabel}
                </div>
                <CardTitle>{certification.title}</CardTitle>
                <CardDescription>
                  {certification.issuer} • {certification.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">PDF included</Badge>
                  <Badge variant="outline">{certification.downloadSize}</Badge>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {certification.skills.map((skill) => (
                    <li key={skill} className="rounded-lg border border-border/60 bg-background/30 px-3 py-2">
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className="grid gap-2 sm:grid-cols-2">
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href={certification.link} target="_blank" rel="noreferrer">
                      View Credential
                    </Link>
                  </Button>
                  <Button asChild className="w-full rounded-full">
                    <Link href={certification.download} target="_blank" download>
                      Download PDF
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </PageReveal>
  );
}
