"use client";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { BiZoomIn, BiZoomOut } from "react-icons/bi";
import { MdOutlineFullscreen } from "react-icons/md";
import Image from "next/image";

export const ImageModal = ({ isOpen, onClose, imageUrl, projectName }) => {
  const [zoom, setZoom] = useState(1);
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* Fixed Header with Controls */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Project Name */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <h3 className="text-white font-semibold text-lg truncate max-w-md">
              {projectName || "Project Screenshot"}
            </h3>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 0.5}
              className="p-2 rounded-lg bg-gray-800/80 text-white hover:bg-gray-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              title="Zoom Out"
            >
              <BiZoomOut className="w-5 h-5" />
            </button>

            <button
              onClick={handleResetZoom}
              className="px-3 py-2 rounded-lg bg-gray-800/80 text-white hover:bg-gray-700 transition-all font-semibold text-sm min-w-[60px]"
              title="Reset Zoom"
            >
              {Math.round(zoom * 100)}%
            </button>

            <button
              onClick={handleZoomIn}
              disabled={zoom >= 3}
              className="p-2 rounded-lg bg-gray-800/80 text-white hover:bg-gray-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              title="Zoom In"
            >
              <BiZoomIn className="w-5 h-5" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-red-500/80 text-white hover:bg-red-600 transition-all ml-2"
              title="Close (Esc)"
            >
              <IoClose className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Image Container */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden pt-20 pb-8 px-4">
        <div className="flex justify-center min-h-full">
          <div
            className="relative transition-transform duration-300 ease-out"
            style={{ transform: `scale(${zoom})` }}
          >
            <Image
              height={1400}
              width={1400}
              src={imageUrl}
              alt={projectName}
              className="max-w-full h-auto rounded-lg shadow-2xl"
              style={{ maxWidth: zoom > 1 ? "none" : "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Fixed Helper Text at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-md py-3">
        <p className="text-center text-gray-400 text-sm">
          Press{" "}
          <kbd className="px-2 py-1 bg-gray-700 rounded text-white text-xs">
            ESC
          </kbd>{" "}
          or click outside to close
        </p>
      </div>
    </div>
  );
};

// Demo Component showing usage
const ProjectCardDemo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const demoProjects = [
    {
      id: 1,
      name: "Pet Adoption Platform",
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=2000&fit=crop",
    },
    {
      id: 2,
      name: "E-commerce Dashboard",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=2000&fit=crop",
    },
    {
      id: 3,
      name: "Travel Booking App",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=2000&fit=crop",
    },
  ];

  const handleImageClick = (project) => {
    setSelectedImage(project);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Click any screenshot to view
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => handleImageClick(project)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <MdOutlineFullscreen className="w-12 h-12 text-white" />
                    <span className="text-white font-semibold">
                      View Full Screenshot
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Click to view full page
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageUrl={selectedImage?.image}
        projectName={selectedImage?.name}
      />
    </div>
  );
};
