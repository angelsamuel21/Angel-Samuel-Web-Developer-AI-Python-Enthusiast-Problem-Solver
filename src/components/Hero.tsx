import React from "react";
import { useState, useEffect, useMemo } from "react";
import userPhoto from "../assets/ebook-pica.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-scroll";
import { Github, Linkedin, Twitter } from "lucide-react";

const Hero: React.FC = () => {
  // Typing animation effect
  const roles = useMemo(() => ["Full Stack Developer", "AI Enthusiast", "Tech Creator", "Data Scientist"], []);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === roles.length) return;
    const timeout = setTimeout(() => {
      setText(
        roles[index].substring(0, subIndex + (deleting ? -1 : 1))
      );

      if (!deleting && subIndex === roles[index].length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }

      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  // Animation Variants
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Floating animation
  const floatingAnimation = useMemo(
    () => ({
      y: [0, -8, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    }),
    []
  );

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-[100px]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto max-w-6xl relative z-10 text-center flex flex-col items-center justify-center"
      >
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-12 lg:mb-16 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={floatingAnimation}
              className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1.5 sm:p-2"
            >
              <img
                src={userPhoto}
                alt="Angel Samuel"
                className="w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl"
                draggable={false}
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full border-3 sm:border-4 border-gray-900"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 px-2"
        >
          Angel{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Samuel
          </span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mb-6 sm:mb-8 h-8 sm:h-10 flex items-center justify-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-purple-400 ml-1"
            >
              |
            </motion.span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4 sm:px-6 leading-relaxed sm:leading-loose mb-8 sm:mb-12"
        >
          Crafting digital experiences with code, creativity, and cutting-edge technology.
          Passionate about building solutions that make a difference.
        </motion.p>

        {/* Buttons */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12 w-full max-w-md sm:max-w-lg mx-auto px-4"
        >
          <Link to="contact" smooth={true} duration={800} className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-glow-md font-semibold text-base sm:text-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
            </motion.button>
          </Link>

          <Link to="projects" smooth={true} duration={800} className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto border-2 border-gray-600 text-gray-300 hover:border-primary-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg backdrop-blur-sm transition-all duration-300"
            >
              View My Work
            </motion.button>
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {[
            { name: "GitHub", icon: <Github size={20} className="sm:w-5 sm:h-5" />, url: "https://github.com/angelsamuel21" },

            { name: "LinkedIn", icon: <Linkedin size={20} className="sm:w-5 sm:h-5" />, url: "https://www.linkedin.com/in/angelsamuel21/" },

            { name: "Twitter", icon: <Twitter size={20} className="sm:w-5 sm:h-5" />, url: "https://x.com/AngelSamuel55" },

          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-gray-700/50 transition-all duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-4 sm:mt-8"
        >
          <Link to="about" smooth={true} duration={800}>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-xs sm:text-sm mb-2">Explore More</span>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2"
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;