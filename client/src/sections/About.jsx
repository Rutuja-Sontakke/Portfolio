import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaUsers, FaRocket, FaTrophy } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: FaRocket, label: 'Months Experience', value: 6, suffix: '+' },
    { icon: FaCode, label: 'Projects Completed', value: 10, suffix: '+' },
    { icon: FaTrophy, label: 'REST APIs Built', value: 100, suffix: '+' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-[#FAF9F6] to-[#FFF8DC] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/10 to-[#B76E79]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About <span className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">Me</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image/Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37]/20 to-[#B76E79]/20 rounded-2xl blur-xl" />
              
              <div className="relative bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] rounded-2xl p-8 shadow-2xl border border-[#D4AF37]/30">
                {/* Code-like decoration */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#D4AF37]" />
                    <div className="w-3 h-3 rounded-full bg-[#CD7F32]" />
                    <div className="w-3 h-3 rounded-full bg-[#B76E79]" />
                  </div>
                  
                  <div className="space-y-3 font-mono text-sm text-[#2C2C2C]/70">
                    <div className="flex items-center gap-2">
                      <span className="text-[#D4AF37]">const</span>
                      <span className="text-[#B76E79]">developer</span>
                      <span>=</span>
                      <span className="text-[#CD7F32]">{'{'}</span>
                    </div>
                    <div className="pl-6 space-y-2">
                      <div><span className="text-[#D4AF37]">name:</span> <span className="text-[#B76E79]">"Rutuja Sontakke"</span>,</div>
                      <div><span className="text-[#D4AF37]">role:</span> <span className="text-[#B76E79]">"Full Stack Developer"</span>,</div>
                      <div><span className="text-[#D4AF37]">experience:</span> <span className="text-[#CD7F32]">"6+ months"</span>,</div>
                      <div><span className="text-[#D4AF37]">stack:</span> <span className="text-[#B76E79]">["MERN", "PHP"]</span>,</div>
                      <div><span className="text-[#D4AF37]">passion:</span> <span className="text-[#B76E79]">"Building scalable apps"</span>,</div>
                      <div><span className="text-[#D4AF37]">location:</span> <span className="text-[#B76E79]">"Pune, India"</span>,</div>
                    </div>
                    <div className="text-[#CD7F32]">{'}'};</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              className="text-lg text-[#2C2C2C]/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              I am a <span className="font-semibold text-[#D4AF37]">Full Stack Developer</span> specializing in{' '}
              <span className="font-semibold text-[#B76E79]">MERN Stack</span> (MongoDB, Express.js, React.js, Node.js) and{' '}
              <span className="font-semibold text-[#CD7F32]">PHP/CodeIgniter</span>. I build secure, scalable web applications with a focus on performance optimization and clean code architecture.
            </motion.p>

            <motion.p
              className="text-lg text-[#2C2C2C]/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              With over a 6 months of professional experience, I've worked and maintaned{' '}
              <span className="font-semibold text-[#D4AF37]">4 Government of Maharashtra citizen-service portals</span> serving{' '}
              <span className="font-semibold text-[#B76E79]">10,000+ users</span>, built{' '}
              <span className="font-semibold text-[#CD7F32]">100+ REST APIs</span>, and delivered scalable solutions that prioritize security and performance.
            </motion.p>

            <motion.p
              className="text-lg text-[#2C2C2C]/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0 }}
            >
              I'm passionate about creating exceptional user experiences and turning complex problems into elegant, efficient solutions. My expertise spans the full development lifecycle—from database design to responsive frontends.
            </motion.p>

            {/* Highlight Stats */}
            <motion.div
              className="flex flex-wrap gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              <div className="px-6 py-3 bg-gradient-to-r from-[#D4AF37]/10 to-[#CD7F32]/10 rounded-full border border-[#D4AF37]/30">
                <span className="text-[#2C2C2C] font-semibold">4 Government Portals</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-[#B76E79]/10 to-[#D4AF37]/10 rounded-full border border-[#B76E79]/30">
                <span className="text-[#2C2C2C] font-semibold">10K+ Users Served</span>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-[#CD7F32]/10 to-[#B76E79]/10 rounded-full border border-[#CD7F32]/30">
                <span className="text-[#2C2C2C] font-semibold">30% Performance Boost</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Counter */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, label, value, suffix, delay, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] rounded-2xl p-8 text-center shadow-lg border border-[#D4AF37]/20 group-hover:shadow-2xl transition-all duration-300">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#D4AF37] to-[#B76E79] rounded-full flex items-center justify-center text-white"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={28} />
        </motion.div>

        {/* Counter */}
        <div className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">
            {count}{suffix}
          </span>
        </div>

        {/* Label */}
        <p className="text-[#2C2C2C]/70 font-medium">{label}</p>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#B76E79]/0 group-hover:from-[#D4AF37]/10 group-hover:to-[#B76E79]/10 rounded-2xl blur-xl transition-all duration-300 -z-10" />
    </motion.div>
  );
};

export default About;
