import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import profileImg from "../assets/images/Rutuja-Pic.png"
import resumeFile from '../assets/resume/RutujaS_CV1.pdf'


const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // 3D Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  const springConfig = { damping: 20, stiffness: 150 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('hero-container')?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFFEF9] via-[#FFF8DC] to-[#FAEBD7] pt-24 lg:pt-0"
      style={{ perspective: '1500px' }}
    >
      {/* Enhanced 3D Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs with 3D Effect */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#D4AF37]/20 to-[#CD7F32]/20 rounded-full blur-3xl"
          style={{
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#B76E79]/20 to-[#D4AF37]/20 rounded-full blur-3xl"
          style={{
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 3D Geometric Grid */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
          style={{
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
          }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* Floating 3D Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#D4AF37] to-[#B76E79] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Rings */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-[#D4AF37]/30 rounded-full"
          style={{
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 border-2 border-[#B76E79]/20 rounded-full"
          style={{
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <div id="hero-container" className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Enhanced 3D Photo */}
          <motion.div
            className="flex justify-center lg:justify-start order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
              {/* 3D Photo Container */}
              <motion.div
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
                style={{
                  rotateX: rotateXSpring,
                  rotateY: rotateYSpring,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* 3D Layered Glow Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B76E79] rounded-full blur-2xl opacity-40"
                  style={{ transform: 'translateZ(-50px)' }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tl from-[#CD7F32] to-[#D4AF37] rounded-full blur-xl opacity-30"
                  style={{ transform: 'translateZ(-30px)' }}
                  animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Main Photo Frame with 3D Depth */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
                  style={{
                    transform: 'translateZ(0px)',
                    boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.4)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7]">
                    <img
                      src={profileImg}
                      alt="Rutuja Sontakke"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  
                  {/* Animated Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent"
                    animate={{
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>

                {/* 3D Rotating Rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  style={{
                    transform: 'translateZ(20px)',
                    borderImage: 'linear-gradient(45deg, #D4AF37, #CD7F32, #B76E79, #D4AF37) 1',
                  }}
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity },
                  }}
                />

                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/50"
                  style={{ transform: 'translateZ(40px)' }}
                  animate={{ 
                    rotate: -360,
                    scale: [1.05, 1, 1.05],
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity },
                  }}
                />
              </motion.div>

              {/* 3D Floating Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#D4AF37] rounded-full opacity-60"
                style={{
                  transform: 'translateZ(60px)',
                  transformStyle: 'preserve-3d',
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  rotateX: [0, 360],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#B76E79] to-[#D4AF37] rounded-lg opacity-60"
                style={{
                  transform: 'translateZ(80px)',
                  transformStyle: 'preserve-3d',
                }}
                animate={{ 
                  rotate: [0, 360],
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* Additional 3D Cubes */}
              <motion.div
                className="absolute top-1/4 -left-12 w-12 h-12 bg-gradient-to-br from-[#D4AF37]/40 to-[#CD7F32]/40"
                style={{
                  transform: 'translateZ(40px) rotateX(45deg) rotateY(45deg)',
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateX: [45, 225, 45],
                  rotateY: [45, 225, 45],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <motion.div
                className="absolute bottom-1/4 -right-12 w-8 h-8 rounded-full bg-gradient-to-br from-[#B76E79]/50 to-[#D4AF37]/50"
                style={{
                  transform: 'translateZ(100px)',
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right - Enhanced 3D Text Content */}
          <motion.div
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
          <div className="pt-24 sm:pt-28 md:pt-32 max-w-2xl flex flex-col items-start text-left">

            {/* Name Section */}
            <motion.div
                className="overflow-visible mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <motion.h1
                className="font-bold leading-[1.1] tracking-tight flex flex-col"
                style={{
                    fontFamily: "'Playfair Display', serif",
                    x: useTransform(mouseX, [-300, 300], [-8, 8]),
                    y: useTransform(mouseY, [-300, 300], [-8, 8]),
                }}
                >
                {/* Intro Phrase - Now matching the large name sizing and gradient look */}
                <motion.span
                    className="block text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[4.2rem] bg-gradient-to-r from-[#D4AF37] via-[#CD7F32] to-[#B76E79] bg-clip-text text-transparent whitespace-nowrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    Hello, I'm
                </motion.span>

                {/* Full Name */}
                <motion.span
                    className="block text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[4.2rem] bg-gradient-to-r from-[#D4AF37] via-[#CD7F32] to-[#B76E79] bg-clip-text text-transparent mt-1 whitespace-nowrap"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    Rutuja Sontakke
                </motion.span>
                </motion.h1>
            </motion.div>
            
            </div>


            {/* 3D Role Animation */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{
                transform: useTransform(mouseX, [-200, 200], ['translateZ(0px)', 'translateZ(20px)']),
              }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'MERN Stack Expert',
                  2000,
                  'PHP Developer',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#2C2C2C]"
                style={{
                  textShadow: '0 5px 15px rgba(44, 44, 44, 0.1)',
                }}
                repeat={Infinity}
              />
              <motion.div 
                className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] mt-4 mx-auto lg:mx-0 rounded-full"
                animate={{
                  scaleX: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Tagline with 3D effect */}
            <motion.p
              className="text-lg md:text-xl text-[#2C2C2C]/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{
                transform: useTransform(mouseY, [-100, 100], ['translateZ(0px)', 'translateZ(10px)']),
              }}
            >
              Building Scalable Web Applications That Make Impact
            </motion.p>

            {/* Enhanced 3D CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#CD7F32] text-white rounded-full font-semibold shadow-lg flex items-center gap-2 group relative overflow-hidden"
                style={{
                  transform: 'translateZ(0px)',
                  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 15px 40px rgba(212, 175, 55, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(212, 175, 55, 0.3)',
                    '0 10px 40px rgba(212, 175, 55, 0.5)',
                    '0 10px 30px rgba(212, 175, 55, 0.3)',
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
              >
                <span className="relative z-10">View My Work</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#CD7F32] to-[#B76E79]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-[#D4AF37] text-[#2C2C2C] rounded-full font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center gap-2 group"
                style={{
                  transform: 'translateZ(0px)',
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
                <FaEnvelope className="group-hover:rotate-12 transition-transform" />
              </motion.button>

              <motion.a
  href={resumeFile}
  download="Rutuja_Sontakke_Resume.pdf"
  className="px-8 py-4 bg-[#2C2C2C] text-white rounded-full font-semibold hover:bg-[#1A1A1A] transition-all duration-300 flex items-center gap-2 group"
  style={{
    transform: 'translateZ(0px)',
  }}
  whileHover={{ 
    scale: 1.05, 
    y: -5,
    boxShadow: '0 10px 30px rgba(44, 44, 44, 0.3)',
  }}
  whileTap={{ scale: 0.95 }}
>
  <FaDownload className="group-hover:translate-y-1 transition-transform" />
  <span>Resume</span>
</motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 3D Floating Wave Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
        style={{
          background: 'linear-gradient(to top, #D4AF37, transparent)',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scaleY: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;