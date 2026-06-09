"use client";

import { useTheme } from "@/components/providers/theme/theme.provider";
import React from "react";

export const ThemeChanger: React.FC = () => {
  const { toggleDarkLight, currentTheme } = useTheme();

  return (
    <button
      onClick={toggleDarkLight}
      className="relative w-14 h-8 ml-4 focus:outline-none group cursor-pointer"
      aria-label={`Переключить тему. Текущая тема: ${
        currentTheme === "dark" ? "тёмная" : "светлая"
      }`}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-500 group-hover:scale-105">
        <div
          className={`absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full transition-opacity duration-500 ${
            currentTheme === "light" ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>

      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
        <i
          className={`fas fa-moon text-xs transition-all duration-500 ${
            currentTheme === "dark"
              ? "text-white opacity-100"
              : "text-gray-300 opacity-40"
          }`}
        ></i>
      </div>

      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <i
          className={`fas fa-sun text-xs transition-all duration-500 ${
            currentTheme === "light"
              ? "text-white opacity-100"
              : "text-gray-400 opacity-40"
          }`}
        ></i>
      </div>

      <div
        className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-500 ease-in-out"
        style={{
          left: currentTheme === "dark" ? "0.25rem" : "calc(100% - 1.75rem)",
          transitionProperty: "left, transform, background-color",
        }}
      >
        {currentTheme === "dark" ? (
          <i className="fas fa-moon text-purple-600 text-xs transition-colors duration-500"></i>
        ) : (
          <i className="fas fa-sun text-yellow-500 text-xs transition-colors duration-500"></i>
        )}
      </div>
    </button>
  );
};
