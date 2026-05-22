import { ExternalLink, GitBranch, Video } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { FadeIn } from "@/components/site/fade-in";
import { PageReveal } from "@/components/site/page-reveal";
import { SectionHeader } from "@/components/site/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type DevProject, devProjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Development",
  description: "Technical and coding portfolio projects by Anabhayan Ahruran.",
};

const projectHighlights: Record<string, { badge: string; standout: string }> = {
  "CampusSpace – AI-Powered Student Platform": {
    badge: "Flagship",
    standout: "Combines full-stack engineering with a real campus problem and location intelligence.",
  },
  "Laptop Inventory Management System": {
    badge: "Production-Style Build",
    standout: "Shows end-to-end CRUD, authentication, and data handling under course-level constraints.",
  },
  "ALPFA NJIT Chapter Website": {
    badge: "Real Client Work",
    standout: "Built for a live student organization with collaboration and external stakeholder impact.",
  },
  "IS117 Final Project – Multi-Site Web Portfolio System": {
    badge: "Web Foundations",
    standout: "Demonstrates strong fundamentals in accessibility, SEO, and multi-site architecture.",
  },
  "Interactive Chatbox Web Application": {
    badge: "Systems Thinking",
    standout: "Highlights networking concepts, stateful communication, and event-driven behavior.",
  },
};

const featuredTitles = [
  "CampusSpace – AI-Powered Student Platform",
  "Laptop Inventory Management System",
  "ALPFA NJIT Chapter Website",
];

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "").trim();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    const id = parsed.searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

function ProjectPreview({ project }: { project: DevProject }) {
  const isIs117Project = project.title === "IS117 Final Project – Multi-Site Web Portfolio System";
  const isIt114Project = project.title === "Interactive Chatbox Web Application";

  const websitePreview = isIs117Project ? project.projectLink : undefined;
  const videoPreview = isIt114Project ? getYouTubeEmbedUrl(project.videoLink) : null;

  if (!websitePreview && !videoPreview) {
    return null;
  }

  return (
    <div className="space-y-3 rounded-xl border border-border/70 bg-background/30 p-3">
      <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Live Preview</p>

      {websitePreview ? (
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">IS117 Project Site</p>
          <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
            <iframe
              src={websitePreview}
              title="IS117 project preview"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      ) : null}

      {videoPreview ? (
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">IT114 Video Walkthrough</p>
          <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
            <iframe
              src={videoPreview}
              title="IT114 video walkthrough preview"
              className="aspect-video w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}

      <p className="text-xs text-muted-foreground">If the preview is blocked by the source site, use the project links below.</p>
    </div>
  );
}

export default function DevelopmentPage() {
  const featuredProjects = devProjects.filter((project) => featuredTitles.includes(project.title));
  const supportingProjects = devProjects.filter((project) => !featuredTitles.includes(project.title));

  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="Development Projects"
        title="Technical Work, Cleanly Structured"
        description="Recruiter-focused ordering: flagship builds first, then supporting work. Each project is framed by its strongest signal."
      />

      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Featured Projects</p>
        <p className="text-xs text-muted-foreground">Highest-signal work for internships and product teams</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {featuredProjects.map((project, index) => {
          const highlight = projectHighlights[project.title];

          return (
          <FadeIn key={project.title} delay={0.05 * index}>
            <Card className="glass h-full border-foreground/30">
              <div className="h-36 rounded-t-xl border-b border-border/60 bg-[linear-gradient(140deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03),rgba(255,255,255,0.1))]" />
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardDescription>{project.category}</CardDescription>
                  {highlight ? (
                    <Badge className="rounded-full bg-foreground px-3 py-1 text-background">{highlight.badge}</Badge>
                  ) : null}
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {highlight ? (
                  <div className="rounded-xl border border-border/70 bg-background/40 px-3 py-2 text-sm text-foreground">
                    <span className="font-medium">Why it stands out:</span> {highlight.standout}
                  </div>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature} className="rounded-lg border border-border/60 bg-background/30 px-3 py-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <ProjectPreview project={project} />
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href={project.github} target="_blank" rel="noreferrer">
                      <GitBranch className="size-4" /> GitHub
                    </Link>
                  </Button>
                  {project.projectLink ? (
                    <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                      <Link href={project.projectLink} target="_blank" rel="noreferrer">
                        <ExternalLink className="size-4" /> Project Link
                      </Link>
                    </Button>
                  ) : null}
                  {project.videoLink ? (
                    <Button asChild variant="outline" className="rounded-full">
                      <Link href={project.videoLink} target="_blank" rel="noreferrer">
                        <Video className="size-4" /> Video Walkthrough
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
          );
        })}
      </div>

      <div className="mb-4 mt-10 flex items-center justify-between">
        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Additional Projects</p>
        <p className="text-xs text-muted-foreground">Supporting depth across web fundamentals and systems work</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {supportingProjects.map((project, index) => {
          return (
            <FadeIn key={project.title} delay={0.05 * (index + featuredProjects.length)}>
              <Card className="glass h-full">
                <div className="h-24 rounded-t-xl border-b border-border/60 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(255,255,255,0.08))]" />
                <CardHeader>
                  <CardDescription>{project.category}</CardDescription>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <ProjectPreview project={project} />
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline" className="rounded-full">
                      <Link href={project.github} target="_blank" rel="noreferrer">
                        <GitBranch className="size-4" /> GitHub
                      </Link>
                    </Button>
                    {project.projectLink ? (
                      <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                        <Link href={project.projectLink} target="_blank" rel="noreferrer">
                          <ExternalLink className="size-4" /> Project Link
                        </Link>
                      </Button>
                    ) : null}
                    {project.videoLink ? (
                      <Button asChild variant="outline" className="rounded-full">
                        <Link href={project.videoLink} target="_blank" rel="noreferrer">
                          <Video className="size-4" /> Video Walkthrough
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </PageReveal>
  );
}
