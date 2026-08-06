import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      role: 'PHP Full Stack Developer',
      company: 'Softmate Systems LLP',
      location: 'Pune, India',
      duration: 'December 2025 - May 2026',
      type: 'Full-time',
      achievements: [
        'Developed 4 Government of Maharashtra citizen-service portals serving 10,000+ daily users',
        'Built 20+ CRUD modules with role-based access control and secure authentication',
        'Reduced page response time by 30% through database optimization and caching',
        'Implemented government-compliant security standards and session management',
        'Collaborated with cross-functional teams to deliver scalable PHP/CodeIgniter solutions',
      ],
      color: 'from-[#D4AF37] to-[#CD7F32]',
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Cognifyz Technologies',
      location: 'Remote',
      duration: 'October 2025 - November 2025',
      type: 'Internship',
      achievements: [
        'Built MVC-based user registration system with RESTful API architecture',
        'Implemented secure authentication using JWT and bcrypt password hashing',
        'Developed backend services using Node.js, Express, and MongoDB',
        'Performed API testing and debugging using Postman',
      ],
      color: 'from-[#B76E79] to-[#D4AF37]',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-[#FAF9F6] to-[#FFF8DC] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-[#D4AF37]/10 to-[#B76E79]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
            Professional <span className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">Journey</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Building impactful solutions and growing as a developer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#CD7F32] to-[#B76E79]">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#D4AF37] to-[#B76E79]"
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
                } md:w-[calc(50%+2rem)]`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.3 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-8 md:left-auto md:right-[calc(50%+2rem-16px)] md:top-8 top-0 w-4 h-4 bg-gradient-to-br from-[#D4AF37] to-[#B76E79] rounded-full border-4 border-[#FAF9F6] shadow-lg"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.3 }}
                  whileHover={{ scale: 1.5 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#D4AF37]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  className="ml-16 md:ml-0 bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] rounded-2xl p-8 shadow-xl border border-[#D4AF37]/20 hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    {/* Role Badge */}
                    <div className={`inline-block px-4 py-1 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-semibold mb-3`}>
                      {exp.type}
                    </div>

                    {/* Role */}
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <div className="flex items-center gap-2 text-[#2C2C2C] font-semibold text-lg mb-3">
                      <FaBriefcase className="text-[#D4AF37]" />
                      {exp.company}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-[#2C2C2C]/70">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="text-[#CD7F32]" size={14} />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#B76E79]" size={14} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.2 + index * 0.3 + i * 0.1 }}
                      >
                        <FaCheckCircle className="text-[#D4AF37] mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" size={16} />
                        <p className="text-[#2C2C2C]/80 leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Decoration */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 rounded-2xl blur transition-all duration-300 -z-10`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] rounded-2xl p-8 shadow-xl border border-[#D4AF37]/20 text-center">
            <div className="inline-block p-4 bg-gradient-to-br from-[#D4AF37] to-[#B76E79] rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">Education</h3>
            <p className="text-xl font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent mb-1">
              B.Sc. Computer Science (2022-2025)
            </p>
            <p className="text-[#2C2C2C]/70"> Mamasaheb Mohol College, Pune University (SSPU)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
