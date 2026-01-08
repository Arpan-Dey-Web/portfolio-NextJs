import React from "react";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";

const AboutMe = () => {
  const interests = [
    {
      name: "MERN Stack",
      icon: "💻",
      color: "from-green-500/20 to-emerald-500/20 border-green-500/40",
    },
    {
      name: "ReactJS",
      icon: "⚛️",
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/40",
    },
    {
      name: "UI/UX",
      icon: "🎨",
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/40",
    },
    {
      name: "Full Stack",
      icon: "🌐",
      color: "from-orange-500/20 to-red-500/20 border-orange-500/40",
    },
    {
      name: "Cricket",
      icon: "🏏",
      color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/40",
    },
    {
      name: "Football",
      icon: "⚽",
      color: "from-indigo-500/20 to-blue-500/20 border-indigo-500/40",
    },
  ];

  const highlights = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Clean Code Philosophy",
      description: "Writing maintainable, scalable solutions",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Turning complex ideas into simple interfaces",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Performance Focus",
      description: "Optimizing for speed and user experience",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      id="about"
      className="  rounded-2xl mx-auto max-w-7xl  relative overflow-hidden"
      aria-label="About Me Section"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200"></div>
      </div>

      <div className="relative z-10 ">
        {/* Header Section */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in ">
          <div className="relative inline-flex items-center gap-2 mb-4 border-2 border-purple-500/50 rounded-full py-2 px-6 bg-purple-900/20 backdrop-blur-sm shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
            {/* Animated gradient background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 animate-pulse"></div>

            {/* Content */}
            <div className="relative flex items-center gap-2">
              <IoSparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              <span className="text-sm sm:text-base uppercase tracking-widest bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-bold">
                Get to know me
              </span>
              <IoSparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8 sm:mb-6 merinda-font">
            My{" "}
            <span className="name-gradient inline-block transition-transform duration-300 cursor-default pb-2 leading-tight">
              Journey
            </span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 merinda-font mt-4 sm:mt-6 max-w-3xl mx-auto px-4 animate-slide-up">
            From curious tinkerer to crafting digital stories with code.
          </p>
        </header>

        <article className=" space-y-8 sm:space-y-12">
          {/* Main Profile Card */}
          <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 animate-slide-up">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-purple-500/30 rounded-tl-2xl group-hover:border-purple-500/60 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-blue-500/30 rounded-br-2xl group-hover:border-blue-500/60 transition-colors duration-500"></div>

            {/* WHO I AM Badge */}
            <div className="inline-flex items-center gap-2 mb-8 sm:mb-10 px-5 sm:px-7 py-2.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 group-hover:scale-105">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <p className="text-xs sm:text-sm font-bold text-purple-300 tracking-widest">
                WHO I AM
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl text-gray-300 merinda-font leading-relaxed ">
              <p className="text-justify sm:text-left">
                {`I'm`}{" "}
                <span className="font-bold name-gradient text-xl sm:text-2xl">
                  Arpan Dey
                </span>
                , a passionate and detail-oriented{" "}
                <span className="font-semibold text-white relative inline-block group/text">
                  MERN Stack Developer
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover/text:w-full transition-all duration-500"></span>
                </span>{" "}
                who thrives on building clean, scalable, and user-centered web
                applications. What began as simple HTML and CSS experiments has
                evolved into a full-fledged journey of crafting seamless digital
                experiences with{" "}
                <span className="font-semibold text-white relative inline-block group/text">
                  ReactJS, Node.js, and modern frontend technologies
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 group-hover/text:w-full transition-all duration-500"></span>
                </span>
                .
              </p>

              <p className="text-justify sm:text-left">
                I enjoy turning complex ideas into intuitive, high-performance
                interfaces that blend functionality with visual elegance.
                Whether {` it's`} integrating REST APIs, optimizing performance,
                or refining UI interactions, I focus on writing maintainable
                code that delivers value to both users and teams.
              </p>

              <p className="text-justify sm:text-left">
                Outside of development, I find inspiration through exploring new
                cuisines, playing cricket, and photography—activities that help
                me stay creative and balanced. Driven by curiosity and
                continuous learning, I aim to create technology that not only
                works efficiently but also connects with people in meaningful
                ways.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 l overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interests Tags with Enhanced Styling */}
          <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white merinda-font">
              Interests & <span className="name-gradient">Passions</span>
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              {interests.map((item, index) => (
                <div
                  key={index}
                  className={`group relative px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-xl border hover:scale-110 transition-all duration-300 cursor-default overflow-hidden`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                  <span className="relative flex items-center gap-2 text-sm sm:text-base font-semibold text-white">
                    <span className="text-lg sm:text-xl">{item.icon}</span>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="flex justify-center pt-4 sm:pt-8">
            <div className="relative w-full max-w-md h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
