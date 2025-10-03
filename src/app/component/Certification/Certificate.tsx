"use client";
import Image from "next/image";
import React from "react";
import certificateImage from "../../../../public/certificate.png";
import blackBeltImage from "../../../../public/BlackBelt.png";

export default function Certificate() {
  return (
    <section
      id="certificate"
      className=" px-4 py-16  mx-auto max-w-7xl w-11/12"
    >
      <div>
        <h1 className="text-center my-10 primary font-extrabold merinda-font  text-5xl">
          Certificate & Recognition
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Single Certificate */}
          <div className="rounded-lg shadow-lg flex flex-col items-center h-full">
            <h1 className="text-2xl font-bold text-center mb-10">
              Full stack MERN Certificate
            </h1>
            <div className="w-full h-[500px] relative">
              <Image
                src={certificateImage}
                alt="Certificate"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Blackbelt Certificate */}
          <div className="rounded-lg shadow-lg flex flex-col items-center h-full">
            <h1 className="text-2xl font-bold text-center mb-10">
              Best Student Certificate
            </h1>
            <div className="w-full flex justify-center h-[500px]">
              <Image
                src={blackBeltImage}
                alt="BlackBelt Certificate"
                style={{ objectFit: "contain" }}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
