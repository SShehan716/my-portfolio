'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiTool } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiCode className="text-4xl mb-4 text-blue-500" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Material UI']
    },
    {
      title: 'Backend',
      icon: <FiServer className="text-4xl mb-4 text-teal-500" />,
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs', 'GraphQL']
    },
    {
      title: 'Database',
      icon: <FiDatabase className="text-4xl mb-4 text-purple-500" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase']
    },
    {
      title: 'Tools & Others',
      icon: <FiTool className="text-4xl mb-4 text-orange-500" />,
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Netlify', 'CI/CD', 'Jest']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
            >
              {category.icon}
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 dark:text-gray-400">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;