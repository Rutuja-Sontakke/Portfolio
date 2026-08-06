import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#FFFEF9] via-[#FFF8DC] to-[#FAEBD7]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Animated Logo/Initials */}
        <motion.div
          className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[#D4AF37] to-[#B76E79] rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          RS
        </motion.div>

        {/* Loading Text */}
        <motion.h1
          className="text-3xl font-bold text-[#2C2C2C] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent">
            Rutuja Sontakke
          </span>
        </motion.h1>

        {/* Loading Bar */}
        <motion.div
          className="w-64 h-1 bg-[#F5F5DC] rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B76E79] rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.div>

        {/* Rotating Circle */}
        <motion.div
          className="mt-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-8 h-8 border-4 border-[#D4AF37] border-t-transparent rounded-full mx-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
