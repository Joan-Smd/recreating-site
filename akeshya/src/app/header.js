import Image from "next/image";

export default function Header() {
  return (
    <div className="max-w-[1320px] mx-auto flex flex-row h-[94px] py-3">
      <div className="flex flex-row items-center">
        <Image
          src="/akeshya-logo.png"
          alt="Vercel Logo"
          className="max-w-[70px] pb-1"
          width={65}
          height={70}
        />
        <p className="text-[30px] text-[#14279b] font-[700] font-['San_Serif']">AKESHYA</p>
      </div>
    </div>
  );
}
