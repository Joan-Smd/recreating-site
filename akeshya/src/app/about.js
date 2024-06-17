import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="max-w-[1140px] mx-auto" id="about">
      <div className="section pt-[60px] pb-[30px]">
        <h2 className="before:content-[' '] before:inline-block before:min-w-[50px] before:h-[2px] before:mr-[15px] before:mb-[10px] before:bg-[#14279b] after:content-[' '] after:inline-block after:min-w-[50px] after:h-[2px] after:mr-[15px] after:mb-[10px] after:bg-[#14279b] text-[32px] text-[#22222] uppercase font-[600] text-center">
          About Us
        </h2>
      </div>
      <div className="section flex flex-row pb-[60px]">
        <div className="px-3 flex flex-col space-y-4 w-1/2">
          <p className="text-[#444444]">
            We are Akeshya, a firm that specializes in web design and marketing.
            We help transform ideas into reality with a team of passionate
            graphic designers, web developers, and seasoned marketing advisors.
          </p>
          <ul className="list list-disc ml-5">
            <li>
              <p className="text-[#444444]">
                We started with a simple idea: do what is best for the client.
              </p>
            </li>
            <li>
              <p className="text-[#444444]">
                Our methodical and individual approach to each project delivers
                the finest possible results for your media.
              </p>
            </li>
            <li>
              <p className="text-[#444444]">
                Our day-to-day work is to solve your problems utilising the most
                up-to-date, practical adaptive technology, and we have a lot of
                fun doing it.
              </p>
            </li>
          </ul>
        </div>
        <div className="px-3 flex flex-col space-y-4 w-1/2">
          <p className="text-[#444444]">
            We're professional, but we're also friendly, and we'll always pay
            attention to your concerns. We expect to work with innovative people
            that have an open mind and are dedicated to making every idea a
            reality. We want to hear from you if you're interested in SEO, have
            Web Development ideas, or require a graphic designer who can match
            your goals.
          </p>
          <Link
            className="text-[#14279b] text-[16px] hover:text-[#5faee3]"
            href="/about"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="section flex flex-row pb-[60px]">
        <div className="px-3">
          <Image
            src="/counts-img.svg"
            alt="Counts"
            className="max-w-[450px]"
            width={450}
            height={260}
          />
        </div>
        <div className="grid grid-cols-2 px-3 w-full justify-items-start">
          <div className="flex flex-row space-x-3 items-start justify-around">
            <Image
              src="/emoji-smile.svg"
              alt="Smile"
              className="max-w-[36px] mt-3"
              width={36}
              height={36}
            />
            <div>
              <p>
                <span class="flex text-[36px] text-[#222] font-bold animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num-reach)] before:content-[counter(num)]">
                  <span class="sr-only">40</span>
                </span>
              </p>
              <p className="text-[14px] text-[#484848]">
                <strong>Organic Reach</strong> (Global)
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-3 items-start">
            <Image
              src="/journal-richtext.svg"
              alt="Journal"
              className="max-w-[36px] mt-3"
              width={36}
              height={36}
            />
            <div>
              <p>
                <span class="flex text-[36px] text-[#222] font-bold animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num-campaign)] before:content-[counter(num)]">
                  <span class="sr-only">40</span>
                </span>
              </p>
              <p className="text-[14px] text-[#484848]">
                <strong>Campaigns</strong>
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-3 items-start justify-around">
            <Image
              src="/clock.svg"
              alt="Clock"
              className="max-w-[36px] mt-3"
              width={36}
              height={36}
            />
            <div>
              <p>
                <span class="flex text-[36px] text-[#222] font-bold animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num-hours)] before:content-[counter(num)]">
                  <span class="sr-only">40</span>
                </span>
              </p>
              <p className="text-[14px] text-[#484848]">
                <strong>Watch Hours</strong> (Asia)
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-3 items-start">
            <Image
              src="/globe.svg"
              alt="Globe"
              className="max-w-[36px] mt-3"
              width={36}
              height={36}
            />
            <div>
              <p>
                <span class="flex text-[36px] text-[#222] font-bold animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num-ctr)] before:content-[counter(num)]">
                  <span class="sr-only">40</span>
                </span>
              </p>
              <p className="text-[14px] text-[#484848]">
                <strong>Excellent CTR %</strong> (Asia)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
