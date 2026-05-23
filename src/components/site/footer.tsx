import Link from "next/link";

import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/components/site/brand-icons";
import { socialLinks } from "@/lib/site-data";

const socialIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  gmail: GmailIcon,
} as const;

const socialIconClassNames = {
  linkedin: "social-chip-icon size-4 text-[#0A66C2]",
  github: "social-chip-icon size-4 text-[#c9d1d9]",
  gmail: "social-chip-icon size-4 text-[#EA4335]",
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background/85 py-8 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row md:px-6">
        <p>© 2026 Anabhayan Ahruran. Built for product, UX, and engineering internship opportunities.</p>
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-end">
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
        </div>
      </div>
    </footer>
  );
}
