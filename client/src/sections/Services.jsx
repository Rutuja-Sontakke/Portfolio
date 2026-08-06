import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaShieldAlt, FaDatabase, FaRocket, FaBuilding, FaBolt } from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FaCode,
      title: 'Full Stack Web Development',
      description: 'End-to-end web application development using MERN Stack and PHP with modern best practices and scalable architecture.',
      color: 'from-[#D4AF37] to-[#CD7F32]',
      delay: 0,
    },
    {
      icon: FaRocket,
      title: 'MERN Stack Applications',
      description: 'Building high-performance applications with MongoDB, Express.js, React.js, and Node.js for seamless user experiences.',
      color: 'from-[#B76E79] to-[#D4AF37]',
      delay: 0.1,
    },
    {
      icon: FaServer,
      title: 'REST API Development',
      description: 'Designing and implementing robust RESTful APIs with comprehensive documentation, authentication, and optimization.',
      color: 'from-[#CD7F32] to-[#B76E79]',
      delay: 0.2,
    },
    {
      icon: FaCode,
      title: 'PHP/CodeIgniter Development',
      description: 'Creating secure, scalable PHP applications using CodeIgniter framework with MVC architecture patterns.',
      color: 'from-[#D4AF37] to-[#B76E79]',
      delay: 0.3,
    },
    {
      icon: FaShieldAlt,
      title: 'Authentication & Security',
      description: 'Implementing secure authentication systems using JWT, OAuth, sessions with industry-standard security practices.',
      color: 'from-[#B76E79] to-[#CD7F32]',
      delay: 0.4,
    },
    {
      icon: FaDatabase,
      title: 'Database Design & Optimization',
      description: 'Efficient database architecture design and query optimization for MongoDB and MySQL to boost performance.',
      color: 'from-[#CD7F32] to-[#D4AF37]',
      delay: 0.5,
    },
    {
      icon: FaBuilding,
      title: 'Government Portal Development',
      description: 'Building compliant, secure citizen-service portals with role-based access and government-standard security.',
      color: 'from-[#D4AF37] to-[#CD7F32]',
      delay: 0.6,
    },
    {
      icon: FaBolt,
      title: 'Performance Optimization',
      description: 'Enhancing application speed and efficiency through caching, code splitting, and database query optimization.',
      color: 'from-[#B76E79] to-[#D4AF37]',
      delay: 0.7,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-[#FAF9F6] to-[#FFF8DC] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-[#D4AF37]/10 to-[#B76E79]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity }}
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
            What I <span className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">Offer</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              inView={inView}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-xl text-[#2C2C2C]/80 mb-6">
            Ready to start your project?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk About Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, inView }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: service.delay }}
    >
      <motion.div
        className="h-full bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] rounded-2xl p-8 shadow-xl border border-[#D4AF37]/20 hover:shadow-2xl transition-all duration-300"
        whileHover={{ y: -10, scale: 1.02 }}
      >
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <service.icon size={32} />
        </motion.div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[#2C2C2C]/80 leading-relaxed">
          {service.description}
        </p>

        {/* Hover Effect Line */}
        <motion.div
          className={`h-1 bg-gradient-to-r ${service.color} rounded-full mt-6`}
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Glow Effect on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-300 -z-10`} />
    </motion.div>
  );
};

export default Services;
