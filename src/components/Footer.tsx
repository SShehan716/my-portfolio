import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/SShehan716", icon: <FiGithub /> },
    { href: "https://www.linkedin.com/in/sachin-shehan", icon: <FiLinkedin /> },
    { href: "https://medium.com/@sachinshehan20", icon: <FaMedium /> },
    { href: "mailto:sachinshehan20@gmail.com", icon: <FiMail /> }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold gradient-text mb-6">Sachin Shehan</div>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-xl text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Sachin Shehan. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              Designed and built with ❤️ using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;