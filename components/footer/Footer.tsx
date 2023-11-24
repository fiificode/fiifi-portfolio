import React from "react";
import Socials from "../socials/Socials";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/**Socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-basic text-[20px] hover:text-white"
          />
          {/**copyright */}
          <div className="text-center text-muted-foreground text-sm">
            Copyright &copy; Franklin Mensah.
            <br /> All rights reserved - 2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
