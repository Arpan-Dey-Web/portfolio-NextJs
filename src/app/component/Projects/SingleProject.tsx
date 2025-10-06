"use client";
import React, { useEffect, useState } from "react";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { IoSparkles } from "react-icons/io5";

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

  // Enhanced Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#030108] via-[#0f0533] to-[#160e30] flex items-center justify-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-200"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-300 text-lg font-medium">
            Loading project details...
          </p>
        </div>
      </div>
    );
  }

  // Enhanced Not Found State
  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#030108] via-[#0f0533] to-[#160e30] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200"></div>
        </div>

        <div className="relative z-10 text-center max-w-md">
          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 flex items-center justify-center backdrop-blur-sm">
            <svg
              className="w-12 h-12 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Project Not Found
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            The project {`you're`} looking for {` doesn't`} exist or has been removed.
          </p>
          <button
            onClick={() => router.push("/")}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Home</span>
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
    <div className="min-h-screen bg-gradient-to-b from-[#030108] via-[#0f0533] to-[#160e30] pb-20">
      {/* Enhanced Hero Section with Background */}
      <div className="relative border-b border-gray-800/50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-200"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Enhanced Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push("/")}
            className="group mb-8 px-6 sm:px-8 py-3 sm:py-3.5 bg-gray-800/60 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50 text-white rounded-xl transition-all duration-300 flex items-center gap-3 hover:-translate-x-1 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base font-medium">
              Back to Home
            </span>
          </motion.button>

          {/* Enhanced Project Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 mb-10">
            {ProjectLogo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 p-4 flex-shrink-0 backdrop-blur-md group"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src={ProjectLogo}
                  alt={`${projecttittle} logo`}
                  width={128}
                  height={128}
                  className="relative z-10 w-full h-full object-contain"
                />
              </motion.div>
            )}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/40"
              >
                <IoSparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                <p className="text-xs sm:text-sm font-bold text-blue-300 tracking-widest">
                  PROJECT SHOWCASE
                </p>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 leading-tight"
              >
                {projecttittle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl"
              >
                {ProjectDescription}
              </motion.p>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {liveLink && (
              <Link href={liveLink} target="_blank" rel="noopener noreferrer">
                <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white rounded-xl transition-all duration-300 flex items-center gap-3 shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 overflow-hidden">
                  <FiExternalLink className="w-5 h-5 group-hover/btn:rotate-45 transition-transform" />
                  <span className="font-bold">Live Demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
            )}
            {githubClient && (
              <Link
                href={githubClient}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group px-8 py-4 bg-gray-800/60 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50 text-white rounded-xl transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                  <FaGithub className="w-5 h-5" />
                  <span className="font-semibold">Client Code</span>
                </button>
              </Link>
            )}
            {githubServer && (
              <Link
                href={githubServer}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group px-8 py-4 bg-gray-800/60 backdrop-blur-md border border-gray-700/50 hover:border-purple-500/50 text-white rounded-xl transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                  <FaGithub className="w-5 h-5" />
                  <span className="font-semibold">Server Code</span>
                </button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
        {/* Enhanced Tech Stack */}
        <section className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400"
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
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Technology <span className="name-gradient">Stack</span>
            </h2>
            <div className="relative w-32 h-1.5 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technology?.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group px-6 py-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-110 cursor-default hover:shadow-lg hover:shadow-blue-500/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Enhanced Screenshots Gallery */}
        {ProjectBestPageImage?.length > 0 && (
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400"
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
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Project <span className="name-gradient">Screenshots</span>
              </h2>
              <div className="relative w-32 h-1.5 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full blur-sm opacity-50"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {ProjectBestPageImage.slice(0, 2).map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 h-96 lg:h-[28rem] bg-gray-900/50 backdrop-blur-sm"
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
                </motion.div>
              ))}
              {ProjectBestPageImage.slice(2, 4).map((img, idx) => (
                <motion.div
                  key={idx + 2}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx + 2) * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500"
                >
                  <Image
                    src={img}
                    alt={`${projecttittle} screenshot ${idx + 3}`}
                    width={800}
                    height={600}
                    className="w-full h-96 lg:h-[28rem] object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Enhanced Features */}
        {features?.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 sm:mb-20 lg:mb-24"
          >
            <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl border border-gray-700/50 hover:border-blue-500/50 p-8 sm:p-10 lg:p-12 transition-all duration-500">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gray-700/50 group-hover:border-blue-500/50 rounded-tl-3xl transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gray-700/50 group-hover:border-blue-500/50 rounded-br-3xl transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">🚀</span>
                  Key Features
                </h3>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-transparent mb-8 rounded-full"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                  {features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group/item flex items-start gap-4 p-5 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
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
            </div>
          </motion.section>
        )}

        {/* Enhanced Challenges */}
        {challengeFaces?.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 sm:mb-20 lg:mb-24"
          >
            <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl border border-gray-700/50 hover:border-orange-500/50 p-8 sm:p-10 lg:p-12 transition-all duration-500">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gray-700/50 group-hover:border-orange-500/50 rounded-tl-3xl transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gray-700/50 group-hover:border-orange-500/50 rounded-br-3xl transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">🎯</span>
                  Challenges & Solutions
                </h3>
                <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-transparent mb-8 rounded-full"></div>
                <div className="space-y-4">
                  {challengeFaces.map((challenge, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="text-orange-400 text-2xl flex-shrink-0">
                        ✓
                      </span>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {challenge}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Enhanced Future Plans */}
        {futurePlans?.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 sm:mb-20"
          >
            <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl border border-gray-700/50 hover:border-green-500/50 p-8 sm:p-10 lg:p-12 transition-all duration-500">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gray-700/50 group-hover:border-green-500/50 rounded-tl-3xl transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gray-700/50 group-hover:border-green-500/50 rounded-br-3xl transition-all duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">🛠️</span>
                  Future Enhancements
                </h3>
                <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-transparent mb-8 rounded-full"></div>
                <div className="space-y-4">
                  {futurePlans.map((plan, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/40 border border-gray-700/30 hover:border-green-500/30 transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="text-green-400 text-2xl flex-shrink-0">
                        🚩
                      </span>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {plan}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
