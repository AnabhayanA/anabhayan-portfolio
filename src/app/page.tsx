import { ArrowRight, BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/site/fade-in";
import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/components/site/brand-icons";
import { PageReveal } from "@/components/site/page-reveal";
import { CountUp } from "@/components/site/count-up";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { profilePhoto, quickStats, socialLinks, uxCaseStudies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Project manager portfolio for Anabhayan Ahruran, first-generation Information Systems student at NJIT.",
};

export default function HomePage() {
  const featuredCases = uxCaseStudies.slice(0, 3);

  const socialIcons = {
    linkedin: LinkedInIcon,
    github: GitHubIcon,
    gmail: GmailIcon,
  } as const;

  const socialIconClassNames = {
    linkedin: "social-chip-icon size-3.5 text-[#0A66C2]",
    github: "social-chip-icon size-3.5 text-[#c9d1d9]",
    gmail: "social-chip-icon size-3.5 text-[#EA4335]",
  } as const;

  return (
    <PageReveal className="page-wrap">
      <section className="relative overflow-hidden rounded-3xl border border-border/70 bg-[linear-gradient(140deg,rgba(12,12,12,0.94),rgba(8,8,8,0.98))] p-7 md:p-12">
        <FadeIn>
          <Badge variant="secondary" className="mb-5 bg-muted text-foreground">
            Project Manager Portfolio | Open to Internship Opportunities
          </Badge>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-6xl">
            Anabhayan Ahruran
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-4 max-w-3xl text-lg text-foreground/80 md:text-xl">
            First-Generation College Student | Information Systems @ NJIT | Web & Mobile Development Minor | UX & Product Design | Open to Internships
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            I am a first-generation college student who likes building websites, creating design concepts, and turning
            ideas from my studies into user-centered digital experiences people can actually use. My career goal is to
            become a Project Manager who leads teams from discovery through delivery.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            <Link href="/ux">
              View PM Case Studies <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-border bg-background/60 text-foreground hover:bg-muted/70">
            <Link href="/development">View Project Portfolio</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-border bg-background/60 text-foreground hover:bg-muted/70">
            <Link href="/resume">Resume</Link>
          </Button>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8 flex flex-wrap items-center gap-3">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="social-chip"
            >
              {(() => {
                const Icon = socialIcons[item.icon];

                return <Icon className={socialIconClassNames[item.icon]} />;
              })()}
              {item.label}
            </Link>
          ))}
        </FadeIn>

        <FadeIn delay={0.22} className="mt-8 max-w-sm">
          <Card className="glass border-border/70 bg-background/70">
            <CardHeader>
              <CardTitle className="text-base">Profile Photo</CardTitle>
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
                    sizes="(min-width: 768px) 360px, 100vw"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </section>

      <section className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((item, index) => (
          <FadeIn key={item.label} delay={0.05 * index}>
            <Card className="glass">
              <CardHeader>
                <CardDescription>{item.label}</CardDescription>
                <CardTitle className="text-3xl text-foreground">
                  {Number.isFinite(Number(item.value)) ? <CountUp end={Number(item.value)} startDelayMs={index * 140} /> : item.value}
                </CardTitle>
              </CardHeader>
            </Card>
          </FadeIn>
        ))}
      </section>

      <section className="mt-16">
        <FadeIn>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">Featured Work</p>
              <h2 className="mt-3 text-3xl md:text-4xl">Selected UX Highlights</h2>
            </div>
            <Button asChild variant="ghost" className="rounded-full">
              <Link href="/ux">See all case studies</Link>
            </Button>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredCases.map((item, index) => (
            <FadeIn key={item.slug} delay={0.06 * index}>
              <Card className="glass h-full">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.teaser}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {item.tools.slice(0, 2).map((tool) => (
                      <Badge key={tool} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full justify-between rounded-full">
                    <Link href={`/ux/${item.slug}`}>
                      View Case Study <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        <FadeIn>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BriefcaseBusiness className="size-4 text-foreground/70" /> Internship Ready
              </CardTitle>
              <CardDescription>
                Open to Project Management internships with UX, product, and technical delivery responsibilities.
              </CardDescription>
            </CardHeader>
          </Card>
        </FadeIn>
        <FadeIn delay={0.06}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <GraduationCap className="size-4 text-foreground/70" /> NJIT Information Systems
              </CardTitle>
              <CardDescription>Minor in Web & Mobile App Development with product and UX emphasis.</CardDescription>
            </CardHeader>
          </Card>
        </FadeIn>
        <FadeIn delay={0.12}>
          <Card className="glass h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="size-4 text-foreground/70" /> Human-Centered + Technical
              </CardTitle>
              <CardDescription>
                Focused on building useful products where design quality and implementation quality align.
              </CardDescription>
            </CardHeader>
          </Card>
        </FadeIn>
      </section>
    </PageReveal>
  );
}
