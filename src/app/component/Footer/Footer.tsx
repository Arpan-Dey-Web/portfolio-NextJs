"use client";
import React from "react";
import { FaLinkedinIn, FaGithub, FaHeart } from "react-icons/fa";
import Mylogo from "../Mylogo/Mylogo";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { IoSparkles } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("/#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const quickLinks = [
    { href: "/#about", label: "About Me" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#certificate", label: "Certificate" },
    { href: "/#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/arpan-dey-web",
      hoverColor:
        "hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-blue-500/20",
      iconHoverColor: "group-hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/Arpan-Dey-Web",
      hoverColor:
        "hover:border-purple-500/70 hover:bg-purple-500/10 hover:shadow-purple-500/20",
      iconHoverColor: "group-hover:text-white",
    },
    {
      name: "Gmail",
      icon: <SiGmail className="w-5 h-5" />,
      href: "mailto:arpandey.web@gmail.com",
      hoverColor:
        "hover:border-red-500/70 hover:bg-red-500/10 hover:shadow-red-500/20",
      iconHoverColor: "group-hover:text-red-400",
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/8801821524847",
      hoverColor:
        "hover:border-green-500/70 hover:bg-green-500/10 hover:shadow-green-500/20",
      iconHoverColor: "group-hover:text-green-400",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-[#0f0a1f] to-[#1a1033] border-t border-gray-800/50 overflow-hidden">
      {/* Enhanced decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
      </div>

      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-200"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-400"></div>
      </div>

      <footer className="relative z-10 max-w-7xl w-11/12 mx-auto py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          {/* Enhanced Logo & About Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link
              href="/"
              className="hover:opacity-80 transition-all duration-300 hover:scale-105 group"
            >
              <Mylogo />
            </Link>
            <p className="text-gray-400 text-sm sm:text-base text-center md:text-left max-w-xs leading-relaxed">
              Building digital experiences with modern web technologies.{" "}
              {` Let's`}
              create something amazing together.
            </p>

            {/* Call to Action Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/30">
              <IoSparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-xs text-blue-300 font-semibold">
                Open for Opportunities
              </span>
            </div>
          </div>

          {/* Enhanced Quick Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h3 className="text-white font-bold text-lg sm:text-xl">
                Quick Links
              </h3>
            </div>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="group relative text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm sm:text-base flex items-center gap-3 hover:translate-x-2"
                >
                  <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-all duration-300 group-hover:scale-125"></span>
                  <span className="relative">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Enhanced Contact Info Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <h3 className="text-white font-bold text-lg sm:text-xl">
                Get in Touch
              </h3>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:arpandey.web@gmail.com"
                className="group flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm sm:text-base"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-800/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-500/10 border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300 group-hover:scale-110">
                  <FiMail className="w-4 h-4" />
                </div>
                <span className="text-sm group-hover:underline">
                  arpandey.web@gmail.com
                </span>
              </a>

              <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
                <div className="w-10 h-10 rounded-xl bg-gray-800/60 backdrop-blur-sm flex items-center justify-center border border-gray-700/50">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Chittagong, Bangladesh</span>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 ${social.hoverColor} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1`}
                  title={social.name}
                  aria-label={social.name}
                >
                  <div
                    className={`text-gray-400 ${social.iconHoverColor} transition-colors`}
                  >
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="relative w-full h-px my-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-sm"></div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-sm">
          <p className="text-gray-400 flex items-center gap-2 text-center sm:text-left">
            © {currentYear}{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Arpan Dey
            </span>
            . All rights reserved.
          </p>

          <p className="text-gray-400 flex items-center gap-2 text-center sm:text-right">
            Made with{" "}
            <FaHeart className="text-red-500 animate-pulse inline-block" />{" "}
            using <span className="font-semibold text-white">Next.js</span> &{" "}
            <span className="font-semibold text-white">Tailwind CSS</span>
          </p>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group fixed bottom-8 right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 border border-blue-500/50 z-50"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </footer>
    </div>
  );
};

export default Footer;
