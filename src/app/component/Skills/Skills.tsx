import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import OtherSkills from "./OtherSkills";


const Skills = () => {
  return (
    <div className="mx-auto max-w-7xl w-11/12 ">
      <div className="text-center">
        <h1 className="text-3xl  primary md:text-5xl  font-extrabold  mb-2 my-5 merinda-font ">
          Tech <span className="name-gradient">Stacks</span>
        </h1>
        <p className="w-11/12 md:w-8/12 mx-auto text-center  mt-5 text-2xl merinda-font">
          I work with a modern tech stack to build efficient, user-friendly
          applications. Every tool I master helps me create smarter and more
          seamless digital experiences.
        </p>
      </div>

      <div className="my-10 grid grid-cols-1  lg:grid-cols-3  mx-auto">
        {/* frontend skills */}
        <div className="flex flex-col text-center  p-4">
          <h1 className=" text-2xl font-extrabold  merinda-font primary">
            Frontend
          </h1>
          <hr className="w-5/12 mx-auto   my-5" />
          <div className="flex-1">
            <Frontend />
          </div>
        </div>

        {/* backend skills */}
        <div className="flex flex-col text-center  p-4">
          <h1 className=" text-2xl font-extrabold  merinda-font primary">
            Backend
          </h1>
          <hr className="w-5/12 mx-auto   my-5" />
          <div className="flex-1">
            <Backend />
          </div>
        </div>

        {/* other tools */}
        <div className="flex flex-col text-center  p-4">
          <h1 className=" text-2xl font-extrabold  merinda-font primary ">
            Tools
          </h1>
          <hr className="w-5/12 mx-auto   my-5" />
          <div className="flex-1">
            <OtherSkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
