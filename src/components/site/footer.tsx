import Link from "next/link";

import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/components/site/brand-icons";
import { socialLinks } from "@/lib/site-data";

const socialIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  gmail: GmailIcon,
} as const;

const socialIconClassNames = {
  linkedin: "size-4 text-[#0A66C2]",
  github: "size-4 text-[#181717] dark:text-[#f5f5f5]",
  gmail: "size-4",
} as const;

const socialLinkClassNames = {
  linkedin:
    "rounded-full border border-[#0A66C2]/20 bg-[#0A66C2]/8 px-3 py-1.5 text-foreground hover:border-[#0A66C2]/35 hover:bg-[#0A66C2]/14",
  github:
    "rounded-full border border-[#181717]/20 bg-[#181717]/8 px-3 py-1.5 text-foreground hover:border-[#181717]/35 hover:bg-[#181717]/14 dark:border-[#f5f5f5]/20 dark:bg-[#f5f5f5]/8 dark:hover:border-[#f5f5f5]/35 dark:hover:bg-[#f5f5f5]/14",
  gmail:
    "rounded-full border border-[#EA4335]/20 bg-[#EA4335]/8 px-3 py-1.5 text-foreground hover:border-[#EA4335]/35 hover:bg-[#EA4335]/14",
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
              className={`inline-flex items-center gap-2 transition-colors ${socialLinkClassNames[item.icon]}`}
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
