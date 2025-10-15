import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn, FaLightbulb, FaTwitter } from "react-icons/fa";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { SiX } from "react-icons/si"; // Import X logo
export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      <Link
        href="https://x.com/arpandeyweb"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-sky-400/70 flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden"
        title="Twitter"
        aria-label="Twitter"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <SiX className="relative z-10 w-5 h-5 text-gray-400 group-hover:text-sky-400 transition-colors" />
      </Link>

      <Link
        href="https://github.com/Arpan-Dey-Web"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/70 flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden"
        title="GitHub"
        aria-label="GitHub"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <FaGithub className="relative z-10 w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </Link>

      <Link
        href="mailto:arpandey.web@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/70 flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden"
        title="Gmail"
        aria-label="Email"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <SiGmail className="relative z-10 w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
      </Link>

      <Link
        href="https://wa.me/8801821524847"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/70 flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden"
        title="WhatsApp"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <SiWhatsapp className="relative z-10 w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
      </Link>
    </div>
  );
}
