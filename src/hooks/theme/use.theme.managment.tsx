"use client";

import { useState, useEffect } from "react";
import { themeList } from "./config/theme.config";
import { IReturnThemeManagment } from "./types/return.type";

export const useThemeManagment = (): IReturnThemeManagment => {
  const [currentTheme, setCurrentTheme] = useState<string>("dark");
  const [mounted, setMounted] = useState(false);

  function getSavedTheme() {
    try {
      if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "dark";
      }
    } catch (error) {
      console.error("Error reading theme from localStorage:", error);
    }
    return "dark";
  }

  useEffect(() => {
    const savedTheme = getSavedTheme();
    setCurrentTheme(savedTheme);

    const root = document.documentElement;
    if (savedTheme) {
      root.setAttribute("data-theme", savedTheme);
    }

    setMounted(true);
  }, []);

  const applyTheme = (themeName: string) => {
    const theme = themeList.find((t) => t === themeName);
    const root = document.documentElement;

    if (theme) {
      try {
        root.setAttribute("data-theme", themeName);
        localStorage.setItem("theme", themeName);
        setCurrentTheme(themeName);
      } catch (error) {
        console.error("Error applying theme:", error);
      }
    } else {
      console.warn(
        `Theme not found: ${themeName}, falling back to light theme`,
      );
      applyTheme("dark");
    }
  };

  function getCurrentTheme() {
    if (typeof window !== "undefined") {
      return document.documentElement.getAttribute("data-theme") || "dark";
    }
    return "dark";
  }

  function toggleDarkLight() {
    const currentTheme = getCurrentTheme();
    const currentThemeData = themeList.find((t) => t === currentTheme);

    if (currentThemeData) {
      const oppositeThemes = themeList.filter((t) => t !== currentThemeData);
      if (oppositeThemes.length > 0) {
        applyTheme(oppositeThemes[0]);
        return oppositeThemes[0];
      }
    }

    const newTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(newTheme);
    return newTheme;
  }

  return {
    applyTheme,
    getSavedTheme,
    toggleDarkLight,
    currentTheme,
  };
};
