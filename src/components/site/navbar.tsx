"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems, profilePhoto } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = useMemo(
    () => (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href)),
    [pathname]
  );

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl transition-all duration-300",
        isScrolled ? "shadow-[0_2px_18px_rgba(2,6,23,0.08)]" : "shadow-[0_1px_0_rgba(255,255,255,0.06)]"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between px-4 md:px-6 transition-all duration-300",
          isScrolled ? "py-2" : "py-3"
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <span
            className={cn(
              "relative inline-flex overflow-hidden rounded-full border border-border/80 bg-foreground shadow-sm transition-all duration-300",
              isScrolled ? "size-8 text-xs" : "size-9 text-sm"
            )}
          >
            <Image
              src={profilePhoto.src}
              alt={profilePhoto.alt}
              fill
              className="object-cover"
              sizes="36px"
            />
          </span>
          <span
            className={cn(
              "hidden text-muted-foreground md:inline transition-all duration-300",
              isScrolled ? "text-xs" : "text-sm"
            )}
          >
            Anabhayan Ahruran • Portfolio
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors",
                isActive(item.href)
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            size="icon"
            variant="outline"
            className="h-9 w-9 rounded-full border-border/70 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav className="mx-auto mb-3 grid w-[calc(100%-2rem)] max-w-6xl grid-cols-2 gap-2 rounded-2xl border border-border/70 bg-card/95 p-3 shadow-lg backdrop-blur lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-xl px-3 py-2 text-sm",
                isActive(item.href)
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
