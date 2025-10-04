"use client";
import React, { useEffect } from "react";

import SingleProject from "./SingleProject";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" mx-auto max-w-7xl w-11/12">
      <h1 className="text-center my-10 primary font-extrabold merinda-font  text-5xl">
        Featured <span className="name-gradient">Projects</span>
      </h1>
      <p className="text-center mb-10 text-2xl w-8/12 mx-auto merinda-font ">
        Discover my latest work showcasing innovative solutions, modern
        technologies, and exceptional user experiences.
      </p>

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
