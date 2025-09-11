"use client";
import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const OtherSkills = () => {
  const [otherTools, setOtherTools] = useState([]);

  useEffect(() => {
    fetch("/otherTools.json")
      .then((res) => res.json())
      .then((data) => setOtherTools(data))
      .catch((err) => setOtherTools([]));
  }, []);
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-4 p-4 ">
        {otherTools.map((tool) => (
          <Tool key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default OtherSkills;
