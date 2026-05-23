import type { Metadata } from "next";

import { FadeIn } from "@/components/site/fade-in";
import { PageReveal } from "@/components/site/page-reveal";
import { SectionHeader } from "@/components/site/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { lifeMoments } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Background, project management goals, and internship interests of Anabhayan Ahruran.",
};

const educationTimeline = [
  {
    period: "Current",
    item: "B.S. Information Systems at NJIT",
    detail: "Specializing in Business with a minor in Web & Mobile App Development, combining technical skills with product and user thinking.",
  },
  {
    period: "Leadership",
    item: "Director of IT, ALPFA NJIT",
    detail: "Supporting operations, troubleshooting, and technology coordination for student organization events and communications.",
  },
  {
    period: "Experience",
    item: "IT Support Background",
    detail: "Hands-on teamwork under pressure with practical systems problem solving and a service-first mindset.",
  },
];

export default function AboutPage() {
  const polaroidTilts = ["-rotate-1", "rotate-1"];

  return (
    <PageReveal className="page-wrap">
      <SectionHeader
        eyebrow="About"
        title="Professional Profile"
        description="First-generation college student at NJIT building toward a Project Manager career through UX research, product thinking, and practical technical execution."
      />

      <div className="mb-4 grid gap-4 lg:grid-cols-[0.42fr_0.58fr]">
        <FadeIn>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Personal Photo</CardTitle>
              <CardDescription>A real headshot here helps the site feel more personal and recruiter-ready.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid min-h-[280px] place-items-center rounded-2xl border border-dashed border-border/70 bg-background/40 p-6">
                <div className="grid size-36 place-items-center rounded-full border border-dashed border-border/70 bg-muted/60 text-center text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">
                  Your Photo
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.05}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Campus and Career Activity Gallery</CardTitle>
              <CardDescription>
                A curated space for campus involvement, leadership, presentations, and career milestones.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              The goal is to show you outside of the project cards: in meetings, at events, while presenting, and in real teamwork settings.
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <section className="mt-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl">How I Work</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              I focus on planning clearly, collaborating cross-functionally, and delivering outcomes teams can trust.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Plan with Evidence",
              text: "I start with user needs, workflow friction, and constraints so project scope and priorities stay grounded in real evidence.",
            },
            {
              title: "Coordinate Clearly",
              text: "I break work into clear deliverables, communicate tradeoffs early, and align design and implementation around shared goals.",
            },
            {
              title: "Deliver Outcomes",
              text: "I measure progress with outcomes, not just output, and focus on quality that can scale from classroom projects to real teams.",
            },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={0.05 * index}>
              <Card className="glass h-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{item.text}</CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <FadeIn>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                I work at the intersection of product thinking, UX research, and implementation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>I am a first-generation college student with a practical, people-focused approach to solving product problems.</p>
              <p>I enjoy building websites, creating designs, and developing new ideas based on what I learn through projects and studies.</p>
              <p>I focus on turning research insights into clear digital experiences with strong visual hierarchy and thoughtful interaction decisions.</p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.06}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Core Focus</CardTitle>
              <CardDescription>Combining research, design, and development into outcomes teams can ship.</CardDescription>
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
                Built front-end and full-stack projects including inventory systems, organizational websites, and AI-assisted campus concepts, with a focus on clarity and real-world usability.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <FadeIn>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Role Interests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Project Management, UX Research and Design, Product roles, Frontend Engineering, and Cloud-adjacent opportunities.</p>
              <p>Expanding depth in Cloud Computing, SQL, AI fundamentals, Power BI, and Agile delivery practices.</p>
              <p>Most energized by products that create measurable value for users and teams.</p>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.06}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle>Career Direction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Secure internships in project management, UX, product, software engineering, or cloud-focused tracks.</p>
              <p>Grow into cross-functional roles that connect user insights, business priorities, and technical delivery.</p>
              <p className="font-medium text-foreground">Dream job: become a Project Manager who leads thoughtful, user-centered products from idea to delivery.</p>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl">Campus and Career Highlights</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Placeholder gallery for activity photos. Replace these cards with real moments from events, projects, and leadership work.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {lifeMoments.map((moment, index) => (
            <FadeIn key={moment.title} delay={0.06 * index}>
              <Card
                className={`h-full border border-border/40 bg-[#f8f4ea] p-4 text-[#1d1a17] shadow-[0_14px_34px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.01] hover:rotate-0 dark:bg-[#f4efe4] ${polaroidTilts[index % polaroidTilts.length]}`}
              >
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden border border-black/10 bg-[linear-gradient(135deg,#e9ddc6,#f7f1e6_45%,#ddd1bb)] shadow-inner">
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-center text-xs font-semibold tracking-[0.28em] text-[#6c5f4d] uppercase shadow-sm backdrop-blur">
                        Photo Placeholder
                      </div>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-dashed border-black/10 bg-white/35 px-4 py-3 text-center text-sm text-[#5f5344] backdrop-blur-sm">
                      Replace with a campus event, project showcase, or career milestone photo.
                    </div>
                  </div>

                  <div className="px-2 pb-1 text-center">
                    <p className="text-[0.68rem] font-semibold tracking-[0.3em] text-[#6c5f4d] uppercase">{moment.label}</p>
                    <CardTitle className="mt-2 text-xl text-inherit">{moment.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm leading-relaxed text-[#5f5344]">
                      {moment.description}
                    </CardDescription>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl md:text-3xl">Education and Leadership Timeline</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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
