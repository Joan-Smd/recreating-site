import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="shadow-[0_3px_6px_1px_rgba(0,33,0,0.3)]">
      <div className="flex flex-row justify-between py-[30px] lg:max-w-[1140px] lg:mx-auto lg:px-0 px-3">
        <div className="flex flex-row items-center">
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-[14px] text-[#222222] font-[400]"
          >
            © Copyright
            <strong> Akeshya</strong>. All Rights Reserved
          </p>
        </div>
        <div className="flex items-center">
          <ul
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="flex flex-row items-center justify-center space-x-[30px]"
          >
            <li>
              <Link
                className="text-[#14279b] text-[14px] font-[400] hover:text-[#5faee3]"
                href="/"
              >
                Terms and conditions
              </Link>
            </li>
            <li>
              <Link
                className="text-[#14279b] text-[14px] font-[400] hover:text-[#5faee3]"
                href="/"
              >
                Refund policy
              </Link>
            </li>
            <li>
              <Link
                className="text-[#14279b] text-[14px] font-[400] hover:text-[#5faee3]"
                href="/"
              >
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
