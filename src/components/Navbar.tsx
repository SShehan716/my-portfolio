'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineViewGrid } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const currentSection = sectionElements.findIndex(element => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection !== -1) {
        setActiveSection(sections[currentSection]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'More', href: '#more' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'nav-glass' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            SS
          </Link>

          {/* Centered Navigation */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <nav className="flex items-center space-x-8 bg-white/10 backdrop-blur-md rounded-full px-6 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link text-white/80 hover:text-white ${
                    activeSection === link.href.substring(1) ? 'active-link' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="#contact">
                <button className="ml-2 px-5 py-2 rounded-full bg-gray-700/50 text-white hover:bg-gray-700/70 transition-all">
                  Book a Call
                </button>
              </Link>
            </nav>
          </div>

          {/* Right Icon */}
          <div className="hidden md:flex items-center">
            <button className="text-white p-2 rounded-md">
              <HiOutlineViewGrid size={24} />
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden nav-glass"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-white/80 hover:text-white ${
                    activeSection === link.href.substring(1) ? 'font-semibold' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <button className="px-5 py-2 rounded-full connect-btn text-white">
                  Book a Call
                </button>
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;