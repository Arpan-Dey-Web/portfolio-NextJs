"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { IoSparkles, IoRocketSharp } from "react-icons/io5";
import { HiFolder } from "react-icons/hi";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Filter projects if you have categories in your JSON
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="mx-auto max-w-7xl w-11/12 relative overflow-hidden">
  
      <div className="relative z-10">
        {/* Enhanced Header Section */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-6 sm:px-8 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/40 hover:border-blue-400/60 transition-all duration-300 group cursor-default">
            <IoRocketSharp className="w-4 h-4 text-blue-400 group-hover:rotate-45 transition-transform duration-500" />
            <p className="text-xs sm:text-sm font-bold text-blue-300 tracking-widest">
              PORTFOLIO SHOWCASE
            </p>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold merinda-font my-6 animate-slide-up">
            Featured{" "}
            <span className="name-gradient inline-block  transition-transform duration-300 cursor-default">
              Projects
            </span>
          </h1>

     

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto merinda-font text-gray-300 leading-relaxed px-4 animate-slide-up">
            Discover my latest work showcasing innovative solutions, modern
            technologies, and exceptional user experiences.
          </p>
        </header>

        {/* Enhanced Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group animate-pulse rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8 h-[420px] relative overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

                <div className="w-full h-48 bg-gray-700/50 rounded-xl mb-6"></div>
                <div className="space-y-3">
                  <div className="h-7 bg-gray-700/50 rounded-lg w-3/4"></div>
                  <div className="h-4 bg-gray-700/50 rounded w-full"></div>
                  <div className="h-4 bg-gray-700/50 rounded w-5/6"></div>
                  <div className="flex gap-2 mt-6">
                    <div className="h-8 w-20 bg-gray-700/50 rounded-full"></div>
                    <div className="h-8 w-20 bg-gray-700/50 rounded-full"></div>
                    <div className="h-8 w-20 bg-gray-700/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          /* Enhanced Empty State */
          <div className="text-center py-20 sm:py-32">
            <div className="relative mx-auto mb-8 w-24 h-24 sm:w-32 sm:h-32">
              {/* Animated background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700/50">
                <HiFolder className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-3 merinda-font">
              No Projects Yet
            </h3>
            <p className="text-base sm:text-lg text-gray-500 mb-8">
              Exciting projects are on the way!
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-gray-700/50">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">
                Stay tuned for updates
              </span>
            </div>
          </div>
        ) : (
          <>
            {/* Projects Grid with stagger animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {/* Enhanced Project Count Badge */}
            <div className="mt-12 sm:mt-16 flex justify-center animate-fade-in">
              <div className="group relative px-8 py-4 bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-full border border-gray-700/50 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  <p className="text-sm sm:text-base text-gray-300 font-semibold">
                    <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg sm:text-xl">
                      {filteredProjects.length}
                    </span>{" "}
                    {filteredProjects.length === 1 ? "Project" : "Projects"}{" "}
                    Completed
                  </p>
                  <IoSparkles className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Enhanced Bottom decorative line */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="relative w-full max-w-xl h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
            {/* Animated dots */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse animation-delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
