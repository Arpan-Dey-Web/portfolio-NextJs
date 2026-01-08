"use client";
import React, { useEffect, useState } from "react";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { IoCopy, IoCheckmark } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { IoSparkles } from "react-icons/io5";
import { MdOutlineFullscreen } from "react-icons/md";
import { ImageModal } from "../../components/ImageModal";
import ProjectTechStack from "../../components/ProjectTechStack";
import Features from "../../components/Features";
import TechnicalHeighlights from "../../components/TechnicalHeighlights";
import ProjectChallenges from "../../components/ProjectChallenges";
import Achievement from "../../components/Achievement";
import Metrics from "../../components/Metrics";
import FuturePlans from "../../components/FuturePlans";
type Project = {
  id: number;
  slug: string;
  projecttittle: string;
  category: string;
  status: string;
  featured: boolean;
  role: string;
  teamSize: number;
  lastUpdated: string;
  ProjectLogo?: string;
  ProjectDescription: string;
  metaDescription?: string;
  keywords?: string[];
  ProjectBannerImages?: string | string[]; // can be single or multiple
  ProjectBestPageImage?: string[];
  screenshots?: {
    url: string;
    title: string;
    description: string;
  }[];
  technology: string[];
  liveLink?: string;
  githubClient?: string;
  githubServer?: string;
  demoCredentials?: {
    admin?: {
      email: string;
      password: string;
      note?: string;
    };
    user?: {
      email: string;
      password: string;
      note?: string;
    };
  };
  features?: {
    authentication?: string[];
    petAdoption?: string[];
    donations?: string[];
    userDashboard?: string[];
    adminDashboard?: string[];
    uiUx?: string[];
  };
  technicalHighlights?: string[];
  challenges?: {
    problem: string;
    solution: string;
    impact: string;
  }[];
  achievements?: string[];
  metrics?: {
    performanceScore?: string;
    accessibilityScore?: string;
    bestPracticesScore?: string;
    seoScore?: string;
    pageLoadTime?: string;
    firstContentfulPaint?: string;
  };
  futurePlans?: string[];
  license?: string;
};

