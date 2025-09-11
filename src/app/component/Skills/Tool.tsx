import React from "react";

const Tool = ({ tool }) => {
    return (
      <div className="flex flex-col justify-center items-center p-2 card text">
        <img
          className="w-10 rounded-2xl "
          src={tool.skillImage}
          alt={tool.skillName}
        />

        <h1 className="mt-4 font-mono">{tool.skillName}</h1>
      </div>
    );
};

export default Tool;
