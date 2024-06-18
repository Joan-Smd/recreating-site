"use client";
import Image from "next/image";
import ContactUs from "./contactUs";
import Service from "./service";
import Link from "next/link";
import AboutUs from "./about";
import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";


export default function Home() {
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
    <main className="">
      <div className="mt-[94px] py-[60px] lg:max-w-[1140px] lg:mx-auto">
        <div className="flex lg:flex-row flex-col-reverse space-x-4">
          <div
            style={{ fontFamily: "Raleway, sans-serif" }}
            className="flex flex-col justify-center lg:px-0 px-3 lg:pt-0 pt-[48px]"
          >
            <h1 className="section lg:text-[48px] text-[28px] text-[#14279b] lg:leading-[56px] leading-[32px] font-[700] mb-[10px]">
              Grow your business with Akeshya
            </h1>
            <h3 className="section lg:text-[24px] text-[18px] text-[#484848] leading-[24px] font-[400] lg:mb-[50px] mb-[30px]">
              We are team of talented website designers, developers & digital
              marketeers
            </h3>
            <Link href="/about">
              <button className="section bg-white hover:bg-[#14279b] hover:text-white text-[#14279b] text-[16px] font-[600] border-[2px] border-[#14279b] rounded-[50px] px-[30px] py-[10px]">
                Get Started
              </button>
            </Link>
          </div>
          <div className="lg:min-w-[578px] lg:block flex justify-center">
            <Image
              src="/hero-img.png"
              alt="Banner"
              className="lg:w-[578px] lg:h-[430px] w-[80%] h-[240px] bounces"
              width={578}
              height={430}
            />
          </div>
        </div>
      </div>
      <div className="py-[10px] bg-[#f3f9fd]">
        <div className="max-w-[1140px] mx-auto lg:flex grid grid-cols-2 flex-row justify-between items-center">
          <div className="py-[10px] lg:block flex justify-center">
            <Image
              src="/client-1.png"
              alt="Client Logo"
              className="w-[83px] h-[83px] grayscale hover:grayscale-0"
              width={83}
              height={83}
            />
          </div>

          <div className="py-[10px] lg:block flex justify-center">
            <Image
              src="/client-2.png"
              alt="Client Logo"
              className="w-[83px] h-[62px] grayscale hover:grayscale-0"
              width={83}
              height={62}
            />
          </div>

          <div className="py-[10px] lg:block flex justify-center">
            <Image
              src="/client-3.png"
              alt="Client Logo"
              className="w-[83px] h-[48px] grayscale hover:grayscale-0"
              width={83}
              height={48}
            />
          </div>

          <div className="py-[10px] lg:block flex justify-center">
            <Image
              src="/client-4.png"
              alt="Client Logo"
              className="w-[83px] h-[63px] grayscale hover:grayscale-0"
              width={83}
              height={63}
            />
          </div>

          <div className="py-[10px] lg:block flex justify-center">
            <Image
              src="/client-5.png"
              alt="Client Logo"
              className="w-[83px] h-[24px] grayscale hover:grayscale-0"
              width={83}
              height={24}
            />
          </div>

          <div className="py-[10px] lg:block flex justify-center">
            <Image
              src="/client-6.png"
              alt="Client Logo"
              className="w-[83px] h-[70px] grayscale hover:grayscale-0"
              width={83}
              height={70}
            />
          </div>
        </div>
      </div>
      <AboutUs />
      <div id="service">
        <Service />
        <ContactUs />
      </div>
    </main>
  );
}
