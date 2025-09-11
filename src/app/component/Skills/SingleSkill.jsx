import React from "react";

const SingleSkill = ({ frontendSkill }) => {
  return (
    <div className="flex flex-col justify-center items-center  card text-white p-2 ">
      <img
        className="w-10 rounded-2xl "
        src={frontendSkill.skillImage}
        alt=""
      />

      <h1 className="mt-4 font-mono">{frontendSkill.skillName}</h1>
    </div>
  );
};

export default SingleSkill;
