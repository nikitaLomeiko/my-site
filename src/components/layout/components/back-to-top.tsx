"use client";

import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
      setShow(window.pageYOffset > 500);
      // if (window.pageYOffset > 500) {
      //   setShow(false);
      // } else {
      //   backToTopBtn.style.opacity = "0";
      //   backToTopBtn.style.transform = "translateY(20px)";
      // }
    });
  });

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleBackToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center z-40 cursor-pointer ${
        isShow ? "opacity-95 -translate-y-4" : "opacity-0"
      } transition-all duration-500 hover:scale-110 hover:shadow-2xl`}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
};
