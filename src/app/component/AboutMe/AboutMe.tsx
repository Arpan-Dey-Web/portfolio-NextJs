import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-8 rounded-2xl shadow-2xl primary mx-auto max-w-7xl w-11/12 relative overflow-hidden"
      aria-label="About Me Section"
    >
      <div className="relative z-10">
        <header className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 sm:mb-4 merinda-font">
            My{" "}
            <span className="name-gradient inline-block hover:scale-105 transition-transform duration-300">
              Journey
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 merinda-font mt-4 sm:mt-5 max-w-3xl mx-auto px-4">
            From curious tinkerer to crafting digital stories with code.
          </p>
        </header>

        <article className="max-w-4xl mx-auto">
          {/* Profile card container */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl">
            {/* Intro badge */}
            <div className="inline-block mb-6 sm:mb-8 px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30">
              <p className="text-xs sm:text-sm font-semibold text-purple-300 tracking-wide">
                WHO I AM
              </p>
            </div>
            <p className="leading-relaxed text-base sm:text-lg lg:text-xl tracking-wide text-justify sm:text-left text-gray-300 space-y-4 merinda-font">
              <span className="block mb-4 sm:mb-6">
                I’m{" "}
                <span className="font-semibold name-gradient ">
                  Arpan Dey
                </span>
                , a passionate and detail-oriented{" "}
                <span className="font-semibold text-white">
                  MERN Stack Developer
                </span>{" "}
                who thrives on building clean, scalable, and user-centered web
                applications. What began as simple HTML and CSS experiments has
                evolved into a full-fledged journey of crafting seamless digital
                experiences with{" "}
                <span className="font-semibold text-white">
                  ReactJS, Node.js, and modern frontend technologies
                </span>
                .
              </span>

              <span className="block mb-4 sm:mb-6">
                I enjoy turning complex ideas into intuitive, high-performance
                interfaces that blend functionality with visual elegance.
                Whether it’s integrating REST APIs, optimizing performance, or
                refining UI interactions, I focus on writing maintainable code
                that delivers value to both users and teams.
              </span>

              <span className="block">
                Outside of development, I find inspiration through exploring new
                cuisines, playing cricket, and photography—activities that help
                me stay creative and balanced. Driven by curiosity and
                continuous learning, I aim to create technology that not only
                works efficiently but also connects with people in meaningful
                ways.
              </span>
            </p>

            {/* Skills/Interests tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-10 justify-center">
              {[
                "MERN Stack",
                "ReactJS",
                "UI/UX",
                "Photography",
                "Cricket",
                "Football",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-xs sm:text-sm text-gray-300 border border-gray-600/50 hover:border-gray-500 transition-all duration-200 cursor-default hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-8 sm:mt-12 flex justify-center">
            <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
