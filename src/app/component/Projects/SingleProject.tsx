"use client";
import React, { useEffect, useState } from "react";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

type Project = {
  id: number;
  projecttittle: string;
  technology: string[];
  liveLink?: string;
  githubClient?: string;
  githubServer?: string;
  features: string[];
  license?: string;
  images?: string[];
  ProjectLogo?: string;
  ProjectBestPageImage?: string[];
  ProjectDescription: string;
  ProjectBannerImages?: string[];
  challengeFaces?: string[];
  futurePlans?: string[];
};

const SingleProject = ({ projectsid }) => {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data: Project[]) => {
        const found = data.find((item) => item.id === parseInt(projectsid));
        setProject(found || null);
        setLoading(false);
      })
      .catch(() => {
        setProject(null);
        setLoading(false);
      });
  }, [id, projectsid]);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading project details...</p>
        </div>
      </div>
    );
  }

  // Not Found State
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Project Not Found
          </h2>
          <p className="text-gray-400 mb-6">
            The project {`you're`} looking for {`doesn't`} exist or has been removed.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <FiArrowLeft />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const {
    projecttittle,
    technology,
    liveLink,
    githubClient,
    githubServer,
    features,
    ProjectLogo,
    ProjectBestPageImage,
    ProjectDescription,
    challengeFaces,
    futurePlans,
  } = project;

  return (
    <div className="min-h-screen bg-gray-950 pb-20">
      {/* Hero Section with Background */}
      <div className="relative bg-gradient-to-b from-blue-950/20 to-gray-950 border-b border-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-5 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Back Button */}
          <button
            onClick={() => router.push("/")}
            className="group mb-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 text-white rounded-full transition-all duration-300 flex items-center gap-2 hover:-translate-x-1"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Back to Home</span>
          </button>

          {/* Project Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            {ProjectLogo && (
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gray-800/60 border border-gray-700/50 p-3 flex-shrink-0">
                <Image
                  src={ProjectLogo}
                  alt={`${projecttittle} logo`}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="inline-block mb-3 px-4 py-1.5 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
                <p className="text-xs sm:text-sm font-semibold text-blue-300 tracking-wide">
                  PROJECT SHOWCASE
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {projecttittle}
              </h1>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl">
                {ProjectDescription}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {liveLink && (
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                <button className="group/btn px-6 sm:px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105">
                  <FiExternalLink className="group-hover/btn:rotate-45 transition-transform" />
                  <span className="font-semibold text-sm sm:text-base">
                    Live Demo
                  </span>
                </button>
              </Link>
            )}
            {githubClient && (
              <Link
                href={githubClient}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 sm:px-8 py-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/70 text-white rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105">
                  <FaGithub />
                  <span className="font-semibold text-sm sm:text-base">
                    Client Code
                  </span>
                </button>
              </Link>
            )}
            {githubServer && (
              <Link
                href={githubServer}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 sm:px-8 py-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/70 text-white rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105">
                  <FaGithub />
                  <span className="font-semibold text-sm sm:text-base">
                    Server Code
                  </span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        {/* Tech Stack */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400"
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
              Technology Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technology?.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 text-white text-sm sm:text-base font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Screenshots Gallery */}
        {ProjectBestPageImage?.length > 0 && (
          <section className="mb-12 sm:mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Project Screenshots
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {ProjectBestPageImage.slice(0, 2).map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 h-80 sm:h-96 bg-gray-900/50"
                >
                  <motion.img
                    src={img}
                    alt={`${projecttittle} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover object-top"
                    initial={{ y: 0 }}
                    whileHover={{ y: -1100 }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
              {ProjectBestPageImage.slice(2, 4).map((img, idx) => (
                <div
                  key={idx + 2}
                  className="relative overflow-hidden rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 group"
                >
                  <Image
                    src={img}
                    alt={`${projecttittle} screenshot ${idx + 3}`}
                    width={800}
                    height={600}
                    className="w-full h-80 sm:h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Features */}
        {features?.length > 0 && (
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">🚀</span>
                Key Features
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Challenges */}
        {challengeFaces?.length > 0 && (
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">🎯</span>
                Challenges & Solutions
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-transparent mb-6"></div>
              <div className="space-y-4">
                {challengeFaces.map((challenge, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300"
                  >
                    <span className="text-orange-400 text-xl flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {challenge}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Future Plans */}
        {futurePlans?.length > 0 && (
          <section className="mb-12 sm:mb-16">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">🛠</span>
                Future Enhancements
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-transparent mb-6"></div>
              <div className="space-y-4">
                {futurePlans.map((plan, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-green-500/30 transition-all duration-300"
                  >
                    <span className="text-green-400 text-xl flex-shrink-0">
                      🚩
                    </span>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {plan}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
