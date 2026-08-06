import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaCode } from 'react-icons/fa';
import { useState } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Twetube',
      tagline: 'Production-grade Video Platform Backend',
      description: 'Backend architecture inspired by YouTube with complete video management, user authentication, and social features',
      features: [
        '30+ REST API endpoints with comprehensive documentation',
        'JWT + bcrypt authentication with refresh token mechanism',
        'Cloudinary/Multer pipeline for 100MB+ file uploads',
        'MongoDB aggregation for 60% faster query performance',
        'Complete subscription, like/dislike, and comment system',
      ],
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Multer'],
      github: 'https://github.com/Rutuja-Sontakke/Twetube',
      category: 'MERN Stack',
      gradient: 'from-[#D4AF37] to-[#CD7F32]',
    },
    {
      title: 'Restaurant Website',
      tagline: 'Full Stack Food Ordering Platform',
      description: 'End-to-end restaurant platform with modern UI/UX, real-time cart functionality, and comprehensive order management',
      features: [
        '25+ REST API endpoints for menu, cart, and order operations',
        'Fully responsive React frontend with 15+ reusable components',
        'Real-time shopping cart with persistent state management',
        'Advanced search and filter with order tracking system',
        '100% mobile-responsive design',
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/Rutuja-Sontakke/Resturant-website',
      category: 'MERN Stack',
      gradient: 'from-[#B76E79] to-[#D4AF37]',
    },
    {
      title: 'WonderLust',
      tagline: 'Airbnb Clone - Property Rental Platform',
      description: 'Full-stack rental platform with advanced booking features, interactive maps, and role-based access control',
      features: [
        '20+ RESTful APIs with MVC architecture pattern',
        'Role-based access control for Hosts and Guests',
        'Complete CRUD operations for property listings',
        'Interactive Mapbox integration for location services',
        'Reviews & ratings system with host dashboard',
      ],
      tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap', 'Mapbox'],
      github: 'https://github.com/Rutuja-Sontakke/Airbnb_Website',
      category: 'Full Stack',
      gradient: 'from-[#CD7F32] to-[#B76E79]',
    },
    {
      title: 'ToolifyAI',
      tagline: 'AI-Powered SaaS Platform',
      description: 'Multi-tool AI platform featuring content generation, image processing, and document analysis with modern authentication',
      features: [
        '5 AI tools: Article Writer, Blog Generator, Resume Reviewer',
        'Image Generator and Background Remover capabilities',
        'Clerk authentication with protected routing',
        'Reusable component architecture for scalability',
        'Optimized performance with modern UI/UX',
      ],
      tech: ['React', 'Vite', 'Tailwind CSS', 'Clerk Auth', 'AI APIs'],
      github: 'https://github.com/Rutuja-Sontakke/ToolifyAi',
      category: 'AI',
      gradient: 'from-[#D4AF37] to-[#B76E79]',
    },
  ];

  const filters = ['All', 'MERN Stack', 'Full Stack', 'PHP', 'AI'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-[#FFF8DC] to-[#FAF9F6] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-[#B76E79]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured <span className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">Projects</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Building Solutions That Matter
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white shadow-lg'
                  : 'bg-[#F5F5DC] text-[#2C2C2C] hover:bg-[#FAEBD7]'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, inView }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[600px] perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      layout
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] rounded-2xl shadow-xl border border-[#D4AF37]/20 overflow-hidden group cursor-pointer"
          style={{ backfaceVisibility: 'hidden' }}
          onClick={() => setIsFlipped(true)}
          whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
        >
          {/* Project Image Placeholder */}
          <div className="relative h-64 bg-gradient-to-br from-[#D4AF37]/20 to-[#B76E79]/20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <FaCode className="text-8xl text-[#D4AF37]/30" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold">Click to see details →</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
              {project.title}
            </h3>
            <p className="text-[#2C2C2C]/70 font-medium mb-4">{project.tagline}</p>
            
            {/* Description */}
            <p className="text-[#2C2C2C]/80 leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-[#D4AF37]/10 to-[#B76E79]/10 border border-[#D4AF37]/30 rounded-full text-xs font-semibold text-[#2C2C2C]"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-3 py-1 bg-[#2C2C2C]/10 rounded-full text-xs font-semibold text-[#2C2C2C]">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] rounded-2xl shadow-xl border border-[#D4AF37]/20 p-6 overflow-y-auto"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Header */}
          <div className="mb-6">
            <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
              {project.title}
            </h3>
            <p className="text-[#2C2C2C]/70 font-medium">{project.tagline}</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-[#2C2C2C] mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#2C2C2C]/80">
                  <span className="text-[#D4AF37] mt-1">●</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Tech Stack */}
          <div className="mb-6">
            <h4 className="font-semibold text-[#2C2C2C] mb-3">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-[#D4AF37]/10 to-[#B76E79]/10 border border-[#D4AF37]/30 rounded-full text-xs font-semibold text-[#2C2C2C]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold flex items-center justify-center gap-2`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              <span>GitHub</span>
            </motion.a>
            <motion.button
              onClick={() => setIsFlipped(false)}
              className="flex-1 px-4 py-3 border-2 border-[#D4AF37] text-[#2C2C2C] rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
