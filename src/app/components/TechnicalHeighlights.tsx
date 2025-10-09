import React from 'react'
import { motion } from "framer-motion";
export default function TechnicalHeighlights({ technicalHighlights }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 sm:p-10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

        <h3 className="relative text-3xl sm:text-4xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="text-4xl">⚡</span>
          Technical Highlights
        </h3>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5">
          {technicalHighlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/60 border border-gray-700/30 hover:border-yellow-500/50 hover:bg-gray-800/80 transition-all duration-300 group"
            >
              <span className="text-yellow-400 text-2xl flex-shrink-0">▸</span>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                {highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
