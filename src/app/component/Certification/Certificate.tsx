import Image from "next/image";
import React from "react";
import certificateImage from "../../../../public/certificate.png";
import blackBeltImage from "../../../../public/BlackBelt.png";
import { IoSparkles, IoTrophy, IoRibbon } from "react-icons/io5";
import { HiAcademicCap, HiShieldCheck } from "react-icons/hi";

export default function Certificate() {
  const certificates = [
    {
      id: 1,
      title: "Full Stack MERN Certificate",
      image: certificateImage,
      badge: "TECHNICAL EXCELLENCE",
      badgeGradient: "from-yellow-500/20 to-orange-500/20",
      badgeBorder: "border-yellow-500/40",
      badgeText: "text-yellow-300",
      ringColor: "group-hover:ring-yellow-500/50",
      shadowColor: "hover:shadow-yellow-500/10",
      icon: <HiAcademicCap className="w-5 h-5" />,
      iconColor: "text-yellow-500",
      footerText: "Verified Certification",
      footerIcon: (
        <svg
          className="w-5 h-5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      gradientOverlay: "from-yellow-500/10 to-orange-500/10",
    },
    {
      id: 2,
      title: "Best Student Certificate",
      image: blackBeltImage,
      badge: "ACHIEVEMENT",
      badgeGradient: "from-green-500/20 to-emerald-500/20",
      badgeBorder: "border-green-500/40",
      badgeText: "text-green-300",
      ringColor: "group-hover:ring-green-500/50",
      shadowColor: "hover:shadow-green-500/10",
      icon: <IoTrophy className="w-5 h-5" />,
      iconColor: "text-green-500",
      footerText: "Recognition of Excellence",
      footerIcon: (
        <svg
          className="w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradientOverlay: "from-green-500/10 to-emerald-500/10",
    },
  ];

  return (
    <section
      id="certificate"
      className="mx-auto max-w-7xl w-11/12 merinda-font relative overflow-hidden"
    >
      <div className="relative z-10">
        {/* Enhanced Header Section */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="relative inline-flex items-center gap-2 mb-6 border-2 border-yellow-500/50 rounded-full py-2.5 px-6 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-yellow-900/20 backdrop-blur-sm shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300 hover:scale-105 group">
            {/* Animated gradient background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 animate-pulse"></div>

            {/* Content */}
            <div className="relative flex items-center gap-2">
              <IoRibbon className="w-5 h-5 text-yellow-400 animate-pulse group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm sm:text-base uppercase tracking-widest bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent font-bold">
                Achievements & Honors
              </span>
              <IoSparkles className="w-5 h-5 text-yellow-400 animate-pulse group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 animate-slide-up">
            <span className="name-gradient inline-block transition-transform duration-300 cursor-default pb-2 leading-tight">
              Certificate
            </span>{" "}
            <span className="text-white">&</span>{" "}
            <span className="name-gradient inline-block transition-transform duration-300 cursor-default pb-2 leading-tight">
              Recognition
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 mt-4 sm:mt-6 max-w-3xl mx-auto px-4 animate-slide-up">
            Milestones in my learning journey and professional achievements
          </p>
        </header>

        {/* Enhanced Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {certificates.map((cert, index) => (
            <article
              key={cert.id}
              className={`group relative rounded-2xl sm:rounded-3xl flex flex-col items-center bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-gray-700/50 hover:border-gray-600/80 transition-all duration-500 overflow-hidden ${cert.shadowColor} hover:-translate-y-3 p-8 sm:p-10 lg:p-12 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-gray-700/50 group-hover:border-gray-600/80 rounded-tl-2xl transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-gray-700/50 group-hover:border-gray-600/80 rounded-br-2xl transition-all duration-500"></div>

              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.gradientOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Enhanced Badge */}
              <div
                className={`relative z-10 inline-flex items-center gap-2 mb-8 sm:mb-10 px-6 sm:px-8 py-2.5 bg-gradient-to-r ${cert.badgeGradient} rounded-full border ${cert.badgeBorder} hover:scale-105 transition-transform duration-300`}
              >
                <div className={cert.iconColor}>{cert.icon}</div>
                <p
                  className={`text-xs sm:text-sm font-bold ${cert.badgeText} tracking-widest`}
                >
                  {cert.badge}
                </p>
                <div
                  className={`w-2 h-2 ${cert.badgeText} rounded-full animate-pulse`}
                ></div>
              </div>

              <h2 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-200 group-hover:text-white transition-colors duration-300">
                {cert.title}
              </h2>

              {/* Enhanced Image Container */}
              <div
                className={`relative z-10 w-full h-72 sm:h-80 lg:h-96 relative rounded-xl sm:rounded-2xl overflow-hidden ring-2 ring-gray-700/50 ${cert.ringColor} transition-all duration-500 shadow-2xl group-hover:shadow-3xl`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                {/* Image */}
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-3 sm:p-4 group-hover:scale-110 transition-transform duration-700"
                />

                {/* View indicator on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <p className="text-white text-sm font-semibold flex items-center gap-2">
                      <HiShieldCheck className="w-5 h-5" />
                      View Certificate
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Footer Info */}
              <div className="relative z-10 mt-8 sm:mt-10 flex items-center gap-3 text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
                {cert.footerIcon}
                <span className="font-medium">{cert.footerText}</span>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-12 sm:mt-16 flex justify-center animate-fade-in">
          <div className="group relative px-8 py-4 bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-full border border-gray-700/50 backdrop-blur-md hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative flex items-center gap-3">
              <IoTrophy className="w-5 h-5 text-yellow-500" />
              <p className="text-sm sm:text-base text-gray-300 font-semibold">
                <span className="font-bold text-transparent bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-lg sm:text-xl">
                  {certificates.length}
                </span>{" "}
                Certifications Earned
              </p>
              <IoSparkles className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        {/* Enhanced Bottom decorative line */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="relative w-full max-w-xl h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/50 to-transparent blur-sm"></div>
            {/* Animated dots */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse animation-delay-200"></div>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse animation-delay-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
