import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNode, FaPhp, FaDatabase, FaGitAlt, FaShieldAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiBootstrap, SiMysql, SiPostman, SiJsonwebtokens } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-[#D4AF37] to-[#CD7F32]',
      skills: [
        { name: 'React.js', icon: FaReact, level: 90, color: '#61DAFB' },
        { name: 'JavaScript', icon: SiJavascript, level: 88, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, color: '#06B6D4' },
        { name: 'Bootstrap', icon: SiBootstrap, level: 85, color: '#7952B3' },
      ],
    },
    {
      title: 'Backend Development',
      color: 'from-[#B76E79] to-[#D4AF37]',
      skills: [
        { name: 'Node.js', icon: FaNode, level: 88, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, level: 90, color: '#000000' },
        { name: 'PHP', icon: FaPhp, level: 85, color: '#777BB4' },
        { name: 'REST APIs', icon: FaDatabase, level: 92, color: '#D4AF37' },
      ],
    },
    {
      title: 'Databases',
      color: 'from-[#CD7F32] to-[#B76E79]',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 88, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
      ],
    },
    {
      title: 'Tools & Authentication',
      color: 'from-[#D4AF37] to-[#B76E79]',
      skills: [
        { name: 'Git & GitHub', icon: FaGitAlt, level: 90, color: '#F05032' },
        { name: 'JWT Auth', icon: SiJsonwebtokens, level: 88, color: '#000000' },
        { name: 'Postman', icon: SiPostman, level: 92, color: '#FF6C37' },
        { name: 'Security', icon: FaShieldAlt, level: 85, color: '#D4AF37' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-[#FFF8DC] to-[#FAF9F6] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-10 w-72 h-72 bg-gradient-to-br from-[#B76E79]/10 to-[#D4AF37]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-[#CD7F32]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
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
            Technical <span className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">Expertise</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Mastering modern technologies to build exceptional web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] rounded-2xl p-8 shadow-xl border border-[#D4AF37]/20 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-2`}>
                  {category.title}
                </h3>
                <div className={`h-1 w-20 bg-gradient-to-r ${category.color} rounded-full`} />
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-[#2C2C2C] mb-6">Also Working With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['CodeIgniter', 'Cloudinary', 'Multer', 'Bcrypt', 'Sessions', 'OAuth', 'Vercel', 'Render', 'Java', 'HTML5', 'CSS3'].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-6 py-3 bg-gradient-to-r from-[#F5F5DC] to-[#FAEBD7] rounded-full shadow-md border border-[#D4AF37]/30 hover:shadow-lg hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ y: -3 }}
              >
                <span className="text-[#2C2C2C] font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, delay, inView }) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-4 mb-2">
        {/* Icon */}
        <motion.div
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow-md group-hover:shadow-lg transition-all duration-300"
          style={{ color: skill.color }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <skill.icon size={24} />
        </motion.div>

        {/* Skill Name */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-[#2C2C2C]">{skill.name}</span>
            <span className="text-sm text-[#2C2C2C]/60 font-medium">{skill.level}%</span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-white/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
              }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.level}%` } : {}}
              transition={{ duration: 1.5, delay: delay + 0.2, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
