import React from 'react'
import { motion } from "framer-motion";
export default function ProjectChallenges({ challenges }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 sm:p-10 overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>

        <h3 className="relative text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">🎯</span>
          Challenges & Solutions
        </h3>

        <div className="relative space-y-6">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-800/60 rounded-2xl border border-gray-700/30 p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5"
            >
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-red-400 font-bold text-sm uppercase tracking-wider">
                    Problem
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed pl-4 border-l-2 border-red-400/30">
                  {challenge.problem}
                </p>
              </div>

              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
                    Solution
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed pl-4 border-l-2 border-green-400/30">
                  {challenge.solution}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">
                    Impact
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed pl-4 border-l-2 border-blue-400/30">
                  {challenge.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
