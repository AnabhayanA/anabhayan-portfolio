import Image from "next/image";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import type { LifeMoment } from "@/lib/site-data";

type MomentsSlideshowProps = {
  moments: LifeMoment[];
  locationLabel: string;
};

function deriveTitle(imagePath: string, index: number) {
  const fileName = imagePath.split("/").pop() ?? "";
  const baseName = fileName.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();

  if (!baseName) {
    return `Campus Moment ${index + 1}`;
  }

  return baseName.replace(/\b\w/g, (char) => char.toUpperCase());
}

function groupMoments(moments: LifeMoment[]) {
  return moments.reduce<Record<string, LifeMoment[]>>((acc, moment) => {
    const groupName = moment.group ?? "General";
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(moment);
    return acc;
  }, {});
}

function buildFullerStrip(items: LifeMoment[]) {
  if (items.length === 0) {
    return items;
  }

  if (items.length >= 5) {
    return items;
  }

  const targetCount = 6;
  const expanded: LifeMoment[] = [];

  for (let index = 0; index < targetCount; index += 1) {
    expanded.push(items[index % items.length]);
  }

  return expanded;
}

export function MomentsSlideshow({ moments, locationLabel }: MomentsSlideshowProps) {
  const grouped = Object.entries(groupMoments(moments));

  if (moments.length === 0) {
    return (
      <Card className="glass border border-dashed border-border/70 bg-background/60">
        <CardContent className="py-10 text-center text-sm text-muted-foreground">
          No photos added yet for {locationLabel}. Drop images into public/events/{locationLabel.toLowerCase()} and add them to lifeMoments.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {grouped.map(([groupName, groupItems], groupIndex) => (
        <div key={`${locationLabel}-${groupName}`} className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.24em] text-muted-foreground uppercase">{groupName}</p>
          <div className="comic-marquee">
            {(() => {
              const fullerItems = buildFullerStrip(groupItems);

              return (
              <div
                className={`comic-track ${groupIndex % 2 === 1 ? "comic-track-reverse" : ""}`}
                style={{ animationDuration: `${Math.max(30, fullerItems.length * 8.5)}s` }}
              >
                {[...fullerItems, ...fullerItems].map((moment, itemIndex) => {
                  const sourceIndex = itemIndex % fullerItems.length;

                  return (
                    <Card
                      key={`${groupName}-${itemIndex}-${moment.image}`}
                      className="photo-card film-card group/photo w-[82vw] max-w-[22rem] shrink-0 border border-zinc-700 bg-[#121212] p-3 text-zinc-100 shadow-[0_14px_30px_rgba(0,0,0,0.34)] sm:w-[24rem] sm:max-w-none"
                    >
                      <div className="space-y-3">
                        <div className="photo-frame relative aspect-[4/3] overflow-hidden border border-zinc-200/75 bg-black">
                          <div
                            className="photo-image-shell absolute inset-0"
                            style={{
                              ...(moment.imageScale ? { transform: `scale(${moment.imageScale})` } : {}),
                              ...(moment.imagePosition ? { transformOrigin: moment.imagePosition } : { transformOrigin: "center top" }),
                            }}
                          >
                            <Image
                              src={moment.image}
                              alt={moment.title ?? deriveTitle(moment.image, sourceIndex)}
                              fill
                              className={`photo-image ${moment.imageFit === "contain" ? "object-contain" : "object-cover"}`}
                              style={moment.imagePosition ? { objectPosition: moment.imagePosition } : { objectPosition: "center 24%" }}
                              sizes="(min-width: 640px) 24rem, 72vw"
                              quality={72}
                            />
                          </div>
                          <div className="photo-vignette absolute inset-0" aria-hidden="true" />
                        </div>

                        <div className="px-1 pb-1 text-left">
                          <p className="text-[0.6rem] font-semibold tracking-[0.22em] text-zinc-400 uppercase">{moment.label ?? `${locationLabel} Highlight`}</p>
                          <CardTitle className="mt-1 text-base leading-snug text-zinc-100 sm:text-lg">{moment.title ?? deriveTitle(moment.image, sourceIndex)}</CardTitle>
                          {moment.description ? (
                            <CardDescription className="mt-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">{moment.description}</CardDescription>
                          ) : null}
                          <p className="mt-2 text-[0.58rem] font-medium tracking-[0.3em] text-zinc-500 uppercase">35mm Reel • Portfolio Cut</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
              );
            })()}
          </div>
        </div>
      ))}
    </div>
  );
}
