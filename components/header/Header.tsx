"use client";

import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import MobileNav from "../navigation/MobileNav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos: any = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 z-30 transition-all",
        header ? "py-4 bg-white shadow-lg" : "py-6"
      )}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center justify-center gap-x-6">
            {/**Nav */}
            <Navigation
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-[#EEAD1A] w-full"
            />
            {/**Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
