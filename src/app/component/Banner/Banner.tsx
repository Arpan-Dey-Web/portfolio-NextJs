"use client";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FaLightbulb } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { SiGmail } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import ProfileWithTechStack from "../../components/Bannerimage";

const Banner = () => {
  // download resume function
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "ArpanDey_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto w-11/12">
      {/* Text Content */}
      <div className="text-center md:text-left">
        <div className=" md:text-5xl font-bold mb-6">
          <span className="text-white text-2xl md:text-3xl mb-6 merinda-font ">
            Welcome To My Portfolio
          </span>{" "}
          <br />
          <h1 className="primary  text-4xl md:text-5xl lg:text-7xl merinda-font font-bold  mt-6 ">
            <span className="text-white">Hello, I am</span>{" "}
            <span className="name-gradient">Arpan</span>
          </h1>
        </div>

        <div className="text-2xl md:text-4xl mb-8 ">
          <span className="primary font-bold merinda-font name-gradient">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "MERN Stack Developer",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              cursorColor="#4d79ff"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </div>

        <div className="text-lg text-opacity-80 mb-10 max-w-xl   nunito-font">
          <p className="mb-3  nunito-font">Build. Break. Learn. Repeat</p>
          <p className="mb-3  nunito-font">
            Think In Logic, Speak In Design, Dream In Code
          </p>
          <p className=" nunito-font">
            A Developer Not By Title, But By Mindset
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6">
          <Link
            target="_blank"
            href={
              "https://www.linkedin.com/in/arpan-dey-web?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            className="text-3xl text hover:text-cyber-primary transition-colors social-link p-2 rounded-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/Arpan-Dey-Web"}
            className="text-3xl text hover:text-cyber-primary transition-colors social-link p-2 rounded-lg"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            href="mailto:arpandey.web@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text hover:text-cyber-primary transition-colors social-link p-2 rounded-lg"
            aria-label="Email"
          >
            <SiGmail />
          </Link>

          <Link
            href="https://wa.me/8801821524847"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text hover:text-cyber-primary transition-colors social-link p-2 rounded-lg"
            aria-label="Email"
          >
            <SiWhatsapp />
          </Link>
        </div>
        {/* button start */}
        <div className="mt-10 flex gap-6 flex-wrap">
          <button
            className="group relative rounded-full text-white px-14 py-4 bg-[#DE2A8A] text-xl font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(222,42,138,0.5)]"
            onClick={() => {
              document.getElementById("skills")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaLightbulb className="w-5 h-5" />
              Technical Skills
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DE2A8A] via-[#FF3D9A] to-[#DE2A8A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={handleDownload}
            className="group relative rounded-full text-[#DE2A8A] px-14 py-4 text-xl font-medium border-2 border-[#DE2A8A] bg-transparent overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(222,42,138,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              <HiDownload className="w-5 h-5" />
              Download CV
            </span>
            <div className="absolute inset-0 bg-[#DE2A8A] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </button>
        </div>
        {/* button end */}
      </div>

      <div className="relative w-fit mx-auto md:mx-0">
        {/* Gradient Border Container */}
        <ProfileWithTechStack />
        {/* <div
          className="p-1 rounded-full"
          style={{ background: "linear-gradient(45deg, #4d79ff, #ff2d75)" }}
        >
          <div className="rounded-full overflow-hidden">
            <Image
              src={bannerImage}
              width={400}
              height={400}
              alt="Arpan Dey"
              className="rounded-full"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
