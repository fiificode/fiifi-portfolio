"use client";

import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { projectData } from "./data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/**Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="text-muted-foreground mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            voluptatem obcaecati aspernatur?
          </p>
          <Link href={"/projects"}>
            <Button>All projects</Button>
          </Link>
        </div>
        {/**Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/**Show only the first 4 projects for the slider */}
            {projectData?.slice(0, 4).map((project, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
