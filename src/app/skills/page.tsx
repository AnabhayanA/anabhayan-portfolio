import { Brush, Cloud, Code2, GitBranch, Users } from "lucide-react";
import type { Metadata } from "next";

import { FadeIn } from "@/components/site/fade-in";
import { PageReveal } from "@/components/site/page-reveal";
import { SectionHeader } from "@/components/site/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Skills",
  description: "Categorized design, development, cloud, and collaboration skill sets.",
};

const icons = [Brush, Code2, Cloud, Users, GitBranch];

export default function SkillsPage() {
  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="Skills"
        title="Categorized Capabilities"
        description="Interactive, recruiter-friendly overview of technical and collaborative strengths across UX, frontend, and cloud-adjacent work."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = icons[index % icons.length];
          return (
            <FadeIn key={category.title} delay={0.06 * index}>
              <Card className="glass h-full transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Icon className="size-5 text-foreground/70" /> {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-muted text-foreground">
                        {skill}
                      </Badge>
                    ))}
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
