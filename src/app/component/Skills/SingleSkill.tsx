import Image from "next/image";
import React from "react";

const SingleSkill = ({ frontendSkill }) => {
  return (
    <div className="flex flex-col justify-center items-center  card text-white p-2 ">
      <Image
        className="w-10 rounded-2xl "
        src={frontendSkill.skillImage}
        alt=""
        height={400}
        width={400}
      />

      <h1 className="mt-4 font-mono">{frontendSkill.skillName}</h1>
    </div>
  );
};

export default SingleSkill;
