import ContactUs from "./contactUs";
import Service from "./service";

export default function Home() {
  return (
    <main className="mt-[94px]">
      <div id="service">
        <Service />
        <ContactUs />
      </div>
    </main>
  );
}
