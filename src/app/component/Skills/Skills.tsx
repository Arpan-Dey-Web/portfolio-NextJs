import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import OtherSkills from "./OtherSkills";


const Skills = () => {
  return (
    <div className="mt-10 ">
      <div className="text-center">
        <h1 className="text-3xl  primary md:text-4xl  font-extrabold  mb-2 my-5">
          Stack & Skills{" "}
        </h1>
        <p className="w-11/12 md:w-6/12 mx-auto text">
          I leverage a modern tech stack to build clean, scalable, and
          user-focused applications. Driven by curiosity, I continuously explore
          new technologies to solve complex problems with clarity and precision.
          Every tool I master adds depth to how I think, build, and create
          meaningful digital experiences.
        </p>
      </div>

      <div className="my-10 grid grid-cols-1  lg:grid-cols-3  mx-auto">
        {/* frontend skills */}
        <div className="flex flex-col text-center  p-4">
          <h1 className="mb-5 text-xl font-semibold accent">Frontend</h1>
          <div className="flex-1">
            <Frontend />
          </div>
        </div>

        {/* backend skills */}
        <div className="flex flex-col text-center  p-4">
          <h1 className="mb-5 text-xl font-semibold accent">Backend</h1>
          <div className="flex-1">
            <Backend />
          </div>
        </div>

        {/* other tools */}
        <div className="flex flex-col text-center  p-4">
          <h1 className="mb-5 text-xl font-semibold accent">Tools</h1>
          <div className="flex-1">
            <OtherSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
