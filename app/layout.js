import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SeasonWrapper from "./Components/SeasonWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Get me A Chai - Fund your projects",
  description: "This website is a platform for crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <SeasonWrapper>
          <Navbar />
          <div className="min-h-[87vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]text-white">
            {children}
          </div>
           <Footer />
        </SeasonWrapper>
       
      </body>
    </html>
  );
}
