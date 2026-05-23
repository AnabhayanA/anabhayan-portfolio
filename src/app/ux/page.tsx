import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/site/fade-in";
import { PageReveal } from "@/components/site/page-reveal";
import { SectionHeader } from "@/components/site/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type UxCaseStudy, uxCaseStudies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "UX",
  description: "UX and product design case studies by Anabhayan Ahruran.",
};

const uxHighlights: Record<string, { badge: string; standout: string }> = {
  "college-sleep-patterns-diary-study": {
    badge: "Research Depth",
    standout: "4-day diary study with clear patterns, synthesis, and practical recommendations.",
  },
  "njit-campus-buddy": {
    badge: "Top Academic Outcome",
    standout: "Full team case study with real artifacts and a perfect project evaluation.",
  },
  "sports-betting-ethnographic-study": {
    badge: "Behavioral Insight",
    standout: "Ethnographic observation translated into personas and product-facing recommendations.",
  },
  "facebook-poke-feature-ux-research": {
    badge: "Product Strategy",
    standout: "Research framed directly for retain/redesign/remove product decision-making.",
  },
  "fitness-app-interview-study": {
    badge: "User Voice",
    standout: "Interview-led prioritization highlights practical feature consolidation and persona alignment.",
  },
};

const featuredUxSlugs = [
  "njit-campus-buddy",
  "college-sleep-patterns-diary-study",
  "sports-betting-ethnographic-study",
];

function getCardCoverImage(study: UxCaseStudy): string | undefined {
  if (study.coverImage) {
    return study.coverImage;
  }

  const imageArtifact = study.artifacts?.find(
    (artifact) => artifact.kind === "image" && artifact.href.startsWith("/"),
  );
  if (imageArtifact) {
    return imageArtifact.href;
  }

  return undefined;
}

export default function UxPage() {
  const featuredStudies = uxCaseStudies.filter((study) => featuredUxSlugs.includes(study.slug));
  const supportingStudies = uxCaseStudies.filter((study) => !featuredUxSlugs.includes(study.slug));

  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="UX / Product Design"
        title="UX Case Studies"
        description="Research and design work organized for quick review, with strongest impact stories presented first."
      />

      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Featured Case Studies</p>
        <p className="max-w-md text-xs text-muted-foreground sm:text-right">Most complete examples of research rigor, synthesis, and outcomes</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {featuredStudies.map((study, index) => {
          const coverImage = getCardCoverImage(study);
          const highlight = uxHighlights[study.slug];

          return (
            <FadeIn key={study.slug} delay={0.05 * index}>
              <Card className="glass h-full border-border/80">
                {coverImage ? (
                <div className="relative h-40 w-full overflow-hidden rounded-t-xl sm:h-44">
                  <Image
                    src={coverImage}
                    alt={`${study.title} cover`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                </div>
              ) : (
                <div className="h-40 w-full rounded-t-xl bg-[linear-gradient(125deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(255,255,255,0.12))] sm:h-44" />
                )}
                <CardHeader>
                  {highlight ? (
                    <div className="mb-1">
                      <Badge className="rounded-full bg-foreground px-3 py-1 text-background">{highlight.badge}</Badge>
                    </div>
                  ) : null}
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>{study.problem}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2 rounded-xl border border-border/60 bg-background/35 p-3 text-sm text-muted-foreground sm:grid-cols-2">
                    <div>
                      <p className="text-[0.68rem] tracking-[0.22em] uppercase">Role</p>
                      <p className="mt-1 font-medium text-foreground">{study.snapshot.role}</p>
                    </div>
                    <div>
                      <p className="text-[0.68rem] tracking-[0.22em] uppercase">Impact</p>
                      <p className="mt-1 font-medium text-foreground">{study.snapshot.impact}</p>
                    </div>
                  </div>
                  {highlight ? (
                    <div className="rounded-xl border border-border/70 bg-background/40 px-3 py-2 text-sm text-foreground">
                      <span className="font-medium">Why it stands out:</span> {highlight.standout}
                    </div>
                  ) : null}
                  <p className="text-sm text-muted-foreground">{study.teaser}</p>
                  <div>
                    <p className="mb-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
                        <Badge key={tool} variant="outline">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {study.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-background/60">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full justify-between rounded-full bg-foreground text-background hover:bg-foreground/90">
                    <Link href={`/ux/${study.slug}`}>
                      View Case Study <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </div>

      <div className="mb-4 mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Additional Case Studies</p>
        <p className="max-w-md text-xs text-muted-foreground sm:text-right">Supporting studies that demonstrate method range and product judgment</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {supportingStudies.map((study, index) => {
          const coverImage = getCardCoverImage(study);

          return (
            <FadeIn key={study.slug} delay={0.05 * (index + featuredStudies.length)}>
              <Card className="glass h-full">
                {coverImage ? (
                  <div className="relative h-28 w-full overflow-hidden rounded-t-xl sm:h-32">
                    <Image
                      src={coverImage}
                      alt={`${study.title} cover`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                  </div>
                ) : (
                  <div className="h-24 w-full rounded-t-xl bg-[linear-gradient(125deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(255,255,255,0.12))] sm:h-28" />
                )}
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>{study.problem}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2 rounded-xl border border-border/60 bg-background/35 p-3 text-sm text-muted-foreground sm:grid-cols-2">
                    <div>
                      <p className="text-[0.68rem] tracking-[0.22em] uppercase">Role</p>
                      <p className="mt-1 font-medium text-foreground">{study.snapshot.role}</p>
                    </div>
                    <div>
                      <p className="text-[0.68rem] tracking-[0.22em] uppercase">Impact</p>
                      <p className="mt-1 font-medium text-foreground">{study.snapshot.impact}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{study.teaser}</p>
                  <Button asChild className="w-full justify-between rounded-full bg-foreground text-background hover:bg-foreground/90">
                    <Link href={`/ux/${study.slug}`}>
                      View Case Study <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </PageReveal>
  );
}
