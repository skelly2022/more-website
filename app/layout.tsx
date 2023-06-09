import "./css/globals.css";
import { Inter, Architects_Daughter } from "next/font/google";

import Navbar from "./components/navbar/Navbar";
import ChatWidget from "./components/ChatWidget";
import ClientOnly from "./components/ClientOnly";
import ToasterProvider from "./providers/ToasterProvider";

import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import getCurrentUser from "./actions/getCurrentUser";
import Footer from "./components/footer/footer";

import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "More",
  description: "Generated by create next app",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable}`}>
        <ClientOnly>
          <ChatWidget />
        </ClientOnly>
        <div className="">
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
