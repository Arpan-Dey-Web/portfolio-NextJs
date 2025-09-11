"use client";
import React from "react";
import SingleProject from "../SingleProject";
import Projects from "../Projects";
import { useParams } from "next/navigation";
export default function Project() {
  const params = useParams();
  const { projectsid } = params;

  return (
    <div className="min-h-screen max-w-7xl mx-auto w-11/12">
      <SingleProject projectsid={projectsid}></SingleProject>
    </div>
  );
}
