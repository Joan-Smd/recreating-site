export default function Page() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="py-[60px]">
        <h2 className="before:content-[' '] before:inline-block before:min-w-[50px] before:h-[2px] before:mr-[15px] before:mb-[10px] before:bg-[#14279b] after:content-[' '] after:inline-block after:min-w-[50px] after:h-[2px] after:mr-[15px] after:mb-[10px] after:bg-[#14279b] text-[32px] text-[#22222] uppercase font-[600] text-center">
          About Us{" "}
        </h2>
      </div>
      <div className="flex flex-row">
        <div className="px-3 flex flex-col space-y-4 w-1/2">
          <p className="text-[#444444]">
            We are Akeshya, a firm that specializes in web design and marketing.
            We help transform ideas into reality with a team of passionate
            graphic designers, web developers, and seasoned marketing advisors.
          </p>
          <ul className="list list-disc">
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
          <p>Learn More</p>
        </div>
      </div>
    </div>
  );
}
