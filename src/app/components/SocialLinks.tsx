import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp, SiGmail, SiX } from "react-icons/si";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center md:justify-start">
      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/in/arpan-dey-web47"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-blue-600/70 flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <FaLinkedinIn className="relative z-10 w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
      </Link>

      {/* GitHub */}
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

      {/* X / Twitter */}
      <Link
        href="https://x.com/arpandeyweb"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-neutral-400/70 flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden"
        title="Twitter"
        aria-label="Twitter"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/20 to-zinc-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <SiX className="relative z-10 w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </Link>

      {/* Gmail */}
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

      {/* WhatsApp */}
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
