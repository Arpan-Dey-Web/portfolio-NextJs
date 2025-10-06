"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Mylogo from "../Mylogo/Mylogo";
import {
  FaHome,
  FaUser,
  FaTools,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaClock,
} from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time (12-hour format with AM/PM)
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const navItems = [
    { name: "home", icon: FaHome, type: "scroll" },
    { name: "about", icon: FaUser, type: "scroll" },
    { name: "skills", icon: FaTools, type: "scroll" },
    { name: "projects", icon: FaCode, type: "scroll" },
    { name: "certificate", icon: FaGraduationCap, type: "scroll" },
    { name: "contact", icon: FaEnvelope, type: "scroll" },
   
  ];

  const scrollProps = {
    smooth: true,
    offset: -80,
    duration: 500,
    activeClass: "active",
    spy: true,
  };

  return (
    <nav className="sticky top-0 z-50 shadow-lg backdrop-blur-md bg-gradient-to-b from-[#0f0a1f] to-[#1a1033] border-b border-gray-800/50">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto w-11/12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left Section: Logo & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-gray-800/50 transition-all"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            <ScrollLink
              to="home"
              {...scrollProps}
              className="flex-shrink-0 cursor-pointer"
            >
              <Mylogo />
            </ScrollLink>
          </div>

          {/* Center Section: Desktop Navigation */}
          <div className="hidden lg:block flex-1 max-w-3xl mx-6">
            <div className="flex items-center justify-center space-x-1 xl:space-x-2">
              {navItems.map((item) =>
                item.type === "scroll" ? (
                  <ScrollLink
                    key={item.name}
                    to={item.name}
                    {...scrollProps}
                    className="text-gray-300 hover:text-white capitalize font-medium px-3 py-2 relative group cursor-pointer transition-all duration-300 flex items-center gap-2 rounded-lg hover:bg-gray-800/40 merinda-font"
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm xl:text-base">{item.name}</span>

                    {/* Active indicator */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                  </ScrollLink>
                ) : (
                  <Link
                    key={item.name}
                    href={"#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white capitalize font-medium px-3 py-2 relative group cursor-pointer transition-all duration-300 flex items-center gap-2 rounded-lg hover:bg-gray-800/40 merinda-font"
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm xl:text-base">{item.name}</span>

                    {/* Active indicator */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                  </Link>
                )
              )}
              <Link
                href="https://drive.google.com/file/d/1Md274D0IlTFRjrtSsAO7fOHxDPZdTBZn/view?usp=sharing"
                target="_blank"
                className="text-gray-300 hover:text-white capitalize font-medium px-3 py-2 relative group cursor-pointer transition-all duration-300 flex items-center gap-2 rounded-lg hover:bg-gray-800/40 merinda-font"
              >
                <FaFilePdf className="w-4 h-4 group-hover:scale-110 transition-transform" />{" "}
                Resume
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
              </Link>
            </div>
          </div>

          {/* Right Section: Time (Mobile) & Download Button */}
          <div className="flex items-center gap-3">
            {/* Current Time Display - Mobile/Tablet */}
            <div className="flex xl:hidden items-center gap-2 px-3 py-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50">
              <FaClock className="w-3 h-3 text-blue-400" />
              <span className="text-white text-xs sm:text-sm font-semibold tabular-nums">
                {formatTime(currentTime).split(" ")[0]}
              </span>
            </div>

            {/* Current Time Display - Desktop */}
            <div className="hidden xl:flex items-center gap-2 px-4 py-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700/50">
              <div className="flex flex-col">
                <span className="text-white text-sm font-semibold tabular-nums">
                  {formatTime(currentTime)}
                </span>
                <span className="text-gray-400 text-xs"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-800/50 bg-[#0f0a1f]/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto w-11/12 py-4">
            <div className="space-y-2">
              {navItems.map((item) =>
                item.type === "scroll" ? (
                  <ScrollLink
                    key={item.name}
                    to={item.name}
                    onClick={() => setIsOpen(false)}
                    {...scrollProps}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group"
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="capitalize font-medium">{item.name}</span>
                  </ScrollLink>
                ) : (
                  <Link
                    key={item.name}
                    href={ "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group"
                  >
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="capitalize font-medium">{item.name}</span>
                  </Link>
                )
              )}

              {/* Mobile Time & Date Display */}
              <div className="flex items-center justify-center gap-3 px-4 py-3 mt-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
                <FaClock className="w-5 h-5 text-blue-400 animate-pulse" />
                <div className="flex flex-col items-center">
                  <span className="text-white text-base font-semibold tabular-nums">
                    {formatTime(currentTime)}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {formatDate(currentTime)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
