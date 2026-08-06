import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'rutujasontakke50@gmail.com',
      link: 'mailto:rutujasontakke50@gmail.com',
      color: 'from-[#D4AF37] to-[#CD7F32]',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      link: null,
      color: 'from-[#B76E79] to-[#D4AF37]',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/rutujas04/',
      color: 'from-[#CD7F32] to-[#B76E79]',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'View my repositories',
      link: 'https://github.com/Rutuja-Sontakke',
      color: 'from-[#D4AF37] to-[#B76E79]',
    },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus('loading');

    // Simulate form submission (replace with EmailJS or actual backend)
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-[#FFF8DC] to-[#FAF9F6] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37]/10 to-[#B76E79]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
            Let's Work <span className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">Together</span>
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[#2C2C2C] font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.name
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/50'
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[#2C2C2C] font-semibold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/50'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-[#2C2C2C] font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.subject
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/50'
                  }`}
                  placeholder="Project inquiry, collaboration, etc."
                />
                {errors.subject && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[#2C2C2C] font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-6 py-4 bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    errors.message
                      ? 'border-red-400 focus:ring-red-400'
                      : 'border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-[#D4AF37]/50'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus === 'loading'}
                className={`w-full px-8 py-4 rounded-xl font-semibold text-white shadow-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  formStatus === 'loading'
                    ? 'bg-[#2C2C2C]/50 cursor-not-allowed'
                    : formStatus === 'success'
                    ? 'bg-green-500'
                    : 'bg-gradient-to-r from-[#D4AF37] to-[#B76E79] hover:shadow-2xl'
                }`}
                whileHover={formStatus === 'idle' ? { scale: 1.02, y: -2 } : {}}
                whileTap={formStatus === 'idle' ? { scale: 0.98 } : {}}
              >
                {formStatus === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : formStatus === 'success' ? (
                  <>
                    <FaCheckCircle />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-[#F5F5DC] to-[#FAEBD7] rounded-2xl p-6 shadow-lg border border-[#D4AF37]/20 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => {
                    if (info.link) {
                      window.open(info.link, '_blank');
                    } else if (info.label === 'Email') {
                      copyToClipboard(info.value);
                    }
                  }}
                  style={{ cursor: info.link || info.label === 'Email' ? 'pointer' : 'default' }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#2C2C2C] mb-1">{info.label}</h4>
                      <p className="text-[#2C2C2C]/70 text-sm">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Additional CTA */}
            <motion.div
              className="mt-8 p-8 bg-gradient-to-br from-[#D4AF37]/10 to-[#B76E79]/10 rounded-2xl border border-[#D4AF37]/30"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">
                Open for Opportunities
              </h3>
              <p className="text-[#2C2C2C]/70 leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities. Let's create something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
