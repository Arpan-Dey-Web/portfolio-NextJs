import React from "react";
import { FaLinkedinIn, FaGithub, FaHeart } from "react-icons/fa";
import Mylogo from "../Mylogo/Mylogo";
import { SiGmail } from "react-icons/si";
import { FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative bg-gradient-to-b from-gray-950 via-[#0f0a1f] to-[#1a1033] border-t border-gray-800/50">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-5 blur-3xl"></div>

      <footer className="relative z-10 max-w-7xl w-11/12 mx-auto py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Logo & About Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity group"
            >
              <Mylogo />
            </Link>
            <p className="text-gray-400 text-sm sm:text-base text-center md:text-left max-w-xs leading-relaxed">
              Building digital experiences with modern web technologies. {`Let's`}
              create something amazing together.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white font-bold text-lg mb-2">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/#about"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                About Me
              </Link>
              <Link
                href="/#skills"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                Skills
              </Link>
              <Link
                href="/#projects"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                Projects
              </Link>
              <Link
                href="/#contact"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors"></span>
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-white font-bold text-lg mb-2">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:arpandey.web@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-800/60 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                  <FiMail className="w-4 h-4" />
                </div>
                <span className="text-sm">arpandey.web@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
                <div className="w-8 h-8 rounded-full bg-gray-800/60 flex items-center justify-center">
                  <FiMapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Chittagong, Bangladesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <Link
                href="https://www.linkedin.com/in/arpan-dey-web?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </Link>
              <Link
                href="https://github.com/Arpan-Dey-Web"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="mailto:arpandey.web@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/70 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                aria-label="Email"
              >
                <SiGmail className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400 flex items-center gap-2">
            © {currentYear}{" "}
            <span className="font-semibold text-white">Arpan Dey</span>. All
            rights reserved.
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> using
            Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
