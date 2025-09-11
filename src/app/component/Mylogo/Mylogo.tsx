import React from "react";
import { FaAtlassian } from "react-icons/fa";

const Mylogo = () => {
  return (
    <div className="flex items-center group gap-1">
      <div
        className="text-[#4d79ff] transition-all duration-500 group-hover:text-[#ff2d75]"
        style={{ textShadow: "0 0 8px rgba(77, 121, 255, 0.7)" }}
      >
        <FaAtlassian size={28} />
      </div>
      <div className="">
        <h1
          className="text-xl font-mono font-bold"
          style={{
            background: "linear-gradient(to right, #4d79ff, #ff2d75)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 8px rgba(77, 121, 255, 0.3)",
          }}
        >
          rpan
        </h1>
      </div>
    </div>
  );
};

export default Mylogo;
