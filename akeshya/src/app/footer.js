import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="">
      <div className="max-w-[1140px] mx-auto flex flex-row justify-between py-[30px]">
        <div className="flex flex-row items-center"> 
          <p
            style={{fontFamily:"Open Sans, sans-serif;"}}
            className="text-[14px] text-[#222222] font-[400]"
          >
            © Copyright
            <strong> Akeshya</strong>
            . All Rights Reserved
          </p>
        </div>
        <div className="flex items-center">
          <ul style={{fontFamily:"Open Sans, sans-serif;"}} className="flex flex-row items-center justify-center space-x-[30px]">
            <li>
              <Link className="text-[#14279b] text-[15px] hover:text-[#5faee3]" href="/">Terms and conditions</Link>
            </li>
            <li>
              <Link className="text-[#14279b] text-[15px] hover:text-[#5faee3]" href="/">Refund policy</Link>
            </li>
            <li>
              <Link className="text-[#14279b] text-[15px] hover:text-[#5faee3]" href="/">Privacy policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
