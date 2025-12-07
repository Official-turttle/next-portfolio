"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integrate with your email API or service
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000); // auto-hide toast
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#6366F1",
      transition: { duration: 0.2 },
    },
    blur: { scale: 1, borderColor: "#D1D5DB", transition: { duration: 0.2 } },
  };

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      {/* Container */}
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col gap-4 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence>
            {submitted && (
              <motion.div
                className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg mb-4 text-center font-medium shadow-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                🎉 Thank you! Your message has been sent.
              </motion.div>
            )}
          </AnimatePresence>

          {["name", "email", "message"].map((field) => (
            <motion.label
              key={field}
              className="flex flex-col text-gray-700 dark:text-gray-300 font-medium relative"
            >
              <span className="mb-1 capitalize">{field}</span>
              {field !== "message" ? (
                <motion.input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  required
                  className="mt-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
                  whileFocus="focus"
                  initial="blur"
                  variants={inputVariants}
                />
              ) : (
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="mt-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition resize-none"
                  whileFocus="focus"
                  initial="blur"
                  variants={inputVariants}
                />
              )}
            </motion.label>
          ))}

          <motion.button
            type="submit"
            className="mt-4 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 font-semibold rounded-xl py-3 hover:bg-indigo-700 dark:hover:bg-indigo-500 transition shadow-md"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info & Socials */}
        <motion.div
          className="flex-1 flex flex-col gap-6 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Feel free to reach out for collaborations, projects, or just to say
            hi!
          </p>

          <div className="flex flex-col gap-4 mt-4 text-lg">
            <p>
              📧 Email:{" "}
              <a
                href={`mailto:${["haraan", "ramamadram"].join(".")}@gmail.com`}
                className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-700 dark:hover:text-indigo-300 transition"
              >
                {["haraan", "ramamadram"].join(".")}@gmail.com
              </a>
            </p>

            <p>
              📱 Phone:{" "}
              <a
                href={`tel:+60${["11", "310", "4635"].join("")}`}
                className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-700 dark:hover:text-indigo-300 transition"
              >
                +60 11-310-4635
              </a>
            </p>

            <p>
              💬 WhatsApp:{" "}
              <a
                href={`https://wa.me/+60${["11", "310", "4635"].join("")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-700 dark:hover:text-indigo-300 transition"
              >
                Chat with me
              </a>
            </p>

            <p>
              💬 WhatsApp:{" "}
              <a
                href="https://wa.me/601131074635"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-700 dark:hover:text-indigo-300 transition"
              >
                Chat with me
              </a>
            </p>
          </div>

          <div className="flex gap-6 mt-6 text-2xl">
            {[
              {
                icon: FaGithub,
                url: "https://github.com/Official-turttle",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                url: "https://www.linkedin.com/in/haraan-ramamadram-2808101b0/",
                label: "LinkedIn",
              },
              {
                icon: FaTwitter,
                url: "https://x.com/RHaraan",
                label: "Twitter",
              },
              {
                icon: FaWhatsapp,
                url: "https://wa.me/601131074635",
                label: "WhatsApp",
              },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <s.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
