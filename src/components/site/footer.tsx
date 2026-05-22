import Link from "next/link";

import { socialLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80 py-8 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row md:px-6">
        <p>© 2026 Anabhayan Ahruran. Crafted for internship opportunities in product and technology.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
