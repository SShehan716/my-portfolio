'use client';

import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiBook } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-transparent to-blue-50/30 dark:to-blue-950/20">
      <div className="w-full max-w-[2000px] px-4 md:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 rounded-2xl border border-white/20 shadow-xl">
                <div className="w-full h-full flex items-center justify-center text-7xl font-bold gradient-text">
                  SS
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-2/3 space-y-8"
          >
            <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Software Developer & Web Enthusiast</h3>
              <div className="space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hi, I&apos;m Sachin Shehan, a dedicated software developer based in Sri Lanka. I craft robust, pixel-perfect digital experiences, whether through innovative websites or sophisticated web applications.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently pursuing a BEng (Hons) in Software Engineering at the University of Westminster, I have honed my skills in modern web technologies like React, Next.js, and Node.js.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FiCode className="w-6 h-6" />,
                  title: "Development",
                  description: "Passionate about building elegant solutions"
                },
                {
                  icon: <FiCoffee className="w-6 h-6" />,
                  title: "Continuous Learning",
                  description: "Always exploring new technologies"
                },
                {
                  icon: <FiBook className="w-6 h-6" />,
                  title: "Open Source",
                  description: "Contributing to the community"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all group"
                >
                  <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;