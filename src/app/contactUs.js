import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="section lg:max-w-[1140px] lg:mx-auto lg:px-0 px-3">
      <div className="pt-[60px] pb-[38px]">
        <h2 className="before:content-[' '] before:inline-block before:min-w-[50px] before:h-[2px] before:mr-[15px] before:mb-[10px] before:bg-[#14279b] after:content-[' '] after:inline-block after:min-w-[50px] after:h-[2px] after:mr-[15px] after:mb-[10px] after:bg-[#14279b] text-[32px] text-[#222] uppercase font-[600] text-center">
          CONTACT US
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-[32px] justify-between pb-[60px]">
        <div className="lg:w-max">
          <h3 className="text-[#14279b] text-[28px] font-[700] mb-[10px]">
            Akeshya
          </h3>
          <p className="text-[14px] text-[#888] mb-[16px] font-[400] lg:w-[350px]">
            Designers, developers & marketeers capable of delivering solutions
            according to your needs,
          </p>
        </div>
        <div className="flex flex-col space-y-[26px] lg:w-[260px]">
          <div className="flex flex-row space-x-2">
            <div>
              <svg
                class="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#14279b"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
              </svg>
            </div>
            <p className="text-[14px] text-[#444] font-[600]">
              26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <div>
              <svg
                class="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#14279b"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
              </svg>
            </div>
            <p className="text-[14px] text-[#444] font-[600]">
              akeshya@outlook.com info@akeshya.com
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <div>
              <svg class="w-[32px] h-[32px]" viewBox="0 0 24 24" fill="#14279b">
                <path
                  fill="#14279b"
                  d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1.064 1.064 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.099 2.099 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312c.005-.014.007-.015 0-.006a.276.276 0 0 1-.03.039l-.01.01a.203.203 0 0 1-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.536 1.536 0 0 0 .42-.236a.923.923 0 0 0 .05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01a.383.383 0 0 1 .038-.03c.01-.007.007-.004-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"
                ></path>
              </svg>
            </div>
            <p className="text-[14px] text-[#444] font-[600]">
              +91 94942 40922
            </p>
          </div>
        </div>
        <div className="lg:w-[450px]">
          <form>
            <div className="flex flex-col space-y-5">
              <input
                className="border-[1px] border-[#ced4da] focus:border-[#14279b] text-[#212529] outline-none px-[15px] py-[10px] h-[42px]"
                type="text"
                name="name"
                placeholder="Your Name"
              />

              <input
                className="border-[1px] border-[#ced4da] focus:border-[#14279b] text-[#212529] outline-none px-[15px] py-[10px] h-[42px]"
                type="email"
                name="email"
                placeholder="Your Email"
              />

              <input
                className="border-[1px] border-[#ced4da] focus:border-[#14279b] text-[#212529] outline-none px-[15px] py-[10px] h-[42px]"
                type="text"
                name="subject"
                placeholder="Subject"
              />

              <textarea
                className="border-[1px] border-[#ced4da] focus:border-[#14279b] text-[#212529] outline-none px-[15px] py-[10px] h-[126px]"
                placeholder="Message"
              ></textarea>

              <div className="flex justify-center">
                <button className="bg-[#14279b] hover:bg-[#2383c4] px-[24px] py-[10px] w-max text-white rounded-[50px] leading-[24px]">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
