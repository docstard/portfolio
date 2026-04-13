import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import LenisScrollProvider from "./providers/lenis-provider";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

// export const metadata = {
//   title: "Atticflow Agency | Digital Product & AI Studio",
//   description: "Premium digital product studio and AI agency delivering scalable solutions.",
// };

export const metadata = {
  metadataBase: new URL("https://atticflow.com"),
  title: {
    default: "Atticflow | Web Development & AI Solutions",
    template: "%s | Atticflow",
  },
  description:
    "Premium websites, SaaS products and AI solutions for modern businesses.",
  keywords: [
    "web development agency",
    "AI agency",
    "Next.js developer",
    "SaaS development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-x-hidden">
        <LenisScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisScrollProvider>
      </body>
    </html>
  );
}