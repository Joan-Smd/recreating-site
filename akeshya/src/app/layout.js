import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import ScrollTop from "./scrollTop";

export const metadata = {
  title: "Akeshya",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
