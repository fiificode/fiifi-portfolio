import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

interface ISocials {
  containerStyles: string;
  iconStyles: string;
}

const icons = [
  {
    path: "/",
    name: <RiLinkedinBoxFill />,
  },
  {
    path: "/",
    name: <RiGithubFill />,
  },
  {
    path: "/",
    name: <RiTwitterXFill />,
  },
];
const Socials = ({ containerStyles, iconStyles }: ISocials) => {
  return (
    <div className={cn(containerStyles)}>
      {icons?.map((icon, idx) => {
        return (
          <Link key={idx} href={icon.path}>
            <div className={cn(iconStyles)}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
