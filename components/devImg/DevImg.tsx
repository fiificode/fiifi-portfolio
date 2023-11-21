import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface IDevImg {
  containerStyle: string;
  imgSrc: string;
}

const DevImg = ({ containerStyle, imgSrc }: IDevImg) => {
  return (
    <div className={cn(containerStyle)}>
      <Image
        src={imgSrc}
        alt="my-profile-picture"
        priority
        width={350}
        height={150}
        className="object-cover absolute -top-3 right-[110px] overflow-hidden"
      />
    </div>
  );
};

export default DevImg;
