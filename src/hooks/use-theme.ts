// src/hooks/use-theme.ts

"use client";

import { useEffect, useState } from "react";

type Theme = "uett" | "nature";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>("uett");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else {
      document.documentElement.className = "uett";
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "uett" ? "nature" : "uett";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    document.documentElement.className = newTheme;
  };

  return {
    theme,
    toggleTheme,
  };
}

