import React from "react";

const BackendSingleSkill = ({ backendSkill }) => {
  return (
    <div className="flex flex-col justify-center items-center p-2 card text  overflow-hidden ">
      <img
        className="w-10 rounded-2xl "
        src={backendSkill.skillImage}
        alt={backendSkill.skillName}
      />

      <h1 className="mt-4 font-mono">{backendSkill.skillName}</h1>
    </div>
  );
};

export default BackendSingleSkill;
