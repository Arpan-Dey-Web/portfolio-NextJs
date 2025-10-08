import { motion } from "framer-motion";

const TechStackSection = ({ technology }) => {
    console.log(technology);
//   Helper function to flatten technology array
  const getTechnologyArray = (tech) => {
    if (!tech) return [];
    if (Array.isArray(tech)) return tech;
    return Object.values(tech).flat().filter(Boolean);
  };

  const techArray = getTechnologyArray(technology);

  return (
    <section className="mb-16 sm:mb-20 lg:mb-24">
      <div className="text-center mb-10 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-500/30"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <span className="text-sm font-bold text-blue-300 tracking-wider">
            TECH ARSENAL
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Technology{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Stack
          </span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-32 h-1.5 mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-60 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Display technology by category if object, otherwise show array */}
      {typeof technology === "object" && !Array.isArray(technology) ? (
        <div className="space-y-10">
          {Object.entries(technology).map(
            ([category, techs], catIdx) =>
              techs &&
              techs.length > 0 && (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIdx * 0.15 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-150 transition-transform duration-300"></div>
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent capitalize tracking-wide">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-700 via-gray-800 to-transparent"></div>
                  </div>

                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    {techs?.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: catIdx * 0.15 + idx * 0.05 }}
                        whileHover={{ scale: 1.08, y: -4 }}
                        className="group/tech relative px-5 py-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700/60 hover:border-blue-500/60 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 cursor-default shadow-lg shadow-black/20 hover:shadow-blue-500/30 overflow-hidden"
                      >
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-700"></div>

                        {/* Tech icon placeholder */}
                        <span className="relative z-10 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></span>
                          {tech}
                        </span>
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {techArray.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ scale: 1.1, y: -6 }}
              className="group/tech relative px-6 py-3.5 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700/60 hover:border-blue-500/60 text-white text-sm sm:text-base font-bold rounded-xl transition-all duration-300 cursor-default shadow-xl shadow-black/30 hover:shadow-blue-500/40 overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-1000"></div>

              {/* Tech name with icon */}
              <span className="relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover/tech:opacity-100 group-hover/tech:animate-pulse transition-opacity duration-300"></span>
                {tech}
              </span>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500/0 group-hover/tech:border-blue-500/50 rounded-tr-xl transition-all duration-300"></div>
            </motion.span>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default TechStackSection;