const SingleProject = ({ projectsid }) => {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedField, setCopiedField] = useState(null);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img, idx) => {
    setSelectedImage({
      image: img,
      name: `${project.projecttittle} - Screenshot ${idx + 1}`,
    });
    setModalOpen(true);
  };
  const handleCopy = async (text, fieldId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldId);
      setTimeout(() => {
        setCopiedField(null);
      }, 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
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
            The project {`you're`} looking for {` doesn't`} exist or has been
            removed.
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
    ProjectDescription,
    role,
    teamSize,
    lastUpdated,
    status,
    category,
    technology,
    ProjectBestPageImage,
    screenshots,
    features,
    technicalHighlights,
    challenges,
    achievements,
    metrics,
    futurePlans,
    liveLink,
    githubClient,
    githubServer,
    demoCredentials,
    ProjectLogo,
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
            className="group  mb-8 px-6 sm:px-8 py-3 sm:py-3.5 bg-gray-800/60 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50 text-white rounded-full transition-all duration-300 flex items-center gap-3 hover:-translate-x-1 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <FiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base font-medium">
              Back to Home
            </span>
          </motion.button>
          {/* Project Overview Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className=" backdrop-blur-md rounded-3xl border border-gray-700/50 p-8 sm:p-10 lg:p-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full border border-green-500/30">
                  {status}
                </span>
                <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full border border-blue-500/30">
                  {category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                {projecttittle}
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {ProjectDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/30">
                  <p className="text-gray-400 text-sm mb-1">Role</p>
                  <p className="text-white font-semibold text-lg">{role}</p>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/30">
                  <p className="text-gray-400 text-sm mb-1">Team Size</p>
                  <p className="text-white font-semibold text-lg">
                    {teamSize} Developer
                  </p>
                </div>
                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/30">
                  <p className="text-gray-400 text-sm mb-1">Last Updated</p>
                  <p className="text-white font-semibold text-lg">
                    {lastUpdated}
                  </p>
                </div>
              </div>

              {/* Enhanced Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4  md:justify-center my-5 "
              >
                {liveLink && (
                  <Link
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
            </motion.div>
          </section>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen relative border-b border-gray-800/50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-200"></div>
        </div>

        {/* Demo Credentials Section */}
        {demoCredentials && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Demo{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Credentials
                </span>
              </h2>
              <div className="relative w-32 h-1.5 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
            {/* Admin & User credential show */}
            <div className="w-full px-4">
              <div
                className={`grid gap-6 w-full max-w-4xl mx-auto ${
                  demoCredentials.admin?.email && demoCredentials.user?.email
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 place-items-center"
                }`}
              >
                {demoCredentials.admin &&
                  demoCredentials.admin.email &&
                  demoCredentials.admin.password && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-md rounded-2xl border border-orange-500/30 p-6 w-full max-w-md"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">👑</span>
                        <h3 className="text-2xl font-bold text-white">
                          Admin Access
                        </h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Email</p>
                          <div className="flex items-center gap-2">
                            <p className="text-white font-mono bg-gray-800/50 px-4 py-2 rounded-lg flex-1 break-all">
                              {demoCredentials.admin.email}
                            </p>
                            <button
                              onClick={() =>
                                handleCopy(
                                  demoCredentials.admin.email,
                                  "admin-email"
                                )
                              }
                              className={`${
                                copiedField === "admin-email"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-orange-500/20 hover:bg-orange-500/30 text-orange-400"
                              } p-2 rounded-lg transition-all duration-200 hover:scale-110`}
                              title={
                                copiedField === "admin-email"
                                  ? "Copied!"
                                  : "Copy email"
                              }
                            >
                              {copiedField === "admin-email" ? (
                                <IoCheckmark className="w-5 h-5" />
                              ) : (
                                <IoCopy className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Password</p>
                          <div className="flex items-center gap-2">
                            <p className="text-white font-mono bg-gray-800/50 px-4 py-2 rounded-lg flex-1">
                              {demoCredentials.admin.password}
                            </p>
                            <button
                              onClick={() =>
                                handleCopy(
                                  demoCredentials.admin.password,
                                  "admin-password"
                                )
                              }
                              className={`${
                                copiedField === "admin-password"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-orange-500/20 hover:bg-orange-500/30 text-orange-400"
                              } p-2 rounded-lg transition-all duration-200 hover:scale-110`}
                              title={
                                copiedField === "admin-password"
                                  ? "Copied!"
                                  : "Copy password"
                              }
                            >
                              {copiedField === "admin-password" ? (
                                <IoCheckmark className="w-5 h-5" />
                              ) : (
                                <IoCopy className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>
                        {demoCredentials.admin.note && (
                          <p className="text-gray-300 text-sm italic">
                            {demoCredentials.admin.note}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}

                {demoCredentials.user &&
                  demoCredentials.user.email &&
                  demoCredentials.user.password && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl border border-blue-500/30 p-6 w-full max-w-md"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">👤</span>
                        <h3 className="text-2xl font-bold text-white">
                          User Access
                        </h3>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Email</p>
                          <div className="flex items-center gap-2">
                            <p className="text-white font-mono bg-gray-800/50 px-4 py-2 rounded-lg flex-1 break-all">
                              {demoCredentials.user.email}
                            </p>
                            <button
                              onClick={() =>
                                handleCopy(
                                  demoCredentials.user.email,
                                  "user-email"
                                )
                              }
                              className={`${
                                copiedField === "user-email"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-blue-500/20 hover:bg-blue-500/30 text-blue-400"
                              } p-2 rounded-lg transition-all duration-200 hover:scale-110`}
                              title={
                                copiedField === "user-email"
                                  ? "Copied!"
                                  : "Copy email"
                              }
                            >
                              {copiedField === "user-email" ? (
                                <IoCheckmark className="w-5 h-5" />
                              ) : (
                                <IoCopy className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Password</p>
                          <div className="flex items-center gap-2">
                            <p className="text-white font-mono bg-gray-800/50 px-4 py-2 rounded-lg flex-1">
                              {demoCredentials.user.password}
                            </p>
                            <button
                              onClick={() =>
                                handleCopy(
                                  demoCredentials.user.password,
                                  "user-password"
                                )
                              }
                              className={`${
                                copiedField === "user-password"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-blue-500/20 hover:bg-blue-500/30 text-blue-400"
                              } p-2 rounded-lg transition-all duration-200 hover:scale-110`}
                              title={
                                copiedField === "user-password"
                                  ? "Copied!"
                                  : "Copy password"
                              }
                            >
                              {copiedField === "user-password" ? (
                                <IoCheckmark className="w-5 h-5" />
                              ) : (
                                <IoCopy className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>
                        {demoCredentials.user.note && (
                          <p className="text-gray-300 text-sm italic">
                            {demoCredentials.user.note}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
              </div>
            </div>
          </section>
        )}

        {/* Technology Stack */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <svg
                className="w-8 h-8 text-blue-400"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technology{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <div className="relative w-32 h-1.5 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technology?.map((tech: string, index: number) => (
              <ProjectTechStack key={index} tech={tech} index={index} />
            ))}
          </div>
        </section>

        {/* Screenshots Gallery */}
        {ProjectBestPageImage?.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <svg
                  className="w-8 h-8 text-purple-400"
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Project{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2 leading-tight inline-block">
                  Screenshots
                </span>
              </h2>
              <div className="relative w-32 h-1.5 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {ProjectBestPageImage.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 bg-gray-900/50 backdrop-blur-sm cursor-pointer"
                  onClick={() => handleImageClick(img, idx)}
                >
                  <Image
                    src={img}
                    width={1400}
                    height={1400}
                    alt={`${projecttittle} screenshot ${idx + 1}`}
                    className="w-full h-96 object-cover object-top rounded-2xl"
                  />

                  {/* Enhanced Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3 transform group-hover:scale-110 transition-transform duration-300">
                      <MdOutlineFullscreen className="w-16 h-16 text-white animate-pulse" />
                      <span className="text-white font-bold text-lg">
                        View Full Size
                      </span>
                      <span className="text-gray-300 text-sm">
                        Click to zoom
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Features Section */}
        {features && Object.keys(features).length > 0 && (
          <Features features={features} />
        )}

        {/* Technical Highlights */}
        {technicalHighlights?.length > 0 && (
          <TechnicalHeighlights technicalHighlights={technicalHighlights} />
        )}

        {/* Challenges Section */}
        {challenges?.length > 0 && (
          <ProjectChallenges challenges={challenges} />
        )}

        {/* Achievements */}
        {achievements?.length > 0 && (
          <Achievement achievements={achievements} />
        )}

        {/* Performance Metrics */}
        {metrics && <Metrics metrics={metrics}  />}

        {/* Future Plans */}
        {futurePlans?.length > 0 && <FuturePlans futurePlans={futurePlans} />}
      </div>
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageUrl={selectedImage?.image}
        projectName={selectedImage?.name}
      />
    </div>
  );
};

export default SingleProject;
