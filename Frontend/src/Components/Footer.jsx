// export default function Footer() {
//   return (
//     <footer className="py-8 text-center text-sm text-slate-500">
//       © {new Date().getFullYear()} — Designed & Developed by HARSHRAJSINH GOHIL
//     </footer>
//   )
// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaCode,
  FaPalette,
  FaRocket,
  FaBriefcase,
  FaUser,
} from "react-icons/fa";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const footerSections = [
    {
      title: "Navigation",
      icon: <FaRocket />,
      links: [
        { name: "Home", href: "#home" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      icon: <FaBriefcase />,
      links: [
        { name: "Web Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Mobile Apps", href: "#" },
        { name: "Consulting", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/harshrajsinh-dev",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/harshrajsinh-gohil-17a799397/",
      name: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/harshrajsinh_alampar/",
      name: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:harshrajsinhgohil8@gmail.com",
      name: "Email",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -80, 0], opacity: [0, 0.6, 0] }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-[80%] max-w-7xl mx-auto px-6 py-14">
        {/* GRID FIXED HERE */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-x-10 gap-y-10">
          
          {/* ABOUT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-lg">
                <FaUser />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                HARSHRAJSINH GOHIL
              </h3>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Passionate developer crafting digital experiences with clean code
              and creative design. Turning ideas into reality through technology.
            </p>

            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActiveIcon(i)}
                  onMouseLeave={() => setActiveIcon(null)}
                  className="p-2 bg-white/10 rounded-lg backdrop-blur-md"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {activeIcon === i ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      {social.icon}
                    </motion.div>
                  ) : (
                    social.icon
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* NAV + SERVICES */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4 lg:pl-6"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 bg-white/10 rounded-lg">{section.icon}</div>
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>

              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href={link.href}
                      className="flex items-center text-gray-300 hover:text-white group"
                      whileHover={{ x: 6 }}
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-sky-300 to-indigo-600 group-hover:w-4 transition-all"></span>
                      <span className="ml-2">{link.name}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 flex items-center gap-1">
            © {new Date().getFullYear()} — Designed & Developed with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="text-sky-400"
            >
              <FaHeart />
            </motion.span>
            by HARSHRAJSINH GOHIL
          </p>

        </div>
      </div>

      {/* BACK TO TOP */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -4, scale: 1.1 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
