"use client";
import Image from "next/image";
import React from "react";
import certificateImage from "../../../../public/certificate.png";

export default function Certificate() {
  return (
    <section id="certificate" className="py-16 px-4 ">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-center text-4xl my-10 primary font-bold">
          Full Stack MERN Certificate
        </h1>
        <p className="mb-12 text-white">
          Here is one of my professional achievements.
        </p>

        {/* Single Certificate */}
        <div className="overflow-hidden rounded-lg shadow-lg  mx-auto w-full ">
          <Image
            src={certificateImage}
            alt="Certificate"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
