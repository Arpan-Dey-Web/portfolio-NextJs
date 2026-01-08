import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiAward } from "react-icons/fi";
import { IoSparkles } from "react-icons/io5";

const ProjectCard = ({ project }) => {
  const {
    id,
    projecttittle,
    technology,
    liveLink,
    githubClient,
    githubServer,
   featured,
    license,
    images,
    ProjectLogo,
    ProjectBannerImages,
  } = project;
  // Helper function to get technology array
  const getTechnologyArray = () => {
    if (Array.isArray(technology)) {
      return technology.slice(0, 6); // Show max 6 tags
    }
    // If technology is an object, flatten and get first 6
    const allTechs = Object.values(technology).flat().filter(Boolean);
    return allTechs.slice(0, 6);
  };

  const techArray = getTechnologyArray();
  return (
    <article className="group rounded-2xl max-w-md mx-auto shadow-2xl bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-blue-500/20 hover:-translate-y-2 overflow-hidden">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-full border border-yellow-500/40">
          <FiAward className="w-3.5 h-3.5 text-yellow-400" />
          <span className="text-yellow-300 text-xs font-bold">FEATURED</span>
        </div>
      )}
      {/* Banner Image */}
      <div className="relative mb-2 overflow-hidden">
        <div className="relative h-48 sm:h-52 w-full">
          <Image
            src={ProjectBannerImages}
            alt={`${projecttittle} banner`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

          {/* Live indicator badge */}
          {liveLink && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/40">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-xs font-medium">Live</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {/* Project Header */}
        <div className="flex items-start gap-3 mb-5">
          <div className="relative w-14 h-14 rounded-xl flex items-center justify-center bg-gray-800/50 border border-gray-700/50 overflow-hidden flex-shrink-0 group-hover:border-blue-500/50 transition-colors duration-300">
            <Image
              className="rounded-xl object-cover p-1"
              src={ProjectLogo}
              fill
              alt={`${projecttittle} logo`}
              sizes="56px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-1 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
              {projecttittle}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Full-Stack MERN Application
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-white text-sm font-semibold flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Tech Stack
            </p>
            <span className="text-xs text-gray-500">
              {techArray.length}+ techs
            </span>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-3"></div>

          <div className="flex flex-wrap gap-2 ">
            {techArray.map((tech, index) => (
              <span
                key={index}
                className="text-white text-xs font-medium px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/60 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href={`/component/Projects/${id}`} className="flex-1">
            <button className="group/btn relative w-full px-4 py-3 rounded-full text-white text-sm sm:text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <IoSparkles className="w-4 h-4" />
                View Details
                <svg
                  className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>

          {/* Quick Links */}
          {(liveLink || githubClient) && (
            <div className="flex gap-2">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-800/60 border border-gray-700/50 hover:border-green-500/50 hover:bg-green-500/10 flex items-center justify-center transition-all duration-300 group/link"
                  title="Live Demo"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover/link:text-green-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
              {githubClient && (
                <a
                  href={githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-800/60 border border-gray-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 group/link"
                  title="GitHub Repository"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover/link:text-purple-400 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;





