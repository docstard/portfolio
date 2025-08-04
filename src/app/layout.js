import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio | AtticFlow | Dhruv Choudhary",
  description: "Frontend Developer Portfolio Website - for ReactJS/NextJS, ECommerce, Landing pages, Responsive Designs, No-code Website development, and many more website development services.",
  keywords: "Portfolio, atticflow, Dhruv Choudhary, Frontend Developer, ReactJS, NextJS, ECommerce, Landing pages, Responsive Designs, No-code Website development",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
