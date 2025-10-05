import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import OtherSkills from "./OtherSkills";

const Skills = () => {
  return (
    <section className="mx-auto max-w-7xl w-11/12  sm:px-6  relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-5 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-pink-500 rounded-full opacity-5 blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl primary font-extrabold mb-4 merinda-font">
            Tech{" "}
            <span className="name-gradient inline-block hover:scale-105 transition-transform duration-300">
              Stacks
            </span>
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="w-11/12 md:w-9/12 lg:w-8/12 mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl merinda-font text-gray-400 leading-relaxed px-4">
            I work with a modern tech stack to build efficient, user-friendly
            applications. Every tool I master helps me create smarter and more
            seamless digital experiences.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Frontend Skills Card */}
          <article className="group flex flex-col text-center rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2  py-8 px-4 ">
            {/* Icon/Badge */}
            <div className="mb-4 mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold merinda-font primary mb-6 group-hover:text-blue-400 transition-colors duration-300">
              Frontend
            </h2>

            <div className="w-7/12 sm:w-6/12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"></div>

            <div className="flex-1">
              <Frontend />
            </div>
          </article>

          {/* Backend Skills Card */}
          <article className="group flex flex-col text-center rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2    py-8 px-4">
            {/* Icon/Badge */}
            <div className="mb-4 mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold merinda-font primary mb-6 group-hover:text-purple-400 transition-colors duration-300">
              Backend
            </h2>

            <div className="w-7/12 sm:w-6/12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"></div>

            <div className="flex-1">
              <Backend />
            </div>
          </article>

          {/* Tools Skills Card */}
          <article className="group flex flex-col text-center rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2  py-8 px-4 md:col-span-2 lg:col-span-1">
            {/* Icon/Badge */}
            <div className="mb-4 mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-pink-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold merinda-font primary mb-6 group-hover:text-pink-400 transition-colors duration-300">
              Tools
            </h2>

            <div className="w-7/12 sm:w-6/12 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-6"></div>

            <div className="flex-1">
              <OtherSkills />
            </div>
          </article>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
