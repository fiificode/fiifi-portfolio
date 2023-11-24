"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { projectData } from "@/components/projects/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

const uniqueTags = [
  "all projects",
  ...new Set(projectData.map((item) => item.tags)),
];

const Projects = () => {
  const [tags, setTags] = useState(uniqueTags);
  const [category, setCategory] = useState("all projects");

  {
    /**filteredProjects */
  }
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects" ? project : project.tags === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/**tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto md:border">
            {tags.map((tag, idx) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(tag)}
                  key={idx}
                  value={tag}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {tag}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/**Tab contents */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, idx) => {
              return (
                <TabsContent value={category} key={idx}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
