import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="">
      <div className="max-w-[1140px] mx-auto flex flex-row justify-between h-[94px] py-[22px]">
        <div className="flex flex-row items-center">
          <Image
            src="/akeshya-logo.png"
            alt="Vercel Logo"
            className="max-w-[70px] pb-1"
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
        <div className="flex items-center">
          <ul style={{fontFamily:"Open Sans, sans-serif;"}} className="flex flex-row items-center justify-center space-x-[30px]">
            <li>
              <Link className="text-[#555555] hover:text-[#14279b] text-[15px]" href="/">Home</Link>
            </li>
            <li>
              <Link className="text-[#555555] hover:text-[#14279b] text-[15px]" href="/about">About</Link>
            </li>
            <li>
              <Link className="text-[#555555] hover:text-[#14279b] text-[15px]" href="/service">Service</Link>
            </li>
            <li>
              <Link className="text-white text-[15px] bg-[#14279b] hover:bg-[#4aa3df] px-[25px] py-[12px] rounded-[50px]" href="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
