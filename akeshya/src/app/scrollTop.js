// components/ScrollToTopButton.js
"use client";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 bg-[#14279b] flex justify-center items-center rounded-[4px] w-[40px] h-[40px] shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <svg
        class="w-[28px] h-[28px]"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#fff"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
        ></path>
      </svg>
    </button>
  );
};

export default ScrollTop;
