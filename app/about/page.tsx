"use client";

import { useState } from "react";
import { aboutMe } from "../data/about";
import { skills as skillsData } from "../data/skills";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [selectedExp, setSelectedExp] = useState(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);


  const sortedExperience = [...aboutMe.experience].sort((a, b) => {
    const getEndYear = (period: string) => {
      const match = period.match(/\d{4}$/); // take the last 4-digit number
      return match ? parseInt(match[0], 10) : 0;
    };
    return getEndYear(b.period) - getEndYear(a.period); // newest first
  });
  const allSkills = skillsData.flatMap(category => category.skills);

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-900">
      {/* Profile Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-indigo-100 dark:border-indigo-800">
          <img
            src={aboutMe.profileImage}
            alt={aboutMe.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Title + Bio */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {aboutMe.name}
          </h1>
          <h2 className="text-xl text-indigo-600 dark:text-indigo-400 mb-4">
            {aboutMe.title}
          </h2>

          <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            {aboutMe.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </motion.div>

    {/* Skills Section */}
    <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Skills
        </h3>

        <div className="flex gap-3 overflow-x-auto sm:flex-wrap sm:overflow-visible pb-2">
          {allSkills.map((skill, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 rounded-full text-sm sm:text-base font-medium shadow-sm cursor-pointer flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-6 h-6 object-contain"
              />
              <span>{skill.name}</span>

              {/* Description popup */}
              <AnimatePresence>
                {activeSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 w-48 sm:w-56 p-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded shadow-lg text-xs z-10"
                  >
                    {skill.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>



      {/* Experience Timeline */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Experience
        </h3>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-600 rounded"></div>

          {sortedExperience.map((exp, i) => (
            <motion.div
              key={i}
              className="relative mb-12 flex flex-col items-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => setSelectedExp(exp)}
            >
              {/* Dot */}
              <span className="w-5 h-5 bg-indigo-600 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-gray-900 z-10 mb-4 flex items-center justify-center text-white">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </span>

              {/* Card */}
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full md:w-3/4 hover:shadow-xl transition-transform duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h4>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
  {selectedExp && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full md:w-2/3 max-h-[90vh] overflow-y-auto relative flex flex-col"
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-600 dark:bg-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {selectedExp.role[0]}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedExp.role}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                {selectedExp.company} | {selectedExp.period}
              </p>
            </div>
          </div>
          <button
            onClick={() => setSelectedExp(null)}
            className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition text-3xl"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4 text-gray-700 dark:text-gray-200 leading-relaxed">
          {selectedExp.details
            .trim()
            .split("\n")
            .map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                {line.replace(/^- /, "• ")}
              </motion.p>
            ))}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
