import { Award, BadgeCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { LinkedInIcon } from "@/components/site/brand-icons";
import { FadeIn } from "@/components/site/fade-in";
import { PageReveal } from "@/components/site/page-reveal";
import { PdfViewer } from "@/components/site/pdf-viewer";
import { SectionHeader } from "@/components/site/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications and continuing education credentials.",
};

function IssuerIcon({ issuer }: { issuer: string }) {
  if (issuer.includes("Microsoft")) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
        <rect x="3" y="3" width="8" height="8" fill="#F25022" />
        <rect x="13" y="3" width="8" height="8" fill="#7FBA00" />
        <rect x="3" y="13" width="8" height="8" fill="#00A4EF" />
        <rect x="13" y="13" width="8" height="8" fill="#FFB900" />
      </svg>
    );
  }

  if (issuer.includes("LinkedIn")) {
    return <LinkedInIcon className="size-5 text-[#0A66C2]" />;
  }

  if (issuer.includes("CITI")) {
    return <BadgeCheck className="size-5 text-emerald-600" />;
  }

  return <Award className="size-5 text-foreground/80" />;
}

export default function CertificationsPage() {
  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="Certifications"
        title="Verified Certifications"
        description="Industry-recognized credentials supporting growth across UX research, cloud fundamentals, and professional practice."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {certifications.map((certification, index) => (
          <FadeIn key={certification.title} delay={0.05 * index}>
            <Card className="glass h-full">
              <CardHeader>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <IssuerIcon issuer={certification.issuer} />
                  {certification.issuer}
                </div>
                <CardTitle className="text-balance leading-tight">{certification.title}</CardTitle>
                <CardDescription>
                  {certification.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                    <a href={certification.download} target="_blank" rel="noreferrer" download>
                      Download PDF
                    </a>
                  </Button>
                </div>

                <div className="space-y-2 rounded-xl border border-border/60 bg-background/40 p-2.5 sm:p-3">
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">Certificate Preview</p>
                  <PdfViewer src={certification.download} title={certification.title} />
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </PageReveal>
  );
}
