import type { Metadata } from "next";

import { FadeIn } from "@/components/site/fade-in";
import { PageReveal } from "@/components/site/page-reveal";
import { SectionHeader } from "@/components/site/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: "Background, goals, and internship interests of Anabhayan Ahruran.",
};

const educationTimeline = [
  {
    period: "Current",
    item: "B.S. Information Systems at NJIT",
    detail: "Specializing in Business with a minor in Web & Mobile App Development.",
  },
  {
    period: "Leadership",
    item: "Director of IT, ALPFA NJIT",
    detail: "Supporting operations, troubleshooting, and technology coordination.",
  },
  {
    period: "Experience",
    item: "IT Support Background",
    detail: "Hands-on teamwork under pressure with practical systems problem solving.",
  },
];

export default function AboutPage() {
  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="About"
        title="Structured Storytelling, Clear Direction"
        description="A first-generation Information Systems student focused on building useful products where business goals, user experience, and technology execution align."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <FadeIn>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Who I Am</CardTitle>
              <CardDescription>
                Information Systems student at NJIT working at the intersection of technology, user experience, and business impact.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>First-generation college student with a practical, people-focused approach to solving product problems.</p>
              <p>Strong interest in turning research insights into clean, useful digital experiences.</p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.06}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>What I Do</CardTitle>
              <CardDescription>Blending product thinking, UX execution, and technical implementation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "PHP",
                  "MySQL",
                  "Tailwind CSS",
                  "UX Research",
                ].map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Built front-end and full-stack projects including inventory systems, multi-site portfolios, and an AI-powered student-life concept.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <FadeIn>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>What I&apos;m Interested In</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>UX/UI Research and Design, Product Management, and Web Development roles.</p>
              <p>Expanding into Cloud Computing, AI Fundamentals, SQL, Power BI, and Agile methodologies.</p>
              <p>Most energized by products that create measurable value for users and teams.</p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.06}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Career Goals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Secure internships in UX Design, Product Design, Web Development, and Cloud/Technology tracks.</p>
              <p>Grow into cross-functional roles that connect user insights, business needs, and technical delivery.</p>
              <p className="font-medium text-foreground">Always learning. Always building. Especially where technology and people meet.</p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl">Education Timeline</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {educationTimeline.map((entry, index) => (
            <FadeIn key={entry.item} delay={0.05 * index}>
              <Card className="glass h-full">
                <CardHeader>
                  <CardDescription>{entry.period}</CardDescription>
                  <CardTitle>{entry.item}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{entry.detail}</CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>
    </PageReveal>
  );
}
