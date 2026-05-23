import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 4.98 8a2.5 2.5 0 0 0 0-4.5ZM3.5 9h3v12h-3V9Zm5 0h2.9v1.64h.04c.4-.75 1.38-1.54 2.84-1.54C17.32 9.1 19 10.92 19 14.1V21h-3v-6.13c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.58-2.34 3.22V21h-3V9Z" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.86 8.37 6.84 9.72.5.1.68-.22.68-.48 0-.24-.01-.88-.02-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.17-1.11-1.48-1.11-1.48-.91-.64.07-.62.07-.62 1.01.07 1.54 1.07 1.54 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.38-2.03 1-2.74-.1-.26-.43-1.31.1-2.73 0 0 .82-.27 2.7 1.05a9.1 9.1 0 0 1 4.9 0c1.87-1.32 2.69-1.05 2.69-1.05.54 1.42.2 2.47.1 2.73.62.71 1 1.62 1 2.74 0 3.96-2.35 4.81-4.58 5.07.36.32.67.94.67 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.48A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function GmailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 8.25 12 14l7.5-5.75" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 8.25 9.25 12" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 8.25 14.75 12" fill="none" stroke="#34A853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14V20" fill="none" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}