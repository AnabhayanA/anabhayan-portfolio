import {
  BarChart3,
  BrainCircuit,
  Boxes,
  Cloud,
  Database,
  GitBranch,
  PencilRuler,
  Search,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { SVGProps } from "react";

type IconProps = {
  className?: string;
};

function HtmlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#E34F26" d="M3.2 2h17.6l-1.6 18.2L12 22 4.8 20.2 3.2 2Z" />
      <path fill="#EF652A" d="M12 3.5v17.1l5.8-1.4 1.3-15.7H12Z" />
      <path fill="#fff" d="m7.1 5.8.2 2.3H12v-2.3H7.1Zm.4 4.5.2 2.2H12v-2.2H7.5Zm4.5 7.2V15l-.1.1-2.5-.6-.2-2H7l.3 3.5 4.7 1.2Zm-.1-7.2v2.2h2.6l-.2 2.5-2.4.6v2.4l4.6-1.2.1-.4.4-5 .1-1.1h-5.2Zm0-4.5v2.3h5.4l.1-1.2.1-1.1h-5.6Z" />
    </svg>
  );
}

function CssIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#1572B6" d="M3.2 2h17.6l-1.6 18.2L12 22 4.8 20.2 3.2 2Z" />
      <path fill="#33A9DC" d="M12 3.5v17.1l5.8-1.4 1.3-15.7H12Z" />
      <path fill="#fff" d="M7.2 5.8 7.4 8H12V5.8H7.2Zm4.8 11.8V15l-.1.1-2.4-.6-.2-2H7.2l.3 3.5 4.5 1.1Zm5.2-9.7.2-2.1h-5.5V8h3l-.2 2.3h-2.8v2.2h2.6l-.2 2.5-2.4.6v2.4l4.6-1.1.1-.4.4-5 .1-1.2Z" />
    </svg>
  );
}

function JavaScriptIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path
        fill="#000"
        d="M15.9 17.9c.5.8 1.2 1.4 2.5 1.4 1 0 1.7-.5 1.7-1.2 0-.9-.7-1.2-1.8-1.7l-.6-.3c-1.8-.8-3-1.7-3-3.6 0-1.8 1.4-3.2 3.6-3.2 1.6 0 2.7.5 3.5 2l-1.9 1.2c-.4-.8-.9-1.1-1.7-1.1s-1.3.4-1.3 1.1c0 .8.5 1.1 1.6 1.6l.6.3c2.1.9 3.3 1.8 3.3 3.8 0 2.2-1.7 3.4-4 3.4-2.2 0-3.6-1-4.3-2.4l1.8-1.1Zm-8.2.2c.4.7.8 1.3 1.7 1.3.9 0 1.4-.3 1.4-1.6V9.5h2.3v8.3c0 2.5-1.5 3.6-3.6 3.6-2 0-3.1-1-3.7-2.2l1.9-1.1Z"
      />
    </svg>
  );
}

function ReactIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.3" fill="none">
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

function TailwindIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#38BDF8"
        d="M12 6c-3.2 0-5.2 1.6-6 4.8.8-1.6 1.8-2.2 3-1.8.7.2 1.2.8 1.8 1.5 1 1.1 2.1 2.3 4.2 2.3 3.2 0 5.2-1.6 6-4.8-.8 1.6-1.8 2.2-3 1.8-.7-.2-1.2-.8-1.8-1.5C15.2 7.2 14.1 6 12 6Zm-3 5.2c-3.2 0-5.2 1.6-6 4.8.8-1.6 1.8-2.2 3-1.8.7.2 1.2.8 1.8 1.5 1 1.1 2.1 2.3 4.2 2.3 3.2 0 5.2-1.6 6-4.8-.8 1.6-1.8 2.2-3 1.8-.7-.2-1.2-.8-1.8-1.5-1-1.1-2.1-2.3-4.2-2.3Z"
      />
    </svg>
  );
}

function NextJsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path fill="#fff" d="M8 8h1.5l6 8V8H17v8h-1.4l-6.1-8v8H8V8Z" />
    </svg>
  );
}

function FigmaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="9" cy="5" r="4" fill="#F24E1E" />
      <circle cx="15" cy="5" r="4" fill="#FF7262" />
      <circle cx="9" cy="12" r="4" fill="#A259FF" />
      <circle cx="15" cy="12" r="4" fill="#1ABCFE" />
      <circle cx="9" cy="19" r="4" fill="#0ACF83" />
    </svg>
  );
}

function AzureIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#0078D4" d="M13.3 2 5.2 16h5L14 9.7 17.3 16H22L13.3 2Z" />
      <path fill="#50A9F8" d="M9.5 22h6.6L10.5 12H4l5.5 10Z" />
    </svg>
  );
}

function MySqlIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <ellipse cx="12" cy="6" rx="6.8" ry="2.7" fill="#00758F" />
      <path fill="#00758F" d="M5.2 6v8.2C5.2 15.7 8.2 17 12 17s6.8-1.3 6.8-2.8V6c0 1.5-3 2.8-6.8 2.8S5.2 7.5 5.2 6Z" />
      <ellipse cx="12" cy="14.2" rx="6.8" ry="2.8" fill="#F29111" />
    </svg>
  );
}

function PhpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <ellipse cx="12" cy="12" rx="10" ry="6.6" fill="#777BB3" />
      <path fill="#fff" d="M7.3 14.7H6.1l1.1-5h2.1c1 0 1.5.6 1.3 1.5-.2 1-1 1.6-2.1 1.6H7.8l-.5 1.9Zm.8-2.8h.6c.5 0 .9-.3 1-.8s-.1-.7-.6-.7h-.6l-.4 1.5Zm4.4 2.8h-1.2l1.1-5h2.1c1 0 1.5.6 1.3 1.5-.2 1-1 1.6-2.1 1.6H13l-.5 1.9Zm.8-2.8h.6c.5 0 .9-.3 1-.8s-.1-.7-.6-.7h-.6l-.4 1.5Zm4.1 2.8h-1.1l1.1-5h1.1l-.4 1.8h1.8l.4-1.8h1.1l-1.1 5h-1.1l.4-2h-1.8l-.4 2Z" />
    </svg>
  );
}

function GitHubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.86 8.37 6.84 9.72.5.1.68-.22.68-.48 0-.24-.01-.88-.02-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.62.07-.62 1.01.07 1.54 1.07 1.54 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.38-2.03 1-2.74-.1-.26-.43-1.31.1-2.73 0 0 .82-.27 2.7 1.05a9.1 9.1 0 0 1 4.9 0c1.87-1.32 2.69-1.05 2.69-1.05.54 1.42.2 2.47.1 2.73.62.71 1 1.62 1 2.74 0 3.96-2.35 4.81-4.58 5.07.36.32.67.94.67 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.48A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function VsCodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#29B6F6" d="m16.8 2.4 4.1 2c.6.3.9.9.9 1.6v12c0 .7-.4 1.3-1 1.6l-4 1.9c-1 .5-2.1-.2-2.1-1.3V3.7c0-1.1 1.2-1.8 2.1-1.3Z" />
      <path fill="#0277BD" d="m4.4 9.2 7.8-6.2v4.6L7.9 12l4.3 4.4V21l-7.8-6.2a1.8 1.8 0 0 1 0-5.6Z" />
    </svg>
  );
}

function NotionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="#fff" stroke="#111" strokeWidth="1.8" />
      <path fill="#111" d="M8 17V7h1.8l4.4 6.2V7H16v10h-1.7L9.8 10.6V17H8Z" />
    </svg>
  );
}

function JiraIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#2684FF" d="m12.8 3 2.4 2.4-5.9 5.9H7L12.8 3Z" />
      <path fill="#0052CC" d="m15.8 6 2.3 2.3-6 6h-2.4l6.1-6Z" />
      <path fill="#4C9AFF" d="m8.1 9.7 2.4 2.4-2.4 2.4H5.7l2.4-2.4-2.4-2.4h2.4Z" />
    </svg>
  );
}

function PowerBiIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="3" y="12" width="3.5" height="8" rx="1" fill="#F2C811" />
      <rect x="8" y="9" width="3.5" height="11" rx="1" fill="#E3B700" />
      <rect x="13" y="6" width="3.5" height="14" rx="1" fill="#D9AA00" />
      <rect x="18" y="4" width="3" height="16" rx="1" fill="#C69200" />
    </svg>
  );
}

const fallbackBySkill: Record<string, LucideIcon> = {
  "UX Research": Search,
  Wireframing: PencilRuler,
  Prototyping: Workflow,
  "Design Systems": Boxes,
  "Cloud Fundamentals": Cloud,
  "AI Fundamentals": BrainCircuit,
  "Interview Analysis": Search,
  "Diary Studies": PencilRuler,
  "Agile Methods": Workflow,
};

const brandIcons: Record<string, (props: IconProps) => JSX.Element> = {
  Figma: FigmaIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  JavaScript: JavaScriptIcon,
  React: ReactIcon,
  "Tailwind CSS": TailwindIcon,
  "Next.js": NextJsIcon,
  Azure: AzureIcon,
  MySQL: MySqlIcon,
  PHP: PhpIcon,
  GitHub: GitHubIcon,
  "VS Code": VsCodeIcon,
  Notion: NotionIcon,
  Jira: JiraIcon,
  "Power BI": PowerBiIcon,
};

export function SkillBrandIcon({ skill, className }: { skill: string } & SVGProps<SVGSVGElement>) {
  const BrandIcon = brandIcons[skill];
  if (BrandIcon) {
    return <BrandIcon className={className} />;
  }

  const FallbackIcon = fallbackBySkill[skill] ?? Database;
  return <FallbackIcon className={className} aria-hidden="true" />;
}
