"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  durationMs?: number;
  startDelayMs?: number;
  className?: string;
};

export function CountUp({ end, durationMs = 900, startDelayMs = 0, className }: CountUpProps) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) {
          return;
        }

        setHasAnimated(true);
        const kickoff = () => {
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / durationMs, 1);
            setValue(Math.round(end * progress));

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        };

        if (startDelayMs > 0) {
          window.setTimeout(kickoff, startDelayMs);
        } else {
          kickoff();
        }

        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [durationMs, end, hasAnimated, startDelayMs]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
