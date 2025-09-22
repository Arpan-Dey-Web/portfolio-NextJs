"use client";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Mylogo from "../Mylogo/Mylogo";
import {
  FaHome,
  FaUser,
  FaTools,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "home", icon: FaHome },
    { name: "about", icon: FaUser },
    { name: "skills", icon: FaTools },
    { name: "projects", icon: FaCode },
    { name: "certificate", icon: FaGraduationCap },
    { name: "contact", icon: FaEnvelope },
  ];

  const scrollProps = {
    smooth: true,
    offset: -80,
    duration: 500,
    activeClass: "active",
    spy: true,
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "ArpanDey_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Mobile Toggle */}
          <div className="flex items-center">
            <div className="lg:hidden mr-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <ScrollLink to="home" {...scrollProps} className="flex-shrink-0">
              <Mylogo />
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.name}
                  {...scrollProps} 
                  className="text capitalize  font-medium px-3 py-2 relative group cursor-pointer transition-all duration-300 flex items-center"
                >
                  {/* Icon and text container */}
                  <span className="flex items-center">
                    <span className="mr-2">
                      <item.icon />
                    </span>
                    {item.name}
                  </span>

                  {/* Animation spans */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-primary transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-accent transition-all duration-500 active:w-full"></span>
                </ScrollLink>
              ))}
            </div>
          </div>

          {/* Desktop Download Button */}
          <div className=" hidden md:block">
            <button
              onClick={handleDownload}
              className="btn rounded-full  text-white px-8 py-2 bg-[#DE2A8A] glow glow-hover"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 z-50 border-t border-cyber-primary shadow-lg">
          <ul className="menu menu-sm dropdown-content bg-[#12192F] rounded-box mt-3 w-52 p-2 shadow text-white">
            <li>
              <ScrollLink
                to="home"
                onClick={() => setIsOpen(false)}
                {...scrollProps}
                className="inline-block w-fit px-4 py-2 rounded-md text-base font-medium text-cyber-light hover:text-cyber-accent transition duration-300"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                onClick={() => setIsOpen(false)}
                {...scrollProps}
                className="inline-block w-fit px-4 py-2 rounded-md text-base font-medium text-cyber-light hover:text-cyber-accent transition duration-300"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                onClick={() => setIsOpen(false)}
                {...scrollProps}
                className="inline-block w-fit px-4 py-2 rounded-md text-base font-medium text-cyber-light hover:text-cyber-accent transition duration-300"
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                onClick={() => setIsOpen(false)}
                {...scrollProps}
                className="inline-block w-fit px-4 py-2 rounded-md text-base font-medium text-cyber-light hover:text-cyber-accent transition duration-300"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                onClick={() => setIsOpen(false)}
                {...scrollProps}
                className="inline-block w-fit px-4 py-2 rounded-md text-base font-medium text-cyber-light hover:text-cyber-accent transition duration-300"
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleDownload();
                }}
                className="inline-block w-fit px-4 py-2 rounded-md text-base font-medium text-cyber-light hover:text-cyber-accent transition duration-300"
              >
                Download CV
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
