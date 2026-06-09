"use client";
import { useEffect, useLayoutEffect, useState } from "react";

interface SplashScreenProps {
  children: React.ReactNode;
  duration?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  children,
  duration = 2000,
}) => {
  const [showSplash, setShowSplash] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useLayoutEffect(() => {
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");

    if (hasSeenSplash === "false") {
      setShowSplash(true);

      setTimeout(() => {
        setFadeOut(true);
      }, duration - 500);

      setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("hasSeenSplash", "true");
      }, duration);
    }
  }, [duration]);

  if (!showSplash) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-800 transition-opacity duration-1000 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center animate-spin-slow">
                <i className="fas fa-code text-4xl text-white"></i>
              </div>
            </div>

            <div className="absolute inset-0 border-4 border-purple-300 rounded-full animate-ping opacity-20"></div>
          </div>

          <div className="text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Приветствую!
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Портфолио frontend-разработчика
            </p>

            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto mb-4">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                style={{
                  animation: `progress ${duration}ms linear forwards`,
                  width: "0%",
                }}
              ></div>
            </div>

            <p className="text-gray-400 text-sm">Загружаю лучшие проекты...</p>
          </div>

          <div className="absolute bottom-8 flex space-x-6">
            <i className="fab fa-react text-3xl text-cyan-400"></i>
            <i className="fab fa-js text-3xl text-yellow-400"></i>
            <i className="fab fa-css3-alt text-3xl text-blue-400"></i>
            <i className="fab fa-html5 text-3xl text-orange-400"></i>
          </div>
        </div>
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

const splashStyles = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes progress {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = splashStyles;
  document.head.appendChild(styleSheet);
}
