'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaMedium } from "react-icons/fa6";
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-950/20" />
      <div className="absolute top-20 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 -right-24 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="backdrop-blur-lg bg-white/10 dark:bg-gray-950/30 rounded-2xl p-8 shadow-lg border border-white/20"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m{" "}
            <span className="relative">
              <span className="gradient-text">Sachin Shehan</span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.h2 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="typing-text">Software Developer | Web Developer | Tech Enthusiast</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { href: "https://github.com/SShehan716", icon: <FiGithub /> },
              { href: "https://www.linkedin.com/in/sachin-shehan", icon: <FiLinkedin /> },
              { href: "https://medium.com/@sachinshehan20", icon: <FaMedium /> },
              { href: "mailto:sachinshehan20@gmail.com", icon: <FiMail /> }
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-2xl p-3 hover:bg-white/10 rounded-xl transition-all"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#projects">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium rounded-lg hover:shadow-[0_0_20px_rgba(0,124,240,0.3)] transition-all">
                  View My Work
                </button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#contact">
                <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 font-medium rounded-lg hover:bg-white/20 hover:border-blue-500 hover:text-blue-500 transition-all">
                  Contact Me
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;