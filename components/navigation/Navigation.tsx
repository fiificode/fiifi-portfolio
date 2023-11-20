import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface INavigation {
  containerStyles: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "My Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Navigation = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}: INavigation) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, idx) => {
        return (
          <Link
            className={cn("capitalize", linkStyles)}
            key={idx}
            href={link?.path}
          >
            {link?.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              ></motion.span>
            )}
            {link?.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
