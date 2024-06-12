import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-[1140px] mx-auto mt-[94px]">
      <div className="pt-[60px] pb-[30px]">
        <h2 className="before:content-[' '] before:inline-block before:min-w-[50px] before:h-[2px] before:mr-[15px] before:mb-[10px] before:bg-[#14279b] after:content-[' '] after:inline-block after:min-w-[50px] after:h-[2px] after:mr-[15px] after:mb-[10px] after:bg-[#14279b] text-[32px] text-[#22222] uppercase font-[600] text-center">
          SERVICES
        </h2>
        <p className="mt-[15px] text-[16px] text-[#444444] text-center">
          Akeshya will serve as your consultant and development partner to help
          you turn your idea into a reality.
        </p>
      </div>
      <div>
        <div
          class="w-[260px] shadow-[0_0px_29px_1px_rgba(68,88,144,0.12)] text-red hover:before:bg-red relative before:rounded-[8px] h-[400px]
           bg-white text-[#111] hover:rounded-[8px]
            transition-all before:absolute before:right-0 before:top-0
            before:z-0 before:h-[450px] before:w-0 
            before:bg-[#14279b] before:transition-all 
            before:duration-500 hover:text-white hover:before:top-0  
            hover:before:w-full p-[30px]"
        >
          <div class="relative z-10 w-[200px]">
            <h4 className="font-[700] mb-[15px]">Design</h4>
            <p>
              Our web design services can assist you in reclaiming your
              company's online image. Your business will flourish on the
              Internet thanks to the combination of style and technology we
              provide, as well as our experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
