import { Brush, Cloud, Code2, GitBranch, Users } from "lucide-react";
import type { Metadata } from "next";

import { FadeIn } from "@/components/site/fade-in";
import { PageReveal } from "@/components/site/page-reveal";
import { SectionHeader } from "@/components/site/section-header";
import { SkillBrandIcon } from "@/components/site/skill-brand-icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Skills",
  description: "Categorized design, development, cloud, and collaboration skill sets.",
};

const icons = [Brush, Code2, Cloud, Users, GitBranch];

const categoryThemes = [
  {
    iconClassName: "text-rose-500",
    iconBgClassName: "bg-rose-500/12 border-rose-500/25",
    chipClassName: "border-rose-500/25 bg-rose-500/8",
  },
  {
    iconClassName: "text-sky-500",
    iconBgClassName: "bg-sky-500/12 border-sky-500/25",
    chipClassName: "border-sky-500/25 bg-sky-500/8",
  },
  {
    iconClassName: "text-cyan-500",
    iconBgClassName: "bg-cyan-500/12 border-cyan-500/25",
    chipClassName: "border-cyan-500/25 bg-cyan-500/8",
  },
  {
    iconClassName: "text-emerald-500",
    iconBgClassName: "bg-emerald-500/12 border-emerald-500/25",
    chipClassName: "border-emerald-500/25 bg-emerald-500/8",
  },
  {
    iconClassName: "text-violet-500",
    iconBgClassName: "bg-violet-500/12 border-violet-500/25",
    chipClassName: "border-violet-500/25 bg-violet-500/8",
  },
] as const;

export default function SkillsPage() {
  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="Skills"
        title="Professional Skill Set"
        description="Structured overview of technical and collaborative strengths across UX, frontend development, and cloud-adjacent work."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = icons[index % icons.length];
          const theme = categoryThemes[index % categoryThemes.length];

          return (
            <FadeIn key={category.title} delay={0.06 * index}>
              <Card className="glass h-full transition-transform duration-300 hover:-translate-y-0.5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <span className={`inline-flex size-8 items-center justify-center rounded-full border ${theme.iconBgClassName}`}>
                      <Icon className={`size-4 ${theme.iconClassName}`} />
                    </span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className={`gap-1.5 bg-background/70 text-foreground ${theme.chipClassName}`}>
                        <SkillBrandIcon skill={skill} className="size-3.5" />
                        <span>{skill}</span>
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
