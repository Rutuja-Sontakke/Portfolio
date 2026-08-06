import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = menuItems.map(item => item.href);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('home')}
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">
              Rutuja
            </span>
            <span className="text-[#2C2C2C]">.</span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 relative ${
                  activeSection === item.href
                    ? 'text-[#D4AF37]'
                    : 'text-[#2C2C2C] hover:text-[#D4AF37]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] rounded-full"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B76E79] text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-[#FAF9F6]/98 backdrop-blur-lg border-t border-[#D4AF37]/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-6 space-y-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.href
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white'
                      : 'text-[#2C2C2C] hover:bg-[#F5F5DC]'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
