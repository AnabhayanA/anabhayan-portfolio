"use client";

import { MoonStar, Sun } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((current) => {
      const nextDark = !current;
      document.documentElement.classList.toggle("dark", nextDark);
      return nextDark;
    });
  };

  return (
    <Button
      type="button"
      size="icon"
      variant="outline"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-full border-border/70 bg-card/70 backdrop-blur"
    >
      {isDark ? <Sun className="size-4" /> : <MoonStar className="size-4" />}
    </Button>
  );
}
