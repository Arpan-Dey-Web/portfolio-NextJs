import React from 'react'
import { motion } from "framer-motion";
export default function Achievement({ achievements }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 sm:p-10 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

        <h3 className="relative text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">🏆</span>
          Achievements
        </h3>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/40 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 hover:scale-105 group"
            >
              <span className="text-3xl">✨</span>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
