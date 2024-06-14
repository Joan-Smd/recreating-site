import Link from "next/link";
import Image from "next/image";

export default function Service() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="pt-[60px] pb-[30px]">
        <h2 className="before:content-[' '] before:inline-block before:min-w-[50px] before:h-[2px] before:mr-[15px] before:mb-[10px] before:bg-[#14279b] after:content-[' '] after:inline-block after:min-w-[50px] after:h-[2px] after:mr-[15px] after:mb-[10px] after:bg-[#14279b] text-[32px] text-[#222] uppercase font-[600] text-center">
          SERVICES
        </h2>
        <p className="mt-[15px] text-[16px] text-[#444444] text-center">
          Akeshya will serve as your consultant and development partner to help
          you turn your idea into a reality.
        </p>
      </div>
      <div className="flex flex-row justify-between pb-[60px]">
        <div className="relative w-[260px] group overflow-hidden shadow-[0_0px_29px_1px_rgba(68,88,144,0.12)] h-[400px] rounded-[8px]">
          <div
            class="z-20 text-red hover:before:bg-red relative before:rounded-[8px] 
           bg-white text-[#111] hover:rounded-[8px] rounded-[8px]
            transition-all before:absolute before:right-0 before:top-0 before:origin-top-right 
            before:z-0 before:h-[400px] before:w-0 
            before:bg-[#14279b] before:transition-all 
            before:duration-200 hover:text-white hover:before:top-0  
            hover:before:w-full p-[30px]"
          >
            <div class="relative z-20 w-[200px]">
              <div className="mb-5 w-[60px] h-[60px] flex justify-center items-center rounded-[50px] group-hover:bg-white bg-[#14279b]">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-dribbble"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="text-white group-hover:text-[#14279b]"
                    fill-rule="evenodd"
                    d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z"
                  />
                </svg>
              </div>
              <h4 className="font-[700] mb-[15px]">Design</h4>
              <p
                style={{ fontFamily: "Open Sans, sans-serif" }}
                className="text-[15px] text-[#444] group-hover:text-white font-[300]"
              >
                Our web design services can assist you in reclaiming your
                company's online image. Your business will flourish on the
                Internet thanks to the combination of style and technology we
                provide, as well as our experience.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-[260px] group overflow-hidden shadow-[0_0px_29px_1px_rgba(68,88,144,0.12)] h-[400px] rounded-[8px]">
          <div
            class="z-20 text-red hover:before:bg-red relative before:rounded-[8px] 
           bg-white text-[#111] hover:rounded-[8px] rounded-[8px]
            transition-all before:absolute before:right-0 before:top-0 before:origin-top-right 
            before:z-0 before:h-[400px] before:w-0 
            before:bg-[#14279b] before:transition-all 
            before:duration-200 hover:text-white hover:before:top-0  
            hover:before:w-full p-[30px]"
          >
            <div class="relative z-20 w-[200px]">
              <div className="mb-5 w-[60px] h-[60px] flex justify-center items-center rounded-[50px] group-hover:bg-white bg-[#14279b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-file-earmark-text"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="text-white group-hover:text-[#14279b]"
                    d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
                  />
                  <path
                    className="text-white group-hover:text-[#14279b]"
                    d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
                  />
                </svg>
              </div>
              <h4 className="font-[700] mb-[15px]">Development</h4>
              <p
                style={{ fontFamily: "Open Sans, sans-serif" }}
                className="text-[15px] text-[#444] group-hover:text-white font-[300]"
              >
                Our development team can construct platforms to help your
                business thrive by creating powerful customised solutions
                tailored to your particular requirements. Akeshya makes use of
                established and effective web development tools.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-[260px] group overflow-hidden shadow-[0_0px_29px_1px_rgba(68,88,144,0.12)] h-[400px] rounded-[8px]">
          <div
            class="z-20 text-red hover:before:bg-red relative before:rounded-[8px] 
           bg-white text-[#111] hover:rounded-[8px] rounded-[8px]
            transition-all before:absolute before:right-0 before:top-0 before:origin-top-right 
            before:z-0 before:h-[400px] before:w-0 
            before:bg-[#14279b] before:transition-all 
            before:duration-200 hover:text-white hover:before:top-0  
            hover:before:w-full p-[30px]"
          >
            <div class="relative z-20 w-[200px]">
              <div className="mb-5 w-[60px] h-[60px] flex justify-center items-center rounded-[50px] group-hover:bg-white bg-[#14279b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-globe-americas"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="text-white group-hover:text-[#14279b]"
                    d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"
                  />
                </svg>
              </div>
              <h4 className="font-[700] mb-[15px]">Marketing</h4>
              <p
                style={{ fontFamily: "Open Sans, sans-serif" }}
                className="text-[15px] text-[#444] group-hover:text-white font-[300]"
              >
                A beautiful website is the foundation of effective marketing.
                Our customers achieve success where it counts—in the real
                world—by combining our proven approach with our passion for
                improving conversions and increasing ROI.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-[260px] group overflow-hidden shadow-[0_0px_29px_1px_rgba(68,88,144,0.12)] h-[400px] rounded-[8px]">
          <div
            class="z-20 text-red hover:before:bg-red relative before:rounded-[8px] 
           bg-white text-[#111] hover:rounded-[8px] rounded-[8px]
            transition-all before:absolute before:right-0 before:top-0 before:origin-top-right 
            before:z-0 before:h-[400px] before:w-0 
            before:bg-[#14279b] before:transition-all 
            before:duration-200 hover:text-white hover:before:top-0  
            hover:before:w-full p-[30px]"
          >
            <div class="relative z-20 w-[200px]">
              <div className="mb-5 w-[60px] h-[60px] flex justify-center items-center rounded-[50px] group-hover:bg-white bg-[#14279b]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-speedometer"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="text-white group-hover:text-[#14279b]"
                    d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"
                  />
                  <path
                    className="text-white group-hover:text-[#14279b]"
                    fill-rule="evenodd"
                    d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"
                  />
                </svg>
              </div>
              <h4 className="font-[700] mb-[15px]">Support</h4>
              <p
                style={{ fontFamily: "Open Sans, sans-serif" }}
                className="text-[15px] text-[#444] group-hover:text-white font-[300]"
              >
                Since the beginning, we at Akeshya have specialised in website
                maintenance. We recognise the significance of having your
                business online 24 hours a day, seven days a week, and we've
                created a system to ensure that we're always available.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[20px] pb-[60px]">
        <div className="">
          <h2 className="before:content-[' '] before:inline-block before:min-w-[50px] before:h-[2px] before:mr-[15px] before:mb-[10px] before:bg-[#14279b] after:content-[' '] after:inline-block after:min-w-[50px] after:h-[2px] after:mr-[15px] after:mb-[10px] after:bg-[#14279b] text-[32px] text-[#222] uppercase font-[600] text-center">
            Our Process
          </h2>
          <p className="mt-[15px] text-[16px] text-[#444444] text-center">
            Over the years we’ve evolved a tested method for attaining
            achievement for each one of our clients.
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="group px-[20px] pb-[20px] pt-[160px]">
            <div className="px-[30px] bg-[#f6f6f6] group-hover:bg-[#14279b] py-[15px] rounded-[5px]">
              <h3
                className="mb-[15px] text-[20px] text-[#222] group-hover:text-white font-[700] text-center"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                1. Planning
              </h3>
              <p
                style={{ fontFamily: "Open Sans, sans-serif" }}
                className="text-[16px] text-[#5e5e5e] group-hover:text-white font-[400]"
              >
                We help you turn all of your ideas into a digital product that
                meets all of your requirements. We begin each project by
                determining its scope and needs. This is done by collaborating
                closely with you to ensure that we're all on the same page.
              </p>
            </div>
          </div>

          <div className="group px-[20px] pb-[20px] pt-[160px]">
            <div className="px-[30px] bg-[#f6f6f6] group-hover:bg-[#14279b] py-[15px] rounded-[5px]">
              <h3
                className="mb-[15px] text-[20px] text-[#222] group-hover:text-white font-[700] text-center"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                2. Design
              </h3>
              <p
                style={{ fontFamily: "Open Sans, sans-serif" }}
                className="text-[16px] text-[#5e5e5e] group-hover:text-white font-[400]"
              >
                We build our websites carefully through a series of workshops,
                wire-framing, and user experience (UX) sessions, resulting in a
                site that reinforces trust, conveys important brand messaging,
                and provides a return on innovation.
              </p>
            </div>
          </div>

          <div className="group px-[20px] pb-[20px] pt-[160px]">
            <div className="px-[30px] bg-[#f6f6f6] group-hover:bg-[#14279b] py-[15px] rounded-[5px]">
              <h3
                className="mb-[15px] text-[20px] text-[#222] group-hover:text-white font-[700] text-center"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                3. Development
              </h3>
              <p
                style={{ fontFamily: "Open Sans, sans-serif" }}
                className="text-[16px] text-[#5e5e5e] group-hover:text-white font-[400]"
              >
                We provide extensive front-end and back-end development that
                allows your idea to stand alone. Our in-house developers work
                side-by-side with the artistic team to seek out natural
                breakpoints inside the content and order practicality based on
                acknowledged statistics.
              </p>
            </div>
          </div>

          <div className="group px-[20px] pb-[20px] pt-[160px]">
            <div className="px-[30px] bg-[#f6f6f6] group-hover:bg-[#14279b] py-[15px] rounded-[5px]">
              <h3
                className="mb-[15px] text-[20px] text-[#222] group-hover:text-white font-[700] text-center "
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                4. Marketing
              </h3>
              <p
                style={{ fontFamily: "Open Sans, sans-serif" }}
                className="text-[16px] text-[#5e5e5e] group-hover:text-white font-[400]"
              >
                We come up with ideas and campaigns to help your business
                prosper online. Our campaigns and virtual approach have a
                verified tune report of accomplishing brilliant results,
                gathering new leads and site visitors in your website and assist
                them convert.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[60px]">
        <div className="pb-[30px]">
          <h2 className="before:content-[' '] before:inline-block before:min-w-[50px] before:h-[2px] before:mr-[15px] before:mb-[10px] before:bg-[#14279b] after:content-[' '] after:inline-block after:min-w-[50px] after:h-[2px] after:mr-[15px] after:mb-[10px] after:bg-[#14279b] text-[32px] text-[#222] uppercase font-[600] text-center">
            OUR CORE FEATURES
          </h2>
          <p className="mt-[15px] text-[16px] text-[#444444] text-justify">
            Akeshya is a forward-thinking and intelligent design firm that is
            technically and creatively capable of transforming your brand into
            its best digital self. Our approach to design and development
            results in compelling, engaging branding and immersive digital
            experiences that provide a value for money.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-y-6">
          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#ffbb2c"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Web design
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#5578ff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM20 12L16.4645 15.5355L15.0503 14.1213L17.1716 12L15.0503 9.87868L16.4645 8.46447L20 12ZM6.82843 12L8.94975 14.1213L7.53553 15.5355L4 12L7.53553 8.46447L8.94975 9.87868L6.82843 12ZM11.2443 17H9.11597L12.7557 7H14.884L11.2443 17Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Development
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#e80368"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 7C14 8.10461 13.1046 9 12 9 10.8954 9 10 8.10461 10 7 10 5.89539 10.8954 5 12 5 13.1046 5 14 5.89539 14 7ZM15 11C15 10.4478 14.5522 10 14 10H10C9.44775 10 9 10.4478 9 11V15H10.5V19H13.5V15H15V11ZM12 2C6.47717 2 2 6.47717 2 12 2 17.5228 6.47717 22 12 22 17.5228 22 22 17.5228 22 12 22 6.47717 17.5228 2 12 2ZM4 12C4 7.58167 7.58167 4 12 4 16.4183 4 20 7.58167 20 12 20 16.4183 16.4183 20 12 20 7.58167 20 4 16.4183 4 12Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Branding
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#e361ff"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Media buying
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#47aeff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM12.1779 7.17624C11.4834 7.48982 11 8.18846 11 9C11 10.1046 11.8954 11 13 11C13.8115 11 14.5102 10.5166 14.8238 9.82212C14.9383 10.1945 15 10.59 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7C11.41 7 11.8055 7.06167 12.1779 7.17624Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Search engine
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#ffa76e"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H7V0H9V2H15V0H17V2ZM17 4V6H15V4H9V6H7V4H5V20H19V4H17ZM7 8H17V10H7V8ZM7 12H17V14H7V12Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Brand strategy
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="#dbce11"
              >
                <path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Local search marketing
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#4233ff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700] leading-[16px]">
              Lead Tracking & Management
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#b2904f"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 2H19.0049C20.1068 2 21 2.89821 21 3.9908V20.0092C21 21.1087 20.1074 22 19.0049 22H3V2ZM7 4H5V20H7V4ZM9 20H19V4H9V20ZM11 16C11 14.3431 12.3431 13 14 13C15.6569 13 17 14.3431 17 16H11ZM14 12C12.8954 12 12 11.1046 12 10C12 8.89543 12.8954 8 14 8C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12ZM22 6H24V10H22V6ZM22 12H24V16H22V12Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Contact management
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#b20969"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 4.58152V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C12.3506 9 12.6872 9.06016 13 9.17071V2.04938C18.0533 2.5511 22 6.81465 22 12C22 17.5229 17.5228 22 12 22C6.47715 22 2 17.5229 2 12C2 6.81465 5.94668 2.5511 11 2.04938V4.0619C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 8.64262 17.9318 5.76829 15 4.58152Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Media management
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#ff5828"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Social scheduling
            </p>
          </div>

          <div className="w-[260px] h-[72px] flex flex-row hover:bg-[#eef7fc] bg-[#f6f6f6] p-[20px]">
            <div className="pr-[10px]">
              <svg
                className="w-[32px] h-[32px]"
                viewBox="0 0 24 24"
                fill="#29cc61"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.55197 13 8.39897 10.8852 9.24398 13H7.55197ZM16 12H17V14H16C15.4477 14 15 13.5523 15 13 15 12.4477 15.4477 12 16 12ZM21 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3ZM12.598 16H10.443L10.043 15H6.75297L6.35297 16H4.19897L5.39797 13.002 5.39897 13 7.39897 8H9.39897L12.598 16ZM17 8H19V16H16C14.3431 16 13 14.6569 13 13 13 11.3431 14.3431 10 16 10H17V8Z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#222] hover:text-[#14279b] font-[700]">
              Ad retargeting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
