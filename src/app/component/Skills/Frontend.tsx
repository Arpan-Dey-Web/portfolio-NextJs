"use client";
import React, { useEffect, useState } from "react";

import SingleSkill from "./SingleSkill";
const Frontend = () => {
  const [frontendSkills, setFrontendSkills] = useState([]);
  useEffect(() => {
    fetch("/frontendSkill.json")
      .then((res) => res.json())
      .then((data) => setFrontendSkills(data))
      .catch((err) => setFrontendSkills([]));
  }, []);

  return (
    <div className="text-cente ">
      <div className="grid grid-cols-3 gap-4 p-4 ">
        {frontendSkills.map((frontendSkill) => (
          <SingleSkill key={frontendSkill.id} frontendSkill={frontendSkill} />
        ))}
      </div>
    </div>
  );
};

export default Frontend;
