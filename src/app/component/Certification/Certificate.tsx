
import Image from "next/image";
import React from "react";
import certificateImage from "../../../../public/certificate.png";
import blackBeltImage from "../../../../public/BlackBelt.png";

export default function Certificate() {
  return (
    <section
      id="certificate"
      className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mx-auto max-w-7xl w-11/12 merinda-font relative"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 w-72 h-72 bg-yellow-500 rounded-full opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full opacity-5 blur-3xl translate-y-1/2 translate-x-1/2"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl primary font-extrabold mb-4">
            <span className="name-gradient inline-block hover:scale-105 transition-transform duration-300">
              Certificate
            </span>{" "}
            &{" "}
            <span className="name-gradient inline-block hover:scale-105 transition-transform duration-300">
              Recognition
            </span>
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            Milestones in my learning journey and professional achievements
          </p>
        </header>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Full Stack MERN Certificate */}
          <article className="group rounded-2xl shadow-2xl flex flex-col items-center h-full bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 overflow-hidden hover:shadow-yellow-500/10 hover:-translate-y-2 p-6 sm:p-8">
            {/* Badge */}
            <div className="mb-6 sm:mb-8 px-4 sm:px-6 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
              <p className="text-xs sm:text-sm font-semibold text-yellow-300 tracking-wide">
                TECHNICAL EXCELLENCE
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-10 text-gray-200 group-hover:text-white transition-colors duration-300">
              Full Stack MERN Certificate
            </h2>

            {/* Image Container */}
            <div className="w-full h-64 sm:h-80 lg:h-96 relative rounded-xl overflow-hidden ring-2 ring-gray-700/50 group-hover:ring-yellow-500/50 transition-all duration-500 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image
                src={certificateImage}
                alt="Full Stack MERN Development Certificate"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Footer Info */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="group-hover:text-gray-300 transition-colors">
                Verified Certification
              </span>
            </div>
          </article>

          {/* Best Student Certificate */}
          <article className="group rounded-2xl shadow-2xl flex flex-col items-center h-full bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 overflow-hidden hover:shadow-green-500/10 hover:-translate-y-2 p-6 sm:p-8">
            {/* Badge */}
            <div className="mb-6 sm:mb-8 px-4 sm:px-6 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30">
              <p className="text-xs sm:text-sm font-semibold text-green-300 tracking-wide">
                ACHIEVEMENT
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-10 text-gray-200 group-hover:text-white transition-colors duration-300">
              Best Student Certificate
            </h2>

            {/* Image Container */}
            <div className="w-full h-64 sm:h-80 lg:h-96 relative rounded-xl overflow-hidden ring-2 ring-gray-700/50 group-hover:ring-green-500/50 transition-all duration-500 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image
                src={blackBeltImage}
                alt="Best Student Achievement Certificate"
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Footer Info */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="group-hover:text-gray-300 transition-colors">
                Recognition of Excellence
              </span>
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
}
