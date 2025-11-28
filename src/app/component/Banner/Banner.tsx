"use client"
import React from "react";
import { HiDownload } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import ProfileWithTechStack from "../../components/Bannerimage";
import SocialLinks from "../../components/SocialLinks";
import { FaLightbulb } from "react-icons/fa";
import {LuZap, LuBrainCircuit, LuRocket} from "react-icons/lu";
const Banner = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "ArpanDey_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-10 lg:py-0 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto w-11/12 gap-8 lg:gap-16">
      {/* Text Content */}
      <div className="text-center md:text-left space-y-8 animate-fade-in">
        {/* Welcome Text */}
        <div className="space-y-4">
          <span className="text-white/90 text-2xl md:text-3xl merinda-font block animate-slide-down">
            Welcome To My Portfolio
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl merinda-font font-bold animate-slide-up ">
            <span className="text-white">Hello, I am </span>
            <span className="name-gradient inline-block  transition-transform duration-300 py-4">
              Arpan
            </span>
          </h1>
        </div>
        {/* Typewriter Effect */}
        <div className="text-2xl md:text-4xl min-h-[3rem] md:min-h-[4rem]">
          <span className="font-bold merinda-font">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "MERN Stack Developer",
              ]}
              loop={false}
              cursor
              cursorStyle=""
              cursorColor=""
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </div>

        {/* Taglines with Animation */}
        <div className="text-base md:text-lg text-gray-300/90 max-w-xl nunito-font space-y-3">
          <p className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default">
            <LuZap className="text-white/80" />
            Build. Break. Learn. Repeat.
          </p>

          <p className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default delay-100">
            <LuBrainCircuit className="text-white/80" />
            Think in Logic, Speak in Design, Dream in Code.
          </p>

          <p className="flex items-center gap-2 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-default delay-200">
            <LuRocket className="text-white/80" />A Developer — Not by Title,
            but by Mindset.
          </p>
        </div>
        {/* Social Links with Enhanced Styling */}
        <SocialLinks />
        {/* Enhanced CTA Buttons */}
        <div className="flex gap-4 md:gap-6 flex-wrap justify-center md:justify-start pt-2">
          <button
            className="group relative rounded-full text-white px-8 md:px-14 py-3 md:py-4 bg-[#DE2A8A] text-lg md:text-xl font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(222,42,138,0.5)] active:scale-95"
            onClick={() => {
              document.getElementById("skills")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaLightbulb className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Technical Skills
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DE2A8A] via-[#FF3D9A] to-[#DE2A8A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
            <div className="absolute inset-0 bg-[#FF3D9A]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <Link
            href="https://drive.google.com/file/d/1Md274D0IlTFRjrtSsAO7fOHxDPZdTBZn/view?usp=sharing"
            target="_blank"
            className="group relative rounded-full text-[#DE2A8A] px-8 md:px-14 py-3 md:py-4 text-lg md:text-xl font-medium border-2 border-[#DE2A8A] bg-transparent overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(222,42,138,0.3)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              <HiDownload className="w-5 h-5 group-hover:animate-bounce" />
              Resume
            </span>
            <div className="absolute inset-0 bg-[#DE2A8A] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </div>

      {/* Profile Image with Enhanced Effects */}
      <div className="relative w-fit mx-auto md:mx-0 animate-float">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#4d79ff] via-[#ff2d75] to-[#4d79ff] rounded-full opacity-30 blur-2xl animate-pulse-slow" />
        <div className="relative">
          <ProfileWithTechStack />
        </div>
      </div>
    </div>
  );
};

export default Banner;
