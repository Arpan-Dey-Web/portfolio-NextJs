
import React from "react";
import { motion } from "framer-motion";

// ✅ Define the type for the metrics prop
type MetricsProps = {
  metrics: Record<string, string | number>;
};

export default function Metrics({ metrics }: MetricsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
        >
          Performance{" "}
          <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Metrics
          </span>
        </motion.h2>
        <div className="relative w-40 h-1.5 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-400 to-blue-500 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(metrics).map(([key, value], idx) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-cyan-500/0 group-hover:from-green-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>

            <p className="relative text-5xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
              {value}
            </p>

            <p className="relative text-gray-400 text-sm capitalize font-medium">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
