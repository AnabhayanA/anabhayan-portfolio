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
        title="Design-First Case Studies"
        description="Recruiter-first ordering: highest-impact UX work first, with each case study framed by its strongest signal."
      />

      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Featured Case Studies</p>
        <p className="text-xs text-muted-foreground">Best representation of research, outcomes, and execution</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {featuredStudies.map((study, index) => {
          const coverImage = getCardCoverImage(study);
          const highlight = uxHighlights[study.slug];

          return (
            <FadeIn key={study.slug} delay={0.05 * index}>
              <Card className="glass h-full border-foreground/30">
                {coverImage ? (
                <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
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
                <div className="h-44 w-full rounded-t-xl bg-[linear-gradient(125deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(255,255,255,0.12))]" />
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
                        <Badge key={skill} variant="secondary">
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

      <div className="mb-4 mt-10 flex items-center justify-between">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Additional Case Studies</p>
        <p className="text-xs text-muted-foreground">Supporting work that expands method range and product thinking</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {supportingStudies.map((study, index) => {
          const coverImage = getCardCoverImage(study);

          return (
            <FadeIn key={study.slug} delay={0.05 * (index + featuredStudies.length)}>
              <Card className="glass h-full">
                {coverImage ? (
                  <div className="relative h-32 w-full overflow-hidden rounded-t-xl">
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
                  <div className="h-24 w-full rounded-t-xl bg-[linear-gradient(125deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(255,255,255,0.12))]" />
                )}
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>{study.problem}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
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
