import Link from "next/link";
import React from "react";
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import { Button, buttonVariants } from "../ui/button";
import { Download, Send } from "lucide-react";
import Socials from "../socials/Socials";
import DevImg from "../devImg/DevImg";
import Badge from "../badge/Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/**Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <span
              className="inline-block py-0.5 z-50 pl-3 text-heading font-semibold relative 
                    mb-3 before:content-[''] before:left-[90px] sm:before:left-[240px] before:absolute before:w-[85px] xl:before:w-[85px] before:bg-basic 
                    xl:before:left-0 before:top-0 before:bottom-0 before:z-[-1]"
            >
              <div className="text-xs text-primary">Frontend Developer</div>
            </span>
            <h2 className="text-2xl text-muted-foreground capitalize">
              Hello, my name is
            </h2>
            <h1 className="text-6xl text-primary mb-3 font-[900] uppercase">
              Franklin Mensah
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              I am a frontend software developer. I design and developer
              services for customers of all sizes, specializing in creating
              stylish, modern websites, web services and mobile applications.
            </p>
            {/**button */}
            <div className="flex gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2 flex items-center justify-center">
                  Contact me
                  <Send size={18} />{" "}
                </Button>
              </Link>
              <a href="./Franklin-SoftwareDev.pdf" download>
                <Button
                  variant={"outline"}
                  className="gap-x-2 flex items-center justify-center"
                >
                  Download Resume
                  <Download className="text-basic" size={18} />{" "}
                </Button>
              </a>
            </div>
            {/**Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-basic transition-all"
            />
          </div>
          {/**Image */}
          <div className="hidden xl:flex relative">
            {/**badge-1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              endCountNum={3}
              endCountText="+"
              badgeText="Years of experience"
              icon={<RiBriefcase4Fill />}
            />
            {/**badge-2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              endCountNum={15}
              endCountText="+"
              badgeText="Happy clients"
              icon={<RiTodoFill />}
            />
            {/**badge-3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              endCountNum={30}
              endCountText="+"
              badgeText="Finished projects"
              icon={<RiTeamFill />}
            />
            <div className="bg-hero_shape2 w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyle="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom overflow-hidden"
              imgSrc="/images/my-pic.png"
            />
          </div>
          {/**Icons */}
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce delay-300">
          <RiArrowDownSLine className="text-3xl text-basic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
