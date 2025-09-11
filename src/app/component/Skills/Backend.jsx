"use client";
import React, { useEffect, useState } from "react";
import BackendSingleSkill from "./BackendSingleSkill";

const Backend = () => {
  const [backendSkills, setBackendSkills] = useState([]);
  useEffect(() => {
    fetch("/backendSkill.json")
      .then((res) => res.json())
      .then((data) => setBackendSkills(data))
      .catch((err) => setBackendSkills([]));
  }, []);
  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-4 p-4 ">
        {backendSkills.map((backendSkill) => (
          <BackendSingleSkill
            key={backendSkill.id}
            backendSkill={backendSkill}
          ></BackendSingleSkill>
        ))}
      </div>
    </div>
  );
};

export default Backend;
