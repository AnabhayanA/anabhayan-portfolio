import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, ExternalLink } from "lucide-react";

import { FadeIn } from "@/components/site/fade-in";
import { PageReveal } from "@/components/site/page-reveal";
import { PdfViewer } from "@/components/site/pdf-viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { uxCaseStudies } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return uxCaseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = uxCaseStudies.find((item) => item.slug === slug);

  if (!study) {
    return { title: "Case Study" };
  }

  return {
    title: `${study.title} Case Study`,
    description: study.teaser,
  };
}

function BulletSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="glass h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((item) => (
            <li key={item} className="rounded-lg border border-border/60 bg-background/30 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default async function UxCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = uxCaseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <PageReveal className="page-wrap">
      <FadeIn>
        <div className="glass rounded-3xl p-6 md:p-10">
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">UX Case Study</p>
          <h1 className="mt-3 text-3xl md:text-5xl">{study.title}</h1>
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground md:text-base">{study.teaser}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.tools.map((tool) => (
              <Badge key={tool} variant="outline">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </FadeIn>

      <section className="mt-6">
        <FadeIn>
          <Card className="glass">
            <CardHeader>
              <CardTitle>Project Snapshot</CardTitle>
              <CardDescription>Quick context for recruiters and reviewers.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <div className="rounded-2xl border border-border/60 bg-background/35 p-4">
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Role</p>
                <p className="mt-2 text-sm font-medium text-foreground">{study.snapshot.role}</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/35 p-4">
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Timeline</p>
                <p className="mt-2 text-sm font-medium text-foreground">{study.snapshot.timeline}</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/35 p-4">
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Collaboration</p>
                <p className="mt-2 text-sm font-medium text-foreground">{study.snapshot.collaboration}</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/35 p-4">
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Scope</p>
                <p className="mt-2 text-sm font-medium text-foreground">{study.snapshot.scope}</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/35 p-4">
                <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">Impact</p>
                <p className="mt-2 text-sm font-medium text-foreground">{study.snapshot.impact}</p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <FadeIn>
          <BulletSection title="Problem" items={[study.problem]} />
        </FadeIn>
        <FadeIn delay={0.05}>
          <BulletSection title="Research" items={study.research} />
        </FadeIn>
        <FadeIn delay={0.08}>
          <BulletSection title="Process" items={study.process} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <BulletSection title="Wireframes" items={study.wireframes} />
        </FadeIn>
        <FadeIn delay={0.12}>
          <BulletSection title="Final Design" items={study.finalDesign} />
        </FadeIn>
        <FadeIn delay={0.14}>
          <BulletSection title="Outcomes" items={study.outcomes} />
        </FadeIn>
      </section>

      {study.artifacts && study.artifacts.length > 0 ? (
        <section className="mt-6">
          <FadeIn>
            <Card className="glass">
              <CardHeader>
                <CardTitle>Supporting Artifacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {study.artifacts.map((artifact) => (
                    <Button key={artifact.href} asChild variant="outline" className="h-auto justify-start rounded-full py-2 text-left whitespace-normal">
                      <Link href={artifact.href} target="_blank" rel="noreferrer">
                        {artifact.label}
                        {artifact.kind === "pdf" ? " (PDF)" : ""}
                        {artifact.kind === "image" ? " (Image)" : ""}
                        {artifact.kind === "slides" ? " (Slides)" : ""}
                      </Link>
                    </Button>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  {study.artifacts.map((artifact) => (
                    <div key={`${artifact.href}-preview`} className="rounded-2xl border border-border/60 bg-background/30 p-3">
                      <p className="mb-3 text-sm font-medium text-foreground">{artifact.label}</p>

                      {artifact.kind === "pdf" ? (
                        <div className="space-y-3">
                          <PdfViewer src={artifact.href} title={artifact.label} />

                          <div className="grid gap-2 sm:grid-cols-2">
                            <Button asChild variant="outline" className="rounded-full">
                              <Link href={artifact.href} target="_blank" rel="noreferrer">
                                <ExternalLink className="size-4" /> Open PDF
                              </Link>
                            </Button>
                            <Button asChild className="rounded-full">
                              <Link href={artifact.href} download>
                                <Download className="size-4" /> Download PDF
                              </Link>
                            </Button>
                          </div>
                        </div>
                      ) : null}

                      {artifact.kind === "image" ? (
                        <Image
                          src={artifact.href}
                          alt={artifact.label}
                          width={1600}
                          height={1000}
                          className="h-auto w-full rounded-xl border border-border/50 bg-black/35 object-contain p-1"
                          quality={78}
                        />
                      ) : null}

                      {artifact.kind === "slides" || artifact.kind === "link" ? (
                        <div className="grid min-h-[220px] place-items-center rounded-xl border border-dashed border-border/50 px-4 text-center text-sm text-muted-foreground">
                          This artifact opens in a new tab.
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </section>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
          <Link href="/ux">Back to UX Page</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </PageReveal>
  );
}
