"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  function showBurger() {
    document.getElementById("burgerMenu").classList.toggle("hidden");
    console.log("triggered");
  }

  return (
    <div className="shadow-[0_1px_10px_-1px_rgba(0,3,0,0.1)] w-full bg-white z-30 fixed top-0 lg:py-0 py-3">
      <div
        id="header"
        className="lg:max-w-[1140px] lg:mx-auto flex flex-row justify-between lg:h-[94px] h-[70px] py-[22px] lg:px-0 px-3"
      >
        <div className="flex flex-row  items-center">
          <Image
            src="/akeshya-logo.png"
            alt="Vercel Logo"
            className="w-[65px] h-[70px] pb-1"
            width={65}
            height={70}
          />
          <p
            style={{ fontFamily: "Raleway, sans-serif" }}
            className="text-[30px] text-[#14279b] font-[700]"
          >
            AKESHYA
          </p>
        </div>
        <div className="lg:flex hidden items-center">
          <ul
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="flex flex-row items-center justify-center space-x-[30px]"
          >
            <li>
              <Link
                className="text-[#555555] hover:text-[#14279b] text-[15px]"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[#555555] hover:text-[#14279b] text-[15px]"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[#555555] hover:text-[#14279b] text-[15px]"
                href="/#service"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-[15px] bg-[#14279b] hover:bg-[#4aa3df] px-[25px] py-[12px] rounded-[50px]"
                href="/contactUs"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden block">
          <button onClick={showBurger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#222222"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="burgerMenu" className="hidden">
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-[#090909] bg-opacity-90 transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex flex-col min-h-full items-end justify-start space-y-2 px-4 py-6 text-center sm:items-center sm:p-0">
              <button onClick={showBurger}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#fff"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
              <div class="relative transform overflow-hidden rounded-lg bg-white w-full text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="w-full h-[87vh]">
                  <ul
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                    className="flex flex-col items-start justify-start space-y-[20px] py-[10px] px-[20px] w-full"
                  >
                    <li className="w-full">
                      <Link
                        className="text-[#555555] hover:text-[#14279b] text-[15px]"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        className="text-[#555555] hover:text-[#14279b] text-[15px]"
                        href="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        className="text-[#555555] hover:text-[#14279b] text-[15px]"
                        href="/#service"
                      >
                        Service
                      </Link>
                    </li>
                    <li className="w-full flex">
                      <Link
                        className="text-white text-[15px] bg-[#14279b] hover:bg-[#4aa3df] w-full text-center lg:py-[12px] py-[8px] rounded-[50px]"
                        href="/contactUs"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
