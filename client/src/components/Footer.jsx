import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Rutuja-Sontakke', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rutujas04/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:rutujasontakke50@gmail.com', label: 'Email' },
  ];

  return (
    <>
      <footer className="bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] border-t border-[#D4AF37]/20 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-[#B76E79]/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand Section */}
            <div>
              <motion.h3
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">
                  Rutuja
                </span>
                <span className="text-[#2C2C2C]">.</span>
              </motion.h3>
              <p className="text-[#2C2C2C]/70 leading-relaxed mb-4">
                Full Stack Developer specializing in building exceptional digital experiences with modern technologies.
              </p>
              <p className="text-[#2C2C2C]/60 text-sm">
                📍 Pune, Maharashtra, India
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-[#2C2C2C] mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      className="text-[#2C2C2C]/70 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-[#2C2C2C] mb-4">Connect With Me</h4>
              <div className="flex gap-4 mb-6">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#B76E79]/20 text-[#2C2C2C] hover:from-[#D4AF37] hover:to-[#B76E79] hover:text-white transition-all duration-300 shadow-md"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-[#2C2C2C]/60">
                Available for freelance work and collaborations
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#D4AF37]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#2C2C2C]/70">
              <p className="flex items-center gap-2">
                © {new Date().getFullYear()} Rutuja Sontakke. All rights reserved.
              </p>
              <p className="flex items-center gap-2">
                Made with <FaHeart className="text-[#B76E79] animate-pulse" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B76E79] text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 100 }}
        aria-label="Back to top"
      >
        <FaArrowUp size={20} />
      </motion.button>
    </>
  );
};

export default Footer;
