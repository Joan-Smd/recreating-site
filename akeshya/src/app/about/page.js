"use client";
import Link from "next/link";
import Image from "next/image";
import AboutUs from "../about";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const revealSection = () => {
      const windowHeight = window.innerHeight;
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Initial call to reveal any sections in view on load

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", revealSection);
  }, []);
  return (
    <div className="mt-[94px]">
      <AboutUs />
    </div>
  );
}
