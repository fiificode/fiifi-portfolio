"use client";

import { cn } from "@/lib/utils";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";
import CountUp from "react-countup";

interface IBadge {
  containerStyles?: string;
  icon: any;
  endCountNum: number;
  endCountText?: string;
  badgeText: string;
}

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}: IBadge) => {
  return (
    <div className={cn("badge", containerStyles)}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-basic">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-semibold">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
