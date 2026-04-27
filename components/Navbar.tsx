"use client";
import Link from "next/link";
import Button from "./button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // 👇 Auto close on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])
  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white">
              deployed_code
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight"><a href="/">Atticflow</a></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/services"
          >
            Services
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/portfolio"
          >
            Portfolio
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/about"
          >
            About Us
          </a>
          <a
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/contact"
          >
            Contact Us          
            </a>
        </div>

        <button
          className="lg:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined text-3xl text-primary">
            {isOpen ? "close" : "menu"}
          </span>
        </button>

        <Button link="/contact" className="text-sm hidden md:flex shadow-none hover:scale-100 w-fit " size="sm" >
          Book a Free Call
        </Button>
      </div>

      <div className={`
            lg:hidden overflow-hidden transition-all duration-300 
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}>
        <div className="flex flex-col px-6 py-6 gap-5 border-t border-primary/10">
          <Link href="/services" className="mobile-link">
            Services
          </Link>
          <Link href="/portfolio" className="mobile-link">
            Portfolio
          </Link>
          <Link href="/about" className="mobile-link">
            About Us
          </Link>
          <Link href="/contact" className="mobile-link">
            Contact Us
          </Link>

          {/* Mobile CTA */}
          <Button
            link="/contact"
            className="px-2"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
}