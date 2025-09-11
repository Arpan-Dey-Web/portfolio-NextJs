import React from "react";
import Mylogo from "../Mylogo/Mylogo";
import { FaAtlassian } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="">
      <div className="h-screen w-full flex items-center justify-center group gap-1 ">
        <div
          className="text-[#4d79ff] transition-all duration-500 group-hover:text-[#ff2d75]"
          style={{ textShadow: "0 0 8px rgba(77, 121, 255, 0.7)" }}
        >
          <FaAtlassian size={100} />
        </div>
        <div className="">
          <h1
            className="text-6xl font-mono font-bold"
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
    </div>
  );
};

export default Loading;
