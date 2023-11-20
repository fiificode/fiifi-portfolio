import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/logo2.png"}
        priority
        width={84}
        height={84}
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;
