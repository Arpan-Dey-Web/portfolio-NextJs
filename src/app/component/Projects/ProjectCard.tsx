import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  const {
    id,
    projecttittle,
    technology,
    liveLink,
    githubClient,
    githubServer,
    features,
    license,
    images,
    ProjectLogo,

    ProjectBannerImages,
  } = project;

  return (
    <div className=" rounded-2xl  max-w-md mx-auto shadow-2xl card ">
      <div className="mb-2 rounded-t-lg overflow-hidden ">
        <Image
          src={ProjectBannerImages}
          alt={projecttittle}
          height={400}
          width={400}
          className="w-full h-50 object-cover "
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-16 rounded-lg flex items-center justify-center">
            <Image
              className=" rounded-full"
              src={ProjectLogo}
              height={400}
              width={400}
              alt="Project logo"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">
              {projecttittle}
            </h3>
            <p className="text-gray-400 text-sm">Full-Stack MERN Application</p>
          </div>
        </div>
        {/* Technology stack cards */}
        <div className="mb-6">
          <p className="text-white text-sm mb-3 text-center ">Tech Stack</p>
          <hr className="border  border-white mb-3" />
          <div className="flex flex-wrap justify-center gap-2">
            {technology.map((tech, index) => (
              <div
                key={index}
                className={` text-white text-xs font-medium px-3 py-1 rounded-full bg-black`}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="">
          <Link href={`component/Projects/${id}`}>
            <button className="btn rounded-full  text-white bg-gray-600 glow glow-hover  w-full  ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
