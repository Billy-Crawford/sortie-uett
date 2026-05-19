// src/components/ui/theme-switcher.tsx

"use client";

import { MoonStar, SunMedium } from "lucide-react";
import useTheme from "@/hooks/use-theme";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const isUett = theme === "uett";

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:scale-105"
    >
      {isUett ? <MoonStar size={18} /> : <SunMedium size={18} />}

      <span>{isUett ? "Nature" : "UETT"}</span>
    </button>
  );
}

