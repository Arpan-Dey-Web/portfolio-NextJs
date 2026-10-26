import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import OtherSkills from "./OtherSkills";
import { IoSparkles } from "react-icons/io5";
import { HiCode, HiServer, HiCog } from "react-icons/hi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <HiCode className="w-8 h-8" />,
      component: <Frontend />,
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
      shadowColor: "shadow-blue-500/10",
      hoverTextColor: "group-hover:text-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      dividerColor: "via-blue-500",
    },
    {
      title: "Backend",
      icon: <HiServer className="w-8 h-8" />,
      component: <Backend />,
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/50",
      shadowColor: "shadow-purple-500/10",
      hoverTextColor: "group-hover:text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      dividerColor: "via-purple-500",
    },
    {
      title: "Tools",
      icon: <HiCog className="w-8 h-8" />,
      component: <OtherSkills />,
      gradient: "from-pink-500 to-orange-500",
      borderColor: "border-pink-500/50",
      shadowColor: "shadow-pink-500/10",
      hoverTextColor: "group-hover:text-pink-400",
      bgGradient: "from-pink-500/20 to-orange-500/20",
      iconColor: "text-pink-400",
      dividerColor: "via-pink-500",
      colSpan: "md:col-span-2 lg:col-span-1",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl w-11/12 relative overflow-hidden">
      <div className="relative z-10">
        {/* Enhanced Header Section */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="relative inline-flex items-center gap-2 mb-4 border-2 border-blue-500/50 rounded-full py-2 px-6 bg-blue-900/20 backdrop-blur-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
            {/* Animated gradient background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse"></div>

            {/* Content */}
            <div className="relative flex items-center gap-2">
              <IoSparkles className="w-5 h-5 text-blue-400 animate-pulse" />
              <span className="text-sm sm:text-base uppercase tracking-widest bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
                My Arsenal
              </span>
              <IoSparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold my-6 merinda-font animate-slide-up">
            Tech{" "}
            <span className="name-gradient inline-block transition-transform duration-300 cursor-default">
              Stacks
            </span>
          </h1>

          <p className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl merinda-font text-gray-300 leading-relaxed px-4 animate-slide-up">
            I work with a modern tech stack to build efficient, user-friendly
            applications. Every tool I master helps me create smarter and more
            seamless digital experiences.
          </p>
        </header>

        {/* Skills Sections - Vertical Layout */}
        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
          {skillCategories.map((skill, index) => (
            <article
              key={skill.title}
              className="relative flex flex-col rounded-2xl sm:rounded-3xl  p-6 sm:p-8 lg:p-10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Section Header */}
              <div className="relative z-10 flex gap-5 items-center">
                <div
                  className={`mb-4 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${skill.bgGradient} border ${skill.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className={skill.iconColor}>{skill.icon}</span>
                </div>

                <h2
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold merinda-font mb-4 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}
                >
                  {skill.title}
                </h2>
              </div>

              {/* Skills Content */}
              <div className="relative z-10 w-full">
                {skill.component}
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced Bottom decorative line */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="relative w-full max-w-xl h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm"></div>
            {/* Animated dots */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse animation-delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
