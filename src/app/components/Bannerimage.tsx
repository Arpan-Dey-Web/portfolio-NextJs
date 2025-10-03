import Image from "next/image";
import React from "react";
import bannerImage from "../../../public/bannerImage.png";

export default function ProfileWithTechStack() {
  return (
    <div>
      <div className="relative w-fit mx-auto">
        {/* Decorative dots */}
        <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
        <div
          className="absolute -bottom-12 -left-12 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Profile Image with Gradient Border */}
        <div className="relative z-10">
          <div
            className="p-1 rounded-full"
            style={{ background: "linear-gradient(45deg, #4d79ff, #ff2d75)" }}
          >
            <div className="rounded-full overflow-hidden bg-slate-900">
              <Image
                src={bannerImage}
                width={400}
                height={400}
                alt="Profile"
                className="rounded-full w-96 h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
