"use client";

import { skills } from "../data/skills";
import { motion } from "framer-motion";

const categoryColors: Record<string, string> = {
  Frontend: "#6366f1",
  Backend: "#f59e0b",
  Mobile: "#10b981",
  Database: "#ef4444",
};

export default function Skills() {
  return (
    <section className="relative py-16 px-4 sm:px-20 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        My Skills
      </h2>

      {skills.map((category) => (
        <div key={category.category} className="mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-2">
            {category.category}
          </h3>

          {/* Mobile horizontal scroll */}
          <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
            {category.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-shrink-0 sm:flex-shrink-1 w-64 sm:w-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  {/* Circle progress */}
                  <div className="relative w-24 h-24 mb-4">
                    <svg className="w-full h-full rotate-[-90deg]">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke="rgba(0,0,0,0.1)"
                        strokeWidth="10"
                        fill="none"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        stroke={categoryColors[category.category] || "#6366f1"}
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={282}
                        strokeDashoffset={282}
                        animate={{ strokeDashoffset: 282 - (282 * skill.level) / 100 }}
                        transition={{ duration: 1 }}
                      />
                    </svg>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="absolute top-1/2 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>

                  <p className="font-semibold text-gray-800 dark:text-white text-center mb-2">
                    {skill.name}
                  </p>

                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mt-2">
                    {skill.level}%
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-indigo-200 rounded-full opacity-10 -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-40 h-40 sm:w-60 sm:h-60 bg-amber-300 rounded-full opacity-10 -z-10 animate-pulse"></div>
    </section>
  );
}
