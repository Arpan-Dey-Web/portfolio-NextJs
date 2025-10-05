"use client";
import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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

  return (
    <section className="mx-auto max-w-7xl w-11/12 px-4 sm:px-6 lg:px-8   relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full opacity-5 blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          {/* Badge */}
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
            <p className="text-xs sm:text-sm font-semibold text-blue-300 tracking-wide">PROJECTS</p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl primary font-extrabold merinda-font mb-4">
            Featured <span className="name-gradient inline-block hover:scale-105 transition-transform duration-300">Projects</span>
          </h1>
          
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto merinda-font text-gray-400 leading-relaxed px-4">
            Discover my latest work showcasing innovative solutions, modern
            technologies, and exceptional user experiences.
          </p>
        </header>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="animate-pulse rounded-2xl bg-gray-800/40 border border-gray-700/50 p-6 h-96"
              >
                <div className="w-full h-48 bg-gray-700/50 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-700/50 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-700/50 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-700/50 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-400 mb-2">No Projects Yet</h3>
            <p className="text-gray-500">Check back soon for exciting new projects!</p>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Project Count Badge */}
        {!loading && projects.length > 0 && (
          <div className="mt-12 sm:mt-16 flex justify-center">
            <div className="px-6 py-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-full border border-gray-700/50 backdrop-blur-sm">
              <p className="text-sm sm:text-base text-gray-400">
                <span className="font-bold text-white">{projects.length}</span> {projects.length === 1 ? 'Project' : 'Projects'} Completed
              </p>
            </div>
          </div>
        )}

        {/* Bottom decorative line */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
