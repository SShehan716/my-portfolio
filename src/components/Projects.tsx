'use client';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Create a ProjectItem component to encapsulate per-project logic.
interface ProjectItemProps {
  project: {
    title: string;
    description: string;
    color: string;
    image: string;
    link: string;
    status: string;
    details: {
      description: string;
      features: string[];
      technologies: { name: string; type: string }[];
    };
  };
  index: number;
  visibleProject: number;
  setVisibleProject: (index: number) => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index, visibleProject, setVisibleProject }) => {
  const { ref } = useInView({
    threshold: 0.6,
    triggerOnce: false,
    onChange: (inView) => {
      if (inView) {
        setVisibleProject(index);
      }
    },
  });

  // Only show this project if it is the active one.
  const isActive = visibleProject === index;

  return (
    <motion.div
      ref={ref}
      // Animate: active projects fade in; others fade out (and slide a bit)
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 30 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      {/* Left side - Project Card */}
      <motion.div
        className={`
          ${project.color} 
          rounded-3xl 
          p-8 
          relative 
          overflow-hidden 
          hover-lift
          backdrop-blur-lg
          bg-opacity-20
          border border-opacity-30 border-white/20
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
          hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.57)]
          transition-all
          duration-300
        `}
      >
        {/* Add a gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

        <div className="relative z-10 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white/90">{project.description}</h3>
<div className="flex space-x-4">
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center
      px-4 py-2
      rounded-lg
      backdrop-blur-md
      bg-white/10
      border border-white/20
      text-white
      hover:bg-white/20
      hover:scale-105
      transition-all duration-300
      shadow-[0_4px_12px_0_rgba(31,38,135,0.37)]
      hover:shadow-[0_8px_16px_0_rgba(31,38,135,0.37)]
    "
  >
    <FiGithub className="mr-2" />
    <span className="font-medium">View Code</span>
  </a>
</div>
        </div>

        <div className="mt-8 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg pointer-events-none" />
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt={project.title}
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>

      {/* Right side - Project Details */}
      <motion.div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-1 h-6 bg-blue-500"></div>
          <h3 className="text-2xl font-bold flex items-center">
            {project.title}
            {project.status && (
              <span className="ml-4 text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                {project.status}
              </span>
            )}
          </h3>
        </div>

        <p className="text-gray-400">{project.details.description}</p>

        <div className="space-y-3">
          {project.details.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-pink-500 mr-2 mt-1">+</span>
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <div className="flex flex-wrap gap-2">
            {project.details.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 technology-badge"
              >
                {tech.type === 'framework' && (
                  <span className="mr-2 w-4 h-4 rounded-full bg-blue-500 inline-block"></span>
                )}
                {tech.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.details.technologies.slice(3, 7).map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 technology-badge"
              >
                {tech.name}
              </span>
            ))}
          </div>

          {project.details.technologies.length > 7 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.details.technologies.slice(7).map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-800 technology-badge"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'GradeGenious',
      description: 'Personalized Adaptive LMS using LSTM for performance prediction.',
      color: 'bg-indigo-700',
      image: 'https://images.unsplash.com/photo-1573164574397-1bd6a4a39d31?auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/SShehan716',
      status: 'Ongoing',
      details: {
        description:
          'An adaptive Learning Management System that uses an LSTM-based model to predict student performance and recommend tailored learning content. The frontend is built with React, the backend with Node.js, and Python is used for model training, all hosted on Azure.',
        features: [
          'Utilizes LSTM-based prediction for student performance.',
          'Recommends personalized learning content.',
          'Built with React, Node.js, and Python; deployed on Azure.'
        ],
        technologies: [
          { name: 'React.js', type: 'framework' },
          { name: 'Node.js', type: 'backend' },
          { name: 'Python', type: 'language' },
          { name: 'Azure Services', type: 'cloud' },
          { name: 'LSTM', type: 'model' }
        ]
      }
    },
    {
      title: 'WeatherPro',
      description: 'iOS Weather App Clone with dynamic backgrounds.',
      color: 'bg-sky-500',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/SShehan716',
      status: '',
      details: {
        description:
          'A modern iOS application replicating the native Weather app UI. It provides live weather updates using the OpenWeather API, displays dynamic background videos via AVKit, and follows the MVVM architecture for clean code separation.',
        features: [
          'Provides real-time weather updates.',
          'Dynamic background videos using AVKit.',
          'Follows MVVM architecture for clean code separation.'
        ],
        technologies: [
          { name: 'Swift', type: 'language' },
          { name: 'MVVM', type: 'architecture' },
          { name: 'AVKit', type: 'framework' },
          { name: 'OpenWeather API', type: 'api' },
          { name: 'CoreLocation', type: 'framework' },
          { name: 'MapKit', type: 'framework' }
        ]
      }
    },
    {
      title: 'Call Center Dashboard',
      description: 'Streamlined dashboard for call center management.',
      color: 'bg-red-600',
      image: 'https://images.unsplash.com/photo-1591696331119-3ed058b0b8fd?auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/SShehan716/call-center',
      status: '',
      details: {
        description:
          'A streamlined call center management tool that enables daily CSV uploads, random customer assignment to call agents, and automated email notifications.',
        features: [
          'Automates CSV uploads and customer assignment.',
          'Integrates Redux for state management.',
          'Utilizes EmailJS for automated email notifications.'
        ],
        technologies: [
          { name: 'React.js', type: 'framework' },
          { name: 'Firebase', type: 'database' },
          { name: 'Redux', type: 'state' },
          { name: 'EmailJS', type: 'notification' },
          { name: 'JavaScript', type: 'language' }
        ]
      }
    },
    {
      title: 'Xternship',
      description: 'Full-stack system for intern, mentor, and evaluator management.',
      color: 'bg-yellow-600',
      image: 'https://images.unsplash.com/photo-1581091870627-0aef45097ef8?auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/SShehan716/IM-System',
      status: '',
      details: {
        description:
          'A comprehensive web solution that enables companies to manage interns, assign mentors and evaluators, and track evaluations and feedback seamlessly.',
        features: [
          'Registers interns and assigns mentors.',
          'Tracks evaluations and feedback.',
          'Features a robust REST API for backend communication.'
        ],
        technologies: [
          { name: 'React.js', type: 'framework' },
          { name: 'Node.js', type: 'backend' },
          { name: 'Express', type: 'backend' },
          { name: 'SQL', type: 'database' },
          { name: 'JavaScript', type: 'language' }
        ]
      }
    },
    {
      title: 'Gym Dashboard',
      description: 'Dashboard for managing gym memberships and monthly fees.',
      color: 'bg-teal-600',
      image: 'https://images.unsplash.com/photo-1571019613914-85f342c1c124?auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/SShehan716/gym-dashboard',
      status: '',
      details: {
        description:
          'A React-based dashboard for gym owners to manage registered members, track monthly payments, and view real-time fee status, deployed on Vercel.',
        features: [
          'Manages member registrations and monthly fees.',
          'Provides real-time payment tracking.',
          'Deployed on Vercel for seamless updates.'
        ],
        technologies: [
          { name: 'React.js', type: 'framework' },
          { name: 'Firebase', type: 'database' },
          { name: 'Vercel', type: 'deployment' },
          { name: 'JavaScript', type: 'language' }
        ]
      }
    }
  ];

  // For a one-time effect on the section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (sectionInView) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.body.style.overflow = 'auto';
      }, 1000);
    }
  }, [sectionInView]);

  // Track which project is currently visible
  const [visibleProject, setVisibleProject] = useState(0);

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-wider text-gray-400 mb-2">FEATURED CASE STUDIES</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Curated <span className="italic-text text-purple-400">work</span>
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              index={index}
              visibleProject={visibleProject}
              setVisibleProject={setVisibleProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;