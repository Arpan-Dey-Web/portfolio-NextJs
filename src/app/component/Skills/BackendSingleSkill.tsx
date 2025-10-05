import Image from "next/image";
import React from "react";

const BackendSingleSkill = ({ backendSkill }) => {
  return (
    <div
      className="group flex flex-col justify-center items-center card text-white p-3 sm:p-4 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-h-[110px] sm:min-h-[120px]"
      title={backendSkill.skillName}
    >
      {/* Image Container with hover effect */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Image
          className="rounded-xl object-contain"
          src={backendSkill.skillImage}
          alt={`${backendSkill.skillName} logo`}
          fill
          sizes="(max-width: 640px) 40px, 48px"
        />
      </div>

      {/* Skill Name with overflow handling */}
      <h3 className="text-xs sm:text-sm font-medium text-gray-300 group-hover:text-white text-center leading-tight line-clamp-2 w-full px-1 transition-colors duration-300">
        {backendSkill.skillName}
      </h3>
    </div>
  );
};

export default BackendSingleSkill;
