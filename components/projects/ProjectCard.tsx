import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon, Link2Icon } from "lucide-react";

const ProjectCard = ({ project }: any) => {
  return (
    <Card className="group overflow-hidden relative">
      <div className="flex px-8 space-x-2 ">
        {Object.keys(project.category).map((key, idx) => {
          return (
            <div className="a pt-2" key={idx}>
              <Badge className="bg-primary text-basic text-[12px]">
                {project.category[key]}
              </Badge>
            </div>
          );
        })}
      </div>
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex flex-col items-center justify-center">
          <div className="relative project w-full md:h-80 lg:h-80 overflow-scroll">
            <div className="project-browser">
              <div className="project-circle"></div>
              <div className="project-circle"></div>
              <div className="project-circle"></div>
            </div>
            <Image
              src={project.image}
              priority
              className="project-img object-cover"
              width={300}
              height={200}
              alt="project-image object-cover"
            />
          </div>
          {/**btn link */}
          <div className="flex gap-x-4 absolute">
            <Link
              href={project.link}
              target="blank"
              className="bg-primary/80 w-[60px] h-[60px] rounded-full flex justify-center items-center scale-0 
              opacity-8 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon className="text-basic" />
            </Link>
            <Link
              href={project.github}
              target="blank"
              className="bg-primary/80 w-[60px] h-[60px] rounded-full flex justify-center items-center scale-0 
              opacity-8 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            >
              <GithubIcon className="text-basic" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-4 pb-5 flex flex-col">
        <h4 className="mb-1 font-semibold">{project.name}</h4>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
