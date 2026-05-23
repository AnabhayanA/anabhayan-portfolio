import type { Metadata } from "next";
import Image from "next/image";

import { FadeIn } from "@/components/site/fade-in";
import { MomentsSlideshow } from "@/components/site/moments-slideshow";
import { PageReveal } from "@/components/site/page-reveal";
import { SectionHeader } from "@/components/site/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { lifeMoments, profilePhoto } from "@/lib/site-data";

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
  const campusMoments = lifeMoments.filter((moment) => moment.location === "campus");
  const offCampusMoments = lifeMoments.filter((moment) => moment.location === "off-campus");

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
              <CardDescription>{profilePhoto.caption}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/40">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={profilePhoto.src}
                    alt={profilePhoto.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
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
        <div className="rounded-3xl border border-white/10 bg-[#080808] p-6 text-zinc-100 shadow-[0_24px_60px_rgba(0,0,0,0.55)] md:p-8">
          <h2 className="text-2xl md:text-3xl">Campus and Career Highlights</h2>
          <p className="mt-2 max-w-3xl text-sm text-zinc-400">
            A black-theme collage wall for your events and career moments. Keep adding photos in
            <span className="mx-1 font-medium text-zinc-100">lifeMoments</span>
            inside
            <span className="mx-1 font-medium text-zinc-100">src/lib/site-data.ts</span>
            and this wall keeps stacking naturally.
          </p>
          <div className="mt-8 space-y-10">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-100">On-Campus</h3>
              <MomentsSlideshow moments={campusMoments} locationLabel="Campus" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-zinc-100">Off-Campus</h3>
              <MomentsSlideshow moments={offCampusMoments} locationLabel="Off-Campus" />
            </div>
          </div>
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
