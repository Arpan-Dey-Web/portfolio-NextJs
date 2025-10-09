
import React from "react";
import { motion } from "framer-motion";

type FeaturesProps = {
  features: Record<string, string[]>; // 👈 key: string (category), value: string[] (feature list)
};

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
        >
          Key{" "}
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Features
          </span>
        </motion.h2>
        <div className="relative w-40 h-1.5 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-400 to-blue-500 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(features).map(([category, featureList], idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-blue-500/0 group-hover:from-green-500/5 group-hover:to-blue-500/5 rounded-3xl transition-all duration-500"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

            <h3 className="relative text-2xl font-bold text-white mb-6 capitalize flex items-center gap-3">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              {category.replace(/([A-Z])/g, " $1").trim()}
            </h3>

            <div className="relative space-y-4">
              {featureList.map((feature, featureIdx) => (
                <div
                  key={featureIdx}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-800/40 transition-all duration-300"
                >
                  <span className="text-2xl mt-0.5">
                    {feature.split(" ")[0]}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
