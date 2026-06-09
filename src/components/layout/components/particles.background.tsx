"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    particlesJS: any;
  }
}

export const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    // Динамически загружаем particles.js
    const loadParticlesJS = async () => {
      if (typeof window !== "undefined" && !window.particlesJS) {
        //@ts-ignore
        await import("particles.js");
      }

      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#6366f1",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.3,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#8b5cf6",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
          },
        });
      }
    };

    loadParticlesJS();

    return () => {
      const particlesContainer = document.getElementById("particles-js");
      if (particlesContainer) {
        particlesContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -10,
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    />
  );
};
