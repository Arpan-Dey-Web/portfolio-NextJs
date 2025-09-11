"use client";
import React, { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { redirect } from "next/navigation";
const SingleProject = ({ projectsid }) => {
  const { id } = useParams();

  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then(async (data) => {
        const found = await data.find(
          (item) => item.id === parseInt(projectsid)
        );
        setProject(found);
      })
      .catch((err) => setProject([]));
  }, [id]);

  if (project?.length == 0) {
    return <div>Nothing to show</div>;
  }

  const {
    projecttittle,
    technology,
    liveLink,
    githubClient,
    githubServer,
    features,
    license,
    images,
    ProjectLogo,
    ProjectBestPageImage,
    ProjectDescription,
    ProjectBannerImages,
    challengeFaces,
    futurePlans,
  } = project;

  return (
    <div className="my-5 ">
      <button
        onClick={() => redirect(`/`)}
        className="px-8 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
      >
        ⬅ Back To Home Page
      </button>

      <div className="my-20 w-11/12 mx-auto">
        <h1 className="text-white text-center text-4xl font-bold mb-5">
          Project: {projecttittle}
        </h1>

        <p className="text-white md:w-2xl mx-auto  text-center mt-5">
          {ProjectDescription}
        </p>
        <div className=" grid grid-cols-3 md:grid-cols-6  gap-4  text-center  mx-auto my-5 text-wrap ">
          {technology?.map((tech, index) => (
            <span
              className="text-white  font-medium px-2 py-2 rounded-full bg-black card"
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
        <div>
          {ProjectBestPageImage?.length !== 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
              <div className="w-full h-68 overflow-hidden mb-5 rounded-2xl ">
                <motion.img
                  src={ProjectBestPageImage[0] ? ProjectBestPageImage[0] : ""}
                  alt="Project"
                  className="w-full"
                  initial={{ y: 0 }}
                  whileHover={{ y: -1100 }} // adjust based on image height
                  transition={{ duration: 4, ease: "easeInOut" }} // smoothness
                />
              </div>

              <div className="w-full h-68 overflow-hidden mb-5 rounded-2xl">
                <motion.img
                  src={ProjectBestPageImage[1] ? ProjectBestPageImage[1] : ""}
                  alt="Project"
                  className="w-full "
                  initial={{ y: 0 }}
                  whileHover={{ y: -1000 }} // adjust based on image height
                  transition={{ duration: 4, ease: "easeInOut" }} // smoothness
                />
              </div>

              <div className="w-full h-68 mb-10 rounded-2xl  ">
                <img
                  src={ProjectBestPageImage[2] ? ProjectBestPageImage[2] : ""}
                  alt="Project"
                  className="w-full rounded-2xl h-68"
                />
              </div>

              <div className="w-full h-68  mb-10 rounded-2xl ">
                <img
                  src={ProjectBestPageImage[3] ? ProjectBestPageImage[3] : ""}
                  alt="Project"
                  className="w-full rounded-2xl h-68 "
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4 my-5">
          <Link href={liveLink} target="_blank">
            <button className="btn  btn-secondary  bg-[#DE2A8A] glow glow-hover text-white flex gap-1 items-center justify-center border rounded-full px-6 py-2 ">
              <FiExternalLink />
              Live Demo
            </button>
          </Link>

          <Link href={githubClient} target="_blank">
            <button className="btn   bg-gray-600 glow glow-hover  text-white flex gap-1 items-center justify-center border rounded-full px-6 py-2 ">
              <FaGithub />
              Client Code
            </button>
          </Link>
        </div>

        {/*  Features list  */}
        <div>
          <h3 className="font-semibold mb-1  text-white ">🚀 Features:</h3>
          <hr className="border border-white my-2 w-2xs" />
          <ul className=" list-inside  text-sm space-y-1 list-none text-white">
            {features?.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="my-5">
          <h2 className="text-white font-semibold"> 🎯 Challange I face </h2>
          <hr className="border border-white my-2 w-2xs" />
          <ul className="text-white">
            {challengeFaces?.map((challenges, index) => (
              <li key={index}> ✅ {challenges} </li>
            ))}
          </ul>
        </div>

        <div className="text-white">
          <h2 className="font-semibold">🛠 Future Plans</h2>
          <hr className="border border-white my-2 w-2xs" />
          <ul>
            {futurePlans?.map((plans, index) => (
              <li key={index}>🚩 {plans}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
