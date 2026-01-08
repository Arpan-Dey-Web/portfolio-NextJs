import { motion } from "framer-motion";
export default function ProjectTechStack({ tech, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="px-6 py-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-110 cursor-default hover:shadow-lg hover:shadow-blue-500/20"
    >
      {tech}
    </motion.span>
  );
}
